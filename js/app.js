const SUMMARY_ENDPOINT = "http://localhost:3000/summary";
const RESULTS_ENDPOINT = "http://localhost:3000/result";

// Bringing data from API
async function fetchAPI(endpoint) {
  const response = await fetch(endpoint);
  const data = await response.json();
  return data;
}

// Method to resolve all promise and add it to a object
Promise.all([fetchAPI(SUMMARY_ENDPOINT), fetchAPI(RESULTS_ENDPOINT)]).then(
  ([summaryResponse, resultsResponse]) => {
    createSummaryList(summaryResponse);
    showResult(resultsResponse);
    loaderDiv.remove(); // remove loader from DOM
    card.classList.remove("hide"); // remove hide class from page
  }
);

//Loader
const loaderSpin = `<div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>`;
const loaderContainer = document.querySelectorAll(".lds-ellipsis");gi
const loaderDiv = document.createElement("div");
document.body.append(loaderDiv);
loaderDiv.innerHTML = loaderSpin;

// Accessing DOM elements
const card = document.querySelector(".card");
const summaryListContainer = document.querySelector("#summary-list-container");
const resultContainer = document.querySelector("#result");
const score = resultContainer.querySelector("div h2");
const comparison = resultContainer.querySelector(".bottom span");

// Function to create the summary list
function createSummaryList(summaryResponse) {
  return summaryResponse.forEach((result) => {
    // Creating html of each item
    summaryListContainer.innerHTML += `
    <div class="item category-${result.id} d-flex">
      <div class="col d-flex">
        <span class="icon-icon-${result.id}"></span>
        <p>${
          result.id.substring(0, 1).toUpperCase() + result.id.substring(1)
        }</p>
      </div>
      <div class="col">
        <p>${result.score} <span>/ 100</span></p> 
      </div>
    </div>
  `;
  });
}

function showResult(resultsResponse) {
  score.innerHTML = resultsResponse.score;
  comparison.innerHTML = resultsResponse.performance_comparison;
}
