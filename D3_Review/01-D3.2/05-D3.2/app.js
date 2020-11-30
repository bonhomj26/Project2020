// data
var dataArray = [1, 2, 3];
var dataCategories = ["one", "two", "three"];

// svg container
// Define Height and Width of the canvas
var svgHeight = 400;
var svgWidth = 1000;

// margins
var margin = {
    top: 50,
    right: 50,
    bottom: 50, 
    left: 50
};

// Define the chart area
// Chart area - margins
var chartHeight = svgHeight - margin.top - margin.bottom;
var chartWidth = svgWidth - margin.left - margin.right;

// Create svg container
var svg = d3.select("#svg-area")
            .append("svg")
            .attr("height", svgHeight)
            .attr("width", svgWidth);

// Shift everything over by the margins
var chartGroup = svg.append("g")
                    .attr("transform", `translate(${margin.left}, ${margin.top})`);

// Scale y to chart height
var yScale = d3.scaleLinear()
               .domain([0, d3.max(dataArray)])
               .range([chartHeight, 0]);

// Scale X to chart width
var xScale = d3.scaleBand()
               .domain(dataCategories)
               .range([0, chartWidth])
               .padding(0.05);

// Create Axes
var yAxis = d3.axisLeft(yScale);
var xAxis = d3.axisBottom(xScale);

// Set X to the bottom of the chart
chartGroup.append("g")
          .attr("transform", `translate(0, ${chartHeight})`)
          .call(xAxis);

// Set Y to the y axis
// This syntax allows us to call the axis function
// and pass in the selector without breaking the chaining

 chartGroup.append("g")
           .call(yAxis);

/*Note: The above code(lines 57-58) is equivalent to this:
    var g = chartGroup.append("g");
    yAxis(g);
*/

//Append Data to chartGroup
chartGroup.selectAll(".bar")
          .data(dataArray)
          .enter()
          .append("rect")
          .classed("bar", true)
          .attr("x", (d, i) => xScale(dataCategories[i]))
          .attr("y", d => yScale(d))
          .attr("width", xScale.bandwidth())
          .attr("height", d => chartHeight - yScale(d));