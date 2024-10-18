import { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { observer } from 'mobx-react';
import userStore from '../../stores/userStore';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Register = observer(() => {

    useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const goUser = () => {
        setUsername(''); setPassword(''); setEmail('')
        userStore.addUser({username, password, email});
    }

    return (
        <Container  className="mt-5">
            <h1 className="text-center mb-4" data-aos="fade-right" data-aos-duration="400">Регистрация</h1>
            <Form>
                <Form.Group data-aos="fade-right" data-aos-duration="600">
                    <Form.Label>
                        Имя
                    </Form.Label>
                    <Form.Control name='username' type='text' value={username} onChange={(e) => {setUsername(e.target.value)}}>

                    </Form.Control>
                </Form.Group>
                <Form.Group data-aos="fade-right" data-aos-duration="800">
                    <Form.Label>
                        Логин
                    </Form.Label>
                    <Form.Control name='email' type='email' value={email} onChange={(e) => {setEmail(e.target.value)}}>

                    </Form.Control>
                </Form.Group>
                <Form.Group data-aos="fade-right" data-aos-duration="1000">
                    <Form.Label>
                        Пароль
                    </Form.Label>
                    <Form.Control name='password' type='password' value={password} onChange={(e) => {setPassword(e.target.value)}}>

                    </Form.Control>
                </Form.Group>
                <Form.Group className='mt-2' data-aos="fade-right" data-aos-duration="1200"> 
                    <Button type='button' variant='dark' className='w-100' onClick={() => {goUser()}}>Зарегистрироваться</Button>
                </Form.Group>
            </Form>
        </Container>
    )
})

export default Register;