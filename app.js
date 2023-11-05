//Crea una función que ordene de forma descendente un arreglo de números.
//Entrada -> [9,3,1,6,5,88,-1,2,7]
//Salida -> [88,9,7,6,5,3,1,-1]
//ejercicio 1

class Order{
    constructor(data){
    this.data = [];
    }

    addData(value){
        this.data.push(value);
    }

    bubbleSortDesc() {
        const n = this.data.length;
        for (let i = 0; i < n - 1; i++) {
            for (let j = 0; j < n - i - 1; j++) {
                if (this.data[j] < this.data[j + 1]) {
                    const temp = this.data[j];
                    this.data[j] = this.data[j + 1];
                    this.data[j + 1] = temp;
                }
            }
        }
    }
}


const datos = new Order();
datos.addData(9);
datos.addData(3);
datos.addData(1);
datos.addData(6);
datos.addData(5);
datos.addData(88);
datos.addData(-1);
datos.addData(2);
datos.addData(7);

console.log(datos.data)

datos.bubbleSortDesc();
console.log(datos.data)

//Crear una función que ordene una lista de caracteres según su valor decimal de acuerdo a la tabla ascii ref: http://www.asciitable.com/.
//Entrada -> [‘b’,‘h’,‘w’,‘e’,‘a’]
//Salida -> [‘a’,‘b’,‘e’,‘h’,‘w’]
//ejercicio 2

/*class Decimal{
   constructor(){
     this.array =[];
   }
 
   push(value){
     this.array.push(value)
   }
 
   sortByAsciiValue(){
     this.array.sort(function(a,b){
       return a.charCodeAt(0) - b.charCodeAt(0);
     });
     return this.array;
   }
  }
 
  const letters = new Decimal();
  letters.push('b');
  letters.push('h');
  letters.push('w');
  letters.push('e');
  letters.push('a');
 
  const result = letters.sortByAsciiValue();
  console.log(result);*/

//   Crear una clase Alumno con los siguientes datos:
//Nombre y calificaciones(arreglo de 5 números) y tiene un método para obtener el promedio.
//Crear otra clase llamada Salon que tenga un método que ordene alumnos de mayor a menor promedio.
//ejercicio 3
//intento 1 
/*class Alumno {
    constructor(nombre, calificaciones) {
        this.nombre = nombre;
        this.calificaciones = calificaciones;
    }

    obtenerPromedio() {
        const sum = this.calificaciones.reduce((acc, calificacion) => acc + calificacion, 0);
        return sum / this.calificaciones.length;
    }




}

class Salon {
    constructor() {
        this.alumnos = [];
    }

    agregarAlumno(alumno) {
        this.alumnos.push(alumno);
    }

    ordenarPorPromedio() {
        this.alumnos.sort((a, b) => b.obtenerPromedio() - a.obtenerPromedio());
    }

    buscarNombre(nombreBuscado) {
        for (let i = 0; i < this.alumnos.length; i++) {
            if (this.alumnos[i].nombre === nombreBuscado) {
                return this.alumnos[i];

            }

        }
        return -1;
    }
}


const alumno1 = new Alumno('picachu', [5, 10, 7, 5, 2]);
const alumno2 = new Alumno('agumon', [10, 7, 7, 8, 9]);
const alumno3 = new Alumno('light', [7, 6, 9, 5, 2]);
const alumno4 = new Alumno('gumball', [2, 6, 7, 10, 2]);
const alumno5 = new Alumno('greymon', [10, 7, 7, 7, 9]);
const alumno6 = new Alumno('bulbasaur', [10, 6, 7, 5, 2]);
const alumno7 = new Alumno('darwin', [9, 6, 7, 5, 2]);
const alumno8 = new Alumno('vilma', [10, 7, 7, 8, 9]);
const alumno9 = new Alumno('hugo', [6, 6, 7, 5, 6]);
const alumno10 = new Alumno('luis', [8, 6, 7, 5, 6]);
const alumno11= new Alumno('goku', [10, 7, 5, 6, 9]);
const alumno12 = new Alumno('karim', [7, 6, 7, 6, 7]);
const alumno13 = new Alumno('anabelle', [7, 6, 7, 7, 2]);
const alumno14 = new Alumno('scarface', [10, 9, 7, 8, 9]);
const alumno15 = new Alumno('finn', [9, 9, 7, 5, 9]);
const alumno16 = new Alumno('peaches', [7, 6, 7, 8, 2]);
const alumno17 = new Alumno('jake', [10, 7, 7, 6, 9]);
const alumno18 = new Alumno('wario', [10, 8, 7, 5, 4]);
const alumno19 = new Alumno('jason', [9, 6, 9, 6, 6]);
const alumno20= new Alumno('gasper', [10, 6, 9, 8, 9]);
const alumno21 = new Alumno('sorrento de sirena', [6, 6, 7, 8, 9]);
const alumno22 = new Alumno('bayonetta', [5, 6, 7, 5, 3]);
const alumno23= new Alumno('shun de andromeda', [10, 6, 8, 8, 9]);
const alumno24 = new Alumno('donald', [8, 6, 7, 5, 8]);


const salon = new Salon();

salon.agregarAlumno(alumno1);
salon.agregarAlumno(alumno2);
salon.agregarAlumno(alumno3);
salon.agregarAlumno(alumno4);
salon.agregarAlumno(alumno5);
salon.agregarAlumno(alumno6);
salon.agregarAlumno(alumno7);
salon.agregarAlumno(alumno8);
salon.agregarAlumno(alumno9);
salon.agregarAlumno(alumno10);
salon.agregarAlumno(alumno11);
salon.agregarAlumno(alumno12);
salon.agregarAlumno(alumno13);
salon.agregarAlumno(alumno14);
salon.agregarAlumno(alumno15);
salon.agregarAlumno(alumno16);
salon.agregarAlumno(alumno17);
salon.agregarAlumno(alumno18);
salon.agregarAlumno(alumno19);
salon.agregarAlumno(alumno20);
salon.agregarAlumno(alumno21);
salon.agregarAlumno(alumno22);
salon.agregarAlumno(alumno23);
salon.agregarAlumno(alumno24);


salon.ordenarPorPromedio();

console.log('Alumnos ordenados por promedio:');
salon.alumnos.forEach((alumno, index) => {
    console.log(`#${index + 1}: ${alumno.nombre} - Promedio: ${alumno.obtenerPromedio()}`);
});


const busqueda = salon.buscarNombre('donald');
console.log(busqueda);*/





