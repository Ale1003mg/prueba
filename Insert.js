//link de conexion al api:http://jsonplaceholder.typicode.com/guide.html
console.log('Prueba');
//Restriciones de arranque

//Funciones
var Confirmar = document.getElementById('confirmar');
//var IDcat = document.getElementById('Idcat');
//var Cate = document.getElementById('categoria');
var formulario = document.getElementById("formulario");

formulario.addEventListener('submit', function(e){
    e.preventDefault();
    Confirmar.innerHTML=``;
    //console.log('Prueba');
    //console.log(Cate);
    var data= new FormData(formulario);
    console.log(data.get('userId'));
    console.log(data.get('Title'));
    console.log(data.get('body'));
   // var datos =  {idCat:data.get('Idcat'),catNombre:data.get('categoria')};
    //console.log(datos);
    if (data.get('userId')=='') {
        Confirmar.innerHTML= `
        </br>
        <div class="alert alert-danger" role="alert">
           No se guardo
       </div>
        `
        alert("Rellene los datos");

    }else
    {
       
       //Ajax
       $.ajax(
        {
          url:'https://jsonplaceholder.typicode.com/posts',
          type:"POST",
          data: {
            'title=': data.get('Title'),
            'body=': data.get('body'),
            'userId=': data.get('userId')
          }
        }   
      )
      .done(function(datos)
        {
          console.log(datos);
          
        }   
      )

         console.log(data.get('userId'));
         Confirmar.innerHTML=
         `
         </br>
         <div class="alert alert-primary" role="alert">
            Se guardo Correctamente
        </div>
         `
    }



});