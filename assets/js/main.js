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
                    obtenerValoresCSV(csvContent)

                    let [aproxGolesFavor, aproxGolesContra, partidos] = aproxGolesForma1(textoCalendario)
                    probabilidadLocaloEmpate.innerHTML = aproxGolesContra
                    console.log(aproxGolesFavor, aproxGolesContra)
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
    
function calcularDatos()
{
  const equipoLocalSelect = document.getElementById('equipoLocal')
  const equipoVisitanteSelect = document.getElementById('equipoVisitante')
  const nombreLocal = document.getElementById('nombreLocal')
  const nombreVisitante = document.getElementById('nombreVisitante')
      
  const equipoLocalValue = equipoLocalSelect.value
  const equipoVisitanteValue = equipoVisitanteSelect.value
      
  nombreLocal.textContent = equipoLocalValue
  nombreVisitante.textContent = equipoVisitanteValue
    
  console.log(equipoLocalValue)
  
  
  
    leerArchivoCalendario() 
    aproxGolesL1()
    
}


function nombresEquipos(){
  const equipoLocalSelect = document.getElementById('equipoLocal')
  const equipoVisitanteSelect = document.getElementById('equipoVisitante')
  const nombreLocal = document.getElementById('nombreLocal')
  const nombreVisitante = document.getElementById('nombreVisitante')
  const equipoLocalValue = equipoLocalSelect.value
  const equipoVisitanteValue = equipoVisitanteSelect.value

  return [equipoLocalValue, equipoVisitanteValue]
}
  

function obtenerValoresCSV(csv)
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

  let calendario = obtenerValoresCSV(csv)
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

  let calendario = obtenerValoresCSV(csv)
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

  let calendario = obtenerValoresCSV(csv)
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

  let calendario = obtenerValoresCSV(csv)
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
  let calendario = obtenerValoresCSV(csv)
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
    golesFavor += partidosForma[i]["golesL"]
    golesContra += partidosForma[i]["golesV"]
  }
  let aproxGolesFavor = golesFavor / partidosForma.length
  let aproxGolesContra = golesContra / partidosForma.length

  return [aproxGolesFavor, aproxGolesContra]

}


function aproxGolesForma1(csv){
  let [equipo1, equipo2] = nombresEquipos()
  let calendario = obtenerValoresCSV(csv)
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
      golesFavor += partidosForma[i]["golesL"]
      golesContra += partidosForma[i]["golesV"]
    }
    else if(partidosForma[i]["visitante"] == equipo1)
    {
      golesFavor += partidosForma[i]["golesV"]
      golesContra += partidosForma[i]["golesL"]
    }
  }
  let aproxGolesFavor = golesFavor / partidosForma.length
  let aproxGolesContra = golesContra / partidosForma.length

  return [aproxGolesFavor, aproxGolesContra, partidosForma]
}

function aproxGolesFormaV2(csv){
  let [equipo1, equipo2] = nombresEquipos()
  let calendario = obtenerValoresCSV(csv)
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
    golesFavor += partidosForma[i]["golesV"]
    golesContra += partidosForma[i]["golesL"]
  }
  let aproxGolesFavor = golesFavor / partidosForma.length
  let aproxGolesContra = golesContra / partidosForma.length

  return [aproxGolesFavor, aproxGolesContra]
}

function aproxGolesForma2(csv){
  let [equipo1, equipo2] = nombresEquipos()
  let calendario = obtenerValoresCSV(csv)
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
      golesFavor += partidosForma[i]["golesL"]
      golesContra += partidosForma[i]["golesV"]
    }
    else if(partidosForma[i]["visitante"] == equipo2)
    {
      golesFavor += partidosForma[i]["golesV"]
      golesContra += partidosForma[i]["golesL"]
    }
  }
  let aproxGolesFavor = golesFavor / partidosForma.length
  let aproxGolesContra = golesContra / partidosForma.length

  return [aproxGolesFavor, aproxGolesContra]
}
