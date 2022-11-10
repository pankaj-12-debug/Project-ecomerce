const musicSection=document.getElementById('container-product');
const notification=document.querySelector('.notification');
const count=document.getElementById(`count`);
let countItem=0;
let id;
musicSection.addEventListener('click',(e)=>{
    if(e.target.innerHTML===`ADD TO CART`)
    {
        id=e.target.id
        //let products=data.products;
        //console.log(products);
        notification.classList.add(`active`);
        setTimeout(() => {
            notification.classList.remove(`active`);
        },2000);
        notification.innerHTML=`<h3>your product: ${id} is added to cart</h3>`
        countItem++
        count.innerHTML=`${countItem}`;
    }
})

const cart=document.getElementById(`cart-top`);
const cartFloat=document.getElementById(`cart-float`);
cart.addEventListener('click',(e)=>{
    cartFloat.style.display='block';
    console.log('ok');
})
const seeCart=document.getElementById(`see-cart`);
seeCart.addEventListener('click',(e)=>{
    cartFloat.style.display='block';
})
const cartClosed=document.getElementById(`cancel`);
cartClosed.addEventListener('click',()=>{
    cartFloat.style.display='none';
})

