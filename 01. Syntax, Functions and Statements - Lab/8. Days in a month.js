function daysInAMonth(monthInput, yearInput) {
    let date = new Date();
    let month = date.getMonth(monthInput);
    let year = date.getFullYear(yearInput);
    let daysOfMonth = new Date(year, month, 0).getDate();
    console.log(daysOfMonth);
}