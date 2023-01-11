function menor_numero(lista) {
    lista.sort(function(a, b){return a-b});
    console.log(lista[0]);
}