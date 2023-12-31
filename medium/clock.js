function showtime(){

    let date=new Date();
    let hours=date.getHours();
    let mins=date.getMinutes();
    let seconds=date.getSeconds();

    console.log(hours+":"+mins+":"+seconds);
    setTimeout(showtime,1000);
}

function showfulltime(){

    let date=new Date();
    let hours=date.getHours();
    let mins=date.getMinutes();
    let seconds=date.getSeconds();

    let am_pm="AM";

    if(hours>=12){
        if(hours>12){
            hours=hours-12; 
        }
        am_pm="PM";
    }
    else if(hours==0){
        hours=12;
        am_pm="AM";
    }

    if(hours<10){
        hours="0"+hours;
    }
    if(mins<10){
        mins="0"+mins;
    }
    if(seconds<10){
        seconds="0"+seconds;
    }
    console.log(hours+":"+mins+":"+seconds+" "+am_pm);
    setTimeout(showfulltime,1000);
}

// showtime();
showfulltime();