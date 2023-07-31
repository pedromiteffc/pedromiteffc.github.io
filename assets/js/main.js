const navToggleBtn = document.querySelector('[data-nav-toggle-btn]')
const header = document.querySelector('[data-header]')


const equipoLocalSelect = document.getElementById('equipoLocal')
const equipoLocalValue = equipoLocalSelect.value
const equipoVisitanteSelect = document.getElementById('equipoVisitante')
const equipoVisitanteValue = equipoVisitanteSelect.value

const probabilidadLocalGana = document.getElementById('probabilidadLocalGana')
const cuotaLocalGana = document.getElementById('cuotaLocalGana')
const probabilidadEmpate = document.getElementById('probabilidadEmpate')
const cuotaEmpate = document.getElementById('cuotaEmpate')
const probabilidadVisitanteGana = document.getElementById('probabilidadVisitanteGana')
const cuotaVisitanteGana = document.getElementById('cuotaVisitanteGana')


const probabilidadLocaloEmpate = document.getElementById('probabilidadLocaloEmpate')
const cuotaLocaloEmpate = document.getElementById('cuotaLocaloEmpate')
const probabilidadLocaloVisitante = document.getElementById('probabilidadLocaloVisitante')
const cuotaLocaloVisitante = document.getElementById('cuotaLocaloVisitante')
const probabilidadVisitanteoEmpate = document.getElementById('probabilidadVisitanteoEmpate')
const cuotaVisitanteoEmpate = document.getElementById('cuotaVisitanteoEmpate')


// HANDICAP P = HANDICAP + |||||||||| HANDICAP N = HANDICAP -

const handicapP2Local = document.getElementById('handicapP2Local')
const handicapP15Local = document.getElementById('handicapP15Local')
const handicapP1Local = document.getElementById('handicapP1Local')
const handicapP05Local = document.getElementById('handicapP05Local')
const handicap00Local = document.getElementById('handicap00Local')
const handicapN05Local = document.getElementById('handicapN05Local')
const handicapN1Local = document.getElementById('handicapN1Local')
const handicapN15Local = document.getElementById('handicapN15Local')
const handicapN2Local = document.getElementById('handicapN2Local')


const handicapP2Visitante = document.getElementById('handicapP2Visitante')
const handicapP15Visitante = document.getElementById('handicapP15Visitante')
const handicapP1Visitante = document.getElementById('handicapP1Visitante')
const handicapP05Visitante = document.getElementById('handicapP05Visitante')
const handicap00Visitante = document.getElementById('handicap00Visitante')
const handicapN05Visitante = document.getElementById('handicapN05Visitante')
const handicapN1Visitante = document.getElementById('handicapN1Visitante')
const handicapN15Visitante = document.getElementById('handicapN15Visitante')
const handicapN2Visitante = document.getElementById('handicapN2Visitante')


const probabilidadOver2 = document.getElementById('probabilidadOver2')
const cuotaOver2 = document.getElementById('cuotaOver2')
const probabilidadExacto2 = document.getElementById('probabilidadExacto2')
const cuotaExacto2 = document.getElementById('cuotaExacto2')
const probabilidadUnder2 = document.getElementById('probabilidadUnder2')
const cuotaUnder2 = document.getElementById('cuotaUnder2')


const probabilidadOver1 = document.getElementById('probabilidadOver1') //PROBABILIDAD +1 GOL LOCAL
const cuotaOver1 = document.getElementById('cuotaOver1') // CUOTA +1 GOL LOCAL
const probabilidadExacto1 = document.getElementById('probabilidadExacto1') // PROBABILIDAD 1 GOL LOCAL
const cuotaExacto1 = document.getElementById('cuotaExacto1') // CUOTA 1 GOL LOCAL
const probabilidadUnder1 = document.getElementById('probabilidadUnder1') // PROBABILIDAD -1 GOL LOCAL
const cuotaUnder1 = document.getElementById('cuotaUnder1') // CUOTA -1 GOL LOCAL


const probabilidadOver1Visitante = document.getElementById('probabilidadOver1Visitante') //PROBABILIDAD +1 GOL VISITA
const cuotaOver1Visitante = document.getElementById('cuotaOver1Visitante') // CUOTA+1 GOL VISITA
const probabilidadExacto1Visitante = document.getElementById('probabilidadExacto1Visitante') //PROBABILIDAD 1 GOL VISITA
const cuotaExacto1Visitante = document.getElementById('cuotaExacto1Visitante') // CUOTA 1 GOL VISITA
const probabilidadUnder1Visitante = document.getElementById('probabilidadUnder1Visitante') //PROBABILIDAD -1 GOL VISITA
const cuotaUnder1Visitante = document.getElementById('cuotaUnder1Visitante') // CUOTA -1 GOL VISITA


const probabilidadYes = document.getElementById('probabilidadYes') //PROBABILIDAD BTTS SI
const cuotaYes= document.getElementById('cuotaYes') //CUOTA BTTS SI
const probabilidadNo = document.getElementById('probabilidadNo') //PROBABILIDAD BTTS NO
const cuotaNo = document.getElementById('cuotaNo') //PROBABILIDAD BTTS NO


const probabilidadLocal_10 = document.getElementById('probabilidadLocal_10') //PROBABILIDAD LOCAL GANA 1-0
const probabilidadEmpate_00 = document.getElementById('probabilidadEmpate_00') // PROBABILIDAD EMPATE 0-0
const probabilidadVisitante_01 = document.getElementById('probabilidadVisitante_01') //PROBABILIDAD GANA VISITANTE 0-1

const probabilidadLocal_20 = document.getElementById('probabilidadLocal_20') //PROBABILIDAD LOCAL GANA 2-0
const probabilidadEmpate_11 = document.getElementById('probabilidadEmpate_11') //PROBABILIDAD EMPATE 1-1
const probabilidadVisitante_02 = document.getElementById('probabilidadVisitante_02') //PROBABILIDAD VISITA GANA 0-2

const probabilidadLocal_30 = document.getElementById('probabilidadLocal_30') //PROBABILIDAD LOCAL GANA 3-0
const probabilidadEmpate_22 = document.getElementById('probabilidadEmpate_22') //PROBABILIDAD EMPATE 2-2
const probabilidadVisitante_03 = document.getElementById('probabilidadVisitante_03') //PROBABILIDAD VISITA GANA 0-3

const probabilidadLocal_40 = document.getElementById('probabilidadLocal_40') //PROBABILIDAD LOCAL GANA 4-0
const probabilidadEmpate_33 = document.getElementById('probabilidadEmpate_33') //PROBABILIDAD EMPATE 3-3
const probabilidadVisitante_04 = document.getElementById('probabilidadVisitante_04') //PROBABILIDAD VISITA GANA 0-4

const probabilidadLocal_50 = document.getElementById('probabilidadLocal_50') //PROBABILIDAD LOCAL GANA 5-0
const probabilidadEmpate_44 = document.getElementById('probabilidadEmpate_44') //PROBABILIDAD EMPATE 4-4
const probabilidadVisitante_05 = document.getElementById('probabilidadVisitante_05') //PROBABILIDAD VISITA GANA 0-5

const probabilidadLocal_21 = document.getElementById('probabilidadLocal_21') //PROBABILIDAD LOCAL GANA 2-1
const probabilidadEmpate_55 = document.getElementById('probabilidadEmpate_55') //PROBABILIDAD EMPATE 5-5
const probabilidadVisitante_12 = document.getElementById('probabilidadVisitante_12') //PROBABILIDAD VISITA GANA 1-2

const probabilidadLocal_31 = document.getElementById('probabilidadLocal_31') //PROBABILIDAD LOCAL GANA 3-1
const probabilidadVisitante_13 = document.getElementById('probabilidadVisitante_13') //PROBABILIDAD VISITA GANA 1-3

const probabilidadLocal_41 = document.getElementById('probabilidadLocal_41') //PROBABILIDAD LOCAL GANA 4-1
const probabilidadVisitante_14 = document.getElementById('probabilidadVisitante_14') //PROBABILIDAD VISITA GANA 1-4

