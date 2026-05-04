const balance = document.getElementById('balance')
const money_plus = document.getElementById('money-plus')
const money_minus = document.getElementById('money-minus')
const list = document.getElementById('list')
const form = document.getElementById('form')
const text = document.getElementById('text')
const amount = document.getElementById('amount')
const categorySelect = document.getElementById('category')
const walletSelect = document.getElementById('wallet')
const filterWalletSelect = document.getElementById('filter-wallet')
const dateInput = document.getElementById('date')
const typeRadios = document.getElementsByName('type')
const chartTypeRadios = document.getElementsByName('chart-type')

let isEditing = false
let editID = null

let currentDate = new Date()
let selectedDate = new Date().toISOString().split('T')[0]
dateInput.value = selectedDate;

let transactions = JSON.parse(localStorage.getItem('transactions')) || []
let categories = JSON.parse(localStorage.getItem('categories')) || []
let wallets = JSON.parse(localStorage.getItem('wallets')) || []

let expenseChart

function updateLocalStorage() {
    localStorage.setItem('transactions', JSON.stringify(transactions))
}

const calendarToggle = document.getElementById('calendar-toggle')
const calendarBody = document.getElementById('calendar-body')
const calendarToggleText = document.getElementById('calendar-toggle-text')
const calendarToggleIcon = document.getElementById('calendar-toggle-icon')

calendarToggle.addEventListener('click', () => {

    calendarBody.classList.toggle('collapsed')

    if (calendarBody.classList.contains('collapsed')) {
        calendarToggleText.innerText = 'Ver Calendario'
        calendarToggleIcon.classList.replace('fa-chevron-up', 'fa-chevron-down')
    } 
    
    else {
        calendarToggleText.innerText = 'Ocultar Calendario'
        calendarToggleIcon.classList.replace('fa-chevron-down', 'fa-chevron-up')
    }

})

function updateCategories() {

    let selectedType = document.querySelector('input[name="type"]:checked').value
    categorySelect.innerHTML = '<option value="" disabled selected>Selecciona una categoría</option>'
    const filteredCats = categories.filter(c => c.type === selectedType)

    if (filteredCats.length === 0) 
    { 
        categorySelect.innerHTML = '<option value="" disabled selected>Crea categorías en Configuración ⚙️</option>'
        return
    }
    
    filteredCats.forEach(cat => {
        const option = document.createElement('option')
        option.value = cat.name; option.innerText = `${cat.icon} ${cat.name}`
        categorySelect.appendChild(option)
    })

}

function updateWalletsDropdowns() {

    walletSelect.innerHTML = '<option value="" disabled selected>Selecciona la billetera</option>'
    const currentFilter = filterWalletSelect.value
    filterWalletSelect.innerHTML = '<option value="all">Todas las billeteras</option>'

    if (wallets.length === 0)
    {
        walletSelect.innerHTML = '<option value="" disabled selected>Crea billeteras en Configuración ⚙️</option>'
        return
    }

    wallets.forEach(wal => {

        const optForm = document.createElement('option')
        optForm.value = wal.id; optForm.innerText = wal.name
        walletSelect.appendChild(optForm)

        const optFilter = document.createElement('option')
        optFilter.value = wal.id; optFilter.innerText = wal.name
        filterWalletSelect.appendChild(optFilter)

    })

    if(Array.from(filterWalletSelect.options).some(opt => opt.value === currentFilter)) {
        filterWalletSelect.value = currentFilter
    }

}

typeRadios.forEach(radio => radio.addEventListener('change', updateCategories))
chartTypeRadios.forEach(radio => radio.addEventListener('change', updateChart))
filterWalletSelect.addEventListener('change', updateUI)

function getCategoryInfo(name, type) {
    const cat = categories.find(c => c.name === name && c.type === type)
    return cat || { icon: '📌', color: '#95a5a6' };
}

function getWalletInfo(id) {
    const wal = wallets.find(w => w.id === id)
    return wal || { name: 'Desconocido', logo: 'https://cdn-icons-png.flaticon.com/512/2154/2154495.png' }
}

function getActiveTransactions() {
    const filterId = filterWalletSelect.value
    if (filterId === 'all') return transactions
    return transactions.filter(t => t.wallet === filterId)
}

