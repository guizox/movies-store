This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Starting the project

Open a terminal in the project folder after cloned it and run the following steps :

npm install

npm start.

It will open a browser with http://localhost:3000

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


## Aliases

There is also aliases configured in this project.

It helps you to import components, modules ... whatever easily.

Instead of import files by path like '../../../components', you can easily just 'components/ComponentThatYouWant';