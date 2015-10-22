# onload.js
A Simple JS Library for handling events that need to occur after the DOM has loaded.

Using the function onLoad.newHandler() you can register events to occur after the DOM has loaded completely. Use the following format:

onLoad.newHandler(function(){
  console.log("Do Stuff Here");
});

or:

var testFunction = function(){
  console.log("Do Stuff Here");
};

onLoad.newHandler(testFunction);

NOTE --- This handler only works with lambda function formats. YOU CANNOT SUPPLY A FUNCTION NAME.

The handler appends the functions to a list (onLoad.todos[]) in the order they are recieved. Once the DOM has loaded, they are executed one at a time from the list. This prevents accidental overwriting of the window.onload element.

NOTE --- Using this handler, you cannot use window.onload for anything else, as this function is built on it.

Licensed under GNU Affero GPL v3.0
