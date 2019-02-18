function getIssues() {
}

function showIssues(json) {
}

function createIssue() {
}

function showResults(json) {
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
  fetch(`/repos/${repo}/forks`,{
    method:"POST",
    headers:{
      Authorization:`token ${getToken()}`
    }
  })
  .then((response)=>response.json())
  .then(showResults);
}

function showResults(jsonResponse){
  const resultDiv=document.querySelector("#results");
  resultDiv.innerHTML=jsonResponse.html_url;
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return 'e14e3a67b5f77a6b5801606c3ad364a8e355fff7'
}
