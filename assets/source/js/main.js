// Notfy Bullet
setInterval(()=>{
        document.getElementById('bell').classList.toggle('active')

}, 700)


// Slider
let contador = 1
setInterval(()=>{
        document.getElementById(`slide${contador}`).checked = true
        contador++

        if(contador > 5){
                contador = 1;
        }
},4000)

// Category
const products = [
        {'index':0, 'name': 'The Legend of Zelda', 'img': 'assets/source/img/rg1.png', 'priceActual': 89.90, 'priceOrigin':99.90, 'desc': 10},
        {'index':1, 'name': 'The Witcher 3', 'img': 'assets/source/img/rg2.png', 'priceActual': 114.10, 'priceOrigin':135.90, 'desc': 15},
        {'index':2, 'name': 'State of Decay 2', 'img': 'assets/source/img/rg3.png', 'priceActual': 66.40, 'priceOrigin':69.90, 'desc': 5},
        {'index':3, 'name': 'Need For Speed', 'img': 'assets/source/img/rg4.png', 'priceActual': 68.34, 'priceOrigin':113.90, 'desc': 40},
        {'index':4, 'name': 'GTA VI', 'img': 'assets/source/img/rg5.png', 'priceActual': 114.10, 'priceOrigin':135.90, 'desc': 15},
        {'index':5, 'name': 'GTA Story Mode', 'img': 'assets/source/img/rg6.png', 'priceActual': 66.40, 'priceOrigin':69.90, 'desc': 5},
        {'index':6, 'name': 'MidNight Club', 'img': 'assets/source/img/rg7.png', 'priceActual': 89.90, 'priceOrigin':99.90, 'desc': 10},
        {'index':7, 'name': 'Minecraft', 'img': 'assets/source/img/rg8.png', 'priceActual': 68.34, 'priceOrigin':113.90, 'desc': 40}
]

let cart = []
let total = 0

const renderProducts = ()=>{
        const categoryContainer = document.querySelector('.category-container')
        categoryContainer.innerHTML = ''

        products.forEach((product)=>{
                const item = document.createElement('div')
                item.className = 'category-item'
                item.innerHTML = `
                        <img src="${product.img}" alt="${product.name} image">
                        <h4>${product.name}</h4>
                        <div class="info">
                                <span class="discount">-${product.desc.toString().replace('.',',')}%</span>
                                <span class="price-origin">R$ ${product.priceOrigin.toFixed(2).toString().replace('.',',')}</span>
                                <span class="price-actual">R$ ${product.priceActual.toFixed(2).toString().replace('.',',')}</span>
                        </div>
                        <button >Adicionar ao carrinho</button>`

                item.querySelector('button').addEventListener('click', ()=>{
                        addToCart(product.index)
                })
                
                categoryContainer.appendChild(item)
        })
}

renderProducts()

const addToCart = (index)=> {
        const cart = document.querySelector('#items')
        const item = document.createElement('li')
        item.classList = "item"
        item.innerHTML = `
                <div class="image">
                        <img src="${products[index].img}" alt="${products[index].name} image">
                </div>
                        <h4 id="name">${products[index].name}</h4>
                        <span id="price">R$ ${products[index].priceActual.toFixed(2).toString().replace('.',',')}</span>
        `
        total += products[index].priceActual
        document.getElementById('TotalPrice').innerHTML = `R$ ${total.toFixed(2).toString().replace('.', ',')}`
        cart.appendChild(item)
        showAddItem()
}

const showAddItem = ()=>{
        const popupContainer = document.querySelector('#popupContainer')
        const addItem = document.querySelector('#addItem') 

        popupContainer.classList.add('opened')
        addItem.classList.add('opened')

        document.getElementById('addItemClose').addEventListener('click', ()=>{
                popupContainer.classList.remove('opened')
                addItem.classList.remove('opened')
        })
        document.getElementById('addItemContine').addEventListener('click', ()=>{
                popupContainer.classList.remove('opened')
                addItem.classList.remove('opened')
                document.getElementById('cartOpen').classList.remove('opened')
        })
        document.getElementById('btn-open-cart').addEventListener('click', ()=>{
                document.getElementById('cartOpen').classList.add('opened')
                popupContainer.classList.remove('opened')
                addItem.classList.remove('opened')
        })
}

document.getElementById('cart').addEventListener('click', ()=>{
        document.getElementById('cartOpen').classList.toggle('opened')
})

document.getElementById('checkout').addEventListener('click', ()=>{
        const container = document.getElementById('popupContainer')
        const finish = document.getElementById('finish')

        document.getElementById('cartOpen').classList.remove('opened')
        container.classList.add('opened')
        finish.classList.add('opened')

        document.getElementById('items').innerHTML = ''
        document.getElementById('TotalPrice'). innerHTML = 'R$ 00,00'

        cart = []
        total = 0
})

document.getElementById('finishClose').addEventListener('click', ()=>{
        const container = document.getElementById('popupContainer')
        const finish = document.getElementById('finish')

        container.classList.remove('opened')
        finish.classList.remove('opened')
})

const items = document.querySelector('#items')

items.addEventListener('wheel', (e)=>{
        items.scrollTop += e.deltaY
        e.preventDefault()
})