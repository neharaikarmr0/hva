var button = document.querySelector(".submit");
var inputValue = document.querySelector(".search");
var name = document.querySelector(".city");
var temp = document.querySelector(".temp");
var humidity = document.querySelector(".humidity");
var description = document.querySelector(".description");
var wind = document.querySelector(".wind");

button.addEventListener("click", function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=928f9d9a81d8fb865b929fe9d1344bbc')
    .then(response=>response.json())
    .then(data=> {
        var nameValue= data['name'];
      var tempvalue = data['main']['temp'];
      var descValue = data['weather'][0]['description'];  
      var humValue = data['main']['humidity'];
      var windValue = data['wind']['speed'];

      
      description.innerHTML = "Description: "+descValue;
      temp.innerHTML = tempvalue + " °C";
      humidity.innerHTML = humValue + "%";
      wind.innerHTML  = windValue + "km/h";
      inputValue.value= "";
    })

.catch(err => alert("wrong city"))
})
