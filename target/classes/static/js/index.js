window.onload = function() {
    fetch('/livros')
        .then(response => response.json())
        .then(livros => {
            const listaLivros = document.getElementById("livros-lista");
            livros.forEach(livro => {
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td>${livro.titulo}</td>
                    <td>${livro.autor}</td>
                    <td>${livro.ano}</td>
                `;
                listaLivros.appendChild(row);
            });
        });
};
