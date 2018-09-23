# Instalation

Run `npm install` to install all required packages.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Running unit tests and end-to-end tests

Run `ng test` to execute the unit tests. Available is also `ng e2e` although there is only one page.

## Aproach to the problem

`Components` should be as clean as possible, the purpose is only to show/capture data.
`Services` should be the connection between the ui and the business logic to allow flexibility and clean code

Because I wanted the game to grow in terms of possible combinations the first though was "it needs to exist a specific class just for combinations". From there it was just a question of bulding logic making sure each class has it's own purpose and there will be one big class extending the small ones.

This allow me to create small unit tests without dependencies. It is bit of an overkill for a small app, but it's a principle.