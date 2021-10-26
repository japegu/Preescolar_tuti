//Se crea un servidor local con una ruta localhost....

const express = require('express');  //require es lo que aporta la libreria express
const app = express();              // a la variable app se le asigna todo lo que tiene express como metodos
const port = 4040;  //Se escoje un puerto libre

app.get('/', (function(req,res) {  //No es necesario que se usen los dos req y res
    
    res.send (`<h1>Hola Mundo Express</h1>
            <h2>Grupo NRC 53404</h2>`);
}));

app.listen(port,function(){

    console.log (`Ya esta funcionando el servidor en el puerto ${port}`);
})
    
//Para activar el servidor se una la instruccion en terminal node y el nombre del archivo, en este caso node. index.js
