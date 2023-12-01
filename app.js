const endpoint = "http://localhost:3000/summary"
  
const summaryListContainer = document.querySelector("#summary-list-container");
// Bringing data from API
async function getSummaryResults(){
  const response = await fetch(endpoint);
  const data = await response.json();
  return data
};


async function createSummaryList(){
  // Adding ending point data into a variable, detail here is add "await"
  const summaryResults = await getSummaryResults();
  // Navigation to each array of objects
  return summaryResults.forEach(function(result){
    // Creating html of each item
    summaryListContainer.innerHTML += `
    <div class="item category-${result.id} d-flex">
      <div class="col d-flex" >
        <span class="icon-icon-${result.id}"></span>
        <p>${result.id.substring(0,1).toUpperCase()+result.id.substring(1)}</p>
      </div>
      <div class="col">
        <p>${result.score}<span>/100</span></p>  
      </div>
    </div>
  `
    console.log(result);
  })
};

createSummaryList();









