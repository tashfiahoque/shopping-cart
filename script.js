function removeDiv(removeId, divId){
const btnRemove = document.getElementById(removeId);
   btnRemove.addEventListener('click', function(){
     const displayHide = document.getElementById(divId);
     displayHide.style.display = "none";
   });
}
function shoppingCartCal(btnId, productQuantityId, productValue, productPriceId){
   const btnClick = document.getElementById(btnId);
      btnClick.addEventListener('click', function(){
         let quantityItem = document.getElementById(productQuantityId).value;
         if(btnId == 'add-one' || btnId == 'add-extra'){
            quantityItem++;
         }else if(btnId == 'minus1' || btnId == 'minus2'){
            if(quantityItem > 0){
            quantityItem--;
            }else{
               alert("Please enter valid value");
            }
         }
         document.getElementById(productQuantityId).value = quantityItem;
         document.getElementById(productPriceId).innerText = productValue * quantityItem;

         let totalMobilePrice = parseFloat(document.getElementById("ph-price").innerText);
         let totalCasingPrice = parseFloat(document.getElementById("extra-price").innerText);
         let subTotalPrice = totalMobilePrice + totalCasingPrice;
         document.getElementById("subtotal-update").innerText = subTotalPrice.toLocaleString();
         let taxRate = 5;
         let taxAmount = Math.round(subTotalPrice * (taxRate/100));
         document.getElementById("tax-amount").innerText = taxAmount.toLocaleString();
         let totalPrice = subTotalPrice + taxAmount;
         document.getElementById("total-update").innerText = totalPrice.toLocaleString();

      });
}
shoppingCartCal('add-one', 'inc-value', 1219, "ph-price");
shoppingCartCal('minus1', 'inc-value', 1219, "ph-price");
shoppingCartCal('add-extra', 'extra-value', 59, "extra-price");
shoppingCartCal('minus2', 'extra-value', 59, "extra-price");        
removeDiv('remove', 'cart');
removeDiv('remove1', 'cart1');
const btnCheckOut = document.getElementById("check");
   btnCheckOut.addEventListener('click', function(){
      const oldWindow = document.getElementById("main");
      oldWindow.style.display = "none";
      const newWindow = document.getElementById("welcome");
      newWindow.style.display = "block";
   });