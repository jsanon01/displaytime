function renderTime() {

//CODING Date starts
var mydate = new Date();
var year = mydate.getYear();
	if (year < 1000) {
		year += 1900;
	}

var day = mydate.getDay();
var month = mydate.getMonth();
var daym = mydate.getDate();
var dayarray = new Array("Sunday,","Monday,","Tuesday,","Wednesday,","Thursday,","Friday,","Saturday,");
var montharray = new Array("January ","February ","March ","April ","May ","June ","July ","August ","September ","October ","November ","December ");
//CODING Date ends

//CODING Time starts
var currentTime = new Date();
var h = currentTime.getHours();
var m = currentTime.getMinutes();
var s = currentTime.getSeconds();
     if( h == 24){
		 h = 0;
	 } else if (h < 12){
         h = h - 0;
	 }
     if (h < 10) {
		 h = "0" + h;
	 }
     if (m < 10){
		 m = "0" + m;
	 }
	 if (s < 10){
		 s = "0" + s;
	 }
	 var myClock = document.getElementById("clockDisplay");
    // Displaying Month-of-the-year, Year, Hour, Minutes, Seconds
    //  myClock.textContent = "" + dayarray[day]+ " "+ daym+" "+montharray[month]+ " "+year+" \n "+h+ ":"+m+ ":"+s; //OPTIONAL
    // myClock.innerText = "" +" "+montharray[month]+ daym + ", "+year+" \n "+h+ ":"+m+ ":"+s;
    
    // Displaying Day-of-the-week, Month-of-the-year, Year, Hour, Minutes, Seconds
    //  myClock.textContent = "" + dayarray[day]+ " "+ " "+montharray[month]+ daym + ", "+year+" \n "+h+ ":"+m+ ":"+s; //OPTIONAL
     myClock.innerText = "" + dayarray[day]+ " "+ " "+montharray[month]+ daym + ", "+year+" \n "+h+ ":"+m+ ":"+s;
     setTimeout("renderTime()", 1000);
}

// const clockDisplay = document.getElementById("clockDisplay");
// clockDisplay.addEventListener('onload', renderTime);

renderTime();
//CODING Time ends

// var traffic = document.createElement('img');
// traffic.src = "traffic-lights.jpg";
// document.body.appendChild(traffic);