function mayor_numero(lista) {
    lista.sort(function(a, b){return a-b});
    lista.reverse();
    console.log(lista[0]);
}