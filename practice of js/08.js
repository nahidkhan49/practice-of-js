
var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
let element;
for(let i=0;i<numbers.length;i++){
    element=numbers[0];
    if(element<numbers[i]){
        element=numbers[i]
    }
}
console.log(element);