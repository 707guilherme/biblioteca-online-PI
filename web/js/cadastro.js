function validarCadastro() {
    const titulo = document.getElementById("titulo").value.trim();
    const autor = document.getElementById("autor").value.trim();
    const ano = document.getElementById("ano").value.trim();

    if (!titulo || !autor || !ano) {
        alert("Todos os campos são obrigatórios!");
        return false;
    }

    if (!/^\d{3,4}$/.test(ano)) {
        alert("O ano deve ser um número de 3 ou 4 dígitos!");
        return false;
    }

    return true;
}
