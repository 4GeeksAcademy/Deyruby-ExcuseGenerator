/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  function excuses() {
    let who = ["Deyruby", "He", "My Mother", "My husband"];

    let action = ["did not find", "broke", "lost", "forgot"];

    let what = [
      "the table",
      "the computer",
      "the car",
      "the phone",
      "the keys"
    ];

    let when = ["today", "yesterday", "in the afternoon", "in the morning"];

    let indexwho = Math.floor(Math.random() * who.length);
    let indexaction = Math.floor(Math.random() * action.length);
    let indexwhat = Math.floor(Math.random() * what.length);
    let indexwhen = Math.floor(Math.random() * when.length);

    return (
      who[indexwho] +
      " " +
      action[indexaction] +
      " " +
      what[indexwhat] +
      " " +
      when[indexwhen]
    );
  }
  console.log(excuses());
};