const probabilidadLocal_51 = document.getElementById('probabilidadLocal_51') //PROBABILIDAD LOCAL GANA 5-1
const probabilidadVisitante_15 = document.getElementById('probabilidadVisitante_15') //PROBABILIDAD VISITA GANA 1-5

const probabilidadLocal_32 = document.getElementById('probabilidadLocal_32') //PROBABILIDAD LOCAL GANA 3-2
const probabilidadVisitante_23 = document.getElementById('probabilidadVisitante_23') //PROBABILIDAD VISITA GANA 2-3

const probabilidadLocal_42 = document.getElementById('probabilidadLocal_42') //PROBABILIDAD LOCAL GANA 4-2
const probabilidadVisitante_24 = document.getElementById('probabilidadVisitante_24') //PROBABILIDAD VISITA GANA 2-4

const probabilidadLocal_52 = document.getElementById('probabilidadLocal_52') //PROBABILIDAD LOCAL GANA 5-2
const probabilidadVisitante_25 = document.getElementById('probabilidadVisitante_25') //PROBABILIDAD VISITA GANA 2-5

const probabilidadLocal_43 = document.getElementById('probabilidadLocal_43') //PROBABILIDAD LOCAL GANA 4-3
const probabilidadVisitante_34 = document.getElementById('probabilidadVisitante_34') //PROBABILIDAD VISITA GANA 3-4

const probabilidadLocal_53 = document.getElementById('probabilidadLocal_53') //PROBABILIDAD LOCAL GANA 5-3
const probabilidadVisitante_35 = document.getElementById('probabilidadVisitante_35') //PROBABILIDAD VISITA GANA 3-5

const probabilidadLocal_54 = document.getElementById('probabilidadLocal_54') //PROBABILIDAD LOCAL GANA 5-4
const probabilidadVisitante_45 = document.getElementById('probabilidadVisitante_45') //PROBABILIDAD VISITA GANA 4-5

navToggleBtn.addEventListener('click', () =>
{
    header.classList.toggle('active')
})

function leerArchivoCSV()
{
    const select = document.getElementById('csvSelect')
    const selectedValue = select.value

    if (selectedValue !== '#')
    {
        const filePath = selectedValue
        const xhr = new XMLHttpRequest()

        xhr.onreadystatechange = function()
        {
            if (xhr.readyState === 4 && xhr.status === 200)
            {
                const csvContent = xhr.responseText
                procesarCSV(csvContent)
            }
        }

        xhr.open('GET', filePath, true)
        xhr.send()

    }

}

let textoCalendario

function leerArchivoCalendario()
{
    const select = document.getElementById('csvSelectCalendario')
    const selectedValue = select.value

    if (selectedValue !== '#')
    {
        const filePath = selectedValue
        const xhr = new XMLHttpRequest()

        xhr.onreadystatechange = function()
        {
            if (xhr.readyState === 4)
            {
                if (xhr.status === 200)
                {
                    console.log('EL ARCHIVO SE SELECCIONO CORRECTAMENTE')
                    textoCalendario = xhr.responseText
                    const csvContent = xhr.responseText
                    obtenerCalendarioCSV(csvContent)
                    // let [nombre1, nombre2] = nombresEquipos()

                    // console.log(nombre1)
                    // probabilidadLocaloEmpate.innerHTML = nombre1

                    // let [aproxGolesFavor, aproxGolesContra] = aproxGolesForma1(textoCalendario)
                    
                    // probabilidadLocaloEmpate.innerHTML = 
                    
                }
                else
                {
                    console.error('ERROR AL SELECCIONAR EL ARCHIVO')
                }
            }
        }

        xhr.open('GET', filePath, true)
        xhr.send()

    }

}


// function leerArchivoCSVyCalendario() {
//   return new Promise((resolve, reject) => {
//     const select = document.getElementById('csvSelect');
//     const selectCalendario = document.getElementById('csvSelectCalendario');
//     const selectedValue = select.value;
//     const selectedValueCalendario = selectCalendario.value;

//     let textoTabla = '';
//     let textoCalendario = '';

//     const xhrTabla = new XMLHttpRequest();
//     xhrTabla.onreadystatechange = function() {
//       if (xhrTabla.readyState === 4) {
//         if (xhrTabla.status === 200) {
//           console.log('EL ARCHIVO DE TABLA SE SELECCIONO CORRECTAMENTE');
//           textoTabla = xhrTabla.responseText;
//           if (selectedValueCalendario !== '#') {
//             const xhrCalendario = new XMLHttpRequest();
//             xhrCalendario.onreadystatechange = function() {
//               if (xhrCalendario.readyState === 4) {
//                 if (xhrCalendario.status === 200) {
//                   console.log('EL ARCHIVO DE CALENDARIO SE SELECCIONO CORRECTAMENTE');
//                   textoCalendario = xhrCalendario.responseText;
//                   resolve({ textoCalendario, textoTabla });
//                 } else {
//                   reject('ERROR AL SELECCIONAR EL ARCHIVO DE CALENDARIO');
//                 }
//               }
//             };

//             xhrCalendario.open('GET', selectedValueCalendario, true);
//             xhrCalendario.send();
//           } else {
//             resolve({ textoCalendario, textoTabla });
//           }
//         } else {
//           reject('ERROR AL SELECCIONAR EL ARCHIVO DE TABLA');
//         }
//       }
//     };

//     xhrTabla.open('GET', selectedValue, true);
//     xhrTabla.send();
//   });
// }





function procesarCSV(csv)
{
    const lines = csv.split('\n')
    const equipoLocalSelect = document.getElementById('equipoLocal')
    const equipoVisitanteSelect = document.getElementById('equipoVisitante')

    equipoLocalSelect.innerHTML = '<option selected disabled>Selecciona al Equipo Local ...</option>'
    equipoVisitanteSelect.innerHTML = '<option selected disabled>Selecciona al Equipo Visitante ...</option>'

    for (let i = 0; i < lines.length; i++)
    {
        const line = lines[i]
        const values = line.split(',')
        
        const optionLocal = document.createElement('option')
        optionLocal.value = values[1]
        optionLocal.text = values[1]
        equipoLocalSelect.appendChild(optionLocal)
        
        const optionVisitante = document.createElement('option')
        optionVisitante.value = values[1]
        optionVisitante.text = values[1]
        equipoVisitanteSelect.appendChild(optionVisitante)
        
      }
      
    }
    
async function calcularDatos() {
  const equipoLocalSelect = document.getElementById('equipoLocal');
  const equipoVisitanteSelect = document.getElementById('equipoVisitante');
  const nombreLocal = document.getElementById('nombreLocal');
  const nombreVisitante = document.getElementById('nombreVisitante');
      
  const equipoLocalValue = equipoLocalSelect.value;
  const equipoVisitanteValue = equipoVisitanteSelect.value;
      
  nombreLocal.textContent = equipoLocalValue;
  nombreVisitante.textContent = equipoVisitanteValue;

  // Ejemplo de cómo usar la función con callbacks
  cargarArchivos();
  
}




function nombresEquipos() {
  const equipoLocalSelect = document.getElementById('equipoLocal')
  const equipoVisitanteSelect = document.getElementById('equipoVisitante')
  const nombreLocal = document.getElementById('nombreLocal')
  const nombreVisitante = document.getElementById('nombreVisitante')
  const equipoLocalValue = equipoLocalSelect.value
  const equipoVisitanteValue = equipoVisitanteSelect.value

  return [equipoLocalValue, equipoVisitanteValue]
}




function obtenerTabla(csv){
  let basura = []
  const lines = csv.split("\n")

  for (let i = 0; i<lines.length; i++)
  {
    let linea = lines[i].replace("\r", "")
    basura.push(linea)
  }

  let tabla = []

  for (let i = 0; i<basura.length; i++)
  {
    let line = basura[i]
    let values = line.split(",")

    let posicion = values[0]
    let nombre = values[1]
    let pj = values[2]
    let victoria = values[3]
    let empate = values[4]
    let derrota = values[5]
    let golesFavor = values[6]
    let golesContra = values[7]
    let diferenciaGoles = parseFloat(golesFavor) - parseFloat(golesContra)
    let puntos = values[8]

    let equipo = 
    {
      "posicion": posicion,
      "nombre" : nombre,
      "pj": pj,
      "v": victoria,
      "e": empate,
      "p": derrota,
      "gf": golesFavor,
      "gc": golesContra,
      "dg": diferenciaGoles,
      "pts": puntos
    }

    tabla.push(equipo)
  }

  return tabla

}

