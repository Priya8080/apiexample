 function getDog() {
      fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then(data => {
          document.getElementById("dogImage").src = data.message;
        });
    }

    function getCat(){
        fetch("https://api.thecatapi.com/v1/images/search")
        .then(response => response.json())
        .then(data => {
            document.getElementById("catImage").src = data[0].url;      
        })
    }
    
    function getJoke() {
      // 1. API se data fetch karo
      fetch("https://official-joke-api.appspot.com/random_joke")
        .then(response => response.json()) // 2. JSON format mein convert karo
        .then(data => {
          // 3. Joke ka setup aur punchline dikhana
          document.getElementById("joke").innerHTML =
            "<strong>" + data.setup + "</strong><br>" + data.punchline;
        });
    }