import { useEffect, useState } from "react";
import { Switch } from "@headlessui/react";
import { FaSun, FaMoon } from "react-icons/fa";

function Modes() {
    const [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove(darkMode ? 'light' : 'dark');
        root.classList.add(darkMode ? 'dark' : 'light');
    }, [darkMode]);

    return (
        <div className="mr-10">
            <Switch
                checked={darkMode}
                onChange={setDarkMode}
                className={`${darkMode ? 'bg-gray-700' : 'bg-gray-200'}
                    relative inline-flex items-center h-6 rounded-full w-11`}
            >
                <span className="sr-only">Toggle Dark Mode</span>
                <span
                    className={`${darkMode ? 'translate-x-6' : 'translate-x-1'}
                        inline-block w-4 h-4 transform bg-white rounded-full transition-transform`}
                />
                <span className="absolute left-1 flex items-center justify-center w-4 h-4 text-500">
                    {darkMode ? <FaSun color="burlywood" /> : <FaMoon color="black" />}
                </span>
            </Switch>
        </div>
    );
}

export default Modes;
