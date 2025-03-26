let inventario = []; 
window.onload = cargarDesdeLocalStorage;
function cargarProducto() {

    let producto = document.getElementById('producto').value
    let codigo = document.getElementById('codigo').value
    let compra = document.getElementById('compra').value
    let venta = document.getElementById('venta').value
    let fecha = document.getElementById('fecha').value
    if (producto === '' || codigo === '' || compra === '' || venta === '' || fecha === '') {
        Swal.fire("Debe llenar todos los campos");
        return
    }

    inventario.push([producto, codigo, compra, venta,fecha])
    guardarEnLocalStorage();
    console.log(inventario)
    document.getElementById('producto').value = ''
    document.getElementById('codigo').value = ''
    document.getElementById('compra').value = ''
    document.getElementById('venta').value = ''
    document.getElementById('fecha').value = ''
    mostrarInventario()

}
function mostrarInventario() {
    let tabla = document.getElementById('mostrarInventario')
    tabla.innerHTML = `
           <tr>
                <th style="color: white;">Producto</th>
                <th style="color: white;">Codigo</th>
                <th style="color: white;">Compras</th>
                <th style="color: white;">Ventas</th>
                <th style="color: white;">Fecha</th>
            </tr>`;

    inventario.forEach((inventario, index) => {
        let fila = `
  <tr><td>${inventario[0]}</td><td>${inventario[1]}</td><td>${inventario[2]}
  </td><td>${inventario[3]}</td><td><td>${inventario[4]}</td>`;
        tabla.innerHTML += fila
    })
}

function buscarProducto(){
    let busquedaCode=document.getElementById('codigo').value;
    if (busquedaCode===''){
        Swal.fire("Revise los campos");
        return;
    }
    let encontrado=inventario.find(inv=>inv[1]===busquedaCode)
    if (encontrado){
        document.getElementById('producto').value=encontrado[0]
        document.getElementById('compra').value=encontrado[2]
        document.getElementById('venta').value=encontrado[3]
        document.getElementById('fecha').value=encontrado[4]
    } else{
        Swal.fire("Inventario no encontrado");
    }
}

function actualizarProducto(){
    let productoN = document.getElementById('producto').value;
    let codigo = document.getElementById('codigo').value;
    let compraN = document.getElementById('compra').value;
    let ventaN = document.getElementById('venta').value;
    let fecha = document.getElementById('fecha').value;
    if(codigo===''|| producto===''|| compra===''|| venta==='' || fecha===''){
        Swal.fire("Debe llenar los campos");
        return;
    }
    let indice =inventario.findIndex(inv=>inv[1]===codigo);
    if(indice!==-1){
        inventario[indice]=[productoN,codigo,compraN,ventaN,fecha];
        guardarEnLocalStorage();
        document.getElementById('producto').value = ''
        document.getElementById('codigo').value = ''
        document.getElementById('compra').value = ''
        document.getElementById('venta').value = ''
        document.getElementById('fecha').value = ''
        mostrarInventario()
        Swal.fire({
            title: "Este inventario a sido actualizado correctamente",
            icon: "success",
            draggable: true
          });
    }else{
        Swal.fire("Inventario no encontrado");
    }
    

}
function eliminarProducto(){
    let codigo = document.getElementById('codigo').value;
    if(codigo===''){
        Swal.fire("Debe llenar el campo de codigo");
        return;
    }
    let indice =inventario.findIndex(inv=>inv[1]===codigo);
    if(indice!==-1){
        inventario.splice(indice,1);
        document.getElementById('producto').value = ''
        document.getElementById('codigo').value = ''
        document.getElementById('compra').value = ''
        document.getElementById('venta').value = ''
        document.getElementById('fecha').value = ''
        guardarEnLocalStorage();
        mostrarInventario()
    
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
              }).then((result) => {
                if (result.isConfirmed) {
                  Swal.fire({
                    title: "Deleted!",
                    text: "El inventario a sido eliminado",
                    icon: "success"
                  });
                }
              });
        
    }else{
        Swal.fire("Inventario no encontrado");
    }

}

function guardarEnLocalStorage() 
{
    localStorage.setItem("inventario", JSON.stringify(inventario));
}
function cargarDesdeLocalStorage() {
    let datosGuardados = localStorage.getItem("inventario");
    if (datosGuardados) {
        estudiantes = JSON.parse(datosGuardados);
        mostrarInventario();
    }
}