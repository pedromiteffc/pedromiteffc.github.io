const form = document.getElementById('admin-form')
const catName = document.getElementById('cat-name')
const catIcon = document.getElementById('cat-icon')
const catColor = document.getElementById('cat-color')
const categoriesList = document.getElementById('categories-list')
const typeRadios = document.getElementsByName('cat-type')

let isEditing = false
let editID = null

let categories = JSON.parse(localStorage.getItem('categories')) || []

function updateLocalStorage() {
    localStorage.setItem('categories', JSON.stringify(categories))
}

function renderCategories() {

    categoriesList.innerHTML = ''
    
    if (categories.length === 0) {
        categoriesList.innerHTML = `<li style="justify-content:center; color: var(--text-muted); background: transparent; box-shadow: none; border: none;">No hay categorías creadas.</li>`
        return
    }

    categories.forEach(cat => {

        const item = document.createElement('li')
        const typeLabel = cat.type === 'expense' ? 'Gasto' : 'Ingreso'
        const typeColor = cat.type === 'expense' ? 'var(--negative)' : 'var(--positive)'
        
        item.innerHTML = `
            <div class="transaction-content">
                <div class="transaction-info">
                    <div class="icon-box" style="background-color: ${cat.color}20; color: ${cat.color};">
                        ${cat.icon}
                    </div>
                    <div class="transaction-details">
                        <strong>${cat.name}</strong>
                        <span class="category-tag" style="color: ${typeColor}">${typeLabel}</span>
                    </div>
                </div>
            </div>
            <div class="transaction-actions" style="position: relative; transform: none; opacity: 1; width: auto; margin-top: 0; padding-top: 0; border: none;">
                <button onclick="editCategory(${cat.id})" class="action-btn edit-btn"><i class="fa-solid fa-pen"></i></button>
                <button onclick="deleteCategory(${cat.id})" class="action-btn delete-btn"><i class="fa-solid fa-trash"></i></button>
            </div>
        `

        categoriesList.appendChild(item)

    })

}

function deleteCategory(id) {
    categories = categories.filter(c => c.id !== id)
    updateLocalStorage()
    renderCategories()
}

function editCategory(id) {

    isEditing = true
    editID = id
    const cat = categories.find(c => c.id === id)
    
    catName.value = cat.name
    catIcon.value = cat.icon
    catColor.value = cat.color
    
    if (cat.type === 'expense') {
        document.getElementById('cat-type-expense').checked = true
    } 
    
    else {
        document.getElementById('cat-type-income').checked = true
    }

    document.getElementById('form-title').innerText = "Editar Categoría"
    document.getElementById('submit-btn').innerText = "Guardar Cambios"
    document.getElementById('cancel-edit-btn').style.display = "block"
    
    document.querySelector('.add-transaction').scrollIntoView({ behavior: 'smooth' })

}

document.getElementById('cancel-edit-btn').addEventListener('click', resetForm)

function resetForm() {

    isEditing = false
    editID = null
    catName.value = ''
    catIcon.value = ''
    catColor.value = '#3b82f6'
    
    document.getElementById('form-title').innerText = "Nueva Categoría"
    document.getElementById('submit-btn').innerText = "Guardar Categoría"
    document.getElementById('cancel-edit-btn').style.display = "none"
}

form.addEventListener('submit', (e) => {

    e.preventDefault()
    
    let selectedType = 'expense'
    typeRadios.forEach(radio => { if (radio.checked) selectedType = radio.value; })

    if (isEditing) {

        const index = categories.findIndex(c => c.id === editID)

        categories[index] = {
            id: editID,
            name: catName.value.trim(),
            type: selectedType,
            icon: catIcon.value,
            color: catColor.value
        }

    } 
    
    else {

        categories.push({
            id: Math.floor(Math.random() * 100000000),
            name: catName.value.trim(),
            type: selectedType,
            icon: catIcon.value,
            color: catColor.value
        })
    }

    updateLocalStorage()
    renderCategories()
    resetForm()
});

renderCategories()