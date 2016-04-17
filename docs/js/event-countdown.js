let countdown;

const $countdownText = document.querySelector('.section__countdown__text');
const $countdownTime = document.querySelector('.section__countdown__time');

function initializeCountdown() {
  countdown = setInterval(renderCountdown, 1000);
}

function renderCountdown() {
  const currentDate = new Date();
  const nextEventDate = new Date('May 04 2016 19:00:00 GMT+0100 (CEST)');
  const dateDifference = new Date(nextEventDate - currentDate);

  getCountdownTimeString(dateDifference);
}

function getCountdownTimeString(date) {
  let days = date.getDate();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  let countdownText, countdownTime;

  if (date.getTime() >= 0) {
    days = days < 2 ? `${days} day, ` : `${days} days, `;
    hours = hours < 2 ? `${hour} hour and ` : `${hours} hours, `;
    minutes = minutes < 2 ? `${minutes} minute and` : `${minutes} minutes and `;
    seconds = seconds < 2 ? `${seconds} second` : `${seconds} seconds`;
    countdownText = `The next event will be in`;
    countdownTime = `${days}${hours}${minutes}${seconds}`;
  } else if (date.getTime() >= -10800000 && date.getTime() < 0) {
    countdownText = `This event is happening`;
    countdownTime = `right now!`
  } else {
    countdownText = `This event is`;
    countdownTime = `already over.`;
    clearInterval(countdown);
  }

  $countdownText.textContent = countdownText;
  $countdownTime.textContent = countdownTime;
}

initializeCountdown();
