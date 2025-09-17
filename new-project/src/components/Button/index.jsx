import { useTransition } from 'react'
import styles from '../../styles/button.module.css'

export function Button({ children, onClick, type = "button" }) {
  const [isPending, startTransition] = useTransition();

  function handleClick(e) {
    startTransition(async () => {
      try {
        await new Promise((resolve) =>
          setTimeout(() => resolve(), 2500)
        );

        onClick?.(e);

      } catch (error) {
        console.error(error);
      }
    });
  }

  return (
    <button
      type={type}         
      className={styles.button}
      onClick={handleClick}
      disabled={isPending}a
    >
      {isPending ? "Carregando..." : children}
    </button>
  )
}
