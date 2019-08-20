(function(){
    const openingBtn = document.querySelector('.sidebar__hamburger');
    const sidebar = document.querySelector('.sidebar');
    const sidebarClose = document.querySelector('.sidebar__close');
    
    openingBtn.addEventListener('click', function(){
        sidebar.classList.add('sidebar_opened');
    });
    sidebarClose.addEventListener('click', function(){
        sidebar.classList.remove('sidebar_opened');
    })
}());
