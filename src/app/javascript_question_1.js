function move(arr){ 
    arr.sort(); 
} 
      
let arr = [ -1, 2, -3, 4, 5, 6, -7, 8, 9 ]; 
move(arr); 
for (let e of arr) 
    document.write(e , " "); 