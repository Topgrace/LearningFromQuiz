import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/**
 * Vite Plugin: KaTeX Font Optimization
 *
 * 빌드 시 KaTeX CSS의 @font-face를 최적화합니다:
 * 1. .woff / .ttf 폰트 참조를 제거 (woff2만 유지) → ~880 KB 절감
 * 2. font-display: block → swap 변경 (FOIT 방지, 수식 로딩 UX 개선)
 *
 * node_modules를 수정하지 않으므로 KaTeX 업그레이드 시에도 안전합니다.
 */
function katexFontOptimize() {
    return {
        name: 'vite-plugin-katex-font-optimize',
        enforce: 'pre',
        transform(code, id) {
            // KaTeX CSS 파일만 대상
            if (!id.includes('katex') || !id.endsWith('.css')) return null

            const optimized = code
                // @font-face src에서 woff, ttf 참조 제거 (woff2만 유지)
                .replace(
                    /,url\([^)]+\.woff\)\s*format\("woff"\),url\([^)]+\.ttf\)\s*format\("truetype"\)/g,
                    ''
                )
                // font-display: block → swap (텍스트 먼저 표시, 폰트 나중에 적용)
                .replace(/font-display:\s*block/g, 'font-display:swap')

            return optimized !== code ? { code: optimized, map: null } : null
        }
    }
}

export default defineConfig({
    plugins: [katexFontOptimize(), react()],
    base: '/',
})
