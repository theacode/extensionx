// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
//import * as utilities from './utilities'
import { AnsibleCompletionItemProvider } from './ansibleCompletionProvider';

const documentSelector:vscode.DocumentSelector = [
    { language: 'yaml', scheme: 'file' },
    { language: 'yaml', scheme: 'untitled' },
    { language: 'ansible', scheme: 'file' },
    { language: 'ansible', scheme: 'untitled' }
];

export function activate(context: vscode.ExtensionContext) {

	// console.log('Congratulations, your extension "helloworld" is now active!');
	// const outputChannel = vscode.window.createOutputChannel('Hey');
    // outputChannel.append('Test');
    // outputChannel.show()

	let disposable = vscode.commands.registerCommand('helloworld.helloWorld', () => {
    vscode.window.showInformationMessage('Extension X');
	});

	//utilities.generateCredentialsFile();
	const triggerCharacters = ' abcdefghijklmnopqrstuvwxyz'.split('');
    context.subscriptions.push(vscode.languages.registerCompletionItemProvider(documentSelector, new AnsibleCompletionItemProvider(), ...triggerCharacters));
	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
