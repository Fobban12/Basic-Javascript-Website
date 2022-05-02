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
    <div>${data.Products[i].allproducts_name}</div>
    <div>${data.Products[i].allproducts_info}</div>
    <div>${data.Products[i].allproducts_price}€</div>
    </div>
     ` )
   
   $(productPopular).on('click',function(){productDetailView(data.Products[i])})
   $('#ProductsPopular').append(productPopular)
     
    }
    


   for (let i=0; i < data.Products.length; i++)
   {
      let test = Math.floor(Math.random() * data.Products.length)
      let productRecommended = $('<div></div>').html(`
      <div id="Product">
       <img src="${data.Products[test].allproducts_image}" id="ProductPictures">
       <div id=InfoText>${data.Products[test].allproducts_name}</div>
       <div id=InfoText>${data.Products[test].allproducts_info}</div>
       <div id=InfoText>${data.Products[test].allproducts_price}€</div>
       </div>
        ` )
       $(productRecommended).on('click',function(){productDetailView(data.Products[test])})
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
      <div id="CategoryInfo">${data.Products[i].allproducts_name}</div>
      <div id="CategoryInfo">${data.Products[i].allproducts_info}</div> 
      <div id="CategoryInfo">Price:${data.Products[i].allproducts_price} €</div>   
    </div>
        ` )
       $(Category).on('click',function(){productDetailView(data.Products[i])});
       $('#CategoryProducts').append(Category)
   }


}


