import { useState, useCallback, useMemo } from 'react'
import { useParams, Link } from 'react-router-dom'
import { lessonData } from '../data/lessons'
import { MathDisplay } from '../components/MathBlock/MathBlock'
import StepQuiz from '../components/Quiz/StepQuiz'
import styles from './Lesson.module.css'

export default function Lesson() {
    const { id } = useParams()
    const [currentStep, setCurrentStep] = useState(0)

    // For now single lesson; extend with lookup later
    const lesson = lessonData
    const step = lesson.steps[currentStep]
    const totalSteps = lesson.steps.length
    const progress = ((currentStep + 1) / totalSteps) * 100

    const handleCorrect = useCallback(() => {
        if (currentStep < totalSteps - 1) {
            setCurrentStep(prev => prev + 1)
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }
    }, [currentStep, totalSteps])

    const isComplete = step.type === 'complete'

    return (
        <main className={styles.lesson}>
            {/* Top bar */}
            <div className={styles.topBar}>
                <Link to="/" className={styles.backBtn}>← 목록</Link>
                <div className={styles.progressInfo}>
                    <span className={styles.stepLabel}>
                        {currentStep + 1} / {totalSteps}
                    </span>
                </div>
            </div>

            {/* Progress bar */}
            <div className={styles.progressBar}>
                <div
                    className={styles.progressFill}
                    style={{ width: `${progress}%` }}
                />
            </div>

            {/* Lesson header */}
            <div className={styles.header}>
                <span className={styles.chapter}>{lesson.chapter}</span>
                <h1 className={styles.title}>{lesson.title}</h1>
            </div>

            {/* Step content */}
            <article className={styles.stepCard} key={step.id}>
                <div className={styles.stepHeader}>
                    <span className={styles.stepNumber}>
                        {step.type === 'definition' && '📌'}
                        {step.type === 'concept' && '💡'}
                        {step.type === 'explore' && '🔍'}
                        {step.type === 'summary' && '📋'}
                        {step.type === 'complete' && '🎉'}
                        {!['definition', 'concept', 'explore', 'summary', 'complete'].includes(step.type) && `Step ${step.id}`}
                    </span>
                    <h2 className={styles.stepTitle}>{step.title}</h2>
                </div>

                <div className={styles.stepContent}>
                    <ContentRenderer content={step.content} />
                </div>

                {step.highlight && (
                    <div className={styles.highlight}>
                        <span className={styles.highlightIcon}>✨</span>
                        <p className={styles.highlightText}>{step.highlight}</p>
                    </div>
                )}

                {step.math && (
                    <MathDisplay math={step.math} />
                )}

                {step.tableData && (
                    <DivisorTable data={step.tableData} />
                )}

                {step.classification && (
                    <ClassificationChart data={step.classification} />
                )}

                {step.action && (
                    <StepQuiz action={step.action} onCorrect={handleCorrect} />
                )}

                {isComplete && (
                    <div className={styles.completeSection}>
                        <div className={styles.completeEmoji}>🏆</div>
                        <p className={styles.completeText}>
                            모든 단계를 완료했습니다!
                        </p>
                        <Link to="/" className={styles.homeBtn}>
                            홈으로 돌아가기
                        </Link>
                    </div>
                )}
            </article>
        </main>
    )
}

/* Bold text renderer: **text** → <strong> */
function ContentRenderer({ content }) {
    const parts = content.split(/(\*\*[^*]+\*\*)/)
    return (
        <p className={styles.contentText}>
            {parts.map((part, i) => {
                if (part.startsWith('**') && part.endsWith('**')) {
                    return <strong key={i} className={styles.bold}>{part.slice(2, -2)}</strong>
                }
                return <span key={i}>{part}</span>
            })}
        </p>
    )
}

/* Divisor table */
function DivisorTable({ data }) {
    return (
        <div className={styles.tableWrap}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>자연수</th>
                        <th>약수</th>
                        <th>약수의 개수</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, i) => (
                        <tr key={i} style={{ animationDelay: `${i * 0.05}s` }}>
                            <td className={styles.numberCell}>{row.number}</td>
                            <td>{row.divisors.join(', ')}</td>
                            <td>
                                <span className={`${styles.countBadge} ${row.count === 2 ? styles.primeBadge : ''
                                    }`}>
                                    {row.count}개
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

/* Classification chart */
function ClassificationChart({ data }) {
    return (
        <div className={styles.classification}>
            {Object.entries(data).map(([key, value], i) => (
                <div
                    key={key}
                    className={styles.classCard}
                    style={{ animationDelay: `${i * 0.15}s` }}
                >
                    <h4 className={styles.classLabel}>{key}</h4>
                    <p className={styles.classValue}>{value}</p>
                </div>
            ))}
        </div>
    )
}