function obtenerCalendarioCSV(csv)
{   
  let basura = []
  const lines = csv.split('\n')

  for (let i = 0; i < lines.length; i++) 
  {
    let linea = lines[i].replace("\r", "")
    basura.push(linea)
  }

  let calendario = []

  for (let i = 0; i < basura.length; i++) 
  {
    const line = basura[i]
    const values = line.split(',')
  
    const fecha = values[0]
    const local = values[1]
    const goles_local = values[2]
    const goles_visitante = values[3]
    const visitante = values[4]
    const goles_totales = values[5]
  
    let partido = {
      "fecha": fecha,
      "local": local,
      "golesL": goles_local,
      "golesV": goles_visitante,
      "visitante": visitante,
      "golesT": goles_totales
    }
    calendario.push(partido)
  }
  
  return calendario

}











  
function aproxGolesL1(csv){
  let [equipo1, equipo2] = nombresEquipos()

  let calendario = obtenerCalendarioCSV(csv)
  let totalGolesFavor = 0
  let totalGolesContra = 0
  let totalPartidos = 0
  for (let i = 0; i < calendario.length; i++) 
  {
    if(calendario[i]["local"] == equipo1)
    {
      totalGolesFavor += parseFloat(calendario[i]["golesL"])
      totalGolesContra += parseFloat(calendario[i]["golesV"])
      totalPartidos += 1
    }
  }
  let aproxGolesFavor = totalGolesFavor / totalPartidos
  let aproxGolesContra = totalGolesContra / totalPartidos
  
  return [aproxGolesFavor, aproxGolesContra]

  }

function aproxGolesV1(csv){
  let [equipo1, equipo2] = nombresEquipos()

  let calendario = obtenerCalendarioCSV(csv)
  let totalGolesFavor = 0
  let totalGolesContra = 0
  let totalPartidos = 0
  for (let i = 0; i < calendario.length; i++) 
  {
    if(calendario[i]["visitante"] == equipo1)
    {
      totalGolesFavor += parseFloat(calendario[i]["golesV"])
      totalGolesContra += parseFloat(calendario[i]["golesL"])
      totalPartidos += 1
    }
  }
  let aproxGolesFavor = totalGolesFavor / totalPartidos
  let aproxGolesContra = totalGolesContra / totalPartidos
  
  return [aproxGolesFavor, aproxGolesContra]
}

function aproxGolesL2(csv){
  let [equipo1, equipo2] = nombresEquipos()

  let calendario = obtenerCalendarioCSV(csv)
  let totalGolesFavor = 0
  let totalGolesContra = 0
  let totalPartidos = 0
  for (let i = 0; i < calendario.length; i++) 
  {
    if(calendario[i]["local"] == equipo2)
    {
      totalGolesFavor += parseFloat(calendario[i]["golesL"])
      totalGolesContra += parseFloat(calendario[i]["golesV"])
      totalPartidos += 1
    }
  }
  let aproxGolesFavor = totalGolesFavor / totalPartidos
  let aproxGolesContra = totalGolesContra / totalPartidos
  
  return [aproxGolesFavor, aproxGolesContra]
}

function aproxGolesV2(csv){
  let [equipo1, equipo2] = nombresEquipos()

  let calendario = obtenerCalendarioCSV(csv)
  let totalGolesFavor = 0
  let totalGolesContra = 0
  let totalPartidos = 0
  for (let i = 0; i < calendario.length; i++) 
  {
    if(calendario[i]["visitante"] == equipo2)
    {
      totalGolesFavor += parseFloat(calendario[i]["golesV"])
      totalGolesContra += parseFloat(calendario[i]["golesL"])
      totalPartidos += 1
    }
  }
  let aproxGolesFavor = totalGolesFavor / totalPartidos
  let aproxGolesContra = totalGolesContra / totalPartidos
  
  return [aproxGolesFavor, aproxGolesContra]
}


function aproxGolesFormaL1(csv){
  let [equipo1, equipo2] = nombresEquipos()
  let calendario = obtenerCalendarioCSV(csv)
  let golesFavor = 0
  let golesContra = 0
  let todosPartidos = []
  
  for(let i = 0; i<calendario.length; i++)
  {
    if(calendario[i]["local"] == equipo1)
    {
      todosPartidos.push(calendario[i])
    }
  }
  let partidosForma = todosPartidos.slice(0,5)

  for (let i = 0; i<partidosForma.length; i++)
  {
    golesFavor += parseFloat(partidosForma[i]["golesL"])
    golesContra += parseFloat(partidosForma[i]["golesV"])
  }
  let aproxGolesFavor = golesFavor / partidosForma.length
  let aproxGolesContra = golesContra / partidosForma.length

  return [aproxGolesFavor, aproxGolesContra]

}


function aproxGolesForma1(csv){
  let [equipo1, equipo2] = nombresEquipos()
  let calendario = obtenerCalendarioCSV(csv)
  let golesFavor = 0
  let golesContra = 0
  let todosPartidos = []
  
  for(let i = 0; i<calendario.length; i++)
  {
    if(calendario[i]["local"] == equipo1 || calendario[i]["visitante"] == equipo1)
    {
      todosPartidos.push(calendario[i])
    }
  }
  let partidosForma = todosPartidos.slice(0,5)

  for (let i = 0; i<partidosForma.length; i++)
  {
    if(partidosForma[i]["local"] == equipo1)
    {
      golesFavor += parseFloat(partidosForma[i]["golesL"])
      golesContra += parseFloat(partidosForma[i]["golesV"])
    }
    else if(partidosForma[i]["visitante"] == equipo1)
    {
      golesFavor += parseFloat(partidosForma[i]["golesV"])
      golesContra += parseFloat(partidosForma[i]["golesL"])
    }
  }
  let aproxGolesFavor = golesFavor / partidosForma.length
  let aproxGolesContra = golesContra / partidosForma.length

  return [aproxGolesFavor, aproxGolesContra]
}

function aproxGolesFormaV2(csv){
  let [equipo1, equipo2] = nombresEquipos()
  let calendario = obtenerCalendarioCSV(csv)
  let golesFavor = 0
  let golesContra = 0
  let todosPartidos = []
  
  for(let i = 0; i<calendario.length; i++)
  {
    if(calendario[i]["visitante"] == equipo2)
    {
      todosPartidos.push(calendario[i])
    }
  }
  let partidosForma = todosPartidos.slice(0,5)

  for (let i = 0; i<partidosForma.length; i++)
  {
    golesFavor += parseFloat(partidosForma[i]["golesV"])
    golesContra += parseFloat(partidosForma[i]["golesL"])
  }
  let aproxGolesFavor = golesFavor / partidosForma.length
  let aproxGolesContra = golesContra / partidosForma.length

  return [aproxGolesFavor, aproxGolesContra]
}

function aproxGolesForma2(csv){
  let [equipo1, equipo2] = nombresEquipos()
  let calendario = obtenerCalendarioCSV(csv)
  let golesFavor = 0
  let golesContra = 0
  let todosPartidos = []
  
  for(let i = 0; i<calendario.length; i++)
  {
    if(calendario[i]["local"] == equipo2 || calendario[i]["visitante"] == equipo2)
    {
      todosPartidos.push(calendario[i])
    }
  }
  let partidosForma = todosPartidos.slice(0,5)

  for (let i = 0; i<partidosForma.length; i++)
  {
    if(partidosForma[i]["local"] == equipo2)
    {
      golesFavor += parseFloat(partidosForma[i]["golesL"])
      golesContra += parseFloat(partidosForma[i]["golesV"])
    }
    else if(partidosForma[i]["visitante"] == equipo2)
    {
      golesFavor += parseFloat(partidosForma[i]["golesV"])
      golesContra += parseFloat(partidosForma[i]["golesL"])
    }
  }
  let aproxGolesFavor = golesFavor / partidosForma.length
  let aproxGolesContra = golesContra / partidosForma.length

  return [aproxGolesFavor, aproxGolesContra]
}

