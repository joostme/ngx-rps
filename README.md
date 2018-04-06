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
