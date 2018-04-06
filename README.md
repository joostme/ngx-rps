# Ngx-Rock-Paper-Scissors

This project is a simple Rock-Paper-Scissors game written in Angular 5.

The app uses the caching and offline functionality of Service Worker.

## Start the application

First `npm install` to install all necessary dependencies.

Then `npm start` to launch the application. It will be available at [http://localhost:4200](http://localhost:4200).

## Code

The complete RPS game code is bundled in the `RpsModule` in `src/app/rps-module`.

All game-specific logic can be found at `src/app/rps-module/shared`.
This includes the `models`, `service` and `utility functions`.

The UI components can be found at `src/app/rps-module/components`.

### How it works

The whole application relies on the `GameState`:

```ts
export interface GameState {
    human: RockPaperScissors;
    computer: RockPaperScissors;
    result: Result;
    humanRoundsWon: number;
    computerRoundsWon: number;
}
```

where `RockPaperScissors` is

```ts
export enum RockPaperScissors {
    Rock = 'ROCK',
    Paper = 'PAPER',
    Scissors = 'SCISSORS'
}
```

and `Result` is

```ts
export enum Result {
    Won = 'WON',
    Lost = 'LOST',
    Draw = 'DRAW'
}
```

There are different functions that change the state based on the human's and the generated computer's choice of options.

The `RpsService` manages the current game state and provides an observable stream that the UI components subscribe to.

The `RpsService` provides a function to play the next turn that causes the game state to change and thus the observable to provide a new game state object.

```ts
playTurn(hand: RockPaperScissors) { ... }
```

## Service Worker

To use the Service Worker you first have to build the application in production mode.
For this run 

```npm
npm run build
``` 

to build the application.

The generated files are located in the `dist/` folder. 
From there start a local server with `http-server` or a program of your choice.
