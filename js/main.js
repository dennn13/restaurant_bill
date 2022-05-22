/*!
* Copyright 2013-2022 Thanasis
* Licensed under MIT
*/

function externalLinks( )
{
	if (!document.getElementsByTagName) return;
	var anchors = document.getElementsByTagName("a");
	for (var i=0; i<anchors.length; i++)
	{
		var anchor = anchors[i];
		if (anchor.getAttribute("href") && anchor.getAttribute("rel") == "external")
			anchor.target = "_blank";
	}
}

//function initpage( )
//{
//	setHandler( 'tr', 'toggle', 'onclick', 'toggleColor' );
//	setHandler( 'span', 'heading', 'onmouseover', 'toggleColor' );
//	setHandler( 'span', 'heading', 'onmouseout', 'toggleColor' );
//	externalLinks( );
//}
//if( top.location != self.location )
//		top.location = self.location;
//window.onload = initpage;

function zeroClear(formname)
{
	var i, ctrl;
	for (i = 0; i < formname.elements.length; i++)
	{
		ctrl = formname.elements[i];
		if (ctrl.type == "text")
		{
			if (numeric(ctrl.value) == "")
				ctrl.value = "0";
		}
	}
}

function filterChars(s, charList)
{
	var s1 = "" + s; // force s1 to be a string data type
	var i;
	for (i = 0; i < s1.length; )
	{
		if (charList.indexOf(s1.charAt(i)) < 0)
			s1 = s1.substring(0,i) + s1.substring(i+1, s1.length);
		else
			i++;
	}
	return s1;
}

function numeric(s)
{
	return filterChars(s, "1234567890.-");
}

function numericVal(val,digits,minval,maxval)
{
	val = numeric(val);
	if (val == "" || isNaN(val)) val = 0;
	val = parseFloat(val);
	if (digits != null)
	{
		var dec = Math.pow(10,digits);
		val = (Math.round(val * dec))/dec;
	}
	if (minval != null && val < minval) val = minval;
	if (maxval != null && val > maxval) val = maxval;
	return parseFloat(val);
}

function preFormat(val,digits,minval,maxval)
{
	var sval = "" + numericVal(val,digits,minval,maxval);
	var i;
	var iDecpt = sval.indexOf(".");
	if (iDecpt < 0) iDecpt = sval.length;
	if (digits != null && digits > 0)
	{
		if (iDecpt == sval.length)
			sval = sval + ".";
		var places = sval.length - sval.indexOf(".") - 1;
		for (i = 0; i < digits - places; i++)
			sval = sval + "0";
	}
	var firstNumchar = 0;
	if (sval.charAt(0) == "-") firstNumchar = 1;
	for (i = iDecpt - 3; i > firstNumchar; i-= 3)
		sval = sval.substring(0, i) + "," + sval.substring(i);

	return sval;
}

 function Preformat( sValue )
{
   var r , re;
   var s = sValue;
   re = /,/i;
   r = s.replace( re , "." );
   return( r );
}
function Format( sValue )
{
   var r , re , i;
   var s = sValue;
   re = /\./i;
   i = s.search( re );
   r = s.replace( re , "," );
   while ( i > 3 )
   {
      i -= 3;
      r = r.substring( 0 , i ) + "." + r.substring( i , r.length )
   }
   return( r );
}
