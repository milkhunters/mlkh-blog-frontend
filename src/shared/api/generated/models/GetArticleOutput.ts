/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ArticleFile } from './ArticleFile';
import type { ArticleState } from './ArticleState';
import type { RateState } from './RateState';
export type GetArticleOutput = {
    author_id: string;
    content: string;
    created_at: string;
    files: Array<ArticleFile>;
    poster?: string | null;
    rating: number;
    self_rate: RateState;
    state: ArticleState;
    tags: Array<string>;
    title: string;
    updated_at?: string | null;
    views: number;
};

