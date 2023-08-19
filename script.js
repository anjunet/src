   let now = new Date();

      let h3 = document.querySelector("h3");
      let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
      let day = days[now.getDay()];
      let hour = now.getHours();
      let minutes = now.getMinutes();
      minutes = minutes <= 9 ? '0' + minutes : minutes;

      h3.innerHTML = `${day} ${hour}:${minutes}`



    
    
    function search(event) {
        event.preventDefault();
        let cityElement = document.querySelector("#city");
        let cityInput = document.querySelector("#city-input");
        let city = "Pretoria"
        let apiKey = "c98e5962850d9315bbc1028ffdfca997";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        

        cityElement.innerHTML = cityInput.value;

      }

      
    

  

  


  
