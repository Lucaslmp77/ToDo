import { ChangeEvent, useState } from "react";
import { v4 as uuid } from 'uuid';
import styles from './style.module.css'
import plus from '../../assets/plus.svg'
import { NoContent } from '../NoContent'
import { TodoList } from "../TodoList";
import { Task } from "../../models/task";

export const Content = () => {
  const [taskList, setTaskList] = useState<Task[]>([]);
  const [description, setDescription] = useState<string>("");

  const disableButton = !description.length;

  const addTaskOnList = () => {
    setTaskList([{id: uuid(), description, isDone: false}, ...taskList]);
    setDescription("");
  }

  const removeTaskOnList = (id: string) => {
    setTaskList(
      (task) => task.filter(task => task.id !== id)
    );
  }

  const changeStatusCheckBox = (id: string) => {
    const elements = taskList.map((task) => {
      if(task.id === id) {
        return {
          ...task,
          isDone: !task.isDone
        }
      }
      return task;
    })

    setTaskList(elements);
  }

  const tasksDone = taskList.filter((task) => {
    return task.isDone !== false;
  }) 

  return (
    <div>
        <section className={styles.section_container}>
            <main>
                <article className={styles.input_container}>
                    <input
                      className={styles.input} 
                      type="text" 
                      value={description}
                      placeholder='Adicione uma nova tarefa' 
                      onChange={
                        (event: ChangeEvent<HTMLInputElement>) => setDescription(event.target.value)
                      }
                      required
                    />
                    <button 
                    className={styles.button} 
                    onClick={() => addTaskOnList()}
                    disabled={disableButton}>
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
                    <span className={styles.span_value}>{taskList.length}</span>
                  </article>
                  <article className={styles.tasks_container}>
                    <p className={styles.tasks_done}>Tarefas concluidas</p>
                    <span className={styles.span_value}> {tasksDone.length} de {taskList.length}</span>
                  </article>
                </article>
                {taskList.length === 0 ? <NoContent /> : <TodoList onDelete={removeTaskOnList} 
                onChangeCheckBox={changeStatusCheckBox} list ={taskList} /> }
            </main>
        </section>
    </div>
  )
}