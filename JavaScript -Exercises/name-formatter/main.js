// Name formatter function
let formatName = function() {
    // Get user input and trim any space
    let fullName = document.getElementById("nameInput").value.trim();

    // Split name into individual words
    let nameParts = fullName.split(" ");

    // Capitalize the first letter of each word and lowercase the rest
    for (let i = 0; i < nameParts.length; i++) {
        // Check if the word isn't empty
        if(nameParts.length > 0) {
            nameParts[i] = nameParts[i][0].toUpperCase() + nameParts[i].slice(1).toLowerCase();
        }        
    }
    // Join the words back into a single string
    let formattedName = nameParts.join(" ");

    // Display the formatted name
    document.getElementById("formattedName").textContent = formattedName;
}
