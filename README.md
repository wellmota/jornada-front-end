
# Results - Summary




## Run Locally

Go to the project directory

```bash
  cd project-folder
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```


## Web Server
Runs on http://localhost:8080


## API Server
Runs on http://localhost:3000

#### Get result

```http
  GET http://localhost:3000/result
```

#### Get summary

```http
  GET http://localhost:3000/summary
```


## Acknowledgements
- [Learn JavaScript - Basic](https://learnjavascript.online/)
- [Using the Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- [Document: querySelector() method](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
- [Element: innerHTML property](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML)
- [Array.prototype.forEach()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
- [Javascript Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)






# STAGE 3 - LOADING STATE

Description

At this stage, you need to implement a loading state for the Result card.

Acceptance Criteria

* SCENARIO: The fetch data is running
* Given a user open the result page
* When the API is called to load the results
* Then I can see the loading spinner while I'm waiting for the data



* SCENARIO: The fetch data is finished
* Given a user open the result page
* When the API has already been called to load the results
* Then I can't see the loading spinner and I can see the results data



Timebox

Approx. 5 days


Some instructions

* Implement a class to show and hide the spinner
* Implement a function to show or hide the loading component
* BONUS:
    * Add and remove the loading component dynamically using DOM methods to manipulate the HTML



Acknowledgements

* Learn JavaScript
* Loading.IO
* Javascript Functions
* Element: innerHTML property
* Element: append() method
* Element: prepend() method

