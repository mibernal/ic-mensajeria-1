//Operaciones de la calculadora

//Definición de variables

var num1,num2;
var resultado=0;
var pantalla="0";
var memreg=0;
var ecuacion="0";
var decPt=false;
var arith=false;
var opCode=0;

//listeners para numeros

var key1=document.getElementById("1");
var key2=document.getElementById("2");
var key3=document.getElementById("3");
var key4=document.getElementById("4");
var key5=document.getElementById("5");
var key6=document.getElementById("6");
var key7=document.getElementById("7");
var key8=document.getElementById("8");
var key9=document.getElementById("9");
var key0=document.getElementById("0");

key1.addEventListener("click",retIdKey);
key2.addEventListener("click",retIdKey);
key3.addEventListener("click",retIdKey);
key4.addEventListener("click",retIdKey);
key5.addEventListener("click",retIdKey);
key6.addEventListener("click",retIdKey);
key7.addEventListener("click",retIdKey);
key8.addEventListener("click",retIdKey);
key9.addEventListener("click",retIdKey);
key0.addEventListener("click",retIdKey);

//listeners para funciones

var oper1=document.getElementById("suma");
var oper2=document.getElementById("resta");
var oper3=document.getElementById("multip");
var oper4=document.getElementById("divis");

var answer=document.getElementById("igual");


oper1.addEventListener("click", retOper);
oper2.addEventListener("click", retOper);
oper3.addEventListener("click", retOper);
oper4.addEventListener("click", retOper);

answer.addEventListener("click", returnEqual);

function retIdKey(){
  if(!arith){
    if(pantalla=="0")
      pantalla=this.id;
    else
      pantalla=pantalla+this.id;
    if(ecuacion=="0")
      ecuacion=this.id;
    else
      ecuacion=ecuacion+this.id;
  }
  else{
		arith=false;
		pantalla=this.id;
		ecuacion=ecuacion+this.id;    
  }
  updateDisp();
}

function retOper(){
  decPt=false;
  if(this.id=="suma"){
    if(!arith){
      arith=true;
      num2=num1;
      num1=Number(pantalla);
      num1=calculon(opCode);
      pantalla=num1;
      ecuacion=ecuacion+'+';
    }
    else
    {
      newStr = ecuacion.substring(0, ecuacion.length - 1);
      ecuacion=newStr;
      ecuacion=ecuacion+'+';
    }
    opCode=1;
    updateDisp();
  }
  else if(this.id=="resta"){
    if(!arith){
      arith=true;
      num2=num1;
      num1=Number(pantalla);
      num1=calculon(opCode);
      pantalla=num1;
      ecuacion=ecuacion+'-';
    }
    else
    {
      newStr = ecuacion.substring(0, ecuacion.length - 1);
      ecuacion=newStr;
      ecuacion=ecuacion+'-';
    }
    opCode=2;
    updateDisp();
  }
  else if(this.id=="multip"){
    if(!arith){
      arith=true;
      num2=num1;
      num1=Number(pantalla);
      num1=calculon(opCode);
      pantalla=num1;
      ecuacion=ecuacion+'\u00d7';
    }
    else
    {
      newStr = ecuacion.substring(0, ecuacion.length - 1);
      ecuacion=newStr;
      ecuacion=ecuacion+'\u00d7';
    }
    opCode=3;
    updateDisp();
  }
  else if(this.id=="divis"){
    if(!arith){
      arith=true;
      num2=num1;
      num1=Number(pantalla);
      num1=calculon(opCode);
      pantalla=num1;
      ecuacion=ecuacion+'/';
    }
    else
    {
      newStr = ecuacion.substring(0, ecuacion.length - 1);
      ecuacion=newStr;
      ecuacion=ecuacion+'/';
    }
    opCode=4;
    updateDisp();
  }
}

//inicialización de ventana
window.onload = function() {
	var display=document.getElementById("mainbar");
	var eqn=document.getElementById("eqnbar");
	display.value='0';
	eqn="";
	num1=0;
	num2=0;
  //opCode=0;
}

