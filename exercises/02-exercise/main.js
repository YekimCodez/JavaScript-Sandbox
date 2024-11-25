
let submitButton = function() {
    // Get user input
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;

    // Clear any previous messages
    document.getElementById("warningMessage").style.display = "none";
    document.getElementById("confirmMessage").style.display = "none";

    // Validate user input
    if (firstName === "" || lastName === "") {
    document.getElementById("warningMessage").style.display = "block";        
    document.getElementById("warningMessage").innerHTML = "This field is required!"
    } else {
    document.getElementById("confirmMessage").style.display = "block"; 
    document.getElementById("confirmMessage").innerHTML = "Thank you for your input!";
    }
    document.getElementById("submit").addEventListener("click", submitButton);

}
submitButton();






