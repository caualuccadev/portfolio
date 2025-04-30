// função de trigger para aviso de erro 

export function trigger_message(type, message, inputType){
    const targetDiv = document.querySelector('.triggerMessage');
    const targetInput = document.querySelector(inputType);
    
    switch(type){
        case 'error':
            targetDiv.classList.add('error');
            targetDiv.classList.remove('warning', 'valid');

            targetInput.classList.add('error');
            targetInput.classList.remove('warning', 'valid');
            break;

        case 'warning':
            targetDiv.classList.add('warning');
            targetDiv.classList.remove('error', 'valid');

            targetInput.classList.add('warning');
            targetInput.classList.remove('error', 'valid');
            break;

        case 'valid':
            targetDiv.classList.add('valid');
            targetDiv.classList.remove('error', 'warning');

            targetInput.classList.add('valid');
            targetInput.classList.remove('error', 'warning');
            break;
            
        default:
            break;
    };

    targetDiv.textContent = message;
}


// função de validação de nome 
export function nameValidation(){
    const nameInput = document.querySelector('#userName_input')
    const userName = nameInput.value;

    if(/^[a-zA-ZÀ-ÿ\s]+$/.test(userName)){
        return 'valid'
    } else{
        return 'invalid'
    }

}