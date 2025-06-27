# classdiagram-ts README

**classdiagram-ts** is a VSCode extension to create UML class diagram based on typescript source files.
I wrote it to help myself and people who have similar needs. I started this hobby project when I worked in my previous job and often needed to include class diagram in documents. Now I use it more for refactoring my code. This extension is free and provided as-is. All the code analysis happens locally (no internet use). It's a personal close source project, no public repo. 

**Spread the word if you find this extension useful!**

## Features
* Create UML class diagram for a folder or file, display class information: type (class, abstract class or interface), name, memebers (property and method), and the relationships between classes.
* Open correspondent code when a class or class memebers in diagram is clicked.
* Diagram is in sync with code, reflects code change immediately.
* Code refactoring. "Tools/Refactor" sorts class memebers and adds 'private' modifier based on dependency analysis.

![Demo](https://shenawesome.github.io/img/tsdiagram.gif)  

## Usage
* Select 'Show Diagram' in context menu (right click on a folder or ts file)
* or, with an open file, click the 'Show Diagram' button on the right of the tab bar
![usage1](https://shenawesome.github.io/img/classdiagram_use.jpg) 
![usage2](https://shenawesome.github.io/img/classdiagram_use2.jpg)   

## Tips
* Use "Tools/Export" to save a diagram as an image file
* Use "Filter" to filter classes included in diagram
* Layout is persisted for folder/class. Adjustment to diagram layout will not be lost as long as you are using the same VsCode/machine. 
* Class members are clickable, try it!

## Todos  
* improve toolbar desgin
* improve async return type
* display a legend
* better snapping (maybe a checkbox?)
* function to save diagram as a file which can be re-opened and shared (adds complexity, needs more thinking, maybe only save/load layout to avoid confusion)

## Recent changes
* fix issue: when dependency lines are hidden the outlines still remain  
* rename the 'optimize' to 'privatize' and add better explanation, move it under a new 'refactor' menu
* display number of classes: visible/total 
* show constructor for class  