import { useParams, Link } from 'react-router-dom'
import { allLessons } from '../data/lessons'
import styles from './ComingSoon.module.css'

export default function ComingSoon() {
    const { id } = useParams()
    const lesson = allLessons.find(l => l.id === id)

    return (
        <main className={styles.page}>
            <div className={styles.container}>
                {/* Decorative background elements */}
                <div className={styles.bgDecor}>
                    <div className={styles.circle1} />
                    <div className={styles.circle2} />
                    <div className={styles.circle3} />
                </div>

                <div className={styles.content}>
                    <div className={styles.iconWrap}>
                        <span className={styles.icon}>🚧</span>
                    </div>

                    <h1 className={styles.title}>컨텐츠 제작 중</h1>

                    {lesson && (
                        <div className={styles.lessonInfo}>
                            <span className={styles.badge}>
                                {lesson.icon} {lesson.grade}
                            </span>
                            <h2 className={styles.lessonTitle}>{lesson.title}</h2>
                            <p className={styles.chapter}>{lesson.chapter}</p>
                        </div>
                    )}

                    <p className={styles.desc}>
                        아직 이 단원의 학습 콘텐츠가 준비되지 않았습니다.<br />
                        곧 멋진 인터랙티브 수학 학습이 제공될 예정이에요! ✨
                    </p>

                    <div className={styles.progress}>
                        <div className={styles.progressBar}>
                            <div className={styles.progressFill} />
                        </div>
                        <span className={styles.progressLabel}>제작 진행 중...</span>
                    </div>

                    <Link to="/" className={styles.backBtn}>
                        ← 학습 목록으로 돌아가기
                    </Link>
                </div>
            </div>
        </main>
    )
}
