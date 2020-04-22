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
   if (data.get('Id')=='') {
        Confirmar.innerHTML= `
        </br>
        <div class="alert alert-danger" role="alert">
           No se guardo
       </div>
        `
        alert("Rellene los datos");

    }else
    {
       /*fetch('https://jsonplaceholder.typicode.com/posts/'+data.get('Id'),{
        method: 'PUT',
        body: JSON.stringify({
            id:data.get('Id'),
            title:data.get('Title'),
            body:data.get('body'),
            userId: data.get('userId')
        }),
        headers:{'Content-Type': 'application/json; charset=UTF-8'}
                            })// se puede poner la dirrecion de url(es para un API) o un archivo en formato de  json
    .then( res => res.json() )
    //.catch(alert("No se guardo"))
    .then( datos => {
        console.log(datos);
           
     
    })*/
    //Ajax
    $.ajax(
        {
          url:'https://jsonplaceholder.typicode.com/posts/'+data.get('Id'),
          type:"PUT",
          data: {
            //'id=': data.get('Id'),
            'title=': data.get('Title'),
            'body=': data.get('body'),
            'userId=': data.get('userId')
          },
          success: function(data){
            console.log(data);
            Confirmar.innerHTML=
            `
            </br>
            <div class="alert alert-primary" role="alert">
               Se guardo Correctamente
           </div>
            `
          }
        }   
      )
      
       
    }



});