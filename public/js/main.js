const submitBtn = document.getElementById('submitBtn');
const cityName = document.getElementById('cityName');

const error = document.getElementById('Error');

const temp = document.getElementById('temp');
const tempStatus = document.getElementById('tempStatus');
const country =  document.getElementById('country');
const city =  document.getElementById('city');



const getInfo = async(event) => {
    event.preventDefault();
    let cityValue = cityName.value;
    
    if(cityValue == ""){
        error.innerText = "Please Write The City Name Before Search";
    }else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&units=metric&appid=db53821a6da75a89b882a5d1a9b2e7b4`;
            error.innerText = "";
            const respon = await fetch(url);

            const data = await respon.json();
            const arrData = [data];

            temp.innerText = arrData[0].main.temp;
            country.innerText = arrData[0].sys.country;
            city.innerText = arrData[0].name;

            let tempMood = arrData[0].weather[0].main;
            
            if(tempMood == "Clear"){
                tempStatus.innerHTML = '<i class="text-light fa fa-sun-o aria-hidden="true""></i>';
            }
            else if(tempMood == "Clouds"){
                tempStatus.innerHTML = '<i class="fa text-light fa-cloud" aria-hidden="true"></i>';
            }
            else if(tempMood == "Rain"){
                tempStatus.innerHTML = '<i class="text-light fa fa-tint" aria-hidden="true"></i>';
            }
            else{
                tempStatus.innerHTML = '<i class="text-light fa fa-sun-o aria-hidden="true""></i>';
            }

        }catch{
            error.innerText = "Please Write The City Name Properly";
        }
        
    }
}



submitBtn.addEventListener('click', getInfo);


submitBtn.click();