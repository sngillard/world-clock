function updateTime() {
  // Honolulu, Hawaii (-10)
  let honoluluElement = document.querySelector("#honolulu");
  if (honoluluElement) {
    let honoluluDateElement = honoluluElement.querySelector(".date");
    let honoluluTimeElement = honoluluElement.querySelector(".time");
    let honoluluTime = moment().tz("Pacific/Honolulu");

    honoluluDateElement.innerHTML = honoluluTime.format("MMMM Do YYYY");
    honoluluTimeElement.innerHTML = honoluluTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  // Anchorage, Alaska (-9)
  let anchorageElement = document.querySelector("#anchorage");
  if (anchorageElement) {
    let anchorageDateElement = anchorageElement.querySelector(".date");
    let anchorageTimeElement = anchorageElement.querySelector(".time");
    let anchorageTime = moment().tz("America/Anchorage");

    anchorageDateElement.innerHTML = anchorageTime.format("MMMM Do YYYY");
    anchorageTimeElement.innerHTML = anchorageTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  // Los Angeles, California (-8)
  let los_angelesElement = document.querySelector("#los_angeles");
  if (los_angelesElement) {
    let los_angelesDateElement = los_angelesElement.querySelector(".date");
    let los_angelesTimeElement = los_angelesElement.querySelector(".time");
    let los_angelesTime = moment().tz("America/Los_Angeles");

    los_angelesDateElement.innerHTML = los_angelesTime.format("MMMM Do YYYY");
    los_angelesTimeElement.innerHTML = los_angelesTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  // Phoenix, Arizona (-7)
  let phoenixElement = document.querySelector("#phoenix");
  if (phoenixElement) {
    let phoenixDateElement = phoenixElement.querySelector(".date");
    let phoenixTimeElement = phoenixElement.querySelector(".time");
    let phoenixTime = moment().tz("America/Phoenix");

    phoenixDateElement.innerHTML = phoenixTime.format("MMMM Do YYYY");
    phoenixTimeElement.innerHTML = phoenixTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  // Mexico City, Mexico (-6)
  let mexico_cityElement = document.querySelector("#mexico_city");
  if (mexico_cityElement) {
    let mexico_cityDateElement = mexico_cityElement.querySelector(".date");
    let mexico_cityTimeElement = mexico_cityElement.querySelector(".time");
    let mexico_cityTime = moment().tz("America/Mexico_City");

    mexico_cityDateElement.innerHTML = mexico_cityTime.format("MMMM Do YYYY");
    mexico_cityTimeElement.innerHTML = mexico_cityTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  // New York, New York (-5)
  let new_yorkElement = document.querySelector("#new_york");
  if (new_yorkElement) {
    let new_yorkDateElement = new_yorkElement.querySelector(".date");
    let new_yorkTimeElement = new_yorkElement.querySelector(".time");
    let new_yorkTime = moment().tz("America/New_York");

    new_yorkDateElement.innerHTML = new_yorkTime.format("MMMM Do YYYY");
    new_yorkTimeElement.innerHTML = new_yorkTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  // New York, New York (-5)
  let newYorkElement = document.querySelector("#new_york");
  if (newYorkElement) {
    let newYorkDateElement = newYorkElement.querySelector(".date");
    let newYorkTimeElement = newYorkElement.querySelector(".time");
    let newYorkTime = moment().tz("America/New_York");

    newYorkDateElement.innerHTML = newYorkTime.format("MMMM Do YYYY");
    newYorkTimeElement.innerHTML = newYorkTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  // Manaus, Brazil (-4)
  let manausElement = document.querySelector("#manaus");
  if (manausElement) {
    let manausDateElement = manausElement.querySelector(".date");
    let manausTimeElement = manausElement.querySelector(".time");
    let manausTime = moment().tz("America/Manaus");

    manausDateElement.innerHTML = manausTime.format("MMMM Do YYYY");
    manausTimeElement.innerHTML = manausTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  // St. John's, Canada (-3.5)
  let st_johnsElement = document.querySelector("#st_johns");
  if (st_johnsElement) {
    let st_johnsDateElement = st_johnsElement.querySelector(".date");
    let st_johnsTimeElement = st_johnsElement.querySelector(".time");
    let st_johnsTime = moment().tz("America/St_Johns");

    st_johnsDateElement.innerHTML = st_johnsTime.format("MMMM Do YYYY");
    st_johnsTimeElement.innerHTML = st_johnsTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  // Santiago, Chile (-3)
  let santiagoElement = document.querySelector("#santiago");
  if (santiagoElement) {
    let santiagoDateElement = santiagoElement.querySelector(".date");
    let santiagoTimeElement = santiagoElement.querySelector(".time");
    let santiagoTime = moment().tz("America/Santiago");

    santiagoDateElement.innerHTML = santiagoTime.format("MMMM Do YYYY");
    santiagoTimeElement.innerHTML = santiagoTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  // South Georgia Island (-2)
  let south_georgiaElement = document.querySelector("#south_georgia");
  if (south_georgiaElement) {
    let south_georgiaDateElement = south_georgiaElement.querySelector(".date");
    let south_georgiaTimeElement = south_georgiaElement.querySelector(".time");
    let south_georgiaTime = moment().tz("Atlantic/South_Georgia");

    south_georgiaDateElement.innerHTML =
      south_georgiaTime.format("MMMM Do YYYY");
    south_georgiaTimeElement.innerHTML = south_georgiaTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  // Praia, Cape Verde (-1)
  let praiaElement = document.querySelector("#praia");
  if (praiaElement) {
    let praiaDateElement = praiaElement.querySelector(".date");
    let praiaTimeElement = praiaElement.querySelector(".time");
    let praiaTime = moment().tz("Atlantic/Cape_Verde");

    praiaDateElement.innerHTML = praiaTime.format("MMMM Do YYYY");
    praiaTimeElement.innerHTML = praiaTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  // London, England (UTC)
  let londonElement = document.querySelector("#london");
  if (londonElement) {
    let londonDateElement = londonElement.querySelector(".date");
    let londonTimeElement = londonElement.querySelector(".time");
    let londonTime = moment().tz("Europe/London");

    londonDateElement.innerHTML = londonTime.format("MMMM Do YYYY");
    londonTimeElement.innerHTML = londonTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  // Lagos, Nigeria (+1)
  let lagosElement = document.querySelector("#lagos");
  if (lagosElement) {
    let lagosDateElement = lagosElement.querySelector(".date");
    let lagosTimeElement = lagosElement.querySelector(".time");
    let lagosTime = moment().tz("Africa/Lagos");

    lagosDateElement.innerHTML = lagosTime.format("MMMM Do YYYY");
    lagosTimeElement.innerHTML = lagosTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  // Cairo, Egypt (+2)
  let cairoElement = document.querySelector("#cairo");
  if (cairoElement) {
    let cairoDateElement = cairoElement.querySelector(".date");
    let cairoTimeElement = cairoElement.querySelector(".time");
    let cairoTime = moment().tz("Africa/Cairo");

    cairoDateElement.innerHTML = cairoTime.format("MMMM Do YYYY");
    cairoTimeElement.innerHTML = cairoTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  // Moscow, Russia (+3)
  let moscowElement = document.querySelector("#moscow");
  if (moscowElement) {
    let moscowDateElement = moscowElement.querySelector(".date");
    let moscowTimeElement = moscowElement.querySelector(".time");
    let moscowTime = moment().tz("Europe/Moscow");

    moscowDateElement.innerHTML = moscowTime.format("MMMM Do YYYY");
    moscowTimeElement.innerHTML = moscowTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  // Tehran, Iran (+3.5)
  let tehranElement = document.querySelector("#tehran");
  if (tehranElement) {
    let tehranDateElement = tehranElement.querySelector(".date");
    let tehranTimeElement = tehranElement.querySelector(".time");
    let tehranTime = moment().tz("Asia/Tehran");

    tehranDateElement.innerHTML = tehranTime.format("MMMM Do YYYY");
    tehranTimeElement.innerHTML = tehranTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  // Baku, Azerbaijan (+4)
  let bakuElement = document.querySelector("#baku");
  if (bakuElement) {
    let bakuDateElement = bakuElement.querySelector(".date");
    let bakuTimeElement = bakuElement.querySelector(".time");
    let bakuTime = moment().tz("Asia/Baku");

    bakuDateElement.innerHTML = bakuTime.format("MMMM Do YYYY");
    bakuTimeElement.innerHTML = bakuTime.format("h:mm:ss [<small>]A[</small>]");
  }

  // Kabul, Afganistan (+4.5)
  let kabulElement = document.querySelector("#kabul");
  if (kabulElement) {
    let kabulDateElement = kabulElement.querySelector(".date");
    let kabulTimeElement = kabulElement.querySelector(".time");
    let kabulTime = moment().tz("Asia/Kabul");

    kabulDateElement.innerHTML = kabulTime.format("MMMM Do YYYY");
    kabulTimeElement.innerHTML = kabulTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  // Karachi, Pakistan (+5)
  let karachiElement = document.querySelector("#karachi");
  if (karachiElement) {
    let karachiDateElement = karachiElement.querySelector(".date");
    let karachiTimeElement = karachiElement.querySelector(".time");
    let karachiTime = moment().tz("Asia/Karachi");

    karachiDateElement.innerHTML = karachiTime.format("MMMM Do YYYY");
    karachiTimeElement.innerHTML = karachiTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  // Kolkata, India (+5.5)
  let kolkataElement = document.querySelector("#kolkata");
  if (kolkataElement) {
    let kolkataDateElement = kolkataElement.querySelector(".date");
    let kolkataTimeElement = kolkataElement.querySelector(".time");
    let kolkataTime = moment().tz("Asia/Kolkata");

    kolkataDateElement.innerHTML = kolkataTime.format("MMMM Do YYYY");
    kolkataTimeElement.innerHTML = kolkataTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  // Katmandu, Nepal (+5.75)
  let kathmanduElement = document.querySelector("#kathmandu");
  if (kathmanduElement) {
    let kathmanduDateElement = kathmanduElement.querySelector(".date");
    let kathmanduTimeElement = kathmanduElement.querySelector(".time");
    let kathmanduTime = moment().tz("Asia/Kathmandu");

    kathmanduDateElement.innerHTML = kathmanduTime.format("MMMM Do YYYY");
    kathmanduTimeElement.innerHTML = kathmanduTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  // Dhaka, Bangladesh (+6)
  let dhakaElement = document.querySelector("#dhaka");
  if (dhakaElement) {
    let dhakaDateElement = dhakaElement.querySelector(".date");
    let dhakaTimeElement = dhakaElement.querySelector(".time");
    let dhakaTime = moment().tz("Asia/Dhaka");

    dhakaDateElement.innerHTML = dhakaTime.format("MMMM Do YYYY");
    dhakaTimeElement.innerHTML = dhakaTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  // Yangon, Myanmar (+6.5)
  let yangonElement = document.querySelector("#yangon");
  if (yangonElement) {
    let yangonDateElement = yangonElement.querySelector(".date");
    let yangonTimeElement = yangonElement.querySelector(".time");
    let yangonTime = moment().tz("Asia/Yangon");

    yangonDateElement.innerHTML = yangonTime.format("MMMM Do YYYY");
    yangonTimeElement.innerHTML = yangonTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  // Jakarta, Indonesia (+7)
  let jakartaElement = document.querySelector("#jakarta");
  if (jakartaElement) {
    let jakartaDateElement = jakartaElement.querySelector(".date");
    let jakartaTimeElement = jakartaElement.querySelector(".time");
    let jakartaTime = moment().tz("Asia/Jakarta");

    jakartaDateElement.innerHTML = jakartaTime.format("MMMM Do YYYY");
    jakartaTimeElement.innerHTML = jakartaTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  // Shanghai, China (+8)
  let shanghaiElement = document.querySelector("#shanghai");
  if (jakartaElement) {
    let shanghaiDateElement = shanghaiElement.querySelector(".date");
    let shanghaiTimeElement = shanghaiElement.querySelector(".time");
    let shanghaiTime = moment().tz("Asia/Shanghai");

    shanghaiDateElement.innerHTML = shanghaiTime.format("MMMM Do YYYY");
    shanghaiTimeElement.innerHTML = shanghaiTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  // Tokyyo, Japan (+9)
  let tokyoElement = document.querySelector("#tokyo");
  if (tokyoElement) {
    let tokyoDateElement = tokyoElement.querySelector(".date");
    let tokyoTimeElement = tokyoElement.querySelector(".time");
    let tokyoTime = moment().tz("Asia/Tokyo");

    tokyoDateElement.innerHTML = tokyoTime.format("MMMM Do YYYY");
    tokyoTimeElement.innerHTML = tokyoTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  // Brisbane, Australia (+10)
  let brisbaneElement = document.querySelector("#brisbane");
  if (brisbaneElement) {
    let brisbaneDateElement = brisbaneElement.querySelector(".date");
    let brisbaneTimeElement = brisbaneElement.querySelector(".time");
    let brisbaneTime = moment().tz("Australia/Brisbane");

    brisbaneDateElement.innerHTML = brisbaneTime.format("MMMM Do YYYY");
    brisbaneTimeElement.innerHTML = brisbaneTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  // Sydney, Australia (+11)
  let sydneyElement = document.querySelector("#sydney");
  if (sydneyElement) {
    let sydneyDateElement = sydneyElement.querySelector(".date");
    let sydneyTimeElement = sydneyElement.querySelector(".time");
    let sydneyTime = moment().tz("Australia/Sydney");

    sydneyDateElement.innerHTML = sydneyTime.format("MMMM Do YYYY");
    sydneyTimeElement.innerHTML = sydneyTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  // Auckland, New Zealand (+12)
  let aucklandElement = document.querySelector("#auckland");
  if (aucklandElement) {
    let aucklandDateElement = aucklandElement.querySelector(".date");
    let aucklandTimeElement = aucklandElement.querySelector(".time");
    let aucklandTime = moment().tz("Pacific/Auckland");

    aucklandDateElement.innerHTML = aucklandTime.format("MMMM Do YYYY");
    aucklandTimeElement.innerHTML = aucklandTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }

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
          )}<small>${cityTime.format(" A")}</small></div>
        </div>
        <a href="/">All cities</a>
        `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");

citiesSelectElement.addEventListener("change", updateCity);
