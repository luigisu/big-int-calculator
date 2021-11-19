# big-int-calculator

<!-- DESCRIPCION DE LA API -->
<aside class="notice">
big-int-calculator-back. 
</aside>
Api en node.js utilizando express

<!-- METODO  -->

## multiplication

<!-- url de la API con su metodo -->

> `POST https://young-harbor-34662.herokuapp.com/multiplication`

<!-- colocamos la peticion en el cada lenguaje , ayudar se con la opcion de postman -->

```ruby
url = URI("https://young-harbor-34662.herokuapp.com/multiplication")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Content-Type"] = "application/json"
request.body = JSON.dump({
  "multiplicand": "56789543216789955",
  "multiplier": "1234567785243"
})

response = https.request(request)
puts response.read_body
```

```javascript
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "multiplicand": "56789543216789955",
  "multiplier": "1234567785243"
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://young-harbor-34662.herokuapp.com/multiplication", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```

<!-- Respuesta de la api -->

> Respuesta Exitosa

```json
{
    "error": "",
    "body": {
        "result": "70110540594114008556279634065",
        "status": 1,
        "multiplicand": "56789543216789955",
        "multiplier": "1234567785243"
    }
}
```

> Respuesta fallida

```json
{
    "error": "internal error try again",
    "body": {}
}
```

<!-- DESCRIPCION DEL METODO -->

Recibe 2 strings con grandes numeros enteros y los multiplica

<!-- parametros con su descriocion -->

### Parametros

| Parametro    | Obligatorio | Descripcion                                                                      |
| ------------ | ----------- | -------------------------------------------------------------------------------- |
| multiplicand | false       | multiplicando.                                                                    |
| multiplier    | true        | multiplicador. |

### Errores conocidos


| Codigo | Significado                                                                               |
| ------ | ----------------------------------------------------------------------------------------- |
| 404    | Not Found                               |
| 500    | Internal Server Error         |

## list

<!-- url de la API con su metodo -->

> `GET https://young-harbor-34662.herokuapp.com/list`

<!-- colocamos la peticion en el cada lenguaje , ayudar se con la opcion de postman -->

```ruby
require "uri"
require "net/http"

url = URI("https://young-harbor-34662.herokuapp.com/list")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Get.new(url)

response = https.request(request)
puts response.read_body
```

```javascript
var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch("https://young-harbor-34662.herokuapp.com/list", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```

<!-- Respuesta de la api -->

> Respuesta Exitosa

```json
{
    "error": "",
    "body": [
        {
            "id": 12,
            "multiplicand": "56789543216789955",
            "multiplier": "1234567785243",
            "result": "70110540594114008556279634065",
            "status": 1,
            "create_date": "2021-11-19T04:05:16.000Z",
            "update_Daye": "2021-11-19T04:05:16.000Z"
        }
    ]
}
```

> Respuesta fallida

```json
{
    "error": "internal error try again",
    "body": {}
}
```

<!-- DESCRIPCION DEL METODO -->

Lista el historial de eventos de la calculadora.

<!-- parametros con su descriocion -->

### Parametros

| Parametro    | Obligatorio | Descripcion                                                                      |
| ------------ | ----------- | -------------------------------------------------------------------------------- |


### Errores conocidos


| Codigo | Significado                                                                               |
| ------ | ----------------------------------------------------------------------------------------- |
| 404    | Not Found                          |
| 500    | Internal Server Error             |





## disableAll

<!-- url de la API con su metodo -->

> `PUT https://young-harbor-34662.herokuapp.com/disableAll`

<!-- colocamos la peticion en el cada lenguaje , ayudar se con la opcion de postman -->

```ruby
require "uri"
require "net/http"

url = URI("https://young-harbor-34662.herokuapp.com/disableAll")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Put.new(url)

response = https.request(request)
puts response.read_body

```

```javascript
var requestOptions = {
  method: 'PUT',
  redirect: 'follow'
};

fetch("https://young-harbor-34662.herokuapp.com/disableAll", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```

<!-- Respuesta de la api -->

> Respuesta Exitosa

```json
{
    "error": "",
    "body": "Done"
}
```

> Respuesta fallida

```json
{
    "error": "internal error try again",
    "body": {}
}
```

<!-- DESCRIPCION DEL METODO -->

Lista el historial de eventos de la calculadora.

<!-- parametros con su descriocion -->

### Parametros

| Parametro    | Obligatorio | Descripcion                                                                      |
| ------------ | ----------- | -------------------------------------------------------------------------------- |


### Errores conocidos



| Codigo | Significado                                                                               |
| ------ | ----------------------------------------------------------------------------------------- |
| 404    | Not Found                          |
| 500    | Internal Server Error             |
