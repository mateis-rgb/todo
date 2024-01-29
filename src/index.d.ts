export type TodoType = {
	text: string
	isCompleted: boolean
}

export interface TodoProps {
	todo: TodoType
	index: number
	completeTodo: (index: number) => void
	removeTodo: (index: number) => void
}

export interface TodoFormProps {
	addTodo: (todo: TodoType) => void
}