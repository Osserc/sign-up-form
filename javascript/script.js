/* I already started writing a function before realizing it wasn't necessary
Leaving it here in case I revisit this project */

function matchPassword() {
    const password_one = document.getElementById("password_one")
    const password_two = document.getElementById("password_two")

    if (password_one != password_two) {
    document.getElementByClassName("message").innerHTML = "*Passwords do not match";  
    }

}