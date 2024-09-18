import { getBackEndHost } from '../utils/get-backend-host'

interface UndoGoalCompletionRequest {
  completionId: string
}

export async function undoGoalCompletion({
  completionId,
}: UndoGoalCompletionRequest) {
  await fetch(`${getBackEndHost()}/completions/${completionId}`, {
    method: 'DELETE',
  })
}
