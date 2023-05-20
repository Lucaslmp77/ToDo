import { useToast } from "../../hooks/useToast";
import styles from "./style.module.css"
import { useState, useEffect } from "react";

type ToastProps = {
  message: string;
  type: 'success' | 'danger';
}

export const Toast = ({ message, type }: ToastProps) => {

  const { isHidden } = useToast();

  return (
    <aside className={isHidden ? styles.container : styles.container_show}>
      <p className={type === "success" ? styles.successs : styles.danger}>{message}</p>
    </aside>
  )
}