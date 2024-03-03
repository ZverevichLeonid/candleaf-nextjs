import React from "react"
import { ToggleDeleteButton } from "./toggle-delete-button"

export const DeleteButton = ({ id, action }: { id: string; action: any }) => {
  const deleteWithId = action.bind(null, id)
  return (
    <form action={deleteWithId}>
      <ToggleDeleteButton />
    </form>
  )
}
