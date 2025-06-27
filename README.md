dotfiles
--------

Just my dotfiles, OS configs, and scripts to bootstrap my environment when I'm
getting myself set up on a new machine.

## Set it up

- Make a new SSH key on the new machine, if needed.
- Add the public SSH key to GitHub, BitBucket (Velodyne account), and trusktr@trusktr.io.
- Then:

  ```sh
  curl https://raw.githubusercontent.com/trusktr/dotfiles/master/setup.sh | bash
  ```

## Notes

- The `configs/com.googlecode.iterm2.plist` file is saved from iTerm, not
  edited manually. It is also manually imported into iterm2.

## TODO WINDOWS (add to setup.sh):

  - X11 Approach:
    - X11 server: https://sourceforge.net/projects/vcxsrv/
    - Install X11 server and desktop environment to use Ubuntu GUI apps, see
      the following for a guide on getting GUI apps running in WSL:
      https://github.com/QMonkey/wsl-tutorial
  - Install various other Windows stuff automatically using OneGet (AKA PackageManager).
  - Use the official Windows package mananager "OneGet" to install windows
    stuff. See how to use it with the Chocolatey package registry:
    https://www.reddit.com/r/sysadmin/comments/4gqq6q/add_chocolatey_repo_to_windows_10/
  - Customizing PowerShell prompt: https://hodgkins.io/ultimate-powershell-prompt-and-git-setup
  - If there's any problems updating apt's registry cache, see https://github.com/Microsoft/WSL/issues/640

PowerShell steps using OneGet:

```
  Install-PackageProvider Chocolatey -Force
  Install-Package Nodejs
  # etc..., I didn't have much luck with it.
```

PowerShell steps using Chocolatey (works better):

```
  Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Force # run this line on new systems, default is "Restricted", skip if needed
  iwr https://chocolatey.org/install.ps1 -UseBasicParsing | iex
  # restart powershell so that choco command is available
  choco install -y nodejs
  choco install -y atom
  choco install -y git
  choco install -y nvim
  choco install -y git -params '"/GitAndUnixToolsOnPath"'
  choco install -y conemu

  Install-PackageProvider NuGet -Force
  Set-PSRepository -Name PSGallery -InstallationPolicy Trusted
  Install-Module posh-git
```

Link stuff

```
  cmd /c mklink /d $HOME\.atom $HOME\src\trusktr+dotfiles1\.atom
```
