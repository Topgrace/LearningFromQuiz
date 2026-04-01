import { useState } from 'react'
import { Link } from 'react-router-dom'
import { curriculum } from '../data/lessons'
import styles from './Home.module.css'

/* 구현 완료된 lesson ID 세트 */
const IMPLEMENTED = new Set(['1-1-01-01'])

export default function Home() {
    const [activeTab, setActiveTab] = useState(0)
    const [openChapters, setOpenChapters] = useState({})

    const semester = curriculum[activeTab]

    const toggleChapter = (chapterId) => {
        setOpenChapters(prev => ({
            ...prev,
            [chapterId]: !prev[chapterId],
        }))
    }

    const totalLessons = semester.chapters.reduce((sum, ch) => sum + ch.lessons.length, 0)
    const implementedCount = semester.chapters.reduce(
        (sum, ch) => sum + ch.lessons.filter(l => IMPLEMENTED.has(l.id)).length, 0
    )

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

            {/* Semester Tabs */}
            <section className={styles.curriculumSection}>
                <h2 className={styles.sectionTitle}>학습 단원</h2>

                <div className={styles.tabBar} role="tablist">
                    {curriculum.map((sem, i) => (
                        <button
                            key={sem.id}
                            role="tab"
                            aria-selected={i === activeTab}
                            className={`${styles.tab} ${i === activeTab ? styles.tabActive : ''}`}
                            style={{ '--tab-color': sem.color }}
                            onClick={() => {
                                setActiveTab(i)
                                setOpenChapters({})
                            }}
                        >
                            <span className={styles.tabIcon}>{sem.icon}</span>
                            <span className={styles.tabLabel}>{sem.title}</span>
                        </button>
                    ))}
                </div>

                {/* Semester Header */}
                <div className={styles.semesterHeader} style={{ '--sem-color': semester.color }}>
                    <div className={styles.semesterInfo}>
                        <span className={styles.semesterIcon}>{semester.icon}</span>
                        <div>
                            <h3 className={styles.semesterTitle}>{semester.grade}</h3>
                            <p className={styles.semesterMeta}>
                                {semester.chapters.length}개 단원 · {totalLessons}개 소단원
                                {implementedCount > 0 && (
                                    <span className={styles.readyBadge}>
                                        {implementedCount}개 학습 가능
                                    </span>
                                )}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Chapters Accordion */}
                <div className={styles.chapterList}>
                    {semester.chapters.map((chapter, ci) => {
                        const isOpen = openChapters[chapter.id]
                        const chapterImpl = chapter.lessons.filter(l => IMPLEMENTED.has(l.id)).length

                        return (
                            <div
                                key={chapter.id}
                                className={`${styles.chapter} ${isOpen ? styles.chapterOpen : ''}`}
                                style={{
                                    '--sem-color': semester.color,
                                    animationDelay: `${ci * 0.04}s`,
                                }}
                            >
                                <button
                                    className={styles.chapterHeader}
                                    onClick={() => toggleChapter(chapter.id)}
                                    aria-expanded={isOpen}
                                >
                                    <div className={styles.chapterLeft}>
                                        <span className={styles.chapterNumber}>
                                            {String(ci + 1).padStart(2, '0')}
                                        </span>
                                        <span className={styles.chapterTitle}>
                                            {chapter.title.replace(/^\d+\.\s*/, '')}
                                        </span>
                                        {chapterImpl > 0 && (
                                            <span className={styles.chapterBadge}>
                                                {chapterImpl}/{chapter.lessons.length}
                                            </span>
                                        )}
                                    </div>
                                    <span className={styles.chapterToggle}>
                                        {isOpen ? '−' : '+'}
                                    </span>
                                </button>

                                {isOpen && (
                                    <ul className={styles.lessonList}>
                                        {chapter.lessons.map((lesson, li) => {
                                            const isImpl = IMPLEMENTED.has(lesson.id)
                                            return (
                                                <li
                                                    key={lesson.id}
                                                    className={styles.lessonItem}
                                                    style={{ animationDelay: `${li * 0.05}s` }}
                                                >
                                                    <Link
                                                        to={isImpl
                                                            ? `/lesson/${lesson.id}`
                                                            : `/coming-soon/${lesson.id}`
                                                        }
                                                        className={`${styles.lessonLink} ${isImpl ? styles.lessonReady : styles.lessonLocked}`}
                                                    >
                                                        <span className={styles.lessonDot}>
                                                            {isImpl ? '●' : '○'}
                                                        </span>
                                                        <span className={styles.lessonTitle}>
                                                            {lesson.title}
                                                        </span>
                                                        {isImpl ? (
                                                            <span className={styles.lessonArrow}>→</span>
                                                        ) : (
                                                            <span className={styles.lessonLock}>준비 중</span>
                                                        )}
                                                    </Link>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                )}
                            </div>
                        )
                    })}
                </div>
            </section>
        </main>
    )
}
