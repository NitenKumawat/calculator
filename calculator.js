var ans=0;
var temp1="0";
var temp2="";
var memory=0;
var flag=0;
var symbol="+";
var start=0;
var display=document.querySelector(".answer");
var temp_display=document.querySelector(".temp_answer");

function calc(num){

	if(flag!==1 || num!=='.'){		// to check no repeatetion of dot
		temp1+=num;
	}
	var x=Number(temp1);
	console.log(x);
	if(num!=="." && flag==0){
		temp1=x.toString();		//	to remove 0's from the begining 
	}
	else{
		flag=1;
	}
	display.textContent=temp1;
}

function solve (num){		//if a symbol is passed
	if(start===0){
		memory=Number(temp1);
		temp2+=temp1+num;
		symbol=num;
		start++;
		temp_display.textContent=temp2;
		// console.log("mem is: "+memory);
	}
	else{
		if(symbol!=="=")
			temp2+=temp1+num;
		else 
			temp2=memory+num;
		temp_display.textContent=temp2;

		if(symbol=="+")
			sum();
		else if(symbol==="-")
			subtract();
		else if(symbol==="/")
			divide();
		else if(symbol==="*")
			multiply();
		else if(symbol==="%")
			modulo();
		// else if(symbol==="="){
		// 	continue;
		// }
		display.textContent=memory;
		symbol=num;
	}
	temp1="0";
}

function sum(){
	memory+=Number(temp1);
}
function subtract(){
	memory-=Number(temp1);
}
function multiply(){
		console.log("m before:"+ memory);
		memory*=Number(temp1);
		console.log("m after: "+ memory);
}
function divide(){
		memory/=Number(temp1);
	}
function modulo(){
		memory%=Number(temp1);
	}

var button1=document.querySelector(".button1");
var button2=document.querySelector(".button2");
var button3=document.querySelector(".button3");
var button4=document.querySelector(".button4");
var button5=document.querySelector(".button5");
var button6=document.querySelector(".button6");
var button7=document.querySelector(".button7");
var button8=document.querySelector(".button8");
var button9=document.querySelector(".button9");
var button0=document.querySelector(".button0");
var button_dot=document.querySelector(".button_dot");
var button_mod=document.querySelector(".button_mod");
var button_ac =document.querySelector(".button_ac");
var buttonequalto= document.querySelector(".buttonequalto");
var button_sum=document.querySelector(".button_sum");
var button_divide=document.querySelector(".button_divide");
var button_multiply=document.querySelector(".button_multiply");
var button_sub=document.querySelector(".button_sub");
var button_ce=document.querySelector(".button_ce");
// button1.addEventListener("click",calc("1"));
button1.addEventListener("click",function(){calc("1");});
button2.addEventListener("click",function(){calc("2");});
button3.addEventListener("click",function(){calc("3");});
button4.addEventListener("click",function(){calc("4");});
button5.addEventListener("click",function(){calc("5");});
button6.addEventListener("click",function(){calc("6");});
button7.addEventListener("click",function(){calc("7");});
button8.addEventListener("click",function(){calc("8");});
button9.addEventListener("click",function(){calc("9");});
button0.addEventListener("click",function(){calc("0");});
button_dot.addEventListener("click",function(){calc(".");});
button_mod.addEventListener("click",function(){solve("%");});
buttonequalto.addEventListener("click",function(){solve("=");});
button_sum.addEventListener("click",function(){solve("+");});
button_sub.addEventListener("click",function(){solve("-");});
button_multiply.addEventListener("click",function(){solve("*");});
button_divide.addEventListener("click",function(){solve("/");});
button_ac.addEventListener("click",function(){
	ans=0;
	temp1="0";
	temp2="";
	memory=0;
	flag=0;
	start=0;
	temp_display.textContent=(temp2);
	display.textContent=(temp1);
});

button_ce.addEventListener("click",function(){
	temp1="0";
	flag=0;
	//console.log("ce button");
	display.textContent=(temp1);
});