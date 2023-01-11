function borrar(lista) {
    var elemento = prompt("Introduzca el elemento que quieres borrar de la lista:")
    for (var i=0; i<lista.length; i++) {
        if (elemento == lista[i]) {
            lista.splice(i,1);
        }
    }
}
