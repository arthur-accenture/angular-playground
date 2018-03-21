export interface TriviaQuestion {
    category: string,
    correctAnswer: string,
    difficulty: string,
    answers: Array<string>,
    text: string,
    type: string
}