function renderList() {

    list.innerHTML = ''

    const activeData = getActiveTransactions()
    const filteredTransactions = activeData.filter(t => t.date === selectedDate)
    
    document.getElementById('selected-date-display').innerText = `Mostrando: ${formatDateArg(selectedDate)}`

    if(filteredTransactions.length === 0) {
        list.innerHTML = `<li style="flex-direction:row; justify-content:center; color: var(--text-muted); background: transparent; box-shadow: none; border: none;">No hay movimientos este día.</li>`
        return
    }

    filteredTransactions.forEach(transaction => {

        const isExpense = transaction.amount < 0
        const sign = isExpense ? '-' : '+'
        const item = document.createElement('li')
        
        const catInfo = getCategoryInfo(transaction.category, isExpense ? 'expense' : 'income')
        const walInfo = getWalletInfo(transaction.wallet)

        item.innerHTML = `
            <div class="transaction-content">
                <div class="transaction-info">
                    <div class="icon-wrapper">
                        <div class="icon-box" style="background-color: ${catInfo.color}20; color: ${catInfo.color};">
                            ${catInfo.icon}
                        </div>
                        <img src="${walInfo.logo}" class="wallet-badge" title="${walInfo.name}">
                    </div>
                    <div class="transaction-details">
                        <strong>${transaction.text}</strong>
                        <span class="category-tag">${transaction.category}</span>
                    </div>
                </div>
                <div class="transaction-amount ${isExpense ? 'text-expense' : 'text-income'}">
                    ${sign}$${Math.abs(transaction.amount)}
                </div>
            </div>
            <div class="transaction-actions">
                <button onclick="editTransaction(${transaction.id})" class="action-btn edit-btn"><i class="fa-solid fa-pen"></i></button>
                <button onclick="deleteTransaction(${transaction.id})" class="action-btn delete-btn"><i class="fa-solid fa-trash"></i></button>
            </div>
        `

        list.appendChild(item)
        
    })

}

function updateValues() {
    const activeData = getActiveTransactions()
    const amounts = activeData.map(t => t.amount)
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2)
    const income = amounts.filter(item => item > 0).reduce((acc, item) => (acc += item), 0).toFixed(2)
    const expense = (amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1).toFixed(2)

    balance.innerText = `$${total}`
    money_plus.innerText = `+$${income}`
    money_minus.innerText = `-$${expense}`
}

function updateChart() {

    const activeData = getActiveTransactions()
    let chartType = 'expense'
    chartTypeRadios.forEach(radio => { if (radio.checked) chartType = radio.value; })

    document.getElementById('chart-title').innerText = chartType === 'expense' ? 'Gastos por Categoría' : 'Ingresos por Categoría'

    const filteredForChart = chartType === 'expense' ? activeData.filter(t => t.amount < 0) : activeData.filter(t => t.amount > 0)

    const categoryTotals = filteredForChart.reduce((acc, t) => {
        acc[t.category] = (acc[t.category] || 0) + Math.abs(t.amount)
        return acc
    }, {})

    const labels = Object.keys(categoryTotals)
    const data = Object.values(categoryTotals)
    const backgroundColors = labels.map(labelName => getCategoryInfo(labelName, chartType).color)

    const ctx = document.getElementById('expenseChart').getContext('2d')
    if (expenseChart) expenseChart.destroy()

    const emptyLabel = chartType === 'expense' ? 'Sin gastos' : 'Sin ingresos'

    expenseChart = new Chart(ctx, {

        type: 'doughnut',

        data: {
            labels: labels.length > 0 ? labels : [emptyLabel],
            datasets: [{ data: data.length > 0 ? data : [1], backgroundColor: data.length > 0 ? backgroundColors : ['#e2e8f0'], borderWidth: 0 }]
        },

        options: { 
            responsive: true, 
            maintainAspectRatio: false, 
            plugins: { legend: { position: 'bottom', labels: { font: { family: 'Inter' } } } }, cutout: '70%' 
        }

    })

}

