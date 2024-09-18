import { getBackEndHost } from '../utils/get-backend-host'

type PendingGoalsRespnse = {
  id: string
  title: string
  desiredWeeklyFrequency: number
  completionCount: number
}[]

export async function getPendingGoals(): Promise<PendingGoalsRespnse> {
  const response = await fetch(`${getBackEndHost()}/pending-goals`)
  const data = await response.json()

  return data.pendingGoals
}
