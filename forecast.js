key='CMa3yMGLEEVpdFTbmGiMHkXs2sAMJkGi'

////////////////////////////////Geting location key////////////////////////////////

//First getting city code from city search APi the include that into current location API 

//Getting Wheather API
const getWeather=async(id)=>{
    const base='https://dataservice.accuweather.com/currentconditions/v1/'
    const query=`${id}?apikey=${key}`
    const response=await fetch(base+query);
    const data=await response.json()
    // console.log(data);
    return data;
    
}

//Getting City API
const getCity=async(city)=>{

    const base='https://dataservice.accuweather.com/locations/v1/cities/search';
    const query=`?apikey=${key}&q=${city}`;
    const response=await fetch(base+query);
    const data=await response.json()
    return data[0];
    
}
// getWeather('329260')
// ////////Checking above
// getCity('manchester').then(data=>{
// return getWeather(data.Key)
// }).then(data=>{
//     console.log(data);
    
// }).catch(err=>{
//     console.log(err);
    
// })

/////////////////////////
