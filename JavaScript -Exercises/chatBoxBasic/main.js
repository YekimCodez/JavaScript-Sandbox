let chatBot = function(input) {
    const tokens = input.toLowerCase();

    if (tokens.includes("hello") || tokens.includes("Hi")) {
        return "Hi! How can I help you?";

    } else if (tokens.includes('weather') || tokens.includes("rain")) {
        return 'The weather is sunny!';

    } else if (tokens.includes("name")) {
        return "I'm your friendly chatbot!";

    } else if (tokens.includes("how are you")) {
        return "I'm just a bot, but I'm doing great how about you?";

    } else if (tokens.includes("time")) {
        return "Sorry, I can't tell the time right now!";
        
    } else if (tokens.includes("bye") || tokens.includes("Goodbye")) {
        return "Goodbye! Have a good day";

    } else if (tokens.includes("thanks") || tokens.includes("Thank you")) {
        return "You're welcome!";

    } else if (tokens.includes("help")) {
        return "I can assist with simple queries like the weather or general questions!";

    } else {
        return "Sorry! I don't understand that. Can you try asking something else?";
    }
}

let processInput = function() {
    // Get user input form the input box
    const userInput =  document.getElementById("userInput").value;

    // Process the user input through the chatbot
    const botResponse = chatBot(userInput);

    // Display the chat history
    document.getElementById('chatOutPut').innerHTML += `<p><strong>Bot:</strong> ${botResponse}</p>`;

    // Clear the input box after processing
    document.getElementById("userInput").value = " ";
};


