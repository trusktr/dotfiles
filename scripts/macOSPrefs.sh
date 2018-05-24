
# available in System Preferences

    defaults write -g AppleInterfaceStyle -string Dark
    defaults write -g AppleHighlightColor -string "1.000000 0.749020 0.823529"
    defaults write -g AppleSpacesSwitchOnActivate -int 0
    defaults write -g InitialKeyRepeat -int 15
    defaults write -g KeyRepeat -int 1
    defaults write -g "com.apple.trackpad.scaling" -float "1.5"
    defaults write -g AppleEnableSwipeNavigateWithScrolls -int 0

    # remap capslock to command
    defaults -currentHost write -g com.apple.keyboard.modifiermapping.1452-632-0 -array-add "{
        HIDKeyboardModifierMappingDst = 30064771299;
        HIDKeyboardModifierMappingSrc = 30064771129;
    }"

    defaults write com.apple.dock autohide -int 1
    defaults write com.apple.dock largeresize -int 128
    defaults write com.apple.dock magnification -int 1
    defaults write com.apple.dock mineffect -string scale
    defaults write com.apple.dock tilesize -int 1
    defaults write com.apple.dock mru-spaces -int 0
    defaults write com.apple.dock expose-group-apps -int 1
    defaults write com.apple.dock showAppExposeGestureEnabled -int 1

    # set hot corners
    defaults write com.apple.dock "wvous-bl-corner" -int 11
    defaults write com.apple.dock "wvous-bl-modifier" -int 0
    defaults write com.apple.dock "wvous-br-corner" -int 4
    defaults write com.apple.dock "wvous-br-modifier" -int 0
    defaults write com.apple.dock "wvous-tl-corner" -int 2
    defaults write com.apple.dock "wvous-tl-modifier" -int 0
    defaults write com.apple.dock "wvous-tr-corner" -int 3
    defaults write com.apple.dock "wvous-tr-modifier" -int 0

    defaults write com.apple.dashboard "dashboard-enabled-state" -int 1

    defaults write com.apple.spaces "spans-displays" -int 1

    defaults write com.apple.Safari IncludeDevelopMenu -int 1
    defaults write com.apple.Safari WebKitDeveloperExtrasEnabledPreferenceKey -int 1
    defaults write com.apple.Safari "com.apple.Safari.ContentPageGroupIdentifier.WebKit2DeveloperExtrasEnabled" -int 1

    defaults write com.apple.HIToolbox AppleEnabledInputSources -array-add '{
             "Bundle ID" = "com.apple.KeyboardViewer";
             InputSourceKind = "Non Keyboard Input Method";
         }' '{
             "Bundle ID" = "com.apple.CharacterPaletteIM";
             InputSourceKind = "Non Keyboard Input Method";
         }'
    #plutil -insert AppleEnabledInputSources.0 - ~/Library/Preferences/com.apple.HIToolbox

    defaults write com.apple.systemuiserver "NSStatusItem Visible com.apple.menuextra.volume" -int 1
    defaults write com.apple.systemuiserver menuExtras -array-add "/System/Library/CoreServices/Menu Extras/Volume.menu"
    defaults write com.apple.systemuiserver "NSStatusItem Visible com.apple.menuextra.bluetooth" -int 1
    defaults write com.apple.systemuiserver menuExtras -array-add "/System/Library/CoreServices/Menu Extras/Bluetooth.menu"

    defaults write com.apple.menuextra.clock DateFormat -string "EEE MMM d  h:mm a"

# unavailable in System Preferences

    # disables the special character pop-up menu when pressing and holding
    # a letter key.
    defaults write -g ApplePressAndHoldEnabled -bool false

# other settings

HOSTNAME=Starhopper
scutil --set HostName $HOSTNAME
scutil --set LocalHostName $HOSTNAME
scutil --set ComputerName $HOSTNAME

# TODO: iterm settings, and other apps
