function borrar(lista, elemento) {
    for (var i=0; i<lista.length; i++) {
        if (elemento == lista[i]) {
            lista.splice(i,1);
        }
    }
}
