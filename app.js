const SUMMARY_ENDPOINT = "http://localhost:3000/summary"
const RESULTS_ENDPOINT = "http://localhost:3000/result"

// Bringing data from API


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

// let isSummaryReady = fetchAPI(SUMMARY_ENDPOINT);
// let isResultsReady = fetchAPI(RESULTS_ENDPOINT);

const loaderSpin = `<div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>`
const loaderContainer = document.querySelectorAll(".lds-ellipsis")

const loaderDiv = document.createElement('div')
document.body.append(loaderDiv);
loaderDiv.innerHTML = loaderSpin

// function controlLoad(isSummaryReady,isResultsReady){
//   if(isSummaryReady && isResultsReady){
//     setTimeout (() => { // add a delay for loading
//       loaderDiv.classList.add('hide');
//       card.classList.remove('hide');
//     }, 3000)
//   }
// }



// teste






// fim do teste




// Function to create the summary list
async function createSummaryList(){
  // Adding ending point data into a variable, detail here is add "await"
  const summaryResults = await fetchAPI(SUMMARY_ENDPOINT);
  // Navigation to each array of objects
  return summaryResults.forEach (result => {
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
  score.innerHTML = resultsScore.score
  comparison.innerHTML = resultsScore.performance_comparison
}

async function controlLoad() {
  try {
      const [summaryResponse, resultsResponse] = await Promise.all([
          fetchAPI(SUMMARY_ENDPOINT),
          fetchAPI(RESULTS_ENDPOINT)
      ]);
      if (summaryResponse && resultsResponse) {

          await new Promise(resolve => setTimeout(resolve, 3000));
          // Hide the loader and show the card
          loaderDiv.classList.add('hide');
          card.classList.remove('hide');
      } 
  } catch (error) {
      console.error('Error:', error);
  }
}

controlLoad();
showResult()
createSummaryList();









