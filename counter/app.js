var value = 0

function load(){
    var span = document.querySelector('span')
    span.innerHTML = value

}

function decrease(){
    value = value - 1;
    var span = document.querySelector('span')
    span.innerHTML = value
    span.style.color = 'red'
    console.log(value)
}
function increase(){
    value = value + 1;
    var span = document.querySelector('span')
    span.style.color = 'green'

    span.innerHTML = value
    console.log(value)
}
function reset(){
    value = 0;
    var span = document.querySelector('span')
    span.innerHTML = value
    span.style.color = 'white'

    console.log(value)
}