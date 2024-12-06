document.addEventListener("DOMContentLoaded", function(){
    document.querySelectorAll('a[href="#"]').forEach(anchor =>{
        anchor.addEventListener('click', function(e){
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrolIntoView({
                behavior: "smooth"
            });
        });
    });
    const menuBtn = document.getElementById('menu-icon-btn');
    const closeBtn = document.getElementById('close-btn');
    const navDrawer = document.getElementById('nav-drawer');

    menuBtn.addEventListener('click', ()=>{
        navDrawer.style.left ="0"
    })
    closeBtn.addEventListener('click', ()=>{
        navDrawer.style.left ="-250px"
    })
});