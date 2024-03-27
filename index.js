const api_url ="https://api.quotable.io/random"
const quote = document.getElementById("quote")
const author = document.getElementById("author")

async function getquote(url){
  const response = await fetch (url);
  let data = await response.json()
  quote.innerHTML =  data.content
  author.innerHTML = data.author
}
function tweet(){
 window.open("https://twitter.com/share?url=" + quote.innerHTML + "  --- by " + author.innerHTML , "Tweet Window", )
}
getquote(api_url)