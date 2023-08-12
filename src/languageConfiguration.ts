import { IndentAction, LanguageConfiguration } from 'vscode'

export const languageConfiguration: LanguageConfiguration = {
  'onEnterRules': [
    {
      'beforeText': new RegExp('"$'),
      'action': {
        'indentAction': IndentAction.None,
      },
    },
  ],
  'wordPattern': new RegExp('([^`~@$%^&*()\\-=+\\[{\\]}⟨⟩⦃⦄⟦⟧⟮⟯‹›\\\\|;:",/\\s]+)', 'g'),
}
