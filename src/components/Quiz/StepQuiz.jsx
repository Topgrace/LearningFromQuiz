import { useState, useCallback, useRef, useEffect } from 'react'
import { InlineMath } from 'react-katex'
import 'katex/dist/katex.min.css'
import styles from './StepQuiz.module.css'

/* 수식 패턴이 포함되면 KaTeX, 아니면 plain text */
const MATH_PATTERN = /[\^\\]|frac|times|sqrt|cdot/
function OptionText({ text }) {
    if (MATH_PATTERN.test(text)) {
        return <span className={styles.optionText}><InlineMath math={text} /></span>
    }
    return <span className={styles.optionText}>{text}</span>
}

export default function StepQuiz({ action, onCorrect }) {
    const [selected, setSelected] = useState(null)
    const [showResult, setShowResult] = useState(false)
    const [isCorrect, setIsCorrect] = useState(false)
    const feedbackRef = useRef(null)

    useEffect(() => {
        if (showResult && feedbackRef.current) {
            setTimeout(() => {
                feedbackRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
            }, 100)
        }
    }, [showResult])

    const handleSelect = useCallback((index) => {
        if (showResult) return
        setSelected(index)
        const correct = index === action.correctIndex
        setIsCorrect(correct)
        setShowResult(true)
    }, [action.correctIndex, showResult, onCorrect])

    const handleRetry = useCallback(() => {
        setSelected(null)
        setShowResult(false)
        setIsCorrect(false)
    }, [])

    if (action.type === 'classify') {
        return <ClassifyQuiz action={action} onCorrect={onCorrect} />
    }

    return (
        <div className={styles.quiz}>
            <p className={styles.question}>{action.question}</p>
            <div className={styles.options}>
                {action.options.map((option, i) => (
                    <button
                        key={i}
                        className={`${styles.option} ${selected === i
                            ? isCorrect
                                ? styles.correct
                                : styles.wrong
                            : ''
                            } ${showResult && isCorrect && i === action.correctIndex ? styles.correctAnswer : ''}`}
                        onClick={() => handleSelect(i)}
                        disabled={showResult}
                    >
                        <OptionText text={option} />
                    </button>
                ))}
            </div>
            {showResult && (
                <div ref={feedbackRef} className={`${styles.feedback} ${isCorrect ? styles.feedbackCorrect : styles.feedbackWrong}`}>
                    <span className={styles.feedbackIcon}>
                        {isCorrect ? '🎉' : '💡'}
                    </span>
                    <div>
                        <p className={styles.feedbackTitle}>
                            {isCorrect ? '정답입니다!' : '아쉽지만 틀렸어요'}
                        </p>
                        {isCorrect && (
                            <p className={styles.feedbackExplanation}>
                                {action.explanation}
                            </p>
                        )}
                    </div>
                    {isCorrect ? (
                        <button className={styles.nextBtn} onClick={onCorrect}>
                            다음 단계로 →
                        </button>
                    ) : (
                        <button className={styles.retryBtn} onClick={handleRetry}>
                            다시 풀기
                        </button>
                    )}
                </div>
            )}
        </div>
    )
}

function ClassifyQuiz({ action, onCorrect }) {
    const [answers, setAnswers] = useState({})
    const [showResult, setShowResult] = useState(false)
    const [allCorrect, setAllCorrect] = useState(false)
    const feedbackRef = useRef(null)

    useEffect(() => {
        if (showResult && feedbackRef.current) {
            setTimeout(() => {
                feedbackRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
            }, 100)
        }
    }, [showResult])

    const handleClassify = (number, type) => {
        if (showResult) return
        setAnswers(prev => ({ ...prev, [number]: type }))
    }

    const handleCheck = () => {
        const correct = action.numbers.every(num => {
            const ans = answers[num]
            if (action.answers.prime.includes(num)) return ans === 'prime'
            if (action.answers.composite.includes(num)) return ans === 'composite'
            return false
        })
        setAllCorrect(correct)
        setShowResult(true)
    }

    const handleRetry = () => {
        setAnswers({})
        setShowResult(false)
        setAllCorrect(false)
    }

    const allAnswered = action.numbers.every(n => answers[n])

    return (
        <div className={styles.quiz}>
            <p className={styles.question}>{action.question}</p>
            <div className={styles.classifyGrid}>
                {action.numbers.map(num => (
                    <div key={num} className={styles.classifyItem}>
                        <span className={styles.classifyNumber}>{num}</span>
                        <div className={styles.classifyBtns}>
                            <button
                                className={`${styles.classifyBtn} ${styles.primeBtn} ${answers[num] === 'prime' ? styles.selected : ''
                                    } ${showResult && action.answers.prime.includes(num) ? styles.correctAnswer : ''}`}
                                onClick={() => handleClassify(num, 'prime')}
                                disabled={showResult}
                            >
                                소수
                            </button>
                            <button
                                className={`${styles.classifyBtn} ${styles.compositeBtn} ${answers[num] === 'composite' ? styles.selected : ''
                                    } ${showResult && action.answers.composite.includes(num) ? styles.correctAnswer : ''}`}
                                onClick={() => handleClassify(num, 'composite')}
                                disabled={showResult}
                            >
                                합성수
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            {!showResult && (
                <button
                    className={styles.checkBtn}
                    onClick={handleCheck}
                    disabled={!allAnswered}
                >
                    확인하기 ✓
                </button>
            )}
            {showResult && (
                <div ref={feedbackRef} className={`${styles.feedback} ${allCorrect ? styles.feedbackCorrect : styles.feedbackWrong}`}>
                    <span className={styles.feedbackIcon}>
                        {allCorrect ? '🎉' : '💡'}
                    </span>
                    <p className={styles.feedbackTitle}>
                        {allCorrect ? '모두 맞았습니다! 완벽해요!' : '다시 한번 생각해 보세요!'}
                    </p>
                    {allCorrect ? (
                        <button className={styles.nextBtn} onClick={onCorrect}>
                            다음 단계로 →
                        </button>
                    ) : (
                        <button className={styles.retryBtn} onClick={handleRetry}>
                            다시 풀기
                        </button>
                    )}
                </div>
            )}
        </div>
    )
}