// A loop here, and the data should come from the pressed product ID tree: Category -> SubCategory -> Specific product
// The structure of the HTML will be different, on a later date
//Loop should be here, remove this later when done
function productDetailView(product)
{

   $('#Content').html(`
   <div id="ProductWholeDetailView"> 
    <img src="${product.allproducts_image} "id="DetailViewImages">
     
       <div id="ProductWholeDetailViewName">${product.allproducts_name}</div>
    

       <div id="ProductWholeDetailViewPrice">${product.allproducts_price}€</div>
      <button id="AddToCartButton">Add to cart</button>
      
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
     
}


//Main sidebar here
function sideBar(data){
   $('#SideBar').html(`
    <div id="sideBarCSS">
   
    </div>
    
    `),$('#SideBar').toggleClass("show")
   

    for (let i=0; i < data.Categories.length; i++) 
    {
       let CategoryPrint = $('<div></div>').html(`
        <div id="sideBarNames"> <span>${data.Categories[i].category_name}</span> </div>
      
         ` )
      let CategoryArrow = $('<div></div>').html(`<button id="categoryArrow" > > </button>`)

      $(CategoryArrow).on('click',function(){subCategory(data.Categories[i].subcategories, data)})
      $('#sideBarCSS').append(CategoryArrow)
      $(CategoryPrint).on('click',function(){productCategoryView(data.Categories[i].category_name, data)})
      $('#sideBarCSS').append(CategoryPrint)

     
    }
   
   
   };



   //This should show the right subcategories based from the category unique id, will loop trough all the subcategories //This just comes from the data array from the category now!!!
   //The structure of the HTML will be different, on a later date
   function subCategory(name,data)
   {
      $('#subCategory').html(`
         <div id=test>
      
         </div>
         `)
   

    for (let i = 0 ; i < name.length ; i++){
         let category = $('<div></div>').html(`
         <div class="subCategory">
         <div id="sideBarNames">${name[i]}</div>
         </div>`)
         $('#test').append(category) 
         $(category).on('click', function(){productCategoryView(name[i],data)})
          } $('#subCategory').toggleClass("show")
     };
   

//Shows and hides the sidebar, and will also hide the subCategory if shown
async function showHide(data){$('#Categories').on("click",function(){
   if ($('#subCategory').hasClass("show") == true)
   {
        $('#subCategory').toggleClass("show"); $('#SideBar').toggleClass("show")

   } 
  else {sideBar(data)}});}


//For showing the small shopping cart
function cartMini(){
$('#CartMini').html(`

 <div id="CartMiniTitle">Cart</div>
 <div class="CartMiniItem">
 
 
 </div>

 
 <div id="CartMiniTotalPrice">${0}€</div>

 <div>Buttons</div>

 
`);$('#CartInfo').on('mouseover',function(){$('#CartMini')
.show()})
.on('mouseout',function(){$('#CartMini').hide()
})
};



//Function for adding product to cart
function addtoMiniCartClicked(event){
   var button = event.target
   var productItem = $(button).parent()
   var productName = $(productItem).children('#ProductWholeDetailViewName').text()
   var productPrice = $(productItem).children('#ProductWholeDetailViewPrice').text()
   var productImage = $(productItem).children('#DetailViewImages').attr('src')
  
   
var loop = [{name:productName, price:productPrice, image:productImage}]
for (let i=0; i < loop.length; i++) 
   {
  
   var miniCartItem= $('<div class="test"></div>').html(`
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
   }

//This is for removing items from minicart
  function removeMiniCartItem(event)
  {
   var buttonClicked = event.target
   $(buttonClicked).parent('#RemoveItemButton').parent('.test').remove()
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

// This is for updating the price for the cart
   function updateMiniCartTotal(){
         var miniCartItemContainer = $("#CartMini")[0]
         var cartItems = $(miniCartItemContainer).children(".CartMiniItem").children('.test')
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


//For testing, remove when database done
const productsTest = [{id:1,Name:"RX6600XT", Image:"./images/amdDeals.jpg", Price:450, Info:"A gpu"},
{id:2,Name:"Different text here", Image:"./images/amdDeals.jpg", Price:450, Info:"A gpu"},
{id:3,Name:"RX6600XT", Image:"./images/amdDeals.jpg", Price:450, Info:"A gpu"},
{id:4,Name:"RX6600XT", Image:"./images/amdDeals.jpg", Price:450, Info:"A gpu"},
{id:5,Name:"RX6600XT", Image:"./images/amdDeals.jpg", Price:450, Info:"A gpu"},
{id:6,Name:"RX6600XT", Image:"./images/amdDeals.jpg", Price:450, Info:"A gpu"},
{id:7,Name:"RX6600XT", Image:"./images/amdDeals.jpg", Price:450, Info:"A gpu"},
{id:8,Name:"RX6600XT", Image:"./images/amdDeals.jpg", Price:450, Info:"A gpu"},
{id:8,Name:"RX6600XT", Image:"./images/amdDeals.jpg", Price:450, Info:"A gpu"},
{id:8,Name:"RX6600XT", Image:"./images/amdDeals.jpg", Price:450, Info:"A gpu"},
{id:8,Name:"RX6600XT", Image:"./images/amdDeals.jpg", Price:450, Info:"A gpu"},
{id:8,Name:"RX6600XT", Image:"./images/amdDeals.jpg", Price:450, Info:"A gpu"},
{id:8,Name:"RX6600XT", Image:"./images/amdDeals.jpg", Price:450, Info:"A gpu"},
{id:8,Name:"RX6600XT", Image:"./images/amdDeals.jpg", Price:450, Info:"A gpu"},
{id:8,Name:"RX6600XT", Image:"./images/amdDeals.jpg", Price:450, Info:"A gpu"},
{id:8,Name:"RX6600XT", Image:"./images/amdDeals.jpg", Price:450, Info:"A gpu"},
{id:8,Name:"RX6600XT", Image:"./images/amdDeals.jpg", Price:450, Info:"A gpu"},
{id:8,Name:"RX6600XT", Image:"./images/amdDeals.jpg", Price:450, Info:"A gpu"},
{id:8,Name:"RX6600XT", Image:"./images/amdDeals.jpg", Price:450, Info:"A gpu"},
{id:8,Name:"RX6600XT", Image:"./images/amdDeals.jpg", Price:450, Info:"A gpu"},
{id:8,Name:"RX6600XT", Image:"./images/amdDeals.jpg", Price:450, Info:"A gpu"},
{id:8,Name:"RX6600XT", Image:"./images/amdDeals.jpg", Price:450, Info:"A gpu"},
{id:8,Name:"RX6600XT", Image:"./images/amdDeals.jpg", Price:450, Info:"A gpu"},
{id:8,Name:"RX6600XT", Image:"./images/amdDeals.jpg", Price:450, Info:"A gpu"},
{id:8,Name:"RX6600XT", Image:"./images/amdDeals.jpg", Price:450, Info:"A gpu"}

]
//For testing, remove when database done
const productsTest2 = [{id:1,Name:"RX6600XT", Image:"./images/amdDeals.jpg", Price:450, Info:"A gpu"},
{id:2,Name:"This should change if pressed", Image:"./images/amdDeals.jpg", Price:450, Info:"A gpu"},
{id:3,Name:"RX6600XT", Image:"./images/amdDeals.jpg", Price:450, Info:"A gpu"},
{id:4,Name:"RX6600XT", Image:"./images/amdDeals.jpg", Price:450, Info:"A gpu"},
{id:5,Name:"RX6600XT", Image:"./images/amdDeals.jpg", Price:450, Info:"A gpu"},
{id:6,Name:"RX6600XT", Image:"./images/amdDeals.jpg", Price:450, Info:"A gpu"},
{id:7,Name:"RX6600XT", Image:"./images/amdDeals.jpg", Price:450, Info:"A gpu"},
{id:8,Name:"RX6600XT", Image:"./images/amdDeals.jpg", Price:450, Info:"A gpu"},
{id:8,Name:"RX6600XT", Image:"./images/amdDeals.jpg", Price:450, Info:"A gpu"},
{id:8,Name:"RX6600XT", Image:"./images/amdDeals.jpg", Price:450, Info:"A gpu"},
{id:8,Name:"RX6600XT", Image:"./images/amdDeals.jpg", Price:450, Info:"A gpu"},
{id:8,Name:"RX6600XT", Image:"./images/amdDeals.jpg", Price:450, Info:"A gpu"},
{id:8,Name:"RX6600XT", Image:"./images/amdDeals.jpg", Price:450, Info:"A gpu"},
{id:8,Name:"RX6600XT", Image:"./images/amdDeals.jpg", Price:450, Info:"A gpu"},
{id:8,Name:"RX6600XT", Image:"./images/amdDeals.jpg", Price:450, Info:"A gpu"},
{id:8,Name:"RX6600XT", Image:"./images/amdDeals.jpg", Price:450, Info:"A gpu"},
{id:8,Name:"RX6600XT", Image:"./images/amdDeals.jpg", Price:450, Info:"A gpu"},
{id:8,Name:"RX6600XT", Image:"./images/amdDeals.jpg", Price:450, Info:"A gpu"},
{id:8,Name:"RX6600XT", Image:"./images/amdDeals.jpg", Price:450, Info:"A gpu"},
{id:8,Name:"RX6600XT", Image:"./images/amdDeals.jpg", Price:450, Info:"A gpu"},
{id:8,Name:"RX6600XT", Image:"./images/amdDeals.jpg", Price:450, Info:"A gpu"},
{id:8,Name:"RX6600XT", Image:"./images/amdDeals.jpg", Price:450, Info:"A gpu"},
{id:8,Name:"RX6600XT", Image:"./images/amdDeals.jpg", Price:450, Info:"A gpu"},
{id:8,Name:"RX6600XT", Image:"./images/amdDeals.jpg", Price:450, Info:"A gpu"},
{id:8,Name:"RX6600XT", Image:"./images/amdDeals.jpg", Price:450, Info:"A gpu"}
]

















