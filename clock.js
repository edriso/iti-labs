// Variables
const alarmIcon = document.querySelector(".clock__alarm-icon");
const alarmModal = document.querySelector(".modal--set-alarm");
const alarmModalContent = document.querySelector(
  ".modal--set-alarm .modal__content"
);
const modalCloseBtn = document.querySelector(".modal--set-alarm .modal__close");
const setAlarmBtn = document.querySelector(".modal--set-alarm .btn--primary");
const clearAlarmBtn = document.querySelector(".modal--set-alarm .btn--clear");
const stopAlarmBtn = document.querySelector(".modal--alarm-on .btn--primary");
const days = document.querySelectorAll(".clock__day");
const clockTime = document.querySelector(".clock__time h2");
const dayTime = document.querySelector(".clock__day-time");
const alarmHour = document.querySelector(".modal__alarm__box--hour input");
const alarmMinute = document.querySelector(".modal__alarm__box--minute input");
const alarmSecond = document.querySelector(".modal__alarm__box--second input");
const alarmAudio = document.querySelector(".alarm-audio-wrapper audio");
const alarmOnModal = document.querySelector(".modal--alarm-on");

// Functions
const updateTime = () => {
  let time = new Date().toLocaleString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  time = time.replace(" AM", "").replace(" PM", "").replace(/:/g, " : ");

  clockTime.innerText = time;
};

let timeout;
const setAlarm = (seconds) => {
  alarmModal.classList.add("modal--hide");

  alert("Alarm was added!");

  timeout = setTimeout(() => {
    alarmOnModal.classList.remove("modal--hide");

    alarmAudio.loop = true;

    alarmAudio.play();

    setTimeout(() => {
      alarmAudio.loop = false;
      alarmAudio.pause();
      alarmOnModal.classList.add("modal--hide");
    }, 60000);
  }, seconds * 1000);
};

const clearAlarm = () => {
  alarmHour.value = 0;
  alarmMinute.value = 0;
  alarmSecond.value = 0;

  clearTimeout(timeout);
};

// Event Listeners
alarmIcon.addEventListener("click", () => {
  alarmModal.classList.remove("modal--hide");
});

modalCloseBtn.addEventListener("click", () => {
  alarmModal.classList.add("modal--hide");
});

alarmModal.addEventListener("click", () => {
  alarmModal.classList.add("modal--hide");
});

alarmModalContent.addEventListener("click", (e) => {
  e.stopPropagation();
});

setAlarmBtn.addEventListener("click", () => {
  const hour = Number(alarmHour.value);
  const minute = Number(alarmMinute.value);
  const second = Number(alarmSecond.value);

  const seconds = hour * 60 * 60 + minute * 60 + second;

  if (seconds >= 0) {
    setAlarm(seconds);
  } else {
    alert("Something went wrong!");
  }
});

clearAlarmBtn.addEventListener("click", clearAlarm);

stopAlarmBtn.addEventListener("click", () => {
  alarmAudio.pause();
  alarmOnModal.classList.add("modal--hide");
});

// get time, and add active class for today
const time = new Date();

days[time.getDay()].classList.add("clock__day--active");

dayTime.innerText = time.getHours() >= 12 ? "PM" : "AM";

// initial render
updateTime();

setInterval(updateTime, 1000);
