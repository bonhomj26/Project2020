// Load data from hours-of-tv-watched.csv
d3.csv("./hours-of-tv-watched.csv").then(function(tvData) {

  console.log(tvData);

  // log a list of names
  var names = tvData.map(data => data.name);
  // Log each name
  console.log("names", names);

  // Cast each hours value in tvData as a number using the unary + operator
  // Importing the csv data
  tvData.forEach(function(data) {
    // Convert hours to a numerical value
    // + symbole is a unary operator that converts data.hours to a numerical type.
    data.hours = +data.hours;
    // Similarly, we could have done on line 16: data.hours = ParseInt(data.hours)
    console.log("Name:", data.name);
    console.log("Hours:", data.hours);
  });
}).catch(function(error) {
  console.log(error);
});
