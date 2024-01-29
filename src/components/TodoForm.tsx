import { useState } from "react";
import { TodoFormProps } from "..";

import { TextInput } from "flowbite-react";

const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
	const [value, setValue] = useState("");

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!value) return;

		addTodo({ text: value, isCompleted: false });
		setValue("");
	}

	return (
		<form onSubmit={(e) => handleSubmit(e)}>
			<TextInput type='text' value={value} onChange={(e) => setValue(e.target.value)}></TextInput>
		</form>
	);
}

export default TodoForm;