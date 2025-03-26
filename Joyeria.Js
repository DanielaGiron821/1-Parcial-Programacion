let inventario = []; //declaramos el producto en ambiente global
window.onload = cargarDesdeLocalStorage;
function cargarProducto() {
    //producto es un tipo de variable donde podemos almacenar valores
    //  multiples en una misma variable
    let producto = document.getElementById('producto').value
    let codigo = document.getElementById('codigo').value
    let compra = document.getElementById('compra').value
    let venta = document.getElementById('venta').value
    if (producto === '' || codigo === '' || compra === '' || venta === '') {
        Swal.fire("Debe llenar todos los campos");
        return
    }

    inventario.push([producto, codigo, compra, venta])
    guardarEnLocalStorage();
    console.log(inventario)
    document.getElementById('producto').value = ''
    document.getElementById('codigo').value = ''
    document.getElementById('compra').value = ''
    document.getElementById('venta').value = ''
    mostrarProducto()

}
function mostrarProducto() {
    let tabla = document.getElementById('mostrarProducto')
    tabla.innerHTML = `
         <tr>
              <th>Producto</th>
              <th>codigo</th>
              <th>Compra</th>
              <th>Venta</th>
          </tr>`;

  inventario.forEach((inventario, index) => {
        let fila = `
  <tr><td>${inventario[0]}</td><td>${inventario[1]}</td><td>${inventario[2]}
  </td><td>${inventario[3]}</td><td>`;
        tabla.innerHTML += fila
    })
}

function buscarProducto(){
    let busquedaCode=document.getElementById('codigo').value;
    if (busquedaCode===''){
        Swal.fire("Revise los campos");
        return;
    }
    let encontrado=inventario.find(int=>int[1]===busquedaCode)
    if (encontrado){
        document.getElementById('producto').value=encontrado[0]
        document.getElementById('compra').value=encontrado[2]
        document.getElementById('venta').value=encontrado[3]
    } else{
        Swal.fire("producto no encontrado");
    }
}

function actualizarProducto(){
    let productoN = document.getElementById('producto').value;
    let codigo = document.getElementById('codigo').value;
    let compraN = document.getElementById('compra').value;
    let ventaN = document.getElementById('venta').value;
    if(codigo === '' || producto === '' || compra === '' || venta === ''){
        Swal.fire("Debe llenar los campos");
        return;
    }
    let indice = inventario.findIndex(int=>int[1]===codigo);
    if(indice!==-1){
        inventario[indice]=[productoN,codigo,compraN,ventaN];
        guardarEnLocalStorage();
        document.getElementById('producto').value = ''
        document.getElementById('codigo').value = ''
        document.getElementById('compra').value = ''
        document.getElementById('venta').value = ''
        mostrarProducto()
        Swal.fire({
            title: "Este producto a sido actualizado correctamente",
            icon: "success",
            draggable: true
          });
    }else{
        Swal.fire("producto no encontrado");
    }
    

}
function eliminarProducto(){
    let codigo = document.getElementById('codigo').value;
    if(codigo===''){
        Swal.fire("Debe llenar el campo de codigo");
        return;
    }
    let indice =inventario.findIndex(int=>int[1]===codigo);
    if(indice!==-1){
        inventario.splice(indice,1);
        document.getElementById('producto').value = ''
        document.getElementById('codigo').value = ''
        document.getElementById('compra').value = ''
        document.getElementById('venta').value = ''
        guardarEnLocalStorage();
        mostrarProducto()
    
            Swal.fire({
                title: "Estas seguro?",
                text: "Este producto sera eliminado definitivamente",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Si, estoy seguro!"
              }).then((result) => {
                if (result.isConfirmed) {
                  Swal.fire({
                    title: "Eliminado!",
                    text: "El producto a sido eliminado",
                    icon: "success"
                  });
                }
              });
        
    }else{
        Swal.fire("producto no encontrado");
    }

}

function guardarEnLocalStorage() 
{
    localStorage.setItem("inventario", JSON.stringify(inventario));
}
function cargarDesdeLocalStorage() {
    let datosGuardados = localStorage.getItem("inventario");
    if (datosGuardados) {
        inventario = JSON.parse(datosGuardados);
        mostrarProducto();
    }
}