const unifamiliarButton = document.getElementById("unifamiliarButton");
const multifamiliarButton = document.getElementById("GenerarButton");
const edificacionButton = document.getElementById("edificacionButton");

// para que no aparezaca al inicio de la pagina
    unifamiliarContent.style.display = "none";
    edificacion.style.display = "none";
    multifamiliarContent.style.display="none"
// cuando se elije una opcion
unifamiliarButton.addEventListener("click", () => {
    unifamiliarContent.style.display = "block";
    edificacion.style.display = "none";
    multifamiliarContent.style.display="none"
});
edificacionButton.addEventListener("click", () => {
    unifamiliarContent.style.display = "none";
    edificacion.style.display = "block";
    const generarButton = document.getElementById("GenerarButton");
    const multifamiliarContent = document.getElementById("multifamiliarContent");
        generarButton.addEventListener("click", () => {
            const pisos = document.getElementById("edificio").value;
            const tipoVivienda = document.getElementById("tipo").value;

            // Condiciones para mostrar el contenido multifamiliar
            if (pisos === "1" && tipoVivienda === "tipo_1") {
                multifamiliarContent.style.display = "block";
            } else {
                multifamiliarContent.style.display = "none";
                VersionPremiun();
            }
        });
});
function pasarelaPagos() {
    alert("===>PASARELA DE PAGOS");

}
function VersionPremiun() {
    alert("Esta Opcion aun no esta Disponible en la Version Gratuita");

}
// --------------------------------------------------
// functions para EDIFICIO
// --------------------------------------------------
// Obtén los elementos de los select
const anchoSelect2 = document.getElementById("ancho22");
const largoSelect2 = document.getElementById("largo22");
const escaleraSelect2 = document.getElementById("escalera22");
const cuartoSelect2 = document.getElementById("cuartos22");
const banosSelect2 = document.getElementById("banos22");
const terrazaSelect2 = document.getElementById("terraza22");
const LavanderiaSelect2 = document.getElementById("lavanderia22");

anchoSelect2.addEventListener("change", actualizarOpciones);

function actualizarOpciones() {
    const selectedAncho2 = anchoSelect2.value;

    // Limpiar opciones actuales de "Largo"
    largoSelect2.innerHTML = "";
    escaleraSelect2.innerHTML = "";
    terrazaSelect2.innerHTML="";
    LavanderiaSelect2.innerHTML = "";
    cuartoSelect2.innerHTML="";

    // Definir las opciones de "Largo" según el "Ancho" seleccionado
    if (selectedAncho2 === "6") {
        largoSelect2.add(new Option("17 metros", "17"));
        // Definir opciones de "Escalera" para ancho 6
        // escaleraSelect2.innerHTML = "";
        // terrazaSelect2.innerHTML="";
        // LavanderiaSelect2.innerHTML="";
        escaleraSelect2.add(new Option("Medio","2"));
        escaleraSelect2.add(new Option("Fondo","3"));
        terrazaSelect2.add(new Option("Si"));
        LavanderiaSelect2.add(new Option("No"));
        escaleraSelect2.addEventListener("change", actualizarCuartosYBanos);
    } else if (selectedAncho2 === "7") {
        largoSelect2.add(new Option("18 metros", "18"));
        // 

        banosSelect2.innerHTML="";
        LavanderiaSelect2.innerHTML="";
        escaleraSelect2.add(new Option("Medio","2"));
        cuartoSelect2.add(new Option("4"));
        terrazaSelect2.add(new Option("Si"));
        banosSelect2.add(new Option("2"));
        LavanderiaSelect2.add(new Option("No"));
    } else if (selectedAncho2 === "8") {
        largoSelect2.add(new Option("15 metros", "15"));
        //
    
        banosSelect2.innerHTML="";
        escaleraSelect2.add(new Option("Adelante","1"));
        escaleraSelect2.add(new Option("Medio","2"));
        escaleraSelect2.add(new Option("Fondo","3"));
        terrazaSelect2.add(new Option("No"));
        banosSelect2.add(new Option("2"));
        escaleraSelect2.addEventListener("change", actualizarCuartosLavanderia);
    }
}
function actualizarCuartosYBanos() {
    const selectedEscalera2 = escaleraSelect2.value;
    cuartoSelect2.innerHTML = "";
    banosSelect2.innerHTML = "";

    if (selectedEscalera2 === "2") {
        cuartoSelect2.add(new Option("4"));
        banosSelect2.add(new Option("2"));
    } else if (selectedEscalera2 === "3") {
        cuartoSelect2.add(new Option("2"));
        banosSelect2.add(new Option("1"));
    }
}
function actualizarCuartosLavanderia() {
    const selectedEscalera2 = escaleraSelect2.value;
    cuartoSelect2.innerHTML = "";
    LavanderiaSelect2.innerHTML = "";

    if (selectedEscalera2 === "1") {
        cuartoSelect2.add(new Option("2"));
        LavanderiaSelect2.add(new Option("No"));
    }else if (selectedEscalera2 === "2") {
        cuartoSelect2.add(new Option("3"));
        LavanderiaSelect2.add(new Option("No"));
    } else if (selectedEscalera2 === "3") {
        cuartoSelect2.add(new Option("3"));
        LavanderiaSelect2.add(new Option("Si"));
    }
}

