var inputDate = document.getElementById("date-cal");
var calBtn = document.getElementsByTagName("button")[0];
var Ptag = document.getElementsByTagName('p')[0];
// console.log(Ptag.innerText);

var Str1 = Ptag.innerText;





// if(inputIf == "Invalid Date"){
//     console.log("hello");
// }else{
//     console.log("world");
// }





calBtn.addEventListener('click',function(){


    var inputIf = new Date(inputDate.value);

    console.log(inputIf);

    if(inputIf == "Invalid Date"){
        alert("Please enter your birthday");
    }else{
        var currentDate = new Date();

        var currentYear = new Date(currentDate).getFullYear();
        // console.log(currentYear);?
    
        var inputDateConvert = new Date(inputDate.value);
        var inputYear =   inputDateConvert.getFullYear();
    
       
    
        var YearDiff = currentYear - inputYear;
        // console.log(YearDiff);
    
        
    
        if(YearDiff > 0)
        {
            Ptag.innerText = (Str1.replace("0",YearDiff));
        }else{
            Ptag.innerText = Str1;
        }
    }
    

    // ************ Main Function which calculates the year **********************
  
    // var currentDate = new Date();

    // var currentYear = new Date(currentDate).getFullYear();
    // // console.log(currentYear);?

    // var inputDateConvert = new Date(inputDate.value);
    // var inputYear =   inputDateConvert.getFullYear();

   

    // var YearDiff = currentYear - inputYear;
    // // console.log(YearDiff);

    

    // if(YearDiff > 0)
    // {
    //     Ptag.innerText = (Str1.replace("0",YearDiff));
    // }else{
    //     Ptag.innerText = Str1;
    // }



})