//funciones de memoria
function cleanDisplay(){
	num1=0;
	num2=0;
  opCode=0;
	resultado=0;
	ecuacion="";
	pantalla='0';
	decPt=false;
	document.getElementById("mainbar").value=pantalla;
	document.getElementById("eqnbar").value=ecuacion;
}
	
function addMemory(){
	if(pantalla!="0")
	{
		memreg=Number(pantalla)+memreg;
		pantalla=memreg.toString();
		ecuacion=pantalla;
		document.getElementById("mainbar").value=pantalla;
		document.getElementById("eqnbar").value=ecuacion;
	}		
}

function recallMemory(){
	pantalla=Number(memreg);
	ecuacion=pantalla;
	document.getElementById("mainbar").value=pantalla;
	document.getElementById("eqnbar").value=ecuacion;
}

function cleanMemory(){
	memreg=0;
	pantalla=Number(memreg);
	ecuacion="";
	document.getElementById("mainbar").value=pantalla;
	document.getElementById("eqnbar").value=ecuacion;
}

function backspaces(){
	var lastChar = pantalla[pantalla.length -1];
	if(pantalla.length == 1 && lastChar!='0')
	{
		pantalla='0';
		newStr = ecuacion.substring(0, ecuacion.length - 1);
		ecuacion=newStr;
		document.getElementById("mainbar").value=pantalla;
		document.getElementById("eqnbar").value=ecuacion;
	}
	else if(pantalla.length == 1 && lastChar=='0'){
		//hacer nada	
	}
	else
	{
		if (lastChar=='.')
			decPt=false;
		var newStr = pantalla.substring(0, pantalla.length - 1);
		pantalla=newStr;
		newStr = ecuacion.substring(0, ecuacion.length - 1);
		ecuacion=newStr;
		document.getElementById("mainbar").value=pantalla;
		document.getElementById("eqnbar").value=ecuacion;
	}		
}

function returnEqual(){
  num2=num1;
  num1=Number(pantalla);
  pantalla=calculon(opCode);
  ecuacion=ecuacion+"="+pantalla;
  updateDisp();
  //codigo de prueba
  num1=0;
	num2=0;
  opCode=0;
	resultado=0;
	ecuacion="";
	pantalla='0';
	decPt=false;
}

//funcion para retornar el id del boton
function zero(){
	if(pantalla=='0')
		pantalla='0';
	else
		pantalla=pantalla+'0';
	ecuacion=ecuacion+'0';
	document.getElementById("mainbar").value=pantalla;
	document.getElementById("eqnbar").value=ecuacion;
}

function comma(){
	if(!decPt)
	{
		decPt=true;
		pantalla=pantalla+'.';
		ecuacion=ecuacion+'.';
		document.getElementById("mainbar").value=pantalla;
		document.getElementById("eqnbar").value=ecuacion;
	}
}

  //funciones miscelaneas
  
function calculon(operat){
  var resulta=0;
  if(operat==1)
    resulta=num2+num1;
  else if(operat==2)
    resulta=num2-num1;
  else if(operat==3)
    resulta=num2*num1;
  else if(operat==4){
    resulta=num2/num1;
  }
  else
    resulta=num1;
  return resulta;
}

function errorMgt(){
  pantalla="Error";
  ecuacion="Error";
  alert("Division por cero");
  updateDisp();
  //codigo de prueba
  num1=0;
	num2=0;
  opCode=0;
	resultado=0;
	ecuacion="";
	pantalla='0';
	decPt=false;
	
}

function lon(){
  arith=true;
  num1=Number(pantalla);
  if(num1<=0){
    pantalla="Error";
    ecuacion=pantalla;
  }
  else{
    num2=Math.log(num1);
    pantalla=num2;
    ecuacion='ln '+num1;
  }
  updateDisp();
}

function updateDisp(){
	document.getElementById("mainbar").value=pantalla;
	document.getElementById("eqnbar").value=ecuacion;
}


