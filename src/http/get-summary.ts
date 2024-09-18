import { getBackEndHost } from '../utils/get-backend-host'

type SummaryResponse = {
  completed: number
  total: number
  goalsPerDay: Record<
    string,
    {
      id: string
      title: string
      completedAt: string
    }[]
  >
}

export async function getSummary(): Promise<SummaryResponse> {
  const response = await fetch(`${getBackEndHost()}/summary`)
  const data = await response.json()

  return data.summary
}
