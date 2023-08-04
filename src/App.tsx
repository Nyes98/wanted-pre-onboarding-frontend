import './App.css';
import { Route, Routes } from 'react-router-dom';
import SignUpContainer from './components/signUp/Container';
import MainContainer from './components/main/Container';
import SignInContainer from './components/signIn/Container';
import TodoContainer from './components/todo/Container';

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<MainContainer />}></Route>
                <Route path="/signup" element={<SignUpContainer />}></Route>
                <Route path="/signin" element={<SignInContainer />}></Route>
                <Route path="/todo" element={<TodoContainer />}></Route>
            </Routes>
        </div>
    );
}

export default App;
