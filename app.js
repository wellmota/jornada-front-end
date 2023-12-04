const summaryEndpoint = "http://localhost:3000/summary"
const resultsEndpoint = "http://localhost:3000/result"

// Accessing dom elements
const summaryListContainer = document.querySelector("#summary-list-container");
const resultContainer = document.querySelector("#result")

// Bringing data from API
async function getSummary(){
  const response = await fetch(summaryEndpoint);
  const data = await response.json();
  return data
};

async function getResults(){
  const response = await fetch(resultsEndpoint);
  const data = await response.json();
  return data
  
};


// Function to create the summary list
async function createSummaryList(){
  // Adding ending point data into a variable, detail here is add "await"
  const summaryResults = await getSummary();
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
        <p>${result.score} <span>/ 100</span></p> 
      </div>
    </div>
  `
  })
};



async function showResult(){
  const resultsScore = await getResults()
  const score = resultContainer.querySelector('div h2')
  const comparison = resultContainer.querySelector('.bottom span')
  score.innerHTML = `${resultsScore.score}`
  comparison.innerHTML = `${resultsScore.performance_comparison}`
}

showResult()
createSummaryList();









