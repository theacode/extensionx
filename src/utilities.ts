import * as fsExtra from 'fs-extra';
import * as path from 'path';
import * as os from 'os';
import * as vscode from 'vscode'

export function generateCredentialsFile(): void {
    const credentialFilePath = path.join(os.homedir(), '.vscode', 'ansible-credentials.yml');
    console.log(credentialFilePath)

    if (!fsExtra.existsSync(credentialFilePath)) {
        fsExtra.copySync(path.join(__dirname, '..', 'config', 'credentials.yml'), credentialFilePath);
    }
}
