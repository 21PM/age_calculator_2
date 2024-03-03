var inputDate = document.getElementById("date-cal");
var calBtn = document.getElementsByTagName("button")[0];
var Ptag = document.getElementsByTagName('p')[0];
// console.log(Ptag.innerText);

var Str1 = Ptag.innerText;




calBtn.addEventListener('click',function(){


    var inputIf = new Date(inputDate.value);

    console.log(inputIf);

    if(inputIf == "Invalid Date"){
        alert("Please enter your birthday");
    }else{
       
        
    // ************ Main Function which calculates the DAYS **********************

    // Get the current date


    var curDay = new Date();
    // console.log(curDay);

     // Get the selected date from the input value
     var selectedDay = new Date(inputDate.value);

    // Calculate the difference in milliseconds
    var timeDifference = curDay.getTime() - selectedDay.getTime();


    // Convert the difference to days

    var dayDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    console.log(dayDifference);
    

    // ************ Main Function which calculates the year **********************
  
    var currentDate = new Date();

    var currentYear = new Date(currentDate).getFullYear();
    // console.log(currentYear);

    var inputDateConvert = new Date(inputDate.value);
    var inputYear =   inputDateConvert.getFullYear();

    var YearDiff = currentYear - inputYear;
    console.log(YearDiff);

    

    if(dayDifference > 365 * YearDiff && dayDifference>0)
    {
        Ptag.innerText = (Str1.replace("21",YearDiff));
    }else {
        Ptag.innerText = (Str1.replace("21",YearDiff -1));
    }
    }





    // // ************ Main Function which calculates the DAYS **********************

    // // Get the current date


    // var curDay = new Date();
    // // console.log(curDay);

    //  // Get the selected date from the input value
    //  var selectedDay = new Date(inputDate.value);

    // // Calculate the difference in milliseconds
    // var timeDifference = curDay.getTime() - selectedDay.getTime();


    // // Convert the difference to days

    // var dayDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    // console.log(dayDifference);
    

    // // ************ Main Function which calculates the year **********************
  
    // var currentDate = new Date();

    // var currentYear = new Date(currentDate).getFullYear();
    // // console.log(currentYear);?

    // var inputDateConvert = new Date(inputDate.value);
    // var inputYear =   inputDateConvert.getFullYear();

   

    // var YearDiff = currentYear - inputYear;
    // // console.log(YearDiff);

    

    // if(YearDiff > 0 && dayDifference > 365)
    // {
    //     Ptag.innerText = (Str1.replace("0",YearDiff));
    // }else{
    //     Ptag.innerText = Str1;
    // }


    // // ************ Main Function which calculates the DAYS **********************

    // Get the current date


    // var curDay = new Date();
    // // console.log(curDay);

    //  // Get the selected date from the input value
    //  var selectedDay = new Date(inputDate.value);

    // // Calculate the difference in milliseconds
    // var timeDifference = curDay.getTime() - selectedDay.getTime();


    // // Convert the difference to days

    // var dayDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    // console.log(dayDifference);

 

})
