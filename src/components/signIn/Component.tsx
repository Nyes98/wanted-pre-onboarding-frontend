import { styled } from 'styled-components';

type Props = {
    pwHandler: (e: any) => void;
    emailHandler: (e: any) => void;
    signInHandler: () => void;
    warnMsg: string;
    check: boolean;
};

export default function SignInComponent({ pwHandler, emailHandler, signInHandler, warnMsg, check }: Props) {
    return (
        <Wrap>
            <div>
                E-mail <input data-testid="email-input" onChange={emailHandler} />
            </div>
            <div>
                Password <input data-testid="password-input" onChange={pwHandler} />
            </div>
            <div>
                <button data-testid="signin-button" onClick={signInHandler} disabled={check}>
                    로그인
                </button>
            </div>
            <Warning>{warnMsg}</Warning>
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
