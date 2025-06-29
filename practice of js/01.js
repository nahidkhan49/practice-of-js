

const oddeven=(arr)=>{
    let evennumber=[];

    for(let i=0;i<arr.length;i++){
        let element=arr[i];
        if(element%2){
            evennumber.push(element);
        }
    }
    return evennumber;
}



const number=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
let result=oddeven(number);
console.log(result);