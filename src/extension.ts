import * as vscode from 'vscode';
import { AnsibleCompletionItemProvider } from './ansibleCompletionProvider';

const documentSelector:vscode.DocumentSelector = [
    { language: 'yaml', scheme: 'file' },
    { language: 'yaml', scheme: 'untitled' },
    { language: 'ansible', scheme: 'file' },
    { language: 'ansible', scheme: 'untitled' }
];

export function activate(context: vscode.ExtensionContext) {

	const triggerCharacters = ' abcdefghijklmnopqrstuvwxyz'.split('');
    context.subscriptions.push(vscode.languages.registerCompletionItemProvider(documentSelector, new AnsibleCompletionItemProvider(), ...triggerCharacters));

}

// this method is called when your extension is deactivated
export function deactivate() {}
