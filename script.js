async function getQuote() {
    try {
        const res = await fetch("https://api.quotable.io/random");
        const data = await res.json();
        document.getElementById("quote").innerText = data.content;
    } catch {
        document.getElementById("quote").innerText =
            "Stay strong. You are not alone.";
    }
}

function handleSubmit(e) {
    e.preventDefault();
    alert("Thank you for reaching out 💙 We will get back to you soon.");
}

getQuote();