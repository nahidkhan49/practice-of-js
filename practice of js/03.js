

const number=[1,5,2,7,9,4,6,3,8,10,12,14,16,18,20,11,13,15,17,19];
for(let i=0;i<number.length-1;i++){
    for(let j=i;j<number.length;j++){
        if(number[i]>number[j]){
            let temp=number[i];
            number[i]=number[j];
            number[j]=temp;
        }
    }
}
console.log(number);