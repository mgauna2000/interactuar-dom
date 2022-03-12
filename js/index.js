const personas = [];

class Persona{

    constructor(parentesco, nombre, apellido, documento, edad, paisNacimiento){
        this.parentesco = parentesco;
        this.nombre = nombre;
        this.apellido = apellido;
        this.documento = documento;
        this.edad = edad;
        this.paisNacimiento = paisNacimiento;
    }

}


function solicitarDatos(){

    let cantidad = parseInt(prompt("Ingrese la cantidad de Familiares que tienes"));

    for(let i = 0; i < cantidad; i++){

        const parentesco = prompt(`Ingrese que miembro de su familia es ${i + 1}`);
        const nombre = prompt(`Ingrese el nombre${i + 1}`);
        const apellido = prompt(`Ingrese el apellido ${i + 1}`);
        const documento = parseInt(prompt(`Ingrese el numero de documento ${i + 1}`));
        const edad = parseInt(prompt(`Ingrese la edad ${i + 1}`));
        const pais = prompt(`Ingrese el pais donde nacio ${i + 1}`);

        const persona = new Persona(parentesco, nombre, apellido, documento, edad, pais);

        personas.push(persona);

    }
    renderizar(personas);

}

const renderizar = (arrayPersonas) => {

    const tbody = document.querySelector("tbody");

    for(const persona of personas){

        const tr = document.createElement("tr");

        tr.innerHTML = `<td>${persona.parentesco}</td>
                        <td>${persona.nombre}</td>
                        <td>${persona.apellido}</td>
                        <td>${persona.documento}</td>
                        <td>${persona.edad}</td>
                        <td>${persona.paisNacimiento}</td>`
        
        tbody.appendChild(tr);

    }

}

solicitarDatos();