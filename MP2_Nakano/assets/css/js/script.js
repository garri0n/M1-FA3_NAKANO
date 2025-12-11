function searchWord() {

    const sentence = document.getElementById('sentence').value;
    const word = document.getElementById('word').value;
    const resultElement = document.getElementById('result');

    if (sentence.includes(word)) {
        resultElement.textContent = "Found";
        resultElement.style.color = "green";
        resultElement.style.fontWeight = "bold";
    } else {
        resultElement.textContent = "Not Found";
        resultElement.style.color = "red";
        resultElement.style.fontWeight = "bold";
    }
}