function motivacionTabla(csv){

}


function paritdosEntreEquipos(csv){
  let [equipo1, equipo2] = nombresEquipos()
  let calendario = obtenerCalendarioCSV(csv)

  let golesFavor1 = 0
  let golesContra1 = 0
  let golesFavor2 = 0
  let golesContra2 = 0
  let partidosJugados = 0
  for(let i = 0;i<calendario.length; i++)
  {
    if(calendario[i]["local"] == equipo1)
    {
      if(calendario[i]["visitante"] == equipo2)
      {
        golesFavor1 += parseFloat(calendario[i]["golesL"])
        golesContra1 += parseFloat(calendario[i]["golesV"])
        golesFavor2 += parseFloat(calendario[i]["golesV"])
        golesContra2 += parseFloat(calendario[i]["golesL"])
        partidosJugados += 1
      }
    }
    else if(calendario[i]["visitante"] == equipo1)
    {
      if(calendario[i]["local"] == equipo2)
      {
        golesFavor1 += parseFloat(calendario[i]["golesV"])
        golesContra1 += parseFloat(calendario[i]["golesL"])
        golesFavor2 += parseFloat(calendario[i]["golesL"])
        golesContra2 += parseFloat(calendario[i]["golesV"])
        partidosJugados += 1
      }
    }
  }

  if(partidosJugados > 0)
  {
    let aproxGolesFavor1 = golesFavor1 / partidosJugados
    let aproxGolesContra1 = golesContra1 / partidosJugados
    let aproxGolesFavor2 = golesFavor2 / partidosJugados
    let aproxGolesContra2 = golesContra2 / partidosJugados
    return [aproxGolesFavor1, aproxGolesContra1, aproxGolesFavor2, aproxGolesContra2]
  }
  return [0,0,0,0]
  
}

// function evaluarImportanciaGanar1(csv) {
//   let [equipo1, equipo2] = nombresEquipos()
//   let todosEquipos = obtenerTabla(csv)

  
//   for (const i of todosEquipos) {
//       if (i["nombre"] === equipo1) {
//           const puntosAnteriores = i["pts"]; // Puntos antes de ganar el partido
//           i["pts"] += 3; // Sumar 3 puntos por la victoria

//           const posicionAnterior = i["posicion"]; // Posición antes de ganar el partido
//           const nuevaPosicion = todosEquipos.sort((a, b) => b["pts"] - a["pts"]).findIndex((item) => item === i) + 1;

//           const posicionesSuperadas = posicionAnterior - nuevaPosicion;

//           // Evaluación de la posición alcanzada
//           let valorPosicion;
//           if (nuevaPosicion <= 3) {
//               valorPosicion = 7;
//           } else if (nuevaPosicion <= 8) {
//               valorPosicion = 4.6;
//           } else {
//               valorPosicion = 1;
//           }

//           // Evaluación de la cantidad de posiciones superadas
//           let valorSuperadas;
//           if (posicionesSuperadas >= 5) {
//               valorSuperadas = 4;
//           } else if (posicionesSuperadas >= 3) {
//               valorSuperadas = 1.5;
//           } else {
//               valorSuperadas = 0;
//           }

//           const totalMotivacion = valorPosicion + valorSuperadas;
          
//       }
//   }
//   return equipo1
// }

// function evaluarImportanciaGanar2(csv) {
//   let [equipo1, equipo2] = nombresEquipos()
//   let todosEquipos = obtenerTabla(csv)

//   for (const i of todosEquipos) {
//       if (i["nombre"] === equipo2) {
//           const puntosAnteriores = i["pts"]; // Puntos antes de ganar el partido
//           i["pts"] += 3; // Sumar 3 puntos por la victoria

//           const posicionAnterior = i["pts"]; // Posición antes de ganar el partido
//           const nuevaPosicion = todosEquipos.sort((a, b) => b["pts"] - a["pts"]).findIndex((item) => item === i) + 1;

//           const posicionesSuperadas = posicionAnterior - nuevaPosicion;

//           // Evaluación de la posición alcanzada
//           let valorPosicion;
//           if (nuevaPosicion <= 3) {
//               valorPosicion = 7;
//           } else if (nuevaPosicion <= 8) {
//               valorPosicion = 4.6;
//           } else {
//               valorPosicion = 1;
//           }

//           // Evaluación de la cantidad de posiciones superadas
//           let valorSuperadas;
//           if (posicionesSuperadas >= 5) {
//               valorSuperadas = 4;
//           } else if (posicionesSuperadas >= 3) {
//               valorSuperadas = 1.5;
//           } else {
//               valorSuperadas = 0;
//           }

//           const totalMotivacion = valorPosicion + valorSuperadas;
//           return totalMotivacion;
//       }
//   }
// }
function evaluar_importancia_ganar(equipitos, nombre1) {
  for (let i = 0; i < equipitos.length; i++) {
      if (equipitos[i]["nombre"] === nombre1) {
          let puntos_anteriores = parseFloat(equipitos[i]["pts"]) // Puntos antes de ganar el partido
          equipitos[i]["pts"] += 3; // Sumar 3 puntos por la victoria

          let posicion_anterior = parseFloat(equipitos[i]["posicion"]) // Posición antes de ganar el partido
          let nueva_posicion = equipitos
              .slice()
              .sort((a, b) => b["pts"] - a["pts"])
              .findIndex((x) => x["nombre"] === nombre1) + 1;

          let posiciones_superadas = posicion_anterior - nueva_posicion;

          // Evaluación de la posición alcanzada
          let valor_posicion;
          if (nueva_posicion <= 3) {
              valor_posicion = 7;
          } else if (nueva_posicion <= 8) {
              valor_posicion = 4.6;
          } else {
              valor_posicion = 1;
          }

          // Evaluación de la cantidad de posiciones superadas
          let valor_superadas;
          if (posiciones_superadas >= 5) {
              valor_superadas = 4;
          } else if (posiciones_superadas >= 3) {
              valor_superadas = 1.5;
          } else {
              valor_superadas = 0;
          }

          let total_motivacion = valor_posicion + valor_superadas;
          return total_motivacion;
        }
      }
  } 


