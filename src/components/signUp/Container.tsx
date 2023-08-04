import { useEffect, useState } from 'react';
import SignUpComponent from './Component';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function SignUpContainer() {
    const [signUpEmail, setSignUpEmail] = useState('');
    const [signUpPw, setSignUpPw] = useState('');
    const [check, setCheck] = useState(true);
    const navigate = useNavigate();
    const token = localStorage.getItem('access_token');

    const emailHandler = (e: any) => {
        setSignUpEmail(e.target.value);
    };
    const pwHandler = (e: any) => {
        setSignUpPw(e.target.value);
    };

    const checkBtn = () => {
        if (signUpEmail.includes('@') && signUpPw.length >= 8) setCheck(false);
        else setCheck(true);
    };

    const signUpHandler = async () => {
        try {
            const response = await axios.post('https://www.pre-onboarding-selection-task.shop/auth/signup', {
                email: signUpEmail,
                password: signUpPw,
            });
            if (response.status === 201) navigate('/signin');
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        if (token) navigate('/todo');
    }, []);

    useEffect(() => {
        checkBtn();
    }, [signUpEmail, signUpPw]);

    return (
        <SignUpComponent
            pwHandler={pwHandler}
            emailHandler={emailHandler}
            signUpHandler={signUpHandler}
            check={check}
        />
    );
}
