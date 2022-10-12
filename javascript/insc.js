function verification()
{
	ps1=document.getElementById("pw").value;
	ps2=document.getElementById("pw2").value;
	if (ps1!=ps2)
	{
	alert("les deux mot de passe ne sont pas identique" );
	document.getElementById("pw2").value="";
	document.getElementById("pw").focus();
	}
}
function verif()
{
	
	fn=document.getElementById("fn").value;
	nu=document.getElementById("nu").value;
	tel=parseInt(document.getElementById("tel").value);
	em=document.getElementById("em").value;
	pw1=document.getElementById("pw").value;
	pw2=document.getElementById("pw2").value;
	
	 if ((fn=="") ||(nu=="" ) ||(em=="") || (isNaN(tel)) || (pw1=="")|| (pw2==""))
	 alert("veuillez verifier vos données");
	 else
	   
	    document.getElementById("x").setAttribute("href","../dreamtravel/Dream Travel.html");	  

}	
function afficherpsd()
{
	if ((document.getElementById("vwp").checked)==true)
	   document.getElementById("pass").setAttribute("type","text");
	else 
	document.getElementById("pass").setAttribute("type","password");
}
	
