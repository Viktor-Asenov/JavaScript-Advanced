function lockedProfile() {
    let buttons = document.getElementsByTagName('button');
    
    for (let index = 0; index < buttons.length; index++) {
      const button = buttons[index];
 
      let parent = button.parentElement;  
      
      let children = parent.children;
      let lockButton = children[2];
 
      lockButton.addEventListener('click', lockProfile);
 
      let unlockButton = children[4];
 
      unlockButton.addEventListener('click', unlockProfile);
 
      button.addEventListener('click', showMore);  
    }
 
    
 
    function lockProfile(e){
     let lockButton = e.currentTarget;
     lockButton.checked = true;
 
     let unlockInput = document.getElementsByTagName('input')[1];
     unlockInput.checked = false;
    }
 
    function unlockProfile(e){
     let unlockButton = e.currentTarget;
     unlockButton.checked = true;
 
     let lockInput = document.getElementsByTagName('input')[0];
     lockInput.checked = false;
    }
 
    function showMore(e){
        let parent = e.currentTarget.parentElement;
 
        let inputElements = document.getElementsByTagName('input');
        let lockedProfileInput = inputElements[0];
        
        if (!lockedProfileInput.checked) {
             let hiddenDiv = parent.getElementsByTagName('div')[0];
             hiddenDiv.style.display = 'block';
            e.currentTarget.textContent = 'Hide it';
        }
    }
 }