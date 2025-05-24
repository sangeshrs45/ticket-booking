let num = 7;
let temp = 0;
let sum = 0;
for(var i = 1;i<num; i++){
    temp = i %2==0
    sum +=temp
}
if(num == sum){
    console.log("its prime number")
}
else{
    console.log("its not prime number")
}