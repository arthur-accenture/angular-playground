export enum Difficulty { easy, medium, hard };
export enum TriviaType { multiple, boolean }
export interface TriviaOptions{
    amount: number,
    category?: number,
    difficulty?: Difficulty,
    type?: TriviaType 
}