function renderCalendar() {

    const activeData = getActiveTransactions()
    const monthYear = document.getElementById('month-year')
    const calendarGrid = document.getElementById('calendar-grid')
    calendarGrid.innerHTML = ''

    const year = currentDate.getFullYear()
    const month = currentDate.getMonth()
    const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
    monthYear.innerText = `${monthNames[month]} ${year}`

    const firstDay = new Date(year, month, 1).getDay()
    const daysInMonth = new Date(year, month + 1, 0).getDate()

    for (let i = 0; i < firstDay; i++) {
        const emptyDiv = document.createElement('div')
        emptyDiv.classList.add('calendar-day', 'empty')
        calendarGrid.appendChild(emptyDiv)
    }

    for (let day = 1; day <= daysInMonth; day++) {

        const dayDiv = document.createElement('div')
        dayDiv.classList.add('calendar-day')
        dayDiv.innerText = day

        const dateString = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
        if (dateString === selectedDate) dayDiv.classList.add('selected')

        const dayTransactions = activeData.filter(t => t.date === dateString)
        let hasIncome = dayTransactions.some(t => t.amount > 0)
        let hasExpense = dayTransactions.some(t => t.amount < 0)

        if (hasIncome || hasExpense) {
            const dotsDiv = document.createElement('div')
            dotsDiv.classList.add('dots-container')
            if (hasIncome) dotsDiv.innerHTML += `<div class="dot income"></div>`
            if (hasExpense) dotsDiv.innerHTML += `<div class="dot expense"></div>`
            dayDiv.appendChild(dotsDiv)
        }

        dayDiv.addEventListener('click', () => {
            selectedDate = dateString
            dateInput.value = selectedDate
            renderCalendar()
            renderList()
        })

        calendarGrid.appendChild(dayDiv)

    }

}

document.getElementById('prev-month').addEventListener('click', () => { currentDate.setMonth(currentDate.getMonth() - 1); renderCalendar(); })
document.getElementById('next-month').addEventListener('click', () => { currentDate.setMonth(currentDate.getMonth() + 1); renderCalendar(); })

function formatDateArg(dateStr) { 

    const [y, m, d] = dateStr.split('-')
    return `${d}/${m}/${y}`
}

function deleteTransaction(id) { 
    transactions = transactions.filter(t => t.id !== id)
    updateLocalStorage(); updateUI()
}

function editTransaction(id) {
    
    isEditing = true; editID = id;
    const t = transactions.find(t => t.id === id)
    
    text.value = t.text; amount.value = Math.abs(t.amount); dateInput.value = t.date;
    document.getElementById(t.amount < 0 ? 'type-expense' : 'type-income').checked = true;
    
    updateCategories()
    walletSelect.value = t.wallet
    categorySelect.value = t.category

    document.getElementById('form-title').innerText = "Editar Transacción"
    document.getElementById('submit-btn').innerText = "Guardar Cambios"
    document.getElementById('cancel-edit-btn').style.display = "block"
    
    selectedDate = t.date; const [y, m] = selectedDate.split('-'); currentDate = new Date(y, m - 1, 1)
    if (calendarBody.classList.contains('collapsed')) calendarToggle.click()
    
    renderCalendar(); renderList()
    document.querySelector('.add-transaction').scrollIntoView({ behavior: 'smooth' })

}

document.getElementById('cancel-edit-btn').addEventListener('click', resetForm)

function resetForm() {
    isEditing = false; editID = null
    text.value = ''
    amount.value = ''
    categorySelect.value = ''
    walletSelect.value = ''
    dateInput.value = selectedDate
    document.getElementById('form-title').innerText = "Nueva Transacción"
    document.getElementById('submit-btn').innerText = "Agregar Transacción"
    document.getElementById('cancel-edit-btn').style.display = "none"
}

form.addEventListener('submit', (e) => {

    e.preventDefault()

    if(text.value.trim() === '' || amount.value.trim() === '' || !categorySelect.value || !walletSelect.value || dateInput.value === '') {
        alert('Faltan campos. Revisa categorías y billeteras en ⚙️')
        return
    }

    let isExpense = document.getElementById('type-expense').checked
    let finalAmount = isExpense ? -Math.abs(+amount.value) : Math.abs(+amount.value)

    const tData = {
        id: isEditing ? editID : Math.floor(Math.random() * 100000000),
        text: text.value,
        wallet: walletSelect.value,
        category: categorySelect.value,
        amount: finalAmount,
        date: dateInput.value
    }

    if (isEditing) { 
        const index = transactions.findIndex(t => t.id === editID)
        transactions[index] = tData
    } 

    else { 
        transactions.push(tData)
    }

    selectedDate = dateInput.value; const [y, m] = selectedDate.split('-'); currentDate = new Date(y, m - 1, 1)

    updateLocalStorage(); updateUI(); resetForm()
});

function updateUI() {
    categories = JSON.parse(localStorage.getItem('categories')) || []
    wallets = JSON.parse(localStorage.getItem('wallets')) || []
    updateWalletsDropdowns()
    renderCalendar()
    renderList()
    updateValues()
    updateChart()
}

function init() {
    updateCategories();
    updateUI()
}

init()
