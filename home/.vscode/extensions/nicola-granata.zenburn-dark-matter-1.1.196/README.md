<div align="center"><center>

![Zenburn Dark Matter Theme Cover](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/raw/HEAD/_gfx/zenburn-dark-matter-cover.png)

<h1>Zenburn Dark Matter Theme</h1>
<h4>Zenburn token colors in different intensities and on different dark backgrounds to reduce eye strain.</h4>

[![Version](https://vsmarketplacebadge.apphb.com/version-short/nicola-granata.zenburn-dark-matter.svg?style=for-the-badge&colorA=FCAA33&colorB=3399CC)](https://marketplace.visualstudio.com/items/nicola-granata.zenburn-dark-matter)&nbsp;[![Installs](https://vsmarketplacebadge.apphb.com/installs-short/nicola-granata.zenburn-dark-matter.svg?style=for-the-badge&colorA=66BB33&colorB=AA66FC)](https://marketplace.visualstudio.com/items/nicola-granata.zenburn-dark-matter)&nbsp;[![Downloads](https://vsmarketplacebadge.apphb.com/downloads-short/nicola-granata.zenburn-dark-matter.svg?style=for-the-badge&colorA=66AAFC&colorB=FC66AA)](https://marketplace.visualstudio.com/items/nicola-granata.zenburn-dark-matter)&nbsp;[![Rating](https://vsmarketplacebadge.apphb.com/rating-short/nicola-granata.zenburn-dark-matter.svg?style=for-the-badge&colorA=AC3BAF&colorB=6AA69C)](https://marketplace.visualstudio.com/items/nicola-granata.zenburn-dark-matter)&nbsp;

</center></div>



<div align="right">

[Go to Table of Contents](#table-of-contents)

</div>

# My Themes

[Try all my themes on Marketplace](https://marketplace.visualstudio.com/search?term=publisher%3A%22Nicola%20Granata%22&target=VSCode&category=Themes&sortBy=Relevance):

- Zenburn Dark Matter
 [ this theme ]
- [Apophis Dark Matter](https://marketplace.visualstudio.com/items/nicola-granata.apophis-dark-matter)
- [Apophis Monolith](https://marketplace.visualstudio.com/items/nicola-granata.apophis-monolith)
- [Zenburn Monolith](https://marketplace.visualstudio.com/items/nicola-granata.zenburn-monolith)


**All about `HCUI` (no `sRGB` standard / Notebook monitor) and `Standard Themes` (with `sRGB` settings enabled) versions**

Since version `1.1.162` I have introduced the `HCUI` version for each sub-theme, (at the moment only for `Monolith Suite`), to try to solve problems of poor readability with notebook monitors (generally , I believe, not set to the standard `sRGB`).

The `Standard` version of the themes (without `HCUI`) works fine (or at best) on monitors with `sRGB` settings **enabled** and with **at least** a `Full HD` resolution, and it works correctly even with Philips monitor's `SmartContrast` (or equivalent) enabled.

Personally, I think it's the better choice between the two, based on the monitor's `sRGB` capabilities, to reduce eye strain (these suites are made for that).



# Table of Contents
1. [My Themes](#my-themes)
1. [Changelog for Zenburn Dark Matter Theme](#changelog-for-zenburn-dark-matter-theme)
1. [Zenburn token colors based skins](#zenburn-token-colors-based-skins)
1. [Zenburn Dark Matter Preview Gallery](#zenburn-dark-matter-preview-gallery)
	* [**Anthracite** (1 skin): Anthracite Gray Background and Cold, Desatured Token Colors](#anthracite-1-skin-anthracite-gray-background-and-cold-desatured-token-colors)
	* [**Cold** (13 skins): Cold Gray Background and Cold Token Colors](#cold-13-skins-cold-gray-background-and-cold-token-colors)
	* [**Deep Sea** (5 skins): Deep blue flat UI and Desatured Token Colors](#deep-sea-5-skins-deep-blue-flat-ui-and-desatured-token-colors)
	* [**EclipseDS** (6 skins): Eclipse DevStyle Gray Background and Desatured Token Colors](#eclipseds-6-skins-eclipse-devstyle-gray-background-and-desatured-token-colors)
	* [**Equinox** (10 skins): Dark Night UI and Desatured Token Colors](#equinox-10-skins-dark-night-ui-and-desatured-token-colors)
	* [**Flat** (13 skins): Flat Gray Background and Default Token Colos](#flat-13-skins-flat-gray-background-and-default-token-colos)
	* [**Insomnia** (9 skins): Flat Grayed UI and Satured Token Colors](#insomnia-9-skins-flat-grayed-ui-and-satured-token-colors)
	* [**Low Blue** (1 skin): Low Blue Light on UI and Token Colors](#low-blue-1-skin-low-blue-light-on-ui-and-token-colors)
	* [**Midnight** (2 skins): Midnight Blue Background and Cold, Desatured Token Colors (Telegram X Midnight Theme)](#midnight-2-skins-midnight-blue-background-and-cold-desatured-token-colors-telegram-x-midnight-theme)
	* [**Nadir** (14 skins): Flat Grayed UI and Desatured Token Colors](#nadir-14-skins-flat-grayed-ui-and-desatured-token-colors)
	* [**Nirvana** (11 skins): Low Blue Light only on Token Colors](#nirvana-11-skins-low-blue-light-only-on-token-colors)
	* [**Warm** (13 skins): Warm Gray Background and Warm Token Colors](#warm-13-skins-warm-gray-background-and-warm-token-colors)
1. [Free Fonts for coding](#free-fonts-for-coding)
	* [Fonts Comparative Table and Downloads](#fonts-comparative-table-and-downloads)
		* [Fonts data sheet symbols legend](#fonts-data-sheet-symbols-legend)
		* [Fonts data sheet and Downloads](#fonts-data-sheet-and-downloads)
	* [Optimal Settings](#optimal-settings)
1. [About Token Colors](#about-token-colors)
	* [Apophis based](#apophis-based)
	* [Zenburn based](#zenburn-based)
1. [About my PHP Script **VSCode Themes Master**](#about-my-php-script-vscode-themes-master)
1. [Gratitude](#gratitude)
1. [License](#license)





<div align="right">

[Go to Table of Contents](#table-of-contents)

</div>

# Changelog for Zenburn Dark Matter Theme

> Engine: **VSCode Themes Master** v. 1.12.222 - Update: 2021-08-15 20:57:55

> Note 1: This Changelog is for the whole **Dark Matter Suite**, not just for this specific Theme.

> Note 2: [`Development`] and [`UI Manager`] sections in *Changelog* are addressed to the developer to remind him of any important changes that occurred during the writing of the code and do not always concern improvements made to the extension or to the theme.

**Last added fonts**

> Note: Fonts marked with a symbol &#11088; have a high readability at `10px`, or have a size of `9px`-`12px` such as to occupy the space of common fonts at `10px` and always guarantee high readability.

- **2021/08/14**

	1.  ['Anka/Coder '](https://fontlibrary.org/it/font/anka-coder "Download 'Anka/Coder '") 
	1.  ['Anka/Coder Condensed'](https://fontlibrary.org/it/font/anka-coder-condensed "Download 'Anka/Coder Condensed'") &#11088;
	1.  ['Anka/Coder Narrow'](https://fontlibrary.org/it/font/anka-coder-narrow "Download 'Anka/Coder Narrow'") &#11088;
	1.  [APL385 Unicode](http://apl385.com/fonts/index.htm "Download APL385 Unicode") 
	1.  [Caffeine Mono](https://fontesk.com/caffeine-mono-font/ "Download Caffeine Mono") 
	1.  [Calling Code](https://fontesk.com/calling-code-font/ "Download Calling Code") &#11088;
	1.  [Caskaydia Cove](https://fontesk.com/caskaydia-cove-typeface/ "Download Caskaydia Cove") 
	1.  [Codee Sans Mono](https://fontesk.com/codee-sans-mono-font/ "Download Codee Sans Mono") 
	1.  [Codetta](https://fontesk.com/codetta-typeface/ "Download Codetta") 
	1.  [Comic Shanns Regular](https://github.com/shannpersand/comic-shanns "Download Comic Shanns Regular") 
	1.  [Consolate Elf](https://www.cufonfonts.com/font/consolate-elf "Download Consolate Elf") 
	1.  [Courier Prime](https://quoteunquoteapps.com/courierprime/downloads/courier-prime.zip "Download Courier Prime") 
	1.  [Courier Prime Sans](https://quoteunquoteapps.com/courierprime/downloads/courier-prime-sans.zip "Download Courier Prime Sans") 
	1.  [CozetteVector](https://github.com/slavfox/Cozette/releases "Download CozetteVector") &#11088;
	1.  [Drafting Mono](https://fontesk.com/drafting-mono-typeface/ "Download Drafting Mono") 
	1.  [Fairfax](http://www.kreativekorp.com/software/fonts/fairfax.shtml "Download Fairfax") &#11088;
	1.  [Fairfax HD](http://www.kreativekorp.com/software/fonts/fairfaxhd.shtml "Download Fairfax HD") &#11088;
	1.  [Fairfax Serif](http://www.kreativekorp.com/software/fonts/fairfax.shtml "Download Fairfax Serif") 
	1.  [Lab Mono](https://fontesk.com/lab-mono-font/ "Download Lab Mono") 
	1.  [MonacoB](https://github.com/vjpr/monaco-bold "Download MonacoB") 
	1.  [NF Code](https://fontesk.com/nf-code/ "Download NF Code") 
	1.  [Natural Mono](https://fontlibrary.org/it/font/natural-mono "Download Natural Mono") &#11088;
	1.  [Natural Mono Alt](https://fontlibrary.org/it/font/natural-mono "Download Natural Mono Alt") &#11088;
	1.  [Pointfree](https://code.google.com/archive/p/i3project/downloads "Download Pointfree") 
	1.  [Sabir Mono](https://fontesk.com/sabir-mono-font/ "Download Sabir Mono") 
	1.  [Segoe Mono Boot](https://candyfonts.com/font/segoe-mono-boot.htm "Download Segoe Mono Boot") 
	1.  [Terminus (TTF) for Windows](https://files.ax86.net/terminus-ttf/ "Download Terminus (TTF) for Windows") &#11088;
	1.  [Ti92Pluspc](https://fontsgeek.com/fonts/Ti92Pluspc-Regular "Download Ti92Pluspc") 


- **2021/08/03**

	1.  [Aurulent Sans Mono](https://www.dafont.com/aurulent-sans-mono.font "Download Aurulent Sans Mono") 
	1.  [Bedstead](https://bjh21.me.uk/bedstead/ "Download Bedstead") 
	1.  [Borg Sans Mono](https://github.com/marnen/borg-sans-mono/releases "Download Borg Sans Mono") &#11088;
	1.  [D2Coding Ligature](https://github.com/naver/d2codingfont "Download D2Coding Ligature") &#11088;
	1.  [Generic Mono II](https://www.download-free-fonts.com/details/91877/generic-mono-ii-regular "Download Generic Mono II") 
	1.  [SK-Modernist Mono](https://fontsme.com/sk-modernist.font "Download SK-Modernist Mono") 


- **2021/07/26**

	1.  [Agave Regular](https://github.com/blobject/agave "Download Agave Regular") 
	1.  [Basier Square Mono](https://www.atipofoundry.com/fonts/basier-mono "Download Basier Square Mono") 
	1.  [Cispeo](https://fontsarena.com/cispeo-by-lucas-descroix/ "Download Cispeo") 
	1.  [Panic Sans](https://github.com/chrissimpkins/codeface/tree/master/fonts/panic-sans "Download Panic Sans") 
	1.  [Rec Mono Linear](https://github.com/arrowtype/recursive/tree/main/fonts/ArrowType-Recursive-1.078/Recursive_Code/RecMonoLinear "Download Rec Mono Linear") 
	1.  [Silka Mono](https://www.atipofoundry.com/fonts/silka-mono "Download Silka Mono") 


- **2021/07/20**

	1.  [Alma Mono](http://almamono.com/download/ "Download Alma Mono") 
	1.  [Bergen Mono](https://allbestfonts.com/bergen-mono/ "Download Bergen Mono") 
	1.  [Cutive Mono](https://fonts.google.com/specimen/Cutive+Mono?category=Monospace "Download Cutive Mono") 
	1.  [Drucifer](https://github.com/drucifer/drucifer-monospace "Download Drucifer") 
	1.  [FreeMono](https://fontmeme.com/fonts/freemono-font/ "Download FreeMono") 
	1.  [GT Pressura Mono](http://font2s.com/fonts/50932/ "Download GT Pressura Mono") 
	1.  [Go Mono](https://www.fontmirror.com/go-mono/ "Download Go Mono") 
	1.  [JuliaMono](https://juliamono.netlify.app/download/ "Download JuliaMono") &#11088;
	1.  [Lotion](https://font.nina.coffee/ "Download Lotion") 
	1.  [Onuava](https://www.urbanfonts.com/download?fid=9765&file=onuava.zip "Download Onuava") 
	1.  [Share Tech Mono](https://fonts.google.com/specimen/Share+Tech+Mono?category=Monospace "Download Share Tech Mono") 
	1.  [iA Writer Duospace](https://ia.net/downloads#fonts "Download iA Writer Duospace") 






**Version 1.1.196**
- [`Readme`] Improved `Fonts Table`: added **Google Search** button (&#127350;) (if the link for the font page no longer works) and added information if the font is `Bitmap` (&#127345;);
- [`Readme`] Revised some parameters and ratings of `Fonts`.
- [`Development`] Improved `Poweshell Commands / Output` messages;



**Version 1.1.195**
> I apologize to those of you who use the `HCUI` versions of the themes as you will have to set it up again due to the name change.

- [`Theme`] Added `Hearthstone` theme color.
- [`Theme`] Contrary to what I said about the `Opal` sub-theme, and tanks to configuration arrays reworking,  I decided to introduce the `HCUI` version for it too. Obviously the theme will reflect the characteristics of the standard `Opal` sub-theme, but, possibly, with a proportionally greater readability on monitors that do not comply with the `sRGB` standard and/or at a resolution lower than `FullHD`;
- [`Development`] Introduced handling of font rendering problems;
- [`Development`] Improved `Previews Control Monitor` (Console Log Monitor) messages output in `JS` and `PHP` engines;
- [`Development`] Improved `HCUI` config customization. I have reworked the construction arrays of the `HCUI` sub-themes and, for this reason, you may find differences in both the name of the theme and, probably, also in the colors compared to previous `HCUI` versions. This change was necessary to allow me to have more control over the global parameters for the optimization of the `HCUI` theme subset as well as in the standard versions;
- [`Development`] Improved fonts previews distribution over all `Fake UI` previews;
- [`Development`] `Fake UI` has been conformed to the VSCode UI, to get previews closer to the appearance of the new interface;
- [`Development`] Fixed randomization of `Fake UI`;
- [`Readme`] Added some new fonts (see **Last added fonts**), revised some parameters of the existing ones.



**Version 1.1.193**
- [`Readme`] Added &#11088; (star) symbol on fonts with `5.0` readability rating at `10px`.



See full [Changelog](https://marketplace.visualstudio.com/items/nicola-granata.zenburn-dark-matter/changelog) for previous versions.

<!--
//# Zenburn Dark Matter Theme 
-->



<div align="right">

[Go to Table of Contents](#table-of-contents)

</div>

# Zenburn token colors based skins

All the skins shown below are part of a suite designed to try to reduce visual fatigue while using `Visual Studio Code`.

The ultimate goal of the suite is to offer a good chance to find a theme that reduces disturbing elements and eye strain as much as possible.

However, attempts were made to leave error signals and selections clearly visible with moderate color contrasts.

> Tip 1: the display name of theme is as follow: the first part (e.g.: **Zenburn**) is token colors name, the second (e.g.: **Dark Matter**) is the main related colors structure, the third (e.g.: **Nadir**) part of name is the background suite and UI main colors, last part (e.g.: **Viserion**) is simply the representation name for main foreground/highlights color.

> Tip 2: The skins are quite similar but you can find the right color intensity based on the `sRGB` representation of your monitor and the sensitivity of your eyes to certain frequencies.

> Tip 3: If you like code version control and want to add PHPDoc / JSDoc (Documentor) data to your functions, try [**Version Boss**](https://marketplace.visualstudio.com/items/nicola-granata.version-boss)! `Version Boss` is a free extension that `simplifies versioning of scripting files`. Download it at [Marketplace](https://marketplace.visualstudio.com/items/nicola-granata.version-boss).

> Tip 4: Please do not rely only on the preview images of this theme (they are of average quality), but try it. Especially if you work at night and for many hours, almost certainly, among all my skins, you will find the colors suitable to avoid eye strain.



<div align="right">

[Go to Table of Contents](#table-of-contents)

</div>

# Zenburn Dark Matter Preview Gallery

> Note 1: Previews are done with [Html2Canvas](https://html2canvas.hertzen.com/) library, created by [Niklas von Hertzen](https://hertzen.com/), which unfortunately fails to capture shadows and transparencies. The images produced, although not 100% faithful to the theme, are still very close to its real appearance.

> Note 2: The preview system is based on a `Fake UI` built on the official VSCode UI.  If you notice any structural inconsistencies or deprecations of the previews, in comparison to the real VSCode UI, know that it is for the reason just explained.

> Note 3: **Fonts** in previews images **may not appear sharp than as real** (e.g. Bitmap fonts with fixed sizes). I suggest tro try them based on the rating.






<div align="right">

[Go to Table of Contents](#table-of-contents)

</div>

## **Anthracite** (1 skin): Anthracite Gray Background and Cold, Desatured Token Colors

<div align="center">



[![Zenburn Dark Matter - Anthracite - Komodo](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/raw/HEAD/./_gfx/zenburn-dark-matter-anthracite-komodo-preview.png)](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-anthracite-komodo-preview.png)

[Komodo](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-anthracite-komodo-preview.png) <br>Anthracite


<table>

</table>
</div>



<div align="right">

[Go to Table of Contents](#table-of-contents)

</div>

## **Cold** (13 skins): Cold Gray Background and Cold Token Colors

<div align="center">



[![Zenburn Dark Matter - Cold - Obsidian](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/raw/HEAD/./_gfx/zenburn-dark-matter-cold-obsidian-preview.png)](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-cold-obsidian-preview.png)

[Obsidian](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-cold-obsidian-preview.png) <br>Cold


<table>
<tr>
<td align="center" valign="top" >

[![Zenburn Dark Matter - Cold - Alcatraz](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/raw/HEAD/./_gfx/zenburn-dark-matter-cold-alcatraz-preview.png)](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-cold-alcatraz-preview.png)

[Alcatraz](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-cold-alcatraz-preview.png) <br>Cold
</td>
<td align="center" valign="top" >

[![Zenburn Dark Matter - Cold - Aquamarine](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/raw/HEAD/./_gfx/zenburn-dark-matter-cold-aquamarine-preview.png)](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-cold-aquamarine-preview.png)

[Aquamarine](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-cold-aquamarine-preview.png) <br>Cold
</td>
<td align="center" valign="top" >

[![Zenburn Dark Matter - Cold - Black Pond Has My Heart](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/raw/HEAD/./_gfx/zenburn-dark-matter-cold-black-pond-has-my-heart-preview.png)](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-cold-black-pond-has-my-heart-preview.png)

[Black pond has my heart](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-cold-black-pond-has-my-heart-preview.png) <br>Cold
</td>
<td align="center" valign="top" >

[![Zenburn Dark Matter - Cold - Klimt](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/raw/HEAD/./_gfx/zenburn-dark-matter-cold-klimt-preview.png)](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-cold-klimt-preview.png)

[Klimt](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-cold-klimt-preview.png) <br>Cold
</td>
</tr>
<tr>
<td align="center" valign="top" >

[![Zenburn Dark Matter - Cold - Komodo](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/raw/HEAD/./_gfx/zenburn-dark-matter-cold-komodo-preview.png)](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-cold-komodo-preview.png)

[Komodo](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-cold-komodo-preview.png) <br>Cold
</td>
<td align="center" valign="top" >

[![Zenburn Dark Matter - Cold - Kronos](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/raw/HEAD/./_gfx/zenburn-dark-matter-cold-kronos-preview.png)](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-cold-kronos-preview.png)

[Kronos](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-cold-kronos-preview.png) <br>Cold
</td>
<td align="center" valign="top" >

[![Zenburn Dark Matter - Cold - Meabh](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/raw/HEAD/./_gfx/zenburn-dark-matter-cold-meabh-preview.png)](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-cold-meabh-preview.png)

[Meabh](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-cold-meabh-preview.png) <br>Cold
</td>
<td align="center" valign="top" >

[![Zenburn Dark Matter - Cold - Moai](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/raw/HEAD/./_gfx/zenburn-dark-matter-cold-moai-preview.png)](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-cold-moai-preview.png)

[Moai](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-cold-moai-preview.png) <br>Cold
</td>
</tr>
<tr>
<td align="center" valign="top" >

[![Zenburn Dark Matter - Cold - Morion](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/raw/HEAD/./_gfx/zenburn-dark-matter-cold-morion-preview.png)](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-cold-morion-preview.png)

[Morion](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-cold-morion-preview.png) <br>Cold
</td>
<td align="center" valign="top" >

[![Zenburn Dark Matter - Cold - Mystic River](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/raw/HEAD/./_gfx/zenburn-dark-matter-cold-mystic-river-preview.png)](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-cold-mystic-river-preview.png)

[Mystic River](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-cold-mystic-river-preview.png) <br>Cold
</td>
<td align="center" valign="top" >

[![Zenburn Dark Matter - Cold - Sulfur](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/raw/HEAD/./_gfx/zenburn-dark-matter-cold-sulfur-preview.png)](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-cold-sulfur-preview.png)

[Sulfur](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-cold-sulfur-preview.png) <br>Cold
</td>
<td align="center" valign="top" >

[![Zenburn Dark Matter - Cold - Viserion](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/raw/HEAD/./_gfx/zenburn-dark-matter-cold-viserion-preview.png)](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-cold-viserion-preview.png)

[Viserion](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-cold-viserion-preview.png) <br>Cold
</td>
</tr>

</table>
</div>



<div align="right">

[Go to Table of Contents](#table-of-contents)

</div>

## **Deep Sea** (5 skins): Deep blue flat UI and Desatured Token Colors

<div align="center">



[![Zenburn Dark Matter - Deep Sea - Morion](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/raw/HEAD/./_gfx/zenburn-dark-matter-deepsea-morion-preview.png)](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-deepsea-morion-preview.png)

[Morion](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-deepsea-morion-preview.png) <br>Deep Sea


<table>
<tr>
<td align="center" valign="top" >

[![Zenburn Dark Matter - Deep Sea - Aquamarine](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/raw/HEAD/./_gfx/zenburn-dark-matter-deepsea-aquamarine-preview.png)](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-deepsea-aquamarine-preview.png)

[Aquamarine](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-deepsea-aquamarine-preview.png) <br>Deep Sea
</td>
<td align="center" valign="top" >

[![Zenburn Dark Matter - Deep Sea - Mystic River](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/raw/HEAD/./_gfx/zenburn-dark-matter-deepsea-mystic-river-preview.png)](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-deepsea-mystic-river-preview.png)

[Mystic River](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-deepsea-mystic-river-preview.png) <br>Deep Sea
</td>
<td align="center" valign="top" >

[![Zenburn Dark Matter - Deep Sea - Sulfur](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/raw/HEAD/./_gfx/zenburn-dark-matter-deepsea-sulfur-preview.png)](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-deepsea-sulfur-preview.png)

[Sulfur](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-deepsea-sulfur-preview.png) <br>Deep Sea
</td>
<td align="center" valign="top" >

[![Zenburn Dark Matter - Deep Sea - Viserion](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/raw/HEAD/./_gfx/zenburn-dark-matter-deepsea-viserion-preview.png)](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-deepsea-viserion-preview.png)

[Viserion](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-deepsea-viserion-preview.png) <br>Deep Sea
</td>
</tr>

</table>
</div>



<div align="right">

[Go to Table of Contents](#table-of-contents)

</div>

## **EclipseDS** (6 skins): Eclipse DevStyle Gray Background and Desatured Token Colors

<div align="center">



[![Zenburn Dark Matter - EclipseDS - Komodo](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/raw/HEAD/./_gfx/zenburn-dark-matter-eclipseds-komodo-preview.png)](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-eclipseds-komodo-preview.png)

[Komodo](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-eclipseds-komodo-preview.png) <br>EclipseDS


<table>
<tr>
<td align="center" valign="top" >

[![Zenburn Dark Matter - EclipseDS - Black Pond Has My Heart](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/raw/HEAD/./_gfx/zenburn-dark-matter-eclipseds-black-pond-has-my-heart-preview.png)](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-eclipseds-black-pond-has-my-heart-preview.png)

[Black pond has my heart](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-eclipseds-black-pond-has-my-heart-preview.png) <br>EclipseDS
</td>
<td align="center" valign="top" >

[![Zenburn Dark Matter - EclipseDS - Klimt](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/raw/HEAD/./_gfx/zenburn-dark-matter-eclipseds-klimt-preview.png)](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-eclipseds-klimt-preview.png)

[Klimt](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-eclipseds-klimt-preview.png) <br>EclipseDS
</td>
<td align="center" valign="top" >

[![Zenburn Dark Matter - EclipseDS - Kronos](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/raw/HEAD/./_gfx/zenburn-dark-matter-eclipseds-kronos-preview.png)](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-eclipseds-kronos-preview.png)

[Kronos](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-eclipseds-kronos-preview.png) <br>EclipseDS
</td>
<td align="center" valign="top" >

[![Zenburn Dark Matter - EclipseDS - Meabh](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/raw/HEAD/./_gfx/zenburn-dark-matter-eclipseds-meabh-preview.png)](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-eclipseds-meabh-preview.png)

[Meabh](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-eclipseds-meabh-preview.png) <br>EclipseDS
</td>
</tr>
<tr>
<td align="center" valign="top" >

[![Zenburn Dark Matter - EclipseDS - Obsidian](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/raw/HEAD/./_gfx/zenburn-dark-matter-eclipseds-obsidian-preview.png)](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-eclipseds-obsidian-preview.png)

[Obsidian](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-eclipseds-obsidian-preview.png) <br>EclipseDS
</td>
<td align="center" valign="top" >

![](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/raw/HEAD/./_gfx/_fake_preview.png)

</td><td align="center" valign="top" >

![](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/raw/HEAD/./_gfx/_fake_preview.png)

</td><td align="center" valign="top" >

![](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/raw/HEAD/./_gfx/_fake_preview.png)

</td></tr>

</table>
</div>



<div align="right">

[Go to Table of Contents](#table-of-contents)

</div>

## **Equinox** (10 skins): Dark Night UI and Desatured Token Colors

<div align="center">



[![Zenburn Dark Matter - Equinox - Komodo](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/raw/HEAD/./_gfx/zenburn-dark-matter-equinox-komodo-preview.png)](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-equinox-komodo-preview.png)

[Komodo](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-equinox-komodo-preview.png) <br>Equinox


<table>
<tr>
<td align="center" valign="top" >

[![Zenburn Dark Matter - Equinox - Black Pond Has My Heart](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/raw/HEAD/./_gfx/zenburn-dark-matter-equinox-black-pond-has-my-heart-preview.png)](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-equinox-black-pond-has-my-heart-preview.png)

[Black pond has my heart](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-equinox-black-pond-has-my-heart-preview.png) <br>Equinox
</td>
<td align="center" valign="top" >

[![Zenburn Dark Matter - Equinox - Burn](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/raw/HEAD/./_gfx/zenburn-dark-matter-equinox-burn-preview.png)](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-equinox-burn-preview.png)

[Burn](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-equinox-burn-preview.png) <br>Equinox
</td>
<td align="center" valign="top" >

[![Zenburn Dark Matter - Equinox - Klimt](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/raw/HEAD/./_gfx/zenburn-dark-matter-equinox-klimt-preview.png)](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-equinox-klimt-preview.png)

[Klimt](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-equinox-klimt-preview.png) <br>Equinox
</td>
<td align="center" valign="top" >

[![Zenburn Dark Matter - Equinox - Kronos](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/raw/HEAD/./_gfx/zenburn-dark-matter-equinox-kronos-preview.png)](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-equinox-kronos-preview.png)

[Kronos](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-equinox-kronos-preview.png) <br>Equinox
</td>
</tr>
<tr>
<td align="center" valign="top" >

[![Zenburn Dark Matter - Equinox - Meabh](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/raw/HEAD/./_gfx/zenburn-dark-matter-equinox-meabh-preview.png)](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-equinox-meabh-preview.png)

[Meabh](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-equinox-meabh-preview.png) <br>Equinox
</td>
<td align="center" valign="top" >

[![Zenburn Dark Matter - Equinox - Moai](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/raw/HEAD/./_gfx/zenburn-dark-matter-equinox-moai-preview.png)](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-equinox-moai-preview.png)

[Moai](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-equinox-moai-preview.png) <br>Equinox
</td>
<td align="center" valign="top" >

[![Zenburn Dark Matter - Equinox - Mystic River](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/raw/HEAD/./_gfx/zenburn-dark-matter-equinox-mystic-river-preview.png)](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-equinox-mystic-river-preview.png)

[Mystic River](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-equinox-mystic-river-preview.png) <br>Equinox
</td>
<td align="center" valign="top" >

[![Zenburn Dark Matter - Equinox - Obsidian](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/raw/HEAD/./_gfx/zenburn-dark-matter-equinox-obsidian-preview.png)](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-equinox-obsidian-preview.png)

[Obsidian](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-equinox-obsidian-preview.png) <br>Equinox
</td>
</tr>
<tr>
<td align="center" valign="top" >

[![Zenburn Dark Matter - Equinox - Viserion](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/raw/HEAD/./_gfx/zenburn-dark-matter-equinox-viserion-preview.png)](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-equinox-viserion-preview.png)

[Viserion](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-equinox-viserion-preview.png) <br>Equinox
</td>
<td align="center" valign="top" >

![](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/raw/HEAD/./_gfx/_fake_preview.png)

</td><td align="center" valign="top" >

![](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/raw/HEAD/./_gfx/_fake_preview.png)

</td><td align="center" valign="top" >

![](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/raw/HEAD/./_gfx/_fake_preview.png)

</td></tr>

</table>
</div>



<div align="right">

[Go to Table of Contents](#table-of-contents)

</div>

## **Flat** (13 skins): Flat Gray Background and Default Token Colos

<div align="center">



[![Zenburn Dark Matter - Flat - Mystic River](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/raw/HEAD/./_gfx/zenburn-dark-matter-flat-mystic-river-preview.png)](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-flat-mystic-river-preview.png)

[Mystic River](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-flat-mystic-river-preview.png) <br>Flat


<table>
<tr>
<td align="center" valign="top" >

[![Zenburn Dark Matter - Flat - Alcatraz](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/raw/HEAD/./_gfx/zenburn-dark-matter-flat-alcatraz-preview.png)](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-flat-alcatraz-preview.png)

[Alcatraz](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-flat-alcatraz-preview.png) <br>Flat
</td>
<td align="center" valign="top" >

[![Zenburn Dark Matter - Flat - Aquamarine](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/raw/HEAD/./_gfx/zenburn-dark-matter-flat-aquamarine-preview.png)](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-flat-aquamarine-preview.png)

[Aquamarine](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-flat-aquamarine-preview.png) <br>Flat
</td>
<td align="center" valign="top" >

[![Zenburn Dark Matter - Flat - Black Pond Has My Heart](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/raw/HEAD/./_gfx/zenburn-dark-matter-flat-black-pond-has-my-heart-preview.png)](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-flat-black-pond-has-my-heart-preview.png)

[Black pond has my heart](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-flat-black-pond-has-my-heart-preview.png) <br>Flat
</td>
<td align="center" valign="top" >

[![Zenburn Dark Matter - Flat - Klimt](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/raw/HEAD/./_gfx/zenburn-dark-matter-flat-klimt-preview.png)](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-flat-klimt-preview.png)

[Klimt](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-flat-klimt-preview.png) <br>Flat
</td>
</tr>
<tr>
<td align="center" valign="top" >

[![Zenburn Dark Matter - Flat - Komodo](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/raw/HEAD/./_gfx/zenburn-dark-matter-flat-komodo-preview.png)](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-flat-komodo-preview.png)

[Komodo](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-flat-komodo-preview.png) <br>Flat
</td>
<td align="center" valign="top" >

[![Zenburn Dark Matter - Flat - Kronos](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/raw/HEAD/./_gfx/zenburn-dark-matter-flat-kronos-preview.png)](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-flat-kronos-preview.png)

[Kronos](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-flat-kronos-preview.png) <br>Flat
</td>
<td align="center" valign="top" >

[![Zenburn Dark Matter - Flat - Meabh](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/raw/HEAD/./_gfx/zenburn-dark-matter-flat-meabh-preview.png)](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-flat-meabh-preview.png)

[Meabh](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-flat-meabh-preview.png) <br>Flat
</td>
<td align="center" valign="top" >

[![Zenburn Dark Matter - Flat - Moai](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/raw/HEAD/./_gfx/zenburn-dark-matter-flat-moai-preview.png)](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-flat-moai-preview.png)

[Moai](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-flat-moai-preview.png) <br>Flat
</td>
</tr>
<tr>
<td align="center" valign="top" >

[![Zenburn Dark Matter - Flat - Morion](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/raw/HEAD/./_gfx/zenburn-dark-matter-flat-morion-preview.png)](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-flat-morion-preview.png)

[Morion](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-flat-morion-preview.png) <br>Flat
</td>
<td align="center" valign="top" >

[![Zenburn Dark Matter - Flat - Obsidian](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/raw/HEAD/./_gfx/zenburn-dark-matter-flat-obsidian-preview.png)](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-flat-obsidian-preview.png)

[Obsidian](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-flat-obsidian-preview.png) <br>Flat
</td>
<td align="center" valign="top" >

[![Zenburn Dark Matter - Flat - Sulfur](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/raw/HEAD/./_gfx/zenburn-dark-matter-flat-sulfur-preview.png)](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-flat-sulfur-preview.png)

[Sulfur](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-flat-sulfur-preview.png) <br>Flat
</td>
<td align="center" valign="top" >

[![Zenburn Dark Matter - Flat - Viserion](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/raw/HEAD/./_gfx/zenburn-dark-matter-flat-viserion-preview.png)](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-flat-viserion-preview.png)

[Viserion](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-flat-viserion-preview.png) <br>Flat
</td>
</tr>

</table>
</div>



<div align="right">

[Go to Table of Contents](#table-of-contents)

</div>

## **Insomnia** (9 skins): Flat Grayed UI and Satured Token Colors

<div align="center">



[![Zenburn Dark Matter - Insomnia - Meabh](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/raw/HEAD/./_gfx/zenburn-dark-matter-insomnia-meabh-preview.png)](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-insomnia-meabh-preview.png)

[Meabh](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-insomnia-meabh-preview.png) <br>Insomnia


<table>
<tr>
<td align="center" valign="top" >

[![Zenburn Dark Matter - Insomnia - Black Pond Has My Heart](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/raw/HEAD/./_gfx/zenburn-dark-matter-insomnia-black-pond-has-my-heart-preview.png)](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-insomnia-black-pond-has-my-heart-preview.png)

[Black pond has my heart](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-insomnia-black-pond-has-my-heart-preview.png) <br>Insomnia
</td>
<td align="center" valign="top" >

[![Zenburn Dark Matter - Insomnia - Burn](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/raw/HEAD/./_gfx/zenburn-dark-matter-insomnia-burn-preview.png)](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-insomnia-burn-preview.png)

[Burn](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-insomnia-burn-preview.png) <br>Insomnia
</td>
<td align="center" valign="top" >

[![Zenburn Dark Matter - Insomnia - Komodo](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/raw/HEAD/./_gfx/zenburn-dark-matter-insomnia-komodo-preview.png)](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-insomnia-komodo-preview.png)

[Komodo](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-insomnia-komodo-preview.png) <br>Insomnia
</td>
<td align="center" valign="top" >

[![Zenburn Dark Matter - Insomnia - Kronos](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/raw/HEAD/./_gfx/zenburn-dark-matter-insomnia-kronos-preview.png)](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-insomnia-kronos-preview.png)

[Kronos](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-insomnia-kronos-preview.png) <br>Insomnia
</td>
</tr>
<tr>
<td align="center" valign="top" >

[![Zenburn Dark Matter - Insomnia - Moai](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/raw/HEAD/./_gfx/zenburn-dark-matter-insomnia-moai-preview.png)](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-insomnia-moai-preview.png)

[Moai](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-insomnia-moai-preview.png) <br>Insomnia
</td>
<td align="center" valign="top" >

[![Zenburn Dark Matter - Insomnia - Mystic River](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/raw/HEAD/./_gfx/zenburn-dark-matter-insomnia-mystic-river-preview.png)](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-insomnia-mystic-river-preview.png)

[Mystic River](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-insomnia-mystic-river-preview.png) <br>Insomnia
</td>
<td align="center" valign="top" >

[![Zenburn Dark Matter - Insomnia - Obsidian](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/raw/HEAD/./_gfx/zenburn-dark-matter-insomnia-obsidian-preview.png)](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-insomnia-obsidian-preview.png)

[Obsidian](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-insomnia-obsidian-preview.png) <br>Insomnia
</td>
<td align="center" valign="top" >

[![Zenburn Dark Matter - Insomnia - Viserion](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/raw/HEAD/./_gfx/zenburn-dark-matter-insomnia-viserion-preview.png)](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-insomnia-viserion-preview.png)

[Viserion](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-insomnia-viserion-preview.png) <br>Insomnia
</td>
</tr>

</table>
</div>



<div align="right">

[Go to Table of Contents](#table-of-contents)

</div>

## **Low Blue** (1 skin): Low Blue Light on UI and Token Colors

<div align="center">



[![Zenburn Dark Matter - Low Blue - Obsidian](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/raw/HEAD/./_gfx/zenburn-dark-matter-lowblue-obsidian-preview.png)](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-lowblue-obsidian-preview.png)

[Obsidian](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-lowblue-obsidian-preview.png) <br>Low Blue


<table>

</table>
</div>



<div align="right">

[Go to Table of Contents](#table-of-contents)

</div>

## **Midnight** (2 skins): Midnight Blue Background and Cold, Desatured Token Colors (Telegram X Midnight Theme)

<div align="center">



[![Zenburn Dark Matter - Midnight - Viserion](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/raw/HEAD/./_gfx/zenburn-dark-matter-midnight-viserion-preview.png)](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-midnight-viserion-preview.png)

[Viserion](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-midnight-viserion-preview.png) <br>Midnight


<table>
<tr>
<td align="center" valign="top" >

[![Zenburn Dark Matter - Midnight - Klimt](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/raw/HEAD/./_gfx/zenburn-dark-matter-midnight-klimt-preview.png)](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-midnight-klimt-preview.png)

[Klimt](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-midnight-klimt-preview.png) <br>Midnight
</td>
<td align="center" valign="top" >

![](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/raw/HEAD/./_gfx/_fake_preview.png)

</td><td align="center" valign="top" >

![](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/raw/HEAD/./_gfx/_fake_preview.png)

</td><td align="center" valign="top" >

![](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/raw/HEAD/./_gfx/_fake_preview.png)

</td></tr>

</table>
</div>



<div align="right">

[Go to Table of Contents](#table-of-contents)

</div>

## **Nadir** (14 skins): Flat Grayed UI and Desatured Token Colors

<div align="center">



[![Zenburn Dark Matter - Nadir - Komodo](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/raw/HEAD/./_gfx/zenburn-dark-matter-nadir-komodo-preview.png)](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-nadir-komodo-preview.png)

[Komodo](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-nadir-komodo-preview.png) <br>Nadir


<table>
<tr>
<td align="center" valign="top" >

[![Zenburn Dark Matter - Nadir - Alcatraz](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/raw/HEAD/./_gfx/zenburn-dark-matter-nadir-alcatraz-preview.png)](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-nadir-alcatraz-preview.png)

[Alcatraz](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-nadir-alcatraz-preview.png) <br>Nadir
</td>
<td align="center" valign="top" >

[![Zenburn Dark Matter - Nadir - Aquamarine](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/raw/HEAD/./_gfx/zenburn-dark-matter-nadir-aquamarine-preview.png)](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-nadir-aquamarine-preview.png)

[Aquamarine](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-nadir-aquamarine-preview.png) <br>Nadir
</td>
<td align="center" valign="top" >

[![Zenburn Dark Matter - Nadir - Black Pond Has My Heart](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/raw/HEAD/./_gfx/zenburn-dark-matter-nadir-black-pond-has-my-heart-preview.png)](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-nadir-black-pond-has-my-heart-preview.png)

[Black pond has my heart](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-nadir-black-pond-has-my-heart-preview.png) <br>Nadir
</td>
<td align="center" valign="top" >

[![Zenburn Dark Matter - Nadir - Burn](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/raw/HEAD/./_gfx/zenburn-dark-matter-nadir-burn-preview.png)](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-nadir-burn-preview.png)

[Burn](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-nadir-burn-preview.png) <br>Nadir
</td>
</tr>
<tr>
<td align="center" valign="top" >

[![Zenburn Dark Matter - Nadir - Klimt](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/raw/HEAD/./_gfx/zenburn-dark-matter-nadir-klimt-preview.png)](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-nadir-klimt-preview.png)

[Klimt](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-nadir-klimt-preview.png) <br>Nadir
</td>
<td align="center" valign="top" >

[![Zenburn Dark Matter - Nadir - Kronos](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/raw/HEAD/./_gfx/zenburn-dark-matter-nadir-kronos-preview.png)](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-nadir-kronos-preview.png)

[Kronos](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-nadir-kronos-preview.png) <br>Nadir
</td>
<td align="center" valign="top" >

[![Zenburn Dark Matter - Nadir - Meabh](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/raw/HEAD/./_gfx/zenburn-dark-matter-nadir-meabh-preview.png)](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-nadir-meabh-preview.png)

[Meabh](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-nadir-meabh-preview.png) <br>Nadir
</td>
<td align="center" valign="top" >

[![Zenburn Dark Matter - Nadir - Moai](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/raw/HEAD/./_gfx/zenburn-dark-matter-nadir-moai-preview.png)](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-nadir-moai-preview.png)

[Moai](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-nadir-moai-preview.png) <br>Nadir
</td>
</tr>
<tr>
<td align="center" valign="top" >

[![Zenburn Dark Matter - Nadir - Morion](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/raw/HEAD/./_gfx/zenburn-dark-matter-nadir-morion-preview.png)](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-nadir-morion-preview.png)

[Morion](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-nadir-morion-preview.png) <br>Nadir
</td>
<td align="center" valign="top" >

[![Zenburn Dark Matter - Nadir - Mystic River](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/raw/HEAD/./_gfx/zenburn-dark-matter-nadir-mystic-river-preview.png)](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-nadir-mystic-river-preview.png)

[Mystic River](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-nadir-mystic-river-preview.png) <br>Nadir
</td>
<td align="center" valign="top" >

[![Zenburn Dark Matter - Nadir - Obsidian](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/raw/HEAD/./_gfx/zenburn-dark-matter-nadir-obsidian-preview.png)](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-nadir-obsidian-preview.png)

[Obsidian](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-nadir-obsidian-preview.png) <br>Nadir
</td>
<td align="center" valign="top" >

[![Zenburn Dark Matter - Nadir - Sulfur](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/raw/HEAD/./_gfx/zenburn-dark-matter-nadir-sulfur-preview.png)](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-nadir-sulfur-preview.png)

[Sulfur](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-nadir-sulfur-preview.png) <br>Nadir
</td>
</tr>
<tr>
<td align="center" valign="top" >

[![Zenburn Dark Matter - Nadir - Viserion](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/raw/HEAD/./_gfx/zenburn-dark-matter-nadir-viserion-preview.png)](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-nadir-viserion-preview.png)

[Viserion](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-nadir-viserion-preview.png) <br>Nadir
</td>
<td align="center" valign="top" >

![](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/raw/HEAD/./_gfx/_fake_preview.png)

</td><td align="center" valign="top" >

![](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/raw/HEAD/./_gfx/_fake_preview.png)

</td><td align="center" valign="top" >

![](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/raw/HEAD/./_gfx/_fake_preview.png)

</td></tr>

</table>
</div>



<div align="right">

[Go to Table of Contents](#table-of-contents)

</div>

## **Nirvana** (11 skins): Low Blue Light only on Token Colors

<div align="center">



[![Zenburn Dark Matter - Nirvana - Mystic River](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/raw/HEAD/./_gfx/zenburn-dark-matter-nirvana-mystic-river-preview.png)](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-nirvana-mystic-river-preview.png)

[Mystic River](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-nirvana-mystic-river-preview.png) <br>Nirvana


<table>
<tr>
<td align="center" valign="top" >

[![Zenburn Dark Matter - Nirvana - Alcatraz](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/raw/HEAD/./_gfx/zenburn-dark-matter-nirvana-alcatraz-preview.png)](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-nirvana-alcatraz-preview.png)

[Alcatraz](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-nirvana-alcatraz-preview.png) <br>Nirvana
</td>
<td align="center" valign="top" >

[![Zenburn Dark Matter - Nirvana - Black Pond Has My Heart](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/raw/HEAD/./_gfx/zenburn-dark-matter-nirvana-black-pond-has-my-heart-preview.png)](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-nirvana-black-pond-has-my-heart-preview.png)

[Black pond has my heart](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-nirvana-black-pond-has-my-heart-preview.png) <br>Nirvana
</td>
<td align="center" valign="top" >

[![Zenburn Dark Matter - Nirvana - Burn](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/raw/HEAD/./_gfx/zenburn-dark-matter-nirvana-burn-preview.png)](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-nirvana-burn-preview.png)

[Burn](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-nirvana-burn-preview.png) <br>Nirvana
</td>
<td align="center" valign="top" >

[![Zenburn Dark Matter - Nirvana - Klimt](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/raw/HEAD/./_gfx/zenburn-dark-matter-nirvana-klimt-preview.png)](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-nirvana-klimt-preview.png)

[Klimt](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-nirvana-klimt-preview.png) <br>Nirvana
</td>
</tr>
<tr>
<td align="center" valign="top" >

[![Zenburn Dark Matter - Nirvana - Komodo](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/raw/HEAD/./_gfx/zenburn-dark-matter-nirvana-komodo-preview.png)](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-nirvana-komodo-preview.png)

[Komodo](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-nirvana-komodo-preview.png) <br>Nirvana
</td>
<td align="center" valign="top" >

[![Zenburn Dark Matter - Nirvana - Kronos](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/raw/HEAD/./_gfx/zenburn-dark-matter-nirvana-kronos-preview.png)](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-nirvana-kronos-preview.png)

[Kronos](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-nirvana-kronos-preview.png) <br>Nirvana
</td>
<td align="center" valign="top" >

[![Zenburn Dark Matter - Nirvana - Meabh](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/raw/HEAD/./_gfx/zenburn-dark-matter-nirvana-meabh-preview.png)](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-nirvana-meabh-preview.png)

[Meabh](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-nirvana-meabh-preview.png) <br>Nirvana
</td>
<td align="center" valign="top" >

[![Zenburn Dark Matter - Nirvana - Moai](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/raw/HEAD/./_gfx/zenburn-dark-matter-nirvana-moai-preview.png)](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-nirvana-moai-preview.png)

[Moai](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-nirvana-moai-preview.png) <br>Nirvana
</td>
</tr>
<tr>
<td align="center" valign="top" >

[![Zenburn Dark Matter - Nirvana - Obsidian](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/raw/HEAD/./_gfx/zenburn-dark-matter-nirvana-obsidian-preview.png)](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-nirvana-obsidian-preview.png)

[Obsidian](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-nirvana-obsidian-preview.png) <br>Nirvana
</td>
<td align="center" valign="top" >

[![Zenburn Dark Matter - Nirvana - Viserion](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/raw/HEAD/./_gfx/zenburn-dark-matter-nirvana-viserion-preview.png)](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-nirvana-viserion-preview.png)

[Viserion](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-nirvana-viserion-preview.png) <br>Nirvana
</td>
<td align="center" valign="top" >

![](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/raw/HEAD/./_gfx/_fake_preview.png)

</td><td align="center" valign="top" >

![](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/raw/HEAD/./_gfx/_fake_preview.png)

</td></tr>

</table>
</div>



<div align="right">

[Go to Table of Contents](#table-of-contents)

</div>

## **Warm** (13 skins): Warm Gray Background and Warm Token Colors

<div align="center">



[![Zenburn Dark Matter - Warm - Obsidian](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/raw/HEAD/./_gfx/zenburn-dark-matter-warm-obsidian-preview.png)](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-warm-obsidian-preview.png)

[Obsidian](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-warm-obsidian-preview.png) <br>Warm


<table>
<tr>
<td align="center" valign="top" >

[![Zenburn Dark Matter - Warm - Alcatraz](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/raw/HEAD/./_gfx/zenburn-dark-matter-warm-alcatraz-preview.png)](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-warm-alcatraz-preview.png)

[Alcatraz](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-warm-alcatraz-preview.png) <br>Warm
</td>
<td align="center" valign="top" >

[![Zenburn Dark Matter - Warm - Aquamarine](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/raw/HEAD/./_gfx/zenburn-dark-matter-warm-aquamarine-preview.png)](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-warm-aquamarine-preview.png)

[Aquamarine](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-warm-aquamarine-preview.png) <br>Warm
</td>
<td align="center" valign="top" >

[![Zenburn Dark Matter - Warm - Black Pond Has My Heart](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/raw/HEAD/./_gfx/zenburn-dark-matter-warm-black-pond-has-my-heart-preview.png)](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-warm-black-pond-has-my-heart-preview.png)

[Black pond has my heart](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-warm-black-pond-has-my-heart-preview.png) <br>Warm
</td>
<td align="center" valign="top" >

[![Zenburn Dark Matter - Warm - Klimt](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/raw/HEAD/./_gfx/zenburn-dark-matter-warm-klimt-preview.png)](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-warm-klimt-preview.png)

[Klimt](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-warm-klimt-preview.png) <br>Warm
</td>
</tr>
<tr>
<td align="center" valign="top" >

[![Zenburn Dark Matter - Warm - Komodo](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/raw/HEAD/./_gfx/zenburn-dark-matter-warm-komodo-preview.png)](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-warm-komodo-preview.png)

[Komodo](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-warm-komodo-preview.png) <br>Warm
</td>
<td align="center" valign="top" >

[![Zenburn Dark Matter - Warm - Kronos](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/raw/HEAD/./_gfx/zenburn-dark-matter-warm-kronos-preview.png)](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-warm-kronos-preview.png)

[Kronos](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-warm-kronos-preview.png) <br>Warm
</td>
<td align="center" valign="top" >

[![Zenburn Dark Matter - Warm - Meabh](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/raw/HEAD/./_gfx/zenburn-dark-matter-warm-meabh-preview.png)](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-warm-meabh-preview.png)

[Meabh](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-warm-meabh-preview.png) <br>Warm
</td>
<td align="center" valign="top" >

[![Zenburn Dark Matter - Warm - Moai](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/raw/HEAD/./_gfx/zenburn-dark-matter-warm-moai-preview.png)](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-warm-moai-preview.png)

[Moai](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-warm-moai-preview.png) <br>Warm
</td>
</tr>
<tr>
<td align="center" valign="top" >

[![Zenburn Dark Matter - Warm - Morion](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/raw/HEAD/./_gfx/zenburn-dark-matter-warm-morion-preview.png)](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-warm-morion-preview.png)

[Morion](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-warm-morion-preview.png) <br>Warm
</td>
<td align="center" valign="top" >

[![Zenburn Dark Matter - Warm - Mystic River](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/raw/HEAD/./_gfx/zenburn-dark-matter-warm-mystic-river-preview.png)](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-warm-mystic-river-preview.png)

[Mystic River](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-warm-mystic-river-preview.png) <br>Warm
</td>
<td align="center" valign="top" >

[![Zenburn Dark Matter - Warm - Sulfur](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/raw/HEAD/./_gfx/zenburn-dark-matter-warm-sulfur-preview.png)](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-warm-sulfur-preview.png)

[Sulfur](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-warm-sulfur-preview.png) <br>Warm
</td>
<td align="center" valign="top" >

[![Zenburn Dark Matter - Warm - Viserion](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/raw/HEAD/./_gfx/zenburn-dark-matter-warm-viserion-preview.png)](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-warm-viserion-preview.png)

[Viserion](https://github.com/nicolagranata/vscode-theme-zenburn-dark-matter/blob/HEAD/./_gfx/zenburn-dark-matter-warm-viserion-preview.png) <br>Warm
</td>
</tr>

</table>
</div>






<div align="right">

[Go to Table of Contents](#table-of-contents)

</div>

# Free Fonts for coding

The settings for the following fonts are correctly tested on a 24" monitor FullHD and 32" Monitor QHD. The indicated sizes are the minimum to obtain a clear display of the fonts.



<div align="right">

[Go to Table of Contents](#table-of-contents)

</div>

## Fonts Comparative Table and Downloads

Click on the name of font to download, and the script icon to go to optimal settings to copy/paste in your `Settings.ini`.

> Tip 1: `Readability rating` is based on the readability of the font to the size of `10px`: the fonts with rating `5.0` have these characteristics, the other evaluations indicate that the font is readable at a size greater than `10px` but that they occupy more space and, consequently you have fewer rows and columns per screen page. Some fonts at the size of `12px` can have rating `4.5` / `5.0` because they occupy same visual space to the size of `10px` of other fonts present in the selection with rating `5.0`.<br><br>**Note**: At the right size, all fonts readability rating is **`5.0`** / **`5.0`**.<br>

> Tip 2: Some fonts `Weight` property start from `300` / `400` / `500`: values below these values has no effect. Others, instead, start from `100` but can be thiny and unreadable below size `12pt`. `Note`: the `Weight` value is the minimum value for readability, at the indicated size, on my monitor: you can find other setting more comfortable for your eyes.

> Tip 3: When you go to download page you can find different variants of the same font but with same _font name_ (e.g. version with different line-height or letter "k" with no loop): you cannot install all font variants because they have same _font name_ in font manager: when you install a font variant, the previous font variant will be overwritten.

> Tip 4: if available, install the fonts in **OTF** format.

> Tip 5: The indicated fonts often receive updates. I suggest you check every now and then and, if necessary, download the new version.



### Fonts data sheet symbols legend

<div align="center"  style="margin:auto;">

| **Sym** | **Label** |
| :---: | :--- |
|<span title="Font Name and Download" style="font-weight:normal;font-size:130%;line-height:100%;" >&#127462;&#8259;&#127487;</span>|Font Name and Download|
|<span title="New Font" style="font-weight:normal;font-size:130%;line-height:100%;" >&#9752;</span>|New Font|
|<span title="**5.0 Stars** Readability Rating ad Size `10px`" style="font-weight:normal;font-size:130%;line-height:100%;" >&#11088;</span>|**5.0 Stars** Readability Rating ad Size `10px`|
|<span title="Bitmap font" style="font-weight:normal;font-size:130%;line-height:100%;" >&#127345;</span>|Bitmap font|
|<span title=" Minimum Size recommended for good Readability" style="font-weight:normal;font-size:130%;line-height:100%;" >&#128474;</span>| Minimum Size recommended for good Readability|
|<span title="Font Line Height Preset" style="font-weight:normal;font-size:130%;line-height:100%;" >&#8683;</span>|Font Line Height Preset|
|<span title="Font Weight Preset" style="font-weight:normal;font-size:130%;line-height:100%;" >&#119809;</span>|Font Weight Preset|
|<span title="Font Letter Spacing Preset" style="font-weight:normal;font-size:130%;line-height:100%;" >&#8700;</span>|Font Letter Spacing Preset|
|<span title="Font has Ligatures" style="font-weight:normal;font-size:130%;line-height:100%;" >&#8655;</span>|Font has Ligatures|
|<span title="Font has Script Variant for Italic" style="font-weight:normal;font-size:130%;line-height:100%;" >&#119998;</span>|Font has Script Variant for Italic|
|<span title="Font is Serif" style="font-weight:normal;font-size:130%;line-height:100%;" >&#120450;</span>|Font is Serif|
|<span title="Font has Zero Slashed or Zero Dotted" style="font-weight:normal;font-size:130%;line-height:100%;" >&#216;</span>|Font has Zero Slashed or Zero Dotted|
|<span title="Font Readability at Size `10px`" style="font-weight:normal;font-size:130%;line-height:100%;" >&#128065;</span>|Font Readability at Size `10px`|
|<span title="Go to Settings for Font" style="font-weight:normal;font-size:130%;line-height:100%;" >&#128195;</span>|Go to Settings for Font|


</div>

### Fonts data sheet and Downloads

Click on the **Font Name** to download or on &#127350; to search it with Google.

<div align="center"  style="margin:auto;">

|**N.**|<span title="Font Name and Download" style="font-weight:normal;font-size:130%;line-height:100%;" >&#127462;&#8259;&#127487;</span> |<span title=" Minimum Size recommended for good Readability" style="font-weight:normal;font-size:130%;line-height:100%;" >&#128474;</span> |<span title="Font Line Height Preset" style="font-weight:normal;font-size:130%;line-height:100%;" >&#8683;</span> |<span title="Font Weight Preset" style="font-weight:normal;font-size:130%;line-height:100%;" >&#119809;</span> |<span title="Font Letter Spacing Preset" style="font-weight:normal;font-size:130%;line-height:100%;" >&#8700;</span> |<span title="Font has Ligatures" style="font-weight:normal;font-size:130%;line-height:100%;" >&#8655;</span> |<span title="Font has Script Variant for Italic" style="font-weight:normal;font-size:130%;line-height:100%;" >&#119998;</span> |<span title="Font is Serif" style="font-weight:normal;font-size:130%;line-height:100%;" >&#120450;</span> |<span title="Font has Zero Slashed or Zero Dotted" style="font-weight:normal;font-size:130%;line-height:100%;" >&#216;</span> |<span title="Font Readability at Size `10px`" style="font-weight:normal;font-size:130%;line-height:100%;" >&#128065;</span> |<span title="Go to Settings for Font" style="font-weight:normal;font-size:130%;line-height:100%;" >&#128195;</span> |
|---:|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|------:|------:|
| 001 | [&#127350;](https://www.google.it/search?q=Anka%2FCoder%20%20font "Search with Google: 'Anka/Coder ' font") -  [Anka/Coder ](https://fontlibrary.org/it/font/anka-coder "Download 'Anka/Coder '")   <span style="color:ForestGreen;">&#9752;</span>  | 12 | 16 | 500 | 0.0 | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:ForestGreen;">&#9679;</span> | 4.0 | [&#128195;](#font-001-ankacoder- "Go to Settings for Font Anka/Coder ")  |
| 002 | [&#127350;](https://www.google.it/search?q=Anka%2FCoder%20Condensed%20font "Search with Google: 'Anka/Coder Condensed' font") -  [Anka/Coder Condensed](https://fontlibrary.org/it/font/anka-coder-condensed "Download 'Anka/Coder Condensed'")  &#11088; <span style="color:ForestGreen;">&#9752;</span>  | 12 | 16 | 500 | 0.0 | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:ForestGreen;">&#9679;</span> | 5.0 | [&#128195;](#font-002-ankacoder-condensed "Go to Settings for Font Anka/Coder Condensed")  |
| 003 | [&#127350;](https://www.google.it/search?q=Anka%2FCoder%20Narrow%20font "Search with Google: 'Anka/Coder Narrow' font") -  [Anka/Coder Narrow](https://fontlibrary.org/it/font/anka-coder-narrow "Download 'Anka/Coder Narrow'")  &#11088; <span style="color:ForestGreen;">&#9752;</span>  | 12 | 16 | 500 | 0.0 | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:ForestGreen;">&#9679;</span> | 5.0 | [&#128195;](#font-003-ankacoder-narrow "Go to Settings for Font Anka/Coder Narrow")  |
| 004 | [&#127350;](https://www.google.it/search?q=APL385%20Unicode%20font "Search with Google: APL385 Unicode font") -  [APL385 Unicode](http://apl385.com/fonts/index.htm "Download APL385 Unicode")   <span style="color:ForestGreen;">&#9752;</span>  | 12 | 16 | 500 | 0.0 | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | 4.5 | [&#128195;](#font-004-apl385-unicode "Go to Settings for Font APL385 Unicode")  |
| 005 | [&#127350;](https://www.google.it/search?q=Agave%20Regular%20font "Search with Google: Agave Regular font") -  [Agave Regular](https://github.com/blobject/agave "Download Agave Regular")   <span style="color:ForestGreen;">&#9752;</span>  | 13 | 18 | 500 | 0.0 | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:ForestGreen;">&#9679;</span> | 4.0 | [&#128195;](#font-005-agave-regular "Go to Settings for Font Agave Regular")  |
| 006 | [&#127350;](https://www.google.it/search?q=Alma%20Mono%20font "Search with Google: Alma Mono font") -  [Alma Mono](http://almamono.com/download/ "Download Alma Mono")   <span style="color:ForestGreen;">&#9752;</span>  | 10 | 14 | 400 | 0.0 | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:ForestGreen;">&#9679;</span> | 4.0 | [&#128195;](#font-006-alma-mono "Go to Settings for Font Alma Mono")  |
| 007 | [&#127350;](https://www.google.it/search?q=Andale%20Mono%20font "Search with Google: Andale Mono font") -  [Andale Mono](https://www.cufonfonts.com/download/font/andale-mono "Download Andale Mono")    | 11 | 16 | 500 | 0.0 | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:ForestGreen;">&#9679;</span> | 4.0 | [&#128195;](#font-007-andale-mono "Go to Settings for Font Andale Mono")  |
| 008 | [&#127350;](https://www.google.it/search?q=Anonymous%20Pro%20font "Search with Google: Anonymous Pro font") -  [Anonymous Pro](https://www.marksimonson.com/fonts/view/anonymous-pro "Download Anonymous Pro")    | 11 | 15 | 500 | 0.0 | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:ForestGreen;">&#9679;</span> | 4.5 | [&#128195;](#font-008-anonymous-pro "Go to Settings for Font Anonymous Pro")  |
| 009 | [&#127350;](https://www.google.it/search?q=Antikor%20Mono%20font "Search with Google: Antikor Mono font") -  [Antikor Mono](https://www.cufonfonts.com/download/font/antikor-mono "Download Antikor Mono")  &#11088;  | 11 | 17 | 400 | 0.0 | <span style="color:DarkRed;"></span> | <span style="color:ForestGreen;">&#9679;</span> | <span style="color:DarkRed;"></span> | <span style="color:ForestGreen;">&#9679;</span> | 5.0 | [&#128195;](#font-009-antikor-mono "Go to Settings for Font Antikor Mono")  |
| 010 | [&#127350;](https://www.google.it/search?q=Aurulent%20Sans%20Mono%20font "Search with Google: Aurulent Sans Mono font") -  [Aurulent Sans Mono](https://www.dafont.com/aurulent-sans-mono.font "Download Aurulent Sans Mono")   <span style="color:ForestGreen;">&#9752;</span>  | 10 | 16 | 500 | 0.0 | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | 4.0 | [&#128195;](#font-010-aurulent-sans-mono "Go to Settings for Font Aurulent Sans Mono")  |
|||||||||||||
|**N.**|<span title="Font Name and Download" style="font-weight:normal;font-size:130%;line-height:100%;" >&#127462;&#8259;&#127487;</span> |<span title=" Minimum Size recommended for good Readability" style="font-weight:normal;font-size:130%;line-height:100%;" >&#128474;</span> |<span title="Font Line Height Preset" style="font-weight:normal;font-size:130%;line-height:100%;" >&#8683;</span> |<span title="Font Weight Preset" style="font-weight:normal;font-size:130%;line-height:100%;" >&#119809;</span> |<span title="Font Letter Spacing Preset" style="font-weight:normal;font-size:130%;line-height:100%;" >&#8700;</span> |<span title="Font has Ligatures" style="font-weight:normal;font-size:130%;line-height:100%;" >&#8655;</span> |<span title="Font has Script Variant for Italic" style="font-weight:normal;font-size:130%;line-height:100%;" >&#119998;</span> |<span title="Font is Serif" style="font-weight:normal;font-size:130%;line-height:100%;" >&#120450;</span> |<span title="Font has Zero Slashed or Zero Dotted" style="font-weight:normal;font-size:130%;line-height:100%;" >&#216;</span> |<span title="Font Readability at Size `10px`" style="font-weight:normal;font-size:130%;line-height:100%;" >&#128065;</span> |<span title="Go to Settings for Font" style="font-weight:normal;font-size:130%;line-height:100%;" >&#128195;</span> |
| 011 | [&#127350;](https://www.google.it/search?q=AverageMono%20font "Search with Google: AverageMono font") -  [AverageMono](https://fontlibrary.org/en/font/average-mono "Download AverageMono")    | 12 | 18 | 500 | 0.0 | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:ForestGreen;">&#9679;</span> | <span style="color:ForestGreen;">&#9679;</span> | 4.0 | [&#128195;](#font-011-averagemono "Go to Settings for Font AverageMono")  |
| 012 | [&#127350;](https://www.google.it/search?q=B612%20Mono%20font "Search with Google: B612 Mono font") -  [B612 Mono](https://fonts.google.com/specimen/B612+Mono "Download B612 Mono")    | 10 | 15 | 500 | 0.0 | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:ForestGreen;">&#9679;</span> | <span style="color:DarkRed;"></span> | 4.5 | [&#128195;](#font-012-b612-mono "Go to Settings for Font B612 Mono")  |
| 013 | [&#127350;](https://www.google.it/search?q=BPmono%20font "Search with Google: BPmono font") -  [BPmono](https://www.fontmirror.com/monaco "Download BPmono")    | 11 | 15 | 500 | 0.0 | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:ForestGreen;">&#9679;</span> | <span style="color:ForestGreen;">&#9679;</span> | 4.0 | [&#128195;](#font-013-bpmono "Go to Settings for Font BPmono")  |
| 014 | [&#127350;](https://www.google.it/search?q=Basier%20Square%20Mono%20font "Search with Google: Basier Square Mono font") -  [Basier Square Mono](https://www.atipofoundry.com/fonts/basier-mono "Download Basier Square Mono")   <span style="color:ForestGreen;">&#9752;</span>  | 1 | 16 | 500 | 0.0 | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:ForestGreen;">&#9679;</span> | 3.5 | [&#128195;](#font-014-basier-square-mono "Go to Settings for Font Basier Square Mono")  |
| 015 | [&#127350;](https://www.google.it/search?q=Bedstead%20font "Search with Google: Bedstead font") -  [Bedstead](https://bjh21.me.uk/bedstead/ "Download Bedstead")   <span style="color:ForestGreen;">&#9752;</span>  | 11 | 17 | 500 | 0.0 | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | 3.5 | [&#128195;](#font-015-bedstead "Go to Settings for Font Bedstead")  |
| 016 | [&#127350;](https://www.google.it/search?q=Bergen%20Mono%20font "Search with Google: Bergen Mono font") -  [Bergen Mono](https://allbestfonts.com/bergen-mono/ "Download Bergen Mono")   <span style="color:ForestGreen;">&#9752;</span>  | 11 | 16 | 400 | 0.0 | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:ForestGreen;">&#9679;</span> | 3.5 | [&#128195;](#font-016-bergen-mono "Go to Settings for Font Bergen Mono")  |
| 017 | [&#127350;](https://www.google.it/search?q=Bitstream%20Vera%20Sans%20Mono%20font "Search with Google: Bitstream Vera Sans Mono font") -  [Bitstream Vera Sans Mono](https://www.dafont.com/it/bitstream-vera-mono.font "Download Bitstream Vera Sans Mono")    | 11 | 15 | 500 | 0.0 | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:ForestGreen;">&#9679;</span> | 4.0 | [&#128195;](#font-017-bitstream-vera-sans-mono "Go to Settings for Font Bitstream Vera Sans Mono")  |
| 018 | [&#127350;](https://www.google.it/search?q=Borg%20Sans%20Mono%20font "Search with Google: Borg Sans Mono font") -  [Borg Sans Mono](https://github.com/marnen/borg-sans-mono/releases "Download Borg Sans Mono")  &#11088; <span style="color:ForestGreen;">&#9752;</span>  | 11 | 16 | 500 | 0.0 | <span style="color:ForestGreen;">&#9679;</span> | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:ForestGreen;">&#9679;</span> | 5.0 | [&#128195;](#font-018-borg-sans-mono "Go to Settings for Font Borg Sans Mono")  |
| 019 | [&#127350;](https://www.google.it/search?q=Caffeine%20Mono%20font "Search with Google: Caffeine Mono font") -  [Caffeine Mono](https://fontesk.com/caffeine-mono-font/ "Download Caffeine Mono")   <span style="color:ForestGreen;">&#9752;</span>  | 13 | 18 | 500 | 0.0 | <span style="color:ForestGreen;">&#9679;</span> | <span style="color:DarkRed;"></span> | <span style="color:ForestGreen;">&#9679;</span> | <span style="color:ForestGreen;">&#9679;</span> | 3.5 | [&#128195;](#font-019-caffeine-mono "Go to Settings for Font Caffeine Mono")  |
| 020 | [&#127350;](https://www.google.it/search?q=Calling%20Code%20font "Search with Google: Calling Code font") -  [Calling Code](https://fontesk.com/calling-code-font/ "Download Calling Code")  &#11088; <span style="color:ForestGreen;">&#9752;</span>  | 11 | 16 | 500 | 0.0 | <span style="color:ForestGreen;">&#9679;</span> | <span style="color:DarkRed;"></span> | <span style="color:ForestGreen;">&#9679;</span> | <span style="color:ForestGreen;">&#9679;</span> | 5.0 | [&#128195;](#font-020-calling-code "Go to Settings for Font Calling Code")  |
|||||||||||||
|**N.**|<span title="Font Name and Download" style="font-weight:normal;font-size:130%;line-height:100%;" >&#127462;&#8259;&#127487;</span> |<span title=" Minimum Size recommended for good Readability" style="font-weight:normal;font-size:130%;line-height:100%;" >&#128474;</span> |<span title="Font Line Height Preset" style="font-weight:normal;font-size:130%;line-height:100%;" >&#8683;</span> |<span title="Font Weight Preset" style="font-weight:normal;font-size:130%;line-height:100%;" >&#119809;</span> |<span title="Font Letter Spacing Preset" style="font-weight:normal;font-size:130%;line-height:100%;" >&#8700;</span> |<span title="Font has Ligatures" style="font-weight:normal;font-size:130%;line-height:100%;" >&#8655;</span> |<span title="Font has Script Variant for Italic" style="font-weight:normal;font-size:130%;line-height:100%;" >&#119998;</span> |<span title="Font is Serif" style="font-weight:normal;font-size:130%;line-height:100%;" >&#120450;</span> |<span title="Font has Zero Slashed or Zero Dotted" style="font-weight:normal;font-size:130%;line-height:100%;" >&#216;</span> |<span title="Font Readability at Size `10px`" style="font-weight:normal;font-size:130%;line-height:100%;" >&#128065;</span> |<span title="Go to Settings for Font" style="font-weight:normal;font-size:130%;line-height:100%;" >&#128195;</span> |
| 021 | [&#127350;](https://www.google.it/search?q=CamingoCode%20font "Search with Google: CamingoCode font") -  [CamingoCode](https://www.janfromm.de/typefaces/camingomono/camingocode/ "Download CamingoCode")  &#11088;  | 11 | 16 | 500 | 0.0 | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:ForestGreen;">&#9679;</span> | 5.0 | [&#128195;](#font-021-camingocode "Go to Settings for Font CamingoCode")  |
| 022 | [&#127350;](https://www.google.it/search?q=Cascadia%20Code%20font "Search with Google: Cascadia Code font") -  [Cascadia Code](https://github.com/microsoft/cascadia-code/releases "Download Cascadia Code")    | 11 | 16 | 400 | 0.0 | <span style="color:ForestGreen;">&#9679;</span> | <span style="color:DarkRed;"></span> | <span style="color:ForestGreen;">&#9679;</span> | <span style="color:ForestGreen;">&#9679;</span> | 4.0 | [&#128195;](#font-022-cascadia-code "Go to Settings for Font Cascadia Code")  |
| 023 | [&#127350;](https://www.google.it/search?q=Cascadia%20Mono%20font "Search with Google: Cascadia Mono font") -  [Cascadia Mono](https://github.com/microsoft/cascadia-code/releases "Download Cascadia Mono")    | 11 | 15 | 400 | 0.0 | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:ForestGreen;">&#9679;</span> | <span style="color:ForestGreen;">&#9679;</span> | 4.0 | [&#128195;](#font-023-cascadia-mono "Go to Settings for Font Cascadia Mono")  |
| 024 | [&#127350;](https://www.google.it/search?q=Caskaydia%20Cove%20font "Search with Google: Caskaydia Cove font") -  [Caskaydia Cove](https://fontesk.com/caskaydia-cove-typeface/ "Download Caskaydia Cove")   <span style="color:ForestGreen;">&#9752;</span>  | 10 | 16 | 500 | 0.0 | <span style="color:ForestGreen;">&#9679;</span> | <span style="color:DarkRed;"></span> | <span style="color:ForestGreen;">&#9679;</span> | <span style="color:ForestGreen;">&#9679;</span> | 4.5 | [&#128195;](#font-024-caskaydia-cove "Go to Settings for Font Caskaydia Cove")  |
| 025 | [&#127350;](https://www.google.it/search?q=Cispeo%20font "Search with Google: Cispeo font") -  [Cispeo](https://fontsarena.com/cispeo-by-lucas-descroix/ "Download Cispeo")   <span style="color:ForestGreen;">&#9752;</span>  | 11 | 16 | 500 | 0.0 | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:ForestGreen;">&#9679;</span> | <span style="color:ForestGreen;">&#9679;</span> | 4.5 | [&#128195;](#font-025-cispeo "Go to Settings for Font Cispeo")  |
| 026 | [&#127350;](https://www.google.it/search?q=Code%20New%20Roman%20font "Search with Google: Code New Roman font") -  [Code New Roman](https://www.dafont.com/code-new-roman.font "Download Code New Roman")    | 12 | 16 | 500 | 0.0 | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:ForestGreen;">&#9679;</span> | <span style="color:ForestGreen;">&#9679;</span> | 4.0 | [&#128195;](#font-026-code-new-roman "Go to Settings for Font Code New Roman")  |
| 027 | [&#127350;](https://www.google.it/search?q=Codee%20Sans%20Mono%20font "Search with Google: Codee Sans Mono font") -  [Codee Sans Mono](https://fontesk.com/codee-sans-mono-font/ "Download Codee Sans Mono")   <span style="color:ForestGreen;">&#9752;</span>  | 9 | 16 | 500 | 0.0 | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:ForestGreen;">&#9679;</span> | 3.5 | [&#128195;](#font-027-codee-sans-mono "Go to Settings for Font Codee Sans Mono")  |
| 028 | [&#127350;](https://www.google.it/search?q=Codetta%20font "Search with Google: Codetta font") -  [Codetta](https://fontesk.com/codetta-typeface/ "Download Codetta")   <span style="color:ForestGreen;">&#9752;</span>  | 11 | 16 | 500 | 0.0 | <span style="color:ForestGreen;">&#9679;</span> | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:ForestGreen;">&#9679;</span> | 4.5 | [&#128195;](#font-028-codetta "Go to Settings for Font Codetta")  |
| 029 | [&#127350;](https://www.google.it/search?q=Comic%20Shanns%20Regular%20font "Search with Google: Comic Shanns Regular font") -  [Comic Shanns Regular](https://github.com/shannpersand/comic-shanns "Download Comic Shanns Regular")   <span style="color:ForestGreen;">&#9752;</span>  | 12 | 16 | 500 | 0.0 | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:ForestGreen;">&#9679;</span> | <span style="color:ForestGreen;">&#9679;</span> | 4.5 | [&#128195;](#font-029-comic-shanns-regular "Go to Settings for Font Comic Shanns Regular")  |
| 030 | [&#127350;](https://www.google.it/search?q=Consola%20Mono%20font "Search with Google: Consola Mono font") -  [Consola Mono](https://fontlibrary.org/en/font/consolamono "Download Consola Mono")    | 12 | 16 | 500 | 0.0 | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:ForestGreen;">&#9679;</span> | 4.0 | [&#128195;](#font-030-consola-mono "Go to Settings for Font Consola Mono")  |
|||||||||||||
|**N.**|<span title="Font Name and Download" style="font-weight:normal;font-size:130%;line-height:100%;" >&#127462;&#8259;&#127487;</span> |<span title=" Minimum Size recommended for good Readability" style="font-weight:normal;font-size:130%;line-height:100%;" >&#128474;</span> |<span title="Font Line Height Preset" style="font-weight:normal;font-size:130%;line-height:100%;" >&#8683;</span> |<span title="Font Weight Preset" style="font-weight:normal;font-size:130%;line-height:100%;" >&#119809;</span> |<span title="Font Letter Spacing Preset" style="font-weight:normal;font-size:130%;line-height:100%;" >&#8700;</span> |<span title="Font has Ligatures" style="font-weight:normal;font-size:130%;line-height:100%;" >&#8655;</span> |<span title="Font has Script Variant for Italic" style="font-weight:normal;font-size:130%;line-height:100%;" >&#119998;</span> |<span title="Font is Serif" style="font-weight:normal;font-size:130%;line-height:100%;" >&#120450;</span> |<span title="Font has Zero Slashed or Zero Dotted" style="font-weight:normal;font-size:130%;line-height:100%;" >&#216;</span> |<span title="Font Readability at Size `10px`" style="font-weight:normal;font-size:130%;line-height:100%;" >&#128065;</span> |<span title="Go to Settings for Font" style="font-weight:normal;font-size:130%;line-height:100%;" >&#128195;</span> |
| 031 | [&#127350;](https://www.google.it/search?q=Consolas%20Ligaturized%20v2%20font "Search with Google: Consolas Ligaturized v2 font") -  [Consolas Ligaturized v2](https://github.com/somq/consolas-ligaturized/ "Download Consolas Ligaturized v2")    | 11 | 16 | 500 | 0.0 | <span style="color:ForestGreen;">&#9679;</span> | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:ForestGreen;">&#9679;</span> | 4.0 | [&#128195;](#font-031-consolas-ligaturized-v2 "Go to Settings for Font Consolas Ligaturized v2")  |
| 032 | [&#127350;](https://www.google.it/search?q=Consolate%20Elf%20font "Search with Google: Consolate Elf font") -  [Consolate Elf](https://www.cufonfonts.com/font/consolate-elf "Download Consolate Elf")   <span style="color:ForestGreen;">&#9752;</span>  | 12 | 16 | 500 | 0.0 | <span style="color:ForestGreen;">&#9679;</span> | <span style="color:DarkRed;"></span> | <span style="color:ForestGreen;">&#9679;</span> | <span style="color:ForestGreen;">&#9679;</span> | 4.0 | [&#128195;](#font-032-consolate-elf "Go to Settings for Font Consolate Elf")  |
| 033 | [&#127350;](https://www.google.it/search?q=Conta%20font "Search with Google: Conta font") -  [Conta](https://fontesk.com/conta-typeface/ "Download Conta")    | 11 | 18 | 500 | 0.0 | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:ForestGreen;">&#9679;</span> | <span style="color:DarkRed;"></span> | 4.5 | [&#128195;](#font-033-conta "Go to Settings for Font Conta")  |
| 034 | [&#127350;](https://www.google.it/search?q=CosmicSansNeueMono%20font "Search with Google: CosmicSansNeueMono font") -  [CosmicSansNeueMono](https://github.com/gregkh/cosmic-sans-neue "Download CosmicSansNeueMono")    | 12 | 15 | 500 | 0.0 | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:ForestGreen;">&#9679;</span> | 3.5 | [&#128195;](#font-034-cosmicsansneuemono "Go to Settings for Font CosmicSansNeueMono")  |
| 035 | [&#127350;](https://www.google.it/search?q=Courier%20Prime%20font "Search with Google: Courier Prime font") -  [Courier Prime](https://quoteunquoteapps.com/courierprime/downloads/courier-prime.zip "Download Courier Prime")   <span style="color:ForestGreen;">&#9752;</span>  | 12 | 15 | 500 | 0.0 | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:ForestGreen;">&#9679;</span> | <span style="color:DarkRed;"></span> | 4.5 | [&#128195;](#font-035-courier-prime "Go to Settings for Font Courier Prime")  |
| 036 | [&#127350;](https://www.google.it/search?q=Courier%20Prime%20Code%20font "Search with Google: Courier Prime Code font") -  [Courier Prime Code](https://quoteunquoteapps.com/courierprime/downloads/courier-prime-code.zip "Download Courier Prime Code")    | 12 | 15 | 500 | 0.0 | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:ForestGreen;">&#9679;</span> | <span style="color:ForestGreen;">&#9679;</span> | 4.0 | [&#128195;](#font-036-courier-prime-code "Go to Settings for Font Courier Prime Code")  |
| 037 | [&#127350;](https://www.google.it/search?q=Courier%20Prime%20Sans%20font "Search with Google: Courier Prime Sans font") -  [Courier Prime Sans](https://quoteunquoteapps.com/courierprime/downloads/courier-prime-sans.zip "Download Courier Prime Sans")   <span style="color:ForestGreen;">&#9752;</span>  | 12 | 15 | 500 | 0.0 | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | 4.5 | [&#128195;](#font-037-courier-prime-sans "Go to Settings for Font Courier Prime Sans")  |
| 038 | [&#127350;](https://www.google.it/search?q=Cousine%20font "Search with Google: Cousine font") -  [Cousine](https://www.fontsc.com/font/download/cousine "Download Cousine")    | 11 | 16 | 500 | 0.7 | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:ForestGreen;">&#9679;</span> | <span style="color:ForestGreen;">&#9679;</span> | 4.0 | [&#128195;](#font-038-cousine "Go to Settings for Font Cousine")  |
| 039 | [&#127350;](https://www.google.it/search?q=CozetteVector%20font "Search with Google: CozetteVector font") -  [CozetteVector](https://github.com/slavfox/Cozette/releases "Download CozetteVector")  &#127345;  &#11088; <span style="color:ForestGreen;">&#9752;</span>  | 12 | 15 | 500 | 0.0 | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:ForestGreen;">&#9679;</span> | 5.0 | [&#128195;](#font-039-cozettevector "Go to Settings for Font CozetteVector")  |
| 040 | [&#127350;](https://www.google.it/search?q=Cutive%20Mono%20font "Search with Google: Cutive Mono font") -  [Cutive Mono](https://fonts.google.com/specimen/Cutive+Mono?category=Monospace "Download Cutive Mono")   <span style="color:ForestGreen;">&#9752;</span>  | 14 | 16 | 500 | 0.0 | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:ForestGreen;">&#9679;</span> | <span style="color:ForestGreen;">&#9679;</span> | 3.5 | [&#128195;](#font-040-cutive-mono "Go to Settings for Font Cutive Mono")  |
|||||||||||||
|**N.**|<span title="Font Name and Download" style="font-weight:normal;font-size:130%;line-height:100%;" >&#127462;&#8259;&#127487;</span> |<span title=" Minimum Size recommended for good Readability" style="font-weight:normal;font-size:130%;line-height:100%;" >&#128474;</span> |<span title="Font Line Height Preset" style="font-weight:normal;font-size:130%;line-height:100%;" >&#8683;</span> |<span title="Font Weight Preset" style="font-weight:normal;font-size:130%;line-height:100%;" >&#119809;</span> |<span title="Font Letter Spacing Preset" style="font-weight:normal;font-size:130%;line-height:100%;" >&#8700;</span> |<span title="Font has Ligatures" style="font-weight:normal;font-size:130%;line-height:100%;" >&#8655;</span> |<span title="Font has Script Variant for Italic" style="font-weight:normal;font-size:130%;line-height:100%;" >&#119998;</span> |<span title="Font is Serif" style="font-weight:normal;font-size:130%;line-height:100%;" >&#120450;</span> |<span title="Font has Zero Slashed or Zero Dotted" style="font-weight:normal;font-size:130%;line-height:100%;" >&#216;</span> |<span title="Font Readability at Size `10px`" style="font-weight:normal;font-size:130%;line-height:100%;" >&#128065;</span> |<span title="Go to Settings for Font" style="font-weight:normal;font-size:130%;line-height:100%;" >&#128195;</span> |
| 041 | [&#127350;](https://www.google.it/search?q=D2Coding%20Ligature%20font "Search with Google: D2Coding Ligature font") -  [D2Coding Ligature](https://github.com/naver/d2codingfont "Download D2Coding Ligature")  &#11088; <span style="color:ForestGreen;">&#9752;</span>  | 12 | 16 | 500 | 0.0 | <span style="color:ForestGreen;">&#9679;</span> | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:ForestGreen;">&#9679;</span> | 5.0 | [&#128195;](#font-041-d2coding-ligature "Go to Settings for Font D2Coding Ligature")  |
| 042 | [&#127350;](https://www.google.it/search?q=DM%20Mono%20font "Search with Google: DM Mono font") -  [DM Mono](https://fonts.google.com/specimen/DM+Mono?category=Monospace&preview.size=11 "Download DM Mono")    | 11 | 16 | 400 | 0.0 | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:ForestGreen;">&#9679;</span> | <span style="color:ForestGreen;">&#9679;</span> | 3.5 | [&#128195;](#font-042-dm-mono "Go to Settings for Font DM Mono")  |
| 043 | [&#127350;](https://www.google.it/search?q=DaddyTimeMono%20font "Search with Google: DaddyTimeMono font") -  [DaddyTimeMono](https://github.com/BourgeoisBear/DaddyTimeMono "Download DaddyTimeMono")    | 12 | 16 | 500 | 0.0 | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:ForestGreen;">&#9679;</span> | 4.0 | [&#128195;](#font-043-daddytimemono "Go to Settings for Font DaddyTimeMono")  |
| 044 | [&#127350;](https://www.google.it/search?q=Dank%20Mono%20font "Search with Google: Dank Mono font") -  [Dank Mono](https://github.com/goblincore/Coding-Fonts "Download Dank Mono")    | 12 | 18 | 500 | 0.0 | <span style="color:ForestGreen;">&#9679;</span> | <span style="color:DarkRed;"></span> | <span style="color:ForestGreen;">&#9679;</span> | <span style="color:ForestGreen;">&#9679;</span> | 4.0 | [&#128195;](#font-044-dank-mono "Go to Settings for Font Dank Mono")  |
| 045 | [&#127350;](https://www.google.it/search?q=DejaVu%20Sans%20Code%20font "Search with Google: DejaVu Sans Code font") -  [DejaVu Sans Code](https://github.com/SSNikolaevich/DejaVuSansCode/releases/ "Download DejaVu Sans Code")    | 11 | 15 | 500 | 0.0 | <span style="color:ForestGreen;">&#9679;</span> | <span style="color:DarkRed;"></span> | <span style="color:ForestGreen;">&#9679;</span> | <span style="color:ForestGreen;">&#9679;</span> | 4.0 | [&#128195;](#font-045-dejavu-sans-code "Go to Settings for Font DejaVu Sans Code")  |
| 046 | [&#127350;](https://www.google.it/search?q=DejaVu%20Sans%20Mono%20font "Search with Google: DejaVu Sans Mono font") -  [DejaVu Sans Mono](https://sourceforge.net/projects/dejavu/ "Download DejaVu Sans Mono")    | 11 | 15 | 500 | 0.0 | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:ForestGreen;">&#9679;</span> | <span style="color:ForestGreen;">&#9679;</span> | 4.0 | [&#128195;](#font-046-dejavu-sans-mono "Go to Settings for Font DejaVu Sans Mono")  |
| 047 | [&#127350;](https://www.google.it/search?q=DejaVu%20Sans%20Mono%20-%20Bront%20font "Search with Google: DejaVu Sans Mono - Bront font") -  [DejaVu Sans Mono - Bront](https://github.com/chrismwendt/bront "Download DejaVu Sans Mono - Bront")    | 11 | 15 | 500 | 0.0 | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:ForestGreen;">&#9679;</span> | 4.0 | [&#128195;](#font-047-dejavu-sans-mono---bront "Go to Settings for Font DejaVu Sans Mono - Bront")  |
| 048 | [&#127350;](https://www.google.it/search?q=Drafting%20Mono%20font "Search with Google: Drafting Mono font") -  [Drafting Mono](https://fontesk.com/drafting-mono-typeface/ "Download Drafting Mono")   <span style="color:ForestGreen;">&#9752;</span>  | 11 | 16 | 500 | 0.0 | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:ForestGreen;">&#9679;</span> | <span style="color:ForestGreen;">&#9679;</span> | 4.0 | [&#128195;](#font-048-drafting-mono "Go to Settings for Font Drafting Mono")  |
| 049 | [&#127350;](https://www.google.it/search?q=Droid%20Sans%20Mono%20font "Search with Google: Droid Sans Mono font") -  [Droid Sans Mono](https://www.fontsquirrel.com/fonts/download/droid-sans "Download Droid Sans Mono")    | 10 | 14 | 500 | 0.0 | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:ForestGreen;">&#9679;</span> | <span style="color:DarkRed;"></span> | 4.5 | [&#128195;](#font-049-droid-sans-mono "Go to Settings for Font Droid Sans Mono")  |
| 050 | [&#127350;](https://www.google.it/search?q=Drucifer%20font "Search with Google: Drucifer font") -  [Drucifer](https://github.com/drucifer/drucifer-monospace "Download Drucifer")   <span style="color:ForestGreen;">&#9752;</span>  | 11 | 15 | 500 | 0.0 | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:ForestGreen;">&#9679;</span> | 4.5 | [&#128195;](#font-050-drucifer "Go to Settings for Font Drucifer")  |
|||||||||||||
|**N.**|<span title="Font Name and Download" style="font-weight:normal;font-size:130%;line-height:100%;" >&#127462;&#8259;&#127487;</span> |<span title=" Minimum Size recommended for good Readability" style="font-weight:normal;font-size:130%;line-height:100%;" >&#128474;</span> |<span title="Font Line Height Preset" style="font-weight:normal;font-size:130%;line-height:100%;" >&#8683;</span> |<span title="Font Weight Preset" style="font-weight:normal;font-size:130%;line-height:100%;" >&#119809;</span> |<span title="Font Letter Spacing Preset" style="font-weight:normal;font-size:130%;line-height:100%;" >&#8700;</span> |<span title="Font has Ligatures" style="font-weight:normal;font-size:130%;line-height:100%;" >&#8655;</span> |<span title="Font has Script Variant for Italic" style="font-weight:normal;font-size:130%;line-height:100%;" >&#119998;</span> |<span title="Font is Serif" style="font-weight:normal;font-size:130%;line-height:100%;" >&#120450;</span> |<span title="Font has Zero Slashed or Zero Dotted" style="font-weight:normal;font-size:130%;line-height:100%;" >&#216;</span> |<span title="Font Readability at Size `10px`" style="font-weight:normal;font-size:130%;line-height:100%;" >&#128065;</span> |<span title="Go to Settings for Font" style="font-weight:normal;font-size:130%;line-height:100%;" >&#128195;</span> |
| 051 | [&#127350;](https://www.google.it/search?q=Envy%20Code%20R%20font "Search with Google: Envy Code R font") -  [Envy Code R](https://damieng.com/blog/2008/05/26/envy-code-r-preview-7-coding-font-released "Download Envy Code R")    | 11 | 14 | 500 | 0.0 | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:ForestGreen;">&#9679;</span> | <span style="color:ForestGreen;">&#9679;</span> | 4.5 | [&#128195;](#font-051-envy-code-r "Go to Settings for Font Envy Code R")  |
| 052 | [&#127350;](https://www.google.it/search?q=Fairfax%20font "Search with Google: Fairfax font") -  [Fairfax](http://www.kreativekorp.com/software/fonts/fairfax.shtml "Download Fairfax")  &#11088; <span style="color:ForestGreen;">&#9752;</span>  | 12 | 16 | 500 | 0.0 | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:ForestGreen;">&#9679;</span> | 5.0 | [&#128195;](#font-052-fairfax "Go to Settings for Font Fairfax")  |
| 053 | [&#127350;](https://www.google.it/search?q=Fairfax%20HD%20font "Search with Google: Fairfax HD font") -  [Fairfax HD](http://www.kreativekorp.com/software/fonts/fairfaxhd.shtml "Download Fairfax HD")  &#11088; <span style="color:ForestGreen;">&#9752;</span>  | 12 | 16 | 500 | 0.0 | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:ForestGreen;">&#9679;</span> | 5.0 | [&#128195;](#font-053-fairfax-hd "Go to Settings for Font Fairfax HD")  |
| 054 | [&#127350;](https://www.google.it/search?q=Fairfax%20Serif%20font "Search with Google: Fairfax Serif font") -  [Fairfax Serif](http://www.kreativekorp.com/software/fonts/fairfax.shtml "Download Fairfax Serif")   <span style="color:ForestGreen;">&#9752;</span>  | 12 | 16 | 500 | 0.0 | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:ForestGreen;">&#9679;</span> | <span style="color:ForestGreen;">&#9679;</span> | 4.5 | [&#128195;](#font-054-fairfax-serif "Go to Settings for Font Fairfax Serif")  |
| 055 | [&#127350;](https://www.google.it/search?q=Fantasque%20Sans%20Mono%20font "Search with Google: Fantasque Sans Mono font") -  [Fantasque Sans Mono](https://github.com/belluzj/fantasque-sans/releases "Download Fantasque Sans Mono")    | 12 | 16 | 500 | 0.0 | <span style="color:ForestGreen;">&#9679;</span> | <span style="color:DarkRed;"></span> | <span style="color:ForestGreen;">&#9679;</span> | <span style="color:ForestGreen;">&#9679;</span> | 4.0 | [&#128195;](#font-055-fantasque-sans-mono "Go to Settings for Font Fantasque Sans Mono")  |
| 056 | [&#127350;](https://www.google.it/search?q=Fira%20Code%20font "Search with Google: Fira Code font") -  [Fira Code](https://github.com/tonsky/FiraCode "Download Fira Code")    | 10 | 16 | 400 | 0.0 | <span style="color:ForestGreen;">&#9679;</span> | <span style="color:DarkRed;"></span> | <span style="color:ForestGreen;">&#9679;</span> | <span style="color:ForestGreen;">&#9679;</span> | 4.0 | [&#128195;](#font-056-fira-code "Go to Settings for Font Fira Code")  |
| 057 | [&#127350;](https://www.google.it/search?q=Fira%20Code%20iScript%20font "Search with Google: Fira Code iScript font") -  [Fira Code iScript](https://github.com/kencrocken/FiraCodeiScript "Download Fira Code iScript")    | 11 | 14 | 500 | 0.0 | <span style="color:ForestGreen;">&#9679;</span> | <span style="color:ForestGreen;">&#9679;</span> | <span style="color:ForestGreen;">&#9679;</span> | <span style="color:ForestGreen;">&#9679;</span> | 4.0 | [&#128195;](#font-057-fira-code-iscript "Go to Settings for Font Fira Code iScript")  |
| 058 | [&#127350;](https://www.google.it/search?q=Fira%20Mono%20font "Search with Google: Fira Mono font") -  [Fira Mono](https://fonts.google.com/specimen/Fira+Mono "Download Fira Mono")    | 11 | 15 | 400 | 0.0 | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:ForestGreen;">&#9679;</span> | <span style="color:ForestGreen;">&#9679;</span> | 4.0 | [&#128195;](#font-058-fira-mono "Go to Settings for Font Fira Mono")  |
| 059 | [&#127350;](https://www.google.it/search?q=FiraFlott%20font "Search with Google: FiraFlott font") -  [FiraFlott](https://github.com/kosimst/FiraFlott "Download FiraFlott")    | 10 | 14 | 400 | 0.0 | <span style="color:ForestGreen;">&#9679;</span> | <span style="color:ForestGreen;">&#9679;</span> | <span style="color:ForestGreen;">&#9679;</span> | <span style="color:ForestGreen;">&#9679;</span> | 4.5 | [&#128195;](#font-059-firaflott "Go to Settings for Font FiraFlott")  |
| 060 | [&#127350;](https://www.google.it/search?q=FreeMono%20font "Search with Google: FreeMono font") -  [FreeMono](https://fontmeme.com/fonts/freemono-font/ "Download FreeMono")   <span style="color:ForestGreen;">&#9752;</span>  | 14 | 18 | 500 | 0.0 | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | 3.5 | [&#128195;](#font-060-freemono "Go to Settings for Font FreeMono")  |
|||||||||||||
|**N.**|<span title="Font Name and Download" style="font-weight:normal;font-size:130%;line-height:100%;" >&#127462;&#8259;&#127487;</span> |<span title=" Minimum Size recommended for good Readability" style="font-weight:normal;font-size:130%;line-height:100%;" >&#128474;</span> |<span title="Font Line Height Preset" style="font-weight:normal;font-size:130%;line-height:100%;" >&#8683;</span> |<span title="Font Weight Preset" style="font-weight:normal;font-size:130%;line-height:100%;" >&#119809;</span> |<span title="Font Letter Spacing Preset" style="font-weight:normal;font-size:130%;line-height:100%;" >&#8700;</span> |<span title="Font has Ligatures" style="font-weight:normal;font-size:130%;line-height:100%;" >&#8655;</span> |<span title="Font has Script Variant for Italic" style="font-weight:normal;font-size:130%;line-height:100%;" >&#119998;</span> |<span title="Font is Serif" style="font-weight:normal;font-size:130%;line-height:100%;" >&#120450;</span> |<span title="Font has Zero Slashed or Zero Dotted" style="font-weight:normal;font-size:130%;line-height:100%;" >&#216;</span> |<span title="Font Readability at Size `10px`" style="font-weight:normal;font-size:130%;line-height:100%;" >&#128065;</span> |<span title="Go to Settings for Font" style="font-weight:normal;font-size:130%;line-height:100%;" >&#128195;</span> |
| 061 | [&#127350;](https://www.google.it/search?q=GT%20Pressura%20Mono%20font "Search with Google: GT Pressura Mono font") -  [GT Pressura Mono](http://font2s.com/fonts/50932/ "Download GT Pressura Mono")   <span style="color:ForestGreen;">&#9752;</span>  | 12 | 16 | 500 | 0.0 | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | 4.0 | [&#128195;](#font-061-gt-pressura-mono "Go to Settings for Font GT Pressura Mono")  |
| 062 | [&#127350;](https://www.google.it/search?q=Generic%20Mono%20II%20font "Search with Google: Generic Mono II font") -  [Generic Mono II](https://www.download-free-fonts.com/details/91877/generic-mono-ii-regular "Download Generic Mono II")   <span style="color:ForestGreen;">&#9752;</span>  | 10 | 16 | 500 | 0.0 | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:ForestGreen;">&#9679;</span> | 4.5 | [&#128195;](#font-062-generic-mono-ii "Go to Settings for Font Generic Mono II")  |
| 063 | [&#127350;](https://www.google.it/search?q=Gintronic%20font "Search with Google: Gintronic font") -  [Gintronic](https://github.com/goblincore/Coding-Fonts "Download Gintronic")    | 12 | 16 | 300 | 0.0 | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:ForestGreen;">&#9679;</span> | 3.5 | [&#128195;](#font-063-gintronic "Go to Settings for Font Gintronic")  |
| 064 | [&#127350;](https://www.google.it/search?q=Go%20Mono%20font "Search with Google: Go Mono font") -  [Go Mono](https://www.fontmirror.com/go-mono/ "Download Go Mono")   <span style="color:ForestGreen;">&#9752;</span>  | 11 | 16 | 400 | 0.0 | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:ForestGreen;">&#9679;</span> | <span style="color:ForestGreen;">&#9679;</span> | 4.5 | [&#128195;](#font-064-go-mono "Go to Settings for Font Go Mono")  |
| 065 | [&#127350;](https://www.google.it/search?q=Hack%20font "Search with Google: Hack font") -  [Hack](https://sourcefoundry.org/hack "Download Hack")  &#11088;  | 10 | 14 | 500 | 0.0 | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:ForestGreen;">&#9679;</span> | <span style="color:ForestGreen;">&#9679;</span> | 5.0 | [&#128195;](#font-065-hack "Go to Settings for Font Hack")  |
| 066 | [&#127350;](https://www.google.it/search?q=Hasklig%20font "Search with Google: Hasklig font") -  [Hasklig](https://github.com/i-tu/Hasklig "Download Hasklig")    | 11 | 16 | 400 | 0.0 | <span style="color:ForestGreen;">&#9679;</span> | <span style="color:DarkRed;"></span> | <span style="color:ForestGreen;">&#9679;</span> | <span style="color:ForestGreen;">&#9679;</span> | 4.0 | [&#128195;](#font-066-hasklig "Go to Settings for Font Hasklig")  |
| 067 | [&#127350;](https://www.google.it/search?q=Hermit%20font "Search with Google: Hermit font") -  [Hermit](https://pcaro.es/p/hermit/ "Download Hermit")    | 11 | 15 | 500 | 0.0 | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:ForestGreen;">&#9679;</span> | <span style="color:ForestGreen;">&#9679;</span> | 4.0 | [&#128195;](#font-067-hermit "Go to Settings for Font Hermit")  |
| 068 | [&#127350;](https://www.google.it/search?q=IBM%20Plex%20Mono%20font "Search with Google: IBM Plex Mono font") -  [IBM Plex Mono](https://fonts.google.com/specimen/IBM+Plex+Mono "Download IBM Plex Mono")    | 11 | 16 | 500 | 0.0 | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:ForestGreen;">&#9679;</span> | 4.8 | [&#128195;](#font-068-ibm-plex-mono "Go to Settings for Font IBM Plex Mono")  |
| 069 | [&#127350;](https://www.google.it/search?q=Inconsolata%20font "Search with Google: Inconsolata font") -  [Inconsolata](https://fonts.google.com/specimen/Inconsolata "Download Inconsolata")    | 13 | 16 | 500 | 0.2 | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:ForestGreen;">&#9679;</span> | 3.0 | [&#128195;](#font-069-inconsolata "Go to Settings for Font Inconsolata")  |
| 070 | [&#127350;](https://www.google.it/search?q=Inconsolata-g%20font "Search with Google: Inconsolata-g font") -  [Inconsolata-g](https://fonts.google.com/specimen/Inconsolata "Download Inconsolata-g")    | 12 | 16 | 500 | 0.2 | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:ForestGreen;">&#9679;</span> | <span style="color:ForestGreen;">&#9679;</span> | 3.0 | [&#128195;](#font-070-inconsolata-g "Go to Settings for Font Inconsolata-g")  |
|||||||||||||
|**N.**|<span title="Font Name and Download" style="font-weight:normal;font-size:130%;line-height:100%;" >&#127462;&#8259;&#127487;</span> |<span title=" Minimum Size recommended for good Readability" style="font-weight:normal;font-size:130%;line-height:100%;" >&#128474;</span> |<span title="Font Line Height Preset" style="font-weight:normal;font-size:130%;line-height:100%;" >&#8683;</span> |<span title="Font Weight Preset" style="font-weight:normal;font-size:130%;line-height:100%;" >&#119809;</span> |<span title="Font Letter Spacing Preset" style="font-weight:normal;font-size:130%;line-height:100%;" >&#8700;</span> |<span title="Font has Ligatures" style="font-weight:normal;font-size:130%;line-height:100%;" >&#8655;</span> |<span title="Font has Script Variant for Italic" style="font-weight:normal;font-size:130%;line-height:100%;" >&#119998;</span> |<span title="Font is Serif" style="font-weight:normal;font-size:130%;line-height:100%;" >&#120450;</span> |<span title="Font has Zero Slashed or Zero Dotted" style="font-weight:normal;font-size:130%;line-height:100%;" >&#216;</span> |<span title="Font Readability at Size `10px`" style="font-weight:normal;font-size:130%;line-height:100%;" >&#128065;</span> |<span title="Go to Settings for Font" style="font-weight:normal;font-size:130%;line-height:100%;" >&#128195;</span> |
| 071 | [&#127350;](https://www.google.it/search?q=Input%20Mono%20font "Search with Google: Input Mono font") -  [Input Mono](https://input.fontbureau.com/download "Download Input Mono")    | 11 | 15 | 300 | 0.0 | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:ForestGreen;">&#9679;</span> | <span style="color:ForestGreen;">&#9679;</span> | 4.0 | [&#128195;](#font-071-input-mono "Go to Settings for Font Input Mono")  |
| 072 | [&#127350;](https://www.google.it/search?q=Input%20Mono%20Condensed%20font "Search with Google: Input Mono Condensed font") -  [Input Mono Condensed](https://input.fontbureau.com/download "Download Input Mono Condensed")    | 11 | 15 | 300 | 0.0 | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:ForestGreen;">&#9679;</span> | <span style="color:ForestGreen;">&#9679;</span> | 4.0 | [&#128195;](#font-072-input-mono-condensed "Go to Settings for Font Input Mono Condensed")  |
| 073 | [&#127350;](https://www.google.it/search?q=Iosevka%20font "Search with Google: Iosevka font") -  [Iosevka](https://typeof.net/Iosevka "Download Iosevka")    | 11 | 15 | 400 | 0.0 | <span style="color:ForestGreen;">&#9679;</span> | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:ForestGreen;">&#9679;</span> | 4.0 | [&#128195;](#font-073-iosevka "Go to Settings for Font Iosevka")  |
| 074 | [&#127350;](https://www.google.it/search?q=Iosevka%20Curly%20font "Search with Google: Iosevka Curly font") -  [Iosevka Curly](https://typeof.net/Iosevka "Download Iosevka Curly")    | 11 | 15 | 400 | 0.0 | <span style="color:ForestGreen;">&#9679;</span> | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:ForestGreen;">&#9679;</span> | 4.0 | [&#128195;](#font-074-iosevka-curly "Go to Settings for Font Iosevka Curly")  |
| 075 | [&#127350;](https://www.google.it/search?q=Iosevka%20Curly%20Slab%20font "Search with Google: Iosevka Curly Slab font") -  [Iosevka Curly Slab](https://typeof.net/Iosevka "Download Iosevka Curly Slab")    | 11 | 15 | 400 | 0.0 | <span style="color:ForestGreen;">&#9679;</span> | <span style="color:DarkRed;"></span> | <span style="color:ForestGreen;">&#9679;</span> | <span style="color:ForestGreen;">&#9679;</span> | 3.5 | [&#128195;](#font-075-iosevka-curly-slab "Go to Settings for Font Iosevka Curly Slab")  |
| 076 | [&#127350;](https://www.google.it/search?q=Iosevka%20SS01%20font "Search with Google: Iosevka SS01 font") -  [Iosevka SS01](https://typeof.net/Iosevka "Download Iosevka SS01")    | 11 | 15 | 400 | 0.0 | <span style="color:ForestGreen;">&#9679;</span> | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:ForestGreen;">&#9679;</span> | 4.0 | [&#128195;](#font-076-iosevka-ss01 "Go to Settings for Font Iosevka SS01")  |
| 077 | [&#127350;](https://www.google.it/search?q=Iosevka%20SS02%20font "Search with Google: Iosevka SS02 font") -  [Iosevka SS02](https://typeof.net/Iosevka "Download Iosevka SS02")    | 11 | 15 | 400 | 0.0 | <span style="color:ForestGreen;">&#9679;</span> | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:ForestGreen;">&#9679;</span> | 4.0 | [&#128195;](#font-077-iosevka-ss02 "Go to Settings for Font Iosevka SS02")  |
| 078 | [&#127350;](https://www.google.it/search?q=Iosevka%20SS03%20font "Search with Google: Iosevka SS03 font") -  [Iosevka SS03](https://typeof.net/Iosevka "Download Iosevka SS03")    | 11 | 15 | 400 | 0.0 | <span style="color:ForestGreen;">&#9679;</span> | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:ForestGreen;">&#9679;</span> | 4.0 | [&#128195;](#font-078-iosevka-ss03 "Go to Settings for Font Iosevka SS03")  |
| 079 | [&#127350;](https://www.google.it/search?q=Iosevka%20SS04%20font "Search with Google: Iosevka SS04 font") -  [Iosevka SS04](https://typeof.net/Iosevka "Download Iosevka SS04")    | 11 | 15 | 400 | 0.0 | <span style="color:ForestGreen;">&#9679;</span> | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:ForestGreen;">&#9679;</span> | 4.0 | [&#128195;](#font-079-iosevka-ss04 "Go to Settings for Font Iosevka SS04")  |
| 080 | [&#127350;](https://www.google.it/search?q=Iosevka%20SS05%20font "Search with Google: Iosevka SS05 font") -  [Iosevka SS05](https://typeof.net/Iosevka "Download Iosevka SS05")    | 11 | 15 | 400 | 0.0 | <span style="color:ForestGreen;">&#9679;</span> | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:ForestGreen;">&#9679;</span> | 4.0 | [&#128195;](#font-080-iosevka-ss05 "Go to Settings for Font Iosevka SS05")  |
|||||||||||||
|**N.**|<span title="Font Name and Download" style="font-weight:normal;font-size:130%;line-height:100%;" >&#127462;&#8259;&#127487;</span> |<span title=" Minimum Size recommended for good Readability" style="font-weight:normal;font-size:130%;line-height:100%;" >&#128474;</span> |<span title="Font Line Height Preset" style="font-weight:normal;font-size:130%;line-height:100%;" >&#8683;</span> |<span title="Font Weight Preset" style="font-weight:normal;font-size:130%;line-height:100%;" >&#119809;</span> |<span title="Font Letter Spacing Preset" style="font-weight:normal;font-size:130%;line-height:100%;" >&#8700;</span> |<span title="Font has Ligatures" style="font-weight:normal;font-size:130%;line-height:100%;" >&#8655;</span> |<span title="Font has Script Variant for Italic" style="font-weight:normal;font-size:130%;line-height:100%;" >&#119998;</span> |<span title="Font is Serif" style="font-weight:normal;font-size:130%;line-height:100%;" >&#120450;</span> |<span title="Font has Zero Slashed or Zero Dotted" style="font-weight:normal;font-size:130%;line-height:100%;" >&#216;</span> |<span title="Font Readability at Size `10px`" style="font-weight:normal;font-size:130%;line-height:100%;" >&#128065;</span> |<span title="Go to Settings for Font" style="font-weight:normal;font-size:130%;line-height:100%;" >&#128195;</span> |
| 081 | [&#127350;](https://www.google.it/search?q=Iosevka%20SS06%20font "Search with Google: Iosevka SS06 font") -  [Iosevka SS06](https://typeof.net/Iosevka "Download Iosevka SS06")    | 11 | 15 | 400 | 0.0 | <span style="color:ForestGreen;">&#9679;</span> | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:ForestGreen;">&#9679;</span> | 4.0 | [&#128195;](#font-081-iosevka-ss06 "Go to Settings for Font Iosevka SS06")  |
| 082 | [&#127350;](https://www.google.it/search?q=Iosevka%20SS07%20font "Search with Google: Iosevka SS07 font") -  [Iosevka SS07](https://typeof.net/Iosevka "Download Iosevka SS07")    | 11 | 15 | 400 | 0.0 | <span style="color:ForestGreen;">&#9679;</span> | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:ForestGreen;">&#9679;</span> | 4.0 | [&#128195;](#font-082-iosevka-ss07 "Go to Settings for Font Iosevka SS07")  |
| 083 | [&#127350;](https://www.google.it/search?q=Iosevka%20SS08%20font "Search with Google: Iosevka SS08 font") -  [Iosevka SS08](https://typeof.net/Iosevka "Download Iosevka SS08")    | 11 | 15 | 400 | 0.0 | <span style="color:ForestGreen;">&#9679;</span> | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:ForestGreen;">&#9679;</span> | 4.0 | [&#128195;](#font-083-iosevka-ss08 "Go to Settings for Font Iosevka SS08")  |
| 084 | [&#127350;](https://www.google.it/search?q=Iosevka%20SS09%20font "Search with Google: Iosevka SS09 font") -  [Iosevka SS09](https://typeof.net/Iosevka "Download Iosevka SS09")    | 11 | 15 | 400 | 0.0 | <span style="color:ForestGreen;">&#9679;</span> | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:ForestGreen;">&#9679;</span> | 4.0 | [&#128195;](#font-084-iosevka-ss09 "Go to Settings for Font Iosevka SS09")  |
| 085 | [&#127350;](https://www.google.it/search?q=Iosevka%20SS10%20font "Search with Google: Iosevka SS10 font") -  [Iosevka SS10](https://typeof.net/Iosevka "Download Iosevka SS10")    | 11 | 15 | 400 | 0.0 | <span style="color:ForestGreen;">&#9679;</span> | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:ForestGreen;">&#9679;</span> | 4.0 | [&#128195;](#font-085-iosevka-ss10 "Go to Settings for Font Iosevka SS10")  |
| 086 | [&#127350;](https://www.google.it/search?q=Iosevka%20SS11%20font "Search with Google: Iosevka SS11 font") -  [Iosevka SS11](https://typeof.net/Iosevka "Download Iosevka SS11")    | 11 | 15 | 400 | 0.0 | <span style="color:ForestGreen;">&#9679;</span> | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:ForestGreen;">&#9679;</span> | 4.0 | [&#128195;](#font-086-iosevka-ss11 "Go to Settings for Font Iosevka SS11")  |
| 087 | [&#127350;](https://www.google.it/search?q=Iosevka%20SS12%20font "Search with Google: Iosevka SS12 font") -  [Iosevka SS12](https://typeof.net/Iosevka "Download Iosevka SS12")    | 11 | 15 | 400 | 0.0 | <span style="color:ForestGreen;">&#9679;</span> | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:ForestGreen;">&#9679;</span> | 4.0 | [&#128195;](#font-087-iosevka-ss12 "Go to Settings for Font Iosevka SS12")  |
| 088 | [&#127350;](https://www.google.it/search?q=Iosevka%20SS13%20font "Search with Google: Iosevka SS13 font") -  [Iosevka SS13](https://typeof.net/Iosevka "Download Iosevka SS13")    | 11 | 15 | 400 | 0.0 | <span style="color:ForestGreen;">&#9679;</span> | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:ForestGreen;">&#9679;</span> | 4.0 | [&#128195;](#font-088-iosevka-ss13 "Go to Settings for Font Iosevka SS13")  |
| 089 | [&#127350;](https://www.google.it/search?q=Iosevka%20SS14%20font "Search with Google: Iosevka SS14 font") -  [Iosevka SS14](https://typeof.net/Iosevka "Download Iosevka SS14")    | 11 | 15 | 400 | 0.0 | <span style="color:ForestGreen;">&#9679;</span> | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:ForestGreen;">&#9679;</span> | 4.0 | [&#128195;](#font-089-iosevka-ss14 "Go to Settings for Font Iosevka SS14")  |
| 090 | [&#127350;](https://www.google.it/search?q=Iosevka%20Slab%20font "Search with Google: Iosevka Slab font") -  [Iosevka Slab](https://typeof.net/Iosevka "Download Iosevka Slab")    | 11 | 15 | 400 | 0.0 | <span style="color:ForestGreen;">&#9679;</span> | <span style="color:DarkRed;"></span> | <span style="color:ForestGreen;">&#9679;</span> | <span style="color:ForestGreen;">&#9679;</span> | 4.0 | [&#128195;](#font-090-iosevka-slab "Go to Settings for Font Iosevka Slab")  |
|||||||||||||
|**N.**|<span title="Font Name and Download" style="font-weight:normal;font-size:130%;line-height:100%;" >&#127462;&#8259;&#127487;</span> |<span title=" Minimum Size recommended for good Readability" style="font-weight:normal;font-size:130%;line-height:100%;" >&#128474;</span> |<span title="Font Line Height Preset" style="font-weight:normal;font-size:130%;line-height:100%;" >&#8683;</span> |<span title="Font Weight Preset" style="font-weight:normal;font-size:130%;line-height:100%;" >&#119809;</span> |<span title="Font Letter Spacing Preset" style="font-weight:normal;font-size:130%;line-height:100%;" >&#8700;</span> |<span title="Font has Ligatures" style="font-weight:normal;font-size:130%;line-height:100%;" >&#8655;</span> |<span title="Font has Script Variant for Italic" style="font-weight:normal;font-size:130%;line-height:100%;" >&#119998;</span> |<span title="Font is Serif" style="font-weight:normal;font-size:130%;line-height:100%;" >&#120450;</span> |<span title="Font has Zero Slashed or Zero Dotted" style="font-weight:normal;font-size:130%;line-height:100%;" >&#216;</span> |<span title="Font Readability at Size `10px`" style="font-weight:normal;font-size:130%;line-height:100%;" >&#128065;</span> |<span title="Go to Settings for Font" style="font-weight:normal;font-size:130%;line-height:100%;" >&#128195;</span> |
| 091 | [&#127350;](https://www.google.it/search?q=JetBrains%20Mono%20font "Search with Google: JetBrains Mono font") -  [JetBrains Mono](https://www.jetbrains.com/lp/mono/ "Download JetBrains Mono")    | 10 | 14 | 400 | 0.0 | <span style="color:ForestGreen;">&#9679;</span> | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:ForestGreen;">&#9679;</span> | 4.5 | [&#128195;](#font-091-jetbrains-mono "Go to Settings for Font JetBrains Mono")  |
| 092 | [&#127350;](https://www.google.it/search?q=JuliaMono%20font "Search with Google: JuliaMono font") -  [JuliaMono](https://juliamono.netlify.app/download/ "Download JuliaMono")  &#11088; <span style="color:ForestGreen;">&#9752;</span>  | 10 | 16 | 300 | 0.0 | <span style="color:ForestGreen;">&#9679;</span> | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:ForestGreen;">&#9679;</span> | 5.0 | [&#128195;](#font-092-juliamono "Go to Settings for Font JuliaMono")  |
| 093 | [&#127350;](https://www.google.it/search?q=KawKab%20Mono%20font "Search with Google: KawKab Mono font") -  [KawKab Mono](https://fontsgeek.com/fonts/kawkab-mono-regular# "Download KawKab Mono")  &#11088;  | 9 | 14 | 500 | 0.0 | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:ForestGreen;">&#9679;</span> | 5.0 | [&#128195;](#font-093-kawkab-mono "Go to Settings for Font KawKab Mono")  |
| 094 | [&#127350;](https://www.google.it/search?q=Lab%20Mono%20font "Search with Google: Lab Mono font") -  [Lab Mono](https://fontesk.com/lab-mono-font/ "Download Lab Mono")   <span style="color:ForestGreen;">&#9752;</span>  | 11 | 16 | 500 | 0.0 | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:ForestGreen;">&#9679;</span> | <span style="color:ForestGreen;">&#9679;</span> | 4.5 | [&#128195;](#font-094-lab-mono "Go to Settings for Font Lab Mono")  |
| 095 | [&#127350;](https://www.google.it/search?q=Lekton%20font "Search with Google: Lekton font") -  [Lekton](https://fonts.google.com/specimen/Lekton "Download Lekton")    | 14 | 18 | 500 | 0.0 | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:ForestGreen;">&#9679;</span> | <span style="color:ForestGreen;">&#9679;</span> | 3.0 | [&#128195;](#font-095-lekton "Go to Settings for Font Lekton")  |
| 096 | [&#127350;](https://www.google.it/search?q=Liberation%20Mono%20font "Search with Google: Liberation Mono font") -  [Liberation Mono](https://www.1001freefonts.com/liberation-mono.font "Download Liberation Mono")  &#11088;  | 11 | 15 | 500 | 0.0 | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:ForestGreen;">&#9679;</span> | <span style="color:ForestGreen;">&#9679;</span> | 5.0 | [&#128195;](#font-096-liberation-mono "Go to Settings for Font Liberation Mono")  |
| 097 | [&#127350;](https://www.google.it/search?q=Liga%20Monego%20font "Search with Google: Liga Monego font") -  [Liga Monego](https://github.com/goblincore/Coding-Fonts "Download Liga Monego")    | 10 | 18 | 500 | 0.0 | <span style="color:ForestGreen;">&#9679;</span> | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:ForestGreen;">&#9679;</span> | 4.0 | [&#128195;](#font-097-liga-monego "Go to Settings for Font Liga Monego")  |
| 098 | [&#127350;](https://www.google.it/search?q=Lilex%20font "Search with Google: Lilex font") -  [Lilex](https://github.com/mishamyrt/Lilex/releases "Download Lilex")    | 11 | 16 | 500 | 0.0 | <span style="color:ForestGreen;">&#9679;</span> | <span style="color:DarkRed;"></span> | <span style="color:ForestGreen;">&#9679;</span> | <span style="color:ForestGreen;">&#9679;</span> | 4.0 | [&#128195;](#font-098-lilex "Go to Settings for Font Lilex")  |
| 099 | [&#127350;](https://www.google.it/search?q=Lotion%20font "Search with Google: Lotion font") -  [Lotion](https://font.nina.coffee/ "Download Lotion")   <span style="color:ForestGreen;">&#9752;</span>  | 13 | 18 | 500 | 0.0 | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:ForestGreen;">&#9679;</span> | <span style="color:ForestGreen;">&#9679;</span> | 3.5 | [&#128195;](#font-099-lotion "Go to Settings for Font Lotion")  |
| 100 | [&#127350;](https://www.google.it/search?q=Luculent%20font "Search with Google: Luculent font") -  [Luculent](http://eastfarthing.com/luculent/luculent.zip "Download Luculent")    | 12 | 16 | 500 | 0.0 | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:ForestGreen;">&#9679;</span> | 3.0 | [&#128195;](#font-100-luculent "Go to Settings for Font Luculent")  |
|||||||||||||
|**N.**|<span title="Font Name and Download" style="font-weight:normal;font-size:130%;line-height:100%;" >&#127462;&#8259;&#127487;</span> |<span title=" Minimum Size recommended for good Readability" style="font-weight:normal;font-size:130%;line-height:100%;" >&#128474;</span> |<span title="Font Line Height Preset" style="font-weight:normal;font-size:130%;line-height:100%;" >&#8683;</span> |<span title="Font Weight Preset" style="font-weight:normal;font-size:130%;line-height:100%;" >&#119809;</span> |<span title="Font Letter Spacing Preset" style="font-weight:normal;font-size:130%;line-height:100%;" >&#8700;</span> |<span title="Font has Ligatures" style="font-weight:normal;font-size:130%;line-height:100%;" >&#8655;</span> |<span title="Font has Script Variant for Italic" style="font-weight:normal;font-size:130%;line-height:100%;" >&#119998;</span> |<span title="Font is Serif" style="font-weight:normal;font-size:130%;line-height:100%;" >&#120450;</span> |<span title="Font has Zero Slashed or Zero Dotted" style="font-weight:normal;font-size:130%;line-height:100%;" >&#216;</span> |<span title="Font Readability at Size `10px`" style="font-weight:normal;font-size:130%;line-height:100%;" >&#128065;</span> |<span title="Go to Settings for Font" style="font-weight:normal;font-size:130%;line-height:100%;" >&#128195;</span> |
| 101 | [&#127350;](https://www.google.it/search?q=M%2B%201m%20font "Search with Google: M+ 1m font") -  [M+ 1m](https://www.fontsquirrel.com/fonts/M-1m "Download M+ 1m")    | 12 | 16 | 400 | 0.0 | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:ForestGreen;">&#9679;</span> | 3.5 | [&#128195;](#font-101-m-1m "Go to Settings for Font M+ 1m")  |
| 102 | [&#127350;](https://www.google.it/search?q=M%2B%202m%20font "Search with Google: M+ 2m font") -  [M+ 2m](https://www.wfonts.com/download/data/2016/06/18/m-2m/m-2m.zip "Download M+ 2m")    | 12 | 16 | 400 | 0.0 | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:ForestGreen;">&#9679;</span> | <span style="color:ForestGreen;">&#9679;</span> | 3.5 | [&#128195;](#font-102-m-2m "Go to Settings for Font M+ 2m")  |
| 103 | [&#127350;](https://www.google.it/search?q=Menlo%20font "Search with Google: Menlo font") -  [Menlo](https://github.com/hbin/top-programming-fonts "Download Menlo")    | 11 | 15 | 500 | 0.0 | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:ForestGreen;">&#9679;</span> | <span style="color:ForestGreen;">&#9679;</span> | 4.0 | [&#128195;](#font-103-menlo "Go to Settings for Font Menlo")  |
| 104 | [&#127350;](https://www.google.it/search?q=Mensch%20font "Search with Google: Mensch font") -  [Mensch](https://robey.lag.net/2010/06/21/mensch-font.html "Download Mensch")    | 11 | 15 | 500 | 0.0 | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:ForestGreen;">&#9679;</span> | <span style="color:ForestGreen;">&#9679;</span> | 4.5 | [&#128195;](#font-104-mensch "Go to Settings for Font Mensch")  |
| 105 | [&#127350;](https://www.google.it/search?q=Meslo%20LG%20M%20font "Search with Google: Meslo LG M font") -  [Meslo LG M](https://github.com/andreberg/Meslo-Font "Download Meslo LG M")    | 10 | 16 | 500 | 0.0 | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:ForestGreen;">&#9679;</span> | <span style="color:ForestGreen;">&#9679;</span> | 4.0 | [&#128195;](#font-105-meslo-lg-m "Go to Settings for Font Meslo LG M")  |
| 106 | [&#127350;](https://www.google.it/search?q=Meslo%20LG%20S%20font "Search with Google: Meslo LG S font") -  [Meslo LG S](https://github.com/andreberg/Meslo-Font "Download Meslo LG S")  &#11088;  | 10 | 16 | 500 | 0.0 | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:ForestGreen;">&#9679;</span> | <span style="color:ForestGreen;">&#9679;</span> | 5.0 | [&#128195;](#font-106-meslo-lg-s "Go to Settings for Font Meslo LG S")  |
| 107 | [&#127350;](https://www.google.it/search?q=Metrickal%20font "Search with Google: Metrickal font") -  [Metrickal](https://github.com/robey/metrickal-typeface/tree/master/downloads "Download Metrickal")    | 10 | 15 | 500 | 0.0 | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:ForestGreen;">&#9679;</span> | 4.0 | [&#128195;](#font-107-metrickal "Go to Settings for Font Metrickal")  |
| 108 | [&#127350;](https://www.google.it/search?q=Monaco%20font "Search with Google: Monaco font") -  [Monaco](https://www.fontmirror.com/monaco "Download Monaco")    | 11 | 15 | 500 | 0.0 | <span style="color:ForestGreen;">&#9679;</span> | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:ForestGreen;">&#9679;</span> | 4.0 | [&#128195;](#font-108-monaco "Go to Settings for Font Monaco")  |
| 109 | [&#127350;](https://www.google.it/search?q=MonacoB%20font "Search with Google: MonacoB font") -  [MonacoB](https://github.com/vjpr/monaco-bold "Download MonacoB")   <span style="color:ForestGreen;">&#9752;</span>  | 11 | 15 | 500 | 0.0 | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:ForestGreen;">&#9679;</span> | 4.0 | [&#128195;](#font-109-monacob "Go to Settings for Font MonacoB")  |
| 110 | [&#127350;](https://www.google.it/search?q=Monego%20font "Search with Google: Monego font") -  [Monego](https://github.com/goblincore/Coding-Fonts "Download Monego")    | 10 | 18 | 500 | 0.0 | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:ForestGreen;">&#9679;</span> | 4.5 | [&#128195;](#font-110-monego "Go to Settings for Font Monego")  |
|||||||||||||
|**N.**|<span title="Font Name and Download" style="font-weight:normal;font-size:130%;line-height:100%;" >&#127462;&#8259;&#127487;</span> |<span title=" Minimum Size recommended for good Readability" style="font-weight:normal;font-size:130%;line-height:100%;" >&#128474;</span> |<span title="Font Line Height Preset" style="font-weight:normal;font-size:130%;line-height:100%;" >&#8683;</span> |<span title="Font Weight Preset" style="font-weight:normal;font-size:130%;line-height:100%;" >&#119809;</span> |<span title="Font Letter Spacing Preset" style="font-weight:normal;font-size:130%;line-height:100%;" >&#8700;</span> |<span title="Font has Ligatures" style="font-weight:normal;font-size:130%;line-height:100%;" >&#8655;</span> |<span title="Font has Script Variant for Italic" style="font-weight:normal;font-size:130%;line-height:100%;" >&#119998;</span> |<span title="Font is Serif" style="font-weight:normal;font-size:130%;line-height:100%;" >&#120450;</span> |<span title="Font has Zero Slashed or Zero Dotted" style="font-weight:normal;font-size:130%;line-height:100%;" >&#216;</span> |<span title="Font Readability at Size `10px`" style="font-weight:normal;font-size:130%;line-height:100%;" >&#128065;</span> |<span title="Go to Settings for Font" style="font-weight:normal;font-size:130%;line-height:100%;" >&#128195;</span> |
| 111 | [&#127350;](https://www.google.it/search?q=Monego%20Nerd%20Font%20font "Search with Google: Monego Nerd Font font") -  [Monego Nerd Font](https://github.com/goblincore/Coding-Fonts "Download Monego Nerd Font")    | 10 | 18 | 500 | 0.0 | <span style="color:ForestGreen;">&#9679;</span> | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:ForestGreen;">&#9679;</span> | 4.0 | [&#128195;](#font-111-monego-nerd-font "Go to Settings for Font Monego Nerd Font")  |
| 112 | [&#127350;](https://www.google.it/search?q=Monofur%20NF%20font "Search with Google: Monofur NF font") -  [Monofur NF](https://github.com/ryanoasis/nerd-fonts/tree/master/patched-fonts/Monofur "Download Monofur NF")    | 14 | 16 | 500 | 0.0 | <span style="color:ForestGreen;">&#9679;</span> | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:ForestGreen;">&#9679;</span> | 3.0 | [&#128195;](#font-112-monofur-nf "Go to Settings for Font Monofur NF")  |
| 113 | [&#127350;](https://www.google.it/search?q=Monoid%20font "Search with Google: Monoid font") -  [Monoid](https://larsenwork.com/monoid/ "Download Monoid")    | 10 | 16 | 400 | 0.0 | <span style="color:ForestGreen;">&#9679;</span> | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:ForestGreen;">&#9679;</span> | 4.5 | [&#128195;](#font-113-monoid "Go to Settings for Font Monoid")  |
| 114 | [&#127350;](https://www.google.it/search?q=Monoisome%20font "Search with Google: Monoisome font") -  [Monoisome](https://larsenwork.com/monoid/ "Download Monoisome")    | 10 | 16 | 400 | 0.0 | <span style="color:ForestGreen;">&#9679;</span> | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:ForestGreen;">&#9679;</span> | 4.5 | [&#128195;](#font-114-monoisome "Go to Settings for Font Monoisome")  |
| 115 | [&#127350;](https://www.google.it/search?q=Mononoki%20font "Search with Google: Mononoki font") -  [Mononoki](https://madmalik.github.io/mononoki/ "Download Mononoki")  &#11088;  | 12 | 16 | 500 | 0.0 | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:ForestGreen;">&#9679;</span> | 5.0 | [&#128195;](#font-115-mononoki "Go to Settings for Font Mononoki")  |
| 116 | [&#127350;](https://www.google.it/search?q=NF%20Code%20font "Search with Google: NF Code font") -  [NF Code](https://fontesk.com/nf-code/ "Download NF Code")   <span style="color:ForestGreen;">&#9752;</span>  | 11 | 16 | 500 | 0.0 | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:ForestGreen;">&#9679;</span> | <span style="color:ForestGreen;">&#9679;</span> | 4.0 | [&#128195;](#font-116-nf-code "Go to Settings for Font NF Code")  |
| 117 | [&#127350;](https://www.google.it/search?q=NK57%20Monospace%20font "Search with Google: NK57 Monospace font") -  [NK57 Monospace](https://www.1001freefonts.com/nk57-monospace.font "Download NK57 Monospace")    | 10 | 16 | 400 | 0.0 | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:ForestGreen;">&#9679;</span> | <span style="color:ForestGreen;">&#9679;</span> | 4.5 | [&#128195;](#font-117-nk57-monospace "Go to Settings for Font NK57 Monospace")  |
| 118 | [&#127350;](https://www.google.it/search?q=NanumGothicCoding%20font "Search with Google: NanumGothicCoding font") -  [NanumGothicCoding](https://fonts.google.com/specimen/Nanum+Gothic+Coding&preview.size=12 "Download NanumGothicCoding")    | 11 | 16 | 500 | 0.5 | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | 4.0 | [&#128195;](#font-118-nanumgothiccoding "Go to Settings for Font NanumGothicCoding")  |
| 119 | [&#127350;](https://www.google.it/search?q=Natural%20Mono%20font "Search with Google: Natural Mono font") -  [Natural Mono](https://fontlibrary.org/it/font/natural-mono "Download Natural Mono")  &#11088; <span style="color:ForestGreen;">&#9752;</span>  | 10 | 16 | 500 | 0.0 | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:ForestGreen;">&#9679;</span> | <span style="color:ForestGreen;">&#9679;</span> | 5.0 | [&#128195;](#font-119-natural-mono "Go to Settings for Font Natural Mono")  |
| 120 | [&#127350;](https://www.google.it/search?q=Natural%20Mono%20Alt%20font "Search with Google: Natural Mono Alt font") -  [Natural Mono Alt](https://fontlibrary.org/it/font/natural-mono "Download Natural Mono Alt")  &#11088; <span style="color:ForestGreen;">&#9752;</span>  | 10 | 16 | 500 | 0.0 | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:ForestGreen;">&#9679;</span> | 5.0 | [&#128195;](#font-120-natural-mono-alt "Go to Settings for Font Natural Mono Alt")  |
|||||||||||||
|**N.**|<span title="Font Name and Download" style="font-weight:normal;font-size:130%;line-height:100%;" >&#127462;&#8259;&#127487;</span> |<span title=" Minimum Size recommended for good Readability" style="font-weight:normal;font-size:130%;line-height:100%;" >&#128474;</span> |<span title="Font Line Height Preset" style="font-weight:normal;font-size:130%;line-height:100%;" >&#8683;</span> |<span title="Font Weight Preset" style="font-weight:normal;font-size:130%;line-height:100%;" >&#119809;</span> |<span title="Font Letter Spacing Preset" style="font-weight:normal;font-size:130%;line-height:100%;" >&#8700;</span> |<span title="Font has Ligatures" style="font-weight:normal;font-size:130%;line-height:100%;" >&#8655;</span> |<span title="Font has Script Variant for Italic" style="font-weight:normal;font-size:130%;line-height:100%;" >&#119998;</span> |<span title="Font is Serif" style="font-weight:normal;font-size:130%;line-height:100%;" >&#120450;</span> |<span title="Font has Zero Slashed or Zero Dotted" style="font-weight:normal;font-size:130%;line-height:100%;" >&#216;</span> |<span title="Font Readability at Size `10px`" style="font-weight:normal;font-size:130%;line-height:100%;" >&#128065;</span> |<span title="Go to Settings for Font" style="font-weight:normal;font-size:130%;line-height:100%;" >&#128195;</span> |
| 121 | [&#127350;](https://www.google.it/search?q=Nimbus%20Mono%20font "Search with Google: Nimbus Mono font") -  [Nimbus Mono](https://www.fontsquirrel.com/fonts/nimbus-mono "Download Nimbus Mono")    | 13 | 16 | 300 | 0.0 | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | 4.0 | [&#128195;](#font-121-nimbus-mono "Go to Settings for Font Nimbus Mono")  |
| 122 | [&#127350;](https://www.google.it/search?q=NotCourierSans%20font "Search with Google: NotCourierSans font") -  [NotCourierSans](https://www.fontsquirrel.com/fonts/notcouriersans "Download NotCourierSans")    | 12 | 16 | 600 | 0.0 | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | 3.0 | [&#128195;](#font-122-notcouriersans "Go to Settings for Font NotCourierSans")  |
| 123 | [&#127350;](https://www.google.it/search?q=Noto%20Mono%20font "Search with Google: Noto Mono font") -  [Noto Mono](https://www.fontsc.com/font/download/noto-mono "Download Noto Mono")  &#11088;  | 11 | 16 | 500 | 0.0 | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | 5.0 | [&#128195;](#font-123-noto-mono "Go to Settings for Font Noto Mono")  |
| 124 | [&#127350;](https://www.google.it/search?q=Office%20Code%20Pro%20font "Search with Google: Office Code Pro font") -  [Office Code Pro](https://github.com/nathco/Office-Code-Pro "Download Office Code Pro")    | 11 | 14 | 400 | 0.0 | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:ForestGreen;">&#9679;</span> | <span style="color:ForestGreen;">&#9679;</span> | 4.0 | [&#128195;](#font-124-office-code-pro "Go to Settings for Font Office Code Pro")  |
| 125 | [&#127350;](https://www.google.it/search?q=Onuava%20font "Search with Google: Onuava font") -  [Onuava](https://www.urbanfonts.com/download?fid=9765&file=onuava.zip "Download Onuava")   <span style="color:ForestGreen;">&#9752;</span>  | 10 | 16 | 500 | 0.0 | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:ForestGreen;">&#9679;</span> | 4.5 | [&#128195;](#font-125-onuava "Go to Settings for Font Onuava")  |
| 126 | [&#127350;](https://www.google.it/search?q=Operator%20Mono%20Lig%20font "Search with Google: Operator Mono Lig font") -  [Operator Mono Lig](https://github.com/goblincore/Coding-Fonts "Download Operator Mono Lig")    | 12 | 16 | 300 | 0.3 | <span style="color:ForestGreen;">&#9679;</span> | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:ForestGreen;">&#9679;</span> | 4.0 | [&#128195;](#font-126-operator-mono-lig "Go to Settings for Font Operator Mono Lig")  |
| 127 | [&#127350;](https://www.google.it/search?q=Overpass%20Mono%20font "Search with Google: Overpass Mono font") -  [Overpass Mono](https://www.fontsc.com/font/download/overpass-mono "Download Overpass Mono")    | 11 | 16 | 300 | 0.0 | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:ForestGreen;">&#9679;</span> | 4.0 | [&#128195;](#font-127-overpass-mono "Go to Settings for Font Overpass Mono")  |
| 128 | [&#127350;](https://www.google.it/search?q=Oxygen%20Mono%20font "Search with Google: Oxygen Mono font") -  [Oxygen Mono](https://www.fontsc.com/font/download/oxygen-mono "Download Oxygen Mono")  &#11088;  | 11 | 16 | 500 | 0.0 | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:ForestGreen;">&#9679;</span> | 5.0 | [&#128195;](#font-128-oxygen-mono "Go to Settings for Font Oxygen Mono")  |
| 129 | [&#127350;](https://www.google.it/search?q=PT%20Mono%20font "Search with Google: PT Mono font") -  [PT Mono](https://fonts.google.com/specimen/PT+Mono?selection.family=PT+Mono "Download PT Mono")    | 11 | 15 | 500 | 0.0 | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:ForestGreen;">&#9679;</span> | <span style="color:ForestGreen;">&#9679;</span> | 4.0 | [&#128195;](#font-129-pt-mono "Go to Settings for Font PT Mono")  |
| 130 | [&#127350;](https://www.google.it/search?q=Panic%20Sans%20font "Search with Google: Panic Sans font") -  [Panic Sans](https://github.com/chrissimpkins/codeface/tree/master/fonts/panic-sans "Download Panic Sans")   <span style="color:ForestGreen;">&#9752;</span>  | 11 | 18 | 500 | 0.0 | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:ForestGreen;">&#9679;</span> | 4.5 | [&#128195;](#font-130-panic-sans "Go to Settings for Font Panic Sans")  |
|||||||||||||
|**N.**|<span title="Font Name and Download" style="font-weight:normal;font-size:130%;line-height:100%;" >&#127462;&#8259;&#127487;</span> |<span title=" Minimum Size recommended for good Readability" style="font-weight:normal;font-size:130%;line-height:100%;" >&#128474;</span> |<span title="Font Line Height Preset" style="font-weight:normal;font-size:130%;line-height:100%;" >&#8683;</span> |<span title="Font Weight Preset" style="font-weight:normal;font-size:130%;line-height:100%;" >&#119809;</span> |<span title="Font Letter Spacing Preset" style="font-weight:normal;font-size:130%;line-height:100%;" >&#8700;</span> |<span title="Font has Ligatures" style="font-weight:normal;font-size:130%;line-height:100%;" >&#8655;</span> |<span title="Font has Script Variant for Italic" style="font-weight:normal;font-size:130%;line-height:100%;" >&#119998;</span> |<span title="Font is Serif" style="font-weight:normal;font-size:130%;line-height:100%;" >&#120450;</span> |<span title="Font has Zero Slashed or Zero Dotted" style="font-weight:normal;font-size:130%;line-height:100%;" >&#216;</span> |<span title="Font Readability at Size `10px`" style="font-weight:normal;font-size:130%;line-height:100%;" >&#128065;</span> |<span title="Go to Settings for Font" style="font-weight:normal;font-size:130%;line-height:100%;" >&#128195;</span> |
| 131 | [&#127350;](https://www.google.it/search?q=Pointfree%20font "Search with Google: Pointfree font") -  [Pointfree](https://code.google.com/archive/p/i3project/downloads "Download Pointfree")   <span style="color:ForestGreen;">&#9752;</span>  | 11 | 16 | 500 | 0.0 | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:ForestGreen;">&#9679;</span> | 4.0 | [&#128195;](#font-131-pointfree "Go to Settings for Font Pointfree")  |
| 132 | [&#127350;](https://www.google.it/search?q=ProggyVector%20font "Search with Google: ProggyVector font") -  [ProggyVector](https://github.com/bluescan/proggyfonts "Download ProggyVector")    | 11 | 15 | 500 | 0.0 | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:ForestGreen;">&#9679;</span> | <span style="color:DarkRed;"></span> | 4.5 | [&#128195;](#font-132-proggyvector "Go to Settings for Font ProggyVector")  |
| 133 | [&#127350;](https://www.google.it/search?q=Rec%20Mono%20Linear%20font "Search with Google: Rec Mono Linear font") -  [Rec Mono Linear](https://github.com/arrowtype/recursive/tree/main/fonts/ArrowType-Recursive-1.078/Recursive_Code/RecMonoLinear "Download Rec Mono Linear")   <span style="color:ForestGreen;">&#9752;</span>  | 11 | 16 | 500 | 0.0 | <span style="color:ForestGreen;">&#9679;</span> | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:ForestGreen;">&#9679;</span> | 4.0 | [&#128195;](#font-133-rec-mono-linear "Go to Settings for Font Rec Mono Linear")  |
| 134 | [&#127350;](https://www.google.it/search?q=Roboto%20Mono%20font "Search with Google: Roboto Mono font") -  [Roboto Mono](https://fonts.google.com/specimen/Roboto+Mono "Download Roboto Mono")    | 10 | 14 | 400 | 0.2 | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:ForestGreen;">&#9679;</span> | <span style="color:ForestGreen;">&#9679;</span> | 4.8 | [&#128195;](#font-134-roboto-mono "Go to Settings for Font Roboto Mono")  |
| 135 | [&#127350;](https://www.google.it/search?q=SF%20Mono%20font "Search with Google: SF Mono font") -  [SF Mono](https://www.cufonfonts.com/download/font/sf-mono "Download SF Mono")    | 11 | 16 | 400 | 0.0 | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:ForestGreen;">&#9679;</span> | 4.0 | [&#128195;](#font-135-sf-mono "Go to Settings for Font SF Mono")  |
| 136 | [&#127350;](https://www.google.it/search?q=SK-Modernist%20Mono%20font "Search with Google: SK-Modernist Mono font") -  [SK-Modernist Mono](https://fontsme.com/sk-modernist.font "Download SK-Modernist Mono")   <span style="color:ForestGreen;">&#9752;</span>  | 11 | 16 | 500 | 0.0 | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:ForestGreen;">&#9679;</span> | 4.5 | [&#128195;](#font-136-sk-modernist-mono "Go to Settings for Font SK-Modernist Mono")  |
| 137 | [&#127350;](https://www.google.it/search?q=Sabir%20Mono%20font "Search with Google: Sabir Mono font") -  [Sabir Mono](https://fontesk.com/sabir-mono-font/ "Download Sabir Mono")   <span style="color:ForestGreen;">&#9752;</span>  | 14 | 16 | 500 | 0.0 | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:ForestGreen;">&#9679;</span> | <span style="color:ForestGreen;">&#9679;</span> | 4.0 | [&#128195;](#font-137-sabir-mono "Go to Settings for Font Sabir Mono")  |
| 138 | [&#127350;](https://www.google.it/search?q=Segoe%20Mono%20Boot%20font "Search with Google: Segoe Mono Boot font") -  [Segoe Mono Boot](https://candyfonts.com/font/segoe-mono-boot.htm "Download Segoe Mono Boot")   <span style="color:ForestGreen;">&#9752;</span>  | 11 | 16 | 500 | 0.0 | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | 4.0 | [&#128195;](#font-138-segoe-mono-boot "Go to Settings for Font Segoe Mono Boot")  |
| 139 | [&#127350;](https://www.google.it/search?q=Share%20Tech%20Mono%20font "Search with Google: Share Tech Mono font") -  [Share Tech Mono](https://fonts.google.com/specimen/Share+Tech+Mono?category=Monospace "Download Share Tech Mono")   <span style="color:ForestGreen;">&#9752;</span>  | 13 | 18 | 500 | 0.0 | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:ForestGreen;">&#9679;</span> | 3.5 | [&#128195;](#font-139-share-tech-mono "Go to Settings for Font Share Tech Mono")  |
| 140 | [&#127350;](https://www.google.it/search?q=Silka%20Mono%20font "Search with Google: Silka Mono font") -  [Silka Mono](https://www.atipofoundry.com/fonts/silka-mono "Download Silka Mono")   <span style="color:ForestGreen;">&#9752;</span>  | 10 | 16 | 500 | 0.0 | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:ForestGreen;">&#9679;</span> | 4.0 | [&#128195;](#font-140-silka-mono "Go to Settings for Font Silka Mono")  |
|||||||||||||
|**N.**|<span title="Font Name and Download" style="font-weight:normal;font-size:130%;line-height:100%;" >&#127462;&#8259;&#127487;</span> |<span title=" Minimum Size recommended for good Readability" style="font-weight:normal;font-size:130%;line-height:100%;" >&#128474;</span> |<span title="Font Line Height Preset" style="font-weight:normal;font-size:130%;line-height:100%;" >&#8683;</span> |<span title="Font Weight Preset" style="font-weight:normal;font-size:130%;line-height:100%;" >&#119809;</span> |<span title="Font Letter Spacing Preset" style="font-weight:normal;font-size:130%;line-height:100%;" >&#8700;</span> |<span title="Font has Ligatures" style="font-weight:normal;font-size:130%;line-height:100%;" >&#8655;</span> |<span title="Font has Script Variant for Italic" style="font-weight:normal;font-size:130%;line-height:100%;" >&#119998;</span> |<span title="Font is Serif" style="font-weight:normal;font-size:130%;line-height:100%;" >&#120450;</span> |<span title="Font has Zero Slashed or Zero Dotted" style="font-weight:normal;font-size:130%;line-height:100%;" >&#216;</span> |<span title="Font Readability at Size `10px`" style="font-weight:normal;font-size:130%;line-height:100%;" >&#128065;</span> |<span title="Go to Settings for Font" style="font-weight:normal;font-size:130%;line-height:100%;" >&#128195;</span> |
| 141 | [&#127350;](https://www.google.it/search?q=Sometype%20Mono%20font "Search with Google: Sometype Mono font") -  [Sometype Mono](https://monospacedfont.com/ "Download Sometype Mono")    | 11 | 15 | 300 | 0.0 | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:ForestGreen;">&#9679;</span> | <span style="color:ForestGreen;">&#9679;</span> | 4.5 | [&#128195;](#font-141-sometype-mono "Go to Settings for Font Sometype Mono")  |
| 142 | [&#127350;](https://www.google.it/search?q=Source%20Code%20Pro%20font "Search with Google: Source Code Pro font") -  [Source Code Pro](https://fonts.google.com/specimen/Source+Code+Pro "Download Source Code Pro")    | 12 | 16 | 400 | 0.0 | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:ForestGreen;">&#9679;</span> | <span style="color:ForestGreen;">&#9679;</span> | 3.0 | [&#128195;](#font-142-source-code-pro "Go to Settings for Font Source Code Pro")  |
| 143 | [&#127350;](https://www.google.it/search?q=Space%20Mono%20font "Search with Google: Space Mono font") -  [Space Mono](https://www.fontsc.com/font/download/space-mono "Download Space Mono")    | 11 | 15 | 400 | 0.0 | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:ForestGreen;">&#9679;</span> | <span style="color:ForestGreen;">&#9679;</span> | 4.5 | [&#128195;](#font-143-space-mono "Go to Settings for Font Space Mono")  |
| 144 | [&#127350;](https://www.google.it/search?q=Sudo%20font "Search with Google: Sudo font") -  [Sudo](https://www.cufonfonts.com/download/font/andale-mono "Download Sudo")    | 14 | 16 | 400 | 0.0 | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:ForestGreen;">&#9679;</span> | 3.5 | [&#128195;](#font-144-sudo "Go to Settings for Font Sudo")  |
| 145 | [&#127350;](https://www.google.it/search?q=Terminus%20%28TTF%29%20for%20Windows%20font "Search with Google: Terminus (TTF) for Windows font") -  [Terminus (TTF) for Windows](https://files.ax86.net/terminus-ttf/ "Download Terminus (TTF) for Windows")  &#127345;  &#11088; <span style="color:ForestGreen;">&#9752;</span>  | 12 | 16 | 500 | 0.0 | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:ForestGreen;">&#9679;</span> | <span style="color:ForestGreen;">&#9679;</span> | 5.0 | [&#128195;](#font-145-terminus-ttf-for-windows "Go to Settings for Font Terminus (TTF) for Windows")  |
| 146 | [&#127350;](https://www.google.it/search?q=Ti92Pluspc%20font "Search with Google: Ti92Pluspc font") -  [Ti92Pluspc](https://fontsgeek.com/fonts/Ti92Pluspc-Regular "Download Ti92Pluspc")   <span style="color:ForestGreen;">&#9752;</span>  | 11 | 16 | 500 | 0.0 | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:ForestGreen;">&#9679;</span> | 4.5 | [&#128195;](#font-146-ti92pluspc "Go to Settings for Font Ti92Pluspc")  |
| 147 | [&#127350;](https://www.google.it/search?q=Ubuntu%20Mono%20font "Search with Google: Ubuntu Mono font") -  [Ubuntu Mono](https://www.fontsquirrel.com/fonts/ubuntu-mono "Download Ubuntu Mono")    | 13 | 16 | 500 | 0.0 | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:ForestGreen;">&#9679;</span> | <span style="color:ForestGreen;">&#9679;</span> | 4.5 | [&#128195;](#font-147-ubuntu-mono "Go to Settings for Font Ubuntu Mono")  |
| 148 | [&#127350;](https://www.google.it/search?q=Ubuntu%20Mono%20-%20Bront%20font "Search with Google: Ubuntu Mono - Bront font") -  [Ubuntu Mono - Bront](https://github.com/chrismwendt/bront "Download Ubuntu Mono - Bront")    | 12 | 16 | 300 | 0.0 | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:ForestGreen;">&#9679;</span> | 4.5 | [&#128195;](#font-148-ubuntu-mono---bront "Go to Settings for Font Ubuntu Mono - Bront")  |
| 149 | [&#127350;](https://www.google.it/search?q=Victor%20Mono%20font "Search with Google: Victor Mono font") -  [Victor Mono](https://rubjo.github.io/victor-mono "Download Victor Mono")    | 11 | 16 | 300 | 0.4 | <span style="color:ForestGreen;">&#9679;</span> | <span style="color:ForestGreen;">&#9679;</span> | <span style="color:ForestGreen;">&#9679;</span> | <span style="color:ForestGreen;">&#9679;</span> | 4.0 | [&#128195;](#font-149-victor-mono "Go to Settings for Font Victor Mono")  |
| 150 | [&#127350;](https://www.google.it/search?q=Whois%20Mono%20font "Search with Google: Whois Mono font") -  [Whois Mono](https://github.com/raphaelbastide/Whois-mono/blob/master/whois-mono.ttf "Download Whois Mono")    | 13 | 17 | 500 | 0.3 | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:ForestGreen;">&#9679;</span> | 4.0 | [&#128195;](#font-150-whois-mono "Go to Settings for Font Whois Mono")  |
|||||||||||||
|**N.**|<span title="Font Name and Download" style="font-weight:normal;font-size:130%;line-height:100%;" >&#127462;&#8259;&#127487;</span> |<span title=" Minimum Size recommended for good Readability" style="font-weight:normal;font-size:130%;line-height:100%;" >&#128474;</span> |<span title="Font Line Height Preset" style="font-weight:normal;font-size:130%;line-height:100%;" >&#8683;</span> |<span title="Font Weight Preset" style="font-weight:normal;font-size:130%;line-height:100%;" >&#119809;</span> |<span title="Font Letter Spacing Preset" style="font-weight:normal;font-size:130%;line-height:100%;" >&#8700;</span> |<span title="Font has Ligatures" style="font-weight:normal;font-size:130%;line-height:100%;" >&#8655;</span> |<span title="Font has Script Variant for Italic" style="font-weight:normal;font-size:130%;line-height:100%;" >&#119998;</span> |<span title="Font is Serif" style="font-weight:normal;font-size:130%;line-height:100%;" >&#120450;</span> |<span title="Font has Zero Slashed or Zero Dotted" style="font-weight:normal;font-size:130%;line-height:100%;" >&#216;</span> |<span title="Font Readability at Size `10px`" style="font-weight:normal;font-size:130%;line-height:100%;" >&#128065;</span> |<span title="Go to Settings for Font" style="font-weight:normal;font-size:130%;line-height:100%;" >&#128195;</span> |
| 151 | [&#127350;](https://www.google.it/search?q=iA%20Writer%20Duospace%20font "Search with Google: iA Writer Duospace font") -  [iA Writer Duospace](https://ia.net/downloads#fonts "Download iA Writer Duospace")   <span style="color:ForestGreen;">&#9752;</span>  | 11 | 16 | 500 | 0.0 | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:ForestGreen;">&#9679;</span> | 4.0 | [&#128195;](#font-151-ia-writer-duospace "Go to Settings for Font iA Writer Duospace")  |
| 152 | [&#127350;](https://www.google.it/search?q=iA%20Writer%20Mono%20S%20font "Search with Google: iA Writer Mono S font") -  [iA Writer Mono S](https://ia.net/downloads#fonts "Download iA Writer Mono S")  &#11088;  | 10 | 14 | 500 | 0.0 | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:DarkRed;"></span> | <span style="color:ForestGreen;">&#9679;</span> | 5.0 | [&#128195;](#font-152-ia-writer-mono-s "Go to Settings for Font iA Writer Mono S")  |



</div>



<div align="right">

[Go to Table of Contents](#table-of-contents)

</div>

## Optimal Settings

> Tip 1: Download the fonts and copy / paste settings below in your `Settings.ini`.

> Tip 2: Fonts with the script variant in italics may have specific settings to add to your `Settings.ini`: you can find these settings on the font websites or you can accept the default presets in the examples below.



<div  align="center"><table><tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-001-ankacoder-"  name="font-001-ankacoder-"></a>001 - <a href="https://fontlibrary.org/it/font/anka-coder" title="Download Anka/Coder ">Anka/Coder </a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=Anka%2FCoder%20%20font" title="Search with Google: 'Anka/Coder ' font" alt="Search with Google: 'Anka/Coder ' font">&#127350;</a>&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >4.0</span>&nbsp;|&nbsp;<span style="color:ForestGreen;">&#9752;</span>&nbsp;|&nbsp;<span title="Font has Zero Slashed or Zero Dotted" >&#216;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "'Anka/Coder '",
"editor.fontSize": 12,
"editor.lineHeight": 16,
"editor.fontWeight": 500,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": false,
// --- FONT SETTINGS :: END
```

</div><div><b>Notes</b><br>
Anka/Coder : Copy the font name including single quotes 'Anka/Coder' because the slash in the name creates problems.

This font has one or more problems in rendering and cannot be displayed in previews.

</div>
</div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-002-ankacoder-condensed"  name="font-002-ankacoder-condensed"></a>002 - <a href="https://fontlibrary.org/it/font/anka-coder-condensed" title="Download Anka/Coder Condensed">Anka/Coder Condensed</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=Anka%2FCoder%20Condensed%20font" title="Search with Google: 'Anka/Coder Condensed' font" alt="Search with Google: 'Anka/Coder Condensed' font">&#127350;</a>&nbsp;|&nbsp;&#11088;&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >5.0</span>&nbsp;|&nbsp;<span style="color:ForestGreen;">&#9752;</span>&nbsp;|&nbsp;<span title="Font has Zero Slashed or Zero Dotted" >&#216;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "'Anka/Coder Condensed'",
"editor.fontSize": 12,
"editor.lineHeight": 16,
"editor.fontWeight": 500,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": false,
// --- FONT SETTINGS :: END
```

</div><div><b>Notes</b><br>
Anka/Coder Condensed: Copy the font name including single quotes 'Anka/Coder Condensed' because the slash in the name creates problems.

</div>
</div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-003-ankacoder-narrow"  name="font-003-ankacoder-narrow"></a>003 - <a href="https://fontlibrary.org/it/font/anka-coder-narrow" title="Download Anka/Coder Narrow">Anka/Coder Narrow</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=Anka%2FCoder%20Narrow%20font" title="Search with Google: 'Anka/Coder Narrow' font" alt="Search with Google: 'Anka/Coder Narrow' font">&#127350;</a>&nbsp;|&nbsp;&#11088;&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >5.0</span>&nbsp;|&nbsp;<span style="color:ForestGreen;">&#9752;</span>&nbsp;|&nbsp;<span title="Font has Zero Slashed or Zero Dotted" >&#216;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "'Anka/Coder Narrow'",
"editor.fontSize": 12,
"editor.lineHeight": 16,
"editor.fontWeight": 500,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": false,
// --- FONT SETTINGS :: END
```

</div><div><b>Notes</b><br>
Anka/Coder Narrow: Copy the font name including single quotes 'Anka/Coder Narrow' because the slash in the name creates problems.

</div>
</div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-004-apl385-unicode"  name="font-004-apl385-unicode"></a>004 - <a href="http://apl385.com/fonts/index.htm" title="Download APL385 Unicode">APL385 Unicode</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=APL385%20Unicode%20font" title="Search with Google: APL385 Unicode font" alt="Search with Google: APL385 Unicode font">&#127350;</a>&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >4.5</span>&nbsp;|&nbsp;<span style="color:ForestGreen;">&#9752;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "APL385 Unicode",
"editor.fontSize": 12,
"editor.lineHeight": 16,
"editor.fontWeight": 500,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": false,
// --- FONT SETTINGS :: END
```

</div></div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-005-agave-regular"  name="font-005-agave-regular"></a>005 - <a href="https://github.com/blobject/agave" title="Download Agave Regular">Agave Regular</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=Agave%20Regular%20font" title="Search with Google: Agave Regular font" alt="Search with Google: Agave Regular font">&#127350;</a>&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >4.0</span>&nbsp;|&nbsp;<span style="color:ForestGreen;">&#9752;</span>&nbsp;|&nbsp;<span title="Font has Zero Slashed or Zero Dotted" >&#216;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "Agave Regular",
"editor.fontSize": 13,
"editor.lineHeight": 18,
"editor.fontWeight": 500,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": false,
// --- FONT SETTINGS :: END
```

</div></div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-006-alma-mono"  name="font-006-alma-mono"></a>006 - <a href="http://almamono.com/download/" title="Download Alma Mono">Alma Mono</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=Alma%20Mono%20font" title="Search with Google: Alma Mono font" alt="Search with Google: Alma Mono font">&#127350;</a>&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >4.0</span>&nbsp;|&nbsp;<span style="color:ForestGreen;">&#9752;</span>&nbsp;|&nbsp;<span title="Font has Zero Slashed or Zero Dotted" >&#216;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "Alma Mono",
"editor.fontSize": 10,
"editor.lineHeight": 14,
"editor.fontWeight": 400,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": false,
// --- FONT SETTINGS :: END
```

</div></div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-007-andale-mono"  name="font-007-andale-mono"></a>007 - <a href="https://www.cufonfonts.com/download/font/andale-mono" title="Download Andale Mono">Andale Mono</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=Andale%20Mono%20font" title="Search with Google: Andale Mono font" alt="Search with Google: Andale Mono font">&#127350;</a>&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >4.0</span>&nbsp;|&nbsp;<span title="Font has Zero Slashed or Zero Dotted" >&#216;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "Andale Mono",
"editor.fontSize": 11,
"editor.lineHeight": 16,
"editor.fontWeight": 500,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": false,
// --- FONT SETTINGS :: END
```

</div></div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-008-anonymous-pro"  name="font-008-anonymous-pro"></a>008 - <a href="https://www.marksimonson.com/fonts/view/anonymous-pro" title="Download Anonymous Pro">Anonymous Pro</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=Anonymous%20Pro%20font" title="Search with Google: Anonymous Pro font" alt="Search with Google: Anonymous Pro font">&#127350;</a>&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >4.5</span>&nbsp;|&nbsp;<span title="Font has Zero Slashed or Zero Dotted" >&#216;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "Anonymous Pro",
"editor.fontSize": 11,
"editor.lineHeight": 15,
"editor.fontWeight": 500,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": false,
// --- FONT SETTINGS :: END
```

</div></div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-009-antikor-mono"  name="font-009-antikor-mono"></a>009 - <a href="https://www.cufonfonts.com/download/font/antikor-mono" title="Download Antikor Mono">Antikor Mono</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=Antikor%20Mono%20font" title="Search with Google: Antikor Mono font" alt="Search with Google: Antikor Mono font">&#127350;</a>&nbsp;|&nbsp;&#11088;&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >5.0</span>&nbsp;|&nbsp;<span title="Font has Script Variant for Italic" >&#119998;</span>&nbsp;|&nbsp;<span title="Font has Zero Slashed or Zero Dotted" >&#216;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "Antikor Mono",
"editor.fontSize": 11,
"editor.lineHeight": 17,
"editor.fontWeight": 400,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": false,

// Note: these tips are taken
// from the FiraFlott website
// Customization for font
// with Script Variants Italic
"editor.tokenColorCustomizations": {
 "textMateRules": [
  {
   "scope": [
    "comment",
    "entity.name.type.class",
    "keyword",
    "constant",
    "storage.modifier",
    "storage.type.class.js",
   ],
   "settings": {
    "fontStyle": "italic"
   }
  },
  {
   "scope": [
    "invalid",
    "keyword.operator",
    "constant.numeric.css",
    "keyword.other.unit.px.css",
    "constant.numeric.decimal.js",
    "constant.numeric.json"
   ],
   "settings": {
    "fontStyle": ""
   }
  }
 ]
},
// --- FONT SETTINGS :: END
```

</div></div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-010-aurulent-sans-mono"  name="font-010-aurulent-sans-mono"></a>010 - <a href="https://www.dafont.com/aurulent-sans-mono.font" title="Download Aurulent Sans Mono">Aurulent Sans Mono</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=Aurulent%20Sans%20Mono%20font" title="Search with Google: Aurulent Sans Mono font" alt="Search with Google: Aurulent Sans Mono font">&#127350;</a>&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >4.0</span>&nbsp;|&nbsp;<span style="color:ForestGreen;">&#9752;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "Aurulent Sans Mono",
"editor.fontSize": 10,
"editor.lineHeight": 16,
"editor.fontWeight": 500,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": false,
// --- FONT SETTINGS :: END
```

</div></div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-011-averagemono"  name="font-011-averagemono"></a>011 - <a href="https://fontlibrary.org/en/font/average-mono" title="Download AverageMono">AverageMono</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=AverageMono%20font" title="Search with Google: AverageMono font" alt="Search with Google: AverageMono font">&#127350;</a>&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >4.0</span>&nbsp;|&nbsp;<span title="Font is Serif" >&#120450;</span>&nbsp;|&nbsp;<span title="Font has Zero Slashed or Zero Dotted" >&#216;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "AverageMono",
"editor.fontSize": 12,
"editor.lineHeight": 18,
"editor.fontWeight": 500,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": false,
// --- FONT SETTINGS :: END
```

</div></div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-012-b612-mono"  name="font-012-b612-mono"></a>012 - <a href="https://fonts.google.com/specimen/B612+Mono" title="Download B612 Mono">B612 Mono</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=B612%20Mono%20font" title="Search with Google: B612 Mono font" alt="Search with Google: B612 Mono font">&#127350;</a>&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >4.5</span>&nbsp;|&nbsp;<span title="Font is Serif" >&#120450;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "B612 Mono",
"editor.fontSize": 10,
"editor.lineHeight": 15,
"editor.fontWeight": 500,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": false,
// --- FONT SETTINGS :: END
```

</div></div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-013-bpmono"  name="font-013-bpmono"></a>013 - <a href="https://www.fontmirror.com/monaco" title="Download BPmono">BPmono</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=BPmono%20font" title="Search with Google: BPmono font" alt="Search with Google: BPmono font">&#127350;</a>&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >4.0</span>&nbsp;|&nbsp;<span title="Font is Serif" >&#120450;</span>&nbsp;|&nbsp;<span title="Font has Zero Slashed or Zero Dotted" >&#216;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "BPmono",
"editor.fontSize": 11,
"editor.lineHeight": 15,
"editor.fontWeight": 500,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": false,
// --- FONT SETTINGS :: END
```

</div></div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-014-basier-square-mono"  name="font-014-basier-square-mono"></a>014 - <a href="https://www.atipofoundry.com/fonts/basier-mono" title="Download Basier Square Mono">Basier Square Mono</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=Basier%20Square%20Mono%20font" title="Search with Google: Basier Square Mono font" alt="Search with Google: Basier Square Mono font">&#127350;</a>&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >3.5</span>&nbsp;|&nbsp;<span style="color:ForestGreen;">&#9752;</span>&nbsp;|&nbsp;<span title="Font has Zero Slashed or Zero Dotted" >&#216;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "Basier Square Mono",
"editor.fontSize": 1,
"editor.lineHeight": 16,
"editor.fontWeight": 500,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": false,
// --- FONT SETTINGS :: END
```

</div></div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-015-bedstead"  name="font-015-bedstead"></a>015 - <a href="https://bjh21.me.uk/bedstead/" title="Download Bedstead">Bedstead</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=Bedstead%20font" title="Search with Google: Bedstead font" alt="Search with Google: Bedstead font">&#127350;</a>&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >3.5</span>&nbsp;|&nbsp;<span style="color:ForestGreen;">&#9752;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "Bedstead",
"editor.fontSize": 11,
"editor.lineHeight": 17,
"editor.fontWeight": 500,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": false,
// --- FONT SETTINGS :: END
```

</div></div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-016-bergen-mono"  name="font-016-bergen-mono"></a>016 - <a href="https://allbestfonts.com/bergen-mono/" title="Download Bergen Mono">Bergen Mono</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=Bergen%20Mono%20font" title="Search with Google: Bergen Mono font" alt="Search with Google: Bergen Mono font">&#127350;</a>&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >3.5</span>&nbsp;|&nbsp;<span style="color:ForestGreen;">&#9752;</span>&nbsp;|&nbsp;<span title="Font has Zero Slashed or Zero Dotted" >&#216;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "Bergen Mono",
"editor.fontSize": 11,
"editor.lineHeight": 16,
"editor.fontWeight": 400,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": false,
// --- FONT SETTINGS :: END
```

</div></div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-017-bitstream-vera-sans-mono"  name="font-017-bitstream-vera-sans-mono"></a>017 - <a href="https://www.dafont.com/it/bitstream-vera-mono.font" title="Download Bitstream Vera Sans Mono">Bitstream Vera Sans Mono</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=Bitstream%20Vera%20Sans%20Mono%20font" title="Search with Google: Bitstream Vera Sans Mono font" alt="Search with Google: Bitstream Vera Sans Mono font">&#127350;</a>&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >4.0</span>&nbsp;|&nbsp;<span title="Font has Zero Slashed or Zero Dotted" >&#216;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "Bitstream Vera Sans Mono",
"editor.fontSize": 11,
"editor.lineHeight": 15,
"editor.fontWeight": 500,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": false,
// --- FONT SETTINGS :: END
```

</div></div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-018-borg-sans-mono"  name="font-018-borg-sans-mono"></a>018 - <a href="https://github.com/marnen/borg-sans-mono/releases" title="Download Borg Sans Mono">Borg Sans Mono</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=Borg%20Sans%20Mono%20font" title="Search with Google: Borg Sans Mono font" alt="Search with Google: Borg Sans Mono font">&#127350;</a>&nbsp;|&nbsp;&#11088;&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >5.0</span>&nbsp;|&nbsp;<span style="color:ForestGreen;">&#9752;</span>&nbsp;|&nbsp;<span title="Font has Ligatures" >&#8655;</span>&nbsp;|&nbsp;<span title="Font has Zero Slashed or Zero Dotted" >&#216;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "Borg Sans Mono",
"editor.fontSize": 11,
"editor.lineHeight": 16,
"editor.fontWeight": 500,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": true,
// --- FONT SETTINGS :: END
```

</div></div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-019-caffeine-mono"  name="font-019-caffeine-mono"></a>019 - <a href="https://fontesk.com/caffeine-mono-font/" title="Download Caffeine Mono">Caffeine Mono</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=Caffeine%20Mono%20font" title="Search with Google: Caffeine Mono font" alt="Search with Google: Caffeine Mono font">&#127350;</a>&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >3.5</span>&nbsp;|&nbsp;<span style="color:ForestGreen;">&#9752;</span>&nbsp;|&nbsp;<span title="Font has Ligatures" >&#8655;</span>&nbsp;|&nbsp;<span title="Font is Serif" >&#120450;</span>&nbsp;|&nbsp;<span title="Font has Zero Slashed or Zero Dotted" >&#216;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "Caffeine Mono",
"editor.fontSize": 13,
"editor.lineHeight": 18,
"editor.fontWeight": 500,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": true,
// --- FONT SETTINGS :: END
```

</div></div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-020-calling-code"  name="font-020-calling-code"></a>020 - <a href="https://fontesk.com/calling-code-font/" title="Download Calling Code">Calling Code</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=Calling%20Code%20font" title="Search with Google: Calling Code font" alt="Search with Google: Calling Code font">&#127350;</a>&nbsp;|&nbsp;&#11088;&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >5.0</span>&nbsp;|&nbsp;<span style="color:ForestGreen;">&#9752;</span>&nbsp;|&nbsp;<span title="Font has Ligatures" >&#8655;</span>&nbsp;|&nbsp;<span title="Font is Serif" >&#120450;</span>&nbsp;|&nbsp;<span title="Font has Zero Slashed or Zero Dotted" >&#216;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "Calling Code",
"editor.fontSize": 11,
"editor.lineHeight": 16,
"editor.fontWeight": 500,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": true,
// --- FONT SETTINGS :: END
```

</div></div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-021-camingocode"  name="font-021-camingocode"></a>021 - <a href="https://www.janfromm.de/typefaces/camingomono/camingocode/" title="Download CamingoCode">CamingoCode</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=CamingoCode%20font" title="Search with Google: CamingoCode font" alt="Search with Google: CamingoCode font">&#127350;</a>&nbsp;|&nbsp;&#11088;&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >5.0</span>&nbsp;|&nbsp;<span title="Font has Zero Slashed or Zero Dotted" >&#216;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "CamingoCode",
"editor.fontSize": 11,
"editor.lineHeight": 16,
"editor.fontWeight": 500,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": false,
// --- FONT SETTINGS :: END
```

</div></div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-022-cascadia-code"  name="font-022-cascadia-code"></a>022 - <a href="https://github.com/microsoft/cascadia-code/releases" title="Download Cascadia Code">Cascadia Code</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=Cascadia%20Code%20font" title="Search with Google: Cascadia Code font" alt="Search with Google: Cascadia Code font">&#127350;</a>&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >4.0</span>&nbsp;|&nbsp;<span title="Font has Ligatures" >&#8655;</span>&nbsp;|&nbsp;<span title="Font is Serif" >&#120450;</span>&nbsp;|&nbsp;<span title="Font has Zero Slashed or Zero Dotted" >&#216;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "Cascadia Code",
"editor.fontSize": 11,
"editor.lineHeight": 16,
"editor.fontWeight": 400,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": true,
// --- FONT SETTINGS :: END
```

</div></div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-023-cascadia-mono"  name="font-023-cascadia-mono"></a>023 - <a href="https://github.com/microsoft/cascadia-code/releases" title="Download Cascadia Mono">Cascadia Mono</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=Cascadia%20Mono%20font" title="Search with Google: Cascadia Mono font" alt="Search with Google: Cascadia Mono font">&#127350;</a>&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >4.0</span>&nbsp;|&nbsp;<span title="Font is Serif" >&#120450;</span>&nbsp;|&nbsp;<span title="Font has Zero Slashed or Zero Dotted" >&#216;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "Cascadia Mono",
"editor.fontSize": 11,
"editor.lineHeight": 15,
"editor.fontWeight": 400,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": false,
// --- FONT SETTINGS :: END
```

</div></div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-024-caskaydia-cove"  name="font-024-caskaydia-cove"></a>024 - <a href="https://fontesk.com/caskaydia-cove-typeface/" title="Download Caskaydia Cove">Caskaydia Cove</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=Caskaydia%20Cove%20font" title="Search with Google: Caskaydia Cove font" alt="Search with Google: Caskaydia Cove font">&#127350;</a>&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >4.5</span>&nbsp;|&nbsp;<span style="color:ForestGreen;">&#9752;</span>&nbsp;|&nbsp;<span title="Font has Ligatures" >&#8655;</span>&nbsp;|&nbsp;<span title="Font is Serif" >&#120450;</span>&nbsp;|&nbsp;<span title="Font has Zero Slashed or Zero Dotted" >&#216;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "Caskaydia Cove",
"editor.fontSize": 10,
"editor.lineHeight": 16,
"editor.fontWeight": 500,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": true,
// --- FONT SETTINGS :: END
```

</div></div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-025-cispeo"  name="font-025-cispeo"></a>025 - <a href="https://fontsarena.com/cispeo-by-lucas-descroix/" title="Download Cispeo">Cispeo</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=Cispeo%20font" title="Search with Google: Cispeo font" alt="Search with Google: Cispeo font">&#127350;</a>&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >4.5</span>&nbsp;|&nbsp;<span style="color:ForestGreen;">&#9752;</span>&nbsp;|&nbsp;<span title="Font is Serif" >&#120450;</span>&nbsp;|&nbsp;<span title="Font has Zero Slashed or Zero Dotted" >&#216;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "Cispeo",
"editor.fontSize": 11,
"editor.lineHeight": 16,
"editor.fontWeight": 500,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": false,
// --- FONT SETTINGS :: END
```

</div></div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-026-code-new-roman"  name="font-026-code-new-roman"></a>026 - <a href="https://www.dafont.com/code-new-roman.font" title="Download Code New Roman">Code New Roman</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=Code%20New%20Roman%20font" title="Search with Google: Code New Roman font" alt="Search with Google: Code New Roman font">&#127350;</a>&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >4.0</span>&nbsp;|&nbsp;<span title="Font is Serif" >&#120450;</span>&nbsp;|&nbsp;<span title="Font has Zero Slashed or Zero Dotted" >&#216;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "Code New Roman",
"editor.fontSize": 12,
"editor.lineHeight": 16,
"editor.fontWeight": 500,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": false,
// --- FONT SETTINGS :: END
```

</div></div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-027-codee-sans-mono"  name="font-027-codee-sans-mono"></a>027 - <a href="https://fontesk.com/codee-sans-mono-font/" title="Download Codee Sans Mono">Codee Sans Mono</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=Codee%20Sans%20Mono%20font" title="Search with Google: Codee Sans Mono font" alt="Search with Google: Codee Sans Mono font">&#127350;</a>&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >3.5</span>&nbsp;|&nbsp;<span style="color:ForestGreen;">&#9752;</span>&nbsp;|&nbsp;<span title="Font has Zero Slashed or Zero Dotted" >&#216;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "Codee Sans Mono",
"editor.fontSize": 9,
"editor.lineHeight": 16,
"editor.fontWeight": 500,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": false,
// --- FONT SETTINGS :: END
```

</div></div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-028-codetta"  name="font-028-codetta"></a>028 - <a href="https://fontesk.com/codetta-typeface/" title="Download Codetta">Codetta</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=Codetta%20font" title="Search with Google: Codetta font" alt="Search with Google: Codetta font">&#127350;</a>&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >4.5</span>&nbsp;|&nbsp;<span style="color:ForestGreen;">&#9752;</span>&nbsp;|&nbsp;<span title="Font has Ligatures" >&#8655;</span>&nbsp;|&nbsp;<span title="Font has Zero Slashed or Zero Dotted" >&#216;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "Codetta",
"editor.fontSize": 11,
"editor.lineHeight": 16,
"editor.fontWeight": 500,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": true,
// --- FONT SETTINGS :: END
```

</div></div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-029-comic-shanns-regular"  name="font-029-comic-shanns-regular"></a>029 - <a href="https://github.com/shannpersand/comic-shanns" title="Download Comic Shanns Regular">Comic Shanns Regular</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=Comic%20Shanns%20Regular%20font" title="Search with Google: Comic Shanns Regular font" alt="Search with Google: Comic Shanns Regular font">&#127350;</a>&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >4.5</span>&nbsp;|&nbsp;<span style="color:ForestGreen;">&#9752;</span>&nbsp;|&nbsp;<span title="Font is Serif" >&#120450;</span>&nbsp;|&nbsp;<span title="Font has Zero Slashed or Zero Dotted" >&#216;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "Comic Shanns Regular",
"editor.fontSize": 12,
"editor.lineHeight": 16,
"editor.fontWeight": 500,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": false,
// --- FONT SETTINGS :: END
```

</div></div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-030-consola-mono"  name="font-030-consola-mono"></a>030 - <a href="https://fontlibrary.org/en/font/consolamono" title="Download Consola Mono">Consola Mono</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=Consola%20Mono%20font" title="Search with Google: Consola Mono font" alt="Search with Google: Consola Mono font">&#127350;</a>&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >4.0</span>&nbsp;|&nbsp;<span title="Font has Zero Slashed or Zero Dotted" >&#216;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "Consola Mono",
"editor.fontSize": 12,
"editor.lineHeight": 16,
"editor.fontWeight": 500,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": false,
// --- FONT SETTINGS :: END
```

</div></div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-031-consolas-ligaturized-v2"  name="font-031-consolas-ligaturized-v2"></a>031 - <a href="https://github.com/somq/consolas-ligaturized/" title="Download Consolas Ligaturized v2">Consolas Ligaturized v2</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=Consolas%20Ligaturized%20v2%20font" title="Search with Google: Consolas Ligaturized v2 font" alt="Search with Google: Consolas Ligaturized v2 font">&#127350;</a>&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >4.0</span>&nbsp;|&nbsp;<span title="Font has Ligatures" >&#8655;</span>&nbsp;|&nbsp;<span title="Font has Zero Slashed or Zero Dotted" >&#216;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "Consolas Ligaturized v2",
"editor.fontSize": 11,
"editor.lineHeight": 16,
"editor.fontWeight": 500,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": true,
// --- FONT SETTINGS :: END
```

</div></div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-032-consolate-elf"  name="font-032-consolate-elf"></a>032 - <a href="https://www.cufonfonts.com/font/consolate-elf" title="Download Consolate Elf">Consolate Elf</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=Consolate%20Elf%20font" title="Search with Google: Consolate Elf font" alt="Search with Google: Consolate Elf font">&#127350;</a>&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >4.0</span>&nbsp;|&nbsp;<span style="color:ForestGreen;">&#9752;</span>&nbsp;|&nbsp;<span title="Font has Ligatures" >&#8655;</span>&nbsp;|&nbsp;<span title="Font is Serif" >&#120450;</span>&nbsp;|&nbsp;<span title="Font has Zero Slashed or Zero Dotted" >&#216;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "Consolate Elf",
"editor.fontSize": 12,
"editor.lineHeight": 16,
"editor.fontWeight": 500,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": true,
// --- FONT SETTINGS :: END
```

</div></div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-033-conta"  name="font-033-conta"></a>033 - <a href="https://fontesk.com/conta-typeface/" title="Download Conta">Conta</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=Conta%20font" title="Search with Google: Conta font" alt="Search with Google: Conta font">&#127350;</a>&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >4.5</span>&nbsp;|&nbsp;<span title="Font is Serif" >&#120450;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "Conta",
"editor.fontSize": 11,
"editor.lineHeight": 18,
"editor.fontWeight": 500,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": false,
// --- FONT SETTINGS :: END
```

</div></div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-034-cosmicsansneuemono"  name="font-034-cosmicsansneuemono"></a>034 - <a href="https://github.com/gregkh/cosmic-sans-neue" title="Download CosmicSansNeueMono">CosmicSansNeueMono</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=CosmicSansNeueMono%20font" title="Search with Google: CosmicSansNeueMono font" alt="Search with Google: CosmicSansNeueMono font">&#127350;</a>&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >3.5</span>&nbsp;|&nbsp;<span title="Font has Zero Slashed or Zero Dotted" >&#216;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "CosmicSansNeueMono",
"editor.fontSize": 12,
"editor.lineHeight": 15,
"editor.fontWeight": 500,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": false,
// --- FONT SETTINGS :: END
```

</div></div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-035-courier-prime"  name="font-035-courier-prime"></a>035 - <a href="https://quoteunquoteapps.com/courierprime/downloads/courier-prime.zip" title="Download Courier Prime">Courier Prime</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=Courier%20Prime%20font" title="Search with Google: Courier Prime font" alt="Search with Google: Courier Prime font">&#127350;</a>&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >4.5</span>&nbsp;|&nbsp;<span style="color:ForestGreen;">&#9752;</span>&nbsp;|&nbsp;<span title="Font is Serif" >&#120450;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "Courier Prime",
"editor.fontSize": 12,
"editor.lineHeight": 15,
"editor.fontWeight": 500,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": false,
// --- FONT SETTINGS :: END
```

</div></div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-036-courier-prime-code"  name="font-036-courier-prime-code"></a>036 - <a href="https://quoteunquoteapps.com/courierprime/downloads/courier-prime-code.zip" title="Download Courier Prime Code">Courier Prime Code</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=Courier%20Prime%20Code%20font" title="Search with Google: Courier Prime Code font" alt="Search with Google: Courier Prime Code font">&#127350;</a>&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >4.0</span>&nbsp;|&nbsp;<span title="Font is Serif" >&#120450;</span>&nbsp;|&nbsp;<span title="Font has Zero Slashed or Zero Dotted" >&#216;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "Courier Prime Code",
"editor.fontSize": 12,
"editor.lineHeight": 15,
"editor.fontWeight": 500,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": false,
// --- FONT SETTINGS :: END
```

</div></div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-037-courier-prime-sans"  name="font-037-courier-prime-sans"></a>037 - <a href="https://quoteunquoteapps.com/courierprime/downloads/courier-prime-sans.zip" title="Download Courier Prime Sans">Courier Prime Sans</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=Courier%20Prime%20Sans%20font" title="Search with Google: Courier Prime Sans font" alt="Search with Google: Courier Prime Sans font">&#127350;</a>&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >4.5</span>&nbsp;|&nbsp;<span style="color:ForestGreen;">&#9752;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "Courier Prime Sans",
"editor.fontSize": 12,
"editor.lineHeight": 15,
"editor.fontWeight": 500,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": false,
// --- FONT SETTINGS :: END
```

</div></div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-038-cousine"  name="font-038-cousine"></a>038 - <a href="https://www.fontsc.com/font/download/cousine" title="Download Cousine">Cousine</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=Cousine%20font" title="Search with Google: Cousine font" alt="Search with Google: Cousine font">&#127350;</a>&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >4.0</span>&nbsp;|&nbsp;<span title="Font is Serif" >&#120450;</span>&nbsp;|&nbsp;<span title="Font has Zero Slashed or Zero Dotted" >&#216;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "Cousine",
"editor.fontSize": 11,
"editor.lineHeight": 16,
"editor.fontWeight": 500,
"editor.letterSpacing": 0.7,
"editor.fontLigatures": false,
// --- FONT SETTINGS :: END
```

</div></div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-039-cozettevector"  name="font-039-cozettevector"></a>039 - <a href="https://github.com/slavfox/Cozette/releases" title="Download CozetteVector">CozetteVector</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=CozetteVector%20font" title="Search with Google: CozetteVector font" alt="Search with Google: CozetteVector font">&#127350;</a>&nbsp;|&nbsp;&#11088;&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >5.0</span>&nbsp;|&nbsp;<span style="color:ForestGreen;">&#9752;</span>&nbsp;|&nbsp;&#127345;&nbsp;|&nbsp;<span title="Font has Zero Slashed or Zero Dotted" >&#216;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "CozetteVector",
"editor.fontSize": 12,
"editor.lineHeight": 15,
"editor.fontWeight": 500,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": false,
// --- FONT SETTINGS :: END
```

</div></div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-040-cutive-mono"  name="font-040-cutive-mono"></a>040 - <a href="https://fonts.google.com/specimen/Cutive+Mono?category=Monospace" title="Download Cutive Mono">Cutive Mono</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=Cutive%20Mono%20font" title="Search with Google: Cutive Mono font" alt="Search with Google: Cutive Mono font">&#127350;</a>&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >3.5</span>&nbsp;|&nbsp;<span style="color:ForestGreen;">&#9752;</span>&nbsp;|&nbsp;<span title="Font is Serif" >&#120450;</span>&nbsp;|&nbsp;<span title="Font has Zero Slashed or Zero Dotted" >&#216;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "Cutive Mono",
"editor.fontSize": 14,
"editor.lineHeight": 16,
"editor.fontWeight": 500,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": false,
// --- FONT SETTINGS :: END
```

</div></div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-041-d2coding-ligature"  name="font-041-d2coding-ligature"></a>041 - <a href="https://github.com/naver/d2codingfont" title="Download D2Coding Ligature">D2Coding Ligature</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=D2Coding%20Ligature%20font" title="Search with Google: D2Coding Ligature font" alt="Search with Google: D2Coding Ligature font">&#127350;</a>&nbsp;|&nbsp;&#11088;&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >5.0</span>&nbsp;|&nbsp;<span style="color:ForestGreen;">&#9752;</span>&nbsp;|&nbsp;<span title="Font has Ligatures" >&#8655;</span>&nbsp;|&nbsp;<span title="Font has Zero Slashed or Zero Dotted" >&#216;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "D2Coding Ligature",
"editor.fontSize": 12,
"editor.lineHeight": 16,
"editor.fontWeight": 500,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": true,
// --- FONT SETTINGS :: END
```

</div><div><b>Notes</b><br>
D2Coding Ligature: There is also a version without ligatures.

</div>
</div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-042-dm-mono"  name="font-042-dm-mono"></a>042 - <a href="https://fonts.google.com/specimen/DM+Mono?category=Monospace&preview.size=11" title="Download DM Mono">DM Mono</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=DM%20Mono%20font" title="Search with Google: DM Mono font" alt="Search with Google: DM Mono font">&#127350;</a>&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >3.5</span>&nbsp;|&nbsp;<span title="Font is Serif" >&#120450;</span>&nbsp;|&nbsp;<span title="Font has Zero Slashed or Zero Dotted" >&#216;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "DM Mono",
"editor.fontSize": 11,
"editor.lineHeight": 16,
"editor.fontWeight": 400,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": false,
// --- FONT SETTINGS :: END
```

</div></div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-043-daddytimemono"  name="font-043-daddytimemono"></a>043 - <a href="https://github.com/BourgeoisBear/DaddyTimeMono" title="Download DaddyTimeMono">DaddyTimeMono</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=DaddyTimeMono%20font" title="Search with Google: DaddyTimeMono font" alt="Search with Google: DaddyTimeMono font">&#127350;</a>&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >4.0</span>&nbsp;|&nbsp;<span title="Font has Zero Slashed or Zero Dotted" >&#216;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "DaddyTimeMono",
"editor.fontSize": 12,
"editor.lineHeight": 16,
"editor.fontWeight": 500,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": false,
// --- FONT SETTINGS :: END
```

</div></div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-044-dank-mono"  name="font-044-dank-mono"></a>044 - <a href="https://github.com/goblincore/Coding-Fonts" title="Download Dank Mono">Dank Mono</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=Dank%20Mono%20font" title="Search with Google: Dank Mono font" alt="Search with Google: Dank Mono font">&#127350;</a>&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >4.0</span>&nbsp;|&nbsp;<span title="Font has Ligatures" >&#8655;</span>&nbsp;|&nbsp;<span title="Font is Serif" >&#120450;</span>&nbsp;|&nbsp;<span title="Font has Zero Slashed or Zero Dotted" >&#216;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "Dank Mono",
"editor.fontSize": 12,
"editor.lineHeight": 18,
"editor.fontWeight": 500,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": true,
// --- FONT SETTINGS :: END
```

</div></div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-045-dejavu-sans-code"  name="font-045-dejavu-sans-code"></a>045 - <a href="https://github.com/SSNikolaevich/DejaVuSansCode/releases/" title="Download DejaVu Sans Code">DejaVu Sans Code</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=DejaVu%20Sans%20Code%20font" title="Search with Google: DejaVu Sans Code font" alt="Search with Google: DejaVu Sans Code font">&#127350;</a>&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >4.0</span>&nbsp;|&nbsp;<span title="Font has Ligatures" >&#8655;</span>&nbsp;|&nbsp;<span title="Font is Serif" >&#120450;</span>&nbsp;|&nbsp;<span title="Font has Zero Slashed or Zero Dotted" >&#216;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "DejaVu Sans Code",
"editor.fontSize": 11,
"editor.lineHeight": 15,
"editor.fontWeight": 500,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": true,
// --- FONT SETTINGS :: END
```

</div></div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-046-dejavu-sans-mono"  name="font-046-dejavu-sans-mono"></a>046 - <a href="https://sourceforge.net/projects/dejavu/" title="Download DejaVu Sans Mono">DejaVu Sans Mono</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=DejaVu%20Sans%20Mono%20font" title="Search with Google: DejaVu Sans Mono font" alt="Search with Google: DejaVu Sans Mono font">&#127350;</a>&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >4.0</span>&nbsp;|&nbsp;<span title="Font is Serif" >&#120450;</span>&nbsp;|&nbsp;<span title="Font has Zero Slashed or Zero Dotted" >&#216;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "DejaVu Sans Mono",
"editor.fontSize": 11,
"editor.lineHeight": 15,
"editor.fontWeight": 500,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": false,
// --- FONT SETTINGS :: END
```

</div></div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-047-dejavu-sans-mono---bront"  name="font-047-dejavu-sans-mono---bront"></a>047 - <a href="https://github.com/chrismwendt/bront" title="Download DejaVu Sans Mono - Bront">DejaVu Sans Mono - Bront</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=DejaVu%20Sans%20Mono%20-%20Bront%20font" title="Search with Google: DejaVu Sans Mono - Bront font" alt="Search with Google: DejaVu Sans Mono - Bront font">&#127350;</a>&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >4.0</span>&nbsp;|&nbsp;<span title="Font has Zero Slashed or Zero Dotted" >&#216;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "DejaVu Sans Mono - Bront",
"editor.fontSize": 11,
"editor.lineHeight": 15,
"editor.fontWeight": 500,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": false,
// --- FONT SETTINGS :: END
```

</div><div><b>Notes</b><br>
DejaVu Sans Mono - Bront: Tweaked `DejaVu Sans Mono` and `Ubuntu Mono`

</div>
</div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-048-drafting-mono"  name="font-048-drafting-mono"></a>048 - <a href="https://fontesk.com/drafting-mono-typeface/" title="Download Drafting Mono">Drafting Mono</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=Drafting%20Mono%20font" title="Search with Google: Drafting Mono font" alt="Search with Google: Drafting Mono font">&#127350;</a>&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >4.0</span>&nbsp;|&nbsp;<span style="color:ForestGreen;">&#9752;</span>&nbsp;|&nbsp;<span title="Font is Serif" >&#120450;</span>&nbsp;|&nbsp;<span title="Font has Zero Slashed or Zero Dotted" >&#216;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "Drafting Mono",
"editor.fontSize": 11,
"editor.lineHeight": 16,
"editor.fontWeight": 500,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": false,
// --- FONT SETTINGS :: END
```

</div></div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-049-droid-sans-mono"  name="font-049-droid-sans-mono"></a>049 - <a href="https://www.fontsquirrel.com/fonts/download/droid-sans" title="Download Droid Sans Mono">Droid Sans Mono</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=Droid%20Sans%20Mono%20font" title="Search with Google: Droid Sans Mono font" alt="Search with Google: Droid Sans Mono font">&#127350;</a>&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >4.5</span>&nbsp;|&nbsp;<span title="Font is Serif" >&#120450;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "Droid Sans Mono",
"editor.fontSize": 10,
"editor.lineHeight": 14,
"editor.fontWeight": 500,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": false,
// --- FONT SETTINGS :: END
```

</div></div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-050-drucifer"  name="font-050-drucifer"></a>050 - <a href="https://github.com/drucifer/drucifer-monospace" title="Download Drucifer">Drucifer</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=Drucifer%20font" title="Search with Google: Drucifer font" alt="Search with Google: Drucifer font">&#127350;</a>&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >4.5</span>&nbsp;|&nbsp;<span style="color:ForestGreen;">&#9752;</span>&nbsp;|&nbsp;<span title="Font has Zero Slashed or Zero Dotted" >&#216;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "Drucifer",
"editor.fontSize": 11,
"editor.lineHeight": 15,
"editor.fontWeight": 500,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": false,
// --- FONT SETTINGS :: END
```

</div></div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-051-envy-code-r"  name="font-051-envy-code-r"></a>051 - <a href="https://damieng.com/blog/2008/05/26/envy-code-r-preview-7-coding-font-released" title="Download Envy Code R">Envy Code R</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=Envy%20Code%20R%20font" title="Search with Google: Envy Code R font" alt="Search with Google: Envy Code R font">&#127350;</a>&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >4.5</span>&nbsp;|&nbsp;<span title="Font is Serif" >&#120450;</span>&nbsp;|&nbsp;<span title="Font has Zero Slashed or Zero Dotted" >&#216;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "Envy Code R",
"editor.fontSize": 11,
"editor.lineHeight": 14,
"editor.fontWeight": 500,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": false,
// --- FONT SETTINGS :: END
```

</div></div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-052-fairfax"  name="font-052-fairfax"></a>052 - <a href="http://www.kreativekorp.com/software/fonts/fairfax.shtml" title="Download Fairfax">Fairfax</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=Fairfax%20font" title="Search with Google: Fairfax font" alt="Search with Google: Fairfax font">&#127350;</a>&nbsp;|&nbsp;&#11088;&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >5.0</span>&nbsp;|&nbsp;<span style="color:ForestGreen;">&#9752;</span>&nbsp;|&nbsp;<span title="Font has Zero Slashed or Zero Dotted" >&#216;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "Fairfax",
"editor.fontSize": 12,
"editor.lineHeight": 16,
"editor.fontWeight": 500,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": false,
// --- FONT SETTINGS :: END
```

</div></div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-053-fairfax-hd"  name="font-053-fairfax-hd"></a>053 - <a href="http://www.kreativekorp.com/software/fonts/fairfaxhd.shtml" title="Download Fairfax HD">Fairfax HD</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=Fairfax%20HD%20font" title="Search with Google: Fairfax HD font" alt="Search with Google: Fairfax HD font">&#127350;</a>&nbsp;|&nbsp;&#11088;&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >5.0</span>&nbsp;|&nbsp;<span style="color:ForestGreen;">&#9752;</span>&nbsp;|&nbsp;<span title="Font has Zero Slashed or Zero Dotted" >&#216;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "Fairfax HD",
"editor.fontSize": 12,
"editor.lineHeight": 16,
"editor.fontWeight": 500,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": false,
// --- FONT SETTINGS :: END
```

</div></div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-054-fairfax-serif"  name="font-054-fairfax-serif"></a>054 - <a href="http://www.kreativekorp.com/software/fonts/fairfax.shtml" title="Download Fairfax Serif">Fairfax Serif</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=Fairfax%20Serif%20font" title="Search with Google: Fairfax Serif font" alt="Search with Google: Fairfax Serif font">&#127350;</a>&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >4.5</span>&nbsp;|&nbsp;<span style="color:ForestGreen;">&#9752;</span>&nbsp;|&nbsp;<span title="Font is Serif" >&#120450;</span>&nbsp;|&nbsp;<span title="Font has Zero Slashed or Zero Dotted" >&#216;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "Fairfax Serif",
"editor.fontSize": 12,
"editor.lineHeight": 16,
"editor.fontWeight": 500,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": false,
// --- FONT SETTINGS :: END
```

</div></div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-055-fantasque-sans-mono"  name="font-055-fantasque-sans-mono"></a>055 - <a href="https://github.com/belluzj/fantasque-sans/releases" title="Download Fantasque Sans Mono">Fantasque Sans Mono</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=Fantasque%20Sans%20Mono%20font" title="Search with Google: Fantasque Sans Mono font" alt="Search with Google: Fantasque Sans Mono font">&#127350;</a>&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >4.0</span>&nbsp;|&nbsp;<span title="Font has Ligatures" >&#8655;</span>&nbsp;|&nbsp;<span title="Font is Serif" >&#120450;</span>&nbsp;|&nbsp;<span title="Font has Zero Slashed or Zero Dotted" >&#216;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "Fantasque Sans Mono",
"editor.fontSize": 12,
"editor.lineHeight": 16,
"editor.fontWeight": 500,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": true,
// --- FONT SETTINGS :: END
```

</div></div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-056-fira-code"  name="font-056-fira-code"></a>056 - <a href="https://github.com/tonsky/FiraCode" title="Download Fira Code">Fira Code</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=Fira%20Code%20font" title="Search with Google: Fira Code font" alt="Search with Google: Fira Code font">&#127350;</a>&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >4.0</span>&nbsp;|&nbsp;<span title="Font has Ligatures" >&#8655;</span>&nbsp;|&nbsp;<span title="Font is Serif" >&#120450;</span>&nbsp;|&nbsp;<span title="Font has Zero Slashed or Zero Dotted" >&#216;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "Fira Code",
"editor.fontSize": 10,
"editor.lineHeight": 16,
"editor.fontWeight": 400,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": true,
// --- FONT SETTINGS :: END
```

</div></div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-057-fira-code-iscript"  name="font-057-fira-code-iscript"></a>057 - <a href="https://github.com/kencrocken/FiraCodeiScript" title="Download Fira Code iScript">Fira Code iScript</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=Fira%20Code%20iScript%20font" title="Search with Google: Fira Code iScript font" alt="Search with Google: Fira Code iScript font">&#127350;</a>&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >4.0</span>&nbsp;|&nbsp;<span title="Font has Ligatures" >&#8655;</span>&nbsp;|&nbsp;<span title="Font has Script Variant for Italic" >&#119998;</span>&nbsp;|&nbsp;<span title="Font is Serif" >&#120450;</span>&nbsp;|&nbsp;<span title="Font has Zero Slashed or Zero Dotted" >&#216;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "Fira Code iScript",
"editor.fontSize": 11,
"editor.lineHeight": 14,
"editor.fontWeight": 500,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": true,

// Note: these tips are taken
// from the FiraFlott website
// Customization for font
// with Script Variants Italic
"editor.tokenColorCustomizations": {
 "textMateRules": [
  {
   "scope": [
    "comment",
    "entity.name.type.class",
    "keyword",
    "constant",
    "storage.modifier",
    "storage.type.class.js",
   ],
   "settings": {
    "fontStyle": "italic"
   }
  },
  {
   "scope": [
    "invalid",
    "keyword.operator",
    "constant.numeric.css",
    "keyword.other.unit.px.css",
    "constant.numeric.decimal.js",
    "constant.numeric.json"
   ],
   "settings": {
    "fontStyle": ""
   }
  }
 ]
},
// --- FONT SETTINGS :: END
```

</div><div><b>Notes</b><br>
Fira Code iScript: Fira Code iScript = Fira Code + Script12 Fonts

</div>
</div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-058-fira-mono"  name="font-058-fira-mono"></a>058 - <a href="https://fonts.google.com/specimen/Fira+Mono" title="Download Fira Mono">Fira Mono</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=Fira%20Mono%20font" title="Search with Google: Fira Mono font" alt="Search with Google: Fira Mono font">&#127350;</a>&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >4.0</span>&nbsp;|&nbsp;<span title="Font is Serif" >&#120450;</span>&nbsp;|&nbsp;<span title="Font has Zero Slashed or Zero Dotted" >&#216;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "Fira Mono",
"editor.fontSize": 11,
"editor.lineHeight": 15,
"editor.fontWeight": 400,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": false,
// --- FONT SETTINGS :: END
```

</div></div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-059-firaflott"  name="font-059-firaflott"></a>059 - <a href="https://github.com/kosimst/FiraFlott" title="Download FiraFlott">FiraFlott</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=FiraFlott%20font" title="Search with Google: FiraFlott font" alt="Search with Google: FiraFlott font">&#127350;</a>&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >4.5</span>&nbsp;|&nbsp;<span title="Font has Ligatures" >&#8655;</span>&nbsp;|&nbsp;<span title="Font has Script Variant for Italic" >&#119998;</span>&nbsp;|&nbsp;<span title="Font is Serif" >&#120450;</span>&nbsp;|&nbsp;<span title="Font has Zero Slashed or Zero Dotted" >&#216;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "FiraFlott",
"editor.fontSize": 10,
"editor.lineHeight": 14,
"editor.fontWeight": 400,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": true,

// Note: these tips are taken
// from the FiraFlott website
// Customization for font
// with Script Variants Italic
"editor.tokenColorCustomizations": {
 "textMateRules": [
  {
   "scope": [
    "comment",
    "entity.name.type.class",
    "keyword",
    "constant",
    "storage.modifier",
    "storage.type.class.js",
   ],
   "settings": {
    "fontStyle": "italic"
   }
  },
  {
   "scope": [
    "invalid",
    "keyword.operator",
    "constant.numeric.css",
    "keyword.other.unit.px.css",
    "constant.numeric.decimal.js",
    "constant.numeric.json"
   ],
   "settings": {
    "fontStyle": ""
   }
  }
 ]
},
// --- FONT SETTINGS :: END
```

</div><div><b>Notes</b><br>
FiraFlott: FiraFlott = Fira Code + FlottFlot Fonts

</div>
</div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-060-freemono"  name="font-060-freemono"></a>060 - <a href="https://fontmeme.com/fonts/freemono-font/" title="Download FreeMono">FreeMono</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=FreeMono%20font" title="Search with Google: FreeMono font" alt="Search with Google: FreeMono font">&#127350;</a>&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >3.5</span>&nbsp;|&nbsp;<span style="color:ForestGreen;">&#9752;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "FreeMono",
"editor.fontSize": 14,
"editor.lineHeight": 18,
"editor.fontWeight": 500,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": false,
// --- FONT SETTINGS :: END
```

</div></div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-061-gt-pressura-mono"  name="font-061-gt-pressura-mono"></a>061 - <a href="http://font2s.com/fonts/50932/" title="Download GT Pressura Mono">GT Pressura Mono</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=GT%20Pressura%20Mono%20font" title="Search with Google: GT Pressura Mono font" alt="Search with Google: GT Pressura Mono font">&#127350;</a>&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >4.0</span>&nbsp;|&nbsp;<span style="color:ForestGreen;">&#9752;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "GT Pressura Mono",
"editor.fontSize": 12,
"editor.lineHeight": 16,
"editor.fontWeight": 500,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": false,
// --- FONT SETTINGS :: END
```

</div></div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-062-generic-mono-ii"  name="font-062-generic-mono-ii"></a>062 - <a href="https://www.download-free-fonts.com/details/91877/generic-mono-ii-regular" title="Download Generic Mono II">Generic Mono II</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=Generic%20Mono%20II%20font" title="Search with Google: Generic Mono II font" alt="Search with Google: Generic Mono II font">&#127350;</a>&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >4.5</span>&nbsp;|&nbsp;<span style="color:ForestGreen;">&#9752;</span>&nbsp;|&nbsp;<span title="Font has Zero Slashed or Zero Dotted" >&#216;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "Generic Mono II",
"editor.fontSize": 10,
"editor.lineHeight": 16,
"editor.fontWeight": 500,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": false,
// --- FONT SETTINGS :: END
```

</div></div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-063-gintronic"  name="font-063-gintronic"></a>063 - <a href="https://github.com/goblincore/Coding-Fonts" title="Download Gintronic">Gintronic</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=Gintronic%20font" title="Search with Google: Gintronic font" alt="Search with Google: Gintronic font">&#127350;</a>&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >3.5</span>&nbsp;|&nbsp;<span title="Font has Zero Slashed or Zero Dotted" >&#216;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "Gintronic",
"editor.fontSize": 12,
"editor.lineHeight": 16,
"editor.fontWeight": 300,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": false,
// --- FONT SETTINGS :: END
```

</div></div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-064-go-mono"  name="font-064-go-mono"></a>064 - <a href="https://www.fontmirror.com/go-mono/" title="Download Go Mono">Go Mono</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=Go%20Mono%20font" title="Search with Google: Go Mono font" alt="Search with Google: Go Mono font">&#127350;</a>&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >4.5</span>&nbsp;|&nbsp;<span style="color:ForestGreen;">&#9752;</span>&nbsp;|&nbsp;<span title="Font is Serif" >&#120450;</span>&nbsp;|&nbsp;<span title="Font has Zero Slashed or Zero Dotted" >&#216;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "Go Mono",
"editor.fontSize": 11,
"editor.lineHeight": 16,
"editor.fontWeight": 400,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": false,
// --- FONT SETTINGS :: END
```

</div></div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-065-hack"  name="font-065-hack"></a>065 - <a href="https://sourcefoundry.org/hack" title="Download Hack">Hack</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=Hack%20font" title="Search with Google: Hack font" alt="Search with Google: Hack font">&#127350;</a>&nbsp;|&nbsp;&#11088;&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >5.0</span>&nbsp;|&nbsp;<span title="Font is Serif" >&#120450;</span>&nbsp;|&nbsp;<span title="Font has Zero Slashed or Zero Dotted" >&#216;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "Hack",
"editor.fontSize": 10,
"editor.lineHeight": 14,
"editor.fontWeight": 500,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": false,
// --- FONT SETTINGS :: END
```

</div></div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-066-hasklig"  name="font-066-hasklig"></a>066 - <a href="https://github.com/i-tu/Hasklig" title="Download Hasklig">Hasklig</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=Hasklig%20font" title="Search with Google: Hasklig font" alt="Search with Google: Hasklig font">&#127350;</a>&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >4.0</span>&nbsp;|&nbsp;<span title="Font has Ligatures" >&#8655;</span>&nbsp;|&nbsp;<span title="Font is Serif" >&#120450;</span>&nbsp;|&nbsp;<span title="Font has Zero Slashed or Zero Dotted" >&#216;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "Hasklig",
"editor.fontSize": 11,
"editor.lineHeight": 16,
"editor.fontWeight": 400,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": true,
// --- FONT SETTINGS :: END
```

</div><div><b>Notes</b><br>
Hasklig: Fork of `Source Code Pro`

</div>
</div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-067-hermit"  name="font-067-hermit"></a>067 - <a href="https://pcaro.es/p/hermit/" title="Download Hermit">Hermit</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=Hermit%20font" title="Search with Google: Hermit font" alt="Search with Google: Hermit font">&#127350;</a>&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >4.0</span>&nbsp;|&nbsp;<span title="Font is Serif" >&#120450;</span>&nbsp;|&nbsp;<span title="Font has Zero Slashed or Zero Dotted" >&#216;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "Hermit",
"editor.fontSize": 11,
"editor.lineHeight": 15,
"editor.fontWeight": 500,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": false,
// --- FONT SETTINGS :: END
```

</div></div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-068-ibm-plex-mono"  name="font-068-ibm-plex-mono"></a>068 - <a href="https://fonts.google.com/specimen/IBM+Plex+Mono" title="Download IBM Plex Mono">IBM Plex Mono</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=IBM%20Plex%20Mono%20font" title="Search with Google: IBM Plex Mono font" alt="Search with Google: IBM Plex Mono font">&#127350;</a>&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >4.8</span>&nbsp;|&nbsp;<span title="Font has Zero Slashed or Zero Dotted" >&#216;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "IBM Plex Mono",
"editor.fontSize": 11,
"editor.lineHeight": 16,
"editor.fontWeight": 500,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": false,
// --- FONT SETTINGS :: END
```

</div></div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-069-inconsolata"  name="font-069-inconsolata"></a>069 - <a href="https://fonts.google.com/specimen/Inconsolata" title="Download Inconsolata">Inconsolata</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=Inconsolata%20font" title="Search with Google: Inconsolata font" alt="Search with Google: Inconsolata font">&#127350;</a>&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >3.0</span>&nbsp;|&nbsp;<span title="Font has Zero Slashed or Zero Dotted" >&#216;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "Inconsolata",
"editor.fontSize": 13,
"editor.lineHeight": 16,
"editor.fontWeight": 500,
"editor.letterSpacing": 0.2,
"editor.fontLigatures": false,
// --- FONT SETTINGS :: END
```

</div></div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-070-inconsolata-g"  name="font-070-inconsolata-g"></a>070 - <a href="https://fonts.google.com/specimen/Inconsolata" title="Download Inconsolata-g">Inconsolata-g</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=Inconsolata-g%20font" title="Search with Google: Inconsolata-g font" alt="Search with Google: Inconsolata-g font">&#127350;</a>&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >3.0</span>&nbsp;|&nbsp;<span title="Font is Serif" >&#120450;</span>&nbsp;|&nbsp;<span title="Font has Zero Slashed or Zero Dotted" >&#216;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "Inconsolata-g",
"editor.fontSize": 12,
"editor.lineHeight": 16,
"editor.fontWeight": 500,
"editor.letterSpacing": 0.2,
"editor.fontLigatures": false,
// --- FONT SETTINGS :: END
```

</div></div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-071-input-mono"  name="font-071-input-mono"></a>071 - <a href="https://input.fontbureau.com/download" title="Download Input Mono">Input Mono</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=Input%20Mono%20font" title="Search with Google: Input Mono font" alt="Search with Google: Input Mono font">&#127350;</a>&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >4.0</span>&nbsp;|&nbsp;<span title="Font is Serif" >&#120450;</span>&nbsp;|&nbsp;<span title="Font has Zero Slashed or Zero Dotted" >&#216;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "Input Mono",
"editor.fontSize": 11,
"editor.lineHeight": 15,
"editor.fontWeight": 300,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": false,
// --- FONT SETTINGS :: END
```

</div></div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-072-input-mono-condensed"  name="font-072-input-mono-condensed"></a>072 - <a href="https://input.fontbureau.com/download" title="Download Input Mono Condensed">Input Mono Condensed</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=Input%20Mono%20Condensed%20font" title="Search with Google: Input Mono Condensed font" alt="Search with Google: Input Mono Condensed font">&#127350;</a>&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >4.0</span>&nbsp;|&nbsp;<span title="Font is Serif" >&#120450;</span>&nbsp;|&nbsp;<span title="Font has Zero Slashed or Zero Dotted" >&#216;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "Input Mono Condensed",
"editor.fontSize": 11,
"editor.lineHeight": 15,
"editor.fontWeight": 300,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": false,
// --- FONT SETTINGS :: END
```

</div></div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-073-iosevka"  name="font-073-iosevka"></a>073 - <a href="https://typeof.net/Iosevka" title="Download Iosevka">Iosevka</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=Iosevka%20font" title="Search with Google: Iosevka font" alt="Search with Google: Iosevka font">&#127350;</a>&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >4.0</span>&nbsp;|&nbsp;<span title="Font has Ligatures" >&#8655;</span>&nbsp;|&nbsp;<span title="Font has Zero Slashed or Zero Dotted" >&#216;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "Iosevka",
"editor.fontSize": 11,
"editor.lineHeight": 15,
"editor.fontWeight": 400,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": true,
// --- FONT SETTINGS :: END
```

</div><div><b>Notes</b><br>
Iosevka: Monospace, Default - Many version of this font by Key Shape, Spacing and Ligatures, Styles

</div>
</div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-074-iosevka-curly"  name="font-074-iosevka-curly"></a>074 - <a href="https://typeof.net/Iosevka" title="Download Iosevka Curly">Iosevka Curly</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=Iosevka%20Curly%20font" title="Search with Google: Iosevka Curly font" alt="Search with Google: Iosevka Curly font">&#127350;</a>&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >4.0</span>&nbsp;|&nbsp;<span title="Font has Ligatures" >&#8655;</span>&nbsp;|&nbsp;<span title="Font has Zero Slashed or Zero Dotted" >&#216;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "Iosevka Curly",
"editor.fontSize": 11,
"editor.lineHeight": 15,
"editor.fontWeight": 400,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": true,
// --- FONT SETTINGS :: END
```

</div><div><b>Notes</b><br>
Iosevka Curly: Monospace, Curly.

</div>
</div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-075-iosevka-curly-slab"  name="font-075-iosevka-curly-slab"></a>075 - <a href="https://typeof.net/Iosevka" title="Download Iosevka Curly Slab">Iosevka Curly Slab</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=Iosevka%20Curly%20Slab%20font" title="Search with Google: Iosevka Curly Slab font" alt="Search with Google: Iosevka Curly Slab font">&#127350;</a>&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >3.5</span>&nbsp;|&nbsp;<span title="Font has Ligatures" >&#8655;</span>&nbsp;|&nbsp;<span title="Font is Serif" >&#120450;</span>&nbsp;|&nbsp;<span title="Font has Zero Slashed or Zero Dotted" >&#216;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "Iosevka Curly Slab",
"editor.fontSize": 11,
"editor.lineHeight": 15,
"editor.fontWeight": 400,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": true,
// --- FONT SETTINGS :: END
```

</div><div><b>Notes</b><br>
Iosevka Curly Slab: Monospace, Curly Slab

</div>
</div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-076-iosevka-ss01"  name="font-076-iosevka-ss01"></a>076 - <a href="https://typeof.net/Iosevka" title="Download Iosevka SS01">Iosevka SS01</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=Iosevka%20SS01%20font" title="Search with Google: Iosevka SS01 font" alt="Search with Google: Iosevka SS01 font">&#127350;</a>&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >4.0</span>&nbsp;|&nbsp;<span title="Font has Ligatures" >&#8655;</span>&nbsp;|&nbsp;<span title="Font has Zero Slashed or Zero Dotted" >&#216;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "Iosevka SS01",
"editor.fontSize": 11,
"editor.lineHeight": 15,
"editor.fontWeight": 400,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": true,
// --- FONT SETTINGS :: END
```

</div><div><b>Notes</b><br>
Iosevka SS01: Monospace, Andale Mono Style

</div>
</div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-077-iosevka-ss02"  name="font-077-iosevka-ss02"></a>077 - <a href="https://typeof.net/Iosevka" title="Download Iosevka SS02">Iosevka SS02</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=Iosevka%20SS02%20font" title="Search with Google: Iosevka SS02 font" alt="Search with Google: Iosevka SS02 font">&#127350;</a>&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >4.0</span>&nbsp;|&nbsp;<span title="Font has Ligatures" >&#8655;</span>&nbsp;|&nbsp;<span title="Font has Zero Slashed or Zero Dotted" >&#216;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "Iosevka SS02",
"editor.fontSize": 11,
"editor.lineHeight": 15,
"editor.fontWeight": 400,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": true,
// --- FONT SETTINGS :: END
```

</div><div><b>Notes</b><br>
Iosevka SS02: Monospace, Anonymous Pro Style

</div>
</div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-078-iosevka-ss03"  name="font-078-iosevka-ss03"></a>078 - <a href="https://typeof.net/Iosevka" title="Download Iosevka SS03">Iosevka SS03</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=Iosevka%20SS03%20font" title="Search with Google: Iosevka SS03 font" alt="Search with Google: Iosevka SS03 font">&#127350;</a>&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >4.0</span>&nbsp;|&nbsp;<span title="Font has Ligatures" >&#8655;</span>&nbsp;|&nbsp;<span title="Font has Zero Slashed or Zero Dotted" >&#216;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "Iosevka SS03",
"editor.fontSize": 11,
"editor.lineHeight": 15,
"editor.fontWeight": 400,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": true,
// --- FONT SETTINGS :: END
```

</div><div><b>Notes</b><br>
Iosevka SS03: Monospace, Consolas Style

</div>
</div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-079-iosevka-ss04"  name="font-079-iosevka-ss04"></a>079 - <a href="https://typeof.net/Iosevka" title="Download Iosevka SS04">Iosevka SS04</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=Iosevka%20SS04%20font" title="Search with Google: Iosevka SS04 font" alt="Search with Google: Iosevka SS04 font">&#127350;</a>&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >4.0</span>&nbsp;|&nbsp;<span title="Font has Ligatures" >&#8655;</span>&nbsp;|&nbsp;<span title="Font has Zero Slashed or Zero Dotted" >&#216;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "Iosevka SS04",
"editor.fontSize": 11,
"editor.lineHeight": 15,
"editor.fontWeight": 400,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": true,
// --- FONT SETTINGS :: END
```

</div><div><b>Notes</b><br>
Iosevka SS04: Monospace, Menlo Style

</div>
</div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-080-iosevka-ss05"  name="font-080-iosevka-ss05"></a>080 - <a href="https://typeof.net/Iosevka" title="Download Iosevka SS05">Iosevka SS05</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=Iosevka%20SS05%20font" title="Search with Google: Iosevka SS05 font" alt="Search with Google: Iosevka SS05 font">&#127350;</a>&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >4.0</span>&nbsp;|&nbsp;<span title="Font has Ligatures" >&#8655;</span>&nbsp;|&nbsp;<span title="Font has Zero Slashed or Zero Dotted" >&#216;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "Iosevka SS05",
"editor.fontSize": 11,
"editor.lineHeight": 15,
"editor.fontWeight": 400,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": true,
// --- FONT SETTINGS :: END
```

</div><div><b>Notes</b><br>
Iosevka SS05: Monospace, Fira Mono Style

</div>
</div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-081-iosevka-ss06"  name="font-081-iosevka-ss06"></a>081 - <a href="https://typeof.net/Iosevka" title="Download Iosevka SS06">Iosevka SS06</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=Iosevka%20SS06%20font" title="Search with Google: Iosevka SS06 font" alt="Search with Google: Iosevka SS06 font">&#127350;</a>&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >4.0</span>&nbsp;|&nbsp;<span title="Font has Ligatures" >&#8655;</span>&nbsp;|&nbsp;<span title="Font has Zero Slashed or Zero Dotted" >&#216;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "Iosevka SS06",
"editor.fontSize": 11,
"editor.lineHeight": 15,
"editor.fontWeight": 400,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": true,
// --- FONT SETTINGS :: END
```

</div><div><b>Notes</b><br>
Iosevka SS06: Monospace, Liberation Mono Style

</div>
</div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-082-iosevka-ss07"  name="font-082-iosevka-ss07"></a>082 - <a href="https://typeof.net/Iosevka" title="Download Iosevka SS07">Iosevka SS07</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=Iosevka%20SS07%20font" title="Search with Google: Iosevka SS07 font" alt="Search with Google: Iosevka SS07 font">&#127350;</a>&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >4.0</span>&nbsp;|&nbsp;<span title="Font has Ligatures" >&#8655;</span>&nbsp;|&nbsp;<span title="Font has Zero Slashed or Zero Dotted" >&#216;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "Iosevka SS07",
"editor.fontSize": 11,
"editor.lineHeight": 15,
"editor.fontWeight": 400,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": true,
// --- FONT SETTINGS :: END
```

</div><div><b>Notes</b><br>
Iosevka SS07: Monospace, Monaco Style

</div>
</div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-083-iosevka-ss08"  name="font-083-iosevka-ss08"></a>083 - <a href="https://typeof.net/Iosevka" title="Download Iosevka SS08">Iosevka SS08</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=Iosevka%20SS08%20font" title="Search with Google: Iosevka SS08 font" alt="Search with Google: Iosevka SS08 font">&#127350;</a>&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >4.0</span>&nbsp;|&nbsp;<span title="Font has Ligatures" >&#8655;</span>&nbsp;|&nbsp;<span title="Font has Zero Slashed or Zero Dotted" >&#216;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "Iosevka SS08",
"editor.fontSize": 11,
"editor.lineHeight": 15,
"editor.fontWeight": 400,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": true,
// --- FONT SETTINGS :: END
```

</div><div><b>Notes</b><br>
Iosevka SS08: Monospace, Pragmata Pro Style

</div>
</div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-084-iosevka-ss09"  name="font-084-iosevka-ss09"></a>084 - <a href="https://typeof.net/Iosevka" title="Download Iosevka SS09">Iosevka SS09</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=Iosevka%20SS09%20font" title="Search with Google: Iosevka SS09 font" alt="Search with Google: Iosevka SS09 font">&#127350;</a>&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >4.0</span>&nbsp;|&nbsp;<span title="Font has Ligatures" >&#8655;</span>&nbsp;|&nbsp;<span title="Font has Zero Slashed or Zero Dotted" >&#216;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "Iosevka SS09",
"editor.fontSize": 11,
"editor.lineHeight": 15,
"editor.fontWeight": 400,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": true,
// --- FONT SETTINGS :: END
```

</div><div><b>Notes</b><br>
Iosevka SS09: Monospace, Source Code Pro Style

</div>
</div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-085-iosevka-ss10"  name="font-085-iosevka-ss10"></a>085 - <a href="https://typeof.net/Iosevka" title="Download Iosevka SS10">Iosevka SS10</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=Iosevka%20SS10%20font" title="Search with Google: Iosevka SS10 font" alt="Search with Google: Iosevka SS10 font">&#127350;</a>&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >4.0</span>&nbsp;|&nbsp;<span title="Font has Ligatures" >&#8655;</span>&nbsp;|&nbsp;<span title="Font has Zero Slashed or Zero Dotted" >&#216;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "Iosevka SS10",
"editor.fontSize": 11,
"editor.lineHeight": 15,
"editor.fontWeight": 400,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": true,
// --- FONT SETTINGS :: END
```

</div><div><b>Notes</b><br>
Iosevka SS10: Monospace, Envy Code R Style

</div>
</div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-086-iosevka-ss11"  name="font-086-iosevka-ss11"></a>086 - <a href="https://typeof.net/Iosevka" title="Download Iosevka SS11">Iosevka SS11</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=Iosevka%20SS11%20font" title="Search with Google: Iosevka SS11 font" alt="Search with Google: Iosevka SS11 font">&#127350;</a>&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >4.0</span>&nbsp;|&nbsp;<span title="Font has Ligatures" >&#8655;</span>&nbsp;|&nbsp;<span title="Font has Zero Slashed or Zero Dotted" >&#216;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "Iosevka SS11",
"editor.fontSize": 11,
"editor.lineHeight": 15,
"editor.fontWeight": 400,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": true,
// --- FONT SETTINGS :: END
```

</div><div><b>Notes</b><br>
Iosevka SS11: Monospace, X Windows Fixed Style

</div>
</div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-087-iosevka-ss12"  name="font-087-iosevka-ss12"></a>087 - <a href="https://typeof.net/Iosevka" title="Download Iosevka SS12">Iosevka SS12</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=Iosevka%20SS12%20font" title="Search with Google: Iosevka SS12 font" alt="Search with Google: Iosevka SS12 font">&#127350;</a>&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >4.0</span>&nbsp;|&nbsp;<span title="Font has Ligatures" >&#8655;</span>&nbsp;|&nbsp;<span title="Font has Zero Slashed or Zero Dotted" >&#216;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "Iosevka SS12",
"editor.fontSize": 11,
"editor.lineHeight": 15,
"editor.fontWeight": 400,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": true,
// --- FONT SETTINGS :: END
```

</div><div><b>Notes</b><br>
Iosevka SS12: Monospace, Ubuntu Mono Style

</div>
</div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-088-iosevka-ss13"  name="font-088-iosevka-ss13"></a>088 - <a href="https://typeof.net/Iosevka" title="Download Iosevka SS13">Iosevka SS13</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=Iosevka%20SS13%20font" title="Search with Google: Iosevka SS13 font" alt="Search with Google: Iosevka SS13 font">&#127350;</a>&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >4.0</span>&nbsp;|&nbsp;<span title="Font has Ligatures" >&#8655;</span>&nbsp;|&nbsp;<span title="Font has Zero Slashed or Zero Dotted" >&#216;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "Iosevka SS13",
"editor.fontSize": 11,
"editor.lineHeight": 15,
"editor.fontWeight": 400,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": true,
// --- FONT SETTINGS :: END
```

</div><div><b>Notes</b><br>
Iosevka SS13: Monospace, Lucida Style

</div>
</div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-089-iosevka-ss14"  name="font-089-iosevka-ss14"></a>089 - <a href="https://typeof.net/Iosevka" title="Download Iosevka SS14">Iosevka SS14</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=Iosevka%20SS14%20font" title="Search with Google: Iosevka SS14 font" alt="Search with Google: Iosevka SS14 font">&#127350;</a>&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >4.0</span>&nbsp;|&nbsp;<span title="Font has Ligatures" >&#8655;</span>&nbsp;|&nbsp;<span title="Font has Zero Slashed or Zero Dotted" >&#216;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "Iosevka SS14",
"editor.fontSize": 11,
"editor.lineHeight": 15,
"editor.fontWeight": 400,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": true,
// --- FONT SETTINGS :: END
```

</div><div><b>Notes</b><br>
Iosevka SS14: Monospace, JetBrains Mono Style

</div>
</div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-090-iosevka-slab"  name="font-090-iosevka-slab"></a>090 - <a href="https://typeof.net/Iosevka" title="Download Iosevka Slab">Iosevka Slab</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=Iosevka%20Slab%20font" title="Search with Google: Iosevka Slab font" alt="Search with Google: Iosevka Slab font">&#127350;</a>&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >4.0</span>&nbsp;|&nbsp;<span title="Font has Ligatures" >&#8655;</span>&nbsp;|&nbsp;<span title="Font is Serif" >&#120450;</span>&nbsp;|&nbsp;<span title="Font has Zero Slashed or Zero Dotted" >&#216;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "Iosevka Slab",
"editor.fontSize": 11,
"editor.lineHeight": 15,
"editor.fontWeight": 400,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": true,
// --- FONT SETTINGS :: END
```

</div><div><b>Notes</b><br>
Iosevka Slab: Monospace, Slab

</div>
</div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-091-jetbrains-mono"  name="font-091-jetbrains-mono"></a>091 - <a href="https://www.jetbrains.com/lp/mono/" title="Download JetBrains Mono">JetBrains Mono</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=JetBrains%20Mono%20font" title="Search with Google: JetBrains Mono font" alt="Search with Google: JetBrains Mono font">&#127350;</a>&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >4.5</span>&nbsp;|&nbsp;<span title="Font has Ligatures" >&#8655;</span>&nbsp;|&nbsp;<span title="Font has Zero Slashed or Zero Dotted" >&#216;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "JetBrains Mono",
"editor.fontSize": 10,
"editor.lineHeight": 14,
"editor.fontWeight": 400,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": true,
// --- FONT SETTINGS :: END
```

</div></div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-092-juliamono"  name="font-092-juliamono"></a>092 - <a href="https://juliamono.netlify.app/download/" title="Download JuliaMono">JuliaMono</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=JuliaMono%20font" title="Search with Google: JuliaMono font" alt="Search with Google: JuliaMono font">&#127350;</a>&nbsp;|&nbsp;&#11088;&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >5.0</span>&nbsp;|&nbsp;<span style="color:ForestGreen;">&#9752;</span>&nbsp;|&nbsp;<span title="Font has Ligatures" >&#8655;</span>&nbsp;|&nbsp;<span title="Font has Zero Slashed or Zero Dotted" >&#216;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "JuliaMono",
"editor.fontSize": 10,
"editor.lineHeight": 16,
"editor.fontWeight": 300,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": true,
// --- FONT SETTINGS :: END
```

</div></div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-093-kawkab-mono"  name="font-093-kawkab-mono"></a>093 - <a href="https://fontsgeek.com/fonts/kawkab-mono-regular#" title="Download KawKab Mono">KawKab Mono</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=KawKab%20Mono%20font" title="Search with Google: KawKab Mono font" alt="Search with Google: KawKab Mono font">&#127350;</a>&nbsp;|&nbsp;&#11088;&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >5.0</span>&nbsp;|&nbsp;<span title="Font has Zero Slashed or Zero Dotted" >&#216;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "KawKab Mono",
"editor.fontSize": 9,
"editor.lineHeight": 14,
"editor.fontWeight": 500,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": false,
// --- FONT SETTINGS :: END
```

</div></div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-094-lab-mono"  name="font-094-lab-mono"></a>094 - <a href="https://fontesk.com/lab-mono-font/" title="Download Lab Mono">Lab Mono</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=Lab%20Mono%20font" title="Search with Google: Lab Mono font" alt="Search with Google: Lab Mono font">&#127350;</a>&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >4.5</span>&nbsp;|&nbsp;<span style="color:ForestGreen;">&#9752;</span>&nbsp;|&nbsp;<span title="Font is Serif" >&#120450;</span>&nbsp;|&nbsp;<span title="Font has Zero Slashed or Zero Dotted" >&#216;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "Lab Mono",
"editor.fontSize": 11,
"editor.lineHeight": 16,
"editor.fontWeight": 500,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": false,
// --- FONT SETTINGS :: END
```

</div></div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-095-lekton"  name="font-095-lekton"></a>095 - <a href="https://fonts.google.com/specimen/Lekton" title="Download Lekton">Lekton</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=Lekton%20font" title="Search with Google: Lekton font" alt="Search with Google: Lekton font">&#127350;</a>&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >3.0</span>&nbsp;|&nbsp;<span title="Font is Serif" >&#120450;</span>&nbsp;|&nbsp;<span title="Font has Zero Slashed or Zero Dotted" >&#216;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "Lekton",
"editor.fontSize": 14,
"editor.lineHeight": 18,
"editor.fontWeight": 500,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": false,
// --- FONT SETTINGS :: END
```

</div></div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-096-liberation-mono"  name="font-096-liberation-mono"></a>096 - <a href="https://www.1001freefonts.com/liberation-mono.font" title="Download Liberation Mono">Liberation Mono</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=Liberation%20Mono%20font" title="Search with Google: Liberation Mono font" alt="Search with Google: Liberation Mono font">&#127350;</a>&nbsp;|&nbsp;&#11088;&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >5.0</span>&nbsp;|&nbsp;<span title="Font is Serif" >&#120450;</span>&nbsp;|&nbsp;<span title="Font has Zero Slashed or Zero Dotted" >&#216;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "Liberation Mono",
"editor.fontSize": 11,
"editor.lineHeight": 15,
"editor.fontWeight": 500,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": false,
// --- FONT SETTINGS :: END
```

</div></div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-097-liga-monego"  name="font-097-liga-monego"></a>097 - <a href="https://github.com/goblincore/Coding-Fonts" title="Download Liga Monego">Liga Monego</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=Liga%20Monego%20font" title="Search with Google: Liga Monego font" alt="Search with Google: Liga Monego font">&#127350;</a>&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >4.0</span>&nbsp;|&nbsp;<span title="Font has Ligatures" >&#8655;</span>&nbsp;|&nbsp;<span title="Font has Zero Slashed or Zero Dotted" >&#216;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "Liga Monego",
"editor.fontSize": 10,
"editor.lineHeight": 18,
"editor.fontWeight": 500,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": true,
// --- FONT SETTINGS :: END
```

</div><div><b>Notes</b><br>
Liga Monego: Monego with Ligatures

</div>
</div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-098-lilex"  name="font-098-lilex"></a>098 - <a href="https://github.com/mishamyrt/Lilex/releases" title="Download Lilex">Lilex</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=Lilex%20font" title="Search with Google: Lilex font" alt="Search with Google: Lilex font">&#127350;</a>&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >4.0</span>&nbsp;|&nbsp;<span title="Font has Ligatures" >&#8655;</span>&nbsp;|&nbsp;<span title="Font is Serif" >&#120450;</span>&nbsp;|&nbsp;<span title="Font has Zero Slashed or Zero Dotted" >&#216;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "Lilex",
"editor.fontSize": 11,
"editor.lineHeight": 16,
"editor.fontWeight": 500,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": true,
// --- FONT SETTINGS :: END
```

</div></div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-099-lotion"  name="font-099-lotion"></a>099 - <a href="https://font.nina.coffee/" title="Download Lotion">Lotion</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=Lotion%20font" title="Search with Google: Lotion font" alt="Search with Google: Lotion font">&#127350;</a>&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >3.5</span>&nbsp;|&nbsp;<span style="color:ForestGreen;">&#9752;</span>&nbsp;|&nbsp;<span title="Font is Serif" >&#120450;</span>&nbsp;|&nbsp;<span title="Font has Zero Slashed or Zero Dotted" >&#216;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "Lotion",
"editor.fontSize": 13,
"editor.lineHeight": 18,
"editor.fontWeight": 500,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": false,
// --- FONT SETTINGS :: END
```

</div></div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-100-luculent"  name="font-100-luculent"></a>100 - <a href="http://eastfarthing.com/luculent/luculent.zip" title="Download Luculent">Luculent</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=Luculent%20font" title="Search with Google: Luculent font" alt="Search with Google: Luculent font">&#127350;</a>&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >3.0</span>&nbsp;|&nbsp;<span title="Font has Zero Slashed or Zero Dotted" >&#216;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "Luculent",
"editor.fontSize": 12,
"editor.lineHeight": 16,
"editor.fontWeight": 500,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": false,
// --- FONT SETTINGS :: END
```

</div></div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-101-m-1m"  name="font-101-m-1m"></a>101 - <a href="https://www.fontsquirrel.com/fonts/M-1m" title="Download M+ 1m">M+ 1m</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=M%2B%201m%20font" title="Search with Google: M+ 1m font" alt="Search with Google: M+ 1m font">&#127350;</a>&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >3.5</span>&nbsp;|&nbsp;<span title="Font has Zero Slashed or Zero Dotted" >&#216;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "M+ 1m",
"editor.fontSize": 12,
"editor.lineHeight": 16,
"editor.fontWeight": 400,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": false,
// --- FONT SETTINGS :: END
```

</div></div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-102-m-2m"  name="font-102-m-2m"></a>102 - <a href="https://www.wfonts.com/download/data/2016/06/18/m-2m/m-2m.zip" title="Download M+ 2m">M+ 2m</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=M%2B%202m%20font" title="Search with Google: M+ 2m font" alt="Search with Google: M+ 2m font">&#127350;</a>&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >3.5</span>&nbsp;|&nbsp;<span title="Font is Serif" >&#120450;</span>&nbsp;|&nbsp;<span title="Font has Zero Slashed or Zero Dotted" >&#216;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "M+ 2m",
"editor.fontSize": 12,
"editor.lineHeight": 16,
"editor.fontWeight": 400,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": false,
// --- FONT SETTINGS :: END
```

</div></div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-103-menlo"  name="font-103-menlo"></a>103 - <a href="https://github.com/hbin/top-programming-fonts" title="Download Menlo">Menlo</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=Menlo%20font" title="Search with Google: Menlo font" alt="Search with Google: Menlo font">&#127350;</a>&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >4.0</span>&nbsp;|&nbsp;<span title="Font is Serif" >&#120450;</span>&nbsp;|&nbsp;<span title="Font has Zero Slashed or Zero Dotted" >&#216;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "Menlo",
"editor.fontSize": 11,
"editor.lineHeight": 15,
"editor.fontWeight": 500,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": false,
// --- FONT SETTINGS :: END
```

</div></div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-104-mensch"  name="font-104-mensch"></a>104 - <a href="https://robey.lag.net/2010/06/21/mensch-font.html" title="Download Mensch">Mensch</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=Mensch%20font" title="Search with Google: Mensch font" alt="Search with Google: Mensch font">&#127350;</a>&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >4.5</span>&nbsp;|&nbsp;<span title="Font is Serif" >&#120450;</span>&nbsp;|&nbsp;<span title="Font has Zero Slashed or Zero Dotted" >&#216;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "Mensch",
"editor.fontSize": 11,
"editor.lineHeight": 15,
"editor.fontWeight": 500,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": false,
// --- FONT SETTINGS :: END
```

</div><div><b>Notes</b><br>
Mensch: `Menlo` Tweaked

</div>
</div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-105-meslo-lg-m"  name="font-105-meslo-lg-m"></a>105 - <a href="https://github.com/andreberg/Meslo-Font" title="Download Meslo LG M">Meslo LG M</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=Meslo%20LG%20M%20font" title="Search with Google: Meslo LG M font" alt="Search with Google: Meslo LG M font">&#127350;</a>&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >4.0</span>&nbsp;|&nbsp;<span title="Font is Serif" >&#120450;</span>&nbsp;|&nbsp;<span title="Font has Zero Slashed or Zero Dotted" >&#216;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "Meslo LG M",
"editor.fontSize": 10,
"editor.lineHeight": 16,
"editor.fontWeight": 500,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": false,
// --- FONT SETTINGS :: END
```

</div></div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-106-meslo-lg-s"  name="font-106-meslo-lg-s"></a>106 - <a href="https://github.com/andreberg/Meslo-Font" title="Download Meslo LG S">Meslo LG S</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=Meslo%20LG%20S%20font" title="Search with Google: Meslo LG S font" alt="Search with Google: Meslo LG S font">&#127350;</a>&nbsp;|&nbsp;&#11088;&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >5.0</span>&nbsp;|&nbsp;<span title="Font is Serif" >&#120450;</span>&nbsp;|&nbsp;<span title="Font has Zero Slashed or Zero Dotted" >&#216;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "Meslo LG S",
"editor.fontSize": 10,
"editor.lineHeight": 16,
"editor.fontWeight": 500,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": false,
// --- FONT SETTINGS :: END
```

</div><div><b>Notes</b><br>
Meslo LG S: (Meslo LG) S / M / L are the line gap variants in vertical spacing.

</div>
</div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-107-metrickal"  name="font-107-metrickal"></a>107 - <a href="https://github.com/robey/metrickal-typeface/tree/master/downloads" title="Download Metrickal">Metrickal</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=Metrickal%20font" title="Search with Google: Metrickal font" alt="Search with Google: Metrickal font">&#127350;</a>&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >4.0</span>&nbsp;|&nbsp;<span title="Font has Zero Slashed or Zero Dotted" >&#216;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "Metrickal",
"editor.fontSize": 10,
"editor.lineHeight": 15,
"editor.fontWeight": 500,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": false,
// --- FONT SETTINGS :: END
```

</div></div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-108-monaco"  name="font-108-monaco"></a>108 - <a href="https://www.fontmirror.com/monaco" title="Download Monaco">Monaco</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=Monaco%20font" title="Search with Google: Monaco font" alt="Search with Google: Monaco font">&#127350;</a>&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >4.0</span>&nbsp;|&nbsp;<span title="Font has Ligatures" >&#8655;</span>&nbsp;|&nbsp;<span title="Font has Zero Slashed or Zero Dotted" >&#216;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "Monaco",
"editor.fontSize": 11,
"editor.lineHeight": 15,
"editor.fontWeight": 500,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": true,
// --- FONT SETTINGS :: END
```

</div></div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-109-monacob"  name="font-109-monacob"></a>109 - <a href="https://github.com/vjpr/monaco-bold" title="Download MonacoB">MonacoB</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=MonacoB%20font" title="Search with Google: MonacoB font" alt="Search with Google: MonacoB font">&#127350;</a>&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >4.0</span>&nbsp;|&nbsp;<span style="color:ForestGreen;">&#9752;</span>&nbsp;|&nbsp;<span title="Font has Zero Slashed or Zero Dotted" >&#216;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "MonacoB",
"editor.fontSize": 11,
"editor.lineHeight": 15,
"editor.fontWeight": 500,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": false,
// --- FONT SETTINGS :: END
```

</div></div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-110-monego"  name="font-110-monego"></a>110 - <a href="https://github.com/goblincore/Coding-Fonts" title="Download Monego">Monego</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=Monego%20font" title="Search with Google: Monego font" alt="Search with Google: Monego font">&#127350;</a>&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >4.5</span>&nbsp;|&nbsp;<span title="Font has Zero Slashed or Zero Dotted" >&#216;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "Monego",
"editor.fontSize": 10,
"editor.lineHeight": 18,
"editor.fontWeight": 500,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": false,
// --- FONT SETTINGS :: END
```

</div></div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-111-monego-nerd-font"  name="font-111-monego-nerd-font"></a>111 - <a href="https://github.com/goblincore/Coding-Fonts" title="Download Monego Nerd Font">Monego Nerd Font</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=Monego%20Nerd%20Font%20font" title="Search with Google: Monego Nerd Font font" alt="Search with Google: Monego Nerd Font font">&#127350;</a>&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >4.0</span>&nbsp;|&nbsp;<span title="Font has Ligatures" >&#8655;</span>&nbsp;|&nbsp;<span title="Font has Zero Slashed or Zero Dotted" >&#216;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "Monego Nerd Font",
"editor.fontSize": 10,
"editor.lineHeight": 18,
"editor.fontWeight": 500,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": true,
// --- FONT SETTINGS :: END
```

</div><div><b>Notes</b><br>
Monego Nerd Font: Monego with Ligatures

</div>
</div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-112-monofur-nf"  name="font-112-monofur-nf"></a>112 - <a href="https://github.com/ryanoasis/nerd-fonts/tree/master/patched-fonts/Monofur" title="Download Monofur NF">Monofur NF</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=Monofur%20NF%20font" title="Search with Google: Monofur NF font" alt="Search with Google: Monofur NF font">&#127350;</a>&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >3.0</span>&nbsp;|&nbsp;<span title="Font has Ligatures" >&#8655;</span>&nbsp;|&nbsp;<span title="Font has Zero Slashed or Zero Dotted" >&#216;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "Monofur NF",
"editor.fontSize": 14,
"editor.lineHeight": 16,
"editor.fontWeight": 500,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": true,
// --- FONT SETTINGS :: END
```

</div><div><b>Notes</b><br>
Monofur NF: `Monofur Nerd Font`: Mono and with font-ligatures versions have the same name

</div>
</div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-113-monoid"  name="font-113-monoid"></a>113 - <a href="https://larsenwork.com/monoid/" title="Download Monoid">Monoid</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=Monoid%20font" title="Search with Google: Monoid font" alt="Search with Google: Monoid font">&#127350;</a>&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >4.5</span>&nbsp;|&nbsp;<span title="Font has Ligatures" >&#8655;</span>&nbsp;|&nbsp;<span title="Font has Zero Slashed or Zero Dotted" >&#216;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "Monoid",
"editor.fontSize": 10,
"editor.lineHeight": 16,
"editor.fontWeight": 400,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": true,
// --- FONT SETTINGS :: END
```

</div></div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-114-monoisome"  name="font-114-monoisome"></a>114 - <a href="https://larsenwork.com/monoid/" title="Download Monoisome">Monoisome</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=Monoisome%20font" title="Search with Google: Monoisome font" alt="Search with Google: Monoisome font">&#127350;</a>&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >4.5</span>&nbsp;|&nbsp;<span title="Font has Ligatures" >&#8655;</span>&nbsp;|&nbsp;<span title="Font has Zero Slashed or Zero Dotted" >&#216;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "Monoisome",
"editor.fontSize": 10,
"editor.lineHeight": 16,
"editor.fontWeight": 400,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": true,
// --- FONT SETTINGS :: END
```

</div><div><b>Notes</b><br>
Monoisome: Monoisome = Monoid + Font Awesome

</div>
</div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-115-mononoki"  name="font-115-mononoki"></a>115 - <a href="https://madmalik.github.io/mononoki/" title="Download Mononoki">Mononoki</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=Mononoki%20font" title="Search with Google: Mononoki font" alt="Search with Google: Mononoki font">&#127350;</a>&nbsp;|&nbsp;&#11088;&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >5.0</span>&nbsp;|&nbsp;<span title="Font has Zero Slashed or Zero Dotted" >&#216;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "Mononoki",
"editor.fontSize": 12,
"editor.lineHeight": 16,
"editor.fontWeight": 500,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": false,
// --- FONT SETTINGS :: END
```

</div></div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-116-nf-code"  name="font-116-nf-code"></a>116 - <a href="https://fontesk.com/nf-code/" title="Download NF Code">NF Code</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=NF%20Code%20font" title="Search with Google: NF Code font" alt="Search with Google: NF Code font">&#127350;</a>&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >4.0</span>&nbsp;|&nbsp;<span style="color:ForestGreen;">&#9752;</span>&nbsp;|&nbsp;<span title="Font is Serif" >&#120450;</span>&nbsp;|&nbsp;<span title="Font has Zero Slashed or Zero Dotted" >&#216;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "NF Code",
"editor.fontSize": 11,
"editor.lineHeight": 16,
"editor.fontWeight": 500,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": false,
// --- FONT SETTINGS :: END
```

</div></div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-117-nk57-monospace"  name="font-117-nk57-monospace"></a>117 - <a href="https://www.1001freefonts.com/nk57-monospace.font" title="Download NK57 Monospace">NK57 Monospace</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=NK57%20Monospace%20font" title="Search with Google: NK57 Monospace font" alt="Search with Google: NK57 Monospace font">&#127350;</a>&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >4.5</span>&nbsp;|&nbsp;<span title="Font is Serif" >&#120450;</span>&nbsp;|&nbsp;<span title="Font has Zero Slashed or Zero Dotted" >&#216;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "NK57 Monospace",
"editor.fontSize": 10,
"editor.lineHeight": 16,
"editor.fontWeight": 400,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": false,
// --- FONT SETTINGS :: END
```

</div></div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-118-nanumgothiccoding"  name="font-118-nanumgothiccoding"></a>118 - <a href="https://fonts.google.com/specimen/Nanum+Gothic+Coding&preview.size=12" title="Download NanumGothicCoding">NanumGothicCoding</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=NanumGothicCoding%20font" title="Search with Google: NanumGothicCoding font" alt="Search with Google: NanumGothicCoding font">&#127350;</a>&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >4.0</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "NanumGothicCoding",
"editor.fontSize": 11,
"editor.lineHeight": 16,
"editor.fontWeight": 500,
"editor.letterSpacing": 0.5,
"editor.fontLigatures": false,
// --- FONT SETTINGS :: END
```

</div></div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-119-natural-mono"  name="font-119-natural-mono"></a>119 - <a href="https://fontlibrary.org/it/font/natural-mono" title="Download Natural Mono">Natural Mono</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=Natural%20Mono%20font" title="Search with Google: Natural Mono font" alt="Search with Google: Natural Mono font">&#127350;</a>&nbsp;|&nbsp;&#11088;&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >5.0</span>&nbsp;|&nbsp;<span style="color:ForestGreen;">&#9752;</span>&nbsp;|&nbsp;<span title="Font is Serif" >&#120450;</span>&nbsp;|&nbsp;<span title="Font has Zero Slashed or Zero Dotted" >&#216;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "Natural Mono",
"editor.fontSize": 10,
"editor.lineHeight": 16,
"editor.fontWeight": 500,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": false,
// --- FONT SETTINGS :: END
```

</div></div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-120-natural-mono-alt"  name="font-120-natural-mono-alt"></a>120 - <a href="https://fontlibrary.org/it/font/natural-mono" title="Download Natural Mono Alt">Natural Mono Alt</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=Natural%20Mono%20Alt%20font" title="Search with Google: Natural Mono Alt font" alt="Search with Google: Natural Mono Alt font">&#127350;</a>&nbsp;|&nbsp;&#11088;&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >5.0</span>&nbsp;|&nbsp;<span style="color:ForestGreen;">&#9752;</span>&nbsp;|&nbsp;<span title="Font has Zero Slashed or Zero Dotted" >&#216;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "Natural Mono Alt",
"editor.fontSize": 10,
"editor.lineHeight": 16,
"editor.fontWeight": 500,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": false,
// --- FONT SETTINGS :: END
```

</div></div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-121-nimbus-mono"  name="font-121-nimbus-mono"></a>121 - <a href="https://www.fontsquirrel.com/fonts/nimbus-mono" title="Download Nimbus Mono">Nimbus Mono</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=Nimbus%20Mono%20font" title="Search with Google: Nimbus Mono font" alt="Search with Google: Nimbus Mono font">&#127350;</a>&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >4.0</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "Nimbus Mono",
"editor.fontSize": 13,
"editor.lineHeight": 16,
"editor.fontWeight": 300,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": false,
// --- FONT SETTINGS :: END
```

</div></div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-122-notcouriersans"  name="font-122-notcouriersans"></a>122 - <a href="https://www.fontsquirrel.com/fonts/notcouriersans" title="Download NotCourierSans">NotCourierSans</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=NotCourierSans%20font" title="Search with Google: NotCourierSans font" alt="Search with Google: NotCourierSans font">&#127350;</a>&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >3.0</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "NotCourierSans",
"editor.fontSize": 12,
"editor.lineHeight": 16,
"editor.fontWeight": 600,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": false,
// --- FONT SETTINGS :: END
```

</div></div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-123-noto-mono"  name="font-123-noto-mono"></a>123 - <a href="https://www.fontsc.com/font/download/noto-mono" title="Download Noto Mono">Noto Mono</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=Noto%20Mono%20font" title="Search with Google: Noto Mono font" alt="Search with Google: Noto Mono font">&#127350;</a>&nbsp;|&nbsp;&#11088;&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >5.0</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "Noto Mono",
"editor.fontSize": 11,
"editor.lineHeight": 16,
"editor.fontWeight": 500,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": false,
// --- FONT SETTINGS :: END
```

</div></div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-124-office-code-pro"  name="font-124-office-code-pro"></a>124 - <a href="https://github.com/nathco/Office-Code-Pro" title="Download Office Code Pro">Office Code Pro</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=Office%20Code%20Pro%20font" title="Search with Google: Office Code Pro font" alt="Search with Google: Office Code Pro font">&#127350;</a>&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >4.0</span>&nbsp;|&nbsp;<span title="Font is Serif" >&#120450;</span>&nbsp;|&nbsp;<span title="Font has Zero Slashed or Zero Dotted" >&#216;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "Office Code Pro",
"editor.fontSize": 11,
"editor.lineHeight": 14,
"editor.fontWeight": 400,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": false,
// --- FONT SETTINGS :: END
```

</div><div><b>Notes</b><br>
Office Code Pro: Fork of `Source Code Pro`

</div>
</div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-125-onuava"  name="font-125-onuava"></a>125 - <a href="https://www.urbanfonts.com/download?fid=9765&file=onuava.zip" title="Download Onuava">Onuava</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=Onuava%20font" title="Search with Google: Onuava font" alt="Search with Google: Onuava font">&#127350;</a>&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >4.5</span>&nbsp;|&nbsp;<span style="color:ForestGreen;">&#9752;</span>&nbsp;|&nbsp;<span title="Font has Zero Slashed or Zero Dotted" >&#216;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "Onuava",
"editor.fontSize": 10,
"editor.lineHeight": 16,
"editor.fontWeight": 500,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": false,
// --- FONT SETTINGS :: END
```

</div></div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-126-operator-mono-lig"  name="font-126-operator-mono-lig"></a>126 - <a href="https://github.com/goblincore/Coding-Fonts" title="Download Operator Mono Lig">Operator Mono Lig</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=Operator%20Mono%20Lig%20font" title="Search with Google: Operator Mono Lig font" alt="Search with Google: Operator Mono Lig font">&#127350;</a>&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >4.0</span>&nbsp;|&nbsp;<span title="Font has Ligatures" >&#8655;</span>&nbsp;|&nbsp;<span title="Font has Zero Slashed or Zero Dotted" >&#216;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "Operator Mono Lig",
"editor.fontSize": 12,
"editor.lineHeight": 16,
"editor.fontWeight": 300,
"editor.letterSpacing": 0.3,
"editor.fontLigatures": true,
// --- FONT SETTINGS :: END
```

</div></div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-127-overpass-mono"  name="font-127-overpass-mono"></a>127 - <a href="https://www.fontsc.com/font/download/overpass-mono" title="Download Overpass Mono">Overpass Mono</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=Overpass%20Mono%20font" title="Search with Google: Overpass Mono font" alt="Search with Google: Overpass Mono font">&#127350;</a>&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >4.0</span>&nbsp;|&nbsp;<span title="Font has Zero Slashed or Zero Dotted" >&#216;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "Overpass Mono",
"editor.fontSize": 11,
"editor.lineHeight": 16,
"editor.fontWeight": 300,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": false,
// --- FONT SETTINGS :: END
```

</div></div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-128-oxygen-mono"  name="font-128-oxygen-mono"></a>128 - <a href="https://www.fontsc.com/font/download/oxygen-mono" title="Download Oxygen Mono">Oxygen Mono</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=Oxygen%20Mono%20font" title="Search with Google: Oxygen Mono font" alt="Search with Google: Oxygen Mono font">&#127350;</a>&nbsp;|&nbsp;&#11088;&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >5.0</span>&nbsp;|&nbsp;<span title="Font has Zero Slashed or Zero Dotted" >&#216;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "Oxygen Mono",
"editor.fontSize": 11,
"editor.lineHeight": 16,
"editor.fontWeight": 500,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": false,
// --- FONT SETTINGS :: END
```

</div></div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-129-pt-mono"  name="font-129-pt-mono"></a>129 - <a href="https://fonts.google.com/specimen/PT+Mono?selection.family=PT+Mono" title="Download PT Mono">PT Mono</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=PT%20Mono%20font" title="Search with Google: PT Mono font" alt="Search with Google: PT Mono font">&#127350;</a>&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >4.0</span>&nbsp;|&nbsp;<span title="Font is Serif" >&#120450;</span>&nbsp;|&nbsp;<span title="Font has Zero Slashed or Zero Dotted" >&#216;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "PT Mono",
"editor.fontSize": 11,
"editor.lineHeight": 15,
"editor.fontWeight": 500,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": false,
// --- FONT SETTINGS :: END
```

</div></div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-130-panic-sans"  name="font-130-panic-sans"></a>130 - <a href="https://github.com/chrissimpkins/codeface/tree/master/fonts/panic-sans" title="Download Panic Sans">Panic Sans</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=Panic%20Sans%20font" title="Search with Google: Panic Sans font" alt="Search with Google: Panic Sans font">&#127350;</a>&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >4.5</span>&nbsp;|&nbsp;<span style="color:ForestGreen;">&#9752;</span>&nbsp;|&nbsp;<span title="Font has Zero Slashed or Zero Dotted" >&#216;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "Panic Sans",
"editor.fontSize": 11,
"editor.lineHeight": 18,
"editor.fontWeight": 500,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": false,
// --- FONT SETTINGS :: END
```

</div></div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-131-pointfree"  name="font-131-pointfree"></a>131 - <a href="https://code.google.com/archive/p/i3project/downloads" title="Download Pointfree">Pointfree</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=Pointfree%20font" title="Search with Google: Pointfree font" alt="Search with Google: Pointfree font">&#127350;</a>&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >4.0</span>&nbsp;|&nbsp;<span style="color:ForestGreen;">&#9752;</span>&nbsp;|&nbsp;<span title="Font has Zero Slashed or Zero Dotted" >&#216;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "Pointfree",
"editor.fontSize": 11,
"editor.lineHeight": 16,
"editor.fontWeight": 500,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": false,
// --- FONT SETTINGS :: END
```

</div></div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-132-proggyvector"  name="font-132-proggyvector"></a>132 - <a href="https://github.com/bluescan/proggyfonts" title="Download ProggyVector">ProggyVector</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=ProggyVector%20font" title="Search with Google: ProggyVector font" alt="Search with Google: ProggyVector font">&#127350;</a>&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >4.5</span>&nbsp;|&nbsp;<span title="Font is Serif" >&#120450;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "ProggyVector",
"editor.fontSize": 11,
"editor.lineHeight": 15,
"editor.fontWeight": 500,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": false,
// --- FONT SETTINGS :: END
```

</div></div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-133-rec-mono-linear"  name="font-133-rec-mono-linear"></a>133 - <a href="https://github.com/arrowtype/recursive/tree/main/fonts/ArrowType-Recursive-1.078/Recursive_Code/RecMonoLinear" title="Download Rec Mono Linear">Rec Mono Linear</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=Rec%20Mono%20Linear%20font" title="Search with Google: Rec Mono Linear font" alt="Search with Google: Rec Mono Linear font">&#127350;</a>&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >4.0</span>&nbsp;|&nbsp;<span style="color:ForestGreen;">&#9752;</span>&nbsp;|&nbsp;<span title="Font has Ligatures" >&#8655;</span>&nbsp;|&nbsp;<span title="Font has Zero Slashed or Zero Dotted" >&#216;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "Rec Mono Linear",
"editor.fontSize": 11,
"editor.lineHeight": 16,
"editor.fontWeight": 500,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": true,
// --- FONT SETTINGS :: END
```

</div><div><b>Notes</b><br>
Rec Mono Linear: Recursive Family Font

</div>
</div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-134-roboto-mono"  name="font-134-roboto-mono"></a>134 - <a href="https://fonts.google.com/specimen/Roboto+Mono" title="Download Roboto Mono">Roboto Mono</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=Roboto%20Mono%20font" title="Search with Google: Roboto Mono font" alt="Search with Google: Roboto Mono font">&#127350;</a>&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >4.8</span>&nbsp;|&nbsp;<span title="Font is Serif" >&#120450;</span>&nbsp;|&nbsp;<span title="Font has Zero Slashed or Zero Dotted" >&#216;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "Roboto Mono",
"editor.fontSize": 10,
"editor.lineHeight": 14,
"editor.fontWeight": 400,
"editor.letterSpacing": 0.2,
"editor.fontLigatures": false,
// --- FONT SETTINGS :: END
```

</div></div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-135-sf-mono"  name="font-135-sf-mono"></a>135 - <a href="https://www.cufonfonts.com/download/font/sf-mono" title="Download SF Mono">SF Mono</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=SF%20Mono%20font" title="Search with Google: SF Mono font" alt="Search with Google: SF Mono font">&#127350;</a>&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >4.0</span>&nbsp;|&nbsp;<span title="Font has Zero Slashed or Zero Dotted" >&#216;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "SF Mono",
"editor.fontSize": 11,
"editor.lineHeight": 16,
"editor.fontWeight": 400,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": false,
// --- FONT SETTINGS :: END
```

</div></div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-136-sk-modernist-mono"  name="font-136-sk-modernist-mono"></a>136 - <a href="https://fontsme.com/sk-modernist.font" title="Download SK-Modernist Mono">SK-Modernist Mono</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=SK-Modernist%20Mono%20font" title="Search with Google: SK-Modernist Mono font" alt="Search with Google: SK-Modernist Mono font">&#127350;</a>&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >4.5</span>&nbsp;|&nbsp;<span style="color:ForestGreen;">&#9752;</span>&nbsp;|&nbsp;<span title="Font has Zero Slashed or Zero Dotted" >&#216;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "SK-Modernist Mono",
"editor.fontSize": 11,
"editor.lineHeight": 16,
"editor.fontWeight": 500,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": false,
// --- FONT SETTINGS :: END
```

</div></div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-137-sabir-mono"  name="font-137-sabir-mono"></a>137 - <a href="https://fontesk.com/sabir-mono-font/" title="Download Sabir Mono">Sabir Mono</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=Sabir%20Mono%20font" title="Search with Google: Sabir Mono font" alt="Search with Google: Sabir Mono font">&#127350;</a>&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >4.0</span>&nbsp;|&nbsp;<span style="color:ForestGreen;">&#9752;</span>&nbsp;|&nbsp;<span title="Font is Serif" >&#120450;</span>&nbsp;|&nbsp;<span title="Font has Zero Slashed or Zero Dotted" >&#216;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "Sabir Mono",
"editor.fontSize": 14,
"editor.lineHeight": 16,
"editor.fontWeight": 500,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": false,
// --- FONT SETTINGS :: END
```

</div></div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-138-segoe-mono-boot"  name="font-138-segoe-mono-boot"></a>138 - <a href="https://candyfonts.com/font/segoe-mono-boot.htm" title="Download Segoe Mono Boot">Segoe Mono Boot</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=Segoe%20Mono%20Boot%20font" title="Search with Google: Segoe Mono Boot font" alt="Search with Google: Segoe Mono Boot font">&#127350;</a>&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >4.0</span>&nbsp;|&nbsp;<span style="color:ForestGreen;">&#9752;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "Segoe Mono Boot",
"editor.fontSize": 11,
"editor.lineHeight": 16,
"editor.fontWeight": 500,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": false,
// --- FONT SETTINGS :: END
```

</div></div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-139-share-tech-mono"  name="font-139-share-tech-mono"></a>139 - <a href="https://fonts.google.com/specimen/Share+Tech+Mono?category=Monospace" title="Download Share Tech Mono">Share Tech Mono</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=Share%20Tech%20Mono%20font" title="Search with Google: Share Tech Mono font" alt="Search with Google: Share Tech Mono font">&#127350;</a>&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >3.5</span>&nbsp;|&nbsp;<span style="color:ForestGreen;">&#9752;</span>&nbsp;|&nbsp;<span title="Font has Zero Slashed or Zero Dotted" >&#216;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "Share Tech Mono",
"editor.fontSize": 13,
"editor.lineHeight": 18,
"editor.fontWeight": 500,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": false,
// --- FONT SETTINGS :: END
```

</div></div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-140-silka-mono"  name="font-140-silka-mono"></a>140 - <a href="https://www.atipofoundry.com/fonts/silka-mono" title="Download Silka Mono">Silka Mono</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=Silka%20Mono%20font" title="Search with Google: Silka Mono font" alt="Search with Google: Silka Mono font">&#127350;</a>&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >4.0</span>&nbsp;|&nbsp;<span style="color:ForestGreen;">&#9752;</span>&nbsp;|&nbsp;<span title="Font has Zero Slashed or Zero Dotted" >&#216;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "Silka Mono",
"editor.fontSize": 10,
"editor.lineHeight": 16,
"editor.fontWeight": 500,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": false,
// --- FONT SETTINGS :: END
```

</div></div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-141-sometype-mono"  name="font-141-sometype-mono"></a>141 - <a href="https://monospacedfont.com/" title="Download Sometype Mono">Sometype Mono</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=Sometype%20Mono%20font" title="Search with Google: Sometype Mono font" alt="Search with Google: Sometype Mono font">&#127350;</a>&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >4.5</span>&nbsp;|&nbsp;<span title="Font is Serif" >&#120450;</span>&nbsp;|&nbsp;<span title="Font has Zero Slashed or Zero Dotted" >&#216;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "Sometype Mono",
"editor.fontSize": 11,
"editor.lineHeight": 15,
"editor.fontWeight": 300,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": false,
// --- FONT SETTINGS :: END
```

</div></div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-142-source-code-pro"  name="font-142-source-code-pro"></a>142 - <a href="https://fonts.google.com/specimen/Source+Code+Pro" title="Download Source Code Pro">Source Code Pro</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=Source%20Code%20Pro%20font" title="Search with Google: Source Code Pro font" alt="Search with Google: Source Code Pro font">&#127350;</a>&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >3.0</span>&nbsp;|&nbsp;<span title="Font is Serif" >&#120450;</span>&nbsp;|&nbsp;<span title="Font has Zero Slashed or Zero Dotted" >&#216;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "Source Code Pro",
"editor.fontSize": 12,
"editor.lineHeight": 16,
"editor.fontWeight": 400,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": false,
// --- FONT SETTINGS :: END
```

</div></div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-143-space-mono"  name="font-143-space-mono"></a>143 - <a href="https://www.fontsc.com/font/download/space-mono" title="Download Space Mono">Space Mono</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=Space%20Mono%20font" title="Search with Google: Space Mono font" alt="Search with Google: Space Mono font">&#127350;</a>&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >4.5</span>&nbsp;|&nbsp;<span title="Font is Serif" >&#120450;</span>&nbsp;|&nbsp;<span title="Font has Zero Slashed or Zero Dotted" >&#216;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "Space Mono",
"editor.fontSize": 11,
"editor.lineHeight": 15,
"editor.fontWeight": 400,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": false,
// --- FONT SETTINGS :: END
```

</div></div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-144-sudo"  name="font-144-sudo"></a>144 - <a href="https://www.cufonfonts.com/download/font/andale-mono" title="Download Sudo">Sudo</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=Sudo%20font" title="Search with Google: Sudo font" alt="Search with Google: Sudo font">&#127350;</a>&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >3.5</span>&nbsp;|&nbsp;<span title="Font has Zero Slashed or Zero Dotted" >&#216;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "Sudo",
"editor.fontSize": 14,
"editor.lineHeight": 16,
"editor.fontWeight": 400,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": false,
// --- FONT SETTINGS :: END
```

</div></div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-145-terminus-ttf-for-windows"  name="font-145-terminus-ttf-for-windows"></a>145 - <a href="https://files.ax86.net/terminus-ttf/" title="Download Terminus (TTF) for Windows">Terminus (TTF) for Windows</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=Terminus%20%28TTF%29%20for%20Windows%20font" title="Search with Google: Terminus (TTF) for Windows font" alt="Search with Google: Terminus (TTF) for Windows font">&#127350;</a>&nbsp;|&nbsp;&#11088;&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >5.0</span>&nbsp;|&nbsp;<span style="color:ForestGreen;">&#9752;</span>&nbsp;|&nbsp;&#127345;&nbsp;|&nbsp;<span title="Font is Serif" >&#120450;</span>&nbsp;|&nbsp;<span title="Font has Zero Slashed or Zero Dotted" >&#216;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "Terminus (TTF) for Windows",
"editor.fontSize": 12,
"editor.lineHeight": 16,
"editor.fontWeight": 500,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": false,
// --- FONT SETTINGS :: END
```

</div></div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-146-ti92pluspc"  name="font-146-ti92pluspc"></a>146 - <a href="https://fontsgeek.com/fonts/Ti92Pluspc-Regular" title="Download Ti92Pluspc">Ti92Pluspc</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=Ti92Pluspc%20font" title="Search with Google: Ti92Pluspc font" alt="Search with Google: Ti92Pluspc font">&#127350;</a>&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >4.5</span>&nbsp;|&nbsp;<span style="color:ForestGreen;">&#9752;</span>&nbsp;|&nbsp;<span title="Font has Zero Slashed or Zero Dotted" >&#216;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "Ti92Pluspc",
"editor.fontSize": 11,
"editor.lineHeight": 16,
"editor.fontWeight": 500,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": false,
// --- FONT SETTINGS :: END
```

</div></div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-147-ubuntu-mono"  name="font-147-ubuntu-mono"></a>147 - <a href="https://www.fontsquirrel.com/fonts/ubuntu-mono" title="Download Ubuntu Mono">Ubuntu Mono</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=Ubuntu%20Mono%20font" title="Search with Google: Ubuntu Mono font" alt="Search with Google: Ubuntu Mono font">&#127350;</a>&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >4.5</span>&nbsp;|&nbsp;<span title="Font is Serif" >&#120450;</span>&nbsp;|&nbsp;<span title="Font has Zero Slashed or Zero Dotted" >&#216;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "Ubuntu Mono",
"editor.fontSize": 13,
"editor.lineHeight": 16,
"editor.fontWeight": 500,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": false,
// --- FONT SETTINGS :: END
```

</div><div><b>Notes</b><br>
Ubuntu Mono: Tweaked `DejaVu Sans Mono` and `Ubuntu Mono`

</div>
</div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-148-ubuntu-mono---bront"  name="font-148-ubuntu-mono---bront"></a>148 - <a href="https://github.com/chrismwendt/bront" title="Download Ubuntu Mono - Bront">Ubuntu Mono - Bront</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=Ubuntu%20Mono%20-%20Bront%20font" title="Search with Google: Ubuntu Mono - Bront font" alt="Search with Google: Ubuntu Mono - Bront font">&#127350;</a>&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >4.5</span>&nbsp;|&nbsp;<span title="Font has Zero Slashed or Zero Dotted" >&#216;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "Ubuntu Mono - Bront",
"editor.fontSize": 12,
"editor.lineHeight": 16,
"editor.fontWeight": 300,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": false,
// --- FONT SETTINGS :: END
```

</div><div><b>Notes</b><br>
Ubuntu Mono - Bront: Tweaked `DejaVu Sans Mono` and `Ubuntu Mono`

</div>
</div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-149-victor-mono"  name="font-149-victor-mono"></a>149 - <a href="https://rubjo.github.io/victor-mono" title="Download Victor Mono">Victor Mono</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=Victor%20Mono%20font" title="Search with Google: Victor Mono font" alt="Search with Google: Victor Mono font">&#127350;</a>&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >4.0</span>&nbsp;|&nbsp;<span title="Font has Ligatures" >&#8655;</span>&nbsp;|&nbsp;<span title="Font has Script Variant for Italic" >&#119998;</span>&nbsp;|&nbsp;<span title="Font is Serif" >&#120450;</span>&nbsp;|&nbsp;<span title="Font has Zero Slashed or Zero Dotted" >&#216;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "Victor Mono",
"editor.fontSize": 11,
"editor.lineHeight": 16,
"editor.fontWeight": 300,
"editor.letterSpacing": 0.4,
"editor.fontLigatures": true,

// Note: these tips are taken
// from the FiraFlott website
// Customization for font
// with Script Variants Italic
"editor.tokenColorCustomizations": {
 "textMateRules": [
  {
   "scope": [
    "comment",
    "entity.name.type.class",
    "keyword",
    "constant",
    "storage.modifier",
    "storage.type.class.js",
   ],
   "settings": {
    "fontStyle": "italic"
   }
  },
  {
   "scope": [
    "invalid",
    "keyword.operator",
    "constant.numeric.css",
    "keyword.other.unit.px.css",
    "constant.numeric.decimal.js",
    "constant.numeric.json"
   ],
   "settings": {
    "fontStyle": ""
   }
  }
 ]
},
// --- FONT SETTINGS :: END
```

</div></div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-150-whois-mono"  name="font-150-whois-mono"></a>150 - <a href="https://github.com/raphaelbastide/Whois-mono/blob/master/whois-mono.ttf" title="Download Whois Mono">Whois Mono</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=Whois%20Mono%20font" title="Search with Google: Whois Mono font" alt="Search with Google: Whois Mono font">&#127350;</a>&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >4.0</span>&nbsp;|&nbsp;<span title="Font has Zero Slashed or Zero Dotted" >&#216;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "Whois Mono",
"editor.fontSize": 13,
"editor.lineHeight": 17,
"editor.fontWeight": 500,
"editor.letterSpacing": 0.3,
"editor.fontLigatures": false,
// --- FONT SETTINGS :: END
```

</div></div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-151-ia-writer-duospace"  name="font-151-ia-writer-duospace"></a>151 - <a href="https://ia.net/downloads#fonts" title="Download iA Writer Duospace">iA Writer Duospace</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=iA%20Writer%20Duospace%20font" title="Search with Google: iA Writer Duospace font" alt="Search with Google: iA Writer Duospace font">&#127350;</a>&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >4.0</span>&nbsp;|&nbsp;<span style="color:ForestGreen;">&#9752;</span>&nbsp;|&nbsp;<span title="Font has Zero Slashed or Zero Dotted" >&#216;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "iA Writer Duospace",
"editor.fontSize": 11,
"editor.lineHeight": 16,
"editor.fontWeight": 500,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": false,
// --- FONT SETTINGS :: END
```

</div></div>
</td></tr>
<tr>
<td valign="top"><div style="margin:auto;">
<div>
<a id="font-152-ia-writer-mono-s"  name="font-152-ia-writer-mono-s"></a>152 - <a href="https://ia.net/downloads#fonts" title="Download iA Writer Mono S">iA Writer Mono S</a>&nbsp;&#11206; <span style="float:right;font-weight:normal;">[&nbsp;<a href="https://www.google.it/search?q=iA%20Writer%20Mono%20S%20font" title="Search with Google: iA Writer Mono S font" alt="Search with Google: iA Writer Mono S font">&#127350;</a>&nbsp;|&nbsp;&#11088;&nbsp;|&nbsp;<span title="Font Readability at Size `10px`" >5.0</span>&nbsp;|&nbsp;<span title="Font has Zero Slashed or Zero Dotted" >&#216;</span>&nbsp;]</span></div>

<div style="text-align:left;font-size:12px;vertical-align:top;height:1%;">


```json
// --- FONT SETTINGS :: BEGIN
"editor.fontFamily": "iA Writer Mono S",
"editor.fontSize": 10,
"editor.lineHeight": 14,
"editor.fontWeight": 500,
"editor.letterSpacing": 0.0,
"editor.fontLigatures": false,
// --- FONT SETTINGS :: END
```

</div></div>
</td></tr>
</table></div>





<div align="right">

[Go to Table of Contents](#table-of-contents)

</div>

# About Token Colors



<div align="right">

[Go to Table of Contents](#table-of-contents)

</div>

## Apophis based

**Apophis** variants is based on philosophy of `Zenburn` token colors.



<div align="right">

[Go to Table of Contents](#table-of-contents)

</div>

## Zenburn based

**Zenburn** variants derives from the combination of Eclipse `Zenburn Theme` and Eclipse `DevStyle` Extension.
These variants has a dark gray cold/flat/warm backgrounds (based on the theme you installed), desaturated token colors (for code) and experimental **Nirvana** (Low Blue Light only on token colors) and **Low Blue** (applied to all main set of skins and token colors) with some exceptions:

- some icons cannot seems to be filtered;
- images in extensions README.md and in image viewer cannot be filtered.



<div align="right">

[Go to Table of Contents](#table-of-contents)

</div>

# About my PHP Script **VSCode Themes Master**

> Engine: **VSCode Themes Master** v. 1.12.222 - Update: 2021-08-15 20:57:55

The `Zenburn Cold Gray` prototype was initially a manual editing of the VSCode settings and some tokens, based on the `Zenburn` theme porting from `Eclipse IDE` (see below the thanks, to the paragraph `Gratitude`) in conjunction with the background of the `DevStyle` extension for Eclipse IDE.

Realizing that, to optimize some aspects of the theme, I would have had to evaluate an infinite series of colors, I decided that I would have done first to build mathematical functions for optimizing and correcting saturation / brightness / color / transparency / contrast of configurations already consolidated.

Specifically, I created _VSCode Themes Master_ in PHP (localhost script, not distributed) that allows you to set the basic colors of the skin, on which they are calculated, with a parametric and configurable reference system for each variant, all the others interface colors, applying, at the same time, tonal variations both on the interface and on the colors of the tokens.

My personal need to optimize the colors of the VScode interface to make it uniform to the _Eclipse IDE_ interface (_Zenburn_ + _DevStyle_), has led me to notice that, despite almost all my monitors are from the same manufacturer and despite having selected the temperature color on the `sRGB` standard (which therefore has brightness, contrast and range set to specific values), the visual impact, on the same theme variant, is different: more saturated and warm on some and more cold and desaturated on others .

_VSCode Themes Master_ allows me to build all the files necessary for the publication of the theme and, for this reason, it was easy (but not so easy) for me to test and distribute single themes with many color variations of the UI and tonal variations of the tokens for the code, to try to standardize the display between monitors with "different" `sRGB` representations (for example: using a cold theme on monitors with a tendency to warm colors and vice versa, or a flat theme that, in some cases, seems to be the correct compromise between extremes).

Starting from _VSCode Themes Master_ V. 1.2.40, I can generate themes, not only from `TextMate` files, but also using the export of token colors from Visual Studio Code in JSON format.



<div align="right">

[Go to Table of Contents](#table-of-contents)

</div>

# Gratitude

`Zenburn based Themes`: many thanks to **Ryan Olson** and [Zenburn](http://kippura.org/zenburnpage/) . You can download the original porting by **Ryan Olson**, on which the first version of this variant's Token Colors were based, at Marketplace: [Zenburn Theme by Ryan Olson](https://marketplace.visualstudio.com/items/ryanolsonx.zenburn).



<div align="right">

[Go to Table of Contents](#table-of-contents)

</div>

# License

MIT