//calculo aproximado de goles
function aproxGolesFinal(csv, tabla){
  let equipos = obtenerTabla(tabla)
  let [nombreEquipo1, nombreEquipo2] = nombresEquipos()

  
  let motivacion1 = evaluar_importancia_ganar(equipos, nombreEquipo1) / 100
  let motivacion2 = evaluar_importancia_ganar(equipos, nombreEquipo2) / 100
  

  //CONFIRMO VALORES DE TODAS LAS FUNCIONES:
  let [aproxGolesFavorLocal1, aproxGolesContraLocal1] = aproxGolesL1(csv)
  let [aproxGolesFavorVisitante1, aproxGolesContraVisitante1] = aproxGolesV1(csv)
  let [aproxGolesFavorLocal2, aproxGolesContraLocal2] = aproxGolesL2(csv)
  let [aproxGolesFavorVisitante2, AproxGolesContraVisitante2] = aproxGolesV2(csv)
  let [aproxGolesFavorLocalForma1, aproxGolesFavorVisitanteForma1] = aproxGolesFormaL1(csv)
  let [aproxGolesFavorVisitanteForma2, aproxGolesContraVisitanteForma2] = aproxGolesFormaV2(csv)
  let [aproxGolesFavorForma1, aproxGolesContraForma1] = aproxGolesForma1(csv)
  let [aproxGolesFavorForma2, aproxGolesContraForma2] = aproxGolesForma2(csv)
  let [aproxGolesFavorEQ1, aproxGolesContraEQ1, aproxGolesFavorEQ2, aproxGolesContraEQ2] = paritdosEntreEquipos(csv)

  //DEFINO ALGUNOS VALORES TOTALES:
  let golesFavorTotal1 = (aproxGolesFavorLocal1 + aproxGolesFavorVisitante1) / 2
  let golesContraTotal1 = (aproxGolesContraLocal1 + aproxGolesContraVisitante1) / 2
  let golesFavorTotal2 = (aproxGolesFavorLocal2 + aproxGolesFavorVisitante2) / 2
  let golesContraTotal2 = (aproxGolesContraLocal2 + AproxGolesContraVisitante2) / 2
  
  // VALORES IMPORTANTES DEFINIDOS:
  let localiaMultiplicador = 13/100
  let visitanteMultiplicador = 1.6/100

  // PREPARO LOS ULTIMOS VALORES PARA EL APROX FINAL:
  let aproxGolesHist1 = (golesFavorTotal1 + golesContraTotal2) / 2
  let aproxGolesHist2 = (golesFavorTotal2 + golesContraTotal1) / 2
  let aproxGolesLocalHist1 = (aproxGolesFavorLocal1 + AproxGolesContraVisitante2) / 2
  let aproxGolesVisitanteHist2 = (aproxGolesFavorVisitante2 + aproxGolesContraLocal1) / 2
  let aproxGolesFormaFinal1 = (aproxGolesFavorForma1 + aproxGolesContraForma2) / 2
  let aproxGolesFormaFinal2 = (aproxGolesFavorForma2 + aproxGolesContraForma1) / 2
  let aproxGolesFormaLocal1 = (aproxGolesFavorLocalForma1 + aproxGolesContraVisitanteForma2) / 2
  let aproxGolesFormaVisitante2 = (aproxGolesFavorVisitanteForma1 + aproxGolesFavorVisitanteForma2)
  let aproxGolesEQ1 = (aproxGolesFavorEQ1 + aproxGolesContraEQ2)
  let aproxGolesEQ2 = (aproxGolesFavorEQ2 + aproxGolesContraEQ1)

  //equipo1:
  let golesHistorico1 = (aproxGolesHist1 * 0.54 + aproxGolesLocalHist1 * 0.26 +  aproxGolesEQ1 * 0.2) * 0.41
  let golesForma1 = (aproxGolesFormaFinal1 * 0.675 + aproxGolesFormaLocal1 * 0.325) * 0.37
  let golesLocalia1 = ((aproxGolesHist1 * 0.54 + aproxGolesLocalHist1 * 0.26 +  aproxGolesEQ1 * 0.2) + (aproxGolesFormaFinal1 * 0.675 + aproxGolesFormaLocal1 * 0.325)) * localiaMultiplicador
  let goles_motivacion1 = ((aproxGolesHist1 * 0.54 + aproxGolesLocalHist1 * 0.26 +  aproxGolesEQ1 * 0.2) + (aproxGolesFormaFinal1 * 0.675 + aproxGolesFormaLocal1 * 0.325)) * motivacion1

  let golesEquipo1 = golesHistorico1 + golesForma1 + golesLocalia1 + goles_motivacion1
  
  //equipo2:
  let golesHistorico2 = (aproxGolesHist2 * 0.54 + aproxGolesVisitanteHist2 * 0.26 + aproxGolesEQ2 * 0.2) * 0.41
  let golesForma2 = (aproxGolesFormaFinal2 * 0.675 + aproxGolesFormaVisitante2 * 0.325) * 0.37
  let golesLocalia2 = ((aproxGolesHist2 * 0.54 + aproxGolesVisitanteHist2 * 0.26 + aproxGolesEQ2 * 0.2) + (aproxGolesFormaFinal2 * 0.675 + aproxGolesFormaVisitante2 * 0.325)) * visitanteMultiplicador
  let goles_motivacion2 = ((aproxGolesHist2 * 0.54 + aproxGolesVisitanteHist2 * 0.26 + aproxGolesEQ2 * 0.2) + (aproxGolesFormaFinal2 * 0.675 + aproxGolesFormaVisitante2 * 0.325)) * motivacion2

  let golesEquipo2 = golesHistorico2 + golesForma2 + golesLocalia2 + goles_motivacion2

  return [golesEquipo1, golesEquipo2]

}

//lector de archivos csv
function leerArchivoCSVyCalendario(tipoArchivo) {
  return new Promise((resolve, reject) => {
    const select = tipoArchivo === 'csv' ? document.getElementById('csvSelect') : document.getElementById('csvSelectCalendario');
    const selectedValue = select.value;

    if (selectedValue !== '#') {
      const filePath = selectedValue;
      const xhr = new XMLHttpRequest();

      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            if (tipoArchivo === 'csv') {
              console.log('EL ARCHIVO DE TABLA SE SELECCIONO CORRECTAMENTE');
              const csvContent = xhr.responseText;
              resolve(csvContent); // Resolvemos la promesa con el contenido del archivo CSV
            } else {
              console.log('EL ARCHIVO DE CALENDARIO SE SELECCIONO CORRECTAMENTE');
              const calendarioContent = xhr.responseText;
              resolve(calendarioContent); // Resolvemos la promesa con el contenido del archivo de calendario
            }
          } else {
            console.error('ERROR AL SELECCIONAR EL ARCHIVO');
            reject('Error al seleccionar el archivo'); // Rechazamos la promesa con un mensaje de error
          }
        }
      };

      xhr.open('GET', filePath, true);
      xhr.send();
    } else {
      reject('Selecciona un archivo válido'); // Rechazamos la promesa si no se selecciona un archivo válido
    }
  });
}

//FUNCION QUE SIRVE PARA LA PAGINA
async function cargarArchivos() {
  try {
    const [csvContent, calendarioContent] = await Promise.all([
      leerArchivoCSVyCalendario('csv'),
      leerArchivoCSVyCalendario('calendario')
    ]);
    
    let [golesEquipo1, golesEquipo2] = aproxGolesFinal(calendarioContent, csvContent)
    let cuotasResultados = calcular_cuotas_resultados_exactos(golesEquipo1, golesEquipo2)


    // console.log(golesEquipo1, golesEquipo2)
    calcular_cuotas_resultados_exactos(golesEquipo1, golesEquipo2)
    ganarEmpatePerder(cuotasResultados)
    bothTeamToScore(golesEquipo1, golesEquipo2)
    let [ah0L, ah0V, ah05mL, ah05mV] = asianHandicap(golesEquipo1, golesEquipo2, 0, 0)
    let [ah1L, ah1mV, ah05L, ah15mV] = asianHandicap(golesEquipo1, golesEquipo2, 1, 0)
    let [ah2L, ah2mV, ah15L, nada] = asianHandicap(golesEquipo1, golesEquipo2, 2, 0)
    let [ah1mL, ah1V, ah15mL, ah05V ] = asianHandicap(golesEquipo1, golesEquipo2, 0, 1)
    let [ah2mL, ah2V, nada1, ah15V] = asianHandicap(golesEquipo1, golesEquipo2, 0, 2)
    // console.log(cuotasResultados)

    handicapP2Local.innerHTML = ah2L.toFixed(2)
    handicapP15Local.innerHTML = ah15L.toFixed(2)
    handicapP1Local.innerHTML = ah1L.toFixed(2)
    handicapP05Local.innerHTML = ah05L.toFixed(2)
    handicap00Local.innerHTML = ah0L.toFixed(2)
    handicapN05Local.innerHTML = ah05mL.toFixed(2)
    handicapN1Local.innerHTML = ah1mL.toFixed(2)
    handicapN15Local.innerHTML = ah15mL.toFixed(2)
    handicapN2Local.innerHTML = ah2mL.toFixed(2)

    handicapP2Visitante.innerHTML = ah2V. toFixed(2)
    handicapP15Visitante.innerHTML = ah15V.toFixed(2)
    handicapP1Visitante.innerHTML = ah1V.toFixed(2)
    handicapP05Visitante.innerHTML = ah05V.toFixed(2)
    handicap00Visitante.innerHTML = ah0V.toFixed(2)
    handicapN05Visitante.innerHTML = ah05mV.toFixed(2)
    handicapN1Visitante.innerHTML = ah1mV.toFixed(2)
    handicapN15Visitante.innerHTML = ah15mV.toFixed(2)
    handicapN2Visitante.innerHTML = ah2mV.toFixed(2)
    

    

  } catch (error) {
    console.error(error);
  }
}


