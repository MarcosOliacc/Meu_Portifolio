'use client'
import styles from './styles.module.scss'
import { useState } from 'react'
import emailJs from '@emailjs/browser'
import Image from 'next/image';

export function ContactSection() {
    const [contact, setContact] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    
      const [response, setResponse] = useState({
        type: '',
        message: ''
      })
    
      const handleChange = (e:React.FormEvent<HTMLInputElement>|React.FormEvent<HTMLTextAreaElement>) =>
        setContact({ ...contact, [e.currentTarget.name]: e.currentTarget.value })
    
      const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const templateParams = {
            from_name: contact.name,
            email: contact.email,
            phone: contact.phone,
            message: contact.message
        }
        emailJs.send('service_srzz5jd','template_lxs1dxi',templateParams,'GR5O-hm9bMOd9iUoT').then((res)=>{
            if(res.status==200) {
                setResponse({
                    type:'success',
                    message: res.text
                })   
            } else {setResponse({type:'Error', message:res.text})}
        }).catch((err)=>{setResponse({type:'Error', message:err.text})})
      }
      return <>
        <div className={styles.conteiner}>
            <h1 className={styles.title}>Entre em contato</h1>

            <div className={styles.formConteiner}>
                {response.type === ''? 
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Nome</label>
                    <input type="text" 
                    id='name' name='name'
                    placeholder='Digite seu nome'
                    value={contact.name}
                    onChange={handleChange}
                    />
                    <label htmlFor="email">Email</label>
                    <input type="email" 
                    id='email' name='email'
                    placeholder='DigiteSeu@Email.com'
                    value={contact.email}
                    onChange={handleChange}
                    />
                    <label htmlFor="phone">Telefone</label>
                    <input type="number" 
                    id='phone' name='phone'
                    placeholder='(99) 98989-8999'
                    value={contact.phone}
                    onChange={handleChange}
                    maxLength={11}
                    />
                    <label htmlFor="message">Mensagem</label>
                    <textarea name="message" id="message" cols={50} rows={10}
                    value={contact.message}
                    placeholder='Digite sua mensagem'
                    onChange={handleChange}
                    ></textarea>
                    <button type='submit'>Enviar Mensagem</button>
                </form>

                : 
                <div className={styles.sendContent}>
                    <h2 className={response.type=== 'success'? styles.success: styles.error}>{response.type === 'success'? 'Mensagem enviada com sucesso!!':'Ops, parece que algo deu errado!'}</h2>
                    <p>{response.type === 'success'? 'Obrigado pela sua mensagem :)':'Por favor, tente nos enviar sua mensagem novamente.'}</p>
                    {response.type === 'Error'? <button onClick={()=>{
                        setResponse({
                            type:'',
                            message:''
                        })
                        
                    }}
                    className={styles.tryBtn}
                    >Tentar Novamente</button>:''}
                </div>
                }
            </div>
            <nav className={styles.navLinks}>
                <a target='blank' href="https://www.linkedin.com/in/marcos-oliveira-733151291/">Linkedin <Image src='/arrowsLink.png' alt='' width={25} height={25} className={styles.arrows}/></a>
                <a target='blank' href="https://www.instagram.com/vinixos1/">Instagram <Image src='/arrowsLink.png' alt='' width={25} height={25} className={styles.arrows}/></a>
                <a target='blank' href="https://github.com/MarcosOliacc">GitHub <Image src='/arrowsLink.png' alt='' width={25} height={25} className={styles.arrows}/></a>
            </nav>
              
        </div>
      </>

}