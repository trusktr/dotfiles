INSTALL_METEOR=false

result=`uname`
isMacOS=false; if [[ "$result" == 'Darwin' ]]; then isMacOS=true; fi
isLinux=false; if [[ "$result" == 'Linux' ]]; then isLinux=true; fi

which pacman 2>/dev/null 1>/dev/null
result=$?
isArchLinux=false; if $( exit $result ); then isArchLinux=true; fi

which apt-get 2>/dev/null 1>/dev/null
result=$?
isUbuntu=false; if $( exit $result ); then isUbuntu=true; fi

which croutonversion 2>/dev/null 1>/dev/null
result=$?
isChromeOSCrouton=false; if $( exit $result ); then isChromeOSCrouton=true; fi

# TODO
$isChromeOS=false

# update package lists

    if $isArchLinux; then
        sudo pacman -Syu
    fi

    if $isUbuntu; then
        sudo apt-get update
    fi

# set up package management

    if $isMacOS; then
        /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
    fi

    if $isArchLinux; then
        sudo pacman -Sy
    fi

    if $isChromeOS; then
        wget -q -O - https://raw.github.com/skycocker/chromebrew/master/install.sh | bash
    fi

# Git

    if $isMacOS; then
        brew install git
    fi

    if $isArchLinux; then
        sudo pacman -S git
    fi

    if $isUbuntu; then
        sudo apt-get install git
    fi

# libnotify (Windows Bash / Ubuntu)

    if $isUbuntu; then
        sudo apt-get install libnotify-bin
    fi

# Python

    if $isMacOS; then
        brew install python
        #ln -s /usr/local/bin/python2 /usr/local/bin/python
    fi

    if $isArchLinux; then
        sudo pacman -S python
    fi

    if $isUbuntu; then
        sudo apt-get install python
    fi

    if $isChromeOS; then
        crew install python
    fi

# Node.js

    if $isMacOS; then
        brew install nodejs
    fi

    if $isArchLinux; then
        sudo pacman -S nodejs
    fi

    if $isUbuntu; then
        sudo apt-get install nodejs npm
        #sudo apt-get install nodejs-legacy # if needed
    fi

    if $isChromeOS; then
        crew install nodejs
    fi

# macOS only: GNU Coreutils (prefixed with g in OSX, already present in Linux)

    if $isMacOS; then
        brew install coreutils
    fi

# Clone dotfiles
# TODO: consolidate into single repo.

    mkdir -p ~/src
    cd ~/src

    git clone git@github.com:trusktr/dotfiles trusktr+dotfiles
    git clone --recursive git@github.com:trusktr/dotfiles2 trusktr+dotfiles2

# link dotfiles

    cd ~
    ln -s ~/src/trusktr+dotfiles/coffeelint.json
    ln -s ~/src/trusktr+dotfiles/.gitignore
    ln -s ~/src/trusktr+dotfiles/.gitconfig
    ln -s ~/src/trusktr+dotfiles/.editorconfig
    ln -s ~/src/trusktr+dotfiles/.jshintrc
    ln -s ~/src/trusktr+dotfiles/.Xmodmap

    mkdir -p ~/.local
    cd ~/.local
    ln -s ~/src/trusktr+dotfiles/.local/bin

# Vim/Neovim

    cd ~/src
    git clone trusktr@trusktr.io:~/src/trusktr+vim-sessions
    cd ~
    ln -s ~/src/trusktr+dotfiles2/.vimrc/.vimrc
    mkdir -p ~/.config/nvim
    ln -s ~/.vimrc ~/.config/nvim/init.vim
    mkdir -p ~/.vim
    ln -s ~/src/trusktr+vim-sessions ~/.vim/session

    if $isMacOS; then
        brew install libtool gettext
        brew install neovim/neovim/neovim
    fi

    if $isArchLinux; then
        sudo pacman -S neovim
    fi

    if $isUbuntu; then
        # sudo apt-get install software-properties-common # on older Ubuntus
        sudo add-apt-repository ppa:neovim-ppa/stable
        sudo apt-get install neovim
        sudo apt-get install python-dev python-pip python3-dev python3-pip
    fi

    if $isChromeOS; then
        # TODO: neovim for chromebrew
        echo
    fi

    # TODO some OSes have pip, others pip2. Detect them so we don't error out here.
    pip install neovim
    pip2 install neovim
    pip3 install neovim

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
            sudo pacman -S ripgrep
            sudo pacman -S fzy
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
            sudo pacman -S fd
        fi

    # use by neomake plugin.
    sudo npm install -g jshint

    # ChromeOS Crouton
    # TODO: Set up Go, then install croshclip so neovim can copy to to ChromeOS Clipboard
    # https://github.com/acornejo/croshclip

    # oni vim
    sudo npm i -g oni # TODO there's a new OS-level package installer
    mkdir -p ~/.oni
    ln -s ~/src/trusktr+dotfiles/.oni/config.js ~/.oni/config.js

# ZSH
    cd ~/src
    git clone --branch v1.4.1 git@github.com:zsh-users/antigen.git zsh-users+antigen
    cd ~
    ln -s ~/src/trusktr+dotfiles2/.zshrc

    if $isMacOS; then
        brew install zsh
    fi

    if $isArchLinux; then
        sudo pacman -S zsh
    fi

    if $isChromeOS; then
        crew install zsh
    fi

    if $isUbuntu; then
        sudo apt-get install zsh
    fi

    # Set the default shell to zsh
    # TODO don't run if already set
    command -v zsh | sudo tee -a /etc/shells
    sudo chsh -s "$(command -v zsh)" "${USER}"

# Chrome

    # TODO a better way to install in macOS without popping open a window?
    if $isMacOS; then
        curl https://dl.google.com/chrome/mac/stable/GGRO/googlechrome.dmg > googlechrome.dmg
        mountedDisk=$(hdiutil attach googlechrome.dmg | tail -n 1 | cut -d ' ' -f 1)
        sudo cp -r /Volumes/Google\ Chrome/Google\ Chrome.app /Applications/
        hdiutil detach "$mountedDisk"
        rm googlechrome.dmg
    fi

    if $isArchLinux; then
        sudo pacman -S chromium
    fi

    # If Chrome OS, well, uh....

# Firefox

    if $isMacOS; then
        brew cask install firefox
    fi

    if $isArchLinux; then
        sudo pacman -S firefox
    fi

    if $isUbuntu; then
        sudo apt-get install firefox
    fi

# iTerm (OS X only)

    if $isMacOS; then
        brew install Caskroom/cask/iterm2
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
        sudo pacman -S gimp
    fi

    if $isUbuntu; then
        sudo apt-get install gimp
    fi

# TODO: karabiner and seil for OS X (keybaord modifications)

# OS X settings

    if $isMacOS; then
        curl https://raw.githubusercontent.com/trusktr/dotfiles/master/scripts/macOSPrefs.sh | sh
    fi
