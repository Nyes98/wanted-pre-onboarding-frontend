import { styled } from 'styled-components';

type Props = {
    pwHandler: (e: any) => void;
    emailHandler: (e: any) => void;
    signUpHandler: (e: any) => void;
    check: boolean;
};

export default function SignUpComponent({ pwHandler, emailHandler, signUpHandler, check }: Props) {
    return (
        <Wrap>
            <div>
                E-mail <input data-testid="email-input" onChange={emailHandler} />
            </div>
            <div>
                Password <input data-testid="password-input" onChange={pwHandler} />
            </div>
            <div>
                <button data-testid="signup-button" onClick={signUpHandler} disabled={check}>
                    회원가입
                </button>
            </div>
        </Wrap>
    );
}

const Wrap = styled.div`
    div {
        display: flex;
        justify-content: space-between;
        width: 300px;
        margin-top: 10px;
    }
`;

const Warning = styled.div`
    color: red;
`;
