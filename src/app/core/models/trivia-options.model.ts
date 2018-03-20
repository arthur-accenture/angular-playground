export enum Difficulty { easy, medium, hard };
export enum TriviaType { multiple, boolean }
export interface TriviaOptions{
    numerOfQuestions?: number,
    category?: number,
    difficulty?: Difficulty,
    type?: TriviaType 
}