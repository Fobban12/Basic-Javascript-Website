
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
function productCategoryView()
{
$('#Content').html(`

   <div id="CategoryTitle">Graphic Cards</div>

   <div id="CategoryProducts">

   </div>
   `
   );


   for (let i=0; i < productsTest2.length; i++)
   {
      let Category = $('<div></div>').html(`
      <div id ="CategoryProduct">
      <img src="${productsTest2[i].Image}" id="CategoryImages"> 
      <div id="CategoryInfo">${productsTest2[i].Name}</div>
      <div id="CategoryInfo">${productsTest2[i].Info}</div> 
      <div id="CategoryInfo">Availability:${productsTest2[i].id}</div> 
      <div id="CategoryInfo">Price:${productsTest2[i].Price}€</div> 
      <div id="CategoryInfo">Add to cart</div>  
    </div>
        ` )
       $(Category).on('click',function(){productDetailView(productsTest2[i])})
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
    <img src="${product.Image}" id="DetailViewIamges">
      <div>
       <div>${product.Name}</div>
      </div>

      <div>
       <div>Price: ${product.Price}€ </div>
       <div>Add to cart</div>
      </div>
    </div>
  <div id="ProductInfoButtons">
   <div id="ProductInfoButton" onclick="productInfoAreaClick()">Info</div>
   <div id="ProductInfoButton" onclick="productInfoAreaClick()">Hello</div>
   <div id="ProductInfoButton" onclick="productInfoAreaClick()">Hello</div>
  </div>
  <div id="ProductInfoArea">
   <div>Hello</div>
   <div>Hello</div>
   <div>Hello</div>
  </div>

   `
   );
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
       let Test = $('<div></div>').html(`
        <div id="sideBarNames"> <span onclick="productCategoryView()">${category[i].Name}</span> <button id="categoryArrow" onclick="subCategory()"> > </button></div>
         ` )
        $('#sideBarCSS').append(Test)
    }

  

   };



   //This should show the right subcategories based from the category unique id, will be implemented later, will loop trough all the subcategories
   //The structure of the HTML will be different, on a later date

   function subCategory()
   {
      $('#subCategory').html(`
      <div>
       <div id="sideBarNames" onclick="productCategoryView()">${category[1].Name}</div>
       <div id="sideBarNames" onclick="productCategoryView()">${category[0].Name}</div>
       <div id="sideBarNames" onclick="productCategoryView()">${category[2].Name}</div>
      </div>
      `),$('#subCategory').toggleClass("show")
     };
   

//Shows and hides the sidebar, and will also hide the subCategory if shown
$('#Categories').on("click",function(){
   if ($('#subCategory').hasClass("show") == true)
   {
        $('#subCategory').toggleClass("show"); $('#SideBar').toggleClass("show")
   } 
  else {sideBar()}});











// The structure of the HTML will be different, on a later date
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


//Loop later, use jquery each()
//For showing the small shopping cart
$('#CartMini').html(`

<div id="CartMiniTitle">Cart</div>
 <div id="CartMiniItem">
  <img src="./images/amdDeals.jpg" id="CartMiniImage">
  <div>
 
   <div>6600XT</div>
   <div>In stock</div>
   <div>Add more products</div>
 
  </div>
  <div>Price</div>
 
 </div>

 <div id="CartMiniItem">
 <img src="./images/amdDeals.jpg" id="CartMiniImage">
 <div>

  <div>6600XT</div>
  <div>In stock</div>
  <div>Add more products</div>

 </div>
 <div>Price</div>

</div>

<div id="CartMiniItem">
<img src="./images/amdDeals.jpg" id="CartMiniImage">
<div>

 <div>6600XT</div>
 <div>In stock</div>
 <div>Add more products</div>

</div>
<div>Price</div>

</div>

<div id="CartMiniItem">
<img src="./images/amdDeals.jpg" id="CartMiniImage">
<div>

 <div>6600XT</div>
 <div>In stock</div>
 <div>Add more products</div>

</div>
<div>Price</div>

</div>

 <div id="CartMiniTotalPrice">Total Price stuff</div>

 <div>Buttons</div>

 
`)
$('#CartInfo').on('mouseover',function()
{
$('#CartMini').show()

}

).on('mouseout',function(){
   $('#CartMini').hide()
})



// The structure of the HTML will be slightly different, on a later date
function login()
{
$('#Content').html(`


<div id="LoginAndRegister"> 
 <div id="LoginAndRegisterBox">
  <div onclick="frontPage()"> Go back </div>
  <div>Register or login here</div>
  <div>Email: <input type="email"></input></div>
  <div>Password: <input type="password"></input> </div>
  <div>Login or register</div>
 </div>
</div>


`)
}




function AboutUs(){$('#Content').html(`


<div>About us stuff</div>


`)}












function searchBar()
{


}


//For testing
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


















