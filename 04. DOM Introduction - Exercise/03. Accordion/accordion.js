function toggle() {
    let buttonAccordion = document.getElementsByClassName('button')[0];
    let accordion = document.getElementById('extra');
    
    if (buttonAccordion.textContent === 'More' && accordion.style.display === 'none') {
        buttonAccordion.textContent = 'Less';
        accordion.style.display = 'block';
    } else {
        buttonAccordion.textContent = 'More';
        accordion.style.display = 'none';
    }   
}