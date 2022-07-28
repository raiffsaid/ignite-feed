import { Header } from "./components/Header";
import { Post } from "./Post";

import './global.css';

export function App() {
    return (
        <>
            <Header />

            <Post 
                author="Raiff Said" 
                content="Lorem ipsom dolor sit amet consectetur adipisicing elit."
            />
            <Post 
                author="Diego Fernandes"
                content="Um novo post"
            />
        </>
    );
}
