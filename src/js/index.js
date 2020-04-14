let abrirCerrarMenu = () => {


    if (document.querySelector('#menu-lateral').classList.contains('abrir')) {
        document.querySelector('span#bloquear').classList.remove('bloquear');
        document.querySelector('#menu-lateral').classList.remove('abrir');    
        document.querySelector('body').style.overflow = '';
    } else {
        document.querySelector('span#bloquear').classList.add('bloquear');
        document.querySelector('#menu-lateral').classList.add('abrir');
        document.querySelector('body').style.overflowY = 'hidden';
    }
    

}

document.querySelector('#menu-lateral > i').addEventListener('click', () =>{
    abrirCerrarMenu();
});

document.querySelector('#header > i').addEventListener('click', () =>{
    abrirCerrarMenu();
});

document.querySelector('span#bloquear').addEventListener('click', () =>{
    abrirCerrarMenu();
});