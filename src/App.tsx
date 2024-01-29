import { useState } from 'react';
import { TodoType } from '.';

import { Card } from "flowbite-react";
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';

import './App.css';

const App = () => {
	const [todos, setTodos] = useState<TodoType[]>([]);
	const storage = localStorage.getItem("todos");

	if (storage) {
		setTodos(JSON.parse(storage));
	}

	const addTodo = (todo: TodoType) => {
		const newTodos: TodoType[] = [...todos, todo];

		localStorage.setItem("todos", JSON.stringify(newTodos));

		setTodos(newTodos);
	}

	const completeTodo = (index: number) => {
		const newTodos: TodoType[] = [...todos];

		newTodos[index].isCompleted = true;

		localStorage.setItem("todos", JSON.stringify(newTodos));

		setTodos(newTodos);
	}

	const removeTodo = (index: number) => {
		const newTodos: TodoType[] = [...todos];

		newTodos.splice(index, 1);

		localStorage.setItem("todos", JSON.stringify(newTodos));

		setTodos(newTodos);
	}

	return (
		<div className="flex h-screen items-center justify-center bg-sky-400">
			<Card className='w-[500px]'>
				{ todos.map((todo: TodoType, index: number) => (
					<Todo 
						key={index} 
						todo={todo}
						index={index}
						completeTodo={() => completeTodo(index)}
						removeTodo={() => removeTodo(index)}
					/>
				)) }

				<TodoForm addTodo={addTodo} />
			</Card>
		</div>
	);
}

export default App;
