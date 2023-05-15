import { ChangeEvent, useState } from "react";
import { v4 as uuid } from 'uuid';
import styles from './style.module.css'
import plus from '../../assets/plus.svg'
import { NoContent } from '../NoContent'
import { TodoList } from "../TodoList";
import { Task } from "../../models/task";

export const Content = () => {
  const [taskList, setTaskList] = useState<Task[]>([]);
  const [description, setDescription] = useState<string>("")

  const addTaskOnList = () => {
    const newTask = {
      id: uuid(),
      description,
      isDone: false,
    }

    setTaskList((currentValue) => [...currentValue, newTask]);
  }

  const removeTaskOnList = (id: string) => {
    setTaskList(
      (currentValue) => currentValue.filter(task => task.id !== id)
    );
  }

  return (
    <div>
        <section className={styles.section_container}>
            <main>
                <article className={styles.input_container}>
                    <input
                      className={styles.input} 
                      type="text" 
                      placeholder='Adicione uma nova tarefa' 
                      onChange={(event: ChangeEvent<HTMLInputElement>) => setDescription(event.target.value)}
                    />
                    <button className={styles.button} onClick={() => addTaskOnList()}>
                      Criar
                      <img 
                        className={styles.img} 
                        src={plus} 
                        alt="icone de mais" 
                      />
                    </button>
                </article>
                <article className={styles.content_header}>
                  <article className={styles.tasks_container}>
                    <p className={styles.tasks_created}>Tarefas criadas</p>
                    <span className={styles.span_value}>0</span>
                  </article>
                </article>
                {taskList.length === 0 ? <NoContent /> : <TodoList onDelete={removeTaskOnList} list ={taskList} /> }
            </main>
        </section>
    </div>
  )
}