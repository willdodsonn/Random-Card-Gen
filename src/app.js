/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.querySelector(".card").classList.add(generateRandomSuit());
  document.querySelector(".card").classList.add(generateRandomNumber());
};

let generateRandomNumber = function() {
  let indexNumbers = [
    "A",
    "1",
    "2",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let randomNum = Math.floor(Math.random() * indexNumbers.length);
  return indexNumbers[randomNum];
};

let generateRandomSuit = function() {
  let suit = ["diamonds", "spades", "hearts", "clubs"];
  let randomSuit = Math.floor(Math.random() * suit.length);
  return suit[randomSuit];
};
