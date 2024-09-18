import { getBackEndHost } from '../utils/get-backend-host'

export async function createGoalCompletion(goalId: string) {
  await fetch(`${getBackEndHost()}/completions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      goalId,
    }),
  })
}
