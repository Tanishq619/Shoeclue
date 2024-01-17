const menuItems=document.querySelectorAll('.shoe-type')
const wrapper=document.querySelector('.sliderWrapper')





const shoes=[
{
name:"Air Force",
price:"Rs.3999",
details:"This are Air Jordans",

colors:[{code:'black',
img:'images/air.png'}
    
    
    ,{code:'blue',
    img:'images/air2.png'}]



},


{
    name:"Jordans",
    price:"Rs.3999",
    details:"This are Air Jordans",
    
    colors:[{code:'grey',
    img:'images/jordan.png'},
        
        
        {code:'teal',
        img:'images/jordan2.png'}]
    
    
},


{
    name:"Blazer",
    price:"Rs.3999",
    details:"This are Air Jordans",
    
    colors:[{code:'grey',
    img:'images/blazer.png'},
        
        
        {code:'green',
        img:'images/blazer2.png'}]
    
    
},

{
    name:"Crafter",
    price:"Rs.3999",
    details:"This are Air Jordans",
    
    colors:[{code:'black',
    img:'images/crater.png'},
        
        
       {code:'grey',
        img:'images/crater2.png'}]
    
    
},


{
    name:"Hippie",
    price:"Rs.3999",
    details:"This are Air Jordans",
    
    colors:[{
        code:'grey',
    img:'images/hippie.png'},
        
        
        {code:'black',
        img:'images/hippie2.png'}]
    
    
}
]

let currenShoe=shoes[0];


const productImage=document.querySelector('.product-image')
const productPrice=document.querySelector('.product-price')
const productDetails=document.querySelector('.product-details')
const productName=document.querySelector('.product-name')

const colors=document.querySelectorAll('.color')

const productSection=document.querySelector('.product')
const buyButton=document.querySelectorAll('.buy-button')

const sizes=document.querySelectorAll('.size')

const productBtn=document.querySelector('.product-btn')

const closePayment=document.querySelector('.close')

const payment=document.querySelector('.payment')
const blurEffect=document.querySelector('.blur-div')


menuItems.forEach((el,index)=>{

    el.addEventListener('click',function(e){
       currenShoe=shoes[index]
    //    console.log(currenShoe.colors[0].code);
    wrapper.style.transform=`translateX(${-100*index}vw`



    productImage.src=shoes[index].colors[0].img
    productPrice.textContent=`$ ${shoes[index].price}`
    productDetails.textContent=`${shoes[index].details}`
    productName.textContent=`${shoes[index].name}`


    colors.forEach((el,index)=>{
        el.style.backgroundColor=`${currenShoe.colors[index].code}`
    })
    })
    })


    buyButton.forEach(el=>{
        el.addEventListener('click',function(){
            productSection.scrollIntoView({behavior:'smooth'})
        })
    })


    colors.forEach((el,i)=>{
        el.addEventListener('click',function(){
            console.log(currenShoe);
            productImage.src=currenShoe.colors[i].img
        })
    })


const prodSizes=document.querySelectorAll('.size')

prodSizes.forEach(element => {
    
element.addEventListener('click',function(){
    prodSizes.forEach(el=>{
        el.style.backgroundColor='white'
        el.style.color='black'
    })
    
    element.style.backgroundColor='black'
    element.style.color='white'
})

   
});


productBtn.addEventListener('click',function(){
payment.style.display='flex'
blurEffect.style.display='block'
productSection.scrollIntoView({behavior:'smooth'})

})


closePayment.addEventListener('click',function(){
    payment.style.display='none'
blurEffect.style.display='none'
})


    
    
 