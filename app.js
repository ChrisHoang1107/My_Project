const newYear = new Date("Fri, December, 31 2021");

//Format date
function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}
//function calculate days left to New Year
const countDown = () => {
  const currentDate = new Date();
  const totalSecond = (newYear - currentDate) / 1000;
  //Attach date
  document.querySelector(".day").innerHTML = formatTime(
    Math.floor(totalSecond / (3600 * 24))
  );
  document.querySelector(".hour").innerHTML = formatTime(
    Math.floor(totalSecond / 3600) % 24
  );
  document.querySelector(".minute").innerHTML = formatTime(
    Math.floor(totalSecond / 60) % 60
  );
  document.querySelector(".second").innerHTML = formatTime(
    Math.floor(totalSecond) % 60
  );
};

// countDown();
setInterval(countDown, 1000);
