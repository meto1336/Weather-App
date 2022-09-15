
    let weather = {
        apiKey: 'c026d4d627f8ce702228f47f3d2de872',
        fetchWeather: function(city){
            fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + this.apiKey)
            .then((response) => response.json())
            .then((data) => this.displayWeather(data))
        },
        displayWeather: function(data){
            const {name} = data
            if(data.weather === undefined){
                Swal.fire("the city does not exist","", 'error')
            }
            const {icon, description} = data.weather[0]
            const {temp, humidity} = data.main
            const {speed} = data.wind
            document.querySelector('.city').innerText = "Weather in " + name
            document.querySelector('.icon').src = "https://openweathermap.org/img/wn/" + icon + ".png"
            document.querySelector('.temp').innerText = Math.round(temp) + "°C"
            document.querySelector('.description').innerText = description
            document.querySelector('.humidity').innerText = "Humidity - " + humidity + " %"
            document.querySelector('.wind_speed').innerText = "Wind - " + speed + " km/h"
            //document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')";
            document.getElementById("image-container").style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')"
            
        },
        search: function(){
            this.fetchWeather(document.querySelector('.search-bar').value)
        }
        
        
    }

    document.querySelector('.search-button').addEventListener('click', function(){
        weather.search()
        
    })
    
    document.querySelector('.search-bar').addEventListener('keyup', function(event){
        if(event.key == "Enter"){
            weather.search()
        }
    })
    
    window.onload = (event) => {
        weather.fetchWeather('Berlin'),
        document.querySelector('.search-bar').value = ''
    };
  





