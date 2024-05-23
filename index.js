var men=document.getElementById("men")
var mens=document.getElementById("mens")
men.addEventListener("click",function(val){
     if(window.getComputedStyle(mens).display=="none"){
        mens.style.display="block"
    }
    else{
        mens.style.display="none"
    }
    val.stopPropagation()
})

var mens=document.getElementById("mens")
var main=document.getElementById("main")
men.addEventListener("click",function(val){
    if(window.getComputedStyle(main).display=="none"){
       main.style.display="block"
   }
   else{
       main.style.display="none"
   }
   val.stopPropagation()
})











var women=document.getElementById("women")
var womens=document.getElementById("womens")
women.addEventListener("click",function(val){
     if(window.getComputedStyle(womens).display=="none"){
        womens.style.display="block"
    }
    else{
        womens.style.display="none"
    }
    val.stopPropagation()
})

var mobile=document.getElementById("mobile")
var mobiles=document.getElementById("mobiles")
mobile.addEventListener("click",function(val){
     if(window.getComputedStyle(mobiles).display=="none"){
        mobiles.style.display="block"
    }
    else{
        mobiles.style.display="none"
    }
    val.stopPropagation()
})


var reg=document.getElementById("register")
var log=document.getElementById("reg")
reg.addEventListener("click",function(val){
     if(window.getComputedStyle(log).display=="none"){
        log.style.display="block"
    }
    else{
        log.style.display="none"
    }
    val.stopPropagation()
})

var log1=document.getElementById("in")
var login=document.getElementById("login")
log1.addEventListener("click",function(val){
if(window.getComputedStyle(login).display=="none"){
    login.style.display="block"
}
else{
    login.style.display="none"
}
val.stopPropagation()
})


var log2=document.getElementById("up")
var signup=document.getElementById("sign-up")
log2.addEventListener("click",function(val){
if(window.getComputedStyle(signup).display=="none"){
    signup.style.display="block"
}
else{
    signup.style.display="none"
}
val.stopPropagation()
})

//mens  

var md=document.getElementById("m1")
var mdrs=document.getElementById("m-dress")
md.addEventListener("click",function(val){
if(window.getComputedStyle(mdrs).display=="none"){
    mdrs.style.display="block"
}
else{
    mdrs.style.display="none"
}
val.stopPropagation()
})

//m-watch

var mw=document.getElementById("m2")
var mwat=document.getElementById("m-watch")
mw.addEventListener("click",function(val){
if(window.getComputedStyle(mwat).display=="none"){
    mwat.style.display="block"
}
else{
    mwat.style.display="none"
}
val.stopPropagation()
})

//m-shoes

var ms=document.getElementById("m3")
var mshoes=document.getElementById("m-shoes")
ms.addEventListener("click",function(val){
if(window.getComputedStyle(mshoes).display=="none"){
    mshoes.style.display="block"
}
else{
    mshoes.style.display="none"
}
val.stopPropagation()
})

//women-dress

var wd=document.getElementById("w1")
var womendress=document.getElementById("women-dress")
wd.addEventListener("click",function(val){
if(window.getComputedStyle(womendress).display=="none"){
    womendress.style.display="block"
}
else{
    womendress.style.display="none"
}
val.stopPropagation()
})

//women-accessary
var wa=document.getElementById("w2")
var wacces=document.getElementById("accessary")
wa.addEventListener("click",function(val){
if(window.getComputedStyle(wacces).display=="none"){
    wacces.style.display="block"
}
else{
    wacces.style.display="none"
}
val.stopPropagation()
})

//mobile
var p1=document.getElementById("p1")
var phone=document.getElementById("phone")
p1.addEventListener("click",function(val){
if(window.getComputedStyle(phone).display=="none"){
    phone.style.display="block"
}
else{
    phone.style.display="none"
}
val.stopPropagation()
})

//headset
var p2=document.getElementById("p2")
var headset=document.getElementById("headset")
p2.addEventListener("click",function(val){
if(window.getComputedStyle(headset).display=="none"){
    headset.style.display="block"
}
else{
    headset.style.display="none"
}
val.stopPropagation()
})
























// var main=document.getElementById("main")
// var close=document.getElementsByClassName("items")
// main.addEventListener("click",function(val){
//     if(window.getComputedStyle(close).display=="none"){
//         close.style.display="block"
//     }
//     else{
// close.style.display="none"
//     }
//     val.stopPropagation()
// })