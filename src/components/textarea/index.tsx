import React from "react";
import styles from "./styles.module.css";

export function Textarea({
  ...rest
}: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea className={styles.textarea} {...rest} />;
}
