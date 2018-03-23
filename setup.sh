# set up package management

    # if Mac OS X
    #/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

    # if Arch Linux
    #sudo pacman -Sy

    # if ChromeOS
    #wget -q -O - https://raw.github.com/skycocker/chromebrew/master/install.sh | bash

# Git
# TODO: separate into separate file, source if OS X.

    # if Mac OS X
    #brew install git

    # if Arch Linux
    #sudo pacman -S git

    # Ubuntu
    #sudo apt-get install git

# libnotify (Windows Bash / Ubuntu)
#sudo apt-get install libnotify-bin

# Python
    #brew install python
    #ln -s /usr/local/bin/python2 /usr/local/bin/python

    #sudo pacman -S python
    #sudo apt-get install python
    #crew install python

# Node.js
    #brew install nodejs
    #sudo pacman -S nodejs
    #sudo apt-get install nodejs nodejs-legacy npm
    #crew install nodejs

# macOS only: GNU Coreutils (prefixed with g in OSX, already present in Linux)
    #brew install coreutils

# Clone dotfiles
# TODO: consolidate into single repo.
    mkdir -p ~/src
    cd ~/src
    #git clone trusktr@trusktr.io:~/src/trusktr+dotfiles1
    git clone --recursive git@github.com:trusktr/dotfiles2 trusktr+dotfiles2

# link dotfiles
    cd ~
    ln -s ~/src/trusktr+dotfiles1/coffeelint.json
    ln -s ~/src/trusktr+dotfiles1/.gitignore
    ln -s ~/src/trusktr+dotfiles1/.gitconfig
    ln -s ~/src/trusktr+dotfiles1/.editorconfig
    ln -s ~/src/trusktr+dotfiles1/.jshintrc
    ln -s ~/src/trusktr+dotfiles2/.Xmodmap

    mkdir -p ~/.local
    cd ~/.local
    ln -s ~/src/trusktr+dotfiles1/.local/bin

# Vim/Neovim
    cd ~/src
    git clone trusktr@trusktr.io:~/src/trusktr+vim-sessions
    cd ~
    ln -s ~/src/trusktr+dotfiles2/.vimrc/.vimrc
    mkdir -p ~/.config/nvim
    ln -s ~/.vimrc ~/.config/nvim/init.vim
    mkdir -p ~/.vim
    ln -s ~/src/trusktr+vim-sessions ~/.vim/session

    #brew install libtool gettext
    #brew install neovim/neovim/neovim

    #sudo pacman -S neovim
    #TODO: neovim for chromebrew

    pip install neovim
    pip2 install neovim
    pip3 install neovim

    # things needed by Vim configuration
    # TODO: move to vimrc?
    # TODO: unable to install global NPM packages in ChromeOS, some permission problem
    sudo npm install -g jshint # use by neomake plugin.
    # --- for neovim-fuzzy
    #brew install ripgrep
    #brew install fzy
    # --- for fzf.vim
    #brew install fd

    # ChromeOS Crouton
    # TODO: Set up Go, then install croshclip so neovim can copy to to ChromeOS Clipboard
    # https://github.com/acornejo/croshclip

    # oni vim
    npm i -g oni # TODO there's a new OS-level package installer
    mkdir -p ~/.oni
    ln -s ~/src/trusktr+dotfiles1/.oni/config.js ~/.oni/config.js

# ZSH
    cd ~/src
    git clone --branch v1.4.1 git@github.com:zsh-users/antigen.git zsh-users+antigen
    cd ~
    ln -s ~/src/trusktr+dotfiles2/.zshrc
    #brew install zsh
    #sudo pacman -S zsh
    #crew install zsh
    #sudo apt-get install zsh

    # Run once:
    # TODO: detect if ran already. For now, check manually and enable if needed.
    command -v zsh | sudo tee -a /etc/shells
    sudo chsh -s "$(command -v zsh)" "${USER}"

# Chrome

    # if Mac OS X
    # TODO can probably be automated.
    #echo
    #echo " --- Install Chrome from chrome.google.com" # OS X
    #echo

    # if Arch Linux
    #sudo pacman -S chromium # Arch Linux

    # If Chrome OS, well, uh....

# Firefox
    #brew cask install firefox
    #sudo pacman -S firefox
    #sudo apt-get install firefox

# iTerm (OS X only)
    #brew install Caskroom/cask/iterm2

# Meteor
    #curl https://install.meteor.com/ | sh

# TODO: karabiner and seil for OS X (keybaord modifications)

# OS X settings (OS X only)
#defaults write -g ApplePressAndHoldEnabled -bool false
# TODO: iterm settings, etc

# Gimp
#brew cask install gimp
#sudo pacman -S gimp
#sudo apt-get install gimp
