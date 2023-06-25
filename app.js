
let image = document.querySelector('#image');
let title = document.querySelector('.card-text');
let language = document.querySelector('.card-language');
let capital = document.querySelector('.card-capital');
let continent = document.querySelector('.card-continent');
let detail = document.querySelector('.card-desc');
let btn = document.querySelector('.btn');
let card = document.querySelector('.card');

btn.addEventListener('click',displayHandler )

function displayHandler(){

function uiCreation(data){
console.log(data)

image.src = data.flags.png;
title.textContent = `Country Name: ${data.name.common}`;
continent.textContent = `Continent: ${data.region}`;
language.textContent = `Language: ${data.languages.deu}`;
capital.textContent = `Capital: ${data.capital[0]}`
detail.textContent = `
Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, voluptates accusamus corrupti numquam tenetur perferendis temporibus magni doloribus quaerat velit?`

btn.style.display = "none"
card.style.display = "block"
}


function whereAmI(lat,lng) {
fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
.then((resp)=> {
    // console.log(resp)
    if(!resp.ok){
        throw new Error("sorry your code were stuck")
    }else{

        return resp.json()
    }
}).then((data)=>{
    console.log(data)
   return fetch(`https://restcountries.com/v3.1/name/${data.country}`)

}).then((response)=>{
console.log(response)
if(!response.ok){
throw new error(`country not available`, response.status)
}else{
    return response.json()
}
}).then((countriesData)=>{
// console.log(countriesData[0])
uiCreation(countriesData[0])
})
.catch((err)=> console.error(`data is not found`)

)
}
// whereAmI(-33.933,18.474)
whereAmI(19.037,72.873)
// whereAmI(52.508,13.382)
}



