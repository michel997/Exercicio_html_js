var form = document.getElementById("formulario")
var onsubmit = function(event){
    event.preventDefault();
    
    if(!validar()){
    }else{
        form.onsubmit();
    }
}

form.addEventListener("submit", onsubmit);

function validar() {
    var campoA = document.getElementById("campo-a").value;
    var campoB = document.getElementById("campo-b").value;

    if(campoA > campoB) {
        alert('Negado');

    } else {
        alert('Tudo Correto');
    }
}