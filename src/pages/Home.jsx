import LessonCard from '../components/LessonCard/LessonCard'
import { allLessons } from '../data/lessons'
import styles from './Home.module.css'

export default function Home() {
    return (
        <main className={styles.home}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <span className={styles.badge}>중학교 수학 📐</span>
                    <h1 className={styles.heroTitle}>
                        수학,{' '}
                        <span className={styles.gradientText}>탐험</span>하며
                        <br />배우자!
                    </h1>
                    <p className={styles.heroDesc}>
                        단계별 인터랙티브 학습으로 수학 개념을 쉽고 재미있게 이해해요.
                        각 단계를 완료하며 다음 내용을 열어보세요!
                    </p>
                </div>
                <div className={styles.heroDecor}>
                    <span className={styles.floatingEmoji} style={{ animationDelay: '0s' }}>📊</span>
                    <span className={styles.floatingEmoji} style={{ animationDelay: '1s' }}>🔢</span>
                    <span className={styles.floatingEmoji} style={{ animationDelay: '2s' }}>📐</span>
                    <span className={styles.floatingEmoji} style={{ animationDelay: '0.5s' }}>✏️</span>
                </div>
            </section>

            {/* Lessons Grid */}
            <section className={styles.lessons}>
                <h2 className={styles.sectionTitle}>학습 단원</h2>
                <div className={styles.grid}>
                    {allLessons.map((lesson, i) => (
                        <LessonCard key={lesson.id} lesson={lesson} index={i} />
                    ))}
                </div>
            </section>
        </main>
    )
}
