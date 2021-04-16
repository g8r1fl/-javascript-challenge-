
// YOUR CODE HERE!
// from data.js
var tableData = data;

console.log("tableData", tableData);

// for now, hardcode a datetime

// tableData.forEach(function (item) {
//   console.log(item["datetime"]);
// });



// // next, let's build our js filter(s).
// let date = "1/7/2010";
// function dateCheck(arr) {
//   arr.forEach(item => {
//     if (arr.datetime === date) {
//       return arr.datetime;
//     }
//   })
// }
// var checkDate = tableData.filter(dateCheck);
// console.log(checkDate);
// var testDate = tableData.filter(dateCheck);
// date = "1/1/2020";
// var date = d3.select("#datetime").property("value");
// function dateCheck(arr) {
//   return arr.datetime === date;
// }
// // var testDate = tableData.filter(dateCheck)
// // console.log(testDate);

// var state = "ny";
// function stateCheck(arr) {
//   return arr.state === state;
// }
// var testState = tableData.filter(stateCheck);
// console.log(testState);

// var arrCombo = tableData.filter(rec => {
//   return rec.datetime === date;}).filter(rec => {
//     return rec.state === state;});
// console.log("This is my new date and state filter", arrCombo);
// // filter right? You only want elts with that date.
// tableData.filter((datum) => {
//   // optional: check if the datetime key exists
//   return datum.datetime === date;    //uFillThisIn // this is the guy u need to look at
//   console.log(datum.datetime === date);
// });

// // // YOUR CODE HERE!
// //build the table on html
// let filtered = tableData.filter(dateCheck);

const table = d3.select("tbody");

// tbody.html("");
//loop through filtered data rows to build table rows
function buildTable(arr) {
  // clear tables if any
  table.html("");
  
  arr.forEach(row => {
    const tr = table.append("tr");
    // var rowData = Object.values(row)
    Object.values(row).forEach(rec => {
      tr.append("td").text(rec);
    });
    console.log("Table built!");
  })

}


// var button = d3.select("button");
// var inputElement = d3.select("#datetime");
// var inputValue = inputElement.property("value");

function handleClick() {
  console.log("A button was clicked!");
  const date = d3.select("#datetime").property("value");
  console.log(date);
  let filtered = tableData;
  
  if (date) {
    filtered = filtered.filter(row => row.datetime === date)
  }
  buildTable(filtered);
  console.log("Filtered table built!");
}

buildTable(tableData);

d3.select("button").on("click", handleClick);
// d3.select("button").on("click", () =>
//   // filteredData.forEach((rec) => {
//   //   let tr = table.html("").append("tr");
//   //   tr.append("td").text(rec.datetime);
//   //   tr.append("td").text(rec.city);
//   // })
// );
// filtered.forEach(row => {
//   // clear out any tables existing
  
//   // Object.value(row).forEach(rec => {
//   //   console.log(rec.datetime);
//   // })
//   console.log(row.datetime);
//   console.log(row.city);
//   console.log(row.state);


//   //loop through each element in the row and add the data
//   //add a row
//   // const tr = table.append("tr");
  
//   // Object.value(row).forEach(rec => {
//   //   console.log(rec);
//   // })
// });


// let filteredData = tableData.slice(0, 10);

// let table = d3.select("tbody");

// tableData.forEach((rec) => {
//   let tr = table.append("tr");
//   tr.append("td").text(rec.datetime);
//   tr.append("td").text(rec.state);
// });

// d3.select("button").on("click", () =>
//   filteredData.forEach((rec) => {
//     let tr = table.html("").append("tr");
//     tr.append("td").text(rec.datetime);
//     tr.append("td").text(rec.city);
//   })
// );


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