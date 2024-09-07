# KWin_virtualactivities
KWin script to switch activity when virtual desktop is changed. The activity and the virtual desktops are mapped 1 to 1 and the script expects that for every virtual desktop there is one activity and that the two have the same ID

The goal is having each virtual desktop with a different activity (folders, widgets, background)  for a conceptual mapping of "different virtual desktops for different use".

*NOTE*: I had this running in Plasma 5 with no issues (see [this youtube video](https://www.youtube.com/watch?v=ZrP3e_LjAhA)). I adapted it to Plasma 6 but I have blocking glitches. It seems that most of the times a switch triggers an endless back-and-forth switching between the previous and the current virtual desktop.

## BUILDING
On linux (with zip installed) you can create the kwin script package using `zip ../virtualactivities.kwinscript metadata.json contents/code/main.js` in the src folder and you will get `virtualactivities.kwinscript` in the project root folder

## INSTALLATION
In System Settings / Apps & Windows / Window Management / KWin Scripts -  'Install from file'

## References
[Plasma 6 Kwin issue](https://invent.kde.org/plasma/kwin/-/issues/117)

[Plasma 5 and now 6 KDE issue](https://bugs.kde.org/show_bug.cgi?id=341143)