// Llamar a actualizarOpciones inicialmente para configurar las opciones según el valor inicial de "Ancho"
// actualizarOpciones();


let imagenSrc2 = "";
function mostrarImagen2() {
    const ancho2 = document.getElementById("ancho22").value;
    const largo2 = document.getElementById("largo22").value;
    const escalera2 = document.getElementById("escalera22").value;
    const cuartos2 = document.getElementById("cuartos22").value;
    const Terraza2 = document.getElementById("terraza22").value;
    const banos2 = document.getElementById("banos22").value;
    const sala2 = document.getElementById("sala22").value;
    const comedor2 = document.getElementById("comedor22").value;
    const cocina2 = document.getElementById("cocina22").value;
    const lavanderia2 = document.getElementById("lavanderia22").value;
    
        //PLANO 1
    if (ancho2 === "6" &&
        largo2 === "17" &&
        escalera2 === "2" &&
        cuartos2 === "4" &&
        Terraza2 === "Si" &&
        banos2 === "2" &&
        sala2 === "Si" &&
        comedor2 === "Si" &&
        cocina2 === "Si" &&
        lavanderia2 === "No"
        ){
        imagenSrc2 = "https://procero.tech/wp-content/uploads/2023/11/plano1.webp"; // URL de la primera imagen
    }
    // PLANO 2
    
    else if (
        ancho2 === "6" &&
        largo2 === "17" &&
        escalera2 === "3" &&
        cuartos2 === "2" &&
        Terraza2 ==="Si"&&
        banos2 === "1" &&
        sala2 === "Si" &&
        comedor2 === "Si" &&
        cocina2 === "Si" &&
        lavanderia2 === "No"
    ) {
        imagenSrc2 = "https://procero.tech/wp-content/uploads/2023/11/plano1.webp"; // Reemplaza con la URL de la segunda imagen
     }
    //plano 3
    else if (
        ancho2 === "8" &&
        largo2 === "15" &&
        escalera2 === "2" &&
        cuartos2 === "3" &&
        Terraza2 === "No" &&
        banos2 === "2" &&
        sala2 === "Si" &&
        comedor2 === "Si" &&
        cocina2 === "Si" &&
        lavanderia2 === "No"
    ) {
        imagenSrc2 = ""; // URL de la tercera imagen
    }
   
    //PLANO 4
    else if (
        ancho2 === "7" &&
        largo2 === "18" &&
        escalera2 === "2" &&
        cuartos2 === "4" &&
        Terraza2 === "Si" &&
        banos2 === "2" &&
        sala2 === "Si" &&
        comedor2 === "Si" &&
        cocina2 === "Si" &&
        lavanderia2 === "No"
    ) {
        
        imagenSrc2 = "https://procero.tech/wp-content/uploads/2023/11/plano1.webp"; // Reemplaza con la URL de la cuarta imagen
    }
    //PLANO 5
    else if (
        ancho2 === "8" &&
        largo2 === "15" &&
        escalera2 === "1" &&
        cuartos2 === "2" &&
        Terraza2 === "No" &&
        banos2 === "2" &&
        sala2 === "Si" &&
        comedor2 === "Si" &&
        cocina2 === "Si" &&
        lavanderia2 === "No"
    ) {
        imagenSrc2 = "https://procero.tech/wp-content/uploads/2023/11/plano1.webp"; // URL de la quinta imagen
    }
    //PLANO 6
    else if (
        ancho2 === "8" &&
        largo2 === "15" &&
        escalera2 === "3" &&
        cuartos2 === "3" &&
        Terraza2 === "No" &&
        banos2 === "2" &&
        sala2 === "Si" &&
        comedor2 === "Si" &&
        cocina2 === "Si" &&
        lavanderia2 === "Si"
    ) {
        imagenSrc2 = "https://procero.tech/wp-content/uploads/2023/11/plano1.webp"; // URL de la sexta imagen
    }
    const imagen2 = document.getElementById("imagen2")
    if (imagenSrc2 === "") {
        imagen2.style.display = "none"; // Ocultar la imagen si no se encontró una correspondencia
    } else {
        const imagen = document.getElementById("imagen2");
        const formulario = document.getElementById("formulario");
        imagen2.src = imagenSrc2;
        imagen2.style.display = "block"; // Mostrar la imagen
        document.getElementById("descargarButton2").style.display = "block";
    }
}

