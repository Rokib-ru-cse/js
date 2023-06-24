var numberbtn = document.querySelector('.numberbtn')
var restartbtn = document.querySelector('.restartbtn')

numberbtn.addEventListener('click', function () {
    var myNumber = Math.floor((Math.random() * 10 + 1))
    for (let i = 0; i < 3; i++) {
        var value = prompt(`take a number between 1 to 10 : left chances ${3 - (i)}`)
        value = parseInt(value)
        if (value === myNumber) {
            alert('You Win')
            numberbtn.setAttribute("disabled", "")
            restartbtn.setAttribute('style', 'display:inline');
            return
        }
        else if (value >= myNumber) {
            alert('Correct answer is smaller!')
        }
        else if (value <= myNumber) {
            alert('Correct answer is greater!')
        }
    }
    alert('You lose!')
    numberbtn.setAttribute("disabled", "")
    restartbtn.setAttribute('style', 'display:inline');
})
restartbtn.addEventListener("click", function () {
    numberbtn.disabled = false
    restartbtn.setAttribute('style', 'display:none');

})
