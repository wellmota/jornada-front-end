const SUMMARY_ENDPOINT = "http://localhost:3000/summary"
const RESULTS_ENDPOINT = "http://localhost:3000/result"

// Bringing data from API
let isSummaryReady = false
let isResultsReady = false

async function fetchAPI(endpoint) {
    const response = await fetch(endpoint);
    const data = await response.json();
    return data
}

// Accessing DOM elements
const card = document.querySelector(".card")
const summaryListContainer = document.querySelector("#summary-list-container");
const resultContainer = document.querySelector("#result")
const score = resultContainer.querySelector('div h2')
const comparison = resultContainer.querySelector('.bottom span')

// Loader (to be fixed)

// const loaderSpin = `<div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>`
// const loaderContainer = document.querySelectorAll(".lds-ellipsis")

// const loaderDiv = document.createElement('div')
// document.body.append(loaderDiv);
// loaderDiv.innerHTML = loaderSpin

// function controlLoad(isSummaryReady,isResultsReady){
//   if(isSummaryReady && isResultsReady){
//     setTimeout(function () { // add a delay for loading
//       loaderDiv.classList.add('hide');
//       card.classList.remove('hide');
//     }, 3000)
//   }
// }

// Function to create the summary list
async function createSummaryList(){
  // Adding ending point data into a variable, detail here is add "await"
  const summaryResults = await fetchAPI(SUMMARY_ENDPOINT);
  // Navigation to each array of objects
  return summaryResults.forEach(function(result){
    // Creating html of each item
    summaryListContainer.innerHTML += `
    <div class="item category-${result.id} d-flex">
      <div class="col d-flex">
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
  const resultsScore = await fetchAPI(RESULTS_ENDPOINT)
  score.innerHTML = `${resultsScore.score}`
  comparison.innerHTML = `${resultsScore.performance_comparison}`
}

showResult()
createSummaryList();









