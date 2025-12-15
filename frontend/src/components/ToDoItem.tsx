
interface Props {
	id: number
	text: string
	completed : boolean
	toggleComplete: (id: number) => void
}

export default function ToDoItem({ id, text, completed, toggleComplete }: Props) {
	return <li style={{ textDecoration: completed ? "line-through" : "none" }}>
		<span onClick={() => toggleComplete(id)}>{text}</span>
	</li>
}
