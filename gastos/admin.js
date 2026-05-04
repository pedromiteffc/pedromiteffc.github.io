const formCat = document.getElementById('admin-form-cat')
const catName = document.getElementById('cat-name')
const catIcon = document.getElementById('cat-icon')
const catColor = document.getElementById('cat-color')
const categoriesList = document.getElementById('categories-list')
const typeRadios = document.getElementsByName('cat-type')
const formWal = document.getElementById('admin-form-wal')
const walName = document.getElementById('wal-name')
const walLogo = document.getElementById('wal-logo')
const walletsList = document.getElementById('wallets-list')

let isEditingCat = false; let editCatID = null
let isEditingWal = false; let editWalID = null

let categories = JSON.parse(localStorage.getItem('categories')) || []

const defaultWallets = [
    { id: '1', name: 'Efectivo', logo: 'https://cdn-icons-png.flaticon.com/512/2489/2489756.png' },
    { id: '2', name: 'Mercado Pago', logo: 'https://logospng.org/download/mercado-pago/logo-mercado-pago-icono-1024.png' }
]

let wallets = JSON.parse(localStorage.getItem('wallets'))

if(!wallets) { 
    wallets = defaultWallets
    localStorage.setItem('wallets', JSON.stringify(wallets))
}

function renderCategories() {

    categoriesList.innerHTML = ''

    if (categories.length === 0) { 
        categoriesList.innerHTML = `<li style="justify-content:center; color: var(--text-muted); border: none; box-shadow:none; background:transparent;">Sin categorías.</li>`
        return
    }

    categories.forEach(cat => {

        const item = document.createElement('li')
        const typeLabel = cat.type === 'expense' ? 'Gasto' : 'Ingreso'
        const typeColor = cat.type === 'expense' ? 'var(--negative)' : 'var(--positive)'
        
        item.innerHTML = `
            <div class="transaction-content">
                <div class="transaction-info">
                    <div class="icon-box" style="background-color: ${cat.color}20; color: ${cat.color};">${cat.icon}</div>
                    <div class="transaction-details">
                        <strong>${cat.name}</strong><span class="category-tag" style="color: ${typeColor}">${typeLabel}</span>
                    </div>
                </div>
            </div>
            <div class="transaction-actions" style="position: relative; transform: none; opacity: 1; border: none; margin:0; padding:0; width:auto;">
                <button onclick="editCategory(${cat.id})" class="action-btn edit-btn"><i class="fa-solid fa-pen"></i></button>
                <button onclick="deleteCategory(${cat.id})" class="action-btn delete-btn"><i class="fa-solid fa-trash"></i></button>
            </div>
        `

        categoriesList.appendChild(item)

    })

}

function deleteCategory(id) { 
    categories = categories.filter(c => c.id !== id)
    localStorage.setItem('categories', JSON.stringify(categories))
    renderCategories()
}

function editCategory(id) {
    isEditingCat = true; editCatID = id
    const cat = categories.find(c => c.id === id)
    catName.value = cat.name; catIcon.value = cat.icon; catColor.value = cat.color
    document.getElementById(cat.type === 'expense' ? 'cat-type-expense' : 'cat-type-income').checked = true
    document.getElementById('cat-form-title').innerText = "Editar Categoría"
    document.getElementById('cat-submit-btn').innerText = "Guardar"
    document.getElementById('cat-cancel-edit-btn').style.display = "block"
}

document.getElementById('cat-cancel-edit-btn').addEventListener('click', resetCatForm)

function resetCatForm() {
    isEditingCat = false
    editCatID = null
    catName.value = ''
    catIcon.value = ''
    catColor.value = '#3b82f6'
    document.getElementById('cat-form-title').innerText = "Nueva Categoría"
    document.getElementById('cat-submit-btn').innerText = "Guardar Categoría"
    document.getElementById('cat-cancel-edit-btn').style.display = "none"
}

