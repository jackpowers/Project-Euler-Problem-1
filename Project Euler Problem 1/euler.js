function clearErrors() {    
    for (var loopCounter = 0; 
        loopCounter < document.forms["numberFun"].elements.length; 
        loopCounter++) {
        if (document.forms["numberFun"].elements[loopCounter]
           .parentElement.className.indexOf("has-") != -1) {
            
            document.forms["numberFun"].elements[loopCounter]
               .parentElement.className = "form-group";
        }
    }    
}
function resetForm() {
    clearErrors();
    document.forms["numberFun"]["num1"].value = "";
    document.forms["numberFun"]["num2"].value = "";
    document.forms["numberFun"]["num3"].value = "";
    document.getElementById("submitButton").innerText = "Submit";
    document.forms["numberFun"]["num1"].focus();
    document.getElementById("results").style.display = "none";

    
    
}
function validateItems() {
    clearErrors();
    var num1 = document.forms["numberFun"]["num1"].value;
    var num2 = document.forms["numberFun"]["num2"].value;
    var num3 = document.forms["numberFun"]["num3"].value;
    if (num1 == "" || isNaN(num1)|| num1 <= 0) {
        alert("Factor 1 must be filled in with a postive number.");
        document.forms["numberFun"]["num1"]
           .parentElement.className = "form-group has-error";
        document.forms["numberFun"]["num1"].focus();
        return false;
    }
   if (num2 == "" || isNaN(num2) || num2 <=0 ) {
       alert("Factor 2 must be filled in with a positive number.");
       document.forms["numberFun"]["num2"]
          .parentElement.className = "form-group has-error"
       document.forms["numberFun"]["num2"].focus();
       return false;
   }
    if (num3 == "" || isNaN(num3)|| num3 <= 0 ) {
       alert("Range Max must be filled in with a positive number.");
       document.forms["numberFun"]["num3"]
          .parentElement.className = "form-group has-error"
       document.forms["numberFun"]["num3"].focus();
       return false;
    }
    return false;
}
function sumOfMultiples() { 
   
  var numArray = []; 
    
  var num1 = parseInt(document.forms["numberFun"]["num1"].value);

  var num2 = parseInt(document.forms["numberFun"]["num2"].value);

  var numStep = parseInt(document.forms["numberFun"]["num3"].value);

  document.getElementById("results").style.display = "block";

  document.getElementById("textAppear").innerText = "Here is the sum of multiples of " + num1 + " or " + num2 + " below " + numStep + ":";

for (i = 1; i < numStep; i++) {

    if (i % num1 == 0 || i % num2 == 0) {

      numArray.push(i);
      
    
    }
    
  
}
var sumMultiples= numArray.reduce(add, 0);

function add(a, b) {
    return a + b;
}



document.getElementById("numAppear").innerText = sumMultiples;
return false;
 
}
