## start an nvim terminal if we're not in nvim.
#if [[ -z $NVIM_LISTEN_ADDRESS ]]; then
    ##export NVIM_TUI_ENABLE_TRUE_COLOR=1
    #exec nvim +term
#fi
which croutonversion 2>/dev/null 1>/dev/null
result=$?
isChromeOS="false"; if $( exit $result ); then isChromeOS="true"; fi

mapperAI=false

# TODO get these variables from a common place
which nixos-version 2>/dev/null 1>/dev/null
result=$?
isNixOS=false; if $( exit $result ); then isNixOS=true; fi

result=`uname`
isMacOS=false
if [[ "$result" == 'Darwin' ]]; then isMacOS=true; fi
isLinux=false
if [[ "$result" == 'Linux' ]]; then isLinux=true; fi

# unlimited core dump size.
ulimit -c unlimited

# BEGIN ANTIGEN PLUGIN MANAGEMENT <3
    mkdir -p $HOME/.antigen/repos
    ln -s ~/.zshrc $HOME/.antigen/repos/.zshrc 2>/dev/null
    export ZDOTDIR=$HOME/.antigen/repos
    source ~/src/zsh-users+antigen/antigen.zsh

    # OH-MY-ZSH SETTINGS (Define these before loading oh-my-zsh or it won't work)
        COMPLETION_WAITING_DOTS="true"

    # OH-MY-ZSH BUNDLES
        antigen use oh-my-zsh # load oh-my-zsh
        #antigen bundle svn
        # antigen bundle git
        antigen bundle git-extras
        # antigen bundle github
        #antigen bundle coffee # Coffee.js completion
        #antigen bundle colored-man # colored man pages
        antigen bundle command-not-found # Guess what to install when running an unknown command
        antigen bundle extract # Helper for extracting different types of archives
        #antigen bundle common-aliases # a starting point for aliases. Know what these are then override as necessary.

    # PREZTO BUNDLES
        antigen use prezto
        # ^ XXX XXX XXX: This changes the $ZDOTDIR to ~/.antigen/repos/

        # Source Prezto. (This is already done by antigen I think)
        #if [[ -s "${ZDOTDIR:-$HOME}/.antigen/repos/.zprezto/init.zsh" ]]; then
          #source "${ZDOTDIR:-$HOME}/.antigen/repos/.zprezto/init.zsh"
        #fi

    # OTHER BUNDLES
        antigen bundle zsh-users/zsh-syntax-highlighting
        antigen bundle zsh-users/zsh-completions
        antigen bundle zsh-users/zsh-history-substring-search
        #antigen bundle sharat87/autoenv # directory-specific scripts by placing a .env file in a directory.
        #antigen bundle kennethreitz/autoenv # directory-specific scripts by placing a .env file in a directory.
        #antigen bundle sharat87/zsh-vim-mode # vim-like bindings TODO: make ctrl-c exit INSERT and not cancel the command.
        autoload -U add-zsh-hook
        antigen bundle rupa/z # jump to most recent locations with the z command.
            add-zsh-hook precmd _z_precmd
            function _z_precmd {
                _z --add "$PWD"
            }

        antigen bundle trusktr/longterm-beep

        if $isNixOS; then
            # tells nix-shell to open a zsh shell instead of a bash shell
            antigen bundle chisui/zsh-nix-shell
        fi


    # THEMES
        #antigen bundle Valodim/zsh-prompt-powerline
            #fpath+=( $HOME/.antigen/repos/https-COLON--SLASH--SLASH-github.com-SLASH-Valodim-SLASH-zsh-prompt-powerline.git/ )
            #autoload promptinit ; promptinit
            #prompt powerline
        #antigen theme XsErG/zsh-themes themes/lazyuser
        #antigen theme KuoE0/oh-my-zsh-solarized-powerline-theme # DOESN"T WORK
            #. $HOME/.antigen/repos/https-COLON--SLASH--SLASH-github.com-SLASH-KuoE0-SLASH-oh-my-zsh-solarized-powerline-theme.git
        #antigen theme jeremyFreeAgent/oh-my-zsh-powerline-theme
            #POWERLINE_FULL_CURRENT_PATH="true"
            ##POWERLINE_RIGHT_B="date"
            #POWERLINE_RIGHT_A="mixed"
            ##POWERLINE_SHOW_GIT_ON_RIGHT="true"
            #POWERLINE_DETECT_SSH="true"
            #. /home/trusktr/.antigen/repos/https-COLON--SLASH--SLASH-github.com-SLASH-jeremyFreeAgent-SLASH-oh-my-zsh-powerline-theme.git/powerline.zsh-theme
        #antigen theme agnoster
        #antigen theme fox
        #antigen theme rummik/zsh-theme
        antigen theme sorin
        #antigen theme desyncr/zshrc themes/af-magic-mod
        #antigen bundle Lokaltog/powerline powerline/bindings/zsh
        #add-zsh-hook precmd dynamicPS1 # my theme. See dynamicPS1 below

            # Add a new line before the prompt when the theme doesn't already to it.
                add-zsh-hook precmd prompNewLine; function prompNewLine { echo }

    # FINALIZE ANTIGEN STUFF
        antigen apply
