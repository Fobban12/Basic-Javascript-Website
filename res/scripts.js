
//Loop should be here, remove this later when done
//The structure of the HTML will be different, on a later date
//Pictures should come from the database
function frontPage(){












   $('#Content').html(`
<div id="frontPageCSS">
 <div id="Deals">
  <img src="./images/amdDeals.jpg" id="DealPictures"></img>
  <img src="./images/amdDeals.jpg" id="DealPictures"></img>
  <img src="./images/amdDeals.jpg" id="DealPictures"></img>
  <img src="./images/amdDeals.jpg" id="DealPictures"></img>
 </div>

 <div id="FrontPageTitle">Recommended for you</div>
 <div id="Products">
  <div id="Product">
   <img src="./images/amdDeals.jpg" id="ProductPictures">
   <div>Name</div>
   <div>Price</div>
  </div>

  <div id="Product">
   <img src="./images/amdDeals.jpg" id="ProductPictures">
   <div>Name</div>
   <div>Price</div>
  </div>

  <div id="Product">
   <img src="./images/amdDeals.jpg" id="ProductPictures">
   <div>Name</div>
   <div>Price</div>
  </div>
 
 </div>
 <div>Some kind of slide bar here</div>

 <div id="FrontPageTitle">Popular</div>
 <div id="Products">
  <div id="Product">
   <img src="./images/amdDeals.jpg" id="ProductPictures">
   <div>Name</div>
   <div>Price</div>
  </div>

  <div id="Product">
   <img src="./images/amdDeals.jpg" id="ProductPictures">
   <div>Name</div>
   <div>Price</div>
  </div>
  
  <div id="Product">
   <img src="./images/amdDeals.jpg" id="ProductPictures">
   <div>Name</div>
   <div>Price</div>
  </div>
 </div>
 <div>Some kind of slide bar here</div>
 
</div>
`
);}


// Data that comes should be based on the pressed categorys unique ID, so in other words, it will show the items that the category ID is assigned to.
//Loop should be here, remove this later when done
// The structure of the HTML will be different, on a later date
function productCategoryView()
{
   $('#Content').html(`
   <div id="frontPageCSS">
    <div onclick="productDetailView()"> Title of the category pressed</div>
    <div onclick="productDetailView()">Product should be here with its: picture and info </div>
    <div onclick="productDetailView()">Product should be here with its: picture and info </div>
    <div onclick="productDetailView()">Product should be here with its: picture and info </div>
    <div onclick="productDetailView()">Product should be here with its: picture and info </div>
    <div onclick="productDetailView()">Product should be here with its: picture and info </div>
   </div>
   `
   );
}

// A loop here, and the data should come from the pressed product ID tree: Category -> SubCategory -> Specific product
// The structure of the HTML will be different, on a later date
//Loop should be here, remove this later when done
function productDetailView()
{
   $('#Content').html(`
   <div id="frontPageCSS">
    <div>Product name</div>
    <div> 
      <div>Other stuff that there should be </div>
      <div>Other stuff that there should be </div>
      <div>Other stuff that there should be </div>
      <div>Other stuff that there should be </div>
      <div>Other stuff that there should be </div>
    </div>
  

   `
   );
}

//Loop will be done a bit later, this is just for testing.
// The structure of the HTML will be different, on a later date
function sideBar(){
   $('#SideBar').html(`
    <div id="sideBarCSS">
     <div id="sideBarNames"> <span onclick="productCategoryView()">${category[0].Name}</span> <button id="categoryArrow" onclick="subCategory()"> > </button></div>
     <div id="sideBarNames"> <span onclick="productCategoryView()">${category[1].Name}</span> <button id="categoryArrow" onclick="subCategory()"> > </button></div>
     <div id="sideBarNames"> <span onclick="productCategoryView()">${category[2].Name}</span> <button id="categoryArrow" onclick="subCategory()"> > </button></div>
    </div>
    `),$('#SideBar').toggleClass("show")
   };
   
   //This should show the right subcategories based from the category unique id, will be implemented later, will loop trough all the subcategories
   //!!!!!!Right now the css styling is so that it will have an absolute position that will be different based on display size,!!!!fix this later!!!!
   // The structure of the HTML will be different, on a later date
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
   

// The structure of the HTML will be different, on a later date
function cart()
{
$('#Content').html(`<div>Cart</div>`)
}



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






//Shows and hides the sidebar, and will also hide the subCategory if shown
$('#Categories').on("click",function(){
   if ($('#subCategory').hasClass("show") == true)
   {
         $('#subCategory').toggleClass("show"); $('#SideBar').toggleClass("show")
   } 
   else {sideBar()}});


function searchBar(){}





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
     }
    ]























