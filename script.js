function getFormvalue() {
    //Write your code here
	let element=document.getElementById("form1");
	let fname = element.elements['fname'].values;
	let lname = element.elements['lname'].values;

	alert(fname +" "+lname);
	

}
