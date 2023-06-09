var userInput = document.querySelector("#userInput");
var finalResult;



const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const d = new Date();
let day = d.getDay();
let numDay = d.getDate();
let month = months[d.getMonth()];
let today = days[day];
console.log(numDay);





async function searchCountry(countryCode) {

    var apiResponse = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=0ba519c1e8584e3fbad104035232502&q=${countryCode ? countryCode : 'cairo'}&days=3`);
    finalResult = await apiResponse.json();
    display();
}

searchCountry();





userInput.addEventListener("keyup", function (event) {

    searchCountry(event.target.value);


})


function display() {


    var box = `  <div class=" col-md-4   p-0 ">
    <div class="today forcast rounded-start-3 ">
        <div class="today-header d-flex justify-content-between p-2 text-white">
            <div class="day">${today}</div>
            <div class="dayNumber">
                ${numDay + month}
            </div>

        </div>
        <div class="todayBody p-3 py-3">
            <div class="location  mb-3 text-white">${finalResult.location.name}</div>

            <div class="degree text-white mb-5">
                <div class="row">
                    <div class="col-md-6">
                        <h2 class="num ">
                            ${finalResult.current.temp_c}
                            <sup>o</sup>
                            C

                        </h2>
                    </div>

                    <div class="col-md-6">

                        <div class="degree-img ">
                            <img src="https:${finalResult.current.condition.icon}" alt=""
                                class=" img-fluid">
                        </div>
                    </div>
                </div>
            </div>
            <p id="status" class="text-info mb-5 ">${finalResult.current.condition.text}</p>
            <div class="degreeIcon d-flex text-white p-1 ">
                <div>
                    <img src="images/icon-umberella.png" alt="" class="p-3">
                    ${finalResult.current.humidity}
                </div>

                <div>
                    <img src="images/icon-wind.png" alt="" class="p-3">
                    ${finalResult.current.wind_kph}
                </div>

                <div>
                    <img src="images/icon-compass.png" alt="" class="p-3">
                    ${finalResult.current.wind_dir}
                </div>
            </div>
        </div>
    </div>
</div>



<div class="col-md-4  p-0 mb-5">
    <div class="tomorrow forcast text-center text-white  ">
        <div class="today-header mb-5  p-2 text-white">
            <p class="day  mb-0">${days[new Date(finalResult.forecast.forecastday[1].date).getDay()]}</p>
        </div>

        <div class="todayBody p-3 ">
            <div class="icon  mb-3 text-white"><img src="
                    https:${finalResult.forecast.forecastday[1].day.condition.icon}" alt=""></div>
        </div>

        <div class="degree">
            <p class="mb-0 fs-1">${finalResult.forecast.forecastday[1].day.maxtemp_c}
            <sup>o</sup>
            C</p>
            <p >${finalResult.forecast.forecastday[1].day.mintemp_c}
            <sup>o</sup>
            C</p>
        </div>
        <p class="text-info py-4 mb-5">${finalResult.forecast.forecastday[1].day.condition.text}</p>
    </div>
</div>

<div class="col-md-4  p-0 ">
    <div class="today forcast text-center text-white rounded-end-3 ">
        <div class="today-header mb-5  p-2 text-white">
            <p class="day  mb-0">${days[new Date(finalResult.forecast.forecastday[2].date).getDay()]}</p>
        </div>

        <div class="todayBody p-3">
            <div class="icon  mb-3 text-white"><img src="
                    https:${finalResult.forecast.forecastday[2].day.condition.icon}" alt=""></div>
        </div>

        <div class="degree">
            <p class="mb-0 fs-1">${finalResult.forecast.forecastday[2].day.maxtemp_c}
            <sup>o</sup>
            C
            </p>
            <p>${finalResult.forecast.forecastday[2].day.mintemp_c}
            <sup>o</sup>
            C
            </p>
        </div>
        <p class="text-info py-4">${finalResult.forecast.forecastday[2].day.condition.text}</p>
    </div>
</div>`;

    document.querySelector("#forecastTableBody").innerHTML = box;
}



