import { Link } from 'react-router-dom'
import styles from './LessonCard.module.css'

export default function LessonCard({ lesson, index }) {
    const isLocked = lesson.locked

    return (
        <Link
            to={isLocked ? '#' : `/lesson/${lesson.id}`}
            className={`${styles.card} ${isLocked ? styles.locked : ''}`}
            style={{
                '--card-color': lesson.color,
                animationDelay: `${index * 0.1}s`
            }}
            onClick={(e) => isLocked && e.preventDefault()}
        >
            <div className={styles.iconWrap}>
                <span className={styles.icon}>{lesson.icon}</span>
            </div>
            <div className={styles.content}>
                <span className={styles.chapter}>{lesson.chapter}</span>
                <h3 className={styles.title}>{lesson.title}</h3>
                <p className={styles.desc}>{lesson.description}</p>
            </div>
            <div className={styles.footer}>
                <span className={styles.grade}>{lesson.grade}</span>
                {isLocked ? (
                    <span className={styles.lockBadge}>🔒 준비 중</span>
                ) : (
                    <span className={styles.stepBadge}>{lesson.totalSteps} 단계</span>
                )}
            </div>
            {!isLocked && <div className={styles.arrow}>→</div>}
        </Link>
    )
}
