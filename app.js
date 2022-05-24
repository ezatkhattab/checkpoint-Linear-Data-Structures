

let set1 = prompt("SET-1 : enter 4 numbers with space in between them ");
const array1 = set1.split(" ");

let set2 = prompt("SET-2 : enter 4 numbers with space in between them ");
const array2 = set2.split(" ");

let count = 0;
for(let i=0; i<array1.length ; i++){
    for(let x=0; x<array2.length ; x++){
        if(array1[i] === array2[x]){
            count = count + (parseInt(array1[i]) + parseInt(array2[x]));
        }
    }
}

console.log(count);


