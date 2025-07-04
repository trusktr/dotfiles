# TODO try Vim mode for command line, https://github.com/jeffreytse/zsh-vi-mode !
#
# TODO notify-send alternative for macOS for OS-level terminal notifications.
# https://www.google.com/search?q=homebrew+notify-send
# https://formulae.brew.sh/formula/terminal-notifier

# Features

    installPulsarEditor=false
    installSlack=true
    installAdobe=false
    installGoogleDrive=false
    INSTALL_METEOR=false
    JAVA=false
    installGitKraken=false
    installBlender=true

    cloneCurrentProjects=true
    cloneOtherProjects=false

# tell the script to exit immediately on any error rather than continuing to
# the next command after the command with the error
set -e

# print each command being executed when debugging
# set -x

# tell the script to exit when you press ctrl-c
trap "exit" INT

# This is false in places like CI (f.e. GitHub Actions).
IS_INTERACTIVE=false
if tty -s; then IS_INTERACTIVE=true; fi

function quiet() {
    # run a command without any output
    "$@" &>/dev/null
}

function exists() {
    quiet command -v "$@"
}

function confirm() {
	echo "$@"
	if $IS_INTERACTIVE; then read -rp "Press enter/return to continue..."; fi
}

echo " >>>>>>>>>>>>>> Detecting environment."

unameResult=`uname`
isMacOS=false
if [[ "$unameResult" == 'Darwin' ]]; then isMacOS=true; fi
isLinux=false
if [[ "$unameResult" == 'Linux' ]]; then isLinux=true; fi

isPopOS=false
if echo $unameResult | grep pop-os; then isPopOS=true; fi

echo detect pacman

isArchLinux=false
if exists pacman; then isArchLinux=true; fi

echo detect apt

# detecting apt-get instead of apt because new macOS comes with an apt command
isDebianLike=false
if exists apt-get; then isDebianLike=true; fi

echo detect crouton

isChromeOSCrouton=false
if exists croutonversion; then isChromeOSCrouton=true; fi

isChromeOS=false # TODO

isWindows=false # TODO

# set up package management
    echo " >>>>>>>>>>>>>> Set up package management."

    if $isMacOS; then
        if ! exists brew; then
            /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

            echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> /Users/trusktr/.zprofile
            eval "$(/opt/homebrew/bin/brew shellenv)"
        fi
    fi

    if $isArchLinux; then
        # Set pacman up with the fastest servers.
        sudo pacman-mirrors --api --protocol https --fasttrack

        sudo pacman --sync --refresh --sysupgrade --noconfirm

        # TODO install pamac for the AUR (comes shipped by default with Manjaro Linux)
        # TODO is aura better? Re-evaluate AUR helpers out some time.
        # Maybe aura is better as we can tell it to have us look at each
        # PKGBUILD file before installing, to verify things look secure.

        # enable pamac AUR support
        sudo sed --in-place "s/#EnableAUR/EnableAUR/" "/etc/pamac.conf"
        sudo sed --in-place "s/#CheckAURUpdates/CheckAURUpdates/" "/etc/pamac.conf"
    fi

    if $isChromeOS; then
        wget -q -O - https://raw.github.com/skycocker/chromebrew/master/install.sh | bash
    fi

    if $isDebianLike; then
        # Pop_os comes with libreoffice. Remove it before upgrading so we don't waste time upgrading it just to remove it.
        sudo apt remove --yes `apt list --installed | grep libreoffice | cut -d / -f 1 | xargs`

        sudo apt update --yes
        sudo apt upgrade --yes
    fi

# Git
    echo " >>>>>>>>>>>>>> Get git."

    if $isMacOS; then
        brew install git
    fi

    if $isArchLinux; then
        sudo pacman --sync --noconfirm git
    fi

    if $isDebianLike; then
        sudo apt install --yes git
    fi

