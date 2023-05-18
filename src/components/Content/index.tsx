import { ChangeEvent, useEffect, useState, useContext } from "react";
import { v4 as uuid } from 'uuid';
import styles from './style.module.css'
import plus from '../../assets/plus.svg'
import { NoContent } from '../NoContent'
import { TodoList } from "../TodoList";
import { Task } from "../../models/task";
import { api } from "../../configs/api";
import useToDoContext from "../../hooks/useToDoContext";

export const Content = () => {

  const [description, setDescription] = useState<string>("");

  const { taskListState, setTaskListState } = useToDoContext();

  const disableButton = !description.length;

  const addTaskOnList = () => {

    const newTask = {
      id: uuid(),
      description,
      isDone: false,
    }

    api.post("tasks", newTask)
    .then((response) => setTaskListState((currentValue) => [...currentValue, response.data]) )
    .finally(() => setDescription(""));
  }

  const removeTaskOnList = (id: string) => {

    api.delete(`tasks/${id}`)
    .then( () => setTaskListState(
      (task) => task.filter(task => task.id !== id) 
    ) );
  }

  const changeStatusCheckBox = (id: string) => {

    const task = taskListState.find(task => task.id === id);

    if(task){
      api.patch(`tasks/${id}`, {
        isDone: !task.isDone,
      });
    }

    const elements = taskListState.map((task) => {
      if(task.id === id) {
        return {
          ...task,
          isDone: !task.isDone
        }
      }
      return task;
    })

    setTaskListState(elements);
  }

  const tasksDone = taskListState.filter((task) => {
    return task.isDone !== false;
  }) 

  useEffect(() => {
    api.get("tasks").then((response) => setTaskListState(response.data as Task[]));
  }, []);

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
                    <span className={styles.span_value}>{taskListState.length}</span>
                  </article>
                  <article className={styles.tasks_container}>
                    <p className={styles.tasks_done}>Tarefas concluidas</p>
                    <span className={styles.span_value}> {tasksDone.length} de {taskListState.length}</span>
                  </article>
                </article>
                {taskListState.length === 0 ? <NoContent /> : <TodoList onDelete={removeTaskOnList} 
                onChangeCheckBox={changeStatusCheckBox} /> }
            </main>
        </section>
    </div>
  )
}