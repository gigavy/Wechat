document.addEventListener("DOMContentLoaded", () => {
    const messageInput = document.getElementById("message-input");
    const sendBtn = document.getElementById("send-btn");
    const chatMessages = document.getElementById("chat-messages");

    // Function to append a new message to the chat window
    function appendMessage(text, type) {
        if (!text.trim()) return; // Don't send empty messages

        const messageDiv = document.createElement("div");
        messageDiv.classList.add("message", type);

        // Add profile pic
        const profilePicDiv = document.createElement("div");
        profilePicDiv.classList.add("profile-pic-small");
        
        // Assign the correct profile color based on who is sending
        if (type === "sent") {
            profilePicDiv.classList.add("me"); 
        } else {
            profilePicDiv.classList.add("alice");
        }

        // Add text bubble
        const bubbleDiv = document.createElement("div");
        bubbleDiv.classList.add("message-bubble");
        bubbleDiv.textContent = text;

        // Construct the message element based on flex-direction
        messageDiv.appendChild(profilePicDiv);
        messageDiv.appendChild(bubbleDiv);

        chatMessages.appendChild(messageDiv);

        // Auto-scroll to the bottom of the chat
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Function to handle the send action
    function sendMessage() {
        const text = messageInput.value;
        if (text.trim() !== "") {
            // Append user's sent message
            appendMessage(text, "sent");
            messageInput.value = ""; // Clear input box

            // Simulate a reply from the other person after 1 second
            setTimeout(() => {
                appendMessage("That sounds good! Let me know when you're ready.", "received");
            }, 1000);
        }
    }

    // Send button click event
    sendBtn.addEventListener("click", sendMessage);

    // Enter key press event in textarea
    messageInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault(); // Prevent new line
            sendMessage();
        }
    });
});