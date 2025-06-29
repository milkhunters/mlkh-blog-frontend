/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */

import type { ArticleState } from './ArticleState'
import type { RateState } from './RateState'
import type { Tag } from './Tag'
export type ArticleItem = {
  author_id: string
  created_at: string
  id: string
  poster_url?: string | null
  rating: number
  self_rate: RateState
  state: ArticleState
  tags: Array<Tag>
  title: string
  updated_at?: string | null
  views: number
}
