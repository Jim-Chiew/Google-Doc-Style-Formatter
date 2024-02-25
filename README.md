# Google-Doc-Style-Formatter
Quickly set and format selected text with just a click of a button.

## Setup 
This code is currently not published yet, so it has to be a manual temporary installation.

In google doc, click on extensions -> Apps Script:
![image](resource/Screenshot_(254).png)
Copy code into the code editor:
![image](resource/Screenshot_(256).png)

Save project:
![image](resource/Screenshot_(257).png)

Run:
![image](resource/Screenshot_(258).png)

Allow Permissions:
![image](resource/Screenshot_(260).png)

All done:
![image](resource/Screenshot_(263).png)

## Quick start guide
Select text to be format and hit format code:
![image](resource/Screenshot_(268).png)

![image](resource/Screenshot_(269).png)

Default values are:
FONT_FAMILY = "Roboto Mono;500";
FONT_SIZE = 8;
FOREGROUND_COLOR = "#990000";

## Setting format attributes:
highlight or select text to get style properties from and click set format:
![image](resource/Screenshot_(270).png)

![image](resource/Screenshot_(271).png)

fill in whatever else that needed or that the script is unable to get. currently a bug that does not allow app script to get some of the font family.
![image](resource/Screenshot_(272).png)

select text to format and hit format code:
![image](resource/Screenshot_(273).png)

![image](resource/Screenshot_(274).png)


---
https://developers.google.com/apps-script/guides/menus
https://developers.google.com/apps-script/reference/document/document#getselection
https://developers.google.com/apps-script/reference/document/range
https://developers.google.com/apps-script/reference/document/text#setattributesattributes
https://developers.google.com/apps-script/reference/document/position#getSurroundingText()
https://developers.google.com/apps-script/reference/document/text
https://developers.google.com/apps-script/guides/properties
https://developers.google.com/apps-script/reference/properties
