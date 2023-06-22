var array = ["Yogisha","Ajay","Charan","Pankaja","Sachin","jGanesh","madhu","JRam","jayaSudha","JaiKrishna"];
console.log(array);

for (var i=0;i<array.length;i++){
    if(array[i].charAt(0)=='j' || array[i].charAt(0)=='J'){
        console.log("Goodbye "+array[i]);
    }
    else{
        console.log("Hello "+array[i]);
    }
}