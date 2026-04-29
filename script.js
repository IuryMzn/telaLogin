const form = document.getElementById("loginForm");
const usuario = document.getElementById("usuario");
const senha = document.getElementById("senha");
const mensagem = document.getElementById("mensagem");
form.addEventListener("submit", (e) => {
    e.preventDefault(); // evita o recarregamento da página
    if (usuario.value === "" || senha.value === "") {
        mensagem.textContent = "Preencha todos os campos!";
    } else if (usuario.value === "adm" && senha.value === "123") {
        mensagem.style.color = "#03dac6";
        mensagem.textContent = "Login realizado com sucesso!";
    } else {
        mensagem.textContent = "Usuário ou senha incorretos.";
    }
    
});
        const form = document.getElementById("cadastroForm");
        const nome = document.getElementById("nome");
        const email = document.getElementById("email");
        const senha = document.getElementById("senha");
        const confirmarSenha = document.getElementById("confirmarSenha");
        const mensagem = document.getElementById("mensagem");

        // Definindo as cores via JS para facilitar a lógica de feedback
        const corSucesso = "#bb86fc"; 
        const corErro = "#cf6679";

        form.addEventListener("submit", (e) => {
            e.preventDefault();

            // Reset de estado
            mensagem.style.color = corErro;

            // Validação simples
            if (!nome.value || !email.value || !senha.value || !confirmarSenha.value) {
                mensagem.textContent = "Todos os campos são obrigatórios!";
                return;
            }

            if (senha.value !== confirmarSenha.value) {
                mensagem.textContent = "As senhas inseridas não coincidem.";
                return;
            }

            if (senha.value.length < 8) {
                mensagem.textContent = "A senha deve conter no mínimo 8 caracteres.";
                return;
            }

            // Simulação de sucesso
            mensagem.style.color = corSucesso;
            mensagem.textContent = "Conta criada com sucesso!";
            
            // Limpar formulário
            form.reset();
        });
         // Mock de dados para a tabela
        const atividades = [
            { cliente: "Ana Martins", produto: "Plano Premium", data: "29 Abr, 2024", valor: "€ 49.99", estado: "completado" },
            { cliente: "João Silva", produto: "Curso Design UI", data: "28 Abr, 2024", valor: "€ 89.00", estado: "pendente" },
            { cliente: "Carla Pires", produto: "Consultoria", data: "28 Abr, 2024", valor: "€ 150.00", estado: "completado" },
            { cliente: "Rui Oliveira", produto: "E-book JS", data: "27 Abr, 2024", valor: "€ 19.90", estado: "completado" }
        ];

        const tableBody = document.getElementById('activityTable');

        function popularTabela() {
            tableBody.innerHTML = atividades.map(atv => `
                <tr>
                    <td>${atv.cliente}</td>
                    <td>${atv.produto}</td>
                    <td>${atv.data}</td>
                    <td>${atv.valor}</td>
                    <td><span class="status-badge status-${atv.estado}">${atv.estado.toUpperCase()}</span></td>
                </tr>
            `).join('');
        }

        // Inicializar Dashboard
        window.onload = popularTabela;

        // Adicionar eventos de clique nos itens da navegação
        const navItems = document.querySelectorAll('nav ul li');
        navItems.forEach(item => {
            item.addEventListener('click', () => {
                navItems.forEach(i => i.classList.remove('active'));
                item.classList.add('active');
            });
        });
        const loginForm = document.getElementById('loginForm');
const mensagem = document.getElementById('mensagem');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Impede o recarregamento da página

    const usuario = document.getElementById('usuario').value;
    const senha = document.getElementById('senha').value;

    // Exemplo de validação simples (substitua pela sua lógica de backend ou Firebase)
    if (usuario === "admin" && senha === "1234") {
        mensagem.style.color = "green";
        mensagem.textContent = "Login realizado com sucesso! Redirecionando...";
        
        // Redireciona para o dashboard após 1.5 segundos
        setTimeout(() => {
            window.location.href = "dashboard.html";
        }, 1500);
    } else {
        mensagem.style.color = "red";
        mensagem.textContent = "Usuário ou senha incorretos.";
    }
});