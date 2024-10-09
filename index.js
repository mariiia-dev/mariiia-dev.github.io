// Ініціалізація масиву для зберігання справ
let todos = [];

// Функція для додавання нової справи
const newTodo = () => {
    const input = document.getElementById("todo-input");
    const todoText = input.value.trim();
    if (todoText) {
        todos.push({ text: todoText, completed: false });
        input.value = ""; // Очищуємо поле вводу
        render();
        updateCounter();
    }
};

// Функція для створення HTML рядка з елементом <li>
const renderTodo = (todo, index) => {
    return `
        <li>
            <input type="checkbox" onchange="checkTodo(${index})" ${todo.completed ? 'checked' : ''}>
            <label>${todo.text}</label>
            <button onclick="deleteTodo(${index})">Видалити</button>
        </li>
    `;
};

// Функція для рендерингу списку
const render = () => {
    const todoList = document.getElementById("todo-list");
    todoList.innerHTML = todos.map(renderTodo).join("");
};

// Функція для оновлення лічильників
const updateCounter = () => {
    const totalCount = document.getElementById("total-count");
    const incompleteCount = document.getElementById("incomplete-count");
    totalCount.textContent = todos.length;
    incompleteCount.textContent = todos.filter(todo => !todo.completed).length;
};

// Функція для видалення справи
const deleteTodo = (index) => {
    todos.splice(index, 1); // Видаляємо справу з масиву
    render();
    updateCounter();
};

// Функція для перевірки справи
const checkTodo = (index) => {
    todos[index].completed = !todos[index].completed; // Зміна стану справи
    render();
    updateCounter();
};

// Додаємо слухач події для кнопки "Додати"
document.getElementById("add-todo").addEventListener("click", newTodo);
