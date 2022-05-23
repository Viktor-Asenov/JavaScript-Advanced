function focused() {
    let fields = document.getElementsByTagName('input');

    for (let field of fields) {
        field.addEventListener('focus', onFocus);
        field.addEventListener('blur', onBlur);
        console.log(field)
    }
    
    function onFocus(ev) {
        ev.target.parentNode.className = 'focused';
    }

    function onBlur(ev) {
        ev.target.parentNode.className = '';
    }
}