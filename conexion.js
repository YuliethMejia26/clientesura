//1. crear una variable que almacene la url 
let URL="https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg/top-tracks?market=US"

//2. CONFIGURO LA PETICION DE ENVIO DE DATOS AL SERVIDOR 
let peticion={

    method:"GET",
    headers:{Authorization:"Bearer BQCNkAWTC2I5kE41aCU-hlE1uWN43qFrpFdoEf2FB4QsDSgkpRqB0gVXjOswD3MX4NEJ8n-ifm5tD11xKg2CsDv55dwx1bJs5aRmEjRm4XafUV3v0bq2R6IldqBtANTYdsIObcwHlozezBNLTd6m7kBiZ6qD-DypCik"},
}

//3.utilizar la funcion fetch y traer los datos 
fetch(URL,peticion)
.then(respuesta=>respuesta.json())
.then(datos=>console.log(datos));