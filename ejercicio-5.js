/* 5.- Nuevos jugadores (50 ptos).
1. Clase persona con propiedades nombre, apellido y edad
1.1. Crea el método getDetalles() el cual imprimirá en consola los atributos de la
persona.
1.2. El constructor recibe y asigna nombre, apellido y edad a los atributos internos.
2. La clase jugador hereda de persona e incluye la propiedad de posición
2.1. sobreescribir el método getDetalles() para que muestre en consola los detalles
de persona y los de jugador.
2.2. El constructor recibe y asigna posición a los atributos internos.
3. Clase entrenador hereda de persona y agrega años de experiencia y el id de
federación
3.1. Sobreescribir el método getDetalles() para que muestre en consola los detalles
de persona y entrenador.
3.2. El constructor recibe y asigna posición a los atributos internos.
3.3. En el constructor configurar para que si no se recibe un id de federación este
asigne un número aleatorio de 5 dígitos
4. Clase equipo tiene las propiedades de entrenador y jugadores
4.1. El constructor recibe el objeto de director y un arreglo con los jugadores que
pertenecen al equipo (con 3 o 4 jugadores como ejemplo está bien)
4.2. el método getDetalles() mostrar en consola los detalles del entrenador y de los
jugadores.
5. ¡Probemos!
5.1. crea un arreglo de 4 jugadores con diferentes nombres, edades y posición
(Portero, Defensa , Medio y Delantero).
5.2. crea un objeto de tipo entrenador con su nombre, edad y años de experiencia
5.3. crea un equipo con los objetos de entrenador y estudiantes demostrando el
funcionamiento de jerarquía. */

class Persona {

    nombre;
    apellido;
    edad;

    constructor(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }

    getDetalles () {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Apellido: ${this.apellido}`);
        console.log(`Edad: ${this.edad}`);
    }
}

class Jugador extends Persona {

    posicion;

    constructor(nombre, apellido, edad, posicion) {
        super(nombre, apellido, edad);
        this.posicion = posicion;
    }

    getDetalles() {
        super.getDetalles();
        console.log(`Posicion: ${this.posicion}`);
    }
}

class Entrenador extends Persona {

    añosExp;
    id;

    constructor(nombre, apellido, edad, añosExp, id) {
        super(nombre, apellido, edad);
        this.añosExp = añosExp;
        id ? this.id = id : this.id = Math.floor((Math.random() * (99999 - 9999 + 1)) + 9999);
    }

    getDetalles() {
        super.getDetalles();
        console.log(`Años de experiencia: ${this.añosExp}`);
        console.log(`Id: ${this.id}`);
    }
}

class Equipo {

    entrenador;
    jugadores;

    constructor(entrenador, jugadores) {
        this.entrenador = entrenador;
        this.jugadores = jugadores;
    }

    getDetalles() {
        console.log("====DIRECTOR====");
        console.log(`Nombre: ${this.director.nombre}`);
        console.log(`Edad: ${this.director.edad}`);
        console.log(`Años de experiencia: ${this.director.aexp}`);
        console.log("====JUGADORES====");
        console.log(this.jugadores[0]);
        console.log(this.jugadores[1]);
        console.log(this.jugadores[2]);
    }
}

let jugador1 = new Jugador("Franco", "Sorice", 21, "Delantero");
let jugador2 = new Jugador("Matias", "Suarez", 23, "Arquero");
let jugador3 = new Jugador("Elias", "Messi", 25, "Medio");
let jugador4 = new Jugador("Lionel", "Messi", 34, "Delantero");

let arregloJugadores = [];

arregloJugadores.push(jugador1, jugador2, jugador3, jugador4);

let entrenador = new Entrenador("Juan", "Heinze", 42, 3);

let newells = new Equipo(entrenador, arregloJugadores);

console.log(newells);





