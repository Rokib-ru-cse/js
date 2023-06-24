document.getElementById("cart").innerHTML = JSON.parse(localStorage.getItem("cart")) ? JSON.parse(localStorage.getItem("cart")).length : [].length
var newcart = new Array()
function cartItem(id, pname) {
    var ncart = {
        id: '',
        pname: ''
    }
    ncart["id"] = id
    ncart["pname"] = pname
    newcart = JSON.parse(localStorage.getItem("cart")) ? JSON.parse(localStorage.getItem("cart")) : []
    var exist = newcart.filter(item => item.id == id)
    if (exist.length == 0) {
        newcart.push(ncart)
        localStorage.setItem("cart", JSON.stringify(newcart))
    }
    document.getElementById("cart").innerHTML = JSON.parse(localStorage.getItem("cart")).length
}

function removeItem(id) {
    newcart = JSON.parse(localStorage.getItem("cart")) ? JSON.parse(localStorage.getItem("cart")) : []
    newcart.map((item, index) => {
        if (item.id == id) {
            newcart.splice(index, 1)
        }
    })
    localStorage.setItem("cart", JSON.stringify(newcart))
    document.getElementById("cart").innerHTML = JSON.parse(localStorage.getItem("cart")) ? JSON.parse(localStorage.getItem("cart")).length : [].length

    document.querySelector('.cartpage').innerHTML = ""
    cartsection()

}

function cartsection() {
    var mycard = document.querySelector('.cartpage')
    newcart = JSON.parse(localStorage.getItem("cart")) ? JSON.parse(localStorage.getItem("cart")) : []
    for (let j = 1; j <= newcart.length; j++) {
        var element = document.createElement("div")
        element.classList.add('card');
        element.setAttribute("style", "width: 18rem; width: 18rem;")
        var element1 = document.createElement('div')
        element1.classList.add('card-body')
        var imgelement = document.createElement('img')
        imgelement.src = `./images/${newcart[j - 1].id}.png`
        imgelement.classList.add("img-fluid", "w-100", "h-50")
        var hr1 = document.createElement('hr')
        var hr2 = document.createElement('hr')
        var cardtitle = document.createElement('h5')
        cardtitle.classList.add('card-title')
        var text = document.createTextNode(`${newcart[j - 1].pname}`);
        cardtitle.appendChild(text)
        element1.appendChild(imgelement)
        element1.appendChild(hr1)
        element1.appendChild(cardtitle)
        element1.appendChild(hr2)
        var btn = document.createElement("button")
        var btntext = document.createTextNode("Remove")
        btn.classList.add("btn", "btn-danger")
        btn.appendChild(btntext)
        btn.setAttribute('onclick', `removeItem(${newcart[j - 1].id})`)
        element1.appendChild(btn)
        element.appendChild(element1)
        mycard.appendChild(element)
    }
}
