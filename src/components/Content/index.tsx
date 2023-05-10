import styles from './style.module.css'
import plus from '../../assets/plus.svg'

export const Content = () => {
  return (
    <div>
        <section className={styles.section_container}>
            <main>
                <article className={styles.input_container}>
                    <input className={styles.input} type="text" placeholder='Adicione uma nova tarefa' />
                    <button className={styles.button}>
                      Criar
                      <img 
                        className={styles.img} 
                        src={plus} 
                        alt="icone de mais" 
                      />
                    </button>
                </article>
            </main>
        </section>
    </div>
  )
}