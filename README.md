# DogGO Webapp

DogGO is an online application that allows you to capture (and make friends with) your very own team of kickass Doggos and conquer the world together.

# Demo

Available test usernames are `alfa` and `bravo`. No passwords needed for those.

https://doggo-web-webapp.herokuapp.com

## Upcoming feature(s)

In the [tensorflow-detection](https://github.com/raphpap/doggo-web-webapp/tree/feature/tensorflow-detection) is an upcoming feature where an AI model has been trained to detect the presence of a dog-like shape in the capture screen. This would allow the app to only permit users to capture dogs.

## Motivation
There is two main goals in the realization of this project:

1. Create a proof of concept of the DogGO application. Basically, this SPA will be standalone, and will mock it's own backend. The data will not persists (unless we save it in the local storage) and there will be no multiplayer. However, the goal is that it will be extremely easy to connect the app to the backend once it is built.

2. Do the following experimentations:
  - Further improve my Typescript knowledge
  - Experiment with the [React's Native Context API](https://reactjs.org/docs/context.html)
  - Find out how to implement my own FLUX architecture with the native Context (and Typescript!)
  - Experiment with WebRTC to take pictures using the camera feed in a browser
  - Experiment with [Tensorflow.js](https://js.tensorflow.org/) and try to do web-native image recognition
  - Experiment with the new React hooks

## Screenshots
### Login
![Login](https://github.com/raphpap/doggo-docs/blob/master/doggo-login.png?raw=true)

You can log into the app using one of the following users:
 - alfa (whatever password)
 - bravo (whatever password)

### Team
![Team](https://github.com/raphpap/doggo-docs/blob/master/doggo-team.png?raw=true)

Here, you can view the Doggos that are part of your team.

### Capture
![Capture](https://github.com/raphpap/doggo-docs/blob/master/doggo-capture.png?raw=true)

Use this page to capture a new Doggo, and to give him a name. His stats will be generated randomly. In a futur version, using image recognition, the `Capture` button would only appear if a doggo is recognized in the camera feed.

### Battle
![Battle](https://github.com/raphpap/doggo-docs/blob/master/doggo-battle.png?raw=true)

The good stuff! Here, you can finally try and conquer the world with your beautiful friends!

## Getting Started
These instructions will get you up and running on your local machine in no time, for development and testing purposes.

### Prerequisites
First things first, you need to have [Nodejs](https://nodejs.org/en/download/) and [npm](https://www.npmjs.com/get-npm) installed.

### Installing
Step by step guide to get a development env running

1. Clone this project

2. In a terminal, move into the project's root

2. Install the npm packages
```
npm install
```

3. Start the project!
```
npm start
```

As simple as that!

## Running the tests

To run the tests, simply run:
```
npm test
```

### Stylelint
Stylelint is included in this project. If some rules are not respected, you will know by looking at the console when the project is running!

### Prettier
Prettier is also included in this project. Beautifying your code will not be done automatically, though. To beautify your code, simply run:
```
npm run prettier
```

## API Reference
As written above, the backend is currently mocked. When the backend will be ready, we will be able to plug it by removing a single line in the webapp. By removing or commenting the line `import './temporary-mocks';` in the file `src/services/doggo-api/doggo-api.ts`, the fetch calls would not be intercepted by `fetch-mock` anymore, and would go through to the `API_URL` defined in your environment. (See `/configurations/environment.ts`);

The existing calls are:

1. `POST /login`
```
BODY:
  - username: string;
  - password: string;
```
```
RESPONSE:
  - cards: Card[];
  - username: string;
  - opponent: Card;
```

2. `POST /capture`
```
BODY:
  - name: string;
  - image: string; (base64 image)
```
```
RESPONSE:
  - card: Card;
```

3. `POST /battle`
```
BODY:
  - ownCard: Card;
  - opponentCard: Card;
```
```
RESPONSE:
  - card: Card;
  - opponent: Card;
```

4. `POST /nextOpponent`
```
BODY:
  - opponentCard: Card;
```
```
RESPONSE:
  - card: Card;
```

## Deployment
To deploy this application, I suggest simply hooking an Heroku Application to Github, and adding the following buildpacks to allow Heroku to deploy it:

```
heroku/nodejs
```
```
https://github.com/mars/create-react-app-buildpack.git
```

## Built With
* [npm](https://www.npmjs.com//) - Dependency Management
* [React](https://reactjs.org/) - The web framework used
* [Typescript](https://www.typescriptlang.org/) - Superset of Javascript
* [React-Create-App](https://github.com/facebook/create-react-app) - React-CLI to kickstart your project

## Authors
* **Raphaël Papillon** - *Initial work* - [raphpap](https://github.com/raphpap)

## License
This project is licensed under the LGPL-3.0 License - see the [LICENSE.md](LICENSE.md) file for details
