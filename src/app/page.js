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
        <h2 className={styles.tituloPrincipal}>ACESSO RÁPIDO</h2>

        {/* Caixinha de desempenho */}
        <div className={styles.caixaDesempenho}>
          <h3 className={styles.tituloCaixa}>VISÃO GERAL DO SEU DESEMPENHO</h3>
          <div className={styles.metricas}>
            <div className={styles.item}>
              <div className={styles.subtitulo}>Taxa de Acertos</div>
              <div className={styles.percentualAcerto}>56%</div>
              <p className={styles.detalhe}>Você acertou 51 questões</p>
              <div className={styles.iconeVerde}>✔</div>
            </div>
            <div className={styles.item}>
             {/* <div className={styles.subtitulo}>Taxa de Erros</div> 
              <div className={styles.percentualErro}>44%</div> 
              <p className={styles.detalhe}>Você errou 40 questões</p>
              <div className={styles.iconeVermelho}>✘</div>*/}
            <Caixa2/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
