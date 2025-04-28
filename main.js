// declarando as funções que serão usadas no arquivo

function screen_width(){
    return window.innerWidth; // vai pegar o tamanho da largura da tela
}

function display_components_screen(){
    //vai alterar o display dos elementos de acordo com a largura da tela
    let main_width = screen_width();
    let smaller_nav_display = document.querySelector('.header_mobile');
    let bigger_nav_display = document.querySelector('.bigger_screen_nav')
    let main_content = document.querySelector('.main_content')

    if(main_width  <= 770){
        bigger_nav_display.style.display = 'none';
        smaller_nav_display.style.display = 'flex';
        main_content.style.marginLeft = '0';

    }else{
        bigger_nav_display.style.display = 'flex';
        smaller_nav_display.style.display = 'none';
        main_content.style.marginLeft = '15rem';
    }

}

function responsitivity_elements(){
    let device_width = window.innerWidth;
    let main_sections = document.querySelectorAll('.main_section');
    let about_text_content = document.querySelector('.history_content')
    let about_components = document.querySelectorAll('.about_component');

    // para quando a tela diminuir 
    if(device_width <= 1000){
        about_components.forEach(element => {
            element.style.maxWidth = '100%';
            element.style.flexDirection = 'column';
            element.style.flexWrap = 'wrap';
        });
    }
    
    // para quando a tela aumentar
    if(device_width > 1000){
        about_components.forEach(element => {
            element.style.flexDirection = 'row';
            element.style.flexWrap = 'nowrap';
            element.style.height = 'fit-content'

            about_text_content.style.maxWidth = '60%'
        });
    }

    
}

function switching_button(){
    // vai ativar ou desativar o toggle do tema e do alto contraste
    let bg_toggle = document.querySelectorAll('.toggle_button');
    let circle_toggle = document.querySelectorAll('.toggle_circle');

    let teste = document.getElementById('teste')
    // o clique vai funcionar em todo o elemento e não apenas no toggle
    let theme_button = document.getElementById('button_theme');
    let brightness_button = document.querySelector('.button_brightness')

    theme_button.addEventListener('click', () =>{
        bg_toggle[0].classList.toggle('ative')
        circle_toggle[0].classList.toggle('ative')
    })

    brightness_button.addEventListener('click', ()=>{
        bg_toggle[1].classList.toggle('ative')
        circle_toggle[1].classList.toggle('ative')
    })



}

    






// openning the menu mobile
let menu_open_button = document.querySelector('.menu_button');
let menu_expanded = document.querySelector('.menu_mobile_open')
let menu_close_button = document.querySelector('.menu_mobile_close')

menu_open_button.addEventListener('click', () =>{
    menu_expanded.classList.add('enable');

})

menu_close_button.addEventListener('click', () =>{
    menu_expanded.classList.remove('enable');
})



// creating the responsivity of the site 

window.addEventListener('load', () =>{
    display_components_screen();
    responsitivity_elements();
})

window.addEventListener('resize', () =>{
    display_components_screen();
    responsitivity_elements();
        
})



//
