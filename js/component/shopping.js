class Shopping {
   openCloseShopping() {
      ROOT_SHOPPING.innerHTML = ` `;
   }

dropdown(){
let paywaySelect = document.querySelector(".sum-waypay__select");
let paywayMenu = document.querySelector(".sum-waypay__menu");
paywaySelect.classList.toggle("select-clicked");
paywayMenu.classList.toggle("sum-waypay__menu-open");
}



selectDropdown(e){
   
   const selected = document.querySelector(".sum-waypay__selected");

   selected.innerHTML = e.innerHTML;
   shoppingPage.dropdown();
}


checkbox(e){
   let blockButton = document.querySelector(".shopping__sum-button");
  if(e.checked === true){
   blockButton.classList.add("lockbutton");
  }else{
   blockButton.classList.remove("lockbutton");
  }
console.log(e.checked);
}


   render() {

      const productsStore = localStorageUtil.getProducts();
      let htmlcatalog = '';
      let sumcatalog = 0;

      let notFoundText;
      CATALOG.forEach(({
         id,
         price,
         name,
         img
      }) => {
         if (productsStore.indexOf(id) !== -1) {
            htmlcatalog += `
         <div class="shopping-element"> 
         <div class="shopping-element__left"> 
         <div class="shopping-element__name __title-normal">${name}</div>
         <div class="shopping-element__price __text">${price}$</div>
         </div>
         <div class="shopping-element__img"><img src="${img}"></div>
         </div>
         `
            sumcatalog += price;

         }


      });
      if (sumcatalog === 0) {
         notFoundText = `<div class="shopping-element"> 
      <div class="shopping-element__name __title-normal">not found</div>
      <div class="shopping-element__price __text">click on the product buy button to add it to your cart</div>
      </div>`;
      }


      const html = `
      <div class="shopping__container">
      <div>
      ${htmlcatalog}
      ${notFoundText}
      </div>
     
      
      <div class="shopping__sum-waypay">
      <div class="sum-waypay__select __text" onclick="shoppingPage.dropdown();">
      <span class="sum-waypay__selected">cash</span>
      <div class="sum-waypay__caret"><img src="images/pen-white.svg"></div>
      </div>
      <ul class="sum-waypay__menu">
      <li onclick="shoppingPage.selectDropdown(this);">visa card</li>
      <li onclick="shoppingPage.selectDropdown(this);">master card</li>
      <li onclick="shoppingPage.selectDropdown(this);" class="sum-waypay__active">cash</li>
      <li onclick="shoppingPage.selectDropdown(this);">crypto</li>
      <li onclick="shoppingPage.selectDropdown(this);">paypal</li>
      </ul>
      </div>
      <div class="shopping__sum-waypay">
      <div class="sum-waypay__select __text" onclick="shoppingPage.dropdown();">
      <span class="sum-waypay__selected">user info</span>
      <div class="sum-waypay__caret"><img src="images/pen-white.svg"></div>
      </div>
      </div> 
      <div class="shopping__sum"> 
      <div class="shopping__sum-sums">
      <div class="shopping__sum-name __title-medium">total:</div>
      <div class="shopping__sum-price __title-normal">${sumcatalog}$</div>
      </div>
      <div class="shopping__agree">
      <input type="checkbox" class="shopping__agree-button" name="checkbox" id="shoppingCheckbox" onclick="shoppingPage.checkbox(this);"/>
      <div class="shopping__agree-text">I agree with the rules for using the trading platform and age</div>
      </div>
      <button class="shopping__sum-button __title-normal">next</button>
      </div>
      <div class="shopping__close" onclick="shoppingPage.openCloseShopping();"></div>
      </div>
      `;
     

      ROOT_SHOPPING.innerHTML = html;
   }
}
const shoppingPage = new Shopping;