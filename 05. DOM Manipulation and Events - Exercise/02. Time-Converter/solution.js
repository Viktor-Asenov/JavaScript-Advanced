function attachEventsListeners() {
    document.getElementById('daysBtn').addEventListener('click', convertDays);
    document.getElementById('hoursBtn').addEventListener('click', convertHours);
    document.getElementById('minutesBtn').addEventListener('click', convertMinutes);
    document.getElementById('secondsBtn').addEventListener('click', convertSeconds);

    let days = document.getElementById('days');
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');

    function convertDays() {
        hours.value = days.value * 24;
        minutes.value = hours.value * 60;
        seconds.value = hours.value * 60 * 60;
    }

    function convertHours() {
        days.value = hours.value / 24;
        minutes.value = hours.value * 60;
        seconds.value = hours.value * 60 * 60;
    }

    function convertMinutes() {
        hours.value = minutes.value / 60;
        days.value = hours.value / 24;
        seconds.value = hours.value * 60 * 60;
    }

    function convertSeconds() {
        hours.value = seconds.value / 60 / 60;
        days.value = hours.value / 24;
        minutes.value = hours.value * 60;
    }
}