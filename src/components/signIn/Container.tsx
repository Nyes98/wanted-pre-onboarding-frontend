import { useEffect, useState } from 'react';
import SignInComponent from './Component';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function SignInContainer() {
    const [signInPw, setSignInPw] = useState('');
    const [signInEmail, setSignInEmail] = useState('');
    const [check, setCheck] = useState(true);
    const [warnMsg, setWarnMsg] = useState('');
    const navigate = useNavigate();
    const token = localStorage.getItem('access_token');

    const emailHandler = (e: any) => {
        setSignInEmail(e.target.value);
    };
    const pwHandler = (e: any) => {
        setSignInPw(e.target.value);
    };

    const checkBtn = () => {
        if (signInEmail.includes('@') && signInPw.length >= 8) setCheck(false);
        else setCheck(true);
    };

    useEffect(() => {
        if (token) navigate('/todo');
    }, []);

    useEffect(() => {
        checkBtn();
    }, [signInEmail, signInPw]);

    const signInHandler = async () => {
        try {
            const response = await axios.post('https://www.pre-onboarding-selection-task.shop/auth/signin', {
                email: signInEmail,
                password: signInPw,
            });
            if (response.status === 200) {
                localStorage.setItem('access_token', response.data.access_token);
                navigate('/todo');
            }
        } catch (error) {
            setWarnMsg('이메일과 비밀번호를 다시 확인해주세요');
            console.error(error);
        }
    };

    return (
        <SignInComponent
            pwHandler={pwHandler}
            emailHandler={emailHandler}
            signInHandler={signInHandler}
            warnMsg={warnMsg}
            check={check}
        />
    );
}
