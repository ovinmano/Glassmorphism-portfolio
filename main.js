const removeListEl=document.querySelector('.fa-bars');
let showIconEl=document.querySelector('.showIcon'),
 links=document.querySelector('.nav-list');

 showIconEl.addEventListener('click',()=>{
    links.classList.toggle('display');
     if(removeListEl.classList.contains('fa-bars')){
        removeListEl.classList.replace('fa-bars','fa-xmark');
        links.style='block'
    }else{
        links.style='none'
        removeListEl.classList.replace('fa-xmark','fa-bars');
    }
 })
