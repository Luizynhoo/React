import { useFormStatus } from 'react-dom'

export function ButtonSubmit(){

    const { pending } = useFormStatus();

    return(
        <button type="submit" disabled={pending}>
            {pending ? "Cadastrando dados..." : "Cadastrar"}
        </button>
    )
}
