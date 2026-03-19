let categoriaActual = 'U9'
let fechaApp = new Date()

let datos = JSON.parse(localStorage.getItem('basquet_data')) || { 
    U9: [], U11: [], U13: [], asistencia: {} 
}

document.addEventListener('DOMContentLoaded', () => 
{

    const catGuardada = sessionStorage.getItem('categoria_actual')

    if(catGuardada) 
    {
        categoriaActual = catGuardada
        document.getElementById('selector-categoria').value = categoriaActual
    }

    const pagina = document.body.getAttribute('data-page')

    if (pagina === 'asistencia') 
    {
        actualizarInputFecha()
        renderizarAsistencia()
    } 

    else if (pagina === 'jugadores') 
    {
        renderizarGestionJugadores()
    }

})

function cambiarCategoria() 
{

    categoriaActual = document.getElementById('selector-categoria').value
    sessionStorage.setItem('categoria_actual', categoriaActual)
    
    const pagina = document.body.getAttribute('data-page')
    if (pagina === 'asistencia') renderizarAsistencia()
    if (pagina === 'jugadores') renderizarGestionJugadores()

}

function guardar() 
{
    localStorage.setItem('basquet_data', JSON.stringify(datos))
}

function getFechaCode() 
{
    return `${fechaApp.getFullYear()}-${String(fechaApp.getMonth() + 1).padStart(2, '0')}-${String(fechaApp.getDate()).padStart(2, '0')}`
}

function actualizarInputFecha() 
{
    document.getElementById('input-fecha').value = getFechaCode()
}

function cambiarDia(dias) 
{
    fechaApp.setDate(fechaApp.getDate() + dias)
    actualizarInputFecha()
    renderizarAsistencia()
}

function seleccionarFechaManual() 
{

    const input = document.getElementById('input-fecha').value

    if(input) 
    {
        const [y, m, d] = input.split('-')
        fechaApp = new Date(y, m - 1, d)
        renderizarAsistencia()
    }
}

function renderizarAsistencia() 
{

    const contenedor = document.getElementById('lista-asistencia')
    contenedor.innerHTML = ''
    const hoyCode = getFechaCode()

    if (datos[categoriaActual].length === 0) 
    {
        contenedor.innerHTML = `<p style="text-align:center; padding:20px;">No hay jugadores. Ve a la sección de Jugadores para añadirlos.</p>`
        return
    }

    datos[categoriaActual].forEach(jugador => 
    {

        const estado = datos.asistencia[`${categoriaActual}-${jugador}-${hoyCode}`]

        const activoPresente = estado === true ? 'activo' : ''
        const activoAusente = estado === false ? 'activo' : ''

        const card = document.createElement('div')
        card.className = 'attendance-card'

        card.innerHTML = `
            <span class="player-name">${jugador}</span>
            <div class="toggle-group">
                <button class="btn-toggle presente ${activoPresente}" 
                    onclick="marcar('${jugador}', true, '${hoyCode}')">PRESENTE</button>
                <button class="btn-toggle ausente ${activoAusente}" 
                    onclick="marcar('${jugador}', false, '${hoyCode}')">AUSENTE</button>
            </div>
        `

        contenedor.appendChild(card)

    })

}

function marcar(jugador, esPresente, fechaCode) 
{
    datos.asistencia[`${categoriaActual}-${jugador}-${fechaCode}`] = esPresente
    guardar()
    renderizarAsistencia()
}

function agregarJugador() 
{
    const input = document.getElementById('nombre-jugador')
    const nombre = input.value.trim()

    if (nombre !== '' && !datos[categoriaActual].includes(nombre)) 
    {
        datos[categoriaActual].push(nombre)
        datos[categoriaActual].sort()
        guardar()
        input.value = ''
        renderizarGestionJugadores()
    }
}

function eliminarJugador(index) 
{
    if(confirm('¿Seguro que deseas eliminar a este jugador?')) 
    {
        datos[categoriaActual].splice(index, 1)
        guardar()
        renderizarGestionJugadores()
    }
}

function renderizarGestionJugadores() 
{

    const contenedor = document.getElementById('lista-gestion-jugadores')
    contenedor.innerHTML = ''
    
    datos[categoriaActual].forEach((jugador, index) => {
        const card = document.createElement('div')
        card.className = 'manage-card'

        card.innerHTML = `
            <span style="font-weight:600;">${jugador}</span>
            <button class="btn-delete" onclick="eliminarJugador(${index})">Eliminar</button>
        `

        contenedor.appendChild(card)

    })

}

async function exportarPDF() 
{
    const { jsPDF } = window.jspdf
    const doc = new jsPDF()
    const fechaCode = getFechaCode()
    const fechaStr = fechaApp.toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
    
    doc.setFontSize(18)
    doc.text(`Asistencia ${categoriaActual} - Tira Blanco`, 14, 15)
    doc.setFontSize(12)
    doc.text(`Fecha: ${fechaStr}`, 14, 23)
    
    const filas = datos[categoriaActual].map(jugador => 
    {
        const estado = datos.asistencia[`${categoriaActual}-${jugador}-${fechaCode}`]
        let textoEstado = 'Sin marcar'
        if (estado === true) textoEstado = 'PRESENTE'
        if (estado === false) textoEstado = 'Ausente'
        return [jugador, textoEstado]
    })

    doc.autoTable({
        head: [['Jugador', 'Estado']],
        body: filas,
        startY: 30,
        theme: 'striped',
        headStyles: { fillColor: [15, 157, 88] }
    })

    doc.save(`Asistencia_${categoriaActual}_${fechaCode}.pdf`)

}

async function verReporteMensual() 
{

    const { jsPDF } = window.jspdf
    const doc = new jsPDF()
    
    const mesAppStr = String(fechaApp.getMonth() + 1).padStart(2, '0')
    const añoApp = fechaApp.getFullYear()
    const nombreMes = fechaApp.toLocaleString('es-ES', { month: 'long' }).toUpperCase()

    doc.setFontSize(18)
    doc.text(`Reporte Mensual ${categoriaActual} - Tira Blanco`, 14, 15)
    doc.setFontSize(12)
    doc.text(`Mes: ${nombreMes} ${añoApp}`, 14, 23)

    const filas = datos[categoriaActual].map(jugador => 
    {

        let totalAsistencias = 0

        Object.keys(datos.asistencia).forEach(key => {

            if (key.startsWith(`${categoriaActual}-${jugador}-`)) 
            {

                const partes = key.split('-')
                const añoAsist = partes[partes.length - 3]
                const mesAsist = partes[partes.length - 2]
                
                if (añoAsist == añoApp && mesAsist === mesAppStr && datos.asistencia[key] === true) 
                {
                    totalAsistencias++
                }
            }
        })

        return [jugador, totalAsistencias]

    })

    doc.autoTable({
        head: [['Jugador', 'Total Asistencias']],
        body: filas,
        startY: 30,
        theme: 'grid',
        headStyles: { fillColor: [44, 62, 80] }
    })

    doc.save(`Reporte_Mensual_${categoriaActual}_${nombreMes}.pdf`)
    
}
