

const monthlySaving=(arr,num)=>{
    let tax=0,tti=0;
    if(!Array.isArray(arr) || typeof num!='number'){
        return "Invaled input";
    }
    for(let i=0;i<arr.length;i++){
        if(arr[i]>=3000){
            tax=tax+(arr[i]*0.2);
        }
        tti=tti+arr[i];
    }
    let sav=num+tax;
    let all=tti-sav;
    if(all>0){
        return all;
    }
    else{
        return "earn more";
    }
}


console.log(monthlySaving([1000, 2000, 3000], 5400)); 
console.log(monthlySaving([1000, 2000, 2500], 5000)); 
console.log(monthlySaving([900, 2700, 3400], 10000)); 
console.log(monthlySaving(100, [900, 2700, 3400]));