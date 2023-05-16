import trash from '../../assets/trash.svg'
import { Task } from '../../models/task'

import styles from './style.module.css'

interface TodoListProps {
  list: Task[];
  onDelete: (id: string) => void;
  onChangeCheckBox: (id: string) => void;
}

export const TodoList = ({ list, onDelete, onChangeCheckBox }: TodoListProps) => {
  return (
    <section>
      {list.map((task) => (
        <article key={task.id} className={styles.content_container}>
            <input 
              type="checkbox" 
              name="" id={task.id} 
              defaultChecked={task.isDone} 
              onChange={() => onChangeCheckBox(task.id)}
            />
            <p className={task.isDone ? styles.text_scratched : styles.text}>{task.description}</p>
            <img className={styles.img} src={trash} alt="icone lixeira" onClick={() => onDelete(task.id)} />
        </article>
        ))}
    </section>
  )
}