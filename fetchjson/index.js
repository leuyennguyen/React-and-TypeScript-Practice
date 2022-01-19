"use strict";
exports.__esModule = true;
// GOAL: Make a network request to fetch some JSON and print the result
var axios_1 = require("axios");
var url = 'http://jsonplaceholder.typicode.com/todos/1';
// Since we have variable url, we can use axios to make a network request to this URL
// This will make a HTTP GET request to that URL and attempt to fetch that JSON data
axios_1["default"].get(url).then(function (response) {
    console.log(response.data);
});
/*
    the operation is async, so by calling axios.get(), we're going to receive a promise in return
    So, to get a notification on when the request is complete, we can change the .then() statement
    that will be called with the response once we get a response from that API

    NOTE: console.log() is to print the response (which is the JSON from the fake JSON API website)
    to console

    NOTE***: We cannot run .ts file directly inside the browser or with nodeJS
            We have to first compile this file into plain JavaScript and then execute the resulting
            JavaScript code

    TO RUN THE .ts FILE:
        - on Terminal, run tsc (aka TypeScript compiler): tsc index.ts
        - After compliling the .ts file, in the code editor, there will be a .js file
        - Now, we can use node command line tool and we'll run node index.js, which will execute
        the complied JavaScript file that we just created
*/ 
