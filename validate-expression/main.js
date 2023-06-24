var listItem = document.querySelectorAll(".list-group-item")
console.log(listItem);
var list = document.querySelector(".list-group")
list.addEventListener("click", function (e) {
    var value = prompt("enter your " + e.target.id)
    const email_validator_regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var phonenumber_validator = /^\d{11}$/;
    var postcode = /^\d{4}$/;
    var url = /^(ftp|http|https):\/\/[^ "]+$/
    switch (true) {
        case e.target.id == 'email':
            console.log(e.target.id);
            if(email_validator_regex.test(String(value).toLowerCase())){
                alert("congrats! valid email")
            }
            else{
                alert("sorry! your email is invalid")
            }
            break;

        case e.target.id == 'phonenumber':
            if(phonenumber_validator.test(String(value))){
                alert("congrats! valid phone number")
            }
            else{
                alert("sorry! your phone number is invalid")
            }
            break;
        case e.target.id == 'postcode':
            if(postcode.test(String(value))){
                alert("congrats! valid post code")
            }
            else{
                alert("sorry! your post code is invalid")
            }
            break;
        case e.target.id == 'url':
            if(url.test(String(value))){
                alert("congrats! valid url")
            }
            else{
                alert("sorry! your url is invalid")
            }
            break;
        default:
            break;

    }
  
})