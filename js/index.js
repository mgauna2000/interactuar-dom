const personas = [];

class Persona{

    constructor(nombre, apellido, documento, edad, paisNacimiento){
        this.nombre = nombre;
        this.apellido = apellido;
        this.documento = documento;
        this.edad = edad;
        this.paisNacimiento = paisNacimiento;
    }

}


function solicitarDatos(){

    let cantidad = 2;

    for(let i = 0; i < cantidad; i++){

        const nombre = prompt(`Ingrese el nombre del padre/madre ${i + 1}`);
        const apellido = prompt(`Ingrese el apellido ${i + 1}`);
        const documento = parseInt(prompt(`Ingrese el numero de documento ${i + 1}`));
        const edad = parseInt(prompt(`Ingrese la edad ${i + 1}`));
        const pais = prompt(`Ingrese el pais donde nacio ${i + 1}`);

        const persona = new Persona(nombre, apellido, documento, edad, pais);

        personas.push(persona);

    }
    renderizar(personas);

}

const renderizar = (arrayPersonas) => {

    const tbody = document.querySelector("tbody");

    for(const persona of personas){

        const tr = document.createElement("tr");

        tr.innerHTML = `<td>${persona.nombre}</td>
                        <td>${persona.apellido}</td>
                        <td>${persona.documento}</td>
                        <td>${persona.edad}</td>
                        <td>${persona.paisNacimiento}</td>`
        
        tbody.appendChild(tr);

    }

}

solicitarDatos();