function comprobar(lista) {
    var elemento = prompt("Introduzca el elemento que quieres comprobar que esté en la lista:")
    for (var i=0; i<lista.length; i++) {
        if (elemento == lista[i]) {
            return true;
            a=1;
        }
    }
    if (a==0) {
        return false;
    }
}