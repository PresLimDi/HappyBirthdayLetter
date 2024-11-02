function toggleLetter() {
    const carta = document.getElementById("letter")
    const overlay = document.getElementById("overlay");
    const button = document.getElementById("button")

    button.classList.add("hidden")
    carta.classList.toggle("hidden");
    overlay.classList.toggle("hidden");
}

function showGift() {
    const presente = document.getElementById("gift")
    
    presente.classList.remove("hidden");
    
}

function toggleLetterAndGift() {
    toggleLetter();
    showGift();
}

function show() {
    const hideGift = document.getElementById("gift")
    const show = document.getElementById("TheGift")

    gift.classList.add("hidden")
    TheGift.classList.remove("hidden")
}

