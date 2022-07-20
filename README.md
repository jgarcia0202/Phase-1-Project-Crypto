# Crypto-Information-Grabber

Description:
 Features
    - Lists first 10 cryptocurrencies as blocks
    - Shows the content information of the first cryptocurrency on opening to show user what content is provided
    - Has 4 buttons, a back button that retrieves the previous 10 cryptocurrencies from the apis and a next button that retrieves the next 10 cryptocurrencies. Also has a next 50 and back 50 which does as the previous 2 buttons but instead of 10 it gets the next/previous 50 cryptocurrencies from the apis. Be aware that if the fetch is at the beggining of the api it will alert the user when pressing the back button and if they are at cryptocurrency 50 the alert will show up again
    - Welcomes the user on opening website
    - When button is pressed it shows name, market cap, perecentage change, the rank, and the supply of it
    -Allows the user to post a comment to the website when submitted
    - When back, back 50, next, or next 50 button is pressed removes previous 10 cryptocurrenct and displays new 10
    - Shows user what number rank cryptocurrencies they are looking at
    - Delete button, when pressed if any comments are present it will remove them and if there are none then an alert is sent saying there are no comments

Usage:
    This can be used to get information on cryto currencies that are up to date. The user is also able to skip 50 and go back 50 so no need to press back or next 5 times.

Acknowledgement:
    Used pictures of Bitcoin and Ethereum from these 2 websites. Used color from adobe that provided crypto friendly colors. Also used a crypto api to retrieve all the information
      Bitcoin  [https://bitcoin.org/img/icons/opengraph.png?1657703267]
      Ethereum  [[https://upload.wikimedia.org/wikipedia/commons/0/01/Ethereum_logo_translucent.svg]
      API   [https://api.coinlore.net/api/tickers/?start=0&limit=20]
      Colors    [https://color.adobe.com/create/color-wheel]
    

  I have included a few little designs to the website to make it seem more interesting and to give the website more character such as bundle of dollars and the thumbs up. Once the cyrpto currency is chosen then the website would append the chosen coin to the document and would also include a small button next to it which contains a x. The website uses 3 seperate event listeners, 1st is a DOMContentLoaded, 2nd is a submit, and the last one is a click event. The dom content loaded sets up the website with the other event listeners and their contents. The submit event takes whatever number the user entered and finds the crypto coin that matches it and takes the information of that coin and appends it to the document. The click event is used to clear the selected crypto coin if the user no longer needs that coin, it is activated with the x button. This website is used to give the user information on current crypto information and let the user see it and it can even be used to compare different coins by adding more with the submit form. The user is able to see as many coins as theyd like and even remove the ones they no longer need.