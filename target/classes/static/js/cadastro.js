function validarCadastro() {
    const titulo = document.getElementById("titulo").value.trim();
    const autor = document.getElementById("autor").value.trim();
    const ano = document.getElementById("ano").value.trim();

    if (!titulo || !autor || !ano) {
        alert("Todos os campos são obrigatórios.");
        return false;
    }

    const anoNumero = parseInt(ano, 10);
    if (isNaN(anoNumero) || anoNumero < 0 || anoNumero > 2025) {
        alert("O ano deve ser um número entre 0 e 2025.");
        return false;
    }

    const livro = { titulo, autor, ano: anoNumero };

    fetch('/livros', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(livro)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Erro na resposta do servidor");
        }
        return response.json();
    })
    .then(data => {
        alert("Livro cadastrado com sucesso!");
        window.location.href = "index.html"; // Redireciona para a página inicial após cadastro
    })
    .catch(error => {
        console.error("Erro ao cadastrar livro:", error);
        alert("Erro ao cadastrar livro.");
    });

    return false;
}
