// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

function intervalTime(){
    let time = new Date();
    console.log('intervalTime');
    console.log(time.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
    }));
}

setInterval(intervalTime, 1000);

function timeoutClock(){
    let time = new Date();
    console.log('timeoutClock');
    console.log(time.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
    }));
    setTimeout(timeoutClock, 1000);
}

timeoutClock();
