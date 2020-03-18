# Angular Starter - EVA

Starter Angular Project with Zurb Foundation Grid and Angular Material components.

Theming is supported by changing the `settings.csss` file under `theme`. In there you can add your color palette, fonts, resolution breakpoints for easier media queries in your css rules in your project.

`bg-${color}-${variation}` classes are generated automatically and the contrasting text color assigned based on the [W3 color documentation guide](http://www.webmasterworld.com/r.cgi?f=88&d=9769&url=http://www.w3.org/TR/AERT#color-contrast) using the following formula:

```
((Red value X 299) + (Green value X 587) + (Blue value X 114)) / 1000
```

## Prettier

Prettier is used to automatically style code, files can be pretified automatically on save by using the included `.vscode/settings.json` file in this repo.

Additionally, the prettier npm module is included as a dependency to prettify staged files with a `pre-commit` hook.

Prettier is used on this project to ensure **consistent coding style**.

## TSLint

Similarly to Prettier, TSLint will try to auto-fix linting issues automatically on save using the included `.vscode/settings.json` file.

Running `npm run lint:fix` will also try to auto-fix any linting issues in the project.

There's a `pre-push` hook that will lint the project and prevent pushing if errors are present.

## Code scaffolding

Hooks are ran using Husky to ensure code quality through the scaffolding of this project.

### pre-commit

Prettier will run as a `pre-commit` hook using `pretty-quick` on staged files.

### pre-push

Linting (no auto-fix) and tests will be run as a `pre-push` hook, if either of them fail pushing won't go through.

## IDE - VSCode

VSCode is recommended as the IDE for this project, included in this repo is `.vscode/settings.json` file with some basic settings to prettify and attempt to auto-fix lint issues with ease.

## Development Server

Run `npm start` for a dev server and navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
