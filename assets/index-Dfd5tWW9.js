(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function n(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=n(e);fetch(e.href,s)}})();const u="http://api.weatherapi.com/v1",v="505082cbb0ed453482d163906240212",l="favorite-cities";async function m(t,i=3){const a=await(await fetch(`${u}/forecast.json?key=${v}&q=id:${t}&lang=en&days=${i}`)).json();return console.log(a),a}async function E(t){return await(await fetch(`${u}/search.json?key=${v}&q=${t}&lang=en`)).json()}function h(){return JSON.parse(localStorage.getItem(l))||[]}function S(t){const i=h();if(i.find(n=>n===t)){alert(t+" Already Selected!");return}i.push(t),localStorage.setItem(l,JSON.stringify(i))}function b(t){const n=h().filter(a=>a!==t);localStorage.setItem(l,JSON.stringify(n))}function c(t){return Math.floor(t)}function k(t,i){const n=t[0].hour,a=t[1].hour,e=[],s=n.findIndex(o=>o.time_epoch>i);for(let o=s-1;o<n.length;o++)e.push(n[o]);let d=0;for(;e.length<24;)e.push(a[d]),d++;return e}function H(t){const i=new Date(t);return["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][i.getDay()]}function _(t){const i=t.includes("AM"),n=t.split(" ")[0];if(i)return n;const[a,e]=n.split(":");return Number(a)+12+":"+e}function p(t="Loading..."){r.innerHTML=I(t)}function I(t){return`
      <div class="loading">
      <div class="loading__message">${t}</div>
      <div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
     </div>
    `}function f(t,i=!1){const n=x.find(a=>a.code===t);return n?"/conditionImages/"+n[i?"night":"day"]:null}const x=[{code:1e3,day:"day/sunny.jpg",night:"night/clear.jpg"},{code:1003,day:"day/partly_cloudy_day.jpg",night:"night/partly_cloudy_night.jpg"},{code:1006,day:"day/cloudy_day.jpg",night:"night/cloudy_night.jpg"},{code:1009,day:"day/cloudy_day.jpg",night:"night/cloudy_night.jpg"},{code:1030,day:"day/foggy_day.jpg",night:"night/foggy_night.jpg"},{code:1063,day:"day/rain_day.jpg",night:"night/rain_night.jpg"},{code:1066,day:"day/snow_day.jpg",night:"night/snow_night.jpg"},{code:1069,day:"day/rain_day.jpg",night:"night/rain_night.jpg"},{code:1072,day:"day/rain_day.jpg",night:"night/rain_night.jpg"},{code:1087,day:"day/lightning_day.jpg",night:"night/lightning_night.jpg"},{code:1114,day:"day/snow_day.jpg",night:"night/snow_night.jpg"},{code:1117,day:"day/snow_day.jpg",night:"night/snow_night.jpg"},{code:1135,day:"day/foggy_day.jpg",night:"night/foggy_night.jpg"},{code:1147,day:"day/foggy_day.jpg",night:"night/foggy_night.jpg"},{code:1150,day:"day/rain_day.jpg",night:"night/rain_night.jpg"},{code:1153,day:"day/rain_day.jpg",night:"night/rain_night.jpg"},{code:1168,day:"day/rain_day.jpg",night:"night/rain_night.jpg"},{code:1171,day:"day/heavy_rain_day.jpg",night:"night/heavy_rain_night.jpg"},{code:1180,day:"day/rain_day.jpg",night:"night/rain_night.jpg"},{code:1183,day:"day/rain_day.jpg",night:"night/rain_night.jpg"},{code:1186,day:"day/rain_day.jpg",night:"night/rain_night.jpg"},{code:1189,day:"day/heavy_rain_day.jpg",night:"night/heavy_rain_night.jpg"},{code:1192,day:"day/heavy_rain_day.jpg",night:"night/heavy_rain_night.jpg"},{code:1195,day:"day/heavy_rain_day.jpg",night:"night/heavy_rain_night.jpg"},{code:1198,day:"day/heavy_rain_day.jpg",night:"night/heavy_rain_night.jpg"},{code:1201,day:"day/heavy_rain_day.jpg",night:"night/heavy_rain_night.jpg"},{code:1204,day:"day/rain_day.jpg",night:"night/rain_night.jpg"},{code:1207,day:"day/heavy_rain_day.jpg",night:"night/heavy_rain_night.jpg"},{code:1210,day:"day/snow_day.jpg",night:"night/snow_night.jpg"},{code:1213,day:"day/snow_day.jpg",night:"night/snow_night.jpg"},{code:1216,day:"day/snow_day.jpg",night:"night/snow_night.jpg"},{code:1219,day:"day/snow_day.jpg",night:"night/snow_night.jpg"},{code:1222,day:"day/snow_day.jpg",night:"night/snow_night.jpg"},{code:1225,day:"day/snow_day.jpg",night:"night/snow_night.jpg"},{code:1237,day:"day/ice_pellets.jpg",night:"day/ice_pellets.jpg"},{code:1240,day:"day/heavy_rain_day.jpg",night:"night/heavy_rain_night.jpg"},{code:1243,day:"day/heavy_rain_day.jpg",night:"night/heavy_rain_night.jpg"},{code:1246,day:"day/heavy_rain_day.jpg",night:"night/heavy_rain_night.jpg"},{code:1249,day:"day/heavy_rain_day.jpg",night:"night/heavy_rain_night.jpg"},{code:1252,day:"day/heavy_rain_day.jpg",night:"night/heavy_rain_night.jpg"},{code:1255,day:"day/snow_day.jpg",night:"night/snow_night.jpg"},{code:1258,day:"day/heavy_rain_day.jpg",night:"night/heavy_rain_night.jpg"},{code:1261,day:"day/ice_pellets.jpg",night:"day/ice_pellets.jpg"},{code:1264,day:"day/ice_pellets.jpg",night:"day/ice_pellets.jpg"},{code:1273,day:"day/lightning_day.jpg",night:"night/lightning_night.jpg"},{code:1276,day:"day/lightning_day.jpg",night:"night/lightning_night.jpg"},{code:1279,day:"day/lightning_day.jpg",night:"night/lightning_night.jpg"},{code:1282,day:"day/lightning_day.jpg",night:"night/lightning_night.jpg"}];async function j(t,i){p("Load Weather for "+t+"...");const n=await m(i);T(n,i),q(i)}function T(t,i){const{location:n,current:a,forecast:e}=t,s=e.forecastday[0],d=f(a.condition.code,a.is_day!==1);d&&(r.style=`--detail-condition-image: url(${d})`,r.classList.add("show-background"));const o=h().find(g=>g===i);r.innerHTML=A(!o)+F(n.name,c(a.temp_c),a.condition.text,c(s.day.maxTemp_c),c(s.day.minTemp_C))+M(s.day.condition.text,s.day.maxwind_kph,e.forecastday,a.last_updated_epoch)+C(e.forecastday)+R(a.humidity,a.feelsLike_c,s.astro.sunrise,s.astro.sunset,a.precip__mm,a.uvIndex)}function A(t=!0){return`
  <div class="action-bar">
    <div class="action-bar__back">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
</svg></div>
    ${t?`<div class="action-bar__favorite">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
</svg></div>`:""}
  </div>
  `}function F(t,i,n,a,e){return`
    <div class="current-weather">
        <h2 class="current-weather__location">${t}</h2>
        <h1 class="current-weather__current-temperature">${i}°</h1>
        <p class="current-weather__condition">${n}</p>
        <div class="current-weather__day-temperatures">
          <span class="current-weather__max-temperature">H:${a}°</span>
          <span class="current-weather__min-temperature">T:${e}°</span>
        </div>
      </div>
    `}function M(t,i,n,a){const s=k(n,a).filter(d=>d!==void 0).map((d,o)=>`
       <div class="hourly-forecast">
            <div class="hourly-forecast__time">${o===0?"Now":(d.time,void 0)+" Uhr"}</div>
            <img
              src="https:${d.condition.icon}"
              alt=""
              class="hourly-forecast__icon"
            />
            <div class="hourly-forecast__temperature">${c(d.temp_c)}</div>
          </div>
    `).join("");return`
     <div class="today-forecast">
        <div class="today-forecast__conditions">
          Heute ${t}. Wind bis zu ${i} km/h.
        </div>
        <div class="today-forecast__hours">
         ${s}
        </div>
      </div>
  
  `}function C(t){return`
      <div class="forecast">
        <div class="forecast__title">Vorhersage fur die nachsten 3 tage:</div>
        <div class="forecast__days">
        ${t.map(a=>`
    <div class="forecast-day">
            <div class="forecast-day__day">${H(a.date)}</div>
            <img
              src="https:${a.day.condition.icon}"
              alt=""
              class="forecast-day__icon"
            />
            <div class="forecast-day__max-temp">H:${c(a.day.maxtemp_c)}</div>
            <div class="forecast-day__min-temp">T:${c(a.day.mintemp_c)}</div>
            <div class="Forecast-day__wind">Wind: ${c(a.day.maxwind_kph)} km/h</div>
          </div>
    `).join("")}
        </div>
      </div>
  `}function R(t,i,n,a,e,s){return`
  <div class="mini-stats">
        <div class="mini-stat">
          <div class="mini-stat__heading">Humidity</div>
          <div class="mini-stat__value">${t}</div>
        </div>
          <div class="mini-stat">
          <div class="mini-stat__heading">Gefuhlt</div>
          <div class="mini-stat__value">${i}</div>
        </div>
          <div class="mini-stat">
          <div class="mini-stat__heading">Sunrise</div>
          <div class="mini-stat__value">${_(n)}Uhr</div>
        </div>
          <div class="mini-stat">
          <div class="mini-stat__heading">Sunset</div>
          <div class="mini-stat__value">${_(a)}</div>
        </div>
          <div class="mini-stat">
          <div class="mini-stat__heading">Precipitation</div>
          <div class="mini-stat__value">${e}mm</div>
        </div>
          <div class="mini-stat">
          <div class="mini-stat__heading">UV-Index</div>
          <div class="mini-stat__value">${s}</div>
        </div>
      </div>
    `}function q(t){document.querySelector(".action-bar__back").addEventListener("click",()=>{w()});const n=document.querySelector(".action-bar__favorite");n==null||n.addEventListener("click",()=>{S(t),n.remove()})}async function w(){r.classList.remove("show-background"),p("Loading..."),await N()}async function N(){r.innerHTML=`
    <div class="main-menu">
    ${O()}
    ${await D()}
    </div>

 `,V()}function O(){return`
    
        <div class="main-menu__heading">
          Weather<button class="main-menu__edit">Edit</button>
        </div>
        <div class="main-menu__search-bar">
          <input
            type="text"
            class="main-menu__search-input"
            placeholder="Search City..."
          />  
          <div class="main-menu__search-results"></div>
        </div>
    
    `}const B=`
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>
`;async function D(){const t=h();if(!t||t.length<1)return"Not Saved a Favorite City.";const i=[];for(let a of t){const e=await m(a,1),{location:s,current:d,forecast:o}=e,g=o.forecastday[0],y=f(d.condition.code,d.is_day!==1),L=`
    <div class="city-wrapper">
      <div class="city-wrapper__remove" data-city-id="${a}">${B}</div>
            <div
              class="city"
              data-city-name="${s.name}"
              data-city-id="${a}"
              ${y?`style="
                 --condition-image: url(${y});
                 "`:""}
              
            >
              <div class="city__left-column">
                <h2 class="city__name">${s.name}</h2>
                <div class="city__country">${s.country}</div>
                <div class="city__condition">${d.condition.text}</div>
              </div>
              <div class="city__right-column">
                <div class="city__temperature">${c(d.temp_c)}°</div>
                <div class="city__min-max-temperature">H:${c(g.day.maxtemp_c)}° T:5${c(g.day.mintemp_c)}°</div>
              </div>
            </div>
          </div>
    
    `;i.push(L)}return`
     
        <div class="main-menu__cities-list">
          ${i.join("")}
        </div>
      
    `}function P(t){const n=t.map(e=>`
    <div class="search-result" data-city-name="${e.name}" data-city-id="${e.id}">
      <h3 class="search-result__name">${e.name}</h3>
      <p class="search-result__country">${e.country}</p> 
    </div>
    `).join(""),a=document.querySelector(".main-menu__search-results");a.innerHTML=n}function W(){document.querySelectorAll(".search-result").forEach(i=>{i.addEventListener("click",()=>{const n=i.getAttribute("data-city-name"),a=i.getAttribute("data-city-id");j(n,a)})})}function $(t){const i=document.querySelector(".main-menu__search-bar");if(!i){document.removeEventListener("click",$);return}i.contains(t.target)||document.querySelector(".main-menu__search-results").classList.add("main-menu__search-results--hidden")}function V(){const t=document.querySelector(".main-menu__edit"),i=document.querySelectorAll(".city-wrapper__remove");i.forEach(e=>{e.addEventListener("click",()=>{b(e.getAttribute("data-city-id")),e.parentElement.remove()})}),t.addEventListener("click",()=>{const e="data-edit-mode";t.getAttribute(e)?(t.removeAttribute(e),t.textContent="edit",i.forEach(s=>{s.classList.remove("city-wrapper__remove--show")})):(t.setAttribute(e,"true"),t.textContent="done",i.forEach(s=>{s.classList.add("city-wrapper__remove--show")}))});const n=document.querySelector(".main-menu__search-input");n.addEventListener("input",async e=>{const s=e.target.value;let d=[];s.length>1&&(d=await E(s),console.log(d)),P(d),W()}),document.addEventListener("click",$),n.addEventListener("focusin",()=>{document.querySelector(".main-menu__search-results").classList.add("main-menu__search-results--hidden")}),document.querySelectorAll(".city").forEach(e=>{e.addEventListener("click",()=>{const s=e.getAttribute("data-city-name"),d=e.getAttribute("data-city-id");j(s,d)})})}const r=document.getElementById("app");w();
