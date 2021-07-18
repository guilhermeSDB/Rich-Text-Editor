const elements = document.querySelectorAll('.icones')

elements.forEach(element => {
    element.addEventListener('click', () => {
        let command = element.dataset['element'];

    if(command == 'createLink' || command == 'insertImage'){
        let url = prompt('Coloque seu Link aqui:', 'http://')
        document.execCommand(command,false,url)
    }else if(command == "formatBlock"){
        document.execCommand(command,false,'H1')
    }else if (command == 'underLine'){
        selectedElement = window.getSelection().focusNode.parentNode;
        selectedElement.style.textDecoration = 'underline';
        document.execCommand(command, false,null)
    }
    document.execCommand(command, false,null);
    });
});