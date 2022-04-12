

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
  <div id="sideBarNames">${category[0].Name}</div>
  <div id="sideBarNames">${category[1].Name}</div>
  <div id="sideBarNames">${category[2].Name}</div>
 </div>
 `),$('#SideBar').toggleClass("show")
    
    
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