// --------------------------------------------------
// functions para CASA
// --------------------------------------------------

function generarFormulario( numeroPiso,pisosTotales) {
    const contenedor = document.createElement("div");
    contenedor.classList.add("floor-form");
    if (!contenedor) return console.error("Elemento contenedor no existe");

    const selectCuartosElement = `
        <label for="cuartos-${numeroPiso}">Cuartos:</label>
        <select id="cuartos-${numeroPiso}">
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
        </select>
    `;

    const selectBanosElement =`
        <label for="banos-${numeroPiso}">Baños:</label>   
        <select id="banos-${numeroPiso}">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="2.5">2 1/2</option>
            <option value="3">3</option>
        </select>
    `;

    const selectSalaElement = `
        <label for="sala-${numeroPiso}">Sala:</label> 
        <select id="sala-${numeroPiso}">
            <option value="si">Sí</option>
            <option value="no">No</option>
        </select>
    `;

    const selectComedorElement = `
        <label for="comedor-${numeroPiso}">Comedor:</label> 
        <select id="comedor-${numeroPiso}">
            <option value="si">Sí</option>
            <option value="no">No</option>
        </select>
    `;

    const selectCocinaElement = `
        <label for="cocina-${numeroPiso}">Cocina:</label> 
        <select id="cocina-${numeroPiso}">
            <option value="si">Sí</option>
            <option value="no">No</option>
        </select>
    `;

    const selectLavanderiaElement = `
        <label for="lavanderia-${numeroPiso}">Lavanderia:</label> 
        <select id="lavanderia-${numeroPiso}">
            <option value="si">Sí</option>
            <option value="no">No</option>
        </select>
    `;
    const selectGenerarPlanoElement = `
        <label for="boton-${numeroPiso}"></label> 
        <button id="boton-${numeroPiso}" class="generar-plano-button">Generar plano</button>
    
    `;


    contenedor.innerHTML = `
    <h1>Piso: ${numeroPiso+1}</h1>
        ${selectCuartosElement}
        ${selectBanosElement}
        ${selectSalaElement}
        ${selectComedorElement}
        ${selectCocinaElement}
        ${selectLavanderiaElement}
        ${selectGenerarPlanoElement}
        <h1>Plano del piso: ${numeroPiso+1}</h1>
    `;
    if (numeroPiso !== 0) { // Si no es el primer piso, deshabilitar el formulario
        contenedor.querySelectorAll("select, button").forEach(element => {
            element.disabled = true;
        });
    }
    contenedor.querySelector(`#boton-${numeroPiso}`).addEventListener("click", function(e) {
        mostrarImagen(e); // Llamar a mostrarImagen() cuando se hace clic en el botón
    });

   return contenedor;
}

function cambiandoNroPisos(e) {
    const numeroPisos = Number.parseInt(e.target.value);
    const formContainner = document.getElementById("formContainner");
    if (!formContainner) return console.error("formContainner no existe");
    formContainner.innerHTML = "";

    const selectAnchoElement = `
        <label for="ancho">Ancho:</label>
        <select id="ancho">
            <option value="6">6 metros (No disponible)</option>
            <option value="7">7 metros </option>
            <option value="8">8 metros (No disponible)</option>
        </select>
        `;
    const selectLargoElement =`
        <label for="largo">Largo:</label>
        <select id="largo">
            <option value="17">17 metros</option>
            <option value="18">18 metros</option>
            <option value="15">15 metros</option>
        </select>
        `;
    const selectEscaleraElement=`
        <label for="escalera">Posicion de la Escalera:</label>
        <select id="escalera">
            <option value="1">Adelante</option>
            <option value="2">Medio</option>
            <option value="3">Fondo</option>
        </select>
    `;
    formContainner.innerHTML = `
        ${selectAnchoElement}
        ${selectLargoElement}
        ${selectEscaleraElement}
        
    `;
    const Ancho=document.getElementById("ancho");
    if (!Ancho) return console.error("ancho no existe");
    Ancho.addEventListener("change", actualizarOpcionesCasa);
    const Largo=document.getElementById("largo");
    if (!Largo) return console.error("largo no existe");
    Largo.addEventListener("change", actualizarOpcionesCasa);

    const pisoForm = document.getElementById("pisoForm");
    if (!pisoForm) return console.error("pisoForm no existe");
    pisoForm.innerHTML='';
    for (let i = 0; i < numeroPisos; i++) {
        const formulario = generarFormulario(i, numeroPisos);
        pisoForm.appendChild(formulario);
       
    }
    
    // Habilitar solo el primer formulario
    const formularios = pisoForm.querySelectorAll(".floor-form");
    if (formularios.length > 0) {
        formularios[0].querySelectorAll("select, button").forEach(element => {
            element.disabled = false;
        });
    }
    MensajeAlerta();
}

