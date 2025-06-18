<!DOCTYPE html>
<html>
<body>
  <h2>FAQ Chatbot</h2>
  <input id="question" placeholder="Ask a question" />
  <button onclick="ask()">Send</button>
  <pre id="response"></pre>

  <script>
    async function ask() {
      const q = document.getElementById("question").value;
      const res = await fetch("https://your-n8n-instance/webhook/faq", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: q })
      });
      const data = await res.text();
      document.getElementById("response").innerText = data;
    }
  </script>
</body>
</html>
