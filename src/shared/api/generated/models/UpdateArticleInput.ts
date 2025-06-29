/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */

import type { ArticleState } from './ArticleState'
/**
 * Update article by id.
 *
 * Update an `Article` by its `ArticleId`. Api will return updated `Article`.
 *
 */
export type UpdateArticleInput = {
  content: string
  poster?: string | null
  state: ArticleState
  tags: Array<string>
  title: string
}
