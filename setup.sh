# tell the script to exit immediately on any error rather than continuing to
# the next command after the command with the error
set -e

# tell the script to exit when you press ctrl-c
trap "exit" INT

function quiet() {
    "$@" &>/dev/null
}

function exists() {
    quiet command -v "$@"
}

echo " >>>>>>>>>>>>>> Detecting environment."

itExists=false
if exists ls; then itExists=true; fi

INSTALL_METEOR=true
INSTALL_WORK_STUFF=true
JAVA=false

result=`uname`
isMacOS=false
if [[ "$result" == 'Darwin' ]]; then isMacOS=true; fi
isLinux=false
if [[ "$result" == 'Linux' ]]; then isLinux=true; fi

echo detect pacman

isArchLinux=false
if exists pacman; then isArchLinux=true; fi

echo detect apt-get

isUbuntu=false
if exists apt-get; then isUbuntu=true; fi

echo detect crouton

isChromeOSCrouton=false
if exists croutonversion; then isChromeOSCrouton=true; fi

isChromeOS=false # TODO

isWindows=false # TODO

# set up package management
    echo " >>>>>>>>>>>>>> Set up package management."

    if $isMacOS; then
        if ! exists brew; then
            /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
        fi
        brew tap homebrew/cask # add community packages
        brew tap homebrew/cask-fonts # add community fonts
    fi

    if $isArchLinux; then
        sudo pacman --sync --refresh --sysupgrade
        # TODO install pamac for the AUR (comes shipped by default with Manjaro Linux)
        # TODO is aura better? Re-evaluate AUR helpers out some time.
        # Maybe aura is better as we can tell it to have us look at each
        # PKGBUILD file before installing, to verify things look secure.
    fi

    if $isChromeOS; then
        wget -q -O - https://raw.github.com/skycocker/chromebrew/master/install.sh | bash
    fi

    if $isUbuntu; then
      echo " >>>>>>>>>>>>>>  ------------------------- APT-GET "
        sudo apt-get update
    fi

# Git
    echo " >>>>>>>>>>>>>> Get git."

    if $isMacOS; then
        brew install git
    fi

    if $isArchLinux; then
        sudo pacman --sync --noconfirm git
    fi

    if $isUbuntu; then
        sudo apt-get install git
    fi

# Clone dotfiles
# TODO see about managing dotfiles with nix home-manager on all platforms?
# TODO: consolidate into single repo.
    echo " >>>>>>>>>>>>>> Clone and link dotfiles"

    mkdir -p ~/src
    cd ~/src

    git clone git@github.com:trusktr/dotfiles trusktr+dotfiles
    git clone --recursive git@github.com:trusktr/dotfiles2 trusktr+dotfiles2

