

# Arrays in JavaScript

## What is an Array?

An array is a single, ordered collection of multiple items, called elements, that are indexed by a numerical value. Arrays are used to store multiple values in a single variable, allowing for efficient access and manipulation of each element using its index.

## Array Declaration

In JavaScript, arrays can be declared in several ways:

1. *Literal Syntax*: The simplest and most common way to create an array.
let testTypes = ["Smoke", "Sanity", "Regression"];

2. *Constructor with Array Keyword*: Using the Array constructor to create an array.
let browsers = new Array("chrome", "firefox", "edge");

3. *Array Constructor with Single Length*: Creating an array with a predefined length.
let scores = new Array(10);  // Creates an array with 10 undefined items

## Array Methods

JavaScript arrays come with a number of built-in methods:

- push(): Adds one or more elements to the end of an array and returns the new length of the array.
- pop(): Removes the last element from an array and returns that element.
- shift(): Removes the first element from an array and returns that removed element.
- unshift(): Adds one or more elements to the beginning of an array and returns the new length.
- forEach(): Executes a provided function once for each array element.
- map(): Creates a new array populated with the results of calling a provided function on every element in the calling array.
- filter(): Creates a new array with all elements that pass the test implemented by the provided function.
- reduce(): Executes a reducer function on each element of the array, resulting in a single output value.