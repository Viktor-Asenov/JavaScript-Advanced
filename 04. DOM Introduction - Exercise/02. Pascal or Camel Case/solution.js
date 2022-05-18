function solve() {
    let text = document.getElementById('text').value;
    let convention = document.getElementById('naming-convention').value;

    let textAsArray = text.split(' ');
    let transformed = '';

    if (convention === 'Camel Case') {
        for (let i = 0; i < textAsArray.length; i++) {
            let element = textAsArray[i];
            if (i !== 0) {
                element = element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
                transformed += element;
            } else {
                transformed += element.toLowerCase();
            }
        }
    } else if (convention === 'Pascal Case') {
        for (let i = 0; i < textAsArray.length; i++) {
            let element = textAsArray[i];
            element = element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
            
            transformed += element;
        }
    } else {
        transformed = 'Error!';
    }

    let result = document.getElementById('result');
    result.textContent = transformed;
}