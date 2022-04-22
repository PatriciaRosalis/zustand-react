import { useEffect } from 'react';
import './App.css';
import Input from './components/Input';
import People from './components/People';
import { useSettingsStore } from './store';

function App() {
    const toggleTheme = useSettingsStore((state) => state.toggleDarkTheme);
    const dark = useSettingsStore((state) => state.darkTheme);

    useEffect(() => {
        if (dark) {
            document.querySelector('body').classList.add('dark');
        } else {
            document.querySelector('body').classList.remove('dark');
        }
    }, [dark]);

    return (
        <div className='App'>
            <button onClick={toggleTheme}>
                {dark ? 'Light Mode' : 'Dark Mode'}
            </button>
            <h1>PEOPLE!</h1>
            <Input />
            <People />
        </div>
    );
}

export default App;
