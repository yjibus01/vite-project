// component/TodoList.jsx (So simple version)
export default function TodoLlist({ todos}) {
    if (!todos.length) return <p>아직 아무것도 없어요 🙌</p>;
    return (
        <ul>
            {todos.map(t => <li key={t.id}>{t.text}</li>)}
        </ul>
    );
}