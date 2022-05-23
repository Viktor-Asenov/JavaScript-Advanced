function solve() {
   let products = Array.from(document.getElementsByClassName('product'));
   let checkoutButton = document.querySelector('.checkout');
   checkoutButton.addEventListener('click', checkout);

   for(let product of products) {
      product.addEventListener('click', onClick);
   }
   
   let totalPrice = 0;
   let productsArray = [];

   function onClick(ev) {
      const productName = ev.currentTarget.querySelector('.product-title').textContent;          
      const productPrice = Number(ev.currentTarget.querySelector('.product-line-price').textContent);
      let textArea = document.querySelector('textarea');

      if (!productsArray.includes(productName)) {
         productsArray.push(productName);
      }

      textArea.textContent += `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`

      totalPrice += productPrice;
   }

   function checkout() {
      let textArea = document.querySelector('textarea');
      textArea.textContent += `You bought ${productsArray.join(', ')} for ${totalPrice.toFixed(2)}.`

      for(let product of products) {
         product.removeEventListener('click', onClick);
      }
            
      checkoutButton.removeEventListener('click', checkout);
   }
}