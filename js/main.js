// To Do List

let input = document.querySelector(".input")
let botonAgregar = document.querySelector(".boton-agregar")
let container = document.querySelector(".container")

class Item {
    constructor(tarea) {
        this.crearDiv(tarea)
    }
    crearDiv(tarea) {
        //input
        let inputItem = document.createElement("input")
        inputItem.setAttribute("type", "text")
        inputItem.value = tarea
        inputItem.disabled = true
        inputItem.classList.add("item-input")

        //div padre
        let divItem = document.createElement("div")
        divItem.classList.add("item")

        //boton editar
        let botonEditar = document.createElement("button")
        botonEditar.innerHTML = '<i class="fas fa-lock"></i>'
        botonEditar.classList.add("boton-editar")

        //boton remover
        let botonRemover = document.createElement("button")
        botonRemover.innerHTML = '<i class="fas fa-trash"></i>'
        botonRemover.classList.add("boton-remover")

        //append al divItem
        divItem.appendChild(inputItem)
        divItem.appendChild(botonEditar)
        divItem.appendChild(botonRemover)
        container.appendChild(divItem)
        
        //listener's de los botones editar y remover
        botonEditar.addEventListener("click", function () {
            inputItem.disabled = !inputItem.disabled
            if (inputItem.disabled) {
                botonEditar.innerHTML = '<i class="fas fa-lock"></i>'
            } else {
                botonEditar.innerHTML = '<i class="fas fa-lock-open"></i>'
            }
        })
        botonRemover.addEventListener("click", function () {
            divItem.remove()
        })
    }
}

function chequearInput() {
    if (!!input.value) {
        let item = new Item(input.value)
        input.value = ""
    }
}

botonAgregar.addEventListener("click", chequearInput)