//ejercicio 3
//intento 2
/*class Salon {
    constructor(nombre) {
        this.alumnos = [];
        this.nombre = nombre;
    }


    agregarAlumno(alumno) {
        this.alumnos.push(alumno);
    }

    ordenarAlumnosPorPromedio() {
        this.alumnos.sort((a, b) => {
            const promedioA = a.calcularPromedio();
            const promedioB = b.calcularPromedio();
            return promedioB - promedioA;
        });
    }

}

class Alumno extends Salon {
    constructor(nombre, calificaciones) {
        super(nombre);
        this.nombre = nombre;
        this.calificaciones = calificaciones;
    }

    calcularPromedio() {
        if (this.calificaciones.length === 0) {
            return 0;

        }
        const sum = this.calificaciones.reduce((a, b) => a + b, 0);
        return sum / this.calificaciones.length;

    }

}


const salon = new Salon('Salon A');
const alumno1 = new Alumno('picachu', [5, 10, 7, 5, 2]);
const alumno2 = new Alumno('agumon', [10, 7, 7, 8, 9]);
const alumno3 = new Alumno('light', [7, 6, 9, 5, 2]);
const alumno4 = new Alumno('gumball', [2, 6, 7, 10, 2]);
const alumno5 = new Alumno('greymon', [10, 7, 7, 7, 9]);
const alumno6 = new Alumno('bulbasaur', [10, 6, 7, 5, 2]);
const alumno7 = new Alumno('darwin', [9, 6, 7, 5, 2]);
const alumno8 = new Alumno('vilma', [10, 7, 7, 8, 9]);
const alumno9 = new Alumno('hugo', [6, 6, 7, 5, 6]);
const alumno10 = new Alumno('luis', [8, 6, 7, 5, 6]);
const alumno11 = new Alumno('goku', [10, 7, 5, 6, 9]);
const alumno12 = new Alumno('karim', [7, 6, 7, 6, 7]);
const alumno13 = new Alumno('anabelle', [7, 6, 7, 7, 2]);
const alumno14 = new Alumno('scarface', [10, 9, 7, 8, 9]);
const alumno15 = new Alumno('finn', [9, 9, 7, 5, 9]);
const alumno16 = new Alumno('peaches', [7, 6, 7, 8, 2]);
const alumno17 = new Alumno('jake', [10, 7, 7, 6, 9]);
const alumno18 = new Alumno('wario', [10, 8, 7, 5, 4]);
const alumno19 = new Alumno('jason', [9, 6, 9, 6, 6]);
const alumno20 = new Alumno('gasper', [10, 6, 9, 8, 9]);
const alumno21 = new Alumno('sorrento de sirena', [6, 6, 7, 8, 9]);
const alumno22 = new Alumno('bayonetta', [5, 6, 7, 5, 3]);
const alumno23 = new Alumno('shun de andromeda', [10, 6, 8, 8, 9]);
const alumno24 = new Alumno('donald', [8, 6, 7, 5, 8]);

salon.agregarAlumno(alumno1);
salon.agregarAlumno(alumno2);
salon.agregarAlumno(alumno3);
salon.agregarAlumno(alumno4);
salon.agregarAlumno(alumno5);
salon.agregarAlumno(alumno6);
salon.agregarAlumno(alumno7);
salon.agregarAlumno(alumno8);
salon.agregarAlumno(alumno9);
salon.agregarAlumno(alumno10);
salon.agregarAlumno(alumno11);
salon.agregarAlumno(alumno12);
salon.agregarAlumno(alumno13);
salon.agregarAlumno(alumno14);
salon.agregarAlumno(alumno15);
salon.agregarAlumno(alumno16);
salon.agregarAlumno(alumno17);
salon.agregarAlumno(alumno18);
salon.agregarAlumno(alumno19);
salon.agregarAlumno(alumno20);
salon.agregarAlumno(alumno21);
salon.agregarAlumno(alumno22);
salon.agregarAlumno(alumno23);
salon.agregarAlumno(alumno24);

console.log('alumnos sin ordenar:')
console.log(salon.alumnos);

salon.ordenarAlumnosPorPromedio();
console.log('alumnos ordenados por promedio');
console.log(salon.alumnos);

function buscarAlumnoPorNombre(salon, nombreBuscado) {
    for (let i = 0; i < salon.alumnos.length; i++) {
        if(salon.alumnos[i].nombre === nombreBuscado){
            return salon.alumnos[i].calcularPromedio();
        }  
    }
    return null;
}

const nombreBuscado = 'wario';
const promedio = buscarAlumnoPorNombre(salon, nombreBuscado);

if (promedio !== null ) {
    console.log(`el promedio de ${nombreBuscado} es ${promedio}`)
    
} else {

    console.log(` No se encontro al  alumno con el nombre ${nombreBuscado}`);
    
};*/


