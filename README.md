# Digital-Clock-using-js
## Hosted Link:- https://rohitdhawale07.github.io/Digital-Clock-using-js/
We start by creating a basic HTML document structure with a <head> section for including metadata and styles and a <body> section where the content will be displayed.
Inside the <head> section, we include a title for the page, which you can customize.
Inside the <body> section, we create a <div> element with the id attribute set to "clock." This <div> will serve as the container for our digital clock.

## HTML Code
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Digital clock</title>
    <link rel="stylesheet" href="./style.css">
    <script defer src="./index.js"></script>
</head>
<body>
    <div class="container">
    <h2>Digital Clock</h2>
    <div class="clock">
        <div>
            <span id="hour">00</span>
            <span class="text">Hours</span>
        </div>
        <div>
            <span id="minutes">00</span>
            <span class="text">Minutes</span>
        </div>
        <div>
            <span id="seconds">00</span>
            <span class="text">Seconds</span>
        </div>
       
            <span id="ampm">AM</span>
       



    </div>
</div>
    
</body>
</html>
```
## CSS code
```
@import url('https://fonts.googleapis.com/css2?family=Lato:ital@1&family=Mooli&family=Roboto:wght@300&display=swap');

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
    background: url(./img/photo-1418489098061-ce87b5dc3aee.avif);
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 100vh;
}
.container{
    display: flex;
    flex-direction: column;
    color: white;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-family: 'moolie', 'roboto';
    letter-spacing: 2px;
    background-color: rgb(0,0,0,0.6);
    padding: 2rem;
    border-radius: 10px;
    transition: 0.2s ease-in-out;
}

.container h2{
    font-size: 3rem;
    box-shadow: 0px 0px 10px 5px rgba(255, 255, 255, 1);
    padding: 5px 10px;
}
.container h2:hover{
    /* color: black; */
    background-color: rgb(80, 78, 78);
}
.clock{
    display: flex;
}
.clock div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 15px;
    background-color: rgb(160, 160, 160);
    padding: 5px 10px;
    margin-left: 1rem;
}
#hour, #minutes, #seconds{
    font-size: 4rem;
    font-weight: 600;
    color: cyan;
    background-color: #333;
    padding: 3px;
}
#ampm{
    color: white;
    font-weight: 600;

}


```
Inside the <script> section, we define a JavaScript function called updateClock.

updateClock gets the current date and time using the Date object.

It then extracts the hours, minutes, and seconds from the date and formats them as two-digit strings 
using toString().padStart(2, '0'). This ensures that the time is displayed as, for example, "09:05:02" instead of "9:5:2."

The formatted time string is stored in the timeString variable.

We use document.getElementById("clock").innerHTML to set the content of the <div> with the ID "clock" to the timeString, effectively updating the displayed time.

Outside the updateClock function, we initially call it to display the current time when the page loads.

We use setInterval to repeatedly call the updateClock function every 1000 milliseconds (1 second), ensuring that the clock updates in real-time.

## JAVASCRIPT Code
```
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
```
