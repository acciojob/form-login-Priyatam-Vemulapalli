function getFormvalue() {
    //Write your code here
	let element=document.getElementById("form1");
	let fname = element.elements['fname'].value;
	let lname = element.elements['lname'].value;

	alert(fname +" "+lname);
	

}
