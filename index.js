//Below is the url
const exURL = 'https://api.coinlore.net/api/tickers/?start=100&limit=20'
const cryptoUrl = 'https://api.coinlore.net/api/tickers/?start=0&limit=20'
const mainList = document.querySelector('#mainList')
const form = document.querySelector('form')
const content = document.querySelector('#content')
const buttons = document.querySelector('#buttons')
let start = 0
let count = document.querySelector('#count')
const comments = document.querySelector('#comments')

document.addEventListener('DOMContentLoaded',() => {
    fetchCrypto()
})

const fetchCrypto = () =>{
  fetch(`https://api.coinlore.net/api/tickers/?start=${start}&limit=10`)
  .then(response => response.json())
  .then(dat => dat.data)
  .then(cryptos => {
    count.innerText = ` Displaying Cryptocurrencies Rank ${start} to ${start + 10}`
    cryptos.forEach(crypto => addToList(crypto))
    let nextFityButton = document.createElement('button')
    nextFityButton.className = 'butt2'
    nextFityButton.innerText = ' NEXT [50] '
    let nextButton = document.createElement('button')
    nextButton.className = 'butt2'
    nextButton.innerText = ' NEXT '
    let backButton = document.createElement('button')
    backButton.className = 'butt1'
    backButton.innerText = ' BACK '
    let backFityButton = document.createElement('button')
    backFityButton.className = 'butt1'
    backFityButton.innerText = ' BACK [50] '
    buttons.appendChild(backFityButton)
    buttons.appendChild(backButton)
    buttons.appendChild(nextFityButton)
    buttons.appendChild(nextButton)
     nextButton.addEventListener('click', e => {
      mainList.innerHTML = ' '
      start +=10
      fetch(`https://api.coinlore.net/api/tickers/?start=${start}&limit=10`)
      .then(response => response.json())
      .then(dat => dat.data)
      .then(cryptos => cryptos.forEach(crypto => addToList(crypto)))
  })
  nextFityButton.addEventListener('click', e => {
    mainList.innerHTML = ' '
    start +=50
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
  })
  backFityButton.addEventListener('click', e => {
    if (start <= 49){
        alert('Cannot Go Back')
        return
    }
    mainList.innerHTML = ' '
    start -=50
    fetch(`https://api.coinlore.net/api/tickers/?start=${start}&limit=10`)
    .then(response => response.json())
    .then(dat => dat.data)
    .then(cryptos => cryptos.forEach(crypto => addToList(crypto)))
})
  fillContent(cryptos[0])
})}
function addToList(crypto){
  //console.log(crypto)
  count.innerText = ` Displaying Cryptocurrencies Rank ${start} to ${start + 10}`
  let card = document.createElement('ul')
  card.className = 'variable'
  card.innerHTML = ` ${crypto.symbol}`
  mainList.appendChild(card)
  card.addEventListener('click', e => {
    fillContent(crypto)
  })
}
const fillContent = (crypto) => {
  console.log(crypto)
  let form = document.createElement('form')
  form.innerHTML = `
  <label> Enter Your Comments:</label><br>
  <input type = 'text' id = 'comment' placeholder = 'Comment' value = ''>
  <input type="submit" value="Submit">
  `
    content.innerHTML = ''
    let card = document.createElement('ul')
    card.innerHTML = `
    <h5> Stats Of [${crypto.symbol}]: </h5>
    <p> Name: [${crypto.name}], Market Cap: [${crypto.market_cap_usd}],
      Perecent Change Last 24 hrs: [${crypto.percent_change_24h}], Price: [$${crypto.price_usd}],
      Rank in Cryptocurrency: [${crypto.rank}], Supply of Coin: [${crypto.tsupply}]
    </p>
    <p>Comments:                                </p>
    <button id = 'delBut' class = 'butt2'> -- Delete All Comments -- </button> 
    `
    content.appendChild(card)
    content.appendChild(form)
    document.querySelector('#delBut').disabled = true
    document.querySelector('#delBut').style.opacity = "0"
    form.addEventListener('submit', e => {
      e.preventDefault()
      document.querySelector('#delBut').disabled = false
      document.querySelector('#delBut').style.opacity = "1"
      let comment = document.createElement('ul')
      comment.innerHTML = `<h4> - ${(form.querySelector('#comment').value)} </h4>`
      card.appendChild(comment)
      document.querySelector('#delBut').addEventListener('click', e =>{
          card.removeChild(comment)
          document.querySelector('#delBut').style.opacity = "0"
      })
        form.querySelector('#comment').value = ''
      
    })
}