const selectPisos=document.getElementById("pisos");
selectPisos.addEventListener("change", cambiandoNroPisos);

function actualizarOpcionesCasa(e) {
    // Borra todas las opciones actuales en "Largo", "Escalera", "Cuartos", "Baños" ,etc
    const selectedAncho=e.target.value;
    const selectLargo=document.getElementById("largo");
    if (!selectLargo) return console.error("Largo no existe");
    const selectEscalera=document.getElementById("escalera");
    if (!selectEscalera) return console.error("selectEscalera no existe");
    //
    const selectCuarto=document.getElementById("cuartos-0");
    if (!selectCuarto) return console.error("selectCuarto no existe");
    const selectBanos=document.getElementById("banos-0");
    if (!selectBanos) return console.error("selectBanos no existe");
    const selectSala=document.getElementById("sala-0").value;
    if (!selectSala) return console.error("selectSala no existe");
    const selectComedor=document.getElementById("comedor-0").value;
    if (!selectComedor) return console.error("selectComedor no existe");
    const selectCocina=document.getElementById("cocina-0").value;
    if (!selectCocina) return console.error("selectCocina no existe");
    const selectLavanderia=document.getElementById("lavanderia-0");
    if (!selectLavanderia) return console.error("selectLavanderia no existe");
   
    selectLargo.innerHTML="";
    selectEscalera.innerHTML="";
    if (selectedAncho === "6") {
       pasarelaPagos();
    } else if (selectedAncho === "7") {
        // selectLargo.innerHTML=""
        selectCuarto.innerHTML="";
        selectBanos.innerHTML="";
        selectLavanderia.innerHTML="";

        selectLargo.add(new Option("18 metros", "18"));
        selectEscalera.add(new Option("Medio","2"));
        // 
        
        selectCuarto.add(new Option("4"));
        selectBanos.add(new Option("2"));
        selectLavanderia.add(new Option("No"));

    } else if (selectedAncho === "8") {
        pasarelaPagos();
    }
    // Agregar más condiciones aquí para otras combinaciones de "Ancho" y "Largo" si es necesario.
}

let imagenSrc = "";
function mostrarImagen(e) {
    const numeroPiso = e.target.id.split("-")[1]; // Obtener el número de piso del ID del botón
    const ancho = document.getElementById(`ancho`).value;
    const largo = document.getElementById(`largo`).value;
    const escalera = document.getElementById(`escalera`).value;
    const cuartos = document.getElementById(`cuartos-${numeroPiso}`).value;
    const banos = document.getElementById(`banos-${numeroPiso}`).value;
    const sala = document.getElementById(`sala-${numeroPiso}`).value;
    const comedor = document.getElementById(`comedor-${numeroPiso}`).value;
    const cocina = document.getElementById(`cocina-${numeroPiso}`).value;
    const lavanderia = document.getElementById(`lavanderia-${numeroPiso}`).value;
    
    // Obtener la ruta de la imagen correspondiente a las condiciones
        //PLANO 1
    if (ancho === "7" &&
        largo === "18" &&
        escalera === "2" &&
        cuartos === "4" &&
        banos === "2" &&
        sala === "si" &&
        comedor === "si" &&
        cocina === "si" &&
        lavanderia === "No") {
        
        imagenSrc = "https://procero.tech/wp-content/uploads/2023/11/plano1.webp"; // URL de la primera imagen
    }
    const imagenContainer = document.getElementById("imagenContainer");
    const imagen = document.getElementById("imagen")
    if (imagenSrc === "") {
        imagen.style.display = "none"; // Ocultar la imagen si no se encontró una correspondencia
    } else {
        imagen.src = imagenSrc;
        imagen.style.display = "block"; // Mostrar la imagen
        // document.getElementById("descargarButton").style.display = "block";
        imagenContainer.scrollIntoView({ behavior: "smooth" }); // Desplaza la imagen al contenedor visible
    }

}

function start() {
    const selectPisos = document.getElementById("pisos");
    if (!selectPisos) return console.error("el selectPisos no existe");
    selectPisos.addEventListener("change", cambiandoNroPisos);

    // mostrar imagen
    
    const pisoForm = document.getElementById("pisoForm");
    if (!pisoForm) return console.error("pisoForm no existe");
    
    pisoForm.addEventListener("click", function(e) {
        // Verificar si el clic se realizó en un botón de generación de plano
        if (e.target.classList.contains("generar-plano-button")) {
            mostrarImagen(e); // Llamar a mostrarImagen() cuando se hace clic en el botón
        }
    });
}
start();

function MensajeAlerta() {
    alert("Los demas pisos aun NO estan  habilitadas en la Version Gratuita");

}
   