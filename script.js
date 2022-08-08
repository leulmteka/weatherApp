let search = document.querySelector("#input")
let pic = document.querySelector("#image")
let firstDay = document.querySelector("#first")
let secondDay = document.querySelector("#second")
let form = document.querySelector("#form")
let display = document.querySelector("#display")
let tomorrow = document.querySelector("#tomorrow")
let forecastDrop = document.querySelector("#forecastDrop")
let forecast = document.querySelector("#forecast")
let thirdDay = document.querySelector("#third")
let fourthDay = document.querySelector("#fourth")
let fifthDay = document.querySelector("#fifth")
let sixthDay = document.querySelector("#sixth")
const revert = document.querySelector("#goBack")





form.addEventListener("submit", async (e) => { //temps
  e.preventDefault();
  let key = "1468521872524057ac5141029220108"
  let place = search.value

  let myQuery = `https://api.weatherapi.com/v1/search.json?key=${key}&q=${place}` //getting api
  let searchResponse = await fetch(myQuery)
  let searchJson = await searchResponse.json()
  let city = searchJson[0].name

  currentWeather = `https://api.weatherapi.com/v1/current.json?key=${key}&q=${city}`
  let currentResponse = await fetch(currentWeather)
  let currentJson = await currentResponse.json()

  forecastWeather = `https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${city}&days=5`
  let forecastResponse = await fetch(forecastWeather)
  let forecastJson = await forecastResponse.json()

  autoC = `https://api.weatherapi.com/v1/search.json?key=${key}`
  let autoResponse = await fetch(autoC)
  let autoCJson = await autoResponse.json()

  console.log(myQuery)
  console.log(searchResponse)
  console.log(searchJson)
  console.log(city)

  console.log(currentWeather)
  console.log(currentResponse)
  console.log(currentJson)

  console.log(forecastWeather)
  console.log(forecastResponse)
  console.log(forecastJson)

  console.log(autoCJson)

  search.value = ""

  firstDay.innerHTML = `<center><figure><img src="${forecastJson.current.condition.icon}"</figure></center>` + forecastJson.current.feelslike_f + "°" + "<br>" + forecastJson.current.condition.text
  secondDay.innerHTML = `<center><figure><img src="${forecastJson.current.condition.icon}"</figure></center>` + forecastJson.current.feelslike_c + "°" + "<br>" + forecastJson.current.condition.text


  display.innerHTML = `<div><center><b>${currentJson.location.name}, ${currentJson.location.region}, ${currentJson.location.country}</b></center></div><br> <center><b>${forecastJson.forecast.forecastday[0].date}</b></center>`


  // pic.innerHTML = `<img src="currentJson.current.condition.icon"/>`
  console.log(forecastJson.forecast.forecastday[1].date)

  for (i = 1; i < forecastJson.forecast.forecastday.length; i++) {
    console.log(forecastJson.forecast.forecastday[i].date)
    const td = document.querySelector("#date" + i)
    td.innerHTML = forecastJson.forecast.forecastday[i].date

    const button = document.querySelector("#button" + i)
    const index = i
    console.log(index)
    button.addEventListener("click", () => {
      firstDay.innerHTML = `<center><figure><img src="${forecastJson.forecast.forecastday[index].day.condition.icon}"</figure></center>` + forecastJson.forecast.forecastday[index].day.avgtemp_f + "°" + "<br>" + forecastJson.forecast.forecastday[index].day.condition.text
    secondDay.innerHTML = `<center><figure><img src="${forecastJson.forecast.forecastday[index].day.condition.icon}"</figure></center>` + forecastJson.forecast.forecastday[index].day.avgtemp_c + "°" + "<br>" + forecastJson.forecast.forecastday[index].day.condition.text
    console.log(index)
      display.innerHTML = `<div><center><b>${currentJson.location.name}, ${currentJson.location.region}, ${currentJson.location.country}</b></center></div> <br> <center><b>${forecastJson.forecast.forecastday[index].date}</b></center>`
      
    })
    revert.addEventListener("click" , () =>{
      firstDay.innerHTML = `<center><figure><img src="${forecastJson.current.condition.icon}"</figure></center>` + forecastJson.current.feelslike_f + "°" + "<br>" + forecastJson.current.condition.text
  secondDay.innerHTML = `<center><figure><img src="${forecastJson.current.condition.icon}"</figure></center>` + forecastJson.current.feelslike_c + "°" + "<br>" + forecastJson.current.condition.text
console.log("Current weather showing")
      display.innerHTML = `<div><center><b>${currentJson.location.name}, ${currentJson.location.region}, ${currentJson.location.country}</b></center></div><br> <center>${forecastJson.forecast.forecastday[0].date}</center>`
    })
    
  }
})

let dropdown = false
function forecastDropdown() {
  if (dropdown == false) {
    forecast.classList.remove("hidden")
    dropdown = true
  } else if (dropdown == true) {
    forecast.classList.add("hidden")
    dropdown = false
  }
}

let isDarkMode = false;
function getBulmaUrl() {
  let theme;
  if (isDarkMode) {
    theme = 'darkly'
  } else {
    theme = 'flatly'
  }
  return `https://unpkg.com/bulmaswatch/${theme}/bulmaswatch.min.css`
}
let icon = document.querySelector("#icon")
let test = false
function myFunction() {
  isDarkMode = !isDarkMode;
  var bulmaTag = document.querySelector("#bulma-css");
  bulmaTag.setAttribute('href', getBulmaUrl());
  if (icon.innerHTML == `<img src="https://t3.ftcdn.net/jpg/01/65/47/92/360_F_165479250_xhiSVoJOhKS9BbptDqqVv39YotMi3hGq.jpg">`) {
    icon.innerHTML = `<img src="https://cdn.pixabay.com/photo/2016/03/31/18/14/icon-1294224__480.png">`
    console.log("yes")
    test = true
  }
  else if (test == true) {
    icon.innerHTML = `<img src="https://t3.ftcdn.net/jpg/01/65/47/92/360_F_165479250_xhiSVoJOhKS9BbptDqqVv39YotMi3hGq.jpg">`
    console.log('hi')
    test = false
  }




}


