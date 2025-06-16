  function toggleChat() {
    const chat = document.getElementById("chatPopup");
    chat.style.display = (chat.style.display === "flex") ? "none" : "flex";
  }

  function sendMessage() {
    const input = document.getElementById("chatInput");
    const msg = input.value.trim();
    if (msg !== "") {
      const chatBody = document.getElementById("chatBody");
      const userMsg = document.createElement("p");
      userMsg.innerHTML = `<strong>You:</strong> ${msg}`;
      chatBody.appendChild(userMsg);
      input.value = "";
      chatBody.scrollTop = chatBody.scrollHeight;
    }
  }