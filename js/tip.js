// restip

function tipValue(amt,np,pt)
{
 return tip = (amt * pt) ; 	
 	
}
function Calc()
{
	var amt = numericVal(document.calc.amt.value);
	var pt = numericVal(document.calc.pt.value)/100;
	var np   = numericVal(document.calc.np.value);
	var tot = amt*(1+pt);
	var sp = tot/np;
		
	if (amt==0 ||np==0)
   { alert("NOTICE : \n Incomplete data \n Datos incompletos \n Dados incompletos "); 
    
	document.calc.tip.value = "";
	document.calc.tot.value = "";
	document.calc.sp.value = "";
  }
  else	
  {	
	
	document.calc.tip.value = preFormat(k(amt,np,pt),2);
	document.calc.tot.value = preFormat((amt*(1+pt)),2); 
  document.calc.sp.value = preFormat((tot/np),2); 
	  }	
}
function k(amt,np,pt)

{
	return tipValue(amt,np,pt);
	
}