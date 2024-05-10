class pay {

   handerOpenShoppingPage (){
      shoppingPage.render();
   }
   render(count) {


      const html = ` <div class="counterShop__wrapper" onclick="Payshop.handerOpenShoppingPage();">🛒${count}</div>`;
      ROOT_PAY.innerHTML = html;
   }
}
const Payshop = new pay();
let counterShop = localStorageUtil.getProducts();
Payshop.render(counterShop.length);






