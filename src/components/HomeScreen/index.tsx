import { Link } from "react-router-dom";
import imgCapa from '../../assets/imgCapa.svg'
import styles from './style.module.css'

export const HomeScreen = () => {
  return (
    <section className={styles.section_container}>
      <article className={styles.title_container}>
        <h1 className={styles.title_capa}>ToDo List</h1>
      </article>
      <article>
        <Link to="/to-do">
          <img className={styles.img_capa} src={imgCapa} alt="Imagem da capa da aplicação" />
        </Link>
      </article>
    </section>
  );
}