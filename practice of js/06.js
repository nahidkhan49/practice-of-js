
var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];
let name;
for(let i=0;i<friends.length;i++){
    let element=friends[0].length;
    if(element<friends[i].length){
        element=friends[i].length;
        name=friends[i];
    }
}
console.log(name);