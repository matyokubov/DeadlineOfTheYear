var globDate = new Date();
var perLoaded_per = document.getElementById("level");
var perLoaded_num = document.getElementById("level-num");
setData(yearDeadline());

function getTotalDays() {
    let date1 = `${globDate.getFullYear()}-01-01`;
    let date2 = `${globDate.getFullYear()+1}-01-01`;
    let diffInMs = new Date(date1) - new Date(date2);
    let diffInDays = diffInMs / (1000 * 60 * 60 * 24);
    return Math.abs(diffInDays);
}

function newYear(){
    let date1 = globDate.toISOString().slice(0, 10);
    let date2 = `${globDate.getFullYear()+1}-01-01`;
    let diffInMs = new Date(date1) - new Date(date2);
    let diffInDays = diffInMs / (1000 * 60 * 60 * 24);
    return Math.abs(diffInDays);
}

function yearDeadline() {
    return (getTotalDays() - newYear())/(getTotalDays()/100);
}

function setData(per) {
    document.getElementsByTagName("title")[0].innerHTML = `New year ${globDate.getFullYear()+1}`;
    perLoaded_per.style.width = `${per}%`;
    perLoaded_num.innerHTML = `${Math.round(per)}%`;
}

console.log(yearDeadline())