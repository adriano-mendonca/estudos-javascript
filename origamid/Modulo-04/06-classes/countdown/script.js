import Countdown from "./countdown.js";

const diasNatal = new Countdown('24 December 2022 23:59:59 GMT-0300')

setInterval(() => {
  console.log(`faltam ${diasNatal.total.days} dias, ${diasNatal.total.hours
  }:${diasNatal.total.minutes}:${diasNatal.total.seconds} para o Natal!`)
}, 1000)