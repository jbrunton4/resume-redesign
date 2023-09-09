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

    if (isBst()) {
        document.getElementById("local-timezone").innerHTML = "BST (British Summer Time)";
    } else {
        document.getElementById("local-timezone").innerHTML = "GMT (Grenwhich Mean Time)";
    }

    // update current GMT/BST time
    const date = new Date().toLocaleString('en-GB', { timeZone: 'Europe/London' }).split(" ")[0].replace(",", "").split("/");
    const now = new Date().toLocaleString('en-GB', { timeZone: 'Europe/London' }).split(" ")[1].split(":");

    document.getElementById("local-time").innerHTML = `${now[0]}:${now[1]}:${now[2]}`;

    let day = date[0].toString();
    if (day.toString().startsWith("0")) {
        day = day.replace("0", "");
    }
    let month = date[1];
    let year = date[2];
    let dateOnly = new Date(year, month, day);

    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let weekdayName = weekday[dateOnly.getDay()];

    const months = ["", "January", "February", "March", "April",
        "May", "June", "July", "August",
        "September", "October", "November", "December"];
    let monthName = months[parseInt(month)];

    let dateSuffix = "";
    if (day.toString().endsWith("11")) { dateSuffix = "th" }
    else if (day.toString().endsWith("12")) { dateSuffix = "th" }
    else if (day.toString().endsWith("13")) { dateSuffix = "th" }
    else if (day.toString().endsWith("1")) { dateSuffix = "st" }
    else if (day.toString().endsWith("2")) { dateSuffix = "nd" }
    else if (day.toString().endsWith("3")) { dateSuffix = "rd" }
    else { dateSuffix = "th" }

    document.getElementById("local-date").innerHTML = `${weekdayName} ${day}<sup>${dateSuffix}</sup> of ${monthName}, ${year}`;
}

setTimeout(updateTime, 10)
setInterval(updateTime, 1000)