//CALCULADORA DE PROBABILIDADES
function poisson_probability(actual, average) {
  return Math.exp(-average) * (Math.pow(average, actual)) / factorial(actual);
}

function factorial(n) {
  if (n === 0 || n === 1) {
      return 1;
  } else {
      return n * factorial(n - 1);
  }
}

function calcular_cuotas_resultados_exactos(aprox_goles1, aprox_goles2) {
  let cuotas = {};
  let goles_totales_2_o_mas = 0;
  let goles_totales_exactamente_2 = 0;
  let goles_totales_menos_de_2 = 0;

  let goles_equipo1_1 = 0;
  let goles_equipo1_menos_de_1 = 0;
  let goles_equipo1_mas_de_1 = 0;

  let goles_equipo2_1 = 0;
  let goles_equipo2_menos_de_1 = 0;
  let goles_equipo2_mas_de_1 = 0;



  for (let goles_equipo1 = 0; goles_equipo1 < 6; goles_equipo1++) {
      for (let goles_equipo2 = 0; goles_equipo2 < 6; goles_equipo2++) {
          let probabilidad_resultado = calcular_probabilidad_resultado_exacto(aprox_goles1, aprox_goles2, goles_equipo1, goles_equipo2);
          let resultado = `${goles_equipo1}-${goles_equipo2}`;
          cuotas[resultado] = 1 / probabilidad_resultado;

          let goles_totales = goles_equipo1 + goles_equipo2;

          if (goles_totales > 2.5) {
              goles_totales_2_o_mas += probabilidad_resultado;
          }
          if (goles_totales === 2) {
              goles_totales_exactamente_2 += probabilidad_resultado;
          }
          if (goles_totales < 2.5) {
              goles_totales_menos_de_2 += probabilidad_resultado;
          }

          if (goles_equipo1 === 1) {
              goles_equipo1_1 += probabilidad_resultado;
          }
          if (goles_equipo1 < 1) {
              goles_equipo1_menos_de_1 += probabilidad_resultado;
          }
          if (goles_equipo1 > 1) {
              goles_equipo1_mas_de_1 += probabilidad_resultado;
          }

          if (goles_equipo2 === 1) {
              goles_equipo2_1 += probabilidad_resultado;
          }
          if (goles_equipo2 < 1) {
              goles_equipo2_menos_de_1 += probabilidad_resultado;
          }
          if (goles_equipo2 > 1) {
              goles_equipo2_mas_de_1 += probabilidad_resultado;
          }
      }
  }

  cuotas["Goles totales - más de 2.5 goles"] = 1 / goles_totales_2_o_mas;
  cuotas["Goles totales - exactamente 2 goles"] = 1 / goles_totales_exactamente_2;
  cuotas["Goles totales - menos de 2.5 goles"] = 1 / goles_totales_menos_de_2;

  cuotas["Equipo 1 - más de 1 gol"] = 1 / goles_equipo1_mas_de_1;
  cuotas["Equipo 1 - 1 gol"] = 1 / goles_equipo1_1;
  cuotas["Equipo 1 - menos de 1 gol"] = 1 / goles_equipo1_menos_de_1;

  cuotas["Equipo 2 - más de 1 gol"] = 1 / goles_equipo2_mas_de_1;
  cuotas["Equipo 2 - 1 gol"] = 1 / goles_equipo2_1;
  cuotas["Equipo 2 - menos de 1 gol"] = 1 / goles_equipo2_menos_de_1;
  
  cuotaOver2.innerHTML = cuotas["Goles totales - más de 2.5 goles"].toFixed(2)
  probabilidadOver2.innerHTML = (100/cuotas["Goles totales - más de 2.5 goles"]).toFixed(2) + '%'
  cuotaExacto2.innerHTML = cuotas["Goles totales - exactamente 2 goles"].toFixed(2)
  probabilidadExacto2.innerHTML = (100/cuotas["Goles totales - exactamente 2 goles"]).toFixed(2) + '%'
  cuotaUnder2.innerHTML = cuotas["Goles totales - menos de 2.5 goles"].toFixed(2)
  probabilidadUnder2.innerHTML = (100/cuotas["Goles totales - menos de 2.5 goles"]).toFixed(2) + '%'

  cuotaOver1.innerHTML = cuotas["Equipo 1 - más de 1 gol"].toFixed(2)
  probabilidadOver1.innerHTML = (100/cuotas["Equipo 1 - más de 1 gol"]).toFixed(2) + '%'
  cuotaExacto1.innerHTML = cuotas["Equipo 1 - 1 gol"].toFixed(2)
  probabilidadExacto1.innerHTML = (100/cuotas["Equipo 1 - 1 gol"]).toFixed(2) + '%'
  cuotaUnder1.innerHTML = cuotas["Equipo 1 - menos de 1 gol"].toFixed(2)
  probabilidadUnder1.innerHTML = (100/cuotas["Equipo 1 - menos de 1 gol"]).toFixed(2) + '%'

  cuotaOver1Visitante.innerHTML = cuotas["Equipo 2 - más de 1 gol"].toFixed(2)
  probabilidadOver1Visitante.innerHTML = (100/cuotas["Equipo 2 - más de 1 gol"]).toFixed(2) + '%'
  cuotaExacto1Visitante.innerHTML = cuotas["Equipo 2 - 1 gol"].toFixed(2)
  probabilidadExacto1Visitante.innerHTML = (100/cuotas["Equipo 2 - 1 gol"]).toFixed(2) + '%'
  cuotaUnder1Visitante.innerHTML = cuotas["Equipo 2 - menos de 1 gol"].toFixed(2)
  probabilidadUnder1Visitante.innerHTML = (100/cuotas["Equipo 2 - menos de 1 gol"]).toFixed(2) + '%'

  probabilidadLocal_10.innerHTML = cuotas["1-0"].toFixed(2)
  probabilidadLocal_20.innerHTML = cuotas["2-0"].toFixed(2)
  probabilidadLocal_30.innerHTML = cuotas["3-0"].toFixed(2)
  probabilidadLocal_40.innerHTML = cuotas["4-0"].toFixed(2)
  probabilidadLocal_50.innerHTML = cuotas["5-0"].toFixed(2)
  probabilidadLocal_21.innerHTML = cuotas["2-1"].toFixed(2)
  probabilidadLocal_31.innerHTML = cuotas["3-1"].toFixed(2)
  probabilidadLocal_41.innerHTML = cuotas["4-1"].toFixed(2)
  probabilidadLocal_51.innerHTML = cuotas["5-1"].toFixed(2)
  probabilidadLocal_32.innerHTML = cuotas["3-2"].toFixed(2)
  probabilidadLocal_42.innerHTML = cuotas["4-2"].toFixed(2)
  probabilidadLocal_52.innerHTML = cuotas["5-2"].toFixed(2)
  probabilidadLocal_43.innerHTML = cuotas["4-3"].toFixed(2)
  probabilidadLocal_53.innerHTML = cuotas["5-3"].toFixed(2)
  probabilidadLocal_54.innerHTML = cuotas["5-4"].toFixed(2)

  probabilidadEmpate_00.innerHTML = cuotas["0-0"].toFixed(2)
  probabilidadEmpate_11.innerHTML = cuotas["1-1"].toFixed(2)
  probabilidadEmpate_22.innerHTML = cuotas["2-2"].toFixed(2)
  probabilidadEmpate_33.innerHTML = cuotas["3-3"].toFixed(2)
  probabilidadEmpate_44.innerHTML = cuotas["4-4"].toFixed(2)
  probabilidadEmpate_55.innerHTML = cuotas["5-5"].toFixed(2)

  probabilidadVisitante_01.innerHTML = cuotas["0-1"].toFixed(2)
  probabilidadVisitante_02.innerHTML = cuotas["0-2"].toFixed(2)
  probabilidadVisitante_03.innerHTML = cuotas["0-3"].toFixed(2)
  probabilidadVisitante_04.innerHTML = cuotas["0-4"].toFixed(2)
  probabilidadVisitante_05.innerHTML = cuotas["0-5"].toFixed(2)
  probabilidadVisitante_12.innerHTML = cuotas["1-2"].toFixed(2)
  probabilidadVisitante_13.innerHTML = cuotas["1-3"].toFixed(2)
  probabilidadVisitante_14.innerHTML = cuotas["1-4"].toFixed(2)
  probabilidadVisitante_15.innerHTML = cuotas["1-5"].toFixed(2)
  probabilidadVisitante_23.innerHTML = cuotas["2-3"].toFixed(2)
  probabilidadVisitante_24.innerHTML = cuotas["2-4"].toFixed(2)
  probabilidadVisitante_25.innerHTML = cuotas["2-5"].toFixed(2)
  probabilidadVisitante_34.innerHTML = cuotas["3-4"].toFixed(2)
  probabilidadVisitante_35.innerHTML = cuotas["3-5"].toFixed(2)
  probabilidadVisitante_45.innerHTML = cuotas["4-5"].toFixed(2)

  return cuotas
}

