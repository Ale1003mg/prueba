//link de conexion al api:http://jsonplaceholder.typicode.com/guide.html
console.log('Prueba');
var contenido = document.getElementById('contenido');
//var busc = document.getElementById('Bus');
var formulario = document.getElementById("formulario");
formulario.addEventListener('submit', function(e){
    e.preventDefault();
    var data= new FormData(formulario);
    console.log(data.get('Bus'));

    $.ajax(
      {
        url:'https://jsonplaceholder.typicode.com/posts',
        type:"GET"
      }   
    )
    .done(function(datos)
      {
        console.log(datos);
        contenido.innerHTML = ''
      
        for(let valor of datos){
        if(valor.id == data.get('Bus', Int32Array)){  
         contenido.innerHTML += `
          
          <tr>
            <th scope="row">${valor.userId}</th>
            <td>${valor.id}</td> 
            <td>${valor.title}</td>  
            <td>${valor.body}</td> 
            <th>
            <button type="submit" id="Limpiar" class="btn btn-primary w-10" >Modificar</button>
            <button type="submit" id="Limpiar" class="btn btn-danger w-10" >Eliminar</button>
          </th>
           </tr>
   
           ` 
      }}}   
    )
 

});

function traer(){

  
    $.ajax(
      {
        url:'https://jsonplaceholder.typicode.com/posts',
        type:"GET"
      }   
    )
    .done(function(datos)
      {
        console.log(datos);
        Tabla(datos)
      }   
    )

};



function Tabla(datos){
    //console.log(datos)
     contenido.innerHTML = ''

    for(let valor of datos){
        
    contenido.innerHTML += `
       
       <tr>
       <th scope="row">${valor.userId}</th>
            <td>${valor.id}</td> 
            <td>${valor.title}</td>  
            <td>${valor.body}</td> 
            <th>
         <button type="submit" id="Limpiar" class="btn btn-primary w-10" >Modificar</button>
         <button type="submit" id="Limpiar" class="btn btn-danger w-10" >Eliminar</button>
       </th>
        </tr>

        ` 
    }

};
function Limpiar(){
    contenido.innerHTML = ''
    contenido.innerHTML += `
       
    <tr>
      <th scope="row"></th>
      <td></td> 
      <td></td> 
      <td></td> 
      <td></td>
     </tr>

     ` 
};