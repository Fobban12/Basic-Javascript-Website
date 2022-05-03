//Change this to the heroku one when publishing and do the database in heroku instead of local
const api_url = 'https://salty-mountain-56006.herokuapp.com/db'

//For getting the data as a json object from the server and the database.
async function getapi (url){
  
   const res = await fetch(url)
   var data = await res.json()
   showHide(data)
   start(data)
}
getapi(api_url);

//Pictures should come from the database
function frontPage(data){
$('#Content').html(`
   <div>
    <div id="Deals">
     <img src="./images/springSale.jpg" id="DealPictures"></img>
     <img src="./images/sales.jpg" id="DealPictures"></img>
     <img src="./images/summerSale.jpg" id="DealPictures"></img>
     <img src="./images/amdDeals.jpg" id="DealPictures"></img>
    </div>
   
    <div id="FrontPageTitle">Popular</div>
    <div id="ProductsPopular">
    </div>
   
   <div id="FrontPageTitle">Recommended</div>
    <div id="ProductsRecommended">
     
    </div>
   </div>
   `
   );  

   //The next two loops are for showing the recommended and popular products by (tag??), by hand at the moment.
   for (let i=0; i < data.Products.length; i++)
   {
   let productPopular = $("<div></div>").html(`
   <div id="Product">
    <img src="${data.Products[i].allproducts_image}" id="ProductPictures">
    <h4>${data.Products[i].allproducts_name}</h4>
    <div id="ProductInfo">${data.Products[i].allproducts_info}</div>
    <div id="ProductPrice">${data.Products[i].allproducts_price}€</div>
    </div>
     ` )
   
   $(productPopular).on('click',function(){productDetailView(data.Products[i])})
   $('#ProductsPopular').append(productPopular)
     
    }
   
   for (let i=0; i < data.Products.length; i++)
   {
      let Random = Math.floor(Math.random() * data.Products.length)
      let productRecommended = $("<div></div>").html(`
      <div id="Product">
       <img src="${data.Products[Random].allproducts_image}" id="ProductPictures">
       <h4>${data.Products[Random].allproducts_name}</h4>
       <div id="ProductInfo">${data.Products[Random].allproducts_info}</div>
       <div id="ProductPrice">${data.Products[Random].allproducts_price}€</div>
       </div>
        ` )
      
      $(productRecommended).on('click',function(){productDetailView(data.Products[Random])})
      $('#ProductsRecommended').append(productRecommended)
   }
 
};


// Data that comes should be based on the pressed categorys unique ID, so in other words, it will show the items that the category ID is assigned to.
function productCategoryView(CategoryName,data)
{

  $('#Content').html(`
   <div id="CategoryTitle">${CategoryName}</div>

   <div id="CategoryProducts">

   </div>
   `
   );
   

   for (let i=0; i < data.Products.length; i++)
   {
      let Category = $('<div></div>').html(`
      <div id ="CategoryProduct">
      <img src="${data.Products[i].allproducts_image}" id="CategoryImages"> 
      <div id="CategoryAllStuff">
      <h2 id="CategoryName">${data.Products[i].allproducts_name}</h2>
      <h3>Info:</h3>
      <h4 id="CategoryInfo">- ${data.Products[i].allproducts_info}</h4> 
      <h4 id="CategoryInfo">- Other info, if added to the database</h4> 
      <h4 id="CategoryInfo">- Other info, if added to the database</h4> 
      <h4 id="CategoryInfo">- Other info, if added to the database</h4> 
      <h3>Price:</h3>
      <div id="CategoryPrice">${data.Products[i].allproducts_price}€</div>   
      </div>
    </div>
        ` )
       $(Category).on('click',function(){productDetailView(data.Products[i])});
       $('#CategoryProducts').append(Category)
   }


};


