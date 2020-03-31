# `Zenburn Dark Matter` Theme Change Log 

> Note 1: This Changelog is for the whole **Dark Matter Suite**, not just for this specific Theme.

> Note 2: [`Development`] and [`UI Manager`] sections in *Changelog* are addressed to the developer to remind him of any important changes that occurred during the writing of the code and do not always concern improvements made to the extension or to the theme.

## [1.1.129]
- [`Theme`] Satured `Mystic River` skin's main color and added to `Apophis Dark Matter Theme`;
- [`Theme`] Added `Cold`, `Flat`, `Warm` (Grays) skin's sub-set to `Apophis Dark Matter Theme`;
- [`UI Manager`] Added live badges strip under each theme panel.
- [`Development`] Added functions for get installs number dynamically from badges;
- [`Development`] Added functions for themes installs statistics;
- [`UI Manager`] Solved CSS issue with sticky header.

## [1.1.128]
- [`Development`] Improved function that determine `VSCode Themes Master` version based on each included file;
- [`Development`] Improved function for Text Color calculation on background color (based on Luminance);
- [`Development`] Improved function for Luminance calculation (with calculation of Middle Color when colors are overlayed and with transpacency);
- [`Development`] Added function for Middle Color: overlay result of foreground color wit opacity on background color whit/whitout opacity on default (deep) background color;
- [`Development`] Improved line highlight background for foreground readability.

## [1.1.127]
- [`Development`] Solved issue with export value of Notifications opacity;