# link dotfiles

    cd ~

    ln -sf ~/src/trusktr+dotfiles/home/coffeelint.json
    ln -sf ~/src/trusktr+dotfiles/home/.gitignore
    ln -sf ~/src/trusktr+dotfiles/home/.gitconfig
    ln -sf ~/src/trusktr+dotfiles/home/.editorconfig
    ln -sf ~/src/trusktr+dotfiles/home/.jshintrc
    ln -sf ~/src/trusktr+dotfiles/home/.Xmodmap
    ln -sf ~/src/trusktr+dotfiles/home/.atom
    ln -sf ~/src/trusktr+dotfiles/home/.npmrc

    mkdir -p ~/.local
    ln -sf ~/src/trusktr+dotfiles/home/.local/bin .local/bin

    mkdir -p ~/.config
    cd ~/.config

    if $isMacOS; then
        ln -sf ~/src/trusktr+dotfiles/home/.config/karabiner
    fi

    if $isLinux; then
        ln -sf ~/src/trusktr+dotfiles/home/.config/alacritty
        ln -sf ~/src/trusktr+dotfiles/home/.config/dconf
        ln -sf ~/src/trusktr+dotfiles/home/.config/gtk-2.0
        ln -sf ~/src/trusktr+dotfiles/home/.config/gtk-3.0
        ln -sf ~/src/trusktr+dotfiles/home/.config/gtk-4.0
    fi

    cd ~/src
    git clone trusktr@trusktr.io:~/src/trusktr+vim-sessions
    cd ~
    ln -sf ~/src/trusktr+dotfiles2/.vimrc/.vimrc
    mkdir -p ~/.config/nvim
    ln -sf ~/.vimrc ~/.config/nvim/init.vim
    mkdir -p ~/.vim
    ln -sf ~/src/trusktr+vim-sessions ~/.vim/session

    ### VS Code settings
        ## settings folder
            if $isMacOS; then
                mkdir -p ~/Library/Application\ Support/Code
                ln -sf ~/src/trusktr+dotfiles/home/.config/Code/User ~/Library/Application\ Support/Code/User
            fi

            if $isLinux; then
                # Different distros name the non-proprietary build of VS Code with different names.

                # For distros with proprietary VS Code
                mkdir -p ~/.config/Code
                ln -sf ~/src/trusktr+dotfiles/home/.config/Code/User ~/.config/Code/User
                # For distros like NixOS that name the open-source version of VSCode VSCodium
                mkdir -p ~/.config/VSCodium
                ln -sf ~/src/trusktr+dotfiles/home/.config/Code/User ~/.config/VSCodium/User
                # For distros like Manjaro that name the open-source version of VSCode "Code - OSS"
                mkdir -p ~/.config/"Code - OSS"
                ln -sf ~/src/trusktr+dotfiles/home/.config/Code/User ~/.config/"Code - OSS"/User
            fi

            # TODO
            # if $isWindows

        ## extensions folder
            if $isMacOS || $isLinux; then
                # for proprietary VS Code
                ln -sf ~/src/trusktr+dotfiles/home/.vscode ~/.vscode
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
    git clone --branch v1.4.1 git@github.com:zsh-users/antigen.git zsh-users+antigen
    cd ~
    ln -sf ~/src/trusktr+dotfiles2/.zshrc

    if $isMacOS; then
        brew install zsh
    fi

    if $isArchLinux; then
        sudo pacman --sync --noconfirm zsh
    fi

    if $isChromeOS; then
        crew install zsh
    fi

    if $isUbuntu; then
        sudo apt-get install zsh
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
    git clone --recursive git@github.com:infamous/umbrella.git lume+umbrella
    # TODO move the rest into lume+umbrella
    git clone git@github.com:infamous/glas.git infamous+glas
    git clone git@github.com:infamous/generator-lume.git infamous+generator-lume
    git clone git@github.com:infamous/custom-attributes.git infamous+custom-attributes

    # Other personal projects
    git clone git@github.com:trusktr/animation-loop.git trusktr+animation-loop
    git clone git@github.com:trusktr/at-at.git trusktr+at-at
    git clone git@github.com:trusktr/parametric.git trusktr+parametric
    git clone git@github.com:trusktr/regexr.git trusktr+regexr
    git clone git@github.com:trusktr/trusktr.io.git trusktr+trusktr.io

    # Projects I contribute to
    git clone git@github.com:trusktr/meteor.git meteor+meteor
    git clone git@github.com:trusktr/three.js.git mrdoob+three.js
    git clone git@github.com:trusktr/harp.gl-meteor.git trusktr+sk8earth-harp

    popd

echo " >>>>>>>>>>>>>> Install a bunch of stuff."

# direnv, for setting up env variables when entering directories. If in NixOS, useful with lorri.

    if $isArchLinux; then
        pamac build --no-confirm direnv
    fi

# libnotify, I use it for notifying when processes have finished in terminal

    # TODO macOS

    if $isUbuntu; then
        sudo apt-get install libnotify-bin
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
        brew install python@2
        #ln -sf /usr/local/bin/python2 /usr/local/bin/python
    fi

    if $isArchLinux; then
        sudo pacman --sync --noconfirm python
    fi

    if $isUbuntu; then
        sudo apt-get install python
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

    if $isUbuntu; then
        sudo apt-get install nodejs npm
        #sudo apt-get install nodejs-legacy # if needed
    fi

    if $isChromeOS; then
        crew install nodejs
    fi

