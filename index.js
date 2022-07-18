//Below is the url
const exURL = 'https://api.coinlore.net/api/tickers/?start=100&limit=20'
const cryptoUrl = 'https://api.coinlore.net/api/tickers/?start=0&limit=20'
const mainList = document.querySelector('#mainList')
const form = document.querySelector('form')
const content = document.querySelector('#content')
const buttons = document.querySelector('#buttons')
let start = 0

document.addEventListener('DOMContentLoaded',() => {
    fetchCrypto()
  //form.addEventListener('submit', (e) => {
   // e.preventDefault();
    //fetchCryto(e.target.number.value-1);
    //form.reset()
  //})
})

const fetchCrypto = () =>{
  fetch('https://api.coinlore.net/api/tickers/?start=0&limit=10')
  .then(response => response.json())
  .then(dat => dat.data)
  .then(cryptos => {
    cryptos.forEach(crypto => addToList(crypto))
    let nextButton = document.createElement('button')
    nextButton.className = 'butt2'
    nextButton.innerText = ' NEXT '
    let backButton = document.createElement('button')
    backButton.className = 'butt1'
    backButton.innerText = ' BACK '
    buttons.appendChild(backButton)
    buttons.appendChild(nextButton)
     nextButton.addEventListener('click', e => {
      mainList.innerHTML = ' '
      start +=10
      fetch(`https://api.coinlore.net/api/tickers/?start=${start}&limit=10`)
      .then(response => response.json())
      .then(dat => dat.data)
      .then(cryptos => cryptos.forEach(crypto => addToList(crypto)))
  })
  backButton.addEventListener('click', e => {
      if (start == 0){
          alert('Cannot Go Back')
          return
      }
      mainList.innerHTML = ' '
      start -=10
      fetch(`https://api.coinlore.net/api/tickers/?start=${start}&limit=10`)
      .then(response => response.json())
      .then(dat => dat.data)
      .then(cryptos => cryptos.forEach(crypto => addToList(crypto)))
  })})}
function addToList(crypto){
  //console.log(crypto)
  let card = document.createElement('ul')
  let form = document.createElement('form')
  form.innerHTML = `
  <label> Enter Your Comments:</label><br>
  <input type = 'text' id = 'comment' placeholder = 'Comment' value = ''>
  <input type="submit" value="Submit">
  `
  card.className = 'variable'
  card.innerHTML = ` ${crypto.symbol}`
  mainList.appendChild(card)
  card.addEventListener('click', e => {
    console.log(crypto)
    content.innerHTML = ''
    let card = document.createElement('ul')
    card.innerHTML = `
    <h5> Crypto Selected: [${crypto.symbol}] </h5>
    <p> Name: [${crypto.name}], Market Cap: [${crypto.market_cap_usd}],
      Perecent Change Last 24 hrs: [${crypto.percent_change_24h}], Price: [$${crypto.price_usd}],
      Rank in Cryptocurrency: [${crypto.rank}], Supply of Coin: [${crypto.tsupply}]
    </p>
    <p>Comments:                                </p>
    `
    content.appendChild(card)
    content.appendChild(form)
    form.addEventListener('submit', e => {
      e.preventDefault()
      let comment = document.createElement('li')
      comment.innerHTML = `<h4> ${(form.querySelector('#comment').value)} </h4>`
      card.appendChild(comment)
      form.querySelector('#comment').value = ''

    })
  })
}

/*
async function fetchCryto(rnk) {
  const response = await fetch(cryptoUrl);
  const dat = await response.json();
  debugger 
  const data = dat.data;
  const rank = dat.data[rnk].rank;
  const symbol = dat.data[rnk].symbol;
  const called = dat.data[rnk].name;
  const changeUSD = dat.data[rnk].percent_change_24h;
  const capUSD = dat.data[rnk].market_cap_usd;
  const priceUSD = dat.data[rnk].price_usd;
  let p = document.createElement('p')
  let btn = document.createElement('button')
  btn.addEventListener('click', deleteThis)
  btn.textContent = 'X'
  p.textContent = `- Crypto information loading... ${called}... Rank: ${rank}; Symbol: ${symbol}; Percent Change: ${changeUSD}; Market Cap: ${capUSD}; Price: $${priceUSD} `
  p.appendChild(btn)
  document.querySelector('#mainList').appendChild(p)
}
function deleteThis(e){
  e.target.parentNode.remove()
}*/


























/*
const animals = [
  {
      id: 2,
      type: "lion",
      name: "Nala",
  },
  {
      id: 1,
      type: "dog",
      name: "Olive",
  },
  {
      id: 3,
      type: "bear",
      name: "Honey",
  },
  {
      id: 5,
      type: "fish",
      name: "Dr. Fishy",
  },
  {
      id: 4,
      type: "cat",
      name: "Maru",
  },
];

//Using JavaScript only, finish the given event handler so that when the input is changed, the callback will *find* an animal object whose id corresponds with the number input's value. *If* found, the name and type of the found animal should be rendered to the given container using the renderAnimalDetails function, otherwise render an error with the provided renderNotFound function
 
const container = document.createElement("div")
const input = document.createElement("input")
input.type = "number"
input.min = 1
document.body.append(input, container)



input.addEventListener("change", (event) => {
  const found = animals.find(element => element = event.target.number)
    console.log(found)
    
})

const renderAnimalDetails = (animal) => {

}

const renderNotFound = () => {
  container.innerHTML = ""
  const pTag = document.createElement("p")
  pTag.innerText = "Animal Not Found"
  container.append(pTag)
}*/