// A loop here, and the data should come from the pressed product ID tree: Category -> SubCategory -> Specific product
// The structure of the HTML will be different, on a later date
//Loop should be here, remove this later when done
function productDetailView(product)
{

   $('#Content').html(`
   <div id="ProductWholeDetailView"> 
    <img src="${product.allproducts_image} "id="DetailViewImages">
     <div id="ViewNameAndInfo">
       <h1 id="ProductWholeDetailViewName">${product.allproducts_name}</h1>
       <h3>Info:</h3>
       <h4 id="ProductWholeDetailViewInfo">- ${product.allproducts_info}</h4>
       <h4>- More info can put here</h4>
       <h4>- More info can put here</h4>
       <h4>- More info can put here</h4>
       <h4>- More info can put here</h4>
       <h4>- More info can put here</h4>
       <h4>- More info can put here</h4>
       
     </div>
     <div id="ViewPriceAndCart">
       <div id="ProductWholeDetailViewPrice">${product.allproducts_price}€</div>
       <h3>IN STOCK</h3>
      <button id="AddToCartButton">Add to cart</button>
      </div>
    </div>
  </div>

   `
   );
   
   //Add to minicart
     var addtoMiniCart = $('#AddToCartButton')
     for (let i=0; i < addtoMiniCart.length; i++){
          var button = addtoMiniCart[i]
          $(button).on('click', addtoMiniCartClicked)
     }
     
};


//Main sidebar here
function sideBar(data){
   $('#SideBar').html(`
    <div id="sideBarCSS">
   
    </div>
    
    `),$('#SideBar').toggleClass("show")

    for (let i=0; i < data.Categories.length; i++) 
    {
      let CategoryPrint = $('<div></div>').html(`
       <div id="sideBarNames"> <span>${data.Categories[i].category_name}</span> </div> ` )
      let CategoryArrow = $('<div></div>').html(`<button id="categoryArrow" > > </button>`)
      $(CategoryArrow).on('click',function(){subCategory(data.Categories[i].subcategories, data) })
      $('#sideBarCSS').append(CategoryArrow)
      $(CategoryPrint).on('click',function(){
         if ($('#subCategory').hasClass("show") == true)
         {
            $('#subCategory').toggleClass("show"); $('#SideBar').toggleClass("show")
            productCategoryView(data.Categories[i].category_name, data)
         }
         else{ 
            $('#SideBar').toggleClass("show")
            productCategoryView(data.Categories[i].category_name, data)}
         
      
      
      })
      $('#sideBarCSS').append(CategoryPrint)
    }
   
   
   };

   //This should show the right subcategories based from the category unique id, will loop trough all the subcategories //This just comes from the data array from the category now!!!
   //The structure of the HTML will be different, on a later date
   function subCategory(name,data)
   {
      $('#subCategory').html(`
         <div id=sideBarSubCategory>
      
         </div>
         `)
    for (let i = 0 ; i < name.length ; i++){
         let category = $('<div></div>').html(`
         <div class="subCategory">
         <div id="sideBarNames">${name[i]}</div>
         </div>`)
         $('#sideBarSubCategory').append(category) 
         $(category).on('click', function(){
         if ($('#subCategory').hasClass("show") == true)
         {
            $('#subCategory').toggleClass("show"); $('#SideBar').toggleClass("show")
            productCategoryView(name[i],data)
         }
         else{ 
            showHide(data)
            productCategoryView(name[i],data)}
         })
          } $('#subCategory').toggleClass("show")
     };
   


//Shows and hides the sidebar, and will also hide the subCategory if shown
async function showHide(data){$('#Categories').on("click",function(){
   if ($('#subCategory').hasClass("show") == true)
   {
        $('#subCategory').toggleClass("show"); $('#SideBar').toggleClass("show")

   } 
  else {sideBar(data)}});};


//For showing the small shopping cart
function cartMini(){
$('#CartMini').html(`

 <div id="CartMiniTitle">Cart</div>
 <div class="CartMiniItem">
 </div>
 <div id="CartMiniTotalPrice">${0}€</div>
 <button id="OrderButton">Order</button>
`);$('#CartInfo').on('mouseover',function(){$('#CartMini')
.show()})
.on('mouseout',function(){$('#CartMini').hide()
})
$('#OrderButton').on('click',function(){OrderClicked()})

};



