let valor1 //valor dos variables globales
let operacion
function uno() {
    valor = document.getElementById('pantalla').value
    if (valor === "") {
        valor = 0
    }
    document.getElementById('pantalla').value = 10 * (parseInt(valor)) + 1

}

function dos() {
    valor = document.getElementById('pantalla').value
    if (valor === "") {
        valor = 0
    }
    document.getElementById('pantalla').value = 10 * (parseInt(valor)) + 2
}

function tres() {
    valor = document.getElementById('pantalla').value
    if (valor === "") {
        valor = 0
    }
    document.getElementById('pantalla').value = 10 * (parseInt(valor)) + 3
}

function cuatro() {
    valor = document.getElementById('pantalla').value
    if (valor === "") {
        valor = 0
    }
    document.getElementById('pantalla').value = 10 * (parseInt(valor)) + 4
}

function suma(){
    valor1 = document.getElementById('pantalla').value
    operacion = "suma"
    document.getElementById('pantalla').value = 0
   
}


function resta() {
    valor1 = document.getElementById('pantalla').value
    operacion = "resta"
    document.getElementById('pantalla').value = 0
}

function multiplicar(){
    valor1 = document.getElementById('pantalla').value
    operacion = "multiplicar"
    document.getElementById('pantalla').value = 0

}

function division(){
    valor1 = document.getElementById('pantalla').value
    operacion = "division"
    document.getElementById('pantalla').value = 0

}


function igual() {
    if (operacion==='suma') {
        valor2 = document.getElementById('pantalla').value
        let total = parseInt(valor1) + parseInt(valor2)
        document.getElementById('pantalla').value = total
        valor1 = document.getElementById('pantalla').value
        
        Swal.fire({
            title: "Suma",
            text: "Usted esta trabajando con suma.",
            imageUrl: "https://c0.klipartz.com/pngpicture/147/495/gratis-png-smiley-pulgar-senal-de-emoticon-meme-smiley-thumbnail.png",
            imageWidth: 300,
            imageHeight: 200,
            imageAlt: "Custom image"
          });
        
    }
    else if (operacion === 'resta') {
        valor2 = document.getElementById('pantalla').value
        let total = parseInt(valor1) - parseInt(valor2)
        document.getElementById('pantalla').value = total
        valor1 = document.getElementById('pantalla').value

        Swal.fire({
            title: "Usted esta trabajando con resta",
            icon: "success",
            draggable: true
          });
    }

    if (operacion==='multiplicar') {
        valor2 = document.getElementById('pantalla').value
        let total = parseInt(valor1) * parseInt(valor2)
        document.getElementById('pantalla').value = total
        valor1 = document.getElementById('pantalla').value

        Swal.fire({
            position: "top-left",
            icon: "success",
            title: "Usted esta trabajando con multiplicacion",
            showConfirmButton: false,
            timer: 1500
          });
    }

    else if (operacion==='division') {
        valor2 = document.getElementById('pantalla').value
        let total = parseInt(valor1) / parseInt(valor2)
        document.getElementById('pantalla').value = total
        valor1 = document.getElementById('pantalla').value

        Swal.fire({
            title: "division",
            text: "Usted esta trabajando con division",
            icon: "success",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Aceptar"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "",
                text: "",
                icon: ""
              });
            }
          });
    }

}


function cinco() {
    valor = document.getElementById('pantalla').value
    if (valor === "") {
        valor = 0
    }
    document.getElementById('pantalla').value = 10 * (parseInt(valor)) + 5
}

function seis() {
    valor = document.getElementById('pantalla').value
    if (valor === "") {
        valor = 0
    }
    document.getElementById('pantalla').value = 10 * (parseInt(valor)) + 6
}

function siete() {
    valor = document.getElementById('pantalla').value
    if (valor === "") {
        valor = 0
    }
    document.getElementById('pantalla').value = 10 * (parseInt(valor)) + 7
}

function ocho() {
    valor = document.getElementById('pantalla').value
    if (valor === "") {
        valor = 0
    }
    document.getElementById('pantalla').value = 10 * (parseInt(valor)) + 8
}

function nueve() {
    valor = document.getElementById('pantalla').value
    if (valor === "") {
        valor = 0
    }
    document.getElementById('pantalla').value = 10 * (parseInt(valor)) + 9
}

function cero() {
    valor = document.getElementById('pantalla').value
    if (valor === "") {
        valor = 0
    }
    document.getElementById('pantalla').value = 10 * (parseInt(valor)) + 0
}
