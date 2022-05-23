function validate() {
    let input = document.getElementById('email');
    input.addEventListener('change', onChange);

    function onChange(ev){
        const pattern = /^[a-z]+@[a-z]+\.[a-z]+$/;
        if (!pattern.test(ev.target.value)) {
            input.className = 'error';
        } else {
            input.className = '';
        }
    }    
}