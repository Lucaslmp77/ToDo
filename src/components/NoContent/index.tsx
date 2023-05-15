import styles from './style.module.css'

import clipboard from '../../assets/clipboard.svg'

export const NoContent = () => {
    return (
      <section className={styles.section_container}>
          <img src={clipboard} alt="icone clipboard" />
          <p className={styles.text}>
            <strong>Você ainda nao tem tarefas cadastradas</strong>
            Crie tarefas e organize seus itens a fazer
          </p>
      </section>
    )
}