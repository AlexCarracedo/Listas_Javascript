function comprobar(lista) {
    var a=0;
    var elemento = prompt("Introduzca el elemento que quieres comprobar que esté en la lista:")
    for (var i=0; i<lista.length; i++) {
        if (elemento == lista[i]) {
            console.log(elemento+" se encuentra en la lista.");
            a=1;
        }
    }
    if (a==0) {
        console.log(elemento+" no se encuentra en la lista.")
    }
}
