


//Variables
const tipoSal = document.querySelector('#tipos')
const cantidad = parseInt(document.querySelector('#cantidad').value)
const btnAgregar = document.querySelector('#btnAgregar')
const infoProd = document.querySelector('#infoProd')
const formAdd= document.querySelector('#formAdd')

const userHtml = document.querySelector("#imprimir")
const btnIngresar = document.querySelector("#btnIngreso")


let producciones = []
mensaje()
detectarTipo()
detectarCantidad()

cargarEventListeners()

function cargarEventListeners(){
 
formAdd.addEventListener('click' , agregarProd)
infoProd.addEventListener('click', eliminarProd)
document.addEventListener("DOMContentLoaded", () => {
  let datosLS = JSON.parse(localStorage.getItem("tareas")) || [];
  task = datosLS;
  
  produccionHTML()
})
}

let datosLS = JSON.parse(localStorage.getItem("tareas")) || [];
producciones = datosLS;
//FUNCIONES


  


var myModal = new bootstrap.Modal(document.getElementById("staticBackdrop"), {});
document.onreadystatechange = function () {
  myModal.show();
};


function agregarProd(e){
    
  
  detectarCantidad()
detectarTipo()
  
     e.preventDefault()
     
    if(e.target.classList.contains('btnAgregar')){
        
const produccionSeleccionada = e.target.parentElement
leerDatos(produccionSeleccionada)
  
produccionSeleccionada.reset()
detectarCantidad()
detectarTipo()
}}


function eliminarProd(e){
e.preventDefault()
    Swal.fire({
        title: 'Estas seguro de eliminar?',
        text: "Estas a punto de eliminar una produccion",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, Eliminar!'
      }).then((result) => {
        if (result.isConfirmed) {

            if (e.target.classList.contains('borrar')){

                const prodId = e.target.getAttribute('data-id')
                producciones = producciones.filter(produccion => produccion.id !== prodId)
                
                produccionHTML()
                mensaje()
                
                }
          Swal.fire(
            'Eliminado!',
            'Produccion eliminada',
            'success'
          )
        }
      })
    


}






// leer datos y extraer 

function leerDatos(produccion){


const infoProd = {

tipo: produccion.querySelector('#tipos').value,
imagen:produccion.querySelector('#tipos').options[tipos.selectedIndex].getAttribute('src'),
cantidad:Number(produccion.querySelector('#cantidad').value),
id: produccion.querySelector('#tipos').options[tipos.selectedIndex].getAttribute('data-id')
 
}
 

//revisar si existe algo en el array
const existe = producciones.some(producc=> producc.id === infoProd.id)
if(existe){
    const product = producciones.map(produccion => {
        if (produccion.id === infoProd.id){
            produccion.cantidad += infoProd.cantidad
            return produccion
        }else{
            return produccion
        }
    }) 
    producciones =[...product]
 
}else{
    producciones = [...producciones , infoProd]
}



mensaje()


produccionHTML()
}


//muestra html
function produccionHTML(){



    //limpiar html
    limpiaHtml()

    //recorre producciones y genera html
    producciones.forEach((produccion)=>{
        const row = document.createElement('tr')
        let today = new Date()
        let now = today.toLocaleString()

        let palletE = Number.parseInt(produccion.cantidad/56)
        let palletP =produccion.cantidad +"bolsas"
        if(produccion.cantidad===56){
        palletE
        console.log("si")
        }else{
          palletP
          console.log("no")
        }
        row.innerHTML=`


        <div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
    <img src="${produccion.imagen}"  class="img-fluid align-items-center">
    </div>
    <div class="col-md-8">
      <div class="card-body">
      <p class="card-text 10px"><small class="text-muted">${now}</small></p>
        <h5 class="card-title h4">${produccion.tipo} <a href="#" class="borrar btn btn-outline-danger"" data-id="${produccion.id}" >X <a/></h5>
        <p class="card-text"><small class="text-muted">Cantidad Total bolsas : ${produccion.cantidad} </small></p>
        <p class="card-text"><small class="text-muted">Cantidad Pallets : ${palletE} </small></p>
        
        
      </div>
    </div>
  </div>
</div>
        

         


        `
        
infoProd.appendChild(row)



    

    })

    //persistir los datos con localStorage
    localStorage.setItem("tareas", JSON.stringify(producciones))
}


function limpiaHtml(){

infoProd.innerHTML= ""

}




   
function mensaje(){
    if(producciones.length===0){
        infoProd.innerHTML = "Aun no se agrego nada"
    document.querySelector("#btnProduct").style.visibility = 'hidden'
    }else{
        document.querySelector("#btnProduct").style.visibility = 'visible'
    }
    
}

 
function detectarTipo(){

  if (tipoSal.value === "Seleccione un tipo" ){
    btnAgregar.disabled = true
  }else{
    btnAgregar.disabled = false
  }

 
}



function detectarCantidad(){
  if(document.querySelector('#cantidad').value === "" ){
    btnAgregar.disabled = true
  }else{
    btnAgregar.disabled = false
  }
}











btnIngresar.addEventListener("click" , users)
  let user = document.querySelector("#persona")

function users (){
  
  let horario = document.querySelector("#horario")
  userHtml.innerHTML = `
   Operario: ${user.value} - Turno: ${horario.value}
  
  
  `
  
  myModal.hide()

  
console.log(user.value)


}

function detectarModal(){
  while (userHtml) {
    myModal.show()
  }
  
  
  
}
