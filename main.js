// openning the menu mobile

function openning_menu_mobile(){
    let open_button = document.getElementById('menu_button');
    let close_button = document.querySelector('.close_icon');
    let menu_mobile = document.querySelector('.menu_mobile_container');
    let logo_name = document.querySelector('.aside_menu');
    let main_content = document.querySelector('.main_section');

    open_button.addEventListener('click', () =>{
        menu_mobile.style.transform = 'translateX(0)';
        menu_mobile.style.visibility = 'visible'
        main_content.style.filter = 'blur(1.8px)';
    });

    close_button.addEventListener('click', () =>{
        menu_mobile.style.transform = 'translateX(300px)';
        menu_mobile.style.visibility = 'hidden';
        main_content.style.filter = 'blur(0)';
    })

    

};


// displaying the components 
function display_responsivity(){
    let screen_width = window.innerWidth;
    let mobile_navigation = document.querySelector('.nav_mobile')
    let desktop_navigation = document.querySelector('.nav_desktop')
    let about_item_text = document.querySelector('.about_me')
    let about_item_skills = document.querySelector('.skills')

    if(screen_width <= 768){
        mobile_navigation.style.display = 'flex';
        desktop_navigation.style.display = 'none';
    }else{
        mobile_navigation.style.display = 'none';
        desktop_navigation.style.display = 'flex';
    }

    if(screen_width <= 900){
        about_item_skills.style.minWidth = '100%';
        about_item_text.style.minWidth = '100%'
    } else{
        about_item_skills.style.minWidth = '25rem';
        about_item_text.style.minWidth = '25rem'
    }
}

function openning_sites(){
    let button_vivi = document.querySelector('.button_site_one');
    let button_mar = document.querySelector('.button_site_two');

    button_vivi.addEventListener("click", ()=>{
        window.open('https://vivianefisioterapeuta.netlify.app/', '_blank');
    })

    button_mar.addEventListener('click', ()=>{
        window.open('https://caualuccadev.github.io/marazul/', '_blank');
    })
        
}

window.addEventListener('onload', () =>{
    openning_menu_mobile()
    display_responsivity()
    openning_sites()
})

window.addEventListener('load', () =>{
    openning_menu_mobile()
    display_responsivity()
    openning_sites()
})

window.addEventListener('resize', ()=>{
    display_responsivity()
})


button_site