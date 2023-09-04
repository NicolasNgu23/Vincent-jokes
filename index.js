const btnEl = document.getElementById("btn")
const apiKey ="9FGWAQ8MG+1WVhT41fTsKw==chYTjoElcc8TPLCB";
const jokeEl = document.getElementById("joke")


const options ={
  method: "GET",
  headers: {
    "X-Api-key": apiKey,
  },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1"

  async function getJoke(){


    jokeEl.innerText ="Updating..."
    btnEl.disabled = true;
    btnEl.innerText ="Loading..."

    const response = await fetch(apiURL, options)
    const data = await response.json()

    btnEl.disabled = false;
    btnEl.innerText ="Tell me a joke"
    jokeEl.innerText = data[0].joke;
}

btnEl.addEventListener("click", getJoke);
