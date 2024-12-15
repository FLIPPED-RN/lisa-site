'use client'

import { useState } from "react";
import styles from "../styles/form.module.css";

type FormData = {
    name: string;
    telegram: string;
};

const Form = () => {
    const [formData,setFormData] = useState<FormData>({name: '',telegram: ''});
    const [message,setMessage] = useState<string>('');
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

    const [error,setError] = useState<string|null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name,value}=e.target;

        if (name === "name") {
          const isValid = /^[A-Za-zА-Яа-я]+$/.test(value);
          if (!isValid && value !== "") {
            setError("Имя может содержать только буквы");
          } else {
            setError(null);
          }
        }

        setFormData({
            ...formData,
            [name]:value
        });
    };

    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (error) {
          return;
        }

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
                setMessage('Ваша заявка отправлена!');
                setIsSubmitted(true);
                setFormData({name: '', telegram: ''});
            }else{
                setMessage('Ошибка отправки заявки!');
            }

        } catch (error) {
            setMessage('Произошла ошибка')
        }
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.field}>
            <label htmlFor="name" className={styles.label__text}>Имя</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className={styles.input}
            />
            {error && <p className={styles.error}>{error}</p>}
          </div>
          <div className={styles.field}>
            <label htmlFor="telegram" className={styles.label__text}>Telegram</label>
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
          {isSubmitted ? (
          <p className={styles.message}>{message}</p>
        ) : (
          <button type="submit" className={styles.button}>
            Отправить
          </button>
        )}
        </form>
      );
}

export default Form;