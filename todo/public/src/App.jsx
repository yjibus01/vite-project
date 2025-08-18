// App.jsx
import { useStae, useEffect } from 'react';
import TodoInput from './component/TodoInput';
import TodoList from './component/TodoList';

export default function App() {
    // R : 앱 켤 때 할 일 목록을 불러오기(없으면 빈 배열 [])
    const [todos, setTodos] = useState(() => {
        const stored = localStorage.getItem('todos');
        return stored ? JSON.parse(stored) : [];
    });

    // R : 할 일 목록이 변경될 때마다 로컬 스토리지에 저장
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    // C : 할 일 추가
    const addTodo = (Text) => {
        const addTodo = (text) => {
            const clean = text.trim();
            if (!clean) return; // 빈 문자열은 추가하지 않음
            setTodos([
                ...todos,
                {
                    id: Date.now(),
                    text: clean,
                    done: false
                }
            ]);
        };
    };

    return (
        <div style={{ padding: 20 }}>
            <h1>🌱아주 기본 To-Do (R & C)</h1>

            {/* C: 자식에게 "추가하기 리모컨" 전달 */}
            <TodoInput addTodo={addTodo} />

            {/* R : 현재 목록 보여주기 */}
            <TodoList todos={todos} />
        </div>
    );
}