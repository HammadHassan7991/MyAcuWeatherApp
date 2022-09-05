////////////////////////////////////////Updating the UI//////////////////////////////

const updateUI=data=>{
    console.log(data);
// const cityDets=data.cityDets;
// const weather=data.weather;

///////// About using destructure properties
const{cityDets,weather}=data;
//rember const name and property name should be same.
//so above syntax means take cityDets and weather properties of 'data' and store them in 
//const name 'cityDets' & 'weather'.

$('.details').html(`<h5 class="my-3">${cityDets.EnglishName}</h5>
<div class="my-3">${weather[0].WeatherText}</div>
<div class="display-4 my-4">
    <span>${weather[0].Temperature.Metric.Value}</span>
    <span>&deg;C</span>`)

///////////////////////////update images/////
console.log(weather[0].IsDayTime);

let timeScr=null;
if(weather[0].IsDayTime)
{
timeScr='/imgs/day.jpg';
$('.day-night h1').text('Its Day Time');
$('.day-night h1').css({'color':'yellow','top':'306px','left':'62px'})
}
else{
    timeScr='/imgs/night.jpg'
    $('.day-night h1').text('Its Night Time');
    $('.day-night h1').css({'color':'gray','top':'306px','left':'44px'})

}
////////////////////ABove using tenatary operator
//Example let result=condtion? 'value1':'value2'
// let timeScr2=weather[0].IsDayTime ? '/JavaScript/chapter12ProjWeather/imgs/icons/day.jpg' : '/JavaScript/chapter12ProjWeather/imgs/icons/night.jpg';

$('img.time').attr('src',timeScr)
console.log(weather[0].WeatherIcon);

$('.icon img').attr('src',`/imgs/${weather[0].WeatherIcon}.svg`)

////////////////////////Remove class
if($('.card').hasClass('d-none'))
{
    $('.card').removeClass('d-none')
}
}


const updateCity=async(city)=>{

    const cityDets=await getCity(city)
    const weather=await getWeather(cityDets.Key)
    // return{
    //     cityDetails:cityDets,
    //     weather:weather
    // };
    ///////Using shorthand notation//////////
    //if property nam and value name is same then we can write
    //them as one. 
    return{cityDets,weather};
}




////////////////////
$('.change-location').on('submit',e=>{
    e.preventDefault();
    //get city value
    const citname=$('input[name="city"]').val().trim();
    $('input[name="city"]').val('')
    // update the ui with new city
    // updateCity(citname).then(data=>console.log(data)
    updateCity(citname).then(data=>updateUI(data)
    ).catch(err=>{
        console.log('error in fetching: ', err);
        
    })

    //set local storage
    localStorage.setItem('city',citname)
})
//if user referesh the page then it will display last entered city weather
if(localStorage.getItem('city')){
    updateCity(localStorage.getItem('city'))
    .then(data=>{
        updateUI(data)
    }).catch(err=>{
        console.log('error in fetching');
        
    })
}