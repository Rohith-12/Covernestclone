//const Lifecover=document.getElementById('lifecover').value;

//nst submit=document.getElementById('sub');

//console.log(Lifecover);

/*submit.addEventListener('onclick',() =>{
    
    
    
    console.log(Lifecover.value)
    
    
    
})*/



console.log("hi");

var errormsg=document.getElementById('errmsg');

var Lifecover=document.getElementById('lifecover');
//console.log(Lifecover)
var phone=document.getElementById('phone');

var input=document.querySelectorAll('input')

//console.log(input[0]);


var errthrow=' ';

var subbttn=document.getElementById('submitbttn');



//var submit=document.getElementById('sub');

/*
Lifecover.addEventListener('keypress',(event) =>{
    
    
    if(event.keyCode==13){
        
         console.log(Lifecover.value);
        
    }
    
    
    
    
    
})

*/







var myobfun=function(Life,phone,sub){
    
    
    this.LifeCover=Life;
    this.phonenum=phone;
    this.final=sub;
    
    //this.get=parseInt(this.LifeCover.value);
     this.LifeCover.addEventListener('keypress',(event) => {
         
      
         this.geto=this.LifeCover.value;
        // console.log(this.geto)
           if(isNaN(this.geto)){
            
            console.log(this.geto)
            window.alert("dont use letters");

            
        
      }
       
         
         
         
         
         
   
  
    if(event.keyCode==13){
        
         //console.log(typeof(parseInt(this.Lifecover.value)));
        
        
         this.get=parseInt(this.LifeCover.value);
        Lifecover.value='';
        
        
        
        
        
        
        
       //try{
        
        
        if(this.get<50000) {
            
            console.log(this.get);
            errthrow +='Life cover should be between 5 lakh to 5 crores';
            
            errormsg.innerHTML= errthrow;
            this.get=0;
             
            
        }   
            else{
             
                
             makeResponseBox()
            }
   
           // makeResponseBox(event)
            
            //throw errthrow;

        }//
        
             
        
        
       /* catch(err){
            
            
            errormsg.innerHTML=err
            //return;
            
            
    }
 */
         //makeResponseBox()
    }
         
        
)
    
    
    
     //return;
 
 
    this.phonenum.addEventListener('keypress',(even) =>{
        
        
       if(event.keyCode==13){
            
            
            
            this.getP=parseInt(this.phonenum.value);
        
        console.log(isNaN(this.getP));
            
            //console.log(get)
            if(isNaN(this.getP)){
                
                               
                window.alert("don't use letters")
       console.log("hi");
                
            }
            
       }
        
       /* 
       else if(even.keyCode==13){
            if(this.phonenum.value.length<10){
                
                
                window.alert('phone numbe should be 10 digits')
                
                
            }
           
            
        }
  */
            
        //}
        

        
        
        
        
        
    })
    

   
    this.final.addEventListener('click',(eve) =>{
        
        
        for(const i of input){
            
            console.log(i.id);
            
            
            if(i.value==''){
                
                window.alert(`Fill the  ${i.id} details`)
                break;
            }
            
        }
        
       
            if(this.phonenum.value.length<10){
                
                
                window.alert('phone numbe should be 10 digits')
                

           
            
        }
        
        
        
   })
    
    
    

} 


function makeResponseBox() {

    
    console.log("hello");
    document.getElementById("errmsg").style.display="none";
    
    
}


myobfun(Lifecover,phone,subbttn);






/*
setInterval(function(){
    
    
    var embebpara=document.getElementById('dummy');
    
    var nu=Math.floor(Math.random()*12)+3;
    
    embebpara.innerHTML=`${nu} \npepople are currently seeing this site`
    
    
    
    
},5000)


*/













