// Import the module and reference it with the alias vscode in your code below
// import * as vscode from 'vscode';
import { ExtensionContext, languages } from 'vscode'
import { languageConfiguration } from './languageConfiguration'

export function activate(context: ExtensionContext) {
  /**
   * IMPORTANT: There are two language configurations
   * - language-configuration.json holds the less important configuration
   * - src/languageConfiguration.ts holds the more important configuration
   * The reason is that the more important configuration must be loaded after the main `lean4` extension (to override it)
   * Hence setTimeout(..., 250)
   * 
   * There is no way to specify the extension load order in VSCode
   */
  setTimeout(() => {
    languages.setLanguageConfiguration('lean4', languageConfiguration)
  }, 250)
}

// This method is called when your extension is deactivated
export function deactivate() { }
