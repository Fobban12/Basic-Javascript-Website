//Shows and hides the sidebar, and will also hide the subCategory if shown
$('#Categories').on("click",function(){
if ($('#subCategory').hasClass("show") == true)
{
      $('#subCategory').toggleClass("show"); $('#SideBar').toggleClass("show")
} 
else {sideBar()}});

function frontPage(){$('#Content').html(`
<div id="frontPageCSS">
 <div id="deals"> Here are the deals, and the pictures of the deals, not sure what yet</div>
 <div id="products">Here are the products that are recommended for you</div>
 <div id="products">Here are the products that you have seen or some random products that are in the shop</div>
</div>
`

);}
//Loop will be done a bit later, this is just for testing.
function sideBar(){
$('#SideBar').html(`
 <div id="sideBarCSS">
  <div id="sideBarNames" onclick="subCategory()">${category[0].Name}</div>
  <div id="sideBarNames" onclick="subCategory()">${category[1].Name}</div>
  <div id="sideBarNames" onclick="subCategory()">${category[2].Name}</div>
 </div>
 `),$('#SideBar').toggleClass("show")
};

//This should show the right subcategories based from the category unique id, will be implemented later, will loop trough all the subcategories
//!!!!!!Right now the css styling is so that it will have an absolute position that will be different based on display size,!!!!fix this later!!!!
function subCategory()
{
   $('#subCategory').html(`
   <div id="subCategory">
    <div id="sideBarNames">${category[1].Name}</div>
    <div id="sideBarNames">${category[0].Name}</div>
    <div id="sideBarNames">${category[2].Name}</div>
   </div>
   `),$('#subCategory').toggleClass("show")
  };

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























