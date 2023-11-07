import { useState } from "react";
import "./WeatherApp.css";
import search_icon from "../Assets/search.png";
import clear_icon from "../Assets/clear.png";
import cloud_icon from "../Assets/cloud.png";
import drizzle_icon from "../Assets/drizzle.png";
import humidity_icon from "../Assets/humidity.png";
import rain_icon from "../Assets/rain.png";
import snow_icon from "../Assets/snow.png";
import wind_icon from "../Assets/wind.png";


export default function WeatherApp() {
  let api_key = "f9f9c08f185e9c797becfeb1bc14163f";
  const [wIcon, setWIcon] = useState(cloud_icon);
  const [weather, setWeather] = useState("Clear");
  const [convertTemp, setConvertTemp] = useState(24 + "°c");

  const temprature = document.getElementsByClassName("weather-temp");
  const element = document.getElementsByClassName("cityInput");

  const search = async () => {
    if (element[0].value === "") {
      return 0;
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;
    let response = await fetch(url);
    let data = await response.json();
    const humidity = document.getElementsByClassName("humidity-percentage");
    const wind = document.getElementsByClassName("wind-rate");
    const location = document.getElementsByClassName("weather-location");
    humidity[0].innerHTML = Math.floor(data.main.humidity) + "%";
    wind[0].innerHTML = Math.floor(data.wind.speed) + "Km/h";

    temprature[0].innerHTML = setConvertTemp(
      Number(Math.floor(data.main.temp)) + "°c"
    );

    location[0].innerHTML = data.name;

    if (data.weather[0].icon === "01d" || data.weather[0].icon === "01n") {
      setWIcon(clear_icon);
      setWeather("Clear");
    } else if (
      data.weather[0].icon === "02d" ||
      data.weather[0].icon === "02n"
    ) {
      setWIcon(cloud_icon);
      setWeather("Cloudy");
    } else if (
      data.weather[0].icon === "03d" ||
      data.weather[0].icon === "03n"
    ) {
      setWIcon(drizzle_icon);
      setWeather("Drizzle");
    } else if (
      data.weather[0].icon === "04d" ||
      data.weather[0].icon === "04n"
    ) {
      setWIcon(drizzle_icon);
      setWeather("Drizzle");
    } else if (
      data.weather[0].icon === "09d" ||
      data.weather[0].icon === "09n"
    ) {
      setWIcon(rain_icon);
      setWeather("Rainy");
    } else if (
      data.weather[0].icon === "10d" ||
      data.weather[0].icon === "10n"
    ) {
      setWIcon(rain_icon);
      setWeather("Rainy");
    } else if (
      data.weather[0].icon === "13d" ||
      data.weather[0].icon === "13n"
    ) {
      setWIcon(snow_icon);
      setWeather("Snow");
    } else {
      setWIcon(clear_icon);
      setWeather("Clear");
    }
  };

  const convertToFahrenheit = function () {
    if (temprature[0].innerHTML.endsWith("F")) {
      return;
    } else {
      return (temprature.innerHTML = setConvertTemp(
        Number(temprature[0].innerHTML.split("°")[0]) * 1.8 + 32 + "F"
      ));
    }
  };

  return (
    <div className="container">
      <div className="top-bar">
        <input type="text" className="cityInput" placeholder="search" />
        <div
          className="search-icon"
          onClick={() => {
            search();
          }}
        >
          <img src={search_icon} alt="search" />
        </div>
      </div>
      <div className="weather-image">
        <img src={wIcon} alt="cloud" />
      </div>
      <div className="weather-condition">{weather}</div>
      <div className="weather-temp">{convertTemp}</div>
      <div className="weather-fahrenheit">
        <button
          onClick={() => {
            convertToFahrenheit();
          }}
        >
          To Fahrenheit
        </button>
      </div>
      <div className="weather-location">London</div>
      <div className="data-container">
        <div className="element">
          <img src={humidity_icon} className="icon" alt="" />
          <div className="data">
            <div className="humidity-percentage">64%</div>
            <div className="text">Humidity</div>
          </div>
        </div>

        <div className="element">
          <img src={wind_icon} className="icon" alt="wind" />
          <div className="data">
            <div className="wind-rate">18Km/h</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  );
}