formCat.addEventListener('submit', (e) => {
    e.preventDefault()
    let selectedType = 'expense'
    typeRadios.forEach(radio => { if (radio.checked) selectedType = radio.value; })
    
    const catData = { 
        id: isEditingCat ? editCatID : Date.now(), 
        name: catName.value.trim(), 
        type: selectedType, 
        icon: catIcon.value, 
        color: catColor.value 
    }
    
    if (isEditingCat) {
        const idx = categories.findIndex(c => c.id === editCatID)
        categories[idx] = catData
    } 

    else { 
        categories.push(catData)
    }

    localStorage.setItem('categories', JSON.stringify(categories))
    renderCategories()
    resetCatForm()

})

function renderWallets() {

    walletsList.innerHTML = ''
    if (wallets.length === 0) { 
        walletsList.innerHTML = `<li style="justify-content:center; color: var(--text-muted); border: none; box-shadow:none; background:transparent;">Sin billeteras.</li>`
        return
    }

    wallets.forEach(wal => {

        const item = document.createElement('li')

        item.innerHTML = `
            <div class="transaction-content">
                <div class="transaction-info">
                    <img src="${wal.logo}" alt="${wal.name}" style="width: 42px; height: 42px; border-radius: 12px; object-fit: cover; border: 1px solid var(--glass-border);">
                    <div class="transaction-details"><strong>${wal.name}</strong></div>
                </div>
            </div>
            <div class="transaction-actions" style="position: relative; transform: none; opacity: 1; border: none; margin:0; padding:0; width:auto;">
                <button onclick="editWallet('${wal.id}')" class="action-btn edit-btn" style="background-color: #9b59b6;"><i class="fa-solid fa-pen"></i></button>
                <button onclick="deleteWallet('${wal.id}')" class="action-btn delete-btn"><i class="fa-solid fa-trash"></i></button>
            </div>
        `

        walletsList.appendChild(item)

    })

}

function deleteWallet(id) { 
    wallets = wallets.filter(w => w.id !== id)
    localStorage.setItem('wallets', JSON.stringify(wallets))
    renderWallets()
}

function editWallet(id) {
    isEditingWal = true; editWalID = id
    const wal = wallets.find(w => w.id === id)
    walName.value = wal.name; walLogo.value = wal.logo
    document.getElementById('wal-form-title').innerText = "Editar Billetera"
    document.getElementById('wal-submit-btn').innerText = "Guardar"
    document.getElementById('wal-cancel-edit-btn').style.display = "block"
}

document.getElementById('wal-cancel-edit-btn').addEventListener('click', resetWalForm)

function resetWalForm() {
    isEditingWal = false
    editWalID = null
    walName.value = ''
    walLogo.value = ''
    document.getElementById('wal-form-title').innerText = "Nueva Billetera"
    document.getElementById('wal-submit-btn').innerText = "Guardar Billetera"
    document.getElementById('wal-cancel-edit-btn').style.display = "none"
}

formWal.addEventListener('submit', (e) => {

    e.preventDefault()
    
    const logoUrl = walLogo.value.trim()
    
    const isDirectLink = logoUrl.match(/\.(jpeg|jpg|gif|png|webp|svg)$/i)
    const isPostImgDirect = logoUrl.includes('i.postimg.cc')
    
    if (!isDirectLink && !isPostImgDirect) {
        alert('⚠️ Parece que el enlace no es una imagen directa.\n\nSi usaste Postimages, asegúrate de copiar la fila que dice "Enlace directo" (suele terminar en .png o .jpg).')
        return
    }

    const walData = { 
        id: isEditingWal ? editWalID : Date.now().toString(), 
        name: walName.value.trim(), 
        logo: logoUrl 
    }

    if (isEditingWal) { 
        const idx = wallets.findIndex(w => w.id === editWalID)
        wallets[idx] = walData
    } 

    else { 
        wallets.push(walData)
    }

    localStorage.setItem('wallets', JSON.stringify(wallets))
    renderWallets()
    resetWalForm()

})

renderCategories()
renderWallets()