# Vim/Neovim

    if $isMacOS; then
        brew install libtool gettext # TODO why do we need these again?
        brew install neovim

        brew install vim
    fi

    if $isArchLinux; then
        sudo pacman --sync --noconfirm vim neovim
    fi

    if $isUbuntu; then
        # sudo apt-get install software-properties-common # on older Ubuntus
        sudo add-apt-repository ppa:neovim-ppa/stable
        sudo apt-get install neovim
        sudo apt-get install python-dev python-pip python3-dev python3-pip

        sudo apt-get install vim
    fi

    if $isChromeOS; then
        echo # TODO: neovim for chromebrew
    fi

    # TODO some OSes have pip3, others pip2, and possibly not `pip` aliased. Detect them so we don't error out here.
    if $isArchLinux; then
            sudo pacman --sync --noconfirm python-pynvim
    else
        pip install neovim
    fi

    # ripgrep and fzy, for fzf or ctrlp plugins
    # TODO: vimrc can also install this stuff, if it isn't detected to exist

        if $isUbuntu; then
            sudo add-apt-repository ppa:x4121/ripgrep
            sudo apt-get update
            sudo apt-get install ripgrep

            wget https://github.com/jhawthorn/fzy/releases/download/0.9/fzy_0.9-1_amd64.deb
            sudo dpkg -i fzy_0.9-1_amd64.deb
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

        if $isUbuntu; then
            wget https://github.com/sharkdp/fd/releases/download/v7.0.0/fd-musl_7.0.0_amd64.deb
            sudo dpkg -i fd-musl_7.0.0_amd64.deb
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

    # oni vim
    # TODO other OSes. For now just macOS.
    if $isMacOS; then
        brew cask install oni
        mkdir -p ~/.oni
        ln -sf ~/src/trusktr+dotfiles/home/.oni/config.js ~/.oni/config.js
    fi

# Atom editor (atom.io)

    if $isMacOS; then
        brew install homebrew/cask/atom
    fi

    if $isUbuntu; then
        curl -sL https://packagecloud.io/AtomEditor/atom/gpgkey | sudo apt-key add -
        sudo sh -c 'echo " >>>>>>>>>>>>>> deb [arch=amd64] https://packagecloud.io/AtomEditor/atom/any/ any main" > /etc/apt/sources.list.d/atom.list'
        sudo apt-get update
        sudo apt-get install atom # or atom-beta
    fi

    if $isArchLinux; then
        sudo pacman --sync --noconfirm atom
    fi

# Visual Studio Code (VS Code)

    if $isMacOS; then
        brew cask install visual-studio-code
    fi

    if $isArchLinux; then
        sudo pacman --sync --noconfirm code # non-proprietary build
    fi

# Chrome

    # TODO a better way to install in macOS without popping open a window?
    if $isMacOS; then
        brew cask install google-chrome
    fi

    if $isArchLinux; then
        sudo pacman --sync --noconfirm chromium
    fi

    # If we're already in Chrome OS, well, uh....

# Firefox

    if $isMacOS; then
        brew cask install firefox
    fi

    if $isArchLinux; then
        sudo pacman --sync --noconfirm firefox
    fi

    if $isUbuntu; then
        sudo apt-get install firefox
    fi

# Edge
    if $isMacOS; then
        brew cask install microsoft-edge-dev
    fi

    if $isArchLinux; then
        echo #TODO MS Edge is not released for Linux yet
    fi

# Slack

    if $isMacOS; then
        brew install homebrew/cask/slack
    fi

    if $isArchLinux; then
        pamac build --no-confirm slack-desktop
    fi

# Meteor

    if $INSTALL_METEOR; then
        curl https://install.meteor.com/ | sh
    fi

# Gimp

    if $isMacOS; then
        brew cask install gimp
    fi

    if $isArchLinux; then
        sudo pacman --sync --noconfirm gimp
    fi

    if $isUbuntu; then
        sudo apt-get install gimp
    fi

# inconsolata font

    if $isMacOS; then
        brew cask install font-inconsolata-nerd-font-mono
    fi

    if $isArchLinux; then
        pamac build --no-confirm nerd-fonts-inconsolata
    fi

    if $isUbuntu; then
        echo # TODO
    fi

# The amazing Space Mono font

    if $isMacOS; then
        brew cask install font-space-mono
    fi

    if $isArchLinux; then
        pamac build --no-confirm ttf-spacemono
    fi

    if $isUbuntu; then
        echo # TODO
    fi

