"use client";

import { Button } from "@heroui/react";
import { useTheme } from "next-themes";
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeToggle = () => {

    const { theme, setTheme } = useTheme()

    return (
        <Button
            variant="ghost"
            size="icon"
            className={"rounded-full"}
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
            {
                theme === 'light' ?
                    <FaSun className="w-4 h-4 rotate-0 scale-100 dark:rotate-90 dark:scale-0" />
                    :
                    <FaMoon className="w-4 h-4 rotate-90 scale-0 dark:rotate-0 dark:scale-100" />
            }
        </Button>
    );
};

export default ThemeToggle;