function calcular_probabilidad_resultado_exacto(aprox_goles1, aprox_goles2, goles_equipo1, goles_equipo2) {

  let probabilidad_equipo1 = poisson_probability(goles_equipo1, aprox_goles1);
  let probabilidad_equipo2 = poisson_probability(goles_equipo2, aprox_goles2);
  let probabilidad_resultado = probabilidad_equipo1 * probabilidad_equipo2;

  return probabilidad_resultado;
}

//CALCULO PROBABILIDADES DE QUE GANE CADA EQUIPO
function ganarEmpatePerder(cuotas_resultados){
  function sumar_probabilidades_equipo1(cuotas_resultados) {
    let suma = 0;
    for (let resultado in cuotas_resultados) {
        if (cuotas_resultados.hasOwnProperty(resultado)) {
            if (resultado.includes('-') && resultado !== "0-0") {
                let goles_equipo1 = parseInt(resultado.split('-')[0]);
                let goles_equipo2 = parseInt(resultado.split('-')[1]);
                if (!isNaN(goles_equipo1) && !isNaN(goles_equipo2) && goles_equipo1 > goles_equipo2) {
                    suma += (100 / cuotas_resultados[resultado])
                }
            }
        }
    }
    return suma
}
  
  function sumar_probabilidades_equipo2(cuotas_resultados) {
    let suma = 0;
    for (let resultado in cuotas_resultados) {
        if (cuotas_resultados.hasOwnProperty(resultado)) {
            if (resultado.includes('-') && resultado !== "0-0") {
                let goles_equipo1 = parseInt(resultado.split('-')[0]);
                let goles_equipo2 = parseInt(resultado.split('-')[1]);
                if (!isNaN(goles_equipo1) && !isNaN(goles_equipo2) && goles_equipo1 < goles_equipo2) {
                    suma += (100 / cuotas_resultados[resultado])
                }
            }
        }
    }
    return suma
  }
  
  function sumar_probabilidades_empate(cuotas_resultados) {
    // let cuotas_empate = [];
    let cuotas_empate = 0
    for (let resultado in cuotas_resultados) {
        if (cuotas_resultados.hasOwnProperty(resultado)) {
            if (resultado.includes('-')) {
                let goles_equipo1 = parseInt(resultado.split('-')[0]);
                let goles_equipo2 = parseInt(resultado.split('-')[1]);
                if (!isNaN(goles_equipo1) && !isNaN(goles_equipo2) && goles_equipo1 === goles_equipo2) {
                    // cuotas_empate.push(100 / cuotas_resultados[resultado]);
                    cuotas_empate += 100/cuotas_resultados[resultado]
                }
            }
        }
    }
    return cuotas_empate
  }
    
  
  
  let probabilidad_equipo1 = sumar_probabilidades_equipo1(cuotas_resultados);
  let probabilidad_empate = sumar_probabilidades_empate(cuotas_resultados);
  let probabilidad_equipo2 = sumar_probabilidades_equipo2(cuotas_resultados);
  
  // Inicializar las sumas
  let suma_equipo1 = 0
  let suma_equipo2 = 0
  let suma_empate = 0
  
  // Calcular las sumas de probabilidades
  for (let resultado in cuotas_resultados) {
      if (cuotas_resultados.hasOwnProperty(resultado)) {
          if (resultado.includes('-')) {
              try {
                  let [goles_equipo1, goles_equipo2] = resultado.split("-").map(Number);
  
                  if (goles_equipo1 > goles_equipo2) {
                      suma_equipo1 += 1 / cuotas_resultados[resultado];
                  } else if (goles_equipo1 < goles_equipo2) {
                      suma_equipo2 += 1 / cuotas_resultados[resultado];
                  } else if (goles_equipo1 == goles_equipo2) {
                      suma_empate += 1 / cuotas_resultados[resultado];
                  }
              } catch (err) {
                  continue;
              }
          }
      }
  }
  
  // Calcular la suma total
  let suma_total = suma_equipo1 + suma_equipo2 + suma_empate;
  
  // Calcular las probabilidades finales equitativas
  let probabilidad_equipo1Equitativo = suma_equipo1 / suma_total;
  let probabilidad_equipo2Equitativo = suma_equipo2 / suma_total;
  let probabilidad_empateEquitativo = suma_empate / suma_total;
 
  let cuota_equipo1_ganar = 1 / probabilidad_equipo1Equitativo;
  let cuota_equipo2_ganar = 1 / probabilidad_equipo2Equitativo;
  let cuota_empate = 1 / probabilidad_empateEquitativo;

  let probabilidad_equipo1_o_empate = probabilidad_equipo1Equitativo + probabilidad_empateEquitativo;
  let probabilidad_equipo2_o_empate = probabilidad_equipo2Equitativo + probabilidad_empateEquitativo;
  let probabilidad_equipo1_o_equipo2 = probabilidad_equipo1Equitativo + probabilidad_equipo2Equitativo;
  let cuota_equipo1_o_empate = 1 / probabilidad_equipo1_o_empate;
  let cuota_equipo2_o_empate = 1 / probabilidad_equipo2_o_empate;
  let cuota_equipo1_o_equipo2 = 1 / probabilidad_equipo1_o_equipo2;


  
  // return [cuota_equipo1_ganar, cuota_equipo2_ganar, cuota_empate, cuota_equipo1_o_empate, cuota_equipo2_o_empate, cuota_equipo1_o_equipo2]
  
  cuotaLocalGana.innerHTML = cuota_equipo1_ganar.toFixed(2)
  cuotaVisitanteGana.innerHTML = cuota_equipo2_ganar.toFixed(2)
  cuotaEmpate.innerHTML = cuota_empate.toFixed(2)

  probabilidadLocalGana.innerHTML = (100/cuota_equipo1_ganar).toFixed(2) + '%'
  probabilidadVisitanteGana.innerHTML = (100/cuota_equipo2_ganar).toFixed(2) + '%'
  probabilidadEmpate.innerHTML = (100/cuota_empate).toFixed(2) + '%'

  cuotaLocaloEmpate.innerHTML = cuota_equipo1_o_empate.toFixed(2)
  cuotaVisitanteoEmpate.innerHTML = cuota_equipo2_o_empate.toFixed(2)
  cuotaLocaloVisitante.innerHTML = cuota_equipo1_o_equipo2.toFixed(2)

  probabilidadLocaloEmpate.innerHTML = (100/cuota_equipo1_o_empate).toFixed(2) + '%'
  probabilidadVisitanteoEmpate.innerHTML = (100/cuota_equipo2_o_empate).toFixed(2) + '%'
  probabilidadLocaloVisitante.innerHTML = (100/cuota_equipo1_o_equipo2).toFixed(2) + '%'
  
}


