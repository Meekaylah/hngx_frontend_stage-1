function updateDayOfTheWeek() {
    const currentDate = new Date();
    const dayOfTheWeekNumber = currentDate.getDay();
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const dayName = dayNames[dayOfTheWeekNumber];

    const utcTime = currentDate.getTime();

    const dayOfTheWeekElement = document.getElementById('currentDayOfTheWeek');
    dayOfTheWeekElement.textContent = `${dayName}`;
    const utcTimeElement = document.getElementById('currentUTCTime');
    utcTimeElement.textContent = `${utcTime}`
}

updateDayOfTheWeek();
setInterval(updateDayOfTheWeek, 1000)