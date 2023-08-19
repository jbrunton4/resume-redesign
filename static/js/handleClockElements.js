function getLastSundayInMonth(month) {
    // months are 0 based! 
    const currentYear = new Date().getFullYear();
    let date = new Date(currentYear, month + 1, 0); // Get the last day of the month
    let dayOfWeek = date.getDay(); // Get the day of the week (0: Sunday, 1: Monday, etc.)

    while (dayOfWeek !== 0) {
        // Keep subtracting one day until we reach a Sunday
        date.setDate(date.getDate() - 1);
        dayOfWeek = date.getDay();
    }

    return date;
}

function isBst() {
    const now = new Date();
    return (now > getLastSundayInMonth(2) && now < getLastSundayInMonth(9))
}

function updateTime() {
    // update current GMT/BST time
    const now = new Date().toLocaleString('en-GB', { timeZone: 'Europe/London' }).split(" ")[1].split(":");
    document.getElementById("local-time").innerHTML = `${now[0]}:${now[1]}`;
    document.getElementById("seconds").innerHTML = `:${now[2]}`;
}

setTimeout(updateTime, 10)
setInterval(updateTime, 1000)