# Adobe

    if $isMacOS; then
        brew cask install adobe-creative-cloud
        open '/usr/local/Caskroom/adobe-creative-cloud/latest/Creative Cloud Installer.app'
    fi

# Google Drive Backup and Sync

    if $isMacOS; then
        brew cask install google-backup-and-sync
    fi

# Meld, diff tool

    if $isMacOS; then
        brew cask install meld
    fi
    
    if $isArchLinux; then
        sudo pacman --sync --noconfirm meld
    fi

# Haiku.ai

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

    if $isUbuntu; then
        sudo apt-get install xvfb
    fi

    if $isArchLinux; then
        # TODO this provides the xvfb-run command. What about the Xvfb command
        # like in other distros? Is that the same? F.e. "xvfb" package in
        # Ubuntu.
        sudo pacman --sync --noconfirm xorg-server-xvfb
    fi

# Java

    if $INSTALL_WORK_STUFF || $JAVA; then

        if $isMacOS; then
            # latest version, as `java` command
            brew cask install java

            # version 8, as `java8` command
            brew tap caskroom/versions
            brew cask install java8
            sudo ln -sf /Library/Java/JavaVirtualMachines/jdk1.8.0_202.jdk/Contents/Home/bin/java ~/.local/bin/java8
        fi

        if $isArchLinux; then
            # TODO do we need Java 8 for mapper stuff?
            sudo pacman --sync --noconfirm jre-openjdk
        fi

    fi

#### Git GUIs

    # GitKraken

        if $isMacOS; then
            brew cask install gitkraken
        fi

        if $isArchLinux; then
            pamac build --no-confirm gitkraken
        fi

# Spotify

    if $isMacOS; then
        brew cask install spotify
    fi

    if $isArchLinux; then
        pamac build --no-confirm spotify
    fi

# htop

    if $isMacOS; then
        brew install htop
    fi

    if $isArchLinux; then
        sudo pacman --sync --noconfirm htop
    fi

# Blender (blender.org)

    if $isMacOS; then
        brew cask install blender
    fi

    if $isArchLinux; then
        sudo pacman --sync --noconfirm blender
    fi

# Watchman (installing this prevents problems with programs that watch for file
# changes, see https://github.com/facebook/create-react-app/issues/4540)

    if $isMacOS; then
        brew install watchman
    fi

    if $isArchLinux; then
        sudo pacman --sync --noconfirm watchman
    fi

# enable or install `locate` command

    if $isMacOS; then
        sudo launchctl load -w /System/Library/LaunchDaemons/com.apple.locate.plist
    fi

    if $isArchLinux; then
        sudo pacman --sync --noconfirm mlocate
    fi

# Alacritty Terminal Emulator

    if $isArchLinux; then
        sudo pacman --sync --noconfirm alacritty
    fi

# Linux Only

    if $isArchLinux; then
        sudo pacman --sync --noconfirm gestures
    fi

# macOS Only

    # GNU Coreutils (prefixed with g in OSX, already present in Linux)

        if $isMacOS; then
            brew install coreutils
        fi

    # iTerm

        if $isMacOS; then
            brew install homebrew/cask/iterm2
        fi

    # Karabiner Elements (keyboard remapping for macOS)

        if $isMacOS; then
            brew cask install karabiner-elements
            open /Applications/Karabiner-Elements.app
        fi

    # XQuartz (X11 for macOS)

        if $isMacOS; then
            brew cask install xquartz
        fi

    # SkyFonts (sync Google Fonts to your system)

        if $isMacOS; then
            brew cask install skyfonts
            # TODO we can't hard code the version, because it changes
            open '/usr/local/Caskroom/skyfonts/5.9.2.1/Install SkyFonts.app'
        fi

    # Kap, screen capture for macOS

        if $isMacOS; then
            brew cask install kap
        fi

    # OS X settings

        if $isMacOS; then

            # set default system and app preferences
            curl https://raw.githubusercontent.com/trusktr/dotfiles/master/scripts/macOSPrefs.sh | sh

        fi

