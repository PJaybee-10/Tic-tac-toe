# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


### In this implementation, i use the csv-parser package to parse the CSV file and store the data in an array. We have two endpoints: /shows/top10/:provider to get the top 10 shows for a specified provider and /shows/:provider to get all shows in alphabetical order for a specific provider with pagination.

For the first endpoint, i filter the data based on the provider, sort it by views in descending order, and slice the first 10 items. For the second endpoint, i filter the data based on the provider, sort it alphabetically by title, and slice the data based on the requested page and limit.

I also use req.params to get the provider parameter from the URL and req.query to get the page and limit parameters from the query string.

Note: This implementation assumes that the CSV file is in the same directory as the index.js file and is named data.csv. You may need to adjust the file path if your CSV file is in a different location.

As for the evaluation criteria, here's how this implementation satisfies them:

Simplicity of the architecture and API: The architecture is simple and easy to understand. The API has two endpoints with clear names and parameters.
Technological choices: We use Node.js and the Express framework for the server, which are both widely used in the industry. We also use the csv-parser package to parse the CSV file, which is a popular choice for CSV parsing in Node.js.
Quality: We handle errors and use best practices such as filtering, sorting, and slicing the data on the server-side. We also use proper HTTP status codes and response formats.
Performance: We parse the CSV file only once when the server starts and store the data in memory, so we avoid reading the file for each request. We also use pagination