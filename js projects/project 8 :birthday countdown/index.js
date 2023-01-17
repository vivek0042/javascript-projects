const birthdaydate="2 October 2023";
const days=document.getElementById("days");
const hours=document.getElementById("hours");
const minutes=document.getElementById("minutes");
const seconds=document.getElementById("seconds");

function birthdaycountdown(){
    const bdate=new Date(birthdaydate);
    const todaysdate=new Date();
    const tseconds=(bdate-todaysdate)/1000;
    const tdays=Math.floor(tseconds/3600/24);
    const thours=Math.floor(tseconds/3600)%24;
    const tmin=Math.floor(tseconds/60)%60;
    const tsec=Math.floor(tseconds)%60;
    days.innerHTML=tdays;
    hours.innerHTML=thours;
    minutes.innerHTML=tmin;
    seconds.innerHTML=tsec;
}

// this is for only onetime code :when time match with given time.
function celeb(){
    const todaysdate=new Date()
    if(todaysdate.getDay==birthdaydate.getDay && todaysdate.getHours==birthdaydate.getHours && todaysdate.getMinutes==birthdaydate.getMinutes && todaysdate.getSeconds==birthdaydate.getSeconds){

        document.write("happy birthday tisha");
        console.log("happy birthday tisha");
        clearTimeout(birthdaydate);
    }
}


birthdaycountdown();
setInterval(birthdaycountdown,1000);
celeb();