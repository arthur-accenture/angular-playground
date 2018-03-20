enum Difficulty { easy, medium, hard };
enum TriviaType { multiple, boolean }
export interface TriviaOptions{
    numerOfQuestions?: number,
    category?: number,
    difficulty?: Difficulty,
    type?: TriviaType 
}