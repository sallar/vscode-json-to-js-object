# VSCode Extension: JSON to JS Object

This extension converts a JSON object to JavaScript object in Visual Studio Code.

## Install

This extension is available for free in the [Visual Studio Code Marketplace](https://marketplace.visualstudio.com/items?itemName=sallar.json-to-js-object).

```
ext install json-to-js-object
```

## Features

+ Converts JSON Object to JavaScript Object
+ Converts `snake-case` keys to `camelCase` keys while converting the object

## How To Use

1. Select a valid JSON object in your editor (if nothing is selected then the whole file is checked)
2. Choose `Convert JSON to JS Object` in the command palette (`Cmt/Ctrl+Shift+P`)

![](preview.gif)

## Keyboard Shortcut

This extension does not define any keyboard shortcuts by default. However if you need one, you can use the `jsonToJSObject.convert` command to define your own shortcut.

## License

This extension is released under the [MIT License](LICENSE).
