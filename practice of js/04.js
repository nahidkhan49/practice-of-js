
let year=prompt("Enter the year: ");
if((year%4 ==0 && year%100!=0)||(year%400==0)){
    console.log("Leap yera");
}
else{
    console.log("Not leap");
}
