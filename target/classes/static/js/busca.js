function validarBusca() {
    const busca = document.getElementById("busca").value;

    if (!busca || busca.length === 0) {
        alert("O campo de busca não pode estar vazio.");
        return false;
    }
    
    const regex = /^[A-Za-z\s]+$/;
    if (!regex.test(busca)) {
        alert("A busca só pode conter letras e espaços.");
        return false;
    }

    fetch(`/livros/buscar?termo=${busca}`)
        .then(response => response.json())
        .then(livros => {
            const resultadoBusca = document.getElementById("resultado-busca");
            resultadoBusca.innerHTML = "";

            if (livros.length === 0) {
                alert("Nenhum livro encontrado.");
            } else {
                livros.forEach(livro => {
                    const row = document.createElement("tr");
                    row.innerHTML = `
                        <td>${livro.titulo}</td>
                        <td>${livro.autor}</td>
                        <td>${livro.ano}</td>
                    `;
                    resultadoBusca.appendChild(row);
                });
            }
        })
        .catch(error => {
            console.error("Erro na busca:", error);
            alert("Erro na busca.");
        });

    return false;
}
