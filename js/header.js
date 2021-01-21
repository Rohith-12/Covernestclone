 function myFunction() {
  var x = document.getElementById("myTopnav");
    console.log(x)
      var f=document.querySelector('.gg');
  if (x.className === "topnav") {
    x.className += " responsive";
     
      //console.log(f);
    //f.style.display='block';
   f.style.float='none'; 
    f.style.display='block'
      
    console.log(x.className);  
     
  } else {
      
      console.log(x.className);  
    x.className = "topnav";
      //f.style.display='none';
     f.style.float='right';   
  }
}
    