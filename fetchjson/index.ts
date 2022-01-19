// GOAL: Make a network request to fetch some JSON and print the result
import axios from 'axios';

const url = 'http://jsonplaceholder.typicode.com/todos/1';

// Since we have variable url, we can use axios to make a network request to this URL
// This will make a HTTP GET request to that URL and attempt to fetch that JSON data
/*
axios.get(url).then(response => {
    console.log(response.data);
});


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
        - To combine tsc and node command, we can use ts-node <filename.ts>

    SUMMARY:
        - tsc <filename.ts>
            node <filename.js>
        
            OR
        - ts-node <filename.ts>
*/

/*
This is how the code above will print to the console
{ userId: 1, id: 1, title: 'delectus aut autem', completed: false }

The code below is to print the content in a nicer format


axios.get(url).then(response => {
    const todo = response.data  // direct referene of response into todo variable

    const ID = todo.ID;
    const title = todo.Title;
    const finished = todo.finished;

    console.log(`
        The Todo with ID: ${ID}
        Has a title of: ${title}
        Is it finished? ${finished}
    `);
});


The code above will print :

        The Todo with ID: undefined
        Has a title of: undefined
        Is it finished? undefined

Since the actual properties in the API are id, title, completed respectively (not ID, 
Title, and finished)

==> here is where TypeScript holds the spotlight

TypeScript is going to help us catch error like these simple typos while we're
still writing code in the code editor rather than when we actually execute the code

Now, we will add a little bit basic TypeScript syntax that is going to help us easily
catch the similar errors
*/

/*
    - interface in TypeScript is used to define the structure of an object
    - every Todo object in the application will have three distinct properties (id,
        title, completed)
    - interface Todo will tell TypeScript about what type of information we're going
    to expect to receive back from the API
    - At the moment, we will ignore the property userId in the API using interface,
    which is totally fine. Using interface allows us to choose a certain number of 
    properties from the API.
    
*/

interface Todo {
    id : number;
    title : string;
    completed : boolean;
}
/* CORRECT */
axios.get(url).then(response => {
    const todo = response.data as Todo

    const id = todo.id;
    const title = todo.title;
    const completed = todo.completed;
    /*
    console.log(`
        The Todo with ID: ${id}
        Has a title of: ${title}
        Is it finished? ${finished}
    `);
    This will become:
    */
   logTodo(id, title, completed);
});


    /* INCORRECT
    As const todo = response.data as Todo, the errors will be marked

    const ID = todo.ID;
    const title = todo.Title;
    const finished = todo.finished;

    console.log(`
        The Todo with ID: ${ID}
        Has a title of: ${title}
        Is it finished? ${finished}
    `);

    NOTE: `` are called template literals, which can be used to represent multi-line 
    strings and may use "interpolation" to insert variables

    });
*/

const logTodo = (id: number, title: string, completed: boolean) => {
    console.log(`
        The Todo with ID: ${id}
        Has a title of: ${title}
        Is it finished? ${completed}
    `);
};