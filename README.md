# GIPHY API Search

## by _**John Whitten, Cesar Lopez, and Jonathan Declid**_

### _January 8, 2022_

#### _This is a web-based application wherein the user can enter a keyword and have GIFs returned from GIPHY._

## Technologies Used
- _Babel 7.6.4_
- _Bootstrap 5.1.3_
- _CSS_
- _css-loader 3.2.0_
- _eslint 6.3.0_
- _eslint-loader 3.0.0_
- _file-loader 1.1.6_
- _html-loader 0.5.5_
- _HTML_
- _package-json_
- _Javascript_
- _Jest 24.9.0_
- _JQuery 3.6.0_
- _Node.js_
- _Node Package Manager 6.14.9_
- _popper.js 1.16.1_
- _style-loader 1.0.0_
- _webpack 4.39.3_
- _webpack-cli 3.3.8_
- _webpack-dev-server 3.8.0_

## Project Title: GIPHY API Search

## API Key Procurement:
- _This application uses the GIPHY-API. You will need to make an account and get an API key if you wish to recreate the project environment on your local. The "Free Plan" allows for 2000 API calls per month.

- _Visit the [GIPHY Developers](https://developers.giphy.com/docs/api/) site._

- _If you are new to GIPHY, click Log In in the top right and create a new user account. You'll be prompted to create an account with your email, first name and a password. Agree to the terms of use, click "Get Started!" and confirm your email address. Access your account dashboard that includes your API key as well as your remaining API calls for the month._

- _Click the "Create an App" button._

## Project Setup/Installation Instructions:
- _Open the terminal on your local computer._

- _Navigate to the parent directory of your preference._

- _Clone this project using ```$ git clone https://github.com/johnwhittenstudio/giphy-api-jcj```_

- _Navigate to the top level of the directory with the command ```$ cd giphy-api-jcj```_

- _Make sure you have installed [Node js](https://nodejs.org/en/)_

- _Run command ``` $ npm install``` to install all dependencies._

- _Create file for storing environmental variables you want to keep secret (such as an API key) ``` $ touch .env```_

- _Add the following line of code to the .env file ```API_KEY=insert-your-API-key-here``` where you substitute the API key you got by following the instructions above for the "insert-your-API-key-here". The following is an example using a fake API key: ```API_KEY=1234567890```_

- _Run the command ```$ npm run build```_

- _Run the command ```$ npm run test``` to check the test pass._

- _Run the command ```$ npm run start``` to launch on a browser._

## Additional Setup/Installation Note for Windows Users
- _This environment was created on a Mac. For it to work properly in your local environment make the following change:_

- _Update package.json, line 8 to: "start": "npm run build & webpack-dev-server --open --mode development"_

## Known Bugs
- _Only displays 1 GIF, although the search limit in the giphy-search.js is set to a limit of 5._

- _There are no validation checks on the user's input._

- _There is no CSS styling._

## License
[MIT License](https://opensource.org/licenses/MIT) Published _**2022**_ _**John Whitten, Cesar Lopez, and Jonathan Declid**_

## Contact Information
_If you encounter any issues with this site, please contact John Whitten at [johnwhitten.studio@gmail.com](mailto:johnwhitten.studio@gmail.com), (NEED CESAR AND JONATHAN's EMAIL)_
