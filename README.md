# To-do List Project!

We're going to build a to-do list application using React and TypeScript, this is the most commonly used frontend stack here at Instil and is very popular across the industry.

The application should at least allow the user to:
* Create a to-do
* View a list of their to-dos
* Complete & un-complete a to-do using a checkbox
* Delete a to-do

After this point, we can look at how we add tests to a React application using [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/), including:
* Test adding a to-do
* Test completing a to-do
* Test deleting a to-do

At this stage, you might want to get creative with the design of the application and make it look a bit cooler :) 

Here are some ideas of features you could add:
* Add a strikethrough style to your completed to-dos, showing at a glance which ones are done already.
* Allow the user to click the title of the to-do to complete/un-complete it in addition to using a checkbox.

We've added the [Styled Components](https://styled-components.com/), and [Styled System](https://styled-system.com/) libraries to the project, so you can use the documentation there on how to use these "CSS-in-JS" libraries to create your own look-and-feel for your to-do list app.

To get started, look at `src/App.tsx`. It has a skeleton for the app, with an `AddTodo` input for creating a to-do and `TodosList` component for displaying to-dos.

## Prerequisites

Your laptop should have both Node and Yarn installed.
* Head [here](https://nodejs.org/en/download/) for Node if your machine is missing it
* Then install Yarn by running the command `npm install --global yarn`

## Useful Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn lint`

This "lints" your code, checking that it adheres to code-style requirements.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
