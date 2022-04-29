function takePreviousDay(year, month, day) {
    let date = new Date(year, month, day);
    let previous = new Date(date.getTime());
    previous.setDate(date.getDate() - 1);

    let previousDayDate = previous.getFullYear() + '-' + previous.getMonth() + '-' + previous.getDate();
    console.log(previousDayDate);
}

takePreviousDay(2016, 10, 1)