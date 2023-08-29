const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth() + 1;
const currentDay = currentDate.getDate();
const currentHours = currentDate.getHours();
const currentMinutes = currentDate.getMinutes();
const currentSeconds = currentDate.getSeconds();

console.log(`Data atual: ${currentYear}-${currentMonth}-${currentDay}`);
console.log(`Hora atual: ${currentHours}:${currentMinutes}:${currentSeconds}`);
