// Define SVG area dimensions
var svgWidth = 960;
var svgHeight = 660;

// Define the chart's margins as an object
var chartMargin = {
  top: 30,
  right: 30,
  bottom: 30,
  left: 30
};

// Define dimensions of the chart area

// Take the overall height and width of the SVG, subtract the margings
// from both left and right sides and top, and bottom to get the width and height.

// Calculate the actual width and heigth
var chartWidth = svgWidth - chartMargin.left - chartMargin.right;
var chartHeight = svgHeight - chartMargin.top - chartMargin.bottom;

// Select body, append SVG area to it, and set the dimensions

// Add SVG items to our space:
var svg = d3
  .select("body")
  .append("svg")
  .attr("height", svgHeight) // set attribute for height and weight
  .attr("width", svgWidth);

// Append a group to the SVG area and shift ('translate') it to the right and down to adhere
// to the margins set in the "chartMargin" object.

// Create the container for the chart
var chartGroup = svg.append("g") // "g" is a group... all the elements will contain within g.
  .attr("transform", `translate(${chartMargin.left}, ${chartMargin.top})`);

// Load data from hours-of-tv-watched.csv

// tvData is the variable that represents the entire dataset
d3.csv("hours-of-tv-watched.csv").then(function(tvData) {

  // Print the tvData
  console.log(tvData);

  // Cast the hours value to a number for each piece of tvData

  // Convert the hour value from a string back to a number
  tvData.forEach(function(data) {
    data.hours = +data.hours;
  });

  // Set up spacing 

  // Defining the shape of the bars

  var barSpacing = 10; // desired space between each bar
  var scaleY = 10; // 10x scale on rect height

  // Create a 'barWidth' variable so that the bar chart spans the entire chartWidth.
  var barWidth = (chartWidth - (barSpacing * (tvData.length - 1))) / tvData.length;

  // chartWidth = barWidth*numberofBars + barSpacing*(numberofBars-1)
  // barSpacing or padding is the gap between each bar

  // @TODO
  // Create code to build the bar chart using the tvData.
  chartGroup.selectAll("rect") 
  
  // We could also used "rect" instead of ".bar"
  // chartGroup.selectAll(".bar")
    .data(tvData)
    .enter() // Use a placeholder
    .append("rect") // append one rectangle for each of the data values
    .classed("bar", true) // set CSS class to bar. bar is defined in the css file
    .attr("width", d => barWidth) // set the attribute for x,y, and width. width is the bar width itself
    .attr("height", d => d.hours * scaleY) // the height comes from the data
    .attr("x", (d, i) => i * (barWidth + barSpacing)) // for x, we need to get both the data and the index value
    .attr("y", d => chartHeight - d.hours * scaleY);
}).catch(function(error) {
  console.log(error);
});
