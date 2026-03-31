/* 소인수분해 - 소수와 합성수 학습 데이터 */

export const lessonData = {
    id: 'prime-composite',
    title: '소수와 합성수',
    chapter: '대단원 I. 소인수분해',
    grade: '중학교 1학년',
    icon: '🔢',
    description: '1보다 큰 자연수를 소수와 합성수로 분류하고, 그 성질을 이해합니다.',

    steps: [
        {
            id: 1,
            title: '자연수의 세계',
            type: 'concept',
            content: '우리가 사용하는 수 중에서 **1, 2, 3, 4, 5, ...** 과 같이 물건을 셀 때 사용하는 수를 **자연수**라고 합니다.',
            highlight: '자연수는 1부터 시작하는 수입니다.',
            math: null,
            action: {
                type: 'choice',
                question: '다음 중 자연수가 아닌 것은?',
                options: ['3', '0', '15', '100'],
                correctIndex: 1,
                explanation: '0은 자연수가 아닙니다. 자연수는 1, 2, 3, ... 처럼 1부터 시작합니다.'
            }
        },
        {
            id: 2,
            title: '약수란 무엇인가?',
            type: 'concept',
            content: '어떤 자연수를 나누어떨어지게 하는 수를 그 수의 **약수**라고 합니다.',
            highlight: '나누어떨어진다 = 나머지가 0',
            math: '6 \\div 1 = 6,\\quad 6 \\div 2 = 3,\\quad 6 \\div 3 = 2,\\quad 6 \\div 6 = 1',
            action: {
                type: 'choice',
                question: '6의 약수가 아닌 것은?',
                options: ['1', '2', '4', '6'],
                correctIndex: 2,
                explanation: '6 ÷ 4 = 1 ... 2 로 나누어떨어지지 않으므로 4는 6의 약수가 아닙니다. 6의 약수는 1, 2, 3, 6 입니다.'
            }
        },
        {
            id: 3,
            title: '약수의 개수',
            type: 'explore',
            content: '각 자연수의 약수를 모두 찾아보고, **약수의 개수**에 주목해 봅시다.',
            highlight: '약수의 개수에 따라 수를 분류할 수 있습니다!',
            math: null,
            tableData: [
                { number: 1, divisors: [1], count: 1 },
                { number: 2, divisors: [1, 2], count: 2 },
                { number: 3, divisors: [1, 3], count: 2 },
                { number: 4, divisors: [1, 2, 4], count: 3 },
                { number: 5, divisors: [1, 5], count: 2 },
                { number: 6, divisors: [1, 2, 3, 6], count: 4 },
                { number: 7, divisors: [1, 7], count: 2 },
                { number: 8, divisors: [1, 2, 4, 8], count: 4 },
                { number: 9, divisors: [1, 3, 9], count: 3 },
                { number: 10, divisors: [1, 2, 5, 10], count: 4 },
            ],
            action: {
                type: 'choice',
                question: '약수가 정확히 2개인 수는 어떤 특징이 있나요?',
                options: [
                    '짝수이다',
                    '1과 자기 자신만 약수이다',
                    '홀수이다',
                    '10보다 작다'
                ],
                correctIndex: 1,
                explanation: '약수가 정확히 2개인 수(2, 3, 5, 7)는 1과 자기 자신만을 약수로 가집니다. 이런 수를 **소수**라고 합니다!'
            }
        },
        {
            id: 4,
            title: '⭐ 소수의 정의',
            type: 'definition',
            content: '**1보다 큰 자연수** 중에서 **1과 자기 자신만을 약수로 가지는 수**를 **소수(Prime Number)**라고 합니다.',
            highlight: '소수 = 약수가 정확히 2개 (1과 자기 자신)',
            math: '\\text{소수의 예: } 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, \\cdots',
            action: {
                type: 'choice',
                question: '다음 중 소수인 것은?',
                options: ['1', '9', '11', '15'],
                correctIndex: 2,
                explanation: '11의 약수는 1과 11 뿐이므로 소수입니다. 1은 소수가 아니고, 9 = 3×3, 15 = 3×5 이므로 소수가 아닙니다.'
            }
        },
        {
            id: 5,
            title: '1은 소수일까?',
            type: 'concept',
            content: '1의 약수는 1 뿐입니다. 즉, 약수가 **1개**입니다. 소수는 약수가 **정확히 2개**인 수이므로, **1은 소수가 아닙니다.**',
            highlight: '⚠️ 1은 소수도, 합성수도 아닙니다!',
            math: '1 \\text{의 약수} = \\{1\\} \\quad \\Rightarrow \\quad \\text{약수의 개수} = 1',
            action: {
                type: 'choice',
                question: '1이 소수가 아닌 이유는?',
                options: [
                    '짝수가 아니어서',
                    '너무 작아서',
                    '약수가 1개뿐이어서',
                    '0으로 나눌 수 있어서'
                ],
                correctIndex: 2,
                explanation: '소수는 약수가 정확히 2개인 수인데, 1은 약수가 1개(자기 자신)뿐이므로 소수가 아닙니다.'
            }
        },
        {
            id: 6,
            title: '⭐ 합성수의 정의',
            type: 'definition',
            content: '**1보다 큰 자연수** 중에서 **소수가 아닌 수**, 즉 **1과 자기 자신 외에 다른 약수를 가지는 수**를 **합성수(Composite Number)**라고 합니다.',
            highlight: '합성수 = 약수가 3개 이상인 수',
            math: '\\text{합성수의 예: } 4, 6, 8, 9, 10, 12, 14, 15, \\cdots',
            action: {
                type: 'choice',
                question: '다음 중 합성수인 것은?',
                options: ['2', '7', '12', '23'],
                correctIndex: 2,
                explanation: '12의 약수는 1, 2, 3, 4, 6, 12로 6개입니다. 약수가 3개 이상이므로 합성수입니다.'
            }
        },
        {
            id: 7,
            title: '자연수의 분류 정리',
            type: 'summary',
            content: '1보다 큰 자연수는 **소수** 또는 **합성수**로 분류됩니다. 1은 소수도 합성수도 아닙니다.',
            highlight: '모든 자연수 = {1} + {소수} + {합성수}',
            math: null,
            classification: {
                '1': '소수도 합성수도 아님',
                '소수': '2, 3, 5, 7, 11, 13, ...',
                '합성수': '4, 6, 8, 9, 10, 12, ...'
            },
            action: {
                type: 'classify',
                question: '다음 수들을 소수와 합성수로 분류해 보세요!',
                numbers: [2, 4, 7, 9, 11, 15, 17, 20],
                answers: {
                    prime: [2, 7, 11, 17],
                    composite: [4, 9, 15, 20]
                }
            }
        },
        {
            id: 8,
            title: '2는 특별한 소수',
            type: 'concept',
            content: '**2는 소수 중 유일한 짝수**입니다. 2보다 큰 짝수는 모두 2를 약수로 가지므로 합성수입니다.',
            highlight: '2 = 유일한 짝수 소수 🌟',
            math: '4 = 2 \\times 2, \\quad 6 = 2 \\times 3, \\quad 8 = 2 \\times 4, \\quad \\cdots',
            action: {
                type: 'choice',
                question: '2보다 큰 짝수가 모두 합성수인 이유는?',
                options: [
                    '크기가 크니까',
                    '모두 2를 약수로 가지니까',
                    '홀수가 아니니까',
                    '3의 배수이니까'
                ],
                correctIndex: 1,
                explanation: '2보다 큰 짝수는 1과 자기 자신 외에 2를 약수로 가지므로, 약수가 3개 이상이 되어 합성수입니다.'
            }
        },
        {
            id: 9,
            title: '🎉 학습 완료!',
            type: 'complete',
            content: '축하합니다! **소수와 합성수**의 개념을 모두 학습했습니다.',
            highlight: '잘 하셨습니다! 🎊',
            math: null,
            action: null
        }
    ]
}

export const allLessons = [
    {
        id: 'prime-composite',
        title: '소수와 합성수',
        chapter: '대단원 I. 소인수분해',
        grade: '중학교 1학년',
        icon: '🔢',
        description: '1보다 큰 자연수를 소수와 합성수로 분류하기',
        totalSteps: 9,
        color: 'hsl(230, 85%, 60%)',
    },
    {
        id: 'prime-factorization',
        title: '소인수분해',
        chapter: '대단원 I. 소인수분해',
        grade: '중학교 1학년',
        icon: '🌳',
        description: '자연수를 소인수의 곱으로 나타내기',
        totalSteps: 0,
        color: 'hsl(280, 70%, 55%)',
        locked: true,
    },
    {
        id: 'gcf-lcm',
        title: '최대공약수와 최소공배수',
        chapter: '대단원 I. 소인수분해',
        grade: '중학교 1학년',
        icon: '🔗',
        description: '소인수분해를 이용한 최대공약수와 최소공배수 구하기',
        totalSteps: 0,
        color: 'hsl(170, 70%, 45%)',
        locked: true,
    }
]
