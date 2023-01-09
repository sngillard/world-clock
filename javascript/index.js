function updateTime() {
  // McMurdo, Antarctica
  let mcMurdoElement = document.querySelector("#mcmurdo");
  let mcMurdoDateElement = mcMurdoElement.querySelector(".date");
  let mcMurdoTimeElement = mcMurdoElement.querySelector(".time");
  let mcMurdoTime = moment().tz("Antarctica/McMurdo");

  mcMurdoDateElement.innerHTML = moment().format("MMMM Do YYYY");
  mcMurdoTimeElement.innerHTML = mcMurdoTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  // Syndey, Australia
  let sydneyElement = document.querySelector("#sydney");
  let sydneyDateElement = sydneyElement.querySelector(".date");
  let sydneyTimeElement = sydneyElement.querySelector(".time");
  let sydneyTime = moment().tz("Australia/Sydney");

  sydneyDateElement.innerHTML = moment().format("MMMM Do YYYY");
  sydneyTimeElement.innerHTML = sydneyTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
        <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss"
          )}<small>${cityTime.format("A")}</small></div>
        </div>`;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");

citiesSelectElement.addEventListener("change", updateCity);
