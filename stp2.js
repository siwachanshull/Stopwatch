var hr = 0;
var min = 0;
var sec = 0;
var count = 0;
var timer = false;

function start() {
    timer = true;
    stopwatch();
}
function pause() {
    timer = false;
}
function reset() {
    timer = false;
    hr = 0;
    min = 0;
    sec = 0;
    coumt = 0;
    document.getElementById("count").innerHTML = "00";
    document.getElementById("sec").innerHTML = "00";
    document.getElementById("min").innerHTML = "00";
    document.getElementById("hr").innerHTML = "00"
}
function stopwatch() {
    if (timer == true) {
        count = count + 1;

        if (count == 100) {
            sec = sec + 1;
            count = 0;
        }
        if (sec == 60) {
            min = min + 1;
            sec = 0;

        }
        var hrstring = hr;
        var minstring = min;
        var secstring = sec;
        if (hr < 10) {
            hrstring = '0' + hrstring;
        }
        if (min < 10) {
            minstring = '0' + minstring;
        }
        if (sec < 10) {
            secstring = '0' + secstring;
        }

        document.getElementById("count").innerHTML = count;
        document.getElementById("sec").innerHTML = secstring;
        document.getElementById("min").innerHTML = minstring;
        document.getElementById("hr").innerHTML = hrstring;
        setTimeout("stopwatch()", 10);

    }

}