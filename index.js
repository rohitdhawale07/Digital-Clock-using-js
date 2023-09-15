const hour = document.getElementById("hour")
const min = document.getElementById("minutes")
const sec = document.getElementById("seconds")
const ampm = document.getElementById("ampm")

// console.log(hour,sec,ampm,min);

function updateClock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm1 = "AM";

    if(h>12){
        h = h-12;
        ampm1 = "PM";
    }

    h = h<10?"0"+h:h;
    m = m<10?"0"+m:m;
    s = s<10?"0"+s:s;

    hour.innerText = h;
    min.innerText = m;
    sec.innerText = s;
    ampm.innerText = ampm1;

    setTimeout(()=>{
        updateClock()
    },1000)

    // console.log(h,m,s);
}

updateClock()