'use strict';
import * as vscode from 'vscode';

export function convert(json: string) {
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

function convertCommand(editor: vscode.TextEditor, edit: vscode.TextEditorEdit) {
    const { selection, document } = editor;
    const text = selection.isEmpty ?
        document.getText() :
        document.getText(selection);

    const converted = convert(text);

    if (converted === false) {
        vscode.window.showInformationMessage('Please select a valid JSON Object.');
        return;
    }

    edit.replace(
        selection.isEmpty ?
            new vscode.Range(
                new vscode.Position(0, 0),
                new vscode.Position(document.lineCount, 0)
            ) :
            selection,
        converted
    );

}

export function activate(context: vscode.ExtensionContext) {

    context.subscriptions.push(
        vscode.commands.registerTextEditorCommand('jsonToJSObject.convert', convertCommand)
    );

}

export function deactivate() { }
