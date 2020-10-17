// Assign the data from `data.js` to a descriptive variable
// Select the button
// Select the form

let ufoSightings = data;
    button = d3.select("#button"),
    form = d3.select("#form");

console.log(ufoSightings)

const tbody = d3.select("tbody");

// Populate html table with the UFO Sighting data
ufoSightings.forEach(ufoSighting => {
    let row = tbody.append("tr");
    Object.values(ufoSighting).forEach(value => {
        let cell = row.append("td");
        cell.text(value);
    });
});

// Complete the event handler function for the form
const runEnter = () => {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    // Get the value property of the input element
    let inputElement = d3.select("#datetime"),
        inputValue = inputElement.property("value");

    let filteredData = ufoSightings.filter(sighting => sighting.datetime === inputValue)
    
    console.log(filteredData)

    const tbody = d3.select("tbody");

    // Clear existing table
    tbody.html("");

    filteredData.forEach(ufoSighting => {
        let row = tbody.append("tr");
        Object.values(ufoSighting).forEach(value => {
            let cell = row.append("td");
            cell.text(value);
        });
    });
    
}
  
// Create event handlers
button.on("click", runEnter);
form.on("submit", runEnter);
