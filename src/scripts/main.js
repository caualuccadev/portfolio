import { trigger_message, nameValidation } from "./contactForm.js";


// funções para aprimorar a responsividade 
function watcher_coddy_dimensions(){
    // ajeitar os elementos do container conforme as dimensões da imagem
    const coddy_container = document.querySelector('.coddy_image');
    const coddy_height = coddy_container.scrollHeight;
    const coddy_width = coddy_container.scrollWidth;

    const sliders_container = document.querySelector('.presentation_slider');

    const buttons_slider = document.querySelector('.presentation_footer');

    let window_size = window.innerWidth;

    // aplicando estilos conforme as dimensões do container de apresentação e do coddy
    // |__ já precisa ficar responsivo 

    if(window_size >= 320 && window_size <= 600){
        buttons_slider.style.transform = `translateX(0)`;
        buttons_slider.style.width = `100%`;

        // ajeitando a altura conforme o footer de botões
        sliders_container.style.height = `300px`;
        sliders_container.style.marginBottom = '2rem';


    } else if (window_size > 600 && window_size <= 900){
        buttons_slider.style.transform = `translateX(0)`;
        buttons_slider.style.width = `100%`;

        // ajeitando a altura conforme o footer de botões
        sliders_container.style.height = `300px`;
        sliders_container.style.marginBottom = '2rem';

    } else if(window_size > 900){
        sliders_container.style.height = `${coddy_height}px`;

        buttons_slider.style.transform = `translateX(${coddy_width}px)`;
        buttons_slider.style.width = `calc(100% - ${coddy_width}px - 4rem)`;
    }
    

}


// funções de ação ao clique do usuário 
function clicker_toggle_menu(){
    const open_menu = document.querySelector('.menu_open');
    const menu_mobile = document.querySelector('.mobile_navigation');
    const close_menu = document.querySelector('.menu_close');
    const menuItems = document.querySelectorAll(".mobile_link_container");

    open_menu.addEventListener('click', ()=>{
        menu_mobile.style.width = '100%';
        menu_mobile.style.height = '100vh';
        menu_mobile.style.padding = '1rem';
    })

    close_menu.addEventListener('click', () =>{
        menu_mobile.style.width = '0';
        menu_mobile.style.height = '0';
        menu_mobile.style.padding = '0';
    });

    menuItems.forEach(item =>{
        item.addEventListener('click', () =>{
            menu_mobile.style.width = '0';
            menu_mobile.style.height = '0';
            menu_mobile.style.padding = '0';
        })
    });
}

function clicker_toggle_experiences(){
    const button_experience = document.querySelector('.experiences_header');
    const icon_experience = document.querySelector('.experience_icon');
    const experience_section = document.querySelector('.experiences_timeline');
    const cards_experience = document.querySelectorAll('.timeline_card')
    const content_expanded = button_experience.getAttribute('aria-expanded');
    let counter_clicks = 0;

    button_experience.addEventListener('click', ()=>{
        counter_clicks += 1;

        if(counter_clicks % 2 == 0){
            icon_experience.style.transform = 'rotate(360deg)';
            experience_section.classList.remove('expanded');

            cards_experience.forEach(card => {
                card.classList.remove('displayed')
            });

            content_expanded = false;


        } else{
            
            icon_experience.style.transform = 'rotate(180deg)';
            experience_section.classList.add('expanded');

            cards_experience.forEach(card => {
                card.classList.add('displayed');
            });

            experience_section.scrollIntoView({behavior: 'smooth'});
            content_expanded = true;
        };

    });
}



// funções de animação 
function animator_slider(){
    const slides = document.querySelectorAll('.presentation_content');
    const slider_buttons = document.querySelectorAll('.radio_input_custom');
    const slider_radios = document.querySelectorAll('.slider_radios');
    let input_index = 0;

    // alternando os botões conforme input ativado no momento
    slider_radios.forEach((input, index) => {
        input.addEventListener('change', ()=>{
            if(input.checked){
                input_index = index;
                slider_buttons.forEach(button => {
                    button.classList.remove('active');

                });
                // para deixar marcado ao alterar
                slider_buttons[input_index].classList.add('active');
            };
        })
        // para deixar marcado assim que a pagina carrega
        slider_buttons[input_index].classList.add('active')
    });

    //alternando os slides conforme o input ativado
    slider_radios.forEach((radio, index) =>{
        radio.addEventListener('change', ()=>{
            if(radio.checked){
                input_index = index
                slides.forEach(slide => {
                    slide.classList.remove('slide_show');
                });

                slides[input_index].classList.add('slide_show');
            };

        });
        slides[input_index].classList.add('slide_show');
        
    });
    

    // alternando atributo aria 
    slider_radios.forEach(radio =>{
        radio.addEventListener('change', () =>{
            

            slider_radios.forEach(input =>{
                if(input.checked){
                    input.setAttribute('aria-checked', 'true');
                    
                } else{
                    input.setAttribute('aria-checked', 'false');
                }
            });

        });
        


    });

};



// chamadas das funções 
window.addEventListener('resize', ()  =>{
    clicker_toggle_menu();
    watcher_coddy_dimensions();
   
})

window.addEventListener('load', () =>{
    clicker_toggle_menu();
    watcher_coddy_dimensions();
    animator_slider();
    clicker_toggle_experiences();

    // checando as validações de input 
    

    const nameInput = document.querySelector("#userName_input");

    nameInput.addEventListener('input', (event) =>{
        nameValidation();
        let message = ''

        if(nameValidation() === 'invalid'){
            message = 'Oops! Acho que você digitou algo errado no nome.'

            trigger_message('error', message, "#userName_input")
        }else{
            trigger_message('valid', '', "#userName_input")
        }
    });
})








