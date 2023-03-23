const items = [

    {
        id: '0',
        name: 'Antigripal',
        desc: 'Tabletas para alivio de síntomas de gripe',
        type: 'meds',
        price: 5,
        stock: 50,
        img: '/img/Antigripal.png'
    },
    {
        id: '1',
        name: 'Aspirina',
        desc: 'Tabletas para dolor de cabeza',
        type: 'meds',
        price: 10,
        stock: 30,
        img: '/img/Aspirina.jpg'
    },
    {
        id: '2',
        name: 'Bismutol',
        desc: 'Jarabe para alivio digestivo',
        type: 'meds',
        price: 8,
        stock: 40,
        img: '/img/Jarabe.jpg'
    },
    {
        id: '3',
        name: 'Bexident',
        desc: 'Pasta dentrífica para encías',
        type: 'hig',
        price: 20,
        stock: 15,
        img: '/img/PastaEncias.jpg'
    },
    {
        id: '4',
        name: 'Pilexil',
        desc: 'Champú para tratamiento de caspa',
        type: 'hig',
        price: 4,
        stock: 40,
        img: '/img/ChampuCaspa.jpg'
    },
    {
        id: '5',
        name: 'Suplemento',
        desc: 'Suplemento alimenticio bebible',
        type: 'vit',
        price: 10,
        stock: 30,
        img: '/img/Suplemento.jpg'
    },
    {
        id: '6',
        name: 'Complejo B',
        desc: 'Cápsulas con vitaminas B1, B6 y B12',
        type: 'vit',
        price: 20,
        stock: 40,
        img: '/img/VitaminaB.jpg'
    },
    {
        id: '7',
        name: 'Vitamina C',
        desc: 'Tabletas con vitamina C y bioflavonoides',
        type: 'vit',
        price: 15,
        stock: 50,
        img: '/img/VitaminaC.jpg'
    },

]

export const getItems = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(items)
        }, 100)
    })
}

export const getItemsByType = (typeId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(items.filter(item => item.type === typeId))
        }, 100)
    })
}

export const getItemById = (itemId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(items.find(item => item.id === itemId))
        }, 100)
    })
}