# END ANTIGEN PLUGIN MANAGEMENT <3

# The following lines were added by compinstall
    #zstyle ':completion:*' auto-description 'Specify %d.'
    #zstyle ':completion:*' completer _oldlist _expand _complete _ignored _match _correct _approximate _prefix
    zstyle ':completion:*' completer _oldlist _expand _complete _match _ignored _correct _approximate _prefix
    #zstyle ':completion:*' completions 1
    #zstyle ':completion:*' file-sort name
    zstyle ':completion:*' format ' --- %d completion:'
    #zstyle ':completion:*' glob 1
    #zstyle ':completion:*' group-name ''
    #zstyle ':completion:*' ignore-parents parent pwd .. directory
    #zstyle ':completion:*' insert-unambiguous true
    #zstyle ':completion:*' list-colors ${(s.:.)LS_COLORS}
    #zstyle ':completion:*' list-prompt '%SAt %p: Hit TAB for more, or the character to insert%s %B(%l)%b'
    #zstyle ':completion:*' list-suffixes true
    #zstyle ':completion:*' matcher-list '' 'm:{[:lower:]}={[:upper:]}' 'm:{[:lower:][:upper:]}={[:upper:][:lower:]}' 'r:|[._-]=** r:|=** l:|=*'
    #zstyle ':completion:*' match-original both
    zstyle ':completion:*' max-errors 3 numeric # how man errors are allowed for correction completion
    zstyle ':completion:*' menu select=2 # start menu selection when at least `select` results are available
    #zstyle ':completion:*' original true
    #zstyle ':completion:*' prompt '%e errors.'
    #zstyle ':completion:*' select-prompt '%SScrolling active: current selection at %p%s %B(%l)%b'
    #zstyle ':completion:*' substitute 1
    #zstyle ':completion:*' verbose true
    zstyle :compinstall filename '/home/trusktr/.antigen/repos/.zshrc'
    autoload -Uz compinit
    compinit
# End of lines added by compinstall

