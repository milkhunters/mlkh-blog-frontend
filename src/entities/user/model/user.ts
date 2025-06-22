export interface User {
  id: string
  username: string
  email: string
  firstName: string
  lastName: string
  state: 'active' | 'inactive' | 'banned' | 'deleted'
  createdAt: Date
  updatetAt: Date
}
