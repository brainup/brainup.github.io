//your javascript goes here
var currentTab = 0;
var investimento = 0;

document.addEventListener("DOMContentLoaded", function(event) {
    showTab(currentTab);
});



function showTab(n) {
    var x = document.getElementsByClassName("tab");
    x[n].style.display = "block";
    if (n == 0) {
        document.getElementById("prevBtn").style.display = "none";
    } else {
        document.getElementById("prevBtn").style.display = "inline";
    }
    if (n == (x.length - 1)) {
        document.getElementById("nextBtn").innerHTML = "ENVIAR!";
    } else {
        document.getElementById("nextBtn").innerHTML = "PRÓXIMO";
    }
    fixStepIndicator(n)
}

function nextPrev(n) {
    document.getElementById("mensagem").innerText = "";

    var x = document.getElementsByClassName("tab");
    if (n == 1 && !validateForm()) return false;
    
    
    if(currentTab == 1 && investimento == 0){
        document.getElementById("mensagem").innerText = "Erro";
        return false;
    }  

    x[currentTab].style.display = "none";
    currentTab = currentTab + n;
    
    if (currentTab >= x.length) {
        // document.getElementById("regForm").submit();
        // return false;
        //alert("sdf");w
        document.getElementById("nextprevious").style.display = "none";
        document.getElementById("all-steps").style.display = "none";
        document.getElementById("text-message").style.display = "block";
    }

   
    showTab(currentTab);
   
}
function selecionarInvestimento(valor, selectedIndex) {
    investimento = valor;
    lista = document.getElementsByClassName("btn-investimento");
    for (i = 1; i < lista.length+1; i++) {
        document.getElementById('btn0'+i).style.background = '#3d1365';
    }
    document.getElementById('btn0'+selectedIndex).style.background = '#39a361';
    console.log(invesitmento);
}

function validateForm() {
    var x, y, i, valid = true;
    x = document.getElementsByClassName("tab");
    y = x[currentTab].getElementsByTagName("input");
    for (i = 0; i < y.length; i++) {
        if (y[i].value == "") {
            y[i].className += " invalid";
            valid = false;
        }
    }
    if (valid) { document.getElementsByClassName("step")[currentTab].className += " finish"; }
    return valid;
}

function fixStepIndicator(n) {
    var i, x = document.getElementsByClassName("step");
    for (i = 0; i < x.length; i++) { x[i].className = x[i].className.replace(" active", ""); }
    x[n].className += " active";
}