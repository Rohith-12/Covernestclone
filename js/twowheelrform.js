console.log("iam in");
 var finalbttn=document.getElementById('submitbttnfinal');

var regno=document.querySelector('.RegistrationNumber');

var citiesByState = {
Odisha: ["Bhubaneswar","Puri","Cuttack"],
Maharashtra: ["Mumbai","Pune","Nagpur"],
Kerala: ["kochi","Kanpur"]
}





function makeSubmenu(value) {
if(value.length==0) document.getElementById("citySelect").innerHTML = "<option></option>";
    
    
    
    
else {
    
    //console.log(value);
var citiesOptions = "";
for(cityId in citiesByState[value]) {
    console.log(citiesByState[value][cityId]);
   // console.log([cityId])
citiesOptions+="<option>"+citiesByState[value][cityId]+"</option>";
}
document.getElementById("citySelect").innerHTML = citiesOptions;
}
    
   
    
}

function resetSelection() {
document.getElementById("countrySelect").selectedIndex = 0;
document.getElementById("citySelect").selectedIndex = 0;
}










/*


function trigger(val){
    
    
    if(val.length>0){
        
        
        document.getElementById('hel').innerHTML='modeltypevarieny'
        
        
        
        
    }






}



*/



var stateObject = {
"APRILIA": { "CAPONORD 1200 ABS": ["CAPONORD 1200 ABS, Petrol ( 1197 CC)"],
"CAPONORD 1200 ABS TRAVEL": ["CAPONORD 1200 ABS TRAVEL, Petrol ( 1197 CC)"],
"CAPONORD 1200 RALLY": ["CAPONORD 1200 RALLY, Petrol ( 1197 CC)"],
"DORSODURO 1200 ABS":["DORSODURO 1200 ABS, Petrol ( 1197 CC)"],
"MANA 850 GT ABS":["MANA 850 GT ABS, Petrol ( 839 CC)"],
            
},
"BAJAJ": {
"ASPIRE": ["STD (100 CC), Petrol ( 100 CC)"],
"AVENGER": ["STD (180 CC), Petrol ( 180 CC)", "STD (200 CC), Petrol ( 200 CC)"],
"AVENGER 220 BS IV":["AVENGER 220 BS IV, Petrol ( 220 CC)"],    
    
    
}, "BENELLI": {
"TNT 25": ["PREMIUM, Petrol ( 249 CC)", "STANDARD, Petrol ( 249 CC)"],
"TNT 300": ["STANDARD, Petrol ( 300 CC)"],
"TNT 600GT":["STANDARD, Petrol ( 600 CC)"],
"TNT 899":["STANDARD, Petrol ( 898 CC)"],
    
},
}
window.onload = function () {
var ManufacturerSel = document.getElementById("ManufacturerSel"),
 modelSel = document.getElementById("modelSel"),
 varientSel = document.getElementById("varientSel");
for (var country in stateObject) {
    
  
    //console.log(countySel.options[countySel.options.length]);
    
 ManufacturerSel.options[ ManufacturerSel.options.length] = new Option(country, country);
    
    // console.log(countySel.options)
}
 ManufacturerSel.onchange = function () {
 modelSel.length = 1; // remove all options bar first
varientSel.length = 1; // remove all options bar first
if (this.selectedIndex < 1) return; // done
for (var state in stateObject[this.value]) {
    
    
    console.log(state);
 modelSel.options[modelSel.options.length] = new Option(state, state);
}
}
 ManufacturerSel.onchange(); // reset in case page is reloaded
modelSel.onchange = function () {
varientSel.length = 1; // remove all options bar first
if (this.selectedIndex < 1) return; // done
var district = stateObject[ManufacturerSel.value][this.value];
for (var i = 0; i < district.length; i++) {
varientSel.options[ varientSel.options.length] = new Option(district[i], district[i]);
}
}
}







function form(){
    
   
    var form=document.querySelectorAll('input');
    console.log(form);
    var newform=[...form];
    console.log(newform[2]);
    var finalform=newform.slice(2);
    
    console.log(finalform)
    //console.log(form.value);
    
    var but=document.getElementById('submitbttn2');
    
    //console.log(form.type);
    
   //console.log(form);
    but.addEventListener('click',function(){
        
          //console.log(form.value);
        for(const y of finalform){
            
            console.log(y.type);
            if(y.type!=='checkbox' && y.value===''){
               
                window.alert(`fill the ${y.id} in the form`)
                break;
                
            }
            
            
        }
        
        
        
    })
    
    
    
}

form()








function chec(){
    
    
        console.log("helk")
    
        
       var s= document.querySelector('.center-template__onclickEvent');
     var formbtn=document.querySelector('.INPUT-BTTN');
        if (s.style.display === "block") {
    s.style.display = "none";
    regno.style.display='block'; 
     finalbttn.style.display='block';
    
            
  } else {
    s.style.display = "block";
      
    regno.style.display='none';  
    
      finalbttn.style.display='none';
      
      
      
  }
        
    
    
        
   // var s= document.getElementById('onclickEvent')
   // s.style.display.toggle='block';
    
    
}



finalbttn.addEventListener('click',function(){
    
    
    var reg=document.getElementById('Registration No');
    
    
    if(reg.value==''){
        
        
        window.alert('fill the Reg NUmber');
    }
    
    
})






/*
function popup(){
    
    var event=document.querySelector('.container-header')
    var pop=document.querySelector('.container-postion');
    //console.log(pop);
    
    
    console.log(event);
    
    event.addEventListener('click',function(){
        
        
        
        //console.log('helli')
        
        //pop.style.position='relative';
        
        if(pop.style.position=='absolute'){
            console.log('he')
             pop.style.position='relative';
            
            
            
        }
        else{
            console.log("hh");
            
             pop.style.position='absolute';
            
        }
        
        
        
    })

}




popup();
*/


