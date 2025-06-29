/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */

import type { ArticleState } from './ArticleState'
export type CreateArticleInput = {
  content: string
  /**
   * When creating, it is better to use Draft
   */
  state: ArticleState
  tags: Array<string>
  title: string
}
