import {ContainerComponent} from "@/src/shared/components/ContainerComponent";
import styles from './Contacts.module.scss';

export const Contacts = () => {
    return (<ContainerComponent className={styles.pageWrapper}>
        <div className={styles.top}>
            <h1 className={styles.title}>Контакти</h1>
            <p className={styles.description}>Зв'яжіться з нами будь-яким зручним для Вас способом</p>
        </div>
        <div className={styles.main}>
            <div className={styles.leftPart}>
                <h2 className={styles.titleSmall}>Контакти</h2>
                <p className={styles.descriptionSmall}>Є що сказати? Ми тут, щоб допомогти. Заповніть форму або надішліть електронною
                    поштою або зателефонуйте за телефоном.</p>
            </div>
            <div className={styles.rightPart}>
                <form className={styles.form}>
                    <input name={'name'} className={styles.input} placeholder={"Прізвище та Ім'я"} />
                    <input name={'email'} className={styles.input} placeholder={"Електронна пошта"} />
                    <textarea name={'text'} className={styles.textArea} maxLength={300} />
                    <button type={'submit'} className={styles.button}>Відправити повідомлення</button>
                </form>
            </div>
        </div>
    </ContainerComponent>)
};
