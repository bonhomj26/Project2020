// Answer the following questions after discussing with a partner.

/* 1. What does SVG stand for? How are they used with D3? */

/* 2. What is data binding? */

/* 3. Given the following and an HTML page with no elements currently in the body,
use the enter() pattern to render three <li> elements to the page with text matching
the integers in the array. */

var arr = [1, 2, 3];
var ul = d3.select("body").append("ul");
// YOUR CODE HERE//

// Create the virtual selection
var selection = ul.selectAll("li")
                  .data(arr) // bind the data
                  .enter() // placeholder space for data values that don't have elements yet
                  .append("li")// appends on <li> for each item in the array
                  // fill in the text for each of the item and return the data value
                  .text(d => d) 
                  // Line 21 is the same as lines 23-25:
                //   .text(function(d){
                //       return d;
                //   })

       

/* 4. Imagine three <li> elements already exist on the page.  Create code to update the text of those elements while also adding three new elements to match the array below. */
// Leave the number 3 code uncommented as it is needed for number 4 to work properly.
// var arr = [1, 1, 2, 3, 5, 8];
// var ul = d3.select("ul");
// YOUR CODE HERE //

// Using the merge method to append the data and then make new selection

// 1. Make the selection:
var selection = ul.selectAll("li")
                  .data(arr)
// 2. Append the data
selection.enter()
         .append("li")
         .merge(selection)
         // Now, do text to return the value
         .text(d => d)

/* Bonus - Refactor your solution to number 4 above using the ES6 syntax for arrow functions. Then, modify the code to set the text of each
element to "<index in the array>: <item from the array>" */
// Be sure to comment out your number 4 code (not the arr or ul variables) before running your bonus code.
// YOUR CODE HERE //
