
// YOUR CODE HERE!
// from data.js
var tableData = data;

console.log("tableData", tableData);

// for now, hardcode a datetime

// tableData.forEach(function (item) {
//   console.log(item["datetime"]);
// });

//build the table on html
let filtered = tableData.slice(0,10);

let table = d3.select("tbody");

// tbody.html("");

filtered.forEach(row => {
  table.html("");
  let tr = table.append("tr");
  tr.append("td").text(row.datetime);
  tr.append("td").text(row.city);
  tr.append("td").text(row.state);
  tr.append("td").text(row.country);
  tr.append("td").text(row.shape);
  tr.append("td").text(row.duration);
  tr.append("td").text(row.comments);
});

// // next, let's build our js filter(s).
// let date = "1/7/2010";
// function dateCheck(arr) {
//   arr.forEach(item => {
//     if (arr.datetime === date) {
//       return arr.datetime;
//     }
//   })
// }

// var testDate = tableData.filter(dateCheck);
var date = "1/1/2010"
function dateCheck(thing) {
  return thing.datetime === date;
}
var testDate = tableData.filter(dateCheck)
console.log(testDate);

var state = "ca"
function stateCheck(thing) {
  return thing.state === state;
}
var testState = tableData.filter(stateCheck);
console.log(testState);

var arrCombo = tableData.filter(rec => {
  return rec.datetime === date;}).filter(rec => {
    return rec.state === state;});
console.log("This is my new date and state filter", arrCombo);
// // filter right? You only want elts with that date.
// tableData.filter((datum) => {
//   // optional: check if the datetime key exists
//   return datum.datetime === date;    //uFillThisIn // this is the guy u need to look at
//   console.log(datum.datetime === date);
// });

// // YOUR CODE HERE!
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