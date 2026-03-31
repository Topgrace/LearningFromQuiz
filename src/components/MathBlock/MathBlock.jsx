import 'katex/dist/katex.min.css'
import { InlineMath, BlockMath } from 'react-katex'
import styles from './MathBlock.module.css'

export function MathInline({ math }) {
    return (
        <span className={styles.inline}>
            <InlineMath math={math} />
        </span>
    )
}

export function MathDisplay({ math }) {
    return (
        <div className={styles.display}>
            <BlockMath math={math} />
        </div>
    )
}
