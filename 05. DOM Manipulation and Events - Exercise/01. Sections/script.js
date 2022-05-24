function create(words) {
   let content = document.getElementById('content');
   
   for (let word of words) {
      let paragraph = document.createElement('p');
      paragraph.textContent = word;
      paragraph.style.display = 'none';

      let div = document.createElement('div');
      div.appendChild(paragraph);
      div.addEventListener('click', onClick);

      content.appendChild(div);
   }

   function onClick(ev) {
      ev.target.firstChild.style.display = '';
   }
}