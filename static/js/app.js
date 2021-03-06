// import the data from data.js
const tableData = data;

// Referent the HTML table using d3

var tbody = d3.select("tbody");

// function to build table
function buildTable(data) {

    // First, clear out any existing data
    tbody.html("");

    // next loop through each object in the data
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {

        // Append a row the the table body
        let row = tbody.append("tr");

        // Loop through each field in the dataRow and add
        // each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
            }
        );
    });
}

// function to filter the table by date
function handleClick() {
    
    // create variables to hold date data both filtered and unfiltered
    let date = d3/select("#datetime").property("value");

    // set a default filter and save it to a new variable
    let filteredData = tableData;

    // check to see if a date was entered and filter the 
    // data using that date.
    if (date) {
        
        // Apply 'filter' to the table data to only keep the
        // rows where the 'datetime' value matches the filter value
        filteredData = filteredData.filter(row => row.datetime === date);
    };

    // Rebuild the table using the filtered data
    // @NOTE If no date was entered, then filterData will
    // just be the original tableData.
    buildTable(filteredDate);
};

d3.selectAll("#filter-btn").on("click", handleClick);
