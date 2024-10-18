import { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import userStore from '../../stores/userStore';
import { observer } from 'mobx-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


const Auth = observer(()=>{

    useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const authorizate = () => {
        setEmail(''); setPassword('');
        userStore.authUser({email, password});
    }

    return(
        <Container  className="mt-5">
            <h1 className="text-center mb-4" data-aos="fade-left" data-aos-duration="400">Авторизация</h1>
            <Form>
                <Form.Group data-aos="fade-left" data-aos-duration="600">
                    <Form.Label>
        Логин
                    </Form.Label>
                    <Form.Control name='username' type='text' value={email} onChange={(el) => {setEmail(el.target.value)}}>

                    </Form.Control>
                </Form.Group>
                <Form.Group data-aos="fade-left" data-aos-duration="800">
                    <Form.Label>
        Пароль
                    </Form.Label>
                    <Form.Control name='password' type='password' value={password} onChange={(el) => {setPassword(el.target.value)}}>

                    </Form.Control>
                </Form.Group>
                <Form.Group className='mt-2' data-aos="fade-left" data-aos-duration="1000">
                    <Button type='button' variant='dark' className='w-100' onClick={() => {authorizate()}}>Авторизоваться</Button>
                </Form.Group>
            </Form>
        </Container>
    )
})

export default Auth;