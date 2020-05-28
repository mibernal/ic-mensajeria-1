//Operaciones de la calculadora

//Definición de variables

var num1=0;
var num2=0;
var resultado=0;
var pantalla="0";
var memreg=0;
var ecuacion="";
var decPt=false;
var arith=false;
var operacion1="";
var operacion2="";
var opCode=0; //valores opCode 0=otra, 1=suma, 2=resta, 3=multiplicacion, 4, division;
//posibles listeners para las operaciones
var rListener=document.getElementById("resta");
var muListener=document.getElementById("multip");
var sumListener=document.getElementById("suma");

rListener.addEventListener("click", substract);
muListener.addEventListener("click", prod);
sumListener.addEventListener("click",suma);

//inicialización de ventana
window.onload = function() {
	var display=document.getElementById("mainbar");
	var eqn=document.getElementById("eqnbar");
	display.value='0';
	eqn="";
	num1=0;
	num2=0;
}

//funciones de memoria
function cleanDisplay(){
	num1=0;
	num2=0;
	resultado=0;
	ecuacion="";
	pantalla='0';
	decPt=false;
  arith=false;
  opCode=0;
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

//funciones numéricas

//funcion para retornar el id del boton

function retNumber(){
	var x="";
}
function one(){
	if (!arith){
		if(pantalla=='0')
			pantalla='1';
		else
			pantalla=pantalla+'1';
		ecuacion=ecuacion+'1';
	}
	else{
		arith=false;
		pantalla='1';
		ecuacion=ecuacion+'1';
	}
	updateDisp();
}
function two(){
	if (!arith){
		if(pantalla=='0')
			pantalla='2';
		else
			pantalla=pantalla+'2';
		ecuacion=ecuacion+'2';
	}
	else{
		arith=false;
		pantalla='2';
		ecuacion=ecuacion+'2';
	}
	updateDisp();
}
function three(){
	if (!arith){
		if(pantalla=='0')
			pantalla='3';
		else
			pantalla=pantalla+'3';
		ecuacion=ecuacion+'3';
	}
	else{
		arith=false;
		pantalla='3';
		ecuacion=ecuacion+'3';
	}
	updateDisp();
}
function four(){
	if (!arith){
		if(pantalla=='0')
			pantalla='4';
		else
			pantalla=pantalla+'4';
		ecuacion=ecuacion+'4';
	}
	else{
		arith=false;
		pantalla='4';
		ecuacion=ecuacion+'4';
	}
	updateDisp();
}
function five(){
	if (!arith){
		if(pantalla=='0')
			pantalla='5';
		else
			pantalla=pantalla+'5';
		ecuacion=ecuacion+'5';
	}
	else{
		arith=false;
		pantalla='5';
		ecuacion=ecuacion+'5';
	}
	updateDisp();
}
function six(){
	if (!arith){
		if(pantalla=='0')
			pantalla='6';
		else
			pantalla=pantalla+'6';
		ecuacion=ecuacion+'6';
	}
	else{
		arith=false;
		pantalla='6';
		ecuacion=ecuacion+'6';
	}
	updateDisp();
}
function seven(){
	if (!arith){
		if(pantalla=='0')
			pantalla='7';
		else
			pantalla=pantalla+'7';
		ecuacion=ecuacion+'7';
	}
	else{
		arith=false;
		pantalla='7';
		ecuacion=ecuacion+'7';
	}
	updateDisp();
}
function eight(){
	if (!arith){
		if(pantalla=='0')
			pantalla='8';
		else
			pantalla=pantalla+'8';
		ecuacion=ecuacion+'8';
	}
	else{
		arith=false;
		pantalla='8';
		ecuacion=ecuacion+'8';
	}
	updateDisp();
}
function nine(){
	if (!arith){
		if(pantalla=='0')
			pantalla='9';
		else
			pantalla=pantalla+'9';
		ecuacion=ecuacion+'9';
	}
	else{
		arith=false;
		pantalla='9';
		ecuacion=ecuacion+'9';
	}
	updateDisp();
}

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

//operaciones alfanuméricas

function add(){
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
/*
function divide(){
  */
  if(!arith){
    arith=true;
    num2=num1;
    num1=Number(pantalla);
    num1=calculon(opCode);
    pantalla=num1;
    ecuacion=ecuacion+'/'
  }
  else
  {
    newStr = ecuacion.substring(0, ecuacion.length - 1);
		ecuacion=newStr;
    ecuacion=ecuacion+'/'
  }
  opCode=4;
  updateDisp();
}

function squareRoot(){
  arith=true;
  num1=Number(pantalla);
  if(num1<0){
    pantalla="Error";
    ecuacion=pantalla;
  }
  else{
    num2=Math.sqrt(num1);
    pantalla=num2;
    ecuacion='\u221a'+num1;
  }
  updateDisp();
}

function substract(){
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

function prod(){
  if(!arith){
    arith=true;
    num2=num1;
    num1=Number(pantalla);
    num1=calculon(opCode);
    pantalla=num1;
    ecuacion=ecuacion+'x';
  }
  else
  {
    newStr = ecuacion.substring(0, ecuacion.length - 1);
		ecuacion=newStr;
    ecuacion=ecuacion+'x';
  }
  opCode=3;
  updateDisp();
}

//funcion que calcula la operacion previa
function calculon(operat){
  var resulta=0;
  if(operat==1)
    resulta=num2+num1;
  else if(operat==2)
    resulta=num2-num1;
  else if(operat==3)
    resulta=num2*num1;
  else if(operat==4)
    resulta=num2/num1;
  else
    resulta=num1;
  return resulta;
}

//funciones miscelaneas

function updateDisp(){
	document.getElementById("mainbar").value=pantalla;
	document.getElementById("eqnbar").value=ecuacion;
}

function retError(){
  pantalla="Error";
  ecuacion=pantalla;
}
function alertas(){
	alert("Desarrollada por John Richard Velásquez Prieto. Cod 1310012706. PSP. Junio de 2019");
}