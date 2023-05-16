const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f0f45b997amsha7b35f26024dfd5p186199jsn59b58a399b85',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather = (city)=>{
    let location=document.getElementById("location");
    location.innerHTML=city;
fetch(url+city,options)
    .then(response=> response.json())
    .then(response=>{console.log(response)
        cloud_pct.innerHTML=response.cloud_pct
        // feels_like.innerHTML=response.feels_like
        if(response.feels_like>30){
            feels_like.innerHTML="hot"
        }else if(response.feels_like>25){
            feels_like.innerHTML="Not so hot"
        }
        else{
            feels_like.innerHTML="cold"
        }
        humidity.innerHTML=response.humidity
        max_temp.innerHTML=response.max_temp
        min_temp.innerHTML=response.min_temp
        sunrise.innerHTML=response.sunrise
        sunset.innerHTML=response.sunset
        temp.innerHTML=response.temp
        temp2.innerHTML=response.temp
        wind_degrees.innerHTML=response.wind_degrees
        wind_speed.innerHTML=response.wind_speed
        wind_speed2.innerHTML=response.wind_speed
    
})
    .catch(err=>console.error(err));
}

submit.addEventListener("click",(e)=>{
    e.preventDefault()
    getWeather(city.value)
    // console.log(city.value[0])
}) ;
getWeather("Delhi");

// locations.forEach((city)=>{
//     let first_letter=city[0];
//     const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'f0f45b997amsha7b35f26024dfd5p186199jsn59b58a399b85',
// 		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
// 	}
// };
// const getWeather = (city)=>{
//     let location=document.getElementById("location");
//     location.innerHTML=city;
// fetch(url+city,options)
//     .then(response=> response.json())
//     .then(response=>{console.log(response)
       
//         let temprature=first_letter+temp;
//         let humidity=first_letter+humi;
//         let fells_like=first_letter+feel;

//         temprature.innerHTML=response.temp
//         humidity.innerHTML=response.humidity
//         if(response.feels_like>30){
//             feels_like.innerHTML="hot"
//         }else if(response.feels_like>25){
//             feels_like.innerHTML="Not so hot"
//         }
//         else{
//             feels_like.innerHTML="cold"
//         }
// })
//     .catch(err=>console.error(err));
// }
// })
// var counter=0;
// const getWeather2=(city)=>{
//     fetch(url+city,options)
//     .then(response=> response.json())
//     .then(response=>{console.log(response)
//         let first_letter=city[0];
//         let temprature=first_letter+"temp";
//         // let humidity=first_letter+"humi";
//         // let fells_like=first_letter+"feel";

//         // temprature.innerHTML=response.temp
//         // humidity.innerHTML=response.humidity
//         // if(response.feels_like>30){
//         //     feels_like.innerHTML="hot"
//         // }else if(response.feels_like>25){
//         //     feels_like.innerHTML="Not so hot"
//         // }
//         // else{
//         //     feels_like.innerHTML="cold"
//         // }
        
//         document.getElementsByClassName("temp")[1].innerHTML=0;
//         counter++;
      
// })
// .catch(err=>console.error(err));
// }
// getWeather2("Mumbai");
// locations.forEach(c=>{
//     getWeather2(c);
// })
// for(counter=0;counter<locations.length;counter++){
    
    //     const getWeather2=(city)=>{
        //         fetch(url+city,options)
        //         .then(response=> response.json())
        //         .then(response=>{console.log(response)
        
        
        //             document.getElementsByClassName("temp")[counter].innerHTML=0;
            
          
//     })
//     .catch(err=>console.error(err));
//     }
//     getWeather2(locations[counter]);
// }
const locations=["Mumbai","Kolkata","Chennai","Lucknow","Jaipur"];
var counter=0;
console.log(counter);
window.load=getWeather2=(city)=>{
            fetch(url+city,options)
            .then(response=> response.json())
            .then(response=>{console.log(response)
               
              
                document.getElementsByClassName("temp")[counter].innerHTML=response.temp;
                document.getElementsByClassName("humi")[counter].innerHTML=response.humidity;
               let feels_like= document.getElementsByClassName("feel")[counter]
               if(response.feels_like>30){
                        feels_like.innerHTML="hot"
                    }else if(response.feels_like>25){
                        feels_like.innerHTML="Not so hot"
                    }
                    else{
                        feels_like.innerHTML="cold"
              }
                ++counter;                 
                console.log(counter);
        })
        .catch(err=>console.error(err));
        }
locations.forEach(c=>{
    getWeather2(c);
})
console.log(counter);