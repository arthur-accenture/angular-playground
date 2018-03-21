export interface TriviaQuestion {
    id: number,
    category: string,
    correctAnswer: string,
    difficulty: string,
    answers: Array<string>,
    text: string,
    type: string,
    selectedAnswer?: string,
    isCorrect?: boolean
}