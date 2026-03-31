import { useTheme } from '../../context/ThemeContext'
import styles from './Header.module.css'

export default function Header() {
    const { theme, toggleTheme } = useTheme()

    return (
        <header className={styles.header}>
            <div className={styles.inner}>
                <a href="#/" className={styles.logo}>
                    <span className={styles.logoIcon}>π</span>
                    <span className={styles.logoText}>수학 탐험</span>
                </a>
                <button
                    className={styles.themeToggle}
                    onClick={toggleTheme}
                    aria-label={`${theme === 'light' ? '다크' : '라이트'} 모드로 전환`}
                >
                    <span className={styles.themeIcon}>
                        {theme === 'light' ? '🌙' : '☀️'}
                    </span>
                </button>
            </div>
        </header>
    )
}
