/* 소인수분해 - 거듭제곱 학습 데이터 */

export const exponentiationData = {
    id: 'exponentiation',
    title: '거듭제곱',
    chapter: '대단원 I. 소인수분해',
    grade: '중학교 1학년',
    icon: '🔢',
    description: '같은 수를 여러 번 곱하는 것을 거듭제곱으로 나타내고, 밑과 지수의 뜻을 이해합니다.',

    steps: [
        {
            id: 1,
            title: '같은 수의 곱',
            type: 'concept',
            content: '같은 수를 여러 번 곱하는 경우를 살펴봅시다. 예를 들어, 2를 여러 번 곱하면 다음과 같습니다.',
            highlight: '같은 수를 반복해서 곱하는 것을 간단히 나타내는 방법이 있을까요?',
            math: '2 \\times 2 = 4, \\quad 2 \\times 2 \\times 2 = 8, \\quad 2 \\times 2 \\times 2 \\times 2 = 16',
            action: {
                type: 'choice',
                question: '3 × 3 × 3 × 3 의 값은?',
                options: ['12', '27', '81', '243'],
                correctIndex: 2,
                explanation: '3 × 3 = 9, 9 × 3 = 27, 27 × 3 = 81 입니다.'
            }
        },
        {
            id: 2,
            title: '⭐ 거듭제곱의 정의',
            type: 'definition',
            content: '같은 수나 문자를 여러 번 곱한 것을 **거듭제곱**이라 하고, 곱하는 수의 오른쪽 위에 곱한 횟수를 작게 써서 나타냅니다.',
            highlight: '거듭제곱 = 같은 수를 여러 번 곱한 것을 간단히 나타낸 것',
            math: '2 \\times 2 \\times 2 = 2^3 \\quad \\text{← 2를 3번 곱한 것}',
            action: {
                type: 'choice',
                question: '5 × 5 × 5 를 거듭제곱으로 나타내면?',
                options: ['5^2', '5^3', '5^4', '5^5'],
                correctIndex: 1,
                explanation: '5를 3번 곱했으므로 5³으로 나타냅니다.'
            }
        },
        {
            id: 3,
            title: '⭐ 밑과 지수',
            type: 'definition',
            content: '거듭제곱에서 **곱하는 수**를 **밑**이라 하고, **곱한 횟수**를 **지수**라고 합니다.',
            highlight: '밑(base) = 곱하는 수, 지수(exponent) = 곱하는 횟수',
            math: 'a^n = \\underbrace{a \\times a \\times \\cdots \\times a}_{n\\text{개}} \\quad \\text{에서 } a \\text{: 밑, } n \\text{: 지수}',
            action: {
                type: 'choice',
                question: '7⁴ 에서 지수는?',
                options: ['4', '7', '28', '2401'],
                correctIndex: 0,
                explanation: '7⁴에서 7은 밑이고, 4는 지수(곱하는 횟수)입니다.'
            }
        },
        {
            id: 4,
            title: '거듭제곱 값 탐구',
            type: 'explore',
            content: '여러 수의 거듭제곱 값을 표로 정리해 보고, 값이 어떻게 커지는지 관찰해 봅시다.',
            highlight: '같은 밑이라도 지수가 커지면 값이 매우 빠르게 커집니다!',
            math: null,
            powerTableData: {
                bases: [2, 3, 5, 10],
                exponents: [2, 3, 4],
                values: {
                    2: [4, 8, 16],
                    3: [9, 27, 81],
                    5: [25, 125, 625],
                    10: [100, 1000, 10000],
                }
            },
            action: {
                type: 'choice',
                question: '3⁴ 의 값은?',
                options: ['12', '27', '81', '64'],
                correctIndex: 2,
                explanation: '3⁴ = 3 × 3 × 3 × 3 = 81 입니다.'
            }
        },
        {
            id: 5,
            title: '거듭제곱으로 나타내기',
            type: 'concept',
            content: '같은 수의 곱셈식을 보고 거듭제곱으로 나타내는 연습을 해 봅시다.',
            highlight: '곱하는 수 → 밑, 곱한 횟수 → 지수',
            math: '7 \\times 7 = 7^2, \\quad 4 \\times 4 \\times 4 = 4^3, \\quad a \\times a \\times a \\times a \\times a = a^5',
            action: {
                type: 'choice',
                question: '6 × 6 × 6 × 6 을 거듭제곱으로 나타내면?',
                options: ['6^2', '6^3', '6^4', '6^6'],
                correctIndex: 2,
                explanation: '6을 4번 곱했으므로 6⁴으로 나타냅니다.'
            }
        },
        {
            id: 6,
            title: '거듭제곱 풀어쓰기',
            type: 'concept',
            content: '반대로 거듭제곱을 **곱셈식으로 풀어쓰고** 그 값을 구할 수 있습니다.',
            highlight: '거듭제곱 → 곱셈식 → 값 계산',
            math: '3^4 = 3 \\times 3 \\times 3 \\times 3 = 81, \\quad 10^3 = 10 \\times 10 \\times 10 = 1000',
            action: {
                type: 'choice',
                question: '2⁵ 를 곱셈식으로 풀면?',
                options: [
                    '2 × 5',
                    '2 × 2 × 2 × 2',
                    '2 × 2 × 2 × 2 × 2',
                    '2 × 2 × 2 × 2 × 2 × 2'
                ],
                correctIndex: 2,
                explanation: '2⁵은 2를 5번 곱한 것이므로 2 × 2 × 2 × 2 × 2 입니다. (값은 32)'
            }
        },
        {
            id: 7,
            title: '지수가 1인 경우',
            type: 'concept',
            content: '지수가 **1**이면 밑을 **1번** 곱한 것이므로 **밑 그 자체**와 같습니다. 이때 지수 1은 보통 생략하여 씁니다.',
            highlight: 'a¹ = a (1번 곱하면 자기 자신!)',
            math: '5^1 = 5, \\quad 100^1 = 100, \\quad a^1 = a',
            action: {
                type: 'choice',
                question: '다음 중 올바른 것은?',
                options: ['2^1 = 1', '3^1 = 3', '5^1 = 0', '1^1 = 2'],
                correctIndex: 1,
                explanation: 'a¹ = a 이므로 3¹ = 3 입니다.'
            }
        },
        {
            id: 8,
            title: '주의! 밑이 같아야 해요',
            type: 'concept',
            content: '거듭제곱은 반드시 **같은 수**끼리의 곱일 때만 사용할 수 있습니다. 밑이 다른 수의 곱은 거듭제곱으로 나타낼 수 없습니다.',
            highlight: '⚠️ 거듭제곱은 반드시 같은 수끼리의 곱!',
            math: '2 \\times 3 \\times 2 \\neq 2^3 \\quad (\\because \\text{밑이 모두 같지 않음})',
            action: {
                type: 'choice',
                question: '다음 중 거듭제곱으로 나타낼 수 있는 것은?',
                options: ['2 × 3', '4 × 4 × 4', '5 × 6', '2 × 3 × 5'],
                correctIndex: 1,
                explanation: '4 × 4 × 4 은 같은 수 4를 3번 곱한 것이므로 4³으로 나타낼 수 있습니다. 나머지는 밑이 다릅니다.'
            }
        },
        {
            id: 9,
            title: '밑이 분수인 거듭제곱',
            type: 'concept',
            content: '밑은 자연수뿐만 아니라 **분수**도 될 수 있습니다. 분수의 거듭제곱은 분수를 여러 번 곱한 것입니다. 이때 **괄호**를 사용하여 밑을 나타냅니다.',
            highlight: '분수의 거듭제곱에서는 반드시 괄호를 사용합니다!',
            math: '\\left(\\dfrac{1}{2}\\right)^3 = \\dfrac{1}{2} \\times \\dfrac{1}{2} \\times \\dfrac{1}{2} = \\dfrac{1}{8}',
            action: {
                type: 'choice',
                question: '(2/3)² 의 값은?',
                options: [
                    '\\frac{2}{3}',
                    '\\frac{4}{9}',
                    '\\frac{4}{6}',
                    '\\frac{2}{9}'
                ],
                correctIndex: 1,
                explanation: '(2/3)² = (2/3) × (2/3) = 4/9 입니다. 분자끼리, 분모끼리 각각 곱합니다.'
            }
        },
        {
            id: 10,
            title: '정리',
            type: 'summary',
            content: '거듭제곱의 핵심 개념을 정리해 봅시다.',
            highlight: '거듭제곱은 같은 수의 반복 곱셈을 간단히 나타내는 방법!',
            math: null,
            classification: {
                '거듭제곱': 'aⁿ = a × a × ⋯ × a (n번)',
                '밑 (a)': '곱하는 수 (자연수, 분수 등)',
                '지수 (n)': '곱하는 횟수'
            },
            action: {
                type: 'choice',
                question: '2³ × 3² 의 값은?',
                options: ['12', '36', '72', '108'],
                correctIndex: 2,
                explanation: '2³ = 8, 3² = 9 이므로 2³ × 3² = 8 × 9 = 72 입니다.'
            }
        },
        {
            id: 11,
            title: '🎉 학습 완료!',
            type: 'complete',
            content: '축하합니다! **거듭제곱**의 개념을 모두 학습했습니다.',
            highlight: '잘 하셨습니다! 🎊',
            math: null,
            action: null
        }
    ]
}
