import { useToast } from "../../hooks/useToast";
import styles from "./style.module.css"

type ToastProps = {
  message: string;
  type: 'success' | 'danger';
}

export const Toast = ({ message, type }: ToastProps) => {

  const { isHidden } = useToast();

  return (
    <aside className={isHidden ? styles.container : styles.container_show}>
      <p className={type === "success" ? styles.success : styles.danger}>{message}</p>
    </aside>
  )
}