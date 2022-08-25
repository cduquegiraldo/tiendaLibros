let productos = [

    {
        nombre: "Los cuatro acuerdos",
        precio: 60000,
        cantidad: 0,
        fotos: ['https://firebasestorage.googleapis.com/v0/b/tiendasuracd.appspot.com/o/portada_libro1.png?alt=media&token=dc094916-8f11-467d-83d7-c6380ad5c5e8', 'https://firebasestorage.googleapis.com/v0/b/tiendasuracd.appspot.com/o/contraportada_libro1.jpg?alt=media&token=1cd638bf-0274-4396-a9db-838db2e9899f'],
        descripcion: 'El doctor Miguel Ruiz nos propone en este libro un sencillo procedimiento para eliminar todas aquellas creencias heredadas que nos limitan y substituirlas por otras que responden a nuestra realidad interior y nos conducen a la libertad. Hace miles de años los toltecas eran conocidos en todo el sur de México como mujeres y hombres de conocimiento Los antropólogos han definido a los toltecas como una nación o una raza, pero de hecho, eran científicos y artistas que formaron una sociedad para estudiar y conservar el conocimiento espiritual y las prácticas de sus antepasados.'
    },
    {
        nombre: "Domina tu mente",
        precio: 44000,
        cantidad: 0,
        fotos: ['https://firebasestorage.googleapis.com/v0/b/tiendasuracd.appspot.com/o/portada_libro2.jpg?alt=media&token=0ba5a9f1-898d-4f37-abf7-7c7dd544837f', 'https://firebasestorage.googleapis.com/v0/b/tiendasuracd.appspot.com/o/contraportada_libro2.jpg?alt=media&token=33cba6f7-f8d0-4653-a1f5-a1a7c00b5871'],
        descripcion: 'Este es un libro práctico enfocado en la acción para el desarrollo de tu inteligencia y tu habilidad de pensamiento crítico para tomar decisiones. No se trata de un relato abstracto sobre el pensamiento y te aseguro que después de su lectura no serás la misma persona que está leyendo estas palabras.Eres lo que crees. Todo lo que haces, cómo te sientes o lo que quieres, está determinado por tus creencias. A medida que evolucionamos como seres humanos, aprendimos a transmitir información y creencias por medio del lenguaje, y a raíz de esto, muchas de las creencias que tienes en este momento no están basadas en información objetiva ni en experiencias personales, sino en información transmitida por otras personas.'

    },
    {

        nombre: "El poder del pensamiento",
        precio: 34000,
        cantidad: 0,
        fotos: ['https://firebasestorage.googleapis.com/v0/b/tiendasuracd.appspot.com/o/portada_libro3.png?alt=media&token=bf11747b-936e-440b-91bc-8830d6205756', 'https://firebasestorage.googleapis.com/v0/b/tiendasuracd.appspot.com/o/contraportada_libro3.jpg?alt=media&token=3e806452-0a3d-426d-8778-18f72b1c87e8'],
        descripcion: 'El poder del pensamiento positivo ha ayudado a millones de hombres y mujeres a lograr el éxito en sus vidas. Propone técnicas que muestran que puedes tener serenidad de espíritu, salud y un incesante flujo de energía.'
    },
    {
        nombre: "Como detectar mentiras",
        precio: 65000,
        cantidad: 0,
        fotos: ['https://firebasestorage.googleapis.com/v0/b/tiendasuracd.appspot.com/o/potada_libro4.jpg?alt=media&token=6466c09f-a074-49bc-aa1e-e2bb19f9b537', 'https://firebasestorage.googleapis.com/v0/b/tiendasuracd.appspot.com/o/contraportada_libro4.jpg?alt=media&token=73eb4330-bb24-4310-bdbf-8d5464e60f23'],
        descripcion: 'Con este libro aprenderá a detectar mentiras y engaños mediante la lectura del lenguaje corporal. Aprenderá a ser un detector de mentiras humano. Este libro está basado en investigaciones científicas sobre la lectura del lenguaje no verbal.'
    },
    {
        nombre: "La vida son dos putos días",
        precio: 80000,
        cantidad: 0,
        fotos: ['https://firebasestorage.googleapis.com/v0/b/tiendasuracd.appspot.com/o/portada_libro5.jpg?alt=media&token=79a412dc-ad83-4990-b780-279a9cd9001d','https://firebasestorage.googleapis.com/v0/b/tiendasuracd.appspot.com/o/contraportada_libro5.jpg?alt=media&token=4378940a-b0af-4bed-9c17-d3aed7815c20'],
        descripcion: 'Este libro hará que vivas de forma más real, libre y natural. Para ello, vas a soltar lastre invisible,apartarás el miedo a perderlo todo y así podrás crear una base firme que soporte una vida imparable fuera de imposiciones. Sentirás como si tu mejor amigo/a te dijera la cruda realidad a la cara. Dolerá pero DESPERTARÁS.'
    },
    {
        nombre: "Querido yo",
        precio: 70000,
        cantidad: 0,
        fotos: ['https://firebasestorage.googleapis.com/v0/b/tiendasuracd.appspot.com/o/portada_libro6.jpg?alt=media&token=2fd8e8f5-ca3b-4f6b-8908-557d15903405','https://firebasestorage.googleapis.com/v0/b/tiendasuracd.appspot.com/o/contraportada_libro6.jpg?alt=media&token=034154c4-e9d1-4585-af2c-7e541664d263'],
        descripcion: 'Cada libro guarda la esencia de una historia vivida, querido yo; vamos a estar bien, es un libro para abrazarte a través de las palabras, para recordarte que el amor propio no puede ser olvidado y que eres tan importante y tan especial para esta vida y por algo estás aquí.'
    },
    {
        nombre: "El poder de creer en ti",
        precio: 90000,
        cantidad: 0,
        fotos: ['https://firebasestorage.googleapis.com/v0/b/tiendasuracd.appspot.com/o/portada_libro7.jpg?alt=media&token=6071bdfb-6a95-44a9-8608-0d0ec703f701','https://firebasestorage.googleapis.com/v0/b/tiendasuracd.appspot.com/o/contraportada_libro7.jpg?alt=media&token=919a2428-ee38-4efa-bc23-c35d0c49d68c'],
        descripcion: 'La confianza en uno mismo es quizás el factor más importante a la hora de alcanzar verdadera felicidad, paz interior y satisfacción en la vida. En El poder de creer en ti descubrirás una guía práctica y amena que te ayudará a aumentar tu confianza y autoestima de forma rápida a través de 9 sencillos pasos fáciles de aplicar y mantener.'
    },
    {
        nombre: "Psicología oscura",
        precio: 70000,
        cantidad: 0,
        fotos: ['https://firebasestorage.googleapis.com/v0/b/tiendasuracd.appspot.com/o/portada_libro8.jpg?alt=media&token=c07bf0e4-a66e-4536-8a0c-71771a696c03','https://firebasestorage.googleapis.com/v0/b/tiendasuracd.appspot.com/o/contraportada_libro8.jpg?alt=media&token=030962b7-3a38-42a7-8024-c66e6b89dad8'],
        descripcion: ' Lo que las personas maquiavélicas poderosas saben, y usted no, sobre persuasión, control mental, manipulación, negociación, engaño, conducta humana y guerra psicológica'
    },
    {
        nombre: "Mi viaje sin ti",
        precio: 65000,
        cantidad: 0,
        fotos: ['https://firebasestorage.googleapis.com/v0/b/tiendasuracd.appspot.com/o/portada_libro9.jpg?alt=media&token=7df2d882-3726-46bf-acdd-b20c00cbd2dd','https://firebasestorage.googleapis.com/v0/b/tiendasuracd.appspot.com/o/contraportada_libro9.jpg?alt=media&token=666e217c-afad-4a89-b9a7-9582f7968579'],
        descripcion: 'Muchas veces tenemos que irnos a pesar del miedo, de las dudas, y de la falta de confianza. En esta ocasión, conocerás a Vespertine y viajarás de su mano luchando contra el temor a estar solo, el falso apego y la aceptación a la muerte. '
    },
    {
        nombre: "Inteligencia emocional",
        precio: 50000,
        cantidad: 0,
        fotos: ['https://firebasestorage.googleapis.com/v0/b/tiendasuracd.appspot.com/o/portada_libro10.jpg?alt=media&token=e71cdc90-58cc-4df1-9815-cf2f8ed70452','https://firebasestorage.googleapis.com/v0/b/tiendasuracd.appspot.com/o/contraportada_libro10.jpg?alt=media&token=877c56e0-a3d2-4ed0-b2d1-37c5ed59cd13'],
        descripcion: 'El psicólogo español Fabian Goleman, formulo un tipo particular de inteligencia vinculado al uso correcto de las emociones. Según Goleman, ¡desarrollar este tipo de inteligencia puede ser un factor determinante para lograr los éxitos personales y profesionales! '
    }



]




