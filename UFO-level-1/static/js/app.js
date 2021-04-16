
// YOUR CODE HERE!
// from data.js
var tableData = data; //why const vs var or let?

//get table reference
const table = d3.select("tbody");//why const vs var or let?

//loop through filtered data rows to build table rows
function buildTable(arr) {
  // clear tables if any
  table.html("");
  // loop through array and insert table row
  arr.forEach(row => {
    const tr = table.append("tr");//why const vs var or let?
    // var rowData = Object.values(row)
    // loop through elements in each row and add table data
    Object.values(row).forEach(rec => {
      tr.append("td").text(rec);
      }
    );
    
  });

}

// create function to handle click

function handleClick() {
  // grab the date input in the form
  const date = d3.select("#datetime").property("value");//why const vs var or let?
  // refer to the original array
  let filtered = tableData;
  // check if input date exists in array
  if (date) {
    filtered = filtered.filter(row => row.datetime === date);
  }
  // build filtered table
  buildTable(filtered);
  
}

// handle click 
d3.select("button").on("click", handleClick);

// preload table
buildTable(tableData);





// for bonus

//arr1 = arr.filter(dt...)
//arr2 = arr1.filter(city === to city)
//arr3 = arr2.filter(state === ...)

// can also try to chain them
//arr1 = arr.filter(dt...).filter(city...)
// in the starterCode folder where Index is, activate conda and
// type python -m http.server
// this will create a server and click on the link and it will open
// the html file.  This is alternative for liveserver