//Teste
function OperacaoIfAnd(){
	var valorboleean1 = document.getElementById('boleean1').value;
	if(valorboleean1 == 0){
		var boleean1 = false;
	}else{
		boleean1 = true;
	}
	var valorboleean2 = document.getElementById('boolean2').value;
	if(valorboleean2 == 0){
		var boleean2 = false;
	}else{
		boleean2 = true;
	}
document.getElementById('booleanresult').value = IfAnd(boleean1,boleean2);
}

function OperacaoIfOr(){
	var valorboleean01 = document.getElementById('boleean01').value;
	if(valorboleean01 == 0){
		var boleean01 = false;
	}else{
		boleean01 = true;
	}
	var valorboleean02 = document.getElementById('boolean02').value;
	if(valorboleean02 == 0){
		var boleean02 = false;
	}else{
		boleean02 = true;
	}
document.getElementById('booleanresult01').value = IfOr(boleean01,boleean02);
}


function IfAnd(op1, op2){
	if(op1 && op2)
	{
		return 'True';
	}else{
		return 'False';
	}
}

function IfOr(op1, op2){
	if(op1 || op2)
	{
		return 'True';
	}else{
		return 'False';
	}
}