//Crear una funcion que ordene palabras de menor numero de letras a mayor.
//Entrada -> [“adios”,“hola”,“maximo”,“uno”,“despedida”]
//Salida -> [“uno”,“hola”,“adios”,“maximo”,“despedida”]
//ejercicio 4

/*class Palabras {
    constructor() {
        this.palabras = []
    }

    ordenarPalabras(palabrasDesordenadas) {
        this.palabras.push(...palabrasDesordenadas);
        return this.palabras.sort((a, b) => a.length - b.length);

    }
}

const ordenado = new Palabras();
const palabrasDesordenadas = ['adios', 'hola', 'maximo', 'uno', 'despedida'];
console.log(palabrasDesordenadas);
const palabrasOrdenadas = ordenado.ordenarPalabras(palabrasDesordenadas);
console.log(palabrasOrdenadas);*/

//Crear una función que ordene un arreglo de coordenadas x, y desde a partir del punto mas cercano a 0,0.
//Entrada -> [[7,3],[2,2],[1,0],[4,3]]
//Salida -> [[1,0],[2,2],[4,3],[7,3]]

/*class OrdenCoordenadas{
    constructor(coordenadas){
        this.coordenadas = coordenadas;
    }

    distanciaDeOrigen(coordenada){
        const [x, y] = coordenada;
        return Math.sqrt(x * x + y * y);
    }

    ordenarCoordenadas(){
        this.coordenadas.sort((a,b) => this.distanciaDeOrigen(a) - this.distanciaDeOrigen(b));
    }

    obtenerCoordenadasOrdenadas(){
        return this.coordenadas;
    }

}

const coordenadas = [[7,3], [2,2], [1,0], [4,3]];

const ordenador = new OrdenCoordenadas(coordenadas);
ordenador.ordenarCoordenadas();

const coordenadasOrdenadas = ordenador.obtenerCoordenadasOrdenadas();

console.log(`coordenadas ordenadas`, coordenadasOrdenadas);*/
