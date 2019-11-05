console.log("Hello Node");

print= function(msg){
    console.log(msg);
}
secondCounter = function(src,count){
    for (var i = 0; i < count; i++) {
        const now = new Date().getTime();
         while ( now != now + 1000 )
         {
            
        }
        
        print(src +": "+i +" seconds are over.");
    }
}