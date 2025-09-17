import { useTransition } from 'react'
import styles from '../../styles/button.module.css'

export function Button({ children, onClick, type = "button" }) {
    const [isPending, startTransition] = useTransition();

    async function handleClick(e) {
        startTransition(async () => {
            try {
                await new Promise((resolve, reject) => setTimeout(() => {
                    resolve();
                }, 2500))

                onClick?.(e);

                } catch (erro) {
                setErro(erro)
            }
            })
    }

    return (
        <button
            type={type}
            className={styles.button}
            onClick={handleClick}
            disabled={isPending}
        >
            {isPending ? "Carregando..." : children}
        </button>
    )

}

