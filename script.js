
var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 4000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}





















const sidebar = document.getElementById('slider')
const open_btn =document.getElementById('open')
const close_btn =document.getElementById('closed')
const overlay_btn = document.getElementById('overlay-closed')
const img_overlay = document.getElementById('image-overlay')
const right_btn = document.getElementById('right-btn')
const left_btn = document.getElementById('left-btn')
const img_slider_box = document.getElementById('img-slider-box')
const insta_box = document.getElementsByClassName('insta-box')

function side_open(){
    sidebar.style.display="block";
    open_btn.style.display="none";
    close_btn.style.display="block";
}

function side_close(){
    sidebar.style.display="none";
    close_btn.style.display="none";
    open_btn.style.display="block";
}

overlay_btn.onclick = function(){
    img_overlay.style.display="none"
}

function show(){
    img_overlay.style.display="block"
}

var position =0;
var sldcount = 1;
const count = img_slider_box.childElementCount;

function next(){
    
    if(sldcount<count){
        position = position -100
        img_slider_box.style.transform ="translateX("+position+"%)"
        sldcount++;
    }
}

function previous(){
    
    if(sldcount>1){
        position = position +100
        img_slider_box.style.transform = "translateX("+position+"%)"
        sldcount--   
    }
    else{
        sldcount =1
    }

}



var nav_bar = document.getElementById('navbar');

window.onscroll = function navchange(){
   if(document.body.scrollTop>250 || document.documentElement.scrollTop>250){
       nav_bar.style.backgroundColor="var(--main-dark-green)";
   }
   else{
    nav_bar.style.backgroundColor="var(--dark-color)";
   }
}