# mapper.ai stuff

    if $INSTALL_WORK_STUFF; then
        echo " >>>>>>>>>>>>>> Install Velodyne stuff."

        if $isMacOS; then
            brew cask install docker
            brew cask install kitematic # to manage docker images
            brew cask install virtualbox # to run docker VMs in
            brew install awscli
            brew cask install sketch
            brew cask install microsoft-teams

            # for building node zmq package
            brew install pkg-config
            brew install zeromq

            # needed for Perception
            brew install cmake

            # Mapper Cloud Services
            brew install kotlin
            brew cask install oracle-jdk # different than java and java8 packages?

            brew install protobuf
        fi

        if $isArchLinux; then
            sudo pacman --sync --noconfirm docker virtualbox aws-cli zeromq pkg-config cmake kotlin protobuf
            pamac build --no-confirm kitematic zoom
        fi

        mkdir -p ~/src
        pushd ~/src

        git clone git@bitbucket.org:velodyne_sw/autodrive.git velodyne_sw+autodrive
        git clone git@bitbucket.org:velodyne_sw/mapper-cloud-config.git velodyne_sw+mapper-cloud-config
        git clone git@bitbucket.org:velodyne_sw/mapper-cloud-services.git velodyne_sw+mapper-cloud-services
        git clone git@bitbucket.org:velodyne_sw/mapper-meridian.git velodyne_sw+mapper-meridian
        git clone git@bitbucket.org:velodyne_sw/mapper-public-website.git velodyne_sw+mapper-public-website
        git clone git@bitbucket.org:velodyne_sw/mapper-replay.git velodyne_sw+mapper-replay
        git clone git@bitbucket.org:velodyne_sw/mapper-saffron.git velodyne_sw+mapper-saffron
        git clone git@bitbucket.org:velodyne_sw/perception.git velodyne_sw+perception
        git clone git@bitbucket.org:velodyne_sw/vella-data-models.git velodyne_sw+vella-data-models
        git clone git@bitbucket.org:velodyne_sw/vella-frontend-projects.git velodyne_sw+autodrive --recursive
        git clone git@bitbucket.org:velodyne_sw/vella-object-detection.git velodyne_sw+vella-object-detection
        git clone git@bitbucket.org:velodyne_sw/vella-offline-data-processing.git velodyne_sw+vella-offline-data-processing
        git clone git@bitbucket.org:velodyne_sw/vellaviz.git velodyne_sw+vellaviz

        popd

    fi

echo
echo ' --- Setup complete! ---'
echo

# TODO WINDOWS:
#   - X11 Approach:
#     - X11 server: https://sourceforge.net/projects/vcxsrv/
#     - Install X11 server and desktop environment to use Ubuntu GUI apps, see
#       the following for a guide on getting GUI apps running in WSL:
#       https://github.com/QMonkey/wsl-tutorial
#   - Install various other Windows stuff automatically using OneGet (AKA PackageManager).
#   - Use the official Windows package mananager "OneGet" to install windows
#     stuff. See how to use it with the Chocolatey package registry:
#     https://www.reddit.com/r/sysadmin/comments/4gqq6q/add_chocolatey_repo_to_windows_10/
#   - Customizing PowerShell prompt: https://hodgkins.io/ultimate-powershell-prompt-and-git-setup
#   - If there's any problems updating apt-get registry cache, see https://github.com/Microsoft/WSL/issues/640
#
# PowerShell steps using OneGet:
#   Install-PackageProvider Chocolatey -Force
#   Install-Package Nodejs
#   # etc..., I didn't have much luck with it.
#
# PowerShell steps using Chocolatey (works better):
#   Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Force # run this line on new systems, default is "Restricted", skip if needed
#   iwr https://chocolatey.org/install.ps1 -UseBasicParsing | iex
#   # restart powershell so that choco command is available
#   choco install -y nodejs
#   choco install -y atom
#   choco install -y git
#   choco install -y nvim
#   choco install -y git -params '"/GitAndUnixToolsOnPath"'
#   choco install -y conemu
#
#   Install-PackageProvider NuGet -Force
#   Set-PSRepository -Name PSGallery -InstallationPolicy Trusted
#   Install-Module posh-git
#
# Link stuff
#   cmd /c mklink /d $HOME\.atom $HOME\src\trusktr+dotfiles1\.atom
