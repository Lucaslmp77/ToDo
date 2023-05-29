import trash from '../../assets/trash.svg'
import useToDoContext from '../../hooks/useToDoContext';

import styles from './style.module.css'

interface TodoListProps {
  onDelete: (id: string) => void;
  onChangeCheckBox: (id: string) => void;
}

export const TodoList = ({ onDelete, onChangeCheckBox }: TodoListProps) => {
  const { taskListState } = useToDoContext();
  return (
    <section>
      {taskListState.map((task) => (
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