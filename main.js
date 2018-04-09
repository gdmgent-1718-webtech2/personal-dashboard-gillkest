// functie expressie om JSON-request via url uit te voeren
const getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
    var status = xhr.status;
    if (status === 200) {
    callback(null, xhr.response);
    } else {
    callback(status, xhr.response);
    }
    };
    xhr.send();
    };
    



//WEER APP

    getJSON('http://api.openweathermap.org/data/2.5/forecast?id=2791316&APPID=eb17e0464884648ea1afca46fc3782d5', function(error, data) {
        //DO MAGIC

        //convert kelvin to celsius
        let celsius = data.list[0].main.temp - 273.15;

        //fill div1
        document.getElementById("div1").innerHTML += 
        "<h2>" + "<img class='weerLogo' src='./afbeeldingen/" + data.list[0].weather[0].icon + ".png' width='50' height='50'>" + 
        celsius.toFixed(0) + "°C </h2>" +
        "<p> " + data.city.name + "</p>";
    });
    






//greeting function
    
    let d = new Date();
    let time = d.getHours();
    let time2 = addZero(d.getMinutes());

    function addZero(i) {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    }

    if (time < 11) 
      {
    document.getElementById("time").innerHTML = time + ":" + time2;
    document.getElementById("greeting").innerHTML ="Goeiemorgen Gilles!";
      }
      else if (time < 17) 
      {
    document.getElementById("time").innerHTML = time + ":" + time2;
    document.getElementById("greeting").innerHTML = "Goedemiddag Gilles!";
      }
    else if (time < 24) 
      {
    document.getElementById("time").innerHTML = time + ":" + time2;
    document.getElementById("greeting").innerHTML = "Goedenavond Gilles!";
      }
   





//NEWS
      const url = 'https://newsapi.org/v2/top-headlines?' +
      'country=us&' +
      'apiKey=eb0cf0ee062744be98d1b4d5b7c9eb9b';

      let req = new Request(url);
fetch(req)
.then((resp) => resp.json())
.then(function(data){
    document.getElementById("div2").innerHTML +="<h3> Het Nieuws </h3>";
    for (a = 0; a <= 2; a++) { 
    let article = data.articles[a];

    document.getElementById("div2").innerHTML += "<div id='bullet'>" + "<h5> " + 
                                            article.title + "</h5>" + "<small>" + 
                                            article.description + "</small>" + "</br> </div> </br>";
    }
})






//JOKE NORRIS footer
// get json data
const firstName = "Gilles'"
const lastName = "Dashboard"

const urlJoke = 'http://api.icndb.com/jokes/489?firstName=' + firstName + '&lastName=' + lastName;


getJSON(urlJoke, function(error, data){
    document.getElementById("joke").innerHTML = data.value.joke;

});
//CRYPTODATABASE
getJSON('https://api.coinmarketcap.com/v1/ticker/?convert=EUR&limit=3', function(error, data) {
        //DO MAGIC
    document.getElementById("div3").innerHTML +="<h3> Crypto </h3>";

    for (c = 0; c <= 2; c++) {
    document.getElementById("div3").innerHTML += 
    "<h4>" +  data[c].name + " (" + data[c].symbol + ")</h4> <p> €1 = " + data[c].price_eur  + "</br>" +
    data[c].percent_change_24h + " % </p>" 
    }
});

//DORSTIG WEER buiten

getJSON('https://www.thecocktaildb.com/api/json/v1/1/random.php', function(error, data) {
        //DO MAGIC

    document.getElementById("div4").innerHTML += "<div id='bullet'>" + 
    "<h3> Dorstig? </h3> <small> Probeer deze eens: </small>" + 
    "<h4 class='title'> '" + data.drinks[0].strDrink + "'</h4>" +
    "<img src=' " + data.drinks[0].strDrinkThumb + "' width='100%' height='100%'> </br></br> " +
    "<p>" + data.drinks[0].strIngredient1 + " </br>" + 
    data.drinks[0].strIngredient2 + "</br>" + 
    data.drinks[0].strIngredient3 + "</br>" + 
    data.drinks[0].strIngredient4 + "</br>" + 
    data.drinks[0].strIngredient5 + "</br>" + 
    data.drinks[0].strIngredient6 + "</br>" + 
    "<p>" + data.drinks[0].strInstructions + " </p> </div>"; 

});

//Random movie
const movName = "guardians of the galaxy";

const movUrl = 'http://www.omdbapi.com/?t=' + movName + "&apikey=f949adc0";

getJSON(movUrl, function(error, data){
    console.log(data);
    document.getElementById("div5").innerHTML += "<h3> Deze al gezien? </h3>" + 
    "<h4>" + data.Title + "</h4>" +
    "<img src=' " + data.Poster + "' width='100%'>" +
    "<small> By " + data.Director + ", " + data.Runtime + "</small>" +
    "<p> IMDB Score: " + data.imdbRating + "</br>" + data.Year + "</p>" +
    "<p> " + data.Plot + "</br> </br> Acteurs: " + data.Actors + 
    "</br></br> Opbrengts in de Box Office: " + data.BoxOffice;

});