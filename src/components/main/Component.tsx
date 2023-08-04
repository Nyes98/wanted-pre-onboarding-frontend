import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export default function MainComponent() {
    return (
        <Wrap>
            <div>
                <Link to="/signin"> 로그인</Link>
            </div>
            <div>
                <Link to="/signup"> 회원가입</Link>
            </div>
            <div>
                <Link to="/todo"> To-Do</Link>
            </div>
        </Wrap>
    );
}

const Wrap = styled.div`
    div {
        border: 1px solid black;
        width: 100px;
        height: 25px;
        text-align: center;
        margin: 10px;
    }

    a {
        text-decoration: none;
        color: black;
    }
`;