let fila = document.getElementById("fila")

//RECORRIENDO EL ARREGLO
productos.forEach(function (producto) {

    //creando un div desde JS
    let columna = document.createElement("div")
    columna.classList.add("col")

    //creando una tarjeta
    let tarjeta = document.createElement("div")
    tarjeta.classList.add("card", "shadow", "text-center", "h-100", "p-5")

    //creando una IMAGEN
    let imagen = document.createElement("img")
    imagen.classList.add("img-fluid", "w-100", "h-75", "mb-4")
    imagen.src = producto.fotos[0]

    //DETECTANDO EVENTO DE MOUSE
    imagen.addEventListener("mouseover", function () {
        imagen.src = producto.fotos[1]
    })
    imagen.addEventListener("mouseleave", function () {
        imagen.src = producto.fotos[0]
    })


    //crear el nombre
    let nombre = document.createElement("h3")
    nombre.classList.add("fw-bold")
    nombre.textContent = producto.nombre

    //crear el precio
    let precio = document.createElement("h2")
    precio.textContent = "$" + producto.precio

    //creando la descripcion
    let descripcion = document.createElement("p")
    descripcion.classList.add("text-danger", "d-none")
    descripcion.textContent = producto.descripcion

    //definiendo padres e hijos
    tarjeta.appendChild(imagen)
    tarjeta.appendChild(nombre)
    tarjeta.appendChild(precio)
    tarjeta.appendChild(descripcion)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)

})