# COLORS
    # Reset
    ColorOff=$'%{\e[0m%}'       # Text Reset
    BColorOff=$'%{\e[1;0m%}'       # Text Reset

    # Regular Colors
    Black=$'%{\e[0;30m%}'        # Black
    Red=$'%{\e[0;31m%}'          # Red
    Green=$'%{\e[0;32m%}'        # Green
    Yellow=$'%{\e[0;33m%}'       # Yellow
    Blue=$'%{\e[0;34m%}'         # Blue
    Purple=$'%{\e[0;35m%}'       # Purple
    Cyan=$'%{\e[0;36m%}'         # Cyan
    White=$'%{\e[0;37m%}'        # White

    # Bold
    BBlack=$'%{\e[1;30m%}'       # Black
    BRed=$'%{\e[1;31m%}'         # Red
    BGreen=$'%{\e[1;32m%}'       # Green
    BYellow=$'%{\e[1;33m%}'      # Yellow
    BBlue=$'%{\e[1;34m%}'        # Blue
    BPurple=$'%{\e[1;35m%}'      # Purple
    BCyan=$'%{\e[1;36m%}'        # Cyan
    BWhite=$'%{\e[1;37m%}'       # White

    # Underline
    UBlack=$'%{\e[4;30m%}'       # Black
    URed=$'%{\e[4;31m%}'         # Red
    UGreen=$'%{\e[4;32m%}'       # Green
    UYellow=$'%{\e[4;33m%}'      # Yellow
    UBlue=$'%{\e[4;34m%}'        # Blue
    UPurple=$'%{\e[4;35m%}'      # Purple
    UCyan=$'%{\e[4;36m%}'        # Cyan
    UWhite=$'%{\e[4;37m%}'       # White

    # Background
    On_Black=$'%{\e[40m%}'       # Black
    On_Red=$'%{\e[41m%}'         # Red
    On_Green=$'%{\e[42m%}'       # Green
    On_Yellow=$'%{\e[43m%}'      # Yellow
    On_Blue=$'%{\e[44m%}'        # Blue
    On_Purple=$'%{\e[45m%}'      # Purple
    On_Cyan=$'%{\e[46m%}'        # Cyan
    On_White=$'%{\e[47m%}'       # White

    # High Intensity
    IBlack=$'%{\e[0;90m%}'       # Black
    IRed=$'%{\e[0;91m%}'         # Red
    IGreen=$'%{\e[0;92m%}'       # Green
    IYellow=$'%{\e[0;93m%}'      # Yellow
    IBlue=$'%{\e[0;94m%}'        # Blue
    IPurple=$'%{\e[0;95m%}'      # Purple
    ICyan=$'%{\e[0;96m%}'        # Cyan
    IWhite=$'%{\e[0;97m%}'       # White

    # Bold High Intensity
    BIBlack=$'%{\e[1;90m%}'      # Black
    BIRed=$'%{\e[1;91m%}'        # Red
    BIGreen=$'%{\e[1;92m%}'      # Green
    BIYellow=$'%{\e[1;93m%}'     # Yellow
    BIBlue=$'%{\e[1;94m%}'       # Blue
    BIPurple=$'%{\e[1;95m%}'     # Purple
    BICyan=$'%{\e[1;96m%}'       # Cyan
    BIWhite=$'%{\e[1;97m%}'      # White

    # High Intensity backgrounds
    On_IBlack=$'%{\e[0;100m%}'   # Black
    On_IRed=$'%{\e[0;101m%}'     # Red
    On_IGreen=$'%{\e[0;102m%}'   # Green
    On_IYellow=$'%{\e[0;103m%}'  # Yellow
    On_IBlue=$'%{\e[0;104m%}'    # Blue
    On_IPurple=$'%{\e[10;95m%}'  # Purple
    On_ICyan=$'%{\e[0;106m%}'    # Cyan
    On_IWhite=$'%{\e[0;107m%}'   # White

