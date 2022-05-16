function extractText() {
    let items = document.getElementById('items').children;
    let result = '';

    for(let item of Array.from(items)) {
        result += item.textContent;
        result += '\r\n';
    }

    let textArea = document.getElementById('result');
    textArea.textContent = result;
}