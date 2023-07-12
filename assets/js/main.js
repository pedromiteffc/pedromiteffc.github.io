const navToggleBtn = document.querySelector('[data-nav-toggle-btn]')
const header = document.querySelector('[data-header]')

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
