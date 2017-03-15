'use strict';
import { window, commands, Range, Position, ExtensionContext } from 'vscode';

function convert(json) {
    try {
        // Try to parse, to see if it's real JSON
        JSON.parse(json);

        const regex = /\"([^"]+)\":/g;
        const hyphenRegex = /-([a-z])/g;

        return json.replace(regex, match => {
            return match
                .replace(hyphenRegex, g => g[1].toUpperCase())
                .replace(regex, "$1:");
        });
    } catch (err) {
        return false;
    }
}

function convertCommand(editor, edit) {
    const { selection, document } = editor;
    let text = document.getText(selection);
    let replaceFile = false;

    if (text === '') {
        text = document.getText();
        replaceFile = true;
    }

    const converted = convert(text);

    if (converted === false) {
        window.showInformationMessage('No valid JSON Object found.');
        return;
    }

    edit.replace(
        replaceFile ?
            new Range(
                new Position(0, null),
                new Position(document.lineCount - 1, null)
            ) :
            selection,
        converted
    );

}

export function activate(context: ExtensionContext) {

    context.subscriptions.push(
        commands.registerTextEditorCommand('jsonToJSObject.convert', convertCommand)
    );

}

export function deactivate() { }
