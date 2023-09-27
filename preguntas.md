# EVALUACION PRACTICANTES 2023 Via-Asesores

## Preguntas de la Evaluacion de conocimientos React, Next, JavaScript

### 1) ¿Qué son los hooks y para que sirven?

Los hooks Permiten manerar diferentes eventos y se usa para la creacion de interfaces de los usuarios.
Cuando se dice que los Hooks tienen funcionalidades y sirven para manerar eventos esto quiere decir que permite el manejo y la interacion de datos entre componentes y sus datos. 

Existiendo diferentes tipos de Hooks cada uno con un proposito y funcionalidades especificas de los mas conocidos se encuentran estos 3 aunque hay mas.

### useState
Este se usa para el manejo de datos en componentes. este Hook mantiene dos valores un state que se usa para leer el estado y el setState que se usa para modificarlo. Algo parecido a lo que hace Java con sus getters y setters uno lee y obtiene el estado y el otro lo modifica, para conformar el useState el uso de estados.

### useEffect
De manera sencilla este Hook se usa para crear efectos secundarios en componentes algun ejemplo pueden ser efectos que se ejecuten despues que el componente se se ha renderizado. un ejemplo  los llamados de las de una Api. Hasta para limpiar efectos anteriores.

### useContext  
Lo que hace es acceder a los contextos de React para que sea util compartir recursos globales sin necesidad de pasar las props de manera manual entre componentes.

### Ejemplo 

Si se hace un proyecto con algun complemento dado el caso de Prisma con Next.js  donde se planea manera rutas en una caperta Api y adentro las rutas para manejar las peticiones y la traida de datos desde una base de datos ejemplo de ruta http://localhost:3000/api/clientes pero a esto hay que ponerlo desntro de un contexto dentro de una carpeta context y pasarlo al layout para que se pueda acceder a ellos desde cualquier componente.


## Pregunta 2

### ¿Qué es la hidratación en aplicaciones Javascript?

La hidratación consiste en el proceso  en el que una aplicación web se renderiza en el lado del servidor 
esto tambien es conocido como SSR o Server-Side-Rendering y se hidrata el lado del cliente una vez se carga el lado del usuario o del cliente.

ejemplo eso Seria el Hook useHasMounted que quiero decir que esta montado que lo que hace para mientra funciona la hidratacion muestra un contenido en lo que esta funciona para despues mostrar el contenido al usuario cuando la hidratacion ha acabado.

import { useEffect, useState } from 'react'

const useHasMounted = () => {
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  return hasMounted
}

export default useHasMounted


Se hace esto en el renderizado en la Hidratacion porque puede ser que algunas cosas ya esten cargadas pero sus funcionalidades aun no o los datos no lleguen aun.