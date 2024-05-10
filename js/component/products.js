class Products {
constructor(){
   this.classNameActive = "catalog__button_active";
   this.labelAdd = "BUY";
   this.labelRemove = "REMOVE";
}
handleSetLocationStorage(element , id){
  let {pushProduct, products} = localStorageUtil.putProducts(id);
  
  if(pushProduct){
   element.classList.add(this.classNameActive);
   element.innerHTML = this.labelRemove;
    
  }else{
   element.classList.remove(this.classNameActive);
   element.innerHTML = this.labelAdd;
  }
  Payshop.render(products.length);
}
   render() {
      let htmlCatalog = '';
      CATALOG.forEach(({id , price , name , img}) => {
         const productsStore = localStorageUtil.getProducts();
         let activeClass = ''
         let activeText = ''
         if(productsStore.indexOf(id) === -1){
            activeText = this.labelAdd;
         }else{
            activeText =this.labelRemove ;
            activeClass = " " + this.classNameActive;
         }
         htmlCatalog +=
            `
        <li class="catalog__item">
        <a class="catalog__title-normal">${name}</a>
        <div class="catalog__image catalog__image-left"><img src="${img}" id='catalogImage1'></div>
        <div class="catalog__price">price: <span>${price}</span>$</div>
        <button class="catalog__button${activeClass}" onclick="productsPage.handleSetLocationStorage(this , '${id}');">
        ${activeText}
        </button>
        </li>
        `;
        
      }); 
       
      const html = `    
        <ul class="catalog__content">
        ${htmlCatalog}
        </ul>
        `;
       
        ROOT_PRODUCTS.innerHTML = html;
   }
}


const productsPage = new Products();

productsPage.render();