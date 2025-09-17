import styles from "../../styles/header.module.css"

let renderCount = 0;

export function Header() {
  renderCount++;
  
  return (
   <h3 className={styles.header}>renderizou {renderCount}</h3>
  )
}
