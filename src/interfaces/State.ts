import { IArticle } from "./Article";

export interface IState {
    loader: boolean;
    articles: IArticle[];
    error: boolean;
}