function bothTeamToScore(goles1, goles2){
  let resultados_cuotas = calcular_cuotas_resultados_exactos(goles1, goles2);

  let probabilidad_1gol_equipo1 = 100 / resultados_cuotas["Equipo 1 - 1 gol"];
  let probabilidad_menos1gol_equipo1 = 100 / resultados_cuotas["Equipo 1 - menos de 1 gol"];
  let probabilidad_mas1gol_equipo1 = 100 / resultados_cuotas["Equipo 1 - más de 1 gol"];

  let probabilidad_1gol_equipo2 = 100 / resultados_cuotas["Equipo 2 - 1 gol"];
  let probabilidad_menos1gol_equipo2 = 100 / resultados_cuotas["Equipo 2 - menos de 1 gol"];
  let probabilidad_mas1gol_equipo2 = 100 / resultados_cuotas["Equipo 2 - más de 1 gol"];

  let probabilidad_equipo1si = probabilidad_1gol_equipo1 + probabilidad_mas1gol_equipo1;
  let probabilidad_equipo1no = 100 - probabilidad_1gol_equipo1 - probabilidad_mas1gol_equipo1;
  let probabilidad_equipo2si = probabilidad_1gol_equipo2 + probabilidad_mas1gol_equipo2;
  let probabilidad_equipo2no = 100 - probabilidad_1gol_equipo2 - probabilidad_mas1gol_equipo2;

  let probabilidad_equipo1si_equipo2no = ((probabilidad_equipo1si / 100) * (probabilidad_equipo2no / 100)) * 100;
  let probabilidad_equipo1no_equipo2si = ((probabilidad_equipo1no / 100) * (probabilidad_equipo2si / 100)) * 100;
  let probabilidad_equipo1si_equipo2si = ((probabilidad_equipo1si / 100) * (probabilidad_equipo2si / 100)) * 100;
  let probabilidad_equipo1no_equipo2no = ((probabilidad_equipo1no / 100) * (probabilidad_equipo2no / 100)) * 100;

  let both_team_to_score = probabilidad_equipo1si_equipo2si;
  let both_team_to_score_no = 100 - probabilidad_equipo1si_equipo2si;
  let cuota_btts = 100 / both_team_to_score;
  let cuota_bttsn = 100 / both_team_to_score_no;

  cuotaYes.innerHTML = cuota_btts.toFixed(2)
  probabilidadYes.innerHTML = (100/cuota_btts).toFixed(2) + '%'
  cuotaNo.innerHTML = cuota_bttsn.toFixed(2)
  probabilidadNo.innerHTML = (100/cuota_bttsn).toFixed(2) + '%'

  return [cuota_btts, cuota_bttsn]
}

function asianHandicap(aprox_goles1, aprox_goles2, sumaGolesLocal, sumaGolesVisitante){
  let goles1 = aprox_goles1 + sumaGolesLocal
  let goles2 = aprox_goles2 + sumaGolesVisitante

  function calcular_cuotas_resultados_exactos_ah_0(goles1, goles2) {
    let cuotas = {};
  
    for (let goles_equipo1 = 0; goles_equipo1 < 10; goles_equipo1++) {
        for (let goles_equipo2 = 0; goles_equipo2 < 10; goles_equipo2++) {
            let probabilidad_resultado = calcular_probabilidad_resultado_exacto(goles1, goles2, goles_equipo1, goles_equipo2);
            let resultado = `${goles_equipo1}-${goles_equipo2}`;
            cuotas[resultado] = 1 / probabilidad_resultado;
        }
    }
  
    return cuotas;
  }

  let ah = calcular_cuotas_resultados_exactos_ah_0(goles1, goles2)

  function sumar_probabilidades_equipo1(cuotas_resultados) {
    let suma = 0;
    for (let resultado in cuotas_resultados) {
        if (cuotas_resultados.hasOwnProperty(resultado)) {
            if (resultado.includes('-') && resultado !== "0-0") {
                let goles_equipo1 = parseInt(resultado.split('-')[0]);
                let goles_equipo2 = parseInt(resultado.split('-')[1]);
                if (!isNaN(goles_equipo1) && !isNaN(goles_equipo2) && goles_equipo1 > goles_equipo2) {
                    suma += cuotas_resultados[resultado];
                }
            }
        }
    }
    return suma;
  }
  
  function sumar_probabilidades_equipo2(cuotas_resultados) {
    let suma = 0;
    for (let resultado in cuotas_resultados) {
        if (cuotas_resultados.hasOwnProperty(resultado)) {
            if (resultado.includes('-') && resultado !== "0-0") {
                let goles_equipo1 = parseInt(resultado.split('-')[0]);
                let goles_equipo2 = parseInt(resultado.split('-')[1]);
                if (!isNaN(goles_equipo1) && !isNaN(goles_equipo2) && goles_equipo1 < goles_equipo2) {
                    suma += cuotas_resultados[resultado];
                }
            }
        }
    }
    return suma;
  }
  
  function sumar_probabilidades_empate(cuotas_resultados) {
    // let cuotas_empate = [];
    let cuotas_empate = 0
    for (let resultado in cuotas_resultados) {
        if (cuotas_resultados.hasOwnProperty(resultado)) {
            if (resultado.includes('-')) {
                let goles_equipo1 = parseInt(resultado.split('-')[0]);
                let goles_equipo2 = parseInt(resultado.split('-')[1]);
                if (!isNaN(goles_equipo1) && !isNaN(goles_equipo2) && goles_equipo1 === goles_equipo2) {
                    // cuotas_empate.push(100 / cuotas_resultados[resultado]);
                    cuotas_empate += 100/cuotas_resultados[resultado]
                }
            }
        }
    }
    return cuotas_empate
  }

  let probabilidad_equipo1 = sumar_probabilidades_equipo1(ah);
  let probabilidad_empate = sumar_probabilidades_empate(ah);
  let probabilidad_equipo2 = sumar_probabilidades_equipo2(ah);
  
  // Inicializar las sumas
  let suma_equipo1 = 0;
  let suma_equipo2 = 0;
  let suma_empate = 0;
  
  // Calcular las sumas de probabilidades
  for (let resultado in ah) {
      if (ah.hasOwnProperty(resultado)) {
          if (resultado.includes('-')) {
              try {
                  let [goles_equipo1, goles_equipo2] = resultado.split("-").map(Number);
  
                  if (goles_equipo1 > goles_equipo2) {
                      suma_equipo1 += 1 / ah[resultado];
                  } else if (goles_equipo1 < goles_equipo2) {
                      suma_equipo2 += 1 / ah[resultado];
                  } else if(goles_equipo1 == goles_equipo2){
                      suma_empate += 1 / ah[resultado];
                  }
              } catch (err) {
                  continue;
              }
          }
      }
  }
  
  // Calcular la suma total
  let suma_total = suma_equipo1 + suma_equipo2 + suma_empate;
  
  // Calcular las probabilidades finales equitativas
  let probabilidad_equipo1Final = suma_equipo1 / suma_total;
  let probabilidad_equipo2Final = suma_equipo2 / suma_total;
  let probabilidad_empateFinal = suma_empate / suma_total;
  let cuota_equipo1_ganar = 1 / probabilidad_equipo1Final;
  let cuota_equipo2_ganar = 1 / probabilidad_equipo2Final;
  let cuota_empate = 1 / probabilidad_empateFinal;

  let ah_0_equipo1 = ((100 / cuota_equipo1_ganar) / ((100 / cuota_equipo1_ganar) + (100 / cuota_equipo2_ganar))) * 100
  let ah_0_equipo2 = ((100 / cuota_equipo2_ganar) / ((100 / cuota_equipo1_ganar) + (100 / cuota_equipo2_ganar))) * 100
  let cuota_ah_0_equipo1 = 100 / ah_0_equipo1
  let cuota_ah_0_equipo2 = 100 / ah_0_equipo2




  return [cuota_ah_0_equipo1, cuota_ah_0_equipo2, cuota_equipo1_ganar, cuota_equipo2_ganar]
}
