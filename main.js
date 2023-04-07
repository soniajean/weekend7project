let button = document.querySelector('.button')
let inputValue = document.querySelector('.inputValue')
let name = document.querySelector('.name');
let desc = document.querySelector('.desc');
let temp = document.querySelector('.temp');
let high = document.querySelector('.high');
let low = document.querySelector('.low');
let humidity= document.querySelector('.humidity');

button.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=9ca657226dd9fb54ae057523c8f6f050')
    .then(response => response.json())
    .then(data => {
        let nameValue = data['name'];
        let tempValue = data['main']['temp'];
        let descValue = data['weather'][0]['description'];
        let highValue = data['main']['temp_max'];
        let lowValue = data['main']['temp_min'];
        let humidityValue = ['main']['humidity'];

        name.innerHTML = nameValue;
        temp.innerHTML = tempValue;
        desc.innerHTML = descValue;
        high.innerHTML = highValue;
        low.innerHTML = lowValue;
        humidity.innerHTML = humidityValue;
})


// .catch(err => alert("wrong city name!"))
})