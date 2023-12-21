// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode")

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	const removeLog = vscode.commands.registerCommand("editor.removeLog", function () {
		const global = vscode.window
		const editor = global.activeTextEditor
		if (!editor) {
			return
		}
		const document = editor.document
		let txt = document.getText(editor.selection)
		txt = txt.replace(/\s+console.(log|info|error|table)\((.*)\);?/g, "")
		editor.edit((edit) => {
			edit.replace(editor.selection, txt)
		})
		global.showInformationMessage("叮咚！您的console已删除")
	})
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "yangkun" is now active!')

	context.subscriptions.push(removeLog)
}

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate,
}
