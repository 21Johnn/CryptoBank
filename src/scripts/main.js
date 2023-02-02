// aos


// accordion
const headers = document.querySelectorAll('.accordion__item__header');
headers.forEach(header => {
    header.addEventListener('click', function() {
        console.log('Funcionou')
    const content = this.nextElementSibling;
    if(content.classList.contains("open")) {
        content.style.height = "0";
        content.classList.remove("open");
        header.classList.remove("open");
    } else {
        headers.forEach(otherHeader => {
        otherHeader.nextElementSibling.style.height = "0";
        otherHeader.nextElementSibling.classList.remove("open");
        otherHeader.classList.remove("open");
    });
        content.style.height = "auto";
        content.classList.add("open");
        header.classList.add("open");
    }
    });
});


// bitcoin

var priceContainer = document.getElementById('value');
var btn = document.getElementById('btn');
let selectCurrency = document.getElementById('selected').value
let close = document.getElementById('close');

window.addEventListener('DOMContentLoaded', function(){
    let url = 'https://api.coindesk.com/v1/bpi/currentprice.json';
    let url2 = 'http://economia.awesomeapi.com.br/json/last/USD-BRL'

    if (selectCurrency == 'USD'){
        fetch(url)
        .then(function(response){
            return response.json();
        })
        .then(function(json){

            priceContainer.innerHTML = priceContainer.innerHTML = json.bpi.USD.symbol+json.bpi.USD.rate;
        })
    } else if (selectCurrency == 'BRL'){
        fetch(url2)
        .then(function(res){
            return res.json();
        })
        .then(function(json1){
            console.log(json1)

        fetch(url)
        .then(function(response){
            return response.json();
        })
        .then(function(json){
            priceInUSD = json.bpi.USD.rate;
            priceInBRL = "R$ " + (parseFloat(json1.USDBRL.bid) * parseFloat(priceInUSD)) + ",00";
            console.log(priceInBRL)
            
            priceContainer.innerHTML = priceInBRL
        })

        })
    }
})


btn.addEventListener('click', function(){

    console.log('clicou')
    let selectCurrency = document.getElementById('selected').value
    let url = 'https://api.coindesk.com/v1/bpi/currentprice.json';
    let url2 = 'http://economia.awesomeapi.com.br/json/last/USD-BRL'

    if (selectCurrency == 'USD'){
        fetch(url)
        .then(function(response){
            return response.json();
        })
        .then(function(json){

            priceContainer.innerHTML = json.bpi.USD.symbol+json.bpi.USD.rate;
        })
    } else if (selectCurrency == 'BRL'){
        fetch(url2)
        .then(function(res){
            return res.json();
        })
        .then(function(json1){
            console.log(json1)

        fetch(url)
        .then(function(response){
            return response.json();
        })
        .then(function(json){
            priceInUSD = json.bpi.USD.rate;
            cents = parseInt(Math.random() * 110)
            priceInBRL = "R$ " + (parseFloat(json1.USDBRL.bid) * parseFloat(priceInUSD)).toFixed(3) + "," + cents;
            
            priceContainer.innerHTML = priceInBRL
        })

        })
    }
})

close.addEventListener('click', function(){
    let container = document.getElementById('bitcoin');

    container.classList.add('hidden');
})

document.addEventListener('DOMContentLoaded', function(){
    let container = document.getElementById('bitcoin');

    console.log("Carregou")
    setTimeout(() => {
        container.classList.remove('hidden');
    }, 7000)
})


// login

const loginBtn = document.getElementById('connect');
const modal = document.getElementById('modal');
const containerLogin = document.getElementById('login')

loginBtn.addEventListener('click', function(){
    containerLogin.classList.add('openLogin');
    modal.style.display = 'block';
})

modal.addEventListener('click', function(){
    modal.style.display = 'none';
    containerLogin.classList.remove('openLogin');
})


// theme 
const changeThemeBtn = document.querySelector("#change-theme");

function toggleLightMode(){
    document.body.classList.toggle("light");
};

function loadTheme(){
    const lightMode = localStorage.getItem("light")

    if(lightMode){
        toggleLightMode();
    }
}

loadTheme();

changeThemeBtn.addEventListener("change", function(){
    document.body.classList.toggle("light");

    localStorage.removeItem("light");

    if(document.body.classList.contains("light")){
        localStorage.setItem("light", 1);
    }

}
);


