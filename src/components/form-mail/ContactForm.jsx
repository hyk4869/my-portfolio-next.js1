import { useRef, useState } from 'react';
import styles from '../form-mail/Form.module.css';

export function ContactForm() {
    const initialValues = {username: "", email:"", textBox:""}
    const[formValues, setFormValues] = useState(initialValues);
    const[formErrors, setFormErrors] = useState({});
    const[formSend,setFormSend] = useState("")

    const nameRef = useRef(null)
    const emailRef = useRef(null)
    const messageRef = useRef(null)

    let data ={
        name:nameRef.current?.value,
        email:emailRef.current?.value,
        message:messageRef.current?.value,
    }


    const handleChange = (e) =>{
        const {name, value} = e.target;
        setFormValues({...formValues, [name]:value});
    }


    const handleSubmit = async (e) =>{
        e.preventDefault();
        // 内容を送信
        setFormErrors(validate(formValues));

        await fetch("api/contact",{
            method:"POST",
            headers:{
                Accept:"application/json, text/plain", 
                "Content-Type":"application/json"
            },
            body: JSON.stringify(data),
        }).then((res)=>{
            if(res.status === 200) setFormSend("メール送信完了。Message sent successfully.")
        });

        nameRef.current.value=""
        emailRef.current.value=""
        messageRef.current.value=""

    };


    const validate = (values) =>{
        const errors = {};
        const regex = /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/;
        if(!values.username){
            errors.username = "Please, insert your name here"
        }
        if(!values.email){
            errors.email = "Please, insert your email here"
        } else if(!regex.test(values.email)){
            errors.email = "Please, insert your correct email here"
        }
        return errors;
    }


  return (
    <>
        <div className={styles.formContainer}>

            <form action="" className={styles.formsub} onSubmit={(e) => handleSubmit(e)}>

                <h1 className={styles.h1}>Contact Form</h1>

                <hr/>
                
                <div className={styles.uiForm}>
                    <div className={styles.formFied}>
                        <label htmlFor="username" className={styles.label}>Name</label>
                        <input type="text" placeholder='Your Name' className={styles.text} name="username" onChange={(e) => handleChange(e)} ref={nameRef}/>
                    </div>
                    <p className={styles.errorMsg}>{formErrors.username}</p>

                    <div className={styles.formFied}>
                        <label htmlFor="email" className={styles.label}>Mail</label>
                        <input type="text" placeholder='Your Email' className={styles.text} name="email" onChange={(e) => handleChange(e)} ref={emailRef}/>
                    </div>
                    <p className={styles.errorMsg}>{formErrors.email}</p>


                    <div className={styles.formFied}>
                        <label htmlFor="radio" className={styles.label}>Language</label>
                        <div className={styles.radiobtn}>
                            <input type="radio" name= 'language' className={styles.radio} id='radio1'/>
                            <label htmlFor="radio1">Japanese</label>
                            <input type="radio" name= 'language' className={styles.radio} id='radio2'/>
                            <label htmlFor="radio2">English</label>
                            <input type="radio" name= 'language' className={styles.radio} id='radio3'/>
                            <label htmlFor="radio3">Other</label>
                        </div>
                    </div>

                    <div className={styles.formFied}>
                        <label htmlFor="textBox" className={styles.label}>Detail</label>
                        <textarea cols="30" rows="10" placeholder='Detail' className={styles.textArea} name="textBox" onChange={(e) => handleChange(e)} ref={messageRef}></textarea>
                    </div>

                    <div className={styles.formbtn}>
                        <button type="submit" className={styles.btn}>
                            Submit
                        </button> 
                    </div>

                </div>

            </form>

            <div className={styles.formSend}>
                {formSend}
            </div>

        </div>

    </>
  )
}
