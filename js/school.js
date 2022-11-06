let user =document.getElementById("user");
let slider=document.querySelector(".slide");
let clos=document.getElementById("close");
let clos2=document.getElementById("clos2");
let logs =document.querySelectorAll(".slide span >a")
let form_login =document.getElementById("form_login");
let form_register =document.getElementById("form_register");
let list =document.querySelector(".navg ul");
let menu_bar =document.getElementById("menu");

let faq = document.querySelectorAll(".freq_content");

user.onclick=function(){
    slider.classList.add("active");
}
clos.onclick=function(){
    slider.classList.remove("active")
}

// open and close form_login and form_register 

logs.forEach(function(e){
e.addEventListener("click",function(e){
    e.prventDeafult;
    console.log(this.id)
    if(this.id === "login"){
        form_login.classList.add("active");
        form_register.classList.remove("active");
    }else {
       form_register.classList.add("active");
        form_login.classList.remove("active"); 
    }
})
})

// trigger swipper 


  var swiper = new Swiper(".home_slid", {
        pagination: {
          el: ".swiper-pagination",
         
        },
         loop:true,
         grabCursor:true
      });

 var swiper = new Swiper(".teacher_slid", {
        slidesPerView: 3,
        spaceBetween:20,
         loop:true,
         grabCursor:true,
         breakpoints:{
     0:{
                   slidesPerView:1,
         },
         768:{
                 slidesPerView: 2,
         },
        991:{
                 slidesPerView: 3,
         }
}
      });

  var swiper = new Swiper(".review_slider", {
        slidesPerView: 3,
        spaceBetween:10,
         loop:true,
         grabCursor:true,
breakpoints:{
     0:{
                   slidesPerView:1,
         },
         768:{
                 slidesPerView: 2,
         },
        991:{
                 slidesPerView: 3,
         }
}
        
      });
        var swiper = new Swiper(".subject_slide", {
        slidesPerView: 3,
        spaceBetween:10,
         loop:true,
         grabCursor:true,
breakpoints:{
     0:{
                   slidesPerView:1,
         },
         768:{
                 slidesPerView: 2,
         },
        991:{
                 slidesPerView: 3,
         }
}
        
      });

  var swiper = new Swiper(".home-courses-slider", {
        slidesPerView: 3,
        spaceBetween:10,
         loop:true,
         grabCursor:true,
breakpoints:{
     0:{
                   slidesPerView:1,
         },
         768:{
                 slidesPerView: 2,
         },
        991:{
                 slidesPerView: 3,
         }
}
        
      });

  var swiper = new Swiper(".sponsor_slid", {
        slidesPerView: 5,
        spaceBetween:10,
         loop:true,
         grabCursor:true,
       breakpoints:{
     0:{
                   slidesPerView:2,
         },
         768:{
                 slidesPerView:3,
         },
        991:{
                 slidesPerView:5,
         }
}
      });

    //   end swipper
// close ul for
menu_bar.onclick=function(){
    list.classList.add("active");
}
clos2.onclick=function(){
      list.classList.remove("active");
}

faq.forEach(function(elem){
    elem.addEventListener("click",function(){
        faq.forEach(function(el){
            el.classList.remove("active")
        })
       this.classList.add("active")
    })
})