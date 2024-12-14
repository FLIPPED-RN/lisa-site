'use client'

import { useState } from "react";
import styles from "../styles/form.module.css";

type FormData = {
    name: string;
    telegram: string;
};

const Form = () => {
    const [formData, setFormData] = useState<FormData>({ name: '', telegram: '' });
    const [message, setMessage] = useState<string>('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name,value}=e.target;
        setFormData({
            ...formData,
            [name]:value
        });
    };

    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/sendMessage', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if(data.success){
                setMessage('Данные успешно отправлены!');
                setFormData({name: '', telegram: ''});
            }else{
                setMessage('Ошибка отправки данных!');
            }

        } catch (error) {
            setMessage('Произошла ошибка')
        }
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.field}>
            <label htmlFor="name">Имя:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className={styles.input}
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="telegram">Telegram (@username):</label>
            <input
              type="text"
              id="telegram"
              name="telegram"
              value={formData.telegram}
              onChange={handleChange}
              required
              className={styles.input}
            />
          </div>
          <button type="submit" className={styles.button}>
            Отправить
          </button>
          {message && <p className={styles.message}>{message}</p>}
        </form>
      );
}

export default Form;