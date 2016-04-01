# set up package management

    # if Mac OS X
    /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

    # if Arch Linux
    #sudo pacman -Sy

# Git
# TODO: separate into separate file, source if OS X.

    # if Mac OS X
    brew install git

    # if Arch Linux
    #sudo pacman -S git

# Clone dotfiles
# TODO: consolidate into single repo.
    mkdir -p ~/src
    cd ~/src
    git clone trusktr@trusktr.io:~/src/trusktr+dotfiles1
    git clone trusktr@trusktr.io:~/src/trusktr+vim-sessions
    git clone --recursive git@github.com:trusktr/dotfiles trusktr+dotfiles2

# Miscellaneous dotfiles
    cd ~
    ln -s ~/src/trusktr+dotfiles1/.gitignore
    ln -s ~/src/trusktr+dotfiles1/.gitconfig
    ln -s ~/src/trusktr+dotfiles1/.editorconfig
    ln -s ~/src/trusktr+dotfiles1/.jshintrc

# Python
    brew install python
    #pacman -S python

# Vim/Neovim
    cd ~
    ln -s ~/src/trusktr+dotfiles2/.vimrc/.vimrc
    mkdir -p ~/.vim
    ln -s ~/src/trusktr+vim-sessions ~/.vim/session
    mkdir -p ~/.config/nvim
    ln -s ~/.vimrc ~/.config/nvim/init.vim

    brew install neovim/neovim/neovim
    #pacman -S neovim

    pip install neovim

# ZSH
    git clone git@github.com:zsh-users/antigen.git zsh-users+antigen
    ln -s ~/src/trusktr+dotfiles2/.zshrc
    brew install zsh
    #sudo pacman -S zsh

    # Run once:
    # TODO: detect if ran already.
    command -v zsh | sudo tee -a /etc/shells
    sudo chsh -s "$(command -v zsh)" "${USER}"

# GNU Coreutils (prefixed with g in OSX, already present in Linux)
    brew install coreutils

# Node.js
    brew install nodejs
    #sudo pacman -S nodejs

# Chrome

    # TODO can probably be automated.
    echo
    echo " --- Install Chrome from chrome.google.com" # OS X
    echo

    #pacman -S chromium # Arch Linux

# Meteor
    curl https://install.meteor.com/ | sh
    sudo npm install -g mgp

# TODO: karabiner and seil for OS X (keybaord modifications)
