function mostrarMais(desc, botaoMais){
    document.getElementById(desc).style.display = 'inline';
    document.getElementById(botaoMais).style.display = 'none';
}
function mostrarMenos(desc, botaoMais){
    document.getElementById(desc).style.display = 'none';
    document.getElementById(botaoMais).style.display = 'inline';
}