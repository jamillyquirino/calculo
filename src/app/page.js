import Image from "next/image";
import styles from './page.module.css';
import Link from 'next/link';

export default function PaginaInicial() {
  return (
    <div className={styles.page}>
      <div style={{ display: 'flex', justifyContent: "flex-end" }}>
        <Link href="/usuario" className={styles.circle}>Perfil</Link>
      </div>     
      <div className={styles.abaLateral}></div>
      <div className={styles.conteudo}> 
        <h2 className={styles.tituloPrincipal}>ACESSO RÁPIDO</h2>
      </div>
      <div className={styles.caixa}></div>
      
    </div>
  );
}