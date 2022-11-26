window.addEventListener('resize', ()=>{
    document.querySelector('.mobileNavBar').hidden = true;
})
document.querySelector('.btnMenu').addEventListener('click', ()=>{
document.querySelector('.mobileNavBar').hidden = !document.querySelector('.mobileNavBar').hidden;
})