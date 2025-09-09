import { useState, useTransition } from "react"

export function NewUser() {

    const [name, setName] = useState("")
    const [erro, setErro] = useState("")
    const [user, setUser] = useState("")

    // 🔹 useTransition retorna:
    // - isPending → booleano que indica se uma transição está em andamento
    // - startTransition → função que marca uma atualização como "não urgente"
    //
    // O React dá menos prioridade para atualizações dentro de startTransition.
    // Isso ajuda quando você tem operações mais pesadas (ex: busca, filtragem, renderização complexa)
    // e não quer travar a interface principal.
    //
    // Exemplo de uso:
    // - Mostrar um spinner ou mensagem de "Carregando..."
    // - Evitar que o usuário clique várias vezes em um botão
    // - Manter a UI responsiva enquanto roda alguma lógica mais lenta

    const [isPending, startTransition] = useTransition();

    async function handleSubmit() {
        // Tudo dentro de startTransition é tratado como "atualização não urgente"
        startTransition(async () => {
            try {
                // Fake delay para simular requisição ao servidor
                await new Promise((resolve, reject) => setTimeout(() => {
                    resolve();
                    // reject("Falha no envio dos dados") // <- se quiser simular erro
                }, 2500))

                setUser("Bem vindo " + name)

            } catch (erro) {
                setErro(erro)
            }
        })
    }

    return (
        <div>
            <h1>Conhecendo useTransition</h1>

            <input
                type="text"
                placeholder="Digite o seu nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <button onClick={handleSubmit} disabled={isPending}>
                {isPending ? "Cadastrando Usuario..." : "Cadastrar"}
            </button>

            {user && <p>{user}</p>}
            {erro && <p>{erro}</p>}
        </div>
    )
}
