# VSCode Lean 4 Custom Language Configuration

<a href="https://marketplace.visualstudio.com/items?itemName=denis-gorbachev.lean4-language-configuration">
  <img src="https://img.shields.io/badge/Install-VSCode%20Marketplace-blue" />
</a>

## Features

This extension overrides the following language configuration properties:

* `autoClosingPairs` - adds backticks (`)
* `surroundingPairs` - adds backticks (`)
* `onEnterRules` - adds a rule to skip indenting the new line after pressing `Enter` next to a quote (`"`)
* `wordPattern` - removes the dot (.), so that fully qualified Lean names become "words"
  * Example: `Mathlib.Data.List.Sort` becomes a "word"

**Gotchas:**

* This extension applies some parts of its language configuration after a 250ms timeout. This is a hack to ensure that it overrides the main extension (`lean4`). This hack is required because there's no way to specify the extension load order to ensure that this extension always overrides the main extension.
