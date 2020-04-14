let abrirCerrarMenu = () => {


    if (document.querySelector('#menu-lateral').classList.contains('abrir')) {
        document.querySelector('body').classList.remove('bloquear');
        document.querySelector('#menu-lateral').classList.remove('abrir');
    } else {
        document.querySelector('body').classList.add('bloquear');
        document.querySelector('#menu-lateral').classList.add('abrir');
    }
    

}

document.querySelector('#menu-lateral > i').addEventListener('click', () =>{
    abrirCerrarMenu();
});

document.querySelector('#header > i').addEventListener('click', () =>{
    abrirCerrarMenu();
});