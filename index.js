
// var len=document.querySelectorAll(".drum").length;




// for(var i=0; i<len; i++){
// document.querySelectorAll(".drum")[i].addEventListner("click", function (){
//   this.style.color="white";
// });
// }

// ele=document.querySelectorAll(".drum");
// for(var i=0; i<ele.length; i++){
//     ele[i].addEventListener("click", function(){
//         this.style.color="white";
//         })
// }




// ele=document.querySelectorAll(".drum");
// for(var i=0; i<ele.length; i++){
//     ele[i].addEventListener("click", function(){
//         if(this.style.color=="white"){
//             this.style.color="red";
//         }else{
//             this.style.color="white";
//         }
//         })
// }






var ele=document.querySelectorAll(".drum");


for(var i=0; i<ele.length; i++){
    ele[i].addEventListener("click", function(){
      
        
        // switch (letter) {
        //     case "w":
        //         var audio=new Audio("sounds/tom-1.mp3");
        //         audio.play();
        //         break;
        
        
        //     case "a":
        //         console.log("hey");
        //     var audi=new Audio("sounds/tom-2.mp3");
        //     audi.play();
        //     break;
        
        //     case "s":
                
        //     var aud=new Audio("sounds/tom-3.mp3");
        //     aud.play();
        //     break;
        
        //     case "d":
                
        //     var au=new Audio("sounds/tom-4.mp3");
        //     au.play();
        //     break;
        
        //     case "j":
                
        //     var a=new Audio("sounds/tom-5.mp3");
        //     a.play();
        //     break;
        
        //     case "k":
                
        //     var aa=new Audio("sounds/tom-6.mp3");
        //     aa.play();
        //     break;
        
        //     case "l":
                
        //     var aaa=new Audio("sounds/tom-7.mp3");
        //     aaa.play();
        //     break;
        
        //     default:
        //         break;
        // }

if(this.innerHTML=="a"){
    var aaa=new Audio("sounds/tom-7.mp3");
            aaa.play();
            
}else if(this.innerHTML=="s"){
    var a=new Audio("sounds/tom-6.mp3");
    a.play();
}else if(this.innerHTML=="d"){
    var s=new Audio("sounds/tom-5.mp3");
    s.play();
}
else if(this.innerHTML=="j"){
    var s=new Audio("sounds/tom-4.mp3");
    s.play();
}
else if(this.innerHTML=="k"){
    var s=new Audio("sounds/tom-3.mp3");
    s.play();
}else if(this.innerHTML=="l"){
    var s=new Audio("sounds/tom-2.mp3");
    s.play();
}


        });
}


 











var ele=document.querySelectorAll(".drum");


for(var i=0; i<ele.length; i++){
    ele[i].addEventListener("click", function(){
      
 
_dj(this.innerHTML);

        });
}


    document.addEventListener("keypress", function(){
      
_dj(event.key);
    });








 function _dj(sound){
    
if(sound=="a"){
    var aaa=new Audio("sounds/tom-7.mp3");
            aaa.play();
            
}else if(sound=="s"){
    var a=new Audio("sounds/tom-6.mp3");
    a.play();
}else if(sound=="d"){
    var s=new Audio("sounds/tom-5.mp3");
    s.play();
}
else if(sound=="j"){
    var s=new Audio("sounds/tom-4.mp3");
    s.play();
}
else if(sound=="k"){
    var s=new Audio("sounds/tom-3.mp3");
    s.play();
}else if(sound=="l"){
    var s=new Audio("sounds/tom-2.mp3");
    s.play();
}else if(sound=="w"){
    var s=new Audio("sounds/tom-1.mp3");
    s.play();
}
 }