export interface TriviaQuestion {
    category: string,
    correctAnswer: string,
    difficulty: string,
    answers: Array<string>,
    question: string,
    type: string
}