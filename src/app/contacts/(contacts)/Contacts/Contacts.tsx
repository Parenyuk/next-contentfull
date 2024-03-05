import {ContainerComponent} from "@/src/shared/components/ContainerComponent";
import styles from './Contacts.module.scss';
import sgMail from '@sendgrid/mail'
import {Form, Formik} from "formik";

sgMail.setApiKey(process.env.SENDGRID_API_KEY ?? '')

export const Contacts = () => {

    const handleSubmit = async (formData: any) => {
        "use server"
        const rowFormData = {
            to: 'victorparenyuk@gmail.com',
            // to: 'LKPRomanov@i.ua',
            from: 'ParenVic@i.ua',
            subject: `New message from ${formData.get("name")}, email: ${formData.get('email')}`,
            text: formData.get("message"),
        }

        //Here need to write email sending functionality
        try {
            console.log('rowFormData', rowFormData);
            await sgMail.send(rowFormData)
            // Send a success response
            console.log("Email Send Successfully!")
        } catch (error: any) {
            // console.log('err', error);
            console.log('error.response.body', error.response.body);
            // Send an error response
            console.log("Something went wrong, please try again!")
        }
    }

    // const handleSubmit = () => {
    //
    // }

    return (<ContainerComponent className={styles.pageWrapper}>
        <div className={styles.top}>
            <h1 className={styles.title}>Контакти</h1>
            <p className={styles.description}>{"Зв'яжіться з нами будь-яким зручним для Вас способом"}</p>
        </div>
        <div className={styles.main}>
            <div className={styles.leftPart}>
                <h2 className={styles.titleSmall}>Контакти</h2>
                <p className={styles.descriptionSmall}>Є що сказати? Ми тут, щоб допомогти. Заповніть форму або надішліть електронною
                    поштою або зателефонуйте за телефоном.</p>
            </div>
            <div className={styles.rightPart}>
                <form action={handleSubmit} className={styles.form}>
                    <input name={'name'} className={styles.input} placeholder={"Прізвище та Ім'я"} />
                    <input name={'email'} className={styles.input} placeholder={"Електронна пошта"} />
                    <textarea name={'message'} className={styles.textArea} maxLength={300} />
                    <button type={'submit'} className={styles.button}>Відправити повідомлення</button>
                </form>
            </div>
            {/*<div className={styles.rightPart}>*/}
            {/*    <Formik*/}
            {/*        enableReinitialize*/}
            {/*        initialValues={{*/}
            {/*            name: '',*/}
            {/*            email: '',*/}
            {/*            message: ''*/}
            {/*        }}*/}
            {/*        onSubmit={handleSubmit}*/}
            {/*    >*/}
            {/*        <Form className={styles.form}>*/}
            {/*            <input name={'name'} className={styles.input} placeholder={"Прізвище та Ім'я"} />*/}
            {/*            <input name={'email'} className={styles.input} placeholder={"Електронна пошта"} />*/}
            {/*            <textarea name={'message'} className={styles.textArea} maxLength={300} />*/}
            {/*            <button type={'submit'} className={styles.button}>Відправити повідомлення</button>*/}
            {/*        </Form>*/}

            {/*    </Formik>*/}

            {/*</div>*/}
        </div>
    </ContainerComponent>)
};
