function validarBusca() {
    const busca = document.getElementById("busca").value.trim();

    if (!busca) {
        alert("O campo de busca não pode estar vazio!");
        return false;
    }

    return true;
}
