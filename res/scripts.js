


//Loop should be here, remove this later when done
//Pictures should come from the database
function frontPage(){
$('#Content').html(`
   <div>
    <div id="Deals">
     <img src="./images/amdDeals.jpg" id="DealPictures"></img>
     <img src="./images/amdDeals.jpg" id="DealPictures"></img>
     <img src="./images/amdDeals.jpg" id="DealPictures"></img>
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
   for (let i=0; i < productsTest.length; i++)
   {
   let productPopular = $("<div></div>").html(`
   <div id="Product">
    <img src="${productsTest[i].Image}" id="ProductPictures">
    <div>${productsTest[i].Name}</div>
    <div>${productsTest[i].Info}</div>
    <div>${productsTest[i].Info2}</div>
    <div>${productsTest[i].Price}€</div>
    </div>
     ` )
   
   $(productPopular).on('click',function(){productDetailView(productsTest[i])})
   $('#ProductsPopular').append(productPopular)
     
    }
    



   for (let i=0; i < productsTest2.length; i++)
   {
      let productRecommended = $('<div></div>').html(`
      <div id="Product">
       <img src="${productsTest2[i].Image}" id="ProductPictures">
       <div id=InfoText>${productsTest2[i].Name}</div>
       <div id=InfoText>${productsTest2[i].Info}</div>
       <div id=InfoText>${productsTest2[i].Info2}</div>
       <div id=InfoText>${productsTest2[i].Price}€</div>
       </div>
        ` )
       $(productRecommended).on('click',function(){productDetailView(productsTest2[i])})
       $('#ProductsRecommended').append(productRecommended)
   }
 
};


// Data that comes should be based on the pressed categorys unique ID, so in other words, it will show the items that the category ID is assigned to.
//Loop should be here, remove this later when done
// The structure of the HTML will be different, on a later date
function productCategoryView(CategoryClick)
{
$('#Content').html(`
   <div id="GoBackButton"> Go back</div>
   <div id="CategoryTitle">${CategoryClick}</div>

   <div id="CategoryProducts">

   </div>
   `
   );
   $('#GoBackButton').on('click', function(){frontPage()})

   for (let i=0; i < productsTest2.length; i++)
   {
      let Category = $('<div></div>').html(`
      <div id ="CategoryProduct">
      <img src="${productsTest2[i].Image}" id="CategoryImages"> 
      <div id="CategoryInfo">${productsTest2[i].Name}</div>
      <div id="CategoryInfo">${productsTest2[i].Info}</div> 
      <div id="CategoryInfo">Availability:${productsTest2[i].id}</div> 
      <div id="CategoryInfo">Price:${productsTest2[i].Price}</div>   
    </div>
        ` )
       $(Category).on('click',function(){productDetailView(productsTest2[i])});
       $('#CategoryProducts').append(Category)
   }


}


// A loop here, and the data should come from the pressed product ID tree: Category -> SubCategory -> Specific product
// The structure of the HTML will be different, on a later date
//Loop should be here, remove this later when done
function productDetailView(product)
{

   $('#Content').html(`
   <div id="GoBackButton"> Go back</div>
   <div id="ProductWholeDetailView"> 
    <img src="${product.Image} "id="DetailViewImages">
     
       <div id="ProductWholeDetailViewName">${product.Name}</div>
    

       <div id="ProductWholeDetailViewPrice">${product.Price}€</div>
      <button id="AddToCartButton">Add to cart</button>
      
    </div>
  <div id="ProductInfoButtons">
   <div id="ProductInfoButton" onclick="productInfoAreaClick()">Info</div>
   <div id="ProductInfoButton" onclick="productInfoAreaClick()">Hello</div>
   <div id="ProductInfoButton" onclick="productInfoAreaClick()">Hello</div>
  </div>
  <div id="ProductInfoArea">
   <div>Test</div>
   <div>Hello</div>
   <div>Hello</div>
  </div>

   `
   );
   $('#GoBackButton').on('click', function(){frontPage()})
     //Add to minicart
     var addtoMiniCart = $('#AddToCartButton')
     for (let i=0; i < addtoMiniCart.length; i++){
          var button = addtoMiniCart[i]
          $(button).on('click', addtoMiniCartClicked)
     }
     
}


function productInfoAreaClick()
{
$('#ProductInfoArea').html(`<div>test</div>`)
}


function sideBar(){

   $('#SideBar').html(`
    <div id="sideBarCSS">
   
    </div>
    
    `),$('#SideBar').toggleClass("show")

    for (let i=0; i < category.length; i++) 
    {
       let CategoryPrint = $('<div></div>').html(`
        <div id="sideBarNames"> <span>${category[i].Name}</span> </div>
      
         ` )
      let CategoryArrow = $('<div></div>').html(`<button id="categoryArrow" > > </button>`)

      $(CategoryArrow).on('click',function(){subCategory()})
      $('#sideBarCSS').append(CategoryArrow)
      $(CategoryPrint).on('click',function(){productCategoryView(category[i].Name)})
      $('#sideBarCSS').append(CategoryPrint)

     
    }
   };



   //This should show the right subcategories based from the category unique id, will be implemented later, will loop trough all the subcategories
   //The structure of the HTML will be different, on a later date

   function subCategory()
   {
    
     
      
         $('#subCategory').html(`
         <div>
          <div id="sideBarNames">${1}</div>
         </div>
         `).on('click', function(){productCategoryView()})

       $('#subCategory').toggleClass("show")
     
     };
   

//Shows and hides the sidebar, and will also hide the subCategory if shown
$('#Categories').on("click",function(){
   if ($('#subCategory').hasClass("show") == true)
   {
        $('#subCategory').toggleClass("show"); $('#SideBar').toggleClass("show")

   } 
  else {sideBar()}});


//The structure of the HTML will be different, on a later date
function cart()
{
$('#Content').html(`


<div id="CartTitle">Cart</div>
<div id="WholeCart">
<div id="CartProduct">
 <img src="./images/amdDeals.jpg" id="CartImage">
 <div>Stuff</div>
 <div>Stuff</div>
</div>
</div>
`)
}


//For showing the small shopping cart
//Will add the ability to add to this cart and the main one with the database
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


//The structure of the HTML will be slightly different, on a later date
//The actual login and registaration will be done later, if done at all
function login()
{
$('#Content').html(`


<div id="LoginAndRegister"> 
 <div id="LoginAndRegisterBox">
  <div id="GoBackButton"> Go back </div>
  <div>Register or login here</div>
  <div>Email: <input type="email"></input></div>
  <div>Password: <input type="password"></input> </div>
  <div>Login or register</div>
 </div>
</div>


`)

}

//starting the page
//Onload
$(function(){start()})

async function start(){
   frontPage();
   cartMini();

 $('#HeaderName').on('click', function(){frontPage();});


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
const category = 
    [    
     {
      id:1,
      Name:"Components"
     },
     {
        id:2,
        Name:"TV'S"
     },
     {
        id:3,
        Name:"Some stuff"
     },
     {
      id:4,
      Name:"Hello"
   },
   {
      id:5,
      Name:"Testing"
   },
   {
      id:6,
      Name:"The lenght"
   }
    ]

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

















