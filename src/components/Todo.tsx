import { TodoProps } from "..";

import { Button } from "flowbite-react";


const Todo: React.FC<TodoProps> = ({ todo, index, completeTodo, removeTodo }) => {
	return (
		<div className="flex items-center">
			<p
				className='justify-start'
				style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
			>
				{ todo.text }
			</p>

			<div className='flex ml-auto'>
				{ !todo.isCompleted && (
					<Button 
						className='mr-2 bg-green-400 hover:bg-green-500' 
						onClick={() => completeTodo(index)}
					>Complete</Button>
				) }
				
				<Button 
					className="bg-red-500 hover:bg-red-600" 
					onClick={() => removeTodo(index)}
				>x</Button>
			</div>
		</div>
	);
}

export default Todo;