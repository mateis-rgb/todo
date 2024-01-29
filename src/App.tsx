import { useState } from 'react';
import { TodoType } from '.';

import { Card } from "flowbite-react";
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';

import './App.css';

const App = () => {
	const [todos, setTodos] = useState<TodoType[]>([]);

	const addTodo = (todo: TodoType) => {
		const newTodos: TodoType[] = [...todos, todo];

		setTodos(newTodos);
	}

	const completeTodo = (index: number) => {
		const newTodos: TodoType[] = [...todos];

		newTodos[index].isCompleted = true;

		setTodos(newTodos);
	}

	const removeTodo = (index: number) => {
		const newTodo: TodoType[] = [...todos];

		newTodo.splice(index, 1);

		setTodos(newTodo);
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
