import  JsonFile1  from '../ol/myjson.js'; console.log("JsonFile1.Diego ok:" + JsonFile1.Diego); 
import {Fun1 , Fun2, Fun3, Clas1, DEFAULT_RADIUS as RDIUS  } from '../ol/file1.js';
console.log(Fun1 +":"+Fun2 +":"+Fun3 +":" + Clas1  +":");
let funx1 = new Fun1(), funx2 = new Fun2() , funx3 = new Fun3(), clasx1= new Clas1(); 
  console.log(funx1.f1 +":"+funx2.f2 +":"+funx3.f3 +":" + clasx1.getHola());
funx2.f2 =9; let  funx22 = new Fun2();
console.log("-:"+funx2.f2 +":"+funx22.f2 +":-");

function init(){ console.log("Inicio init.js:" + RDIUS); 
} 
export {init}; 
