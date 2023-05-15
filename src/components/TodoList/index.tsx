import trash from '../../assets/trash.svg'
import { Task } from '../../models/task'

import styles from './style.module.css'

interface TodoListProps {
  list: Task[];
  onDelete: (id: string) => void;
}

export const TodoList = ({ list, onDelete }: TodoListProps) => {
  return (
    <section>
      {list.map((task) => (
        <article key={task.id} className={styles.content_container}>
            <input type="checkbox" name="" id={task.id} defaultChecked={task.isDone} />
            <p className={styles.text}>{task.description}</p>
            <img className={styles.img} src={trash} alt="icone lixeira" onClick={() => onDelete(task.id)} />
        </article>
        ))}
    </section>
  )
}