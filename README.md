# Iván Film
## _Películas de Studio Ghibli_

[![Build Status](https://app.travis-ci.com/ivanAlfonsoVillaVazquez/film-ivan.svg?branch=main)](https://travis-ci.org/ivanAlfonsoVillaVazquez/film-ivan)

Ivan film es un sitio web para buscar peliculas del Studio Ghibli, del legendario creador de anime Hayao Miyazaki, es reconocido por sus películas animadas fascinantes y de culto, como las que componen esta colección.

## Arquitectura

<img src="/src/img/arquitectura.JPG" width="800">

La arquitectura del proyecto está constituida de la siguiente manera:

- Sitio Web: El sitio web esta utilizando NodeJs como servidor base y para la parte del frontend esta usando React una libreria de Javascript creada por facebook, para la parte de los estilos se esta utilizando Carbon Design Systems que es un framework de Css para crear componente visuales mas esteticos y rapidos.

- Unit test: Para las pruebas unitarias se utiliza Jest con Enzyme, siendo esta ultima una libreria creada por Airbnb para tener un mejor contro de los componentes del DOM.

- Repositorio: Para tener un mejor control de versiones se está utilizando Github que es un repositorio online muy robusto y con muchas opciones para tener un mejor control del proyecto, el proyecto está configurado para que se pueda hacer merge a main solamente que pase todas las validaciones y sea aprovado el codigo por un revisor.

- Travis: para poder asegurar la calidad y fiabilidad del codigo se implementó Travis Cl el cual nos permite ejecutar varias pruebas antes de que se haga un nuevo cambio en Github. Los puntos a analizar son los siguientes: 

    * npm run lint: Revisa que el codigo que tengan todos los archivos importantes esté apegado a los estandares de programación mas actuales de JavaScript utilizando la libreria Eslint.

    * npm set audit-level high & npm config set audit-level high &  npm audit: Revisa que la estructura y las librerias instaladas de npm en el proyecto no tengan vulnerabilidades.

    * npm run build: Revisa que se pueda crear correctamente el build de la aplicación que irá a producción.

    * npm run test: Ejecuta todas las prubeas unitarias y valida que sean todas satisfactorias.

- Firebase: El host del proyecto esta montado en Firebase que es un servicio de Google, cuando el Pull Request es aceptado y se hace el merge de (Development) a la rama principal (main) atumaticamente se hace el build en Firebase y se actualiza la ultima version del proyecto.

## Solucion del problema

El sitio web Ivan-Films utiliza un buscador con autocompletado, para su funcionamiento se utilizó la funcion .filter() de java script junto con una expresion regular se pueden identificar las palabras o letras que el usuario ingresa y mostras las sugerencias o coincidencias:

```
    const onChangeHandler = (text) => {
        let matches = []
        if(text.length > 0) {
            matches = props.films.filter(films => {
                const regex = new RegExp(`${text}`, "gi")
                return films.title.match(regex)
            })
        }
        setSuggestions(matches)
        setText(text)
    }
```

El sitio web consume la información de las peliculas inicialmente de la API del [Studio Ghibli](https://ghibliapi.herokuapp.com/#section/Studio-Ghibli-API) de donde obtenemos la información mas relevante de cada pelicula con una petición GET como el titulo la descripción el director etc.
```
axios.get('https://ghibliapi.herokuapp.com/films')
```
Para obtener las imagenes de cada pelicula utilizamos una segunda API llamada [The Movie DB](https://api.themoviedb.org) en la cual buscamos por el nombre de la pelicula y obtenemos las urls de las imagenes con una peticion GET.

## Trade-offs
Si tuviera mas tiempo agregaria mas detalles visuales en la parte del detalle de la pelicula, por ejemplo pondria que artistas participan en cada pelicula, una opción para hacer comentarios de  la pelicula y sugerencias. 

En la parte de la arquitectura haria un pipeline mas robusto y que tuviera mas seguridad, por ejemplo utilizaria alguna herramienta para el manejo de los secrets y tambien utilizaria Docker para el manejo de contenedores, agregaria Cypress para crear pruebas automatizadas y agregarias Sonarcube para validad mas afondo la calidad del codigo.

## Link
Link de la parte que mas me gustó y codigo en producción: [https://filmivan-35a48.web.app/](https://filmivan-35a48.web.app/)
## Instalación

Es necesario tener instalado [Node.js](https://nodejs.org/) v10+ para correr el proyecto localmente.

El siguiente paso es clonar el repositorio desde Git Hub [https://github.com/ivanAlfonsoVillaVazquez/film-ivan](https://github.com/ivanAlfonsoVillaVazquez/film-ivan)

Despues es necesario abrir una consola en la raiz del proyecto y ejecutar los siguientes comandos:

```sh
npm install
npm run start
```
Se descargaran e instalaran todas las dependencias necesarias para el proyecto y despues iniciara la aplicacion que puede ser accedida desde el siguiente url:
```sh
http://localhost:3000/
```
