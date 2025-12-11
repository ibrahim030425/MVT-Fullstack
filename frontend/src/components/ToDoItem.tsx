
interface Props {
	id: number
	text: string
	toogleComplete: (id: number) => void
}

export default function ToDoItem({ id, text }: Props) {
	return <li>
		<span onClick={() => toogleComplete(id)}>{text}</span>
	</li>
}