# SET UP CUSTOM PROMPT, TODO: Learn how to make one to install with antigen.
    export NEW_PWD="Hello there young jedi apprentice."
    ##################################################
    # Fancy PWD display function
    ##################################################
    # The home directory (HOME) is replaced with a ~
    # The last pwdmaxlen characters of the PWD are displayed
    # Leading partial directory names are striped off
    # /home/me/stuff          -> ~/stuff               if USER=me
    # /usr/share/big_dir_name -> ../share/big_dir_name if pwdmaxlen=20
    ##################################################
    dynamicPS1() {
        # How many characters of the $PWD should be kept
        local pwdmaxlen=35
        # Indicate that there has been dir truncation
        local trunc_symbol="..."
        local dir=${PWD##*/}
        pwdmaxlen=$(( ( pwdmaxlen < ${#dir} ) ? ${#dir} : pwdmaxlen ))
        NEW_PWD=${PWD/#$HOME/\~}
        local pwdoffset=$(( ${#NEW_PWD} - pwdmaxlen ))
        if [ ${pwdoffset} -gt "0" ]
        then
            NEW_PWD=${NEW_PWD:$pwdoffset:$pwdmaxlen}
            NEW_PWD=${trunc_symbol}/${NEW_PWD#*/}
        fi
        PS1=$'\n'${BRed}┌─[${BGreen}%D{%L:%M:%S%P}${BRed}/${BYellow}%m${BRed}/${BBlue}%n${BRed}${BRed}/${BPurple}${NEW_PWD}${BRed}]${BRed}$'\n'└─╼' '${ColorOff}
    }

# complete pacman-color the same as pacman
    compdef _pacman pacman-color=pacman

# What's this for again?
    autoload -U promptinit
    promptinit
    autoload -U colors
    colors

# Add extra VCS info to prompt that support it. TODO: learn how to make my prompt support it.
    #autoload -U zsh/terminfo
    #autoload -Uz vcs_info
    #zstyle ':vcs_info:*' enable git hg
    #zstyle ':vcs_info:*' check-for-changes true
    #zstyle ':vcs_info:git*' formats "%{${fg[cyan]}%}[%{${fg[green]}%}%s%{${fg[cyan]}%}][%{${fg[blue]}%}%r/%S%%{${fg[cyan]}%}][%{${fg[blue]}%}%b%{${fg[yellow]}%}%m%u%c%{${fg[cyan]}%}]%{$reset_color%}"


## BEGIN CUSTOM ported from bashrc

    ## history settings. TODO: make exactly like my bash history, port href command, etc, so that history is synced manually.
    HISTFILE=${ZDOTDIR:-$HOME}/.zsh_history
    HISTSIZE=10000
    SAVEHIST=10000
    #HISTCONTROL=erasedups
    setopt incappendhistory sharehistory histignorealldups histignoredups histreduceblanks histfcntllock extendedhistory histsavenodups
    #export HISTTIMEFORMAT="[$(tput setaf 6)%F %T$(tput sgr0)]: "

    ## BEGIN ENVIRONMENT VARS

        # Add local binaries to our path.
            export PATH=$PATH:~/.local/bin

        # Add local ruby gems to our PATH. How to add system-wide gems?
            export PATH=$PATH:~/.gem/ruby/1.9.1/bin
            export PATH=$PATH:~/.gem/ruby/2.2.0/bin

        # Python
            # macOS specific (TODO other OS paths)
            export PATH=~/Library/Python/3.9/bin:$PATH

        # Ruby
            # TODO: if Mac OS X
            #export PATH="$PATH:$HOME/.rvm/bin" # Add RVM to PATH for scripting
            #source $HOME/.rvm/scripts/rvm

        # Android
            # TODO: if Mac OS X
            #export PATH=$PATH:~/Library/Android/sdk/platform-tools

        # Homebrew
            # HOMEBREW_PREFIX=/opt/homebrew # already done by homebrew
            export PATH=$PATH:/usr/local/bin

        # proper encoding for the linux terminal (ttys)
        if [ "$TERM" = linux ] ; then
                export T3WINDOW_OPTS=acs=utf8
        fi

        # Node
            # global node module location
            export NODE_PATH=$NODE_PATH:/usr/lib/node_modules:/usr/local/lib/node_modules

            # This tells `n` (a version manager for Node.js) where to save
            # versions of Node.js, and adds the currently-selected Node.js
            # version to PATH.
            export N_PREFIX=~/.n-node-versions
            # export PATH=~/.n-node-versions/bin:$PATH # disabled for now, for work (nvm manages node in PATH)

        ## Default editor
        export EDITOR=nvim
        export VISUAL=nvim
        export PAGER=less

        ## ls color. Color rules can be stored in a file and loaded with dircolors. NOTE: This needs to be changed on different systems.
        #export `dircolors | sed 's/^.//' | sed 's/..$//'` # sets up the LS_COLORS environment variable for ls with default colors.
        ## ^ not available on Mac OS X

    ## END ENVIRONMENT VARS

    ## GENERAL SHELL OPTIONS
        #TODO: shopt -s checkwinsize # fix line wrap on window resize
        setopt autocd # change dirs if the command supplied does not exist and is a directory name.
        setopt beep # beep!
        setopt extendedGlob # Treat the ‘#’, ‘~’ and ‘^’ characters as part of patterns for filename generation, etc. (An initial unquoted ‘~’ always produces named directory expansion.)
        setopt noMatch # If a pattern for filename generation has no matches, print an error, instead of leaving it unchanged in the argument list.
        unsetopt notify # Report the status of background jobs immediately, rather than waiting until just before printing a prompt.
        setopt globComplete # When the current word has a glob pattern, do not insert all the words resulting from the expansion but generate matches as for completion and cycle through them like menucomplete.
        unsetopt menuComplete # On an ambiguous completion, instead of listing possibilities or beeping, insert the first match immediately.
        setopt autoList # Automatically list choices on an ambiguous completion.
        setopt autoMenu # Automatically use menu completion after the second consecutive request for completion, for example by pressing the tab key repeatedly. This option is overridden by menuComplete.
        #TODO: stty -ixon # disable freezing of the terminal when pressing ctrl+s
        setopt interactiveComments # Allow comments at command line
        # history search with arrow keys (matching entered prefix)
        autoload -U up-line-or-beginning-search
        autoload -U down-line-or-beginning-search
        zle -N up-line-or-beginning-search
        zle -N down-line-or-beginning-search

    ## SHELL KEY BINDINGS
        #bindkey -v # use vim-style bindings.
        bindkey "^[[A" up-line-or-beginning-search # Up
        bindkey "^[[B" down-line-or-beginning-search # Down

    ## BEGIN aliases and alias functions
        if [ $(uname) = Linux ] ; then
            alias rm='rm -I' # -I: prompt before removing
        elif [ $(uname) = Darwin ] ; then
            alias rm='grm -I' # -I: prompt before removing
        fi

        alias mv='mv -i' # -i: prompt before overwrite
        alias ~='cd ~'
        alias ..="cd .."
        alias ...="cd ../.."
        alias ....="cd ../../.."

        #TODO OS X vs Linux
        if $isLinux; then
            alias ls="ls -F --group-directories-first --color=auto" # this doesn't work for some reason. EDIT: This didn't work because I was overwriting it in ~truktr/.bashrc
        elif $isMacOS; then
            alias ls="gls -F --group-directories-first --color=auto" # OS X
        fi

        alias l=ls
        alias ll="ls -l"
        alias la="ls -A"
        alias lla="ls -lA"
        alias lal="ls -lA"
        alias h='history'
        #TODO for zsh: alias href='echo -n "Refreshing history... "; hcln; history -c; history -r; echo "done."' #refresh the history. See hcln below.
        #alias git='git add .; git'
        #alias clear="clear; archey"
        alias mce="mc -e" # mcedit
        alias sudo="sudo " #makes sudo recognize aliases.
        alias untar="tar -xzvf"
        alias mkdir="mkdir -p"
        alias screenoff="xset dpms force off"
        #alias less=vimpager
        alias j=jobs
        alias v=vi
        alias vi=vim
        alias vim=nvim
        alias sv=svim
        alias svim="sudo -E nvim"
        #alias cat=lolcat
        alias weechat="weechat-curses"
        alias k="kill -KILL"
        alias haste="HASTE_SERVER=http://trusktr.io:7777 haste"
        alias ack='ack --smart-case --pager=less --sort-files'
        if $isLinux; then; alias open='xdg-open'; fi

        #alias gl='git log' already have gl for git push.
        alias gs='git status'

        # Open files in a new tab of the parent nvim instance (instead of a new
        # nvim instance) when `nvim` is executed at the command line in a
        # terminal buffer.
        NVIM=`which nvim`
        nvim() {
            if [[ -z $NVIM_LISTEN_ADDRESS ]]; then
                # not running inside nvim
                $NVIM "$@" # Most linuxes
            else
                python -c "from neovim import attach; import os; file = '$1'; file = file if file.startswith('/') else '$(pwd)/'+file; nvim = attach('socket', path='$NVIM_LISTEN_ADDRESS'); nvim.command(\"tabnew \"+file);"
            fi
        }
    ## END aliases and alias functions

    # clear (shows Arch Linux logo with Archey)
    #clear

    ## execute a command when the shell exits
    trap 'echo "Goodbye!"' EXIT

## END CUSTOM ported from bashrc

# swap keys in X
#if hash xmodmap 2>/dev/null; then
    #xmodmap ~/.Xmodmap
#fi

### Google Cloud SDK (ZSH)
    #source '/usr/local/Caskroom/google-cloud-sdk/latest/google-cloud-sdk/path.zsh.inc'
    #source '/usr/local/Caskroom/google-cloud-sdk/latest/google-cloud-sdk/completion.zsh.inc'

### Go programming language
    # TODO add Go setup to setup script.
    export GOPATH=~/go
    export PATH="$HOME/go/bin:$PATH"

### Chrome OS Crouton

    if $isChromeOS; then
        # TODO add croshclip install to setup script.
        # https://github.com/acornejo/croshclip

        ## Make localhost:3000 available on the local network, if needed.
        #sudo /sbin/iptables -A INPUT -p tcp --dport 3000 -j ACCEPT

        ### mount remounting partitions if wanting write access to them

            ##If the home folder is mounted with noexec, remount with exec.
            #mount | grep home/chronos/user | cut -d\( -f2 | grep noexec > /dev/null
            #if [ $? -eq 0 ]; then
                #sudo mount -i -o remount,exec /home/chronos/user
                #echo " --" Mounted ChromeOS home folder with exec.
            #else
                #echo " --" ChromeOS home folder already remounted with exec.
            #fi

            ## If the root folder is mounted read-only, remount read-write.
            ## This requires root filesystem verification to be turned off,
            ## that should be enough info to google...
            #mount | grep " / " | cut -d\( -f2 | grep "\bro\b" > /dev/null
            #if [ $? -eq 0 ]; then
                #sudo mount -i -o remount,rw /
                #echo " --" Mounted ChromeOS root folder read-write.
            #else
                #echo " --" ChromeOS root folder already remounted with read-write.
            #fi

        ### Yank/paste from Crouton enter-chroot
            # turns on the croshclip server if it isn't running.
            # vimrc contains the setting for neovim to use croshclip for yank/paste.
            # Requires ~/go/bin to be in PATH first.
            ps aux | grep '[c]roshclip -serve' 1>/dev/null
            result=$?
            # TODO disabled this because croshclip seems to be erroring out lately
            #if ! $( exit $result ); then croshclip -serve > /tmp/croshclip.log 2>&1 &!; fi

        ### Disable right click (leave two-finger right click). More info: https://askubuntu.com/questions/602193/how-to-disable-right-click-on-the-touchpad/602439#602439
            synclient RightButtonAreaLeft=0
            synclient RightButtonAreaTop=0

        ### Increase number of allowed inotify watchers, seems to be lower in ChromeOS by default
            # f.e. fixes ENOSPC errors with Node.js/Meteor apps watching many files during dev.
            # See: https://stackoverflow.com/questions/22475849/node-js-error-enospc

            # TODO do this once, if needed. probably move to setup.sh. Different file for Arch Linux
            #echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf

            if [[ ! -a /tmp/trusktr-ran-sysctl-p ]]; then
                sudo sysctl -p
                touch /tmp/trusktr-ran-sysctl-p
            fi
    fi


### linuxbrew

    # uncomment one of the following depending on where it installed (see install
    # output).
    export PATH="/home/linuxbrew/.linuxbrew/bin:$PATH"
    #export PATH="$HOME/.linuxbrew/bin:$PATH"

### Node versions managed with `n`, use this if `n` doesn't seem to switch your versions.
    #export PATH="/usr/local/n/versions/node/8.1.4/bin:$PATH"

### Local NPM PATH
    export PATH="$HOME/.npm-global/bin:$PATH"

### Mapper.ai

    if $mapperAI; then

        # needed for Perception
        alias nproc="sysctl -n hw.ncpu"

        # Mapper Cloud Services requirements (see
        # https://jira.mapperai.net/confluence/display/MDSP/Onboarding+instructions)
        # TODO this path may be different in Linux, Windows, or NixOS
        if ! $isNixOS; then
            export JAVA_HOME=$(/usr/libexec/java_home)
        fi
        # export SDKMAN_DIR=~/.sdkman
        # [[ -s ~/.sdkman/bin/sdkman-init.sh ]] && source ~/.sdkman/bin/sdkman-init.sh
    fi

### direnv (.env files)

    # hook up direnv, so that it sources .envrc files when entering directories (if
    # explicitly allowed for that directory).
    # TODO make sure setup.sh installs it
    eval "$(direnv hook zsh)"

### macfuse and ntfs-3g build setup

    # Uncomment this only when building ntfs-3g, it overwrite macOS binaries in that terminal.
    if $isMacOS; then
        # Uncomment these only when building ntfs-3g from source, it overwrites macOS binaries in the terminal where these are exported.
        # export PATH="$HOMEBREW_PREFIX/opt/m4/bin:$PATH"
        # export PATH="$HOMEBREW_PREFIX/opt/libtool/libexec/gnubin:$PATH"
        # export PATH="$HOMEBREW_PREFIX/opt/make/libexec/gnubin:$PATH"
        # export PATH="$HOMEBREW_PREFIX/opt/coreutils/libexec/gnubin:$PATH"

        # For the ntfs-3g installation from gromgit/fuse, which is a more reversible installation than building from source.
        export PATH="$HOMEBREW_PREFIX/opt/ntfs-3g-mac/bin:$PATH"
    fi

### Auto-generated
# fzf fuzzy finder
[ -f ~/.fzf.zsh ] && source ~/.fzf.zsh

# tabtab source for electron-forge package
# uninstall by removing these lines or running `tabtab uninstall electron-forge`
[[ -f /Users/trusktr/src/Signafy+mapper-annotator/node_modules/tabtab/.completions/electron-forge.zsh ]] && . /Users/trusktr/src/Signafy+mapper-annotator/node_modules/tabtab/.completions/electron-forge.zsh

# tabtab source for serverless package
# uninstall by removing these lines or running `tabtab uninstall serverless`
[[ -f /Users/trusktr/src/velodyne_sw+mapper-cloud-services/node_modules/tabtab/.completions/serverless.zsh ]] && . /Users/trusktr/src/velodyne_sw+mapper-cloud-services/node_modules/tabtab/.completions/serverless.zsh
# tabtab source for sls package
# uninstall by removing these lines or running `tabtab uninstall sls`
[[ -f /Users/trusktr/src/velodyne_sw+mapper-cloud-services/node_modules/tabtab/.completions/sls.zsh ]] && . /Users/trusktr/src/velodyne_sw+mapper-cloud-services/node_modules/tabtab/.completions/sls.zsh
# tabtab source for slss package
# uninstall by removing these lines or running `tabtab uninstall slss`
[[ -f /Users/trusktr/src/velodyne_sw+mapper-cloud-services/node_modules/tabtab/.completions/slss.zsh ]] && . /Users/trusktr/src/velodyne_sw+mapper-cloud-services/node_modules/tabtab/.completions/slss.zsh

# auto generated by work setup script
ulimit -n 1048576
PATH="${PATH}:/Users/trusktr/go/bin"
