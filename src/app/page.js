import Image from "next/image";
import styles from './page.module.css';
import Link from 'next/link';
import Caixa2 from '../componentes/caixa2.js';

export default function PaginaInicial() {
  return (
    <div className={styles.page}>
      <div style={{ display: 'flex', justifyContent: "flex-end" }}>
        <Link href="/usuario" className={styles.circle}>Perfil</Link>
      </div>     

      <div className={styles.abaLateral}></div>

      <div className={styles.conteudo}> 
        <div className={styles.caixaDesempenho}>
           <div className={styles.logoContainer}>
            <Image
              src="/img/logo-estuda.png" // Caminho relativo à pasta public
              alt="Logo Estuda+"
              width={50}
              height={50}
            />
            <h2 className={styles.logoTexto}>ESTUDA+</h2>
            <p className={styles.logoSubtexto}>SEJA BEM-VINDO!</p>
          </div>
          <div className={styles.metricas}>
            <div className={styles.item}>
            </div>  
            <div className={styles.item}>
            <Caixa2/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
