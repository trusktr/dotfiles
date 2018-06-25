dotfiles
--------

Just my dotfiles, OS configs, and scripts to bootstrap my environment when I'm
getting myself set up on a new machine.

## Set it up

- Make a new SSH key on the new machine, if needed. Then add the public SSH key to GitHub. Then:

  ```sh
  curl https://raw.githubusercontent.com/trusktr/dotfiles/master/setup.sh | sh
  ```

Notes

- The `configs/com.googlecode.iterm2.plist` file is saved from iTerm, not edited manually.
