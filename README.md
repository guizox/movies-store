This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Why React + Redux + Saga Middleware for this project?

In my point of view, saga is the best middleware for react in now days.
Thunk is also a good one, but saga controls asynchronous calls with mastery;

I used Redux in this project because regarding the code challenge, in THIS phase, pagination would not be necessary.

If there is a next phase where pagination is necessary, I would just create a page state in movies redux,
create a component to control this state and the problem would be almost solved.

As this project also uses Saga, it would be really easy to just add a ´subscription´using takeLatest in moviesRequestSaga once a
page change is requested and VUALA! You now have a new page in your Redux State that you can get before doing the request in this saga.

Thinking in this cases, I think this is the most appropriate structure for this project.

## What about this plop? What is a plop file?

Plop is a js library that helps you to generate files regarding a template.

You can define templates inside of plopfiles-templates folders and ask for inputs for the user that wants to create the same pattern.

As this project import the reducers/sagas by it self using the mapFiles in modules/index.js, it is really interesting to have some library like that.

## Bundle Size
To analize the bundle, run the following code : npm run analize.
![alt text](https://drive.google.com/uc?export=view&id=1VZYGhlutSsQWKTT-e4wxF1hnEFCQkQJI)

## Starting the project

Open a terminal in the project folder after cloned it and run the following steps :

npm install

npm start.

It will open a browser with http://localhost:3000

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
