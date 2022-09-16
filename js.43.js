
let  beschreibung=document.getElementById("beschreibung");
let wert=document.getElementById("wert");
let yazdir=document.getElementById("yazdir");


function add() {

   if(contreller()==false)
   return;

   yaz();
    
}


function contreller() {

if (beschreibung.value=="") {

    beschreibung.style.borderBottom="2px solid red";
    return false;
}
else if (wert.value=="") {
    wert.style.borderBottom="2px solid red";
    return false;
    
}
else
return true



    
}

function yaz() {
    

    let conteinerdiv =document.createElement("div");
    let span1=document.createElement("span");
    let div=document.createElement("div");
    let span2=document.createElement("span");






   conteinerdiv.appendChild(span1);
   conteinerdiv.appendChild(div);
   conteinerdiv.appendChild(span2);
   
  
   let zahl=Number(wert.value);
   div.innerHTML=beschreibung.value;
   span2.innerHTML=wert.value+ " "+"$";
 
   span1.innerHTML="+";

  
   if (zahl<0) {
   
    span1.style.backgroundColor="var(--minus)";
    span2.style.backgroundColor="var(--minus)";
    span1.innerHTML="-";
   
   }
   beschreibung.value="";
   wert.value="";
   
   

   yazdir.appendChild(conteinerdiv);
  
 

   
}