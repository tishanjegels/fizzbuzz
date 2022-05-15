for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0){
    //if number is muliple of 3 and 5 , show Fizz-Buzz    
        console.log("Fizz-Buzz");
    }
    //if number is a muliple of 3 , show Fizz
    else if(i % 3 == 0){
        console.log("Fizz");
    }
    //if number is a muliple of 5 , show Buzz
    else if(i % 5 == 0 ){
        console.log("Buzz");
    }
    //if number is not muliple of 3 or 5 , show normally
    else{
        console.log(i);
    }
}