## [1.1.125]
- [`Theme`] Added more opacity to selection background;
- [`Theme`] Tanks to bugfix [#85690](https://github.com/microsoft/vscode/issues/85690) in VSCode 1.42.0, added a bit of transparency to dropdown menu and notifications pop-up;
- [`Theme`] In all the themes, only for token colors, the saturation filter has been replaced with the alpha filter to better blend the colors of the tokens with the background color. This avoids (or reduces) non-harmonic overlaps of text with background;
- [`TokenColors`] Added `Apophis` tokencolors set an new Themes based on `Dark Matter` skins. `Apophis`, use only a subset of `Dark Matter` skins with which it is more in color harmony;
- [`Readme`] Added some font suggestion in `README.md`;
- [`UI Manager`] Added support for testing themes in VSCode insiders;
- [`UI Manager`] Added `Apply & URefresh` button for refresh page without regenerate UI colors and Fake UI previews and apply options (e.g. step-up version);
- [`UI Manager`] Added `Ultra Refresh` button for refresh page without regenerate UI colors previews and Fake UI previews;
- [`Development`] Fixed some comments in Token colors JSON: removed, with RegExp, encoded html chars and some PHP explicited tags to avoid conflicts with PHP scripts of `VSCode Themes Master`;
- [`Development`] Fixed some inaccuracies in the in PHP function **make_code_example** that emerged after the introduction of `Apophis` tokencolors;
- [`Development`] After introduction of `excluded_tokencolors_set_main`, `excluded_tokencolors_set_skin`, `excluded_tokencolors_set_combo`, added generation of UI colors preview for each tokencolors file.
- [`Development`] Added `excluded_tokencolors_set_main`, `excluded_tokencolors_set_skin`, `excluded_tokencolors_set_combo` arrays in `_cfg.themes.colors.php` wich respectively exclude:
  1. All token colors set in array from Main Theme (Group);
  1. All token colors set in array from Single Sub-Theme;
  1. All token colors set in array from Colors Combo for each Sub-Theme;
     This allows me to better manage the combined colors and exclude those that are not harmonic.
- [`Development`] Generic code bug fix and improvements;

## [1.1.122]

- [`Theme`] In `Low Blue` sub-theme, skin `Moai` was replaced by skin `Obsidian`;
- [`Theme`] Added `Obsidian` skin to some sub-themes;
- [`Readme`] Added big picture preview of a random skin of set;
- [`UI Manager`] Added `Quick Refresh` button for refresh page without regenerate Fake UI previews;
- [`Development`] Generic code bug fix and improvements;

## [1.1.114]

- [`Theme`] Some `keywords` changed;
- [`Readme`] Some `README.md` corrections;
- [`Development`] Improved function to get the harmonic colors;
- [`Development`] Generic code bug fix and improvements;

## [1.1.109]

- [`Readme`] Fixed bug in gallery with direct link of images preview;
- [`Development`] The gray-scale determination criteria have been modified to try to improve the readability of the text on some background colors in themes.
- [`Development`] Improved function to get the grayscale (using HSL instead of the common RGB to gray) of a background color to better evaluate the color of the text to be used on it.

## [1.1.106]

- [`Themes`] Removed `fontStyle`: `bold` from tokencolors: this make code more readable at low font size;
- [`Readme`] Added `Table of Contents`;
- [`Readme`] Added some informations about fonts rating;
- [`Development`] Fixed a bug in load and manage JSON export from Visual Studio Code. Added a code to remove special PHP symbols from JSON that can be recognized as "active code" by `VSCode Themes Master`;
- [`Development`] Added options to remove `fontStyle` => `bold`/`underline`/`italic` form Token Colors (`tokenColorsOptions` can be different for for each sub-theme);
- [`Development`] Implemented function to make hierarchical `Table of Contents`;
- [`Development`] Rewritten function to make `Themes Gallery` to solve a bug with table generation;
- [`Development`] Implemented function to manage suggested fonts for coding.

## [1.1.102]

- [`Themes`] Added `Insomnia` sub-theme, clone of Nadir, with flatten colors, low UI contrast, and ultra-satured token colors: although this skin is the opposite concept to the others, in conditions of excessive brightness of the room, it may be convenient to have a theme with greater contrasts;
- [`Readme`] Added sample color previews of UI (1st row) and Token Colors (2nd row) to UI previews;
- [`Readme`] The organization of the previews is more orderly;
- [`Readme`] Added font suggestion section;
- [`UI Manager`] Improved `Token colors Inspector`: now, if opacity is present, shows the same color in two swatches: with and without opacity;
- [`Development`] Implemented function to manage colors using HSL/HSV and improved some ColorMath functions;

## [1.1.101]

- [`Themes`] Added `Deep Sea` sub-theme, with extra deep blue background, flatten colors, low UI contrast, and ultra-desatured token colors;
- [`Themes`] Added `Nadir` sub-theme, with extra cold gray background, flatten colors, low UI contrast, and ultra-desatured token colors;
- [`Themes`] Change `Open a remote window` button colors (background and foreground);
- [`Themes`] Added/Changed some skin main colors;
- [`Development`] Some improvements to the README.md output;
- [`Development`] The assignment of some relative colors has been revised;
- [`Development`] Added selection menu to go to UI preview on the page and on page reload, to better recognize the impact of the changes applied to the skin;
- [`Development`] Improved function for UI colors override: now is possible to override main colors and apply transformations o apply only transformations without override;
- [`Development`] Addedd lastest 3 (but number si customizable) changelogs to README.md.

## [1.1.100]

- [`Development`] Solved graphic issue with rendering of background in Find/Replace Widget (Fake UI for preview generator);
- [`Development`] Minor bug fix and optimizations: solved issue with placeholder of "vscode_marketplace_url" variable in `master-readme.md`.

## [1.1.99]

- [`Themes`] Added colors for some UI improvements introduced in **_Visual Studio Code_** `1.40.0`;
- [`Themes`] Added `EclipseDS` sub-theme, pretty faithful to `Eclipse DevStyle` theme, with extra cold gray background and more ultra-desatured token colors;
- [`Themes`] Restyled icon and added Cover to `README.md`;
- [`Themes`] After some UI colors revision, removed some sub-themes combo from `Anthracite`, `Low Blue` and `Midnight`, for similarity to the others skins;
- [`Themes`] Downgrade of **Visual Studio Code** minimum required version from `1.33` to `1.29` to evaluate-it in **Code-OSS** (VSCode for Raspberry Pi/Raspbian, that have an issue in versions later than 1.29 at this time);
- [`Development`] Minor bug fix and optimizations;
- [`Development`] Improved function to generate at one time themes based on multiple tokencolors;
- [`Development`] Implemented the function to generate theme based on my UI color with JSON file token colors export directly from VSCode (e.g. Dark+ wich not have an on TextMate equivalent version);
- [`Development`] Implemented the function to generate previews in GIF/PNG/JPG of VSCode UI tanks to [HTML2Canvas](https://html2canvas.hertzen.com/) library;
- [`Development`] Implemented the function to generate previews in HTML of VSCode UI (in order to obtain greater fidelity to the final result without testing everytime);
- [`Development`] Fix some issues of `VSCode Themes Master` in PHP 7.3.9.

## [1.1.94]

- [`Themes`] `Dark Matter` suite only: added `Anthracite` sub-theme, with extra cold gray background;
- [`Themes`] Deprecated `Zenburn Cold Gray` in favor of `Zenburn in Grays`;
- [`Development`] Added function for deprecate old themes that insert deprecation in favor of theme indicated;
- [`Development`] Short badge on `README.md`;
- [`Development`] Improved VSCode Themes Master UI PHP and JS functions to auto-unselect harmful build options after build theme/extension.

## [1.1.85]

- [`Themes`] Reintroduced `Midnight` sub-theme on certain combination of colors for all my skins;
- [`Development`] Added code based on array `excluded_combo` that can exclude some combinations of color variants in sub-theme for unsightliness or similarity to other skin due to filtering: basically i've excluded some skins based on cold colors from `Low Blue` sub-theme and some skins based on warm colors from `Midnight` sub-theme.

## [1.1.83]

- [`Themes`] Dark Matter only: added `Midnight` sub-theme inspired by _Telegram X Midnight Theme_. Appearance of `In Grays` and `Cold Gray` skins with `Midnight` background is unsightly;
- [`Development`] Added variable that overwrites the relative colors of the user interface with the relativized colors of the sub-theme for a better management of the color combination;
- [`Development`] Added code that get sub-theme descriptions and insert them in `README.md`;
- [`Development`] Added function that send Themes directly in VS Code Extensions Folder and Kill Reload VS Code executable for testing theme without debugging: this solve the issue to to select secondary skin twice before VS Code load her correctly.

## [1.1.79]

- [`Themes`] Improvements to some UI colors;
- [`Development`] Optimized some functions for themes generation;

## [1.1.71]

- [`Themes`] Added Nirvana sub-theme group, with a warm variation like Low Blue Light but only on token colors;
- [`Themes`] Improvements to some UI colors;
- [`Themes`] Fix some colors in themes skins and in Setting;
- [`Development`] Add the function that rebuild missing generic token colors scopes, obtaining them from the analysis of different TextMate Themes. This function also build a global token scopes dictionary for futures implementations;
- [`Development`] Optimized some functions for themes generation;
- [`Development`] Automated assignmet of all Token Colors Themes to Skins based on type (dark/light);
- [`Development`] Added function that convert existing TextMate Token Colors Themes in VSCode Token Colors and apply it to skins.

## [1.1.59]

- [`Themes`] Fix some colors in themes skins;
- [`Development`] Update UI of `VSCode Themes Master`;
- [`Development`] Fix some bugs in `VSCode Themes Master`.

## [1.1.54]

- [`Development`] Fix links in README.md.

## [1.1.53]

- [`Themes`] Colors of Explorer relativized to editor background color and not to active border / active tab (based on theme);
- [`Development`] Themes rebuilt with integration of some colors.

## [1.0.10]

- [`Themes`] Restyled icon;
- [`Themes`] Themes rebuilt using my `VSCode Themes Master` (a localhost PHP Script);
- [`Themes`] Addedd some skins;
- [`Themes`] Renamed some skins;
- [`Themes`] Modified colors of skins.

## [1.0.6]

- [`Themes`] Restyled icon.

## [1.0.2]

- [`Themes`] Restyled icon;
- [`Themes`] `Sugar Paper` inactive color more brighten;
- [`Themes`] Editor background color darkened.

## [1.0.1]

- [`Themes`] The prefix `$` for PHP variables is more visible;
- [`Themes`] `Asphalt` secondary color darkened.

## [1.0.0]

- [`Themes`] First release of `Zenburn Cold Gray Theme`.
