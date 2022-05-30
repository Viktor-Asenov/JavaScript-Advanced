function encodeAndDecodeMessages() {
    let divs = Array.from(document.getElementById('main').children);
    divs[0].children[2].addEventListener('click', encode);
    divs[1].children[2].addEventListener('click', decode);

    function encode(ev) {
        let message = ev.target.parentNode.children[1].value;
        let encodedMessage = '';

        for (let i = 0; i < message.length; i++) {
            let currentCharAsciValue = message.charCodeAt(i);
            currentCharAsciValue += 1;

            encodedMessage += String.fromCharCode(currentCharAsciValue);
        }

        divs[1].children[1].value = encodedMessage;

        ev.target.parentNode.children[1].value = '';
    }

    function decode(ev) {
        let message = ev.target.parentNode.children[1].value;
        let decodedMessage = '';

        for (let i = 0; i < message.length; i++) {
            let currentCharAsciValue = message.charCodeAt(i);
            currentCharAsciValue -= 1;

            decodedMessage += String.fromCharCode(currentCharAsciValue);
        }
        
        divs[1].children[1].value = decodedMessage;
    }
}