# Git LFS
    echo " >>>>>>>>>>>>>> Get git-lfs."

    # I currently need this for work stuff.
    if $isMacOS; then
        brew install git-lfs
    fi

    if $isArchLinux; then
        echo # sudo pacman --sync --noconfirm git-lfs
    fi

    if $isDebianLike; then
        echo # sudo apt install --yes git-lfs
    fi

# Clone dotfiles
    echo " >>>>>>>>>>>>>> Clone and link dotfiles"

    mkdir -p ~/src
    cd ~/src

    git clone --depth 1 --single-branch git@github.com:trusktr/dotfiles trusktr+dotfiles || true

# link dotfiles

    cd ~

    ln -sf ~/src/trusktr+dotfiles/home/.atom
    ln -sf ~/src/trusktr+dotfiles/home/.editorconfig
    ln -sf ~/src/trusktr+dotfiles/home/.git-template
    ln -sf ~/src/trusktr+dotfiles/home/.gitconfig
    ln -sf ~/src/trusktr+dotfiles/home/.jshintrc
    # ln -sf ~/src/trusktr+dotfiles/home/.npmrc # disabled for now because work installs nvm which controls ~/.npmrc (run work setup.sh first)
    ln -sf ~/src/trusktr+dotfiles/home/.Xmodmap
    ln -sf ~/src/trusktr+dotfiles/home/coffeelint.json

    mkdir -p ~/.local
    pushd ~/.local
    # this may pre-exist if we run work scripts first
    if ! [ -L bin ] && [ -d bin ]; then
        confirm 'There was already a ~/.local/bin folder. Replacing replacing with link to dotfiles, and moving content into the new link folder.'
        mv bin tmp
        ln -s ~/src/trusktr+dotfiles/home/.local/bin
        mv tmp/* bin/
        rmdir tmp
    else
        ln -sf ~/src/trusktr+dotfiles/home/.local/bin
    fi
    popd

    mkdir -p ~/.config
    cd ~/.config

    if $isMacOS; then
        ln -sf ~/src/trusktr+dotfiles/home/.config/karabiner
    fi

    if $isLinux; then
        ln -sf ~/src/trusktr+dotfiles/home/.config/alacritty

        if $isPopOS; then true;
        else
            rm -rf gtk-2.0
            ln -sf ~/src/trusktr+dotfiles/home/.config/gtk-2.0
            rm -rf gtk-3.0
            ln -sf ~/src/trusktr+dotfiles/home/.config/gtk-3.0
            rm -rf gtk-4.0
            ln -sf ~/src/trusktr+dotfiles/home/.config/gtk-4.0
        fi
    fi

    cd ~/src
    git clone git@github.com:trusktr/vim-sessions.git trusktr+vim-sessions || true
    cd ~
    ln -sf ~/src/trusktr+dotfiles/home/.vimrc
    mkdir -p ~/.config/nvim
    ln -sf ~/.vimrc ~/.config/nvim/init.vim
    mkdir -p ~/.vim
    ln -sf ~/src/trusktr+vim-sessions ~/.vim/session

    ### VS Code settings
        ## settings folder
            if $isMacOS; then
                mkdir -p ~/Library/Application\ Support/Code
                pushd ~/Library/Application\ Support/Code
                if [ -e User ]; then confirm 'Removing existing VS Code User/ folder and linking to dotfiles.'; fi
                rm -rf User/
                ln -s ~/src/trusktr+dotfiles/home/.config/Code/User
                popd
            fi

            if $isLinux; then
                # Different distros name the non-proprietary build of VS Code with different names.

                # For distros with proprietary VS Code
                mkdir -p ~/.config/Code
                pushd ~/.config/Code && ln -sf ~/src/trusktr+dotfiles/home/.config/Code/User && popd

                # For distros like NixOS that name the open-source version of VSCode VSCodium
                mkdir -p ~/.config/VSCodium
                pushd ~/.config/VSCodium && ln -sf ~/src/trusktr+dotfiles/home/.config/Code/User && popd

                # For distros like Manjaro that name the open-source version of VSCode "Code - OSS"
                mkdir -p ~/.config/"Code - OSS"
                pushd ~/.config/"Code - OSS" && ln -sf ~/src/trusktr+dotfiles/home/.config/Code/User && popd
            fi

            # TODO
            # if $isWindows

        ## extensions folder
            if $isMacOS || $isLinux; then
                # for proprietary VS Code
                if [ -e ~/.vscode ]; then confirm 'Removing existing ~/.vscode and linking to dotfiles.'; fi
                rm -rf ~/.vscode
                ln -s ~/src/trusktr+dotfiles/home/.vscode ~/.vscode
            fi

            if $isLinux; then
                # Both NixOS VSCodium and Manjaro "Code - OSS" look here
                ln -sf ~/src/trusktr+dotfiles/home/.vscode ~/.vscode-oss
            fi

            # TODO
            # if $isWindows
            # %USERPROFILE%\.vscode\extensions

# ZSH
    echo " >>>>>>>>>>>>>> Set up ZSH."

    cd ~/src
    git clone --branch v1.4.1 git@github.com:zsh-users/antigen.git zsh-users+antigen || true
    cd ~
    ln -sf ~/src/trusktr+dotfiles/home/.zshrc

    if $isMacOS; then
        brew install zsh || true
    fi

    if $isArchLinux; then
        sudo pacman --sync --noconfirm zsh
    fi

    if $isChromeOS; then
        crew install zsh
    fi

    if $isDebianLike; then
        sudo apt install --yes zsh
    fi

    # Set the default shell to zsh
    # TODO don't run if already set (f.e. for NixOS)
    command -v zsh | sudo tee -a /etc/shells
    sudo chsh -s "$(command -v zsh)" "${USER}"

# Clone common projects I work on
    echo " >>>>>>>>>>>>>> Clone common projects."

    mkdir -p ~/src
    pushd ~/src

    # LUME
    if $cloneCurrentProjects; then
        git clone --recursive git@github.com:lume/lume.git lume+lume || true
        # needed for lume/glas
        if $isMacOS; then
            brew install libpng
            brew install pkg-config
        fi

        git clone --recursive git@github.com:lume/create.git lume+create || true
        git clone --recursive git@github.com:lume/lume.community.git lume+lume.community || true
        git clone --recursive git@github.com:trusktr/bison-game.git trusktr+bison-game || true
        git clone --recursive git@github.com:tweenjs/tween.js.git tweenjs+tween.js || true
        git clone --recursive git@github.com:lumecraft/mapapp.git lumecraft+mapapp || true
        git clone --recursive git@github.com:trusktr/animation-loop.git trusktr+animation-loop || true
        git clone --recursive git@github.com:lume/generator-lume.git lume+generator-lume || true
        git clone --recursive git@github.com:trusktr/trusktr.io.git trusktr+trusktr.io || true
    fi

    # Other projects
    if $cloneOtherProjects; then
        git clone --recursive git@github.com:trusktr/at-at.git trusktr+at-at || true
        git clone --recursive git@github.com:trusktr/parametric.git trusktr+parametric || true
        git clone --recursive git@github.com:trusktr/regexr.git trusktr+regexr || true

        git clone --recursive git@github.com:trusktr/littlewargame-maps.git trusktr+littlewargame-maps || true

        git clone --recursive git@github.com:trusktr/meteor.git meteor+meteor || true
        git clone --recursive git@github.com:trusktr/three.js.git mrdoob+three.js || true

	# assemblyscript projects
        git clone --recursive git@github.com:aspkg/website.git aspkg+website || true
        git clone --recursive git@github.com:aspkg/ecmassembly.git aspkg+ecmassembly || true
        git clone --recursive git@github.com:aspkg/website.git aspkg+website || true
        git clone --recursive git@github.com:lume/asdom.git lume+asdom || true

        git clone --recursive git@github.com:felixmariotto/three-mesh-ui.git felixmariotto+three-mesh-ui || true
        git clone --recursive git@github.com:davedbase/solid-primitives.git davedbase+solid-primitives || true
    fi

    popd

echo " >>>>>>>>>>>>>> Install a bunch of stuff."

# direnv, for setting up env variables when entering directories. If in NixOS, useful with lorri.

    if $isMacOS; then
        brew install direnv
    fi

    if $isArchLinux; then
        pamac build --no-confirm direnv
    fi

# libnotify, I use it for notifying when processes have finished in terminal

    # TODO macOS

    if $isDebianLike; then
        sudo apt install --yes libnotify-bin
    fi

    # Already installed in Manjaro Linux

# tree, to show folder structure in the terminal

    if $isMacOS; then
        brew install tree
    fi

    if $isArchLinux; then
        sudo pacman --sync --noconfirm tree
    fi

# Python

    if $isMacOS; then
        brew install python
    fi

    if $isArchLinux; then
        sudo pacman --sync --noconfirm python
    fi

    if $isDebianLike; then
        sudo apt install --yes python
    fi

    if $isChromeOS; then
        crew install python
    fi

# Node.js

    if $isMacOS; then
        brew install node
    fi

    if $isArchLinux; then
        sudo pacman --sync --noconfirm nodejs
    fi

    if $isDebianLike; then
        sudo apt install --yes nodejs npm
        #sudo apt install --yes nodejs-legacy # if needed
    fi

    if $isChromeOS; then
        crew install nodejs
    fi

    # Get the latest npm and node
    # First update Node, in case a new npm would break on an older version of node.
    npm install --global n
    export N_PREFIX=~/.n-node-versions
    # This does nothing right now, as nvm manages node/npm for work (run work setup.sh first)
    export PATH=~/.npm-global/bin:$PATH # needed so that binaries installed are available for this script. After install, zshrc has this in PATH.
    n latest
    # Then update npm.
    npm install --global npm
    npm install --global npm # one more time in case the new npm improves the installation layout compared to the last one.

# Vim/Neovim

    if $isMacOS; then
        brew install libtool gettext # TODO why do we need these again?
        brew install neovim

        brew install vim
    fi

    if $isArchLinux; then
        sudo pacman --sync --noconfirm vim neovim
    fi

    if $isDebianLike; then
        sudo add-apt-repository --yes ppa:neovim-ppa/unstable
        sudo apt install --yes neovim
        sudo apt install --yes python3-dev python3-pip

        sudo apt install --yes vim
    fi

    if $isChromeOS; then
        echo # TODO: neovim for chromebrew
    fi

    # TODO some OSes have pip3, others pip2, and possibly not `pip` aliased. Detect them so we don't error out here.
    if $isArchLinux; then
        sudo pacman --sync --noconfirm python-pynvim
    else
        pip install --break-system-packages --user neovim || pip3 install --break-system-packages --user neovim
    fi

    # ripgrep and fzy, for fzf or ctrlp plugins
    # TODO: vimrc can also install this stuff, if it isn't detected to exist

        if $isDebianLike; then
            sudo apt install --yes ripgrep fzy
        fi

        # --- for neovim-fuzzy
        if $isMacOS; then
            brew install ripgrep
            brew install fzy
        fi

        if $isArchLinux; then
            sudo pacman --sync --noconfirm fzy ripgrep
        fi

    # fd for fzf.vim plugin

        if $isDebianLike; then
            sudo apt install --yes fd-find
        fi

        if $isMacOS; then
            brew install fd
        fi

        if $isArchLinux; then
            sudo pacman --sync --noconfirm fd
        fi

    # ChromeOS Crouton
    # TODO: Set up Go, then install croshclip so neovim can copy to to ChromeOS Clipboard
    # https://github.com/acornejo/croshclip

    # install plugins automatically
    nvim +PlugInstall +UpdateRemotePlugins '+qa!'

# Atom editor (atom.io)


    if $installPulsarEditor; then
        #TODO replace atom with pulsar
        if $isMacOS; then
            brew install homebrew/cask/atom
        fi

        if $isDebianLike; then
            # See https://flight-manual.atom.io/getting-started/sections/installing-atom/#debian-and-ubuntu-debapt
            curl -sL https://packagecloud.io/AtomEditor/atom/gpgkey | sudo apt-key add -
            sudo sh -c 'echo " >>>>>>>>>>>>>> deb [arch=amd64] https://packagecloud.io/AtomEditor/atom/any/ any main" > /etc/apt/sources.list.d/atom.list'
            sudo apt update --yes
            sudo apt install --yes atom # or atom-beta
        fi

        if $isArchLinux; then
            sudo pacman --sync --noconfirm atom
        fi
    fi

# Visual Studio Code (VS Code)

    if $isMacOS; then
        brew install --cask visual-studio-code
    fi

    if $isArchLinux; then
        sudo pacman --sync --noconfirm code # non-proprietary build
    fi

    if $isDebianLike; then
        sudo apt install --yes code # pop_os only, not Ubuntu
    fi

# Chrome

    # TODO a better way to install in macOS without popping open a window?
    if $isMacOS; then
        #brew install --cask google-chrome
        brew install --cask chromium
    fi

    if $isArchLinux; then
        sudo pacman --sync --noconfirm chromium
    fi

    if $isDebianLike; then
        sudo apt install --yes google-chrome-stable # pop_os only, not Ubuntu
    fi

    # If we're already in Chrome OS, well, uh....

# Firefox

    if $isMacOS; then
        brew install --cask firefox
    fi

    if $isArchLinux; then
        sudo pacman --sync --noconfirm firefox
    fi

    if $isDebianLike; then
        sudo apt install --yes firefox
    fi

# Edge

    if $isMacOS; then
        echo #brew install --cask microsoft-edge
    fi

    if $isArchLinux; then
        echo #TODO MS Edge for Linux with flatpak
    fi

    if $isDebianLike; then
        echo #TODO MS Edge for Linux with flatpak
    fi

# Opera

    # TODO a better way to install in macOS without popping open a window?
    if $isMacOS; then
        brew install opera
    fi

    # if $isArchLinux; then
        # sudo pacman --sync --noconfirm chromium
    # fi

    # if $isDebianLike; then
        # sudo apt install --yes google-chrome-stable # pop_os only, not Ubuntu
    # fi

# Slack


    if $installSlack; then
        if $isMacOS; then
            brew install --cask slack
        fi
    
        if $isArchLinux; then
            #pamac build --no-confirm slack-desktop
            echo # TODO install with flatpak
        fi
    
        if $isDebianLike; then
            sudo apt install --yes slack-desktop
        fi
    fi

# Meteor

    if $INSTALL_METEOR; then
        if ! exists meteor; then
            if $isLinux || $isMacOS; then
                    curl https://install.meteor.com/ | sh
            else
                npm install --global meteor
            fi
        fi
    fi

# Gimp

    if $isMacOS; then
        brew install --cask gimp
    fi

    if $isArchLinux; then
        sudo pacman --sync --noconfirm gimp
    fi

    if $isDebianLike; then
        sudo apt install --yes gimp
    fi

# Inkscape

    if $isMacOS; then
        brew install --cask inkscape
    fi

    if $isArchLinux; then
        sudo pacman --sync --noconfirm inkscape
    fi

    if $isDebianLike; then
        sudo apt install --yes inkscape
    fi

# inconsolata font

    if $isMacOS; then
        brew install --cask font-inconsolata-nerd-font
    fi

    if $isArchLinux; then
        pamac build --no-confirm nerd-fonts-inconsolata
    fi

    if $isDebianLike; then
        echo # TODO
    fi

# The amazing Space Mono font

    if $isMacOS; then
        brew install --cask font-space-mono
    fi

    if $isArchLinux; then
        pamac build --no-confirm ttf-spacemono
    fi

    if $isDebianLike; then
        echo # TODO install typecatcher or fontfinder, explained here https://linoxide.com/google-fonts-ubuntu/
    fi

# Adobe


    if $installAdobe; then
        if $isMacOS; then
            brew install --cask adobe-creative-cloud
            open '/usr/local/Caskroom/adobe-creative-cloud/latest/Creative Cloud Installer.app'
        fi
    fi

# Google Drive Backup and Sync


    if $installGoogleDrive; then
        if $isMacOS; then
            brew install --cask google-backup-and-sync
        fi
    fi

# Meld, diff tool

    if $isMacOS; then
        brew install --cask meld
    fi

    if $isArchLinux; then
        sudo pacman --sync --noconfirm meld
    fi

    if $isDebianLike; then
        sudo apt install --yes meld
    fi

# Haiku Animator

    if $isMacOS; then
        echo # TODO Install Haiku from DMG
    fi

    if $isArchLinux; then
        echo # TODO not on Linux yet
    fi

    if $isWindows; then
        echo # TODO not on Windows yet
    fi

# xvfb (for headless X11 emulation, f.e. to run Karma+Electron headlessly)

    if $isMacOS; then
        echo # not needed, Mac supports X
    fi

    if $isDebianLike; then
        sudo apt install --yes xvfb
    fi

    if $isArchLinux; then
        # TODO this provides the xvfb-run command. What about the Xvfb command
        # like in other distros? Is that the same? F.e. "xvfb" package in
        # Ubuntu.
        sudo pacman --sync --noconfirm xorg-server-xvfb
    fi

# Java

    if $JAVA; then

        if $isMacOS; then
            # latest version, as `java` command
            brew install --cask java

            # version 8, as `java8` command
            brew tap caskroom/versions
            brew install --cask java8
            sudo ln -sf /Library/Java/JavaVirtualMachines/jdk1.8.0_202.jdk/Contents/Home/bin/java ~/.local/bin/java8
        fi

        if $isArchLinux; then
            # TODO do we need Java 8 for mapper stuff?
            sudo pacman --sync --noconfirm jre-openjdk
        fi

    fi

#### Git GUIs

    # GitKraken

        if $installGitKraken; then

            if $isMacOS; then
                brew install --cask gitkraken
            fi

            if $isArchLinux; then
                pamac build --no-confirm gitkraken
            fi

            if $isDebianLike; then
                wget https://release.gitkraken.com/linux/gitkraken-amd64.deb
                sudo dpkg -i gitkraken-amd64.deb || true
                rm gitkraken-amd64.deb
            fi

        fi

# Spotify

    # Obsolete: Get the PWA web app.

# htop, bashtop

    if $isMacOS; then
        echo # brew install htop
    fi

    if $isArchLinux; then
        sudo pacman --sync --noconfirm htop
    fi

    if $isDebianLike; then
        sudo apt install --yes htop bashtop
    fi

# Blender (blender.org)

    if $installBlender; then
        if $isMacOS; then
            brew install --cask blender
        fi

        if $isArchLinux; then
            sudo pacman --sync --noconfirm blender
        fi

        if $isDebianLike; then
            sudo apt install --yes blender
        fi
    fi

# Watchman (installing this prevents problems with programs that watch for file
# changes, see https://github.com/facebook/create-react-app/issues/4540)

    if $isMacOS; then
        brew install watchman
    fi

    if $isArchLinux; then
        sudo pacman --sync --noconfirm watchman
    fi

    if $isDebianLike; then
        sudo apt install --yes watchman
    fi

# enable or install `locate` command

    if $isMacOS; then
        sudo launchctl load -w /System/Library/LaunchDaemons/com.apple.locate.plist
    fi

    if $isArchLinux; then
        sudo pacman --sync --noconfirm mlocate
    fi

    if $isDebianLike; then
        sudo apt install --yes mlocate
    fi

# Linux Only

    if $isLinux; then

        # Increase the number of filesystem watchers allowed. See https://code.visualstudio.com/docs/setup/linux#_visual-studio-code-is-unable-to-watch-for-file-changes-in-this-large-workspace-error-enospc
        if $isArchLinux; then
            # For Arch see https://gist.github.com/tbjgolden/c53ca37f3bc2fab8c930183310918c8c
            echo
        else
            sudo cat fs.inotify.max_user_watches=524288 >> /etc/sysctl.conf
            sudo sysctl -p
        fi

        if $isArchLinux; then
            sudo pacman --sync --noconfirm gestures
        fi

        # Gnome Tweak Tool, for additional settings.

            if $isArchLinux; then
                sudo pacman --sync --noconfirm gnome-tweaks
            fi

            if $isDebianLike; then
                sudo apt install --yes gnome-tweak-tool
            fi

        # Add my user to the input group
        # TODO needed for Pop_os? Needed for Manjaro? Needs a conditional.
        # if $isLinux; then
        #     sudo usermod --append --groups=input `whoami`
        # fi

        # Gnome Settings

            dconf load / <<- GNOME_SETTINGS

            [org/gnome/desktop/input-sources]
            xkb-options=['ctrl:swapcaps']

            [org/gnome/desktop/interface]
            clock-show-weekday=true
            enable-hot-corners=true
            show-battery-percentage=true

            [org/gnome/desktop/peripherals/mouse]
            natural-scroll=true

            [org/gnome/desktop/peripherals/touchpad]
            disable-while-typing=false
            natural-scroll=true
            speed=0.33823529411764697

            [org/gnome/desktop/wm/preferences]
            button-layout='appmenu:minimize,maximize,close'
            resize-with-right-button=false
            visual-bell=true

            [org/gnome/settings-daemon/plugins/power]
            power-button-action='suspend'
            sleep-inactive-ac-timeout=2700
            sleep-inactive-ac-type='suspend'
            sleep-inactive-battery-timeout=900
            sleep-inactive-battery-type='suspend'

            [org/gnome/nautilus/icon-view]
            captions=['size', 'date_modified', 'none']

            [org/gnome/nautilus/list-view]
            default-zoom-level='small'
            use-tree-view=true

            [org/gnome/nautilus/preferences]
            default-folder-viewer='list-view'

GNOME_SETTINGS

            if $isPopOS; then
                dconf load / <<- POP_OS_SETTINGS

                [org/gnome/shell]
                disabled-extensions=['pop-cosmic@system76.com', 'cosmic-workspaces@system76.com', 'cosmic-dock@system76.com']
                favorite-apps=@as []

                [org/gnome/shell/extensions/dash-to-dock]
                click-action='minimize-or-previews'
                dash-max-icon-size=128
                dock-fixed=false
                intellihide=true

                [org/gnome/shell/extensions/pop-shell]
                active-hint=true

POP_OS_SETTINGS
            fi
    fi

# macOS Only


    if $isMacOS; then

        # GNU Coreutils (prefixed with g in OSX, already present in Linux)

            brew install coreutils

        # iTerm

            brew install --cask iterm2

        # Karabiner Elements (keyboard remapping for macOS)

            brew install --cask karabiner-elements
            open /Applications/Karabiner-Elements.app

        # XQuartz (X11 for macOS)

            brew install --cask xquartz

        # Kap, screen capture for macOS

            brew install --cask kap

        # blueznooze turns off bluetooth on sleep, because Apple thinks people shouldn't be able to do that

            brew install bluesnooze

        # OS X settings

            # set default system and app preferences
            curl https://raw.githubusercontent.com/trusktr/dotfiles/master/scripts/macOSPrefs.sh | sh

    fi

# Work stuff

    # .......

# cleanup

    if $isDebianLike; then
        sudo apt autoremove --yes
    fi

echo
echo ' --- Setup complete! ---'
echo

