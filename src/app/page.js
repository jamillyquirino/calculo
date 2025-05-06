import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.circle}>Perfil</div>

      <div className={styles.quickAccess}>
        <h2>ACESSO RÁPIDO</h2>
        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.cardContent}>
              <span>📚 <strong>Resumos</strong></span>
              <p>Leia resumos completos, organizados por assunto</p>
              <span className={styles.arrow}>↗️</span>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardContent}>
              <span>🎬 <strong>VideoAulas</strong></span>
              <p>Assista videoaulas completas, organizadas por assunto</p>
              <span className={styles.arrow}>↗️</span>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardContent}>
              <span>📝 <strong>Exercícios</strong></span>
              <p>Resolva listas de exercícios prontas ou crie as suas</p>
              <span className={styles.arrow}>↗️</span>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardContent}>
              <span>📊 <strong>Desempenho</strong></span>
              <p>Veja como está o seu desempenho</p>
              <span className={styles.arrow}>↗️</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <button className={styles.bigButton}>
          📈 Desempenho em questões
        </button>
        <button className={styles.smallButton}>
          📑 Questões
        </button>
      </div>
    </div>
  );
}