//Function for adding product to cart
function addtoMiniCartClicked(event){
   var button = event.target
   var productItem = $(button).parent().parent()
   var productName = $(productItem).find('#ProductWholeDetailViewName').text()
   var productPrice = $(productItem).find('#ProductWholeDetailViewPrice').text()
   var productImage = $(productItem).find('#DetailViewImages').attr('src')
   var loop = [{name:productName, price:productPrice, image:productImage}]
   for (let i=0; i < loop.length; i++) 
   {
  
   var miniCartItem= $('<div class="miniCartItem"></div>').html(`
   <img src="${loop[i].image}" id="CartMiniImage">
   <div class="CartMiniInfo">
     <div>${loop[i].name}</div>
     <input class="CartMiniQuantity" type="number" value="1"></input>
   </div>
     <div id="RemoveItemButton"><button class="btn-danger">Remove</button></div>
     <div class="CartMiniPrice">${loop[i].price}</div>
  
   `)
   var miniItems = $('.CartMiniItem')[0]
   $(miniItems).append(miniCartItem)
   $(miniCartItem).find('.btn-danger').on('click', removeMiniCartItem)[0]
   $(miniCartItem).find('.CartMiniQuantity').on('change', quantityChanged)[0]
   updateMiniCartTotal()
   }
   };

//This is for removing items from minicart
  function removeMiniCartItem(event)
  {
   var buttonClicked = event.target
   $(buttonClicked).parent().parent().remove()
   updateMiniCartTotal()
  }
//This is for changing the quantity in the MiniCart
   function quantityChanged(event){
        var input = event.target
        if (isNaN(input.value) || input.value <= 0){
           input.value = 1
         }
         updateMiniCartTotal()
     }

//This is for ordering items
function OrderClicked()
{
if($('.miniCartItem').text() != ""){
alert('Order sent to our database, thank you for your order.')
var cartItems = $('.CartMiniItem')[0]
//Works but throws and error?
while (cartItems.hasChildNodes){
   cartItems.removeChild(cartItems.firstChild)
   updateMiniCartTotal()
}

}}


// This is for updating the price for the cart
   function updateMiniCartTotal(){
         var miniCartItemContainer = $("#CartMini")[0]
         var cartItems = $(miniCartItemContainer).children(".CartMiniItem").children('.miniCartItem')
         var total = 0
         for(let i =0; i < cartItems.length; i++){
            var cartItem = cartItems[i]
            var priceElement = $(cartItem).children('.CartMiniPrice')[0]
            var quantityElement = $(cartItem).children('.CartMiniInfo').children('.CartMiniQuantity')[0]
            var price = parseFloat($(priceElement).text().replace('€',''))
            var quantity = $(quantityElement).parent().find('input').val()
            total = total + (price * quantity)
         }
         total = Math.round(total * 100) / 100
         $('#CartMiniTotalPrice').text(total+"€")[0]
   }



//starting the page
//Onload

async function start(data){
   frontPage(data);
   cartMini();

 $('#HeaderName').on('click', function(){frontPage(data);});


   //RemoveButton
   var removeButton = $('.btn-danger')
   for (let i=0; i < removeButton.length; i++)
   {
    var button = removeButton[i]
    $(button).on('click', removeMiniCartItem)
   }
   //Change quantity on miniCart
   var quantityInput = $('.CartMiniQuantity')
   for (let i=0; i < quantityInput.length; i++){

    var input = quantityInput[i]

    $(input).on('change',quantityChanged)

   }
    //Add to minicart
    var addtoMiniCart = $('#AddToCartButton')
    for (let i=0; i < addtoMiniCart.length; i++){
         var button = addtoMiniCart[i]
         $(button).on('click', addtoMiniCartClicked)
    }
}














