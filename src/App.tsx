import CheckMarkButton from '@/components/CheckMarkButton/CheckMarkButton';
import { buttonColors } from '@/consts/color';

import '@/styles/App.css';

function App() {
    return (
        <>
            <CheckMarkButton onClick={(checked) => console.log('clicked', checked)} bgColor={buttonColors[0]} />
            <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
        </>
    );
}

export default App;
