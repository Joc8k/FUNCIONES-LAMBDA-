var boton = document.getElementById("btn");

// boton[0].addEventListener('click',  () => {console.log("Hola")});

// boton[0].onclick =  () => {console.log("Hola")};




/*boton.onclick = () => {

    var resultado = document.getElementById("result");
    e1 = document.getElementById("num1").value;
    e2 = document.getElementById("num2").value;

    num1 = parseInt(e1);
    num2 = parseInt(e2);

    resultado.innerHTML =  num1 + num2;

}*/


var suma = (e1 , e2) => {

    var resultado = document.getElementById("result");
    
    num1 = parseInt(e1);
    num2 = parseInt(e2);

    resultado.innerHTML =  num1 + num2;

}



boton.onclick =() => {

    this.boton.style.backgroundColor = 'red';
}

var arreglo = [1,2,3,4,5];


arreglo.forEach((x) => {console.log(x*x)})
