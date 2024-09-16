interface UndoGoalCompletionRequest {
  completionId: string
}

export async function undoGoalCompletion({
  completionId,
}: UndoGoalCompletionRequest) {
  await fetch(`http://localhost:3333/completions/${completionId}`, {
    method: 'DELETE',
  })
}
