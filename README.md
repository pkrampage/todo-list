# To-Do List Project

Vanilla JavaScript

A Bottom-Up Guide by Gemini 2.5 Flash

Building a To-Do List is an excellent project for solidifying your vanilla JavaScript skills, especially around CRUD (Create, Read, Update, Delete) operations. This guide will walk you through the logic, necessary tools, and functions in a bottom-up manner, without providing specific code.

---

## Phase 1: Adding New To-Do Items

**Goal:** Allow users to type a task into an input field and add it as a new item to a list.

* **Logic:**
    * You'll have an input field (`<input type="text">`) for user input.
    * An "Add Task" button (`<button>`) will trigger the action.
    * When the "Add" button is clicked:
        1.  Retrieve the text from the input field.
        2.  Create a new HTML list item element (e.g., `<li>` or `<div>`).
        3.  Insert the task text into this new element.
        4.  Append this new task element to your main To-Do list container (e.g., `<ul>` or a dedicated `<div>`).
        5.  Clear the input field after adding the task, ready for the next entry.
    * **Edge Case:** Consider preventing the addition of empty tasks.

* **Tools/Functions to Consider:**
    * **DOM Selection:**
        * `document.getElementById()` (for unique elements like input, button, list container)
    * **Event Handling:**
        * `element.addEventListener('click', ...)` (for the "Add" button)
    * **Getting Input Value:**
        * `inputElement.value`
    * **DOM Creation:**
        * `document.createElement()` (e.g., `document.createElement('li')`)
    * **DOM Appending:**
        * `parentElement.appendChild(childElement)` (to add the new task to the list)
    * **Conditional Logic:**
        * `if` statement (to check if input is empty)

---

## Phase 2: Marking To-Do Items as Complete

**Goal:** Allow users to mark a task as done (e.g., by clicking on it or a checkbox).

* **Logic:**
    * Each to-do item needs a mechanism to be marked as complete. This could be:
        * A dedicated "Complete" button next to each task.
        * A checkbox (`<input type="checkbox">`) associated with each task.
        * Making the task text itself clickable to toggle completion.
    * When a task is marked:
        1.  Change its visual appearance (e.g., apply a strikethrough, change background color) to indicate its completed status.
        2.  Implement a toggle feature: clicking it again should un-mark it.

* **Tools/Functions to Consider:**
    * **Event Handling:**
        * `element.addEventListener('click', ...)` (on the complete button, checkbox, or the task element itself).
    * **DOM Manipulation (for styling):**
        * `element.classList.add('completed')`
        * `element.classList.remove('completed')`
        * `element.classList.toggle('completed')` (highly recommended for toggling!)
    * **Identifying the Clicked Element:**
        * The `event` object in your event listener (`event.target`) will point to the element that was clicked.

---

## Phase 3: Deleting To-Do Items

**Goal:** Allow users to remove tasks from the list.

* **Logic:**
    * Each to-do item should have a "Delete" button or icon (e.g., an "X").
    * When a delete button is clicked:
        1.  Identify *which specific task* the clicked button belongs to.
        2.  Remove that entire task element from the DOM.

* **Tools/Functions to Consider:**
    * **Event Handling:**
        * `element.addEventListener('click', ...)` (on the delete button).
    * **DOM Traversal:** How do you get from the clicked delete button to its parent task element?
        * `element.parentNode` (to get the direct parent)
        * `element.closest('.task-item-class')` (to find the nearest ancestor with a specific class - very useful!)
    * **DOM Removal:**
        * `parentElement.removeChild(childElement)`
        * `childElement.remove()` (a more modern and often simpler way to remove an element directly)

---

## Phase 4: Storing To-Do Items (Persistence)

**Goal:** Make the to-do list save its state so that items are not lost when the page is refreshed or the browser is closed.

* **Logic:**
    * Whenever a task is added, marked complete, or deleted, your *entire* list of to-do items needs to be saved.
    * When the web page *loads*, you must retrieve any saved list and display it in the UI.
    * **Key Concept:** You cannot directly store HTML elements. Instead, you'll store the *data* for each to-do item (e.g., its text, whether it's complete, a unique ID) as a JavaScript array of objects. When displaying, you'll loop through this array to dynamically create the HTML elements.

* **Tools/Functions to Consider:**
    * **Web Storage API:**
        * `localStorage.setItem(key, value)`: To save data.
        * `localStorage.getItem(key)`: To retrieve data.
    * **JSON (JavaScript Object Notation):** `localStorage` only stores data as strings. You'll need to convert your JavaScript arrays/objects to JSON strings for storage, and parse them back when retrieving.
        * `JSON.stringify(jsObject)`: Converts a JavaScript object/array to a JSON string.
        * `JSON.parse(jsonString)`: Converts a JSON string back to a JavaScript object/array.
    * **Array Methods (for data management):**
        * `array.push()`: To add new tasks to your internal array.
        * `array.splice()`: For removing tasks by index.
        * `array.find()` or `array.map()`: For updating a property (like `isCompleted`) of a specific task object within your array.
    * **Event Handling (for loading):**
        * `window.addEventListener('DOMContentLoaded', ...)`: To ensure your load function runs once the HTML is fully loaded.
    * **Function for Rendering:** A dedicated function to clear the current displayed list and re-render all tasks from your internal data array. This keeps your UI in sync with your data.
    * **Unique IDs:** Implement a way to generate a unique ID for each task (e.g., using a timestamp or a simple counter) to easily identify and manipulate them within your data array.

---

## Progress

* [x] **Phase 1**:  Adding New To-Do Items
* [ ] **Phase 2**: Marking To-Do Items as Complete
* [ ] **Phase 3**: Deleting To-DO Items
* [ ] **Phase 4**: Storing To-Do Items (Persistence)

---

## General Advice for Working Bottom-Up on Your To-Do List:

1.  **Work on One Phase at a Time:** Get Phase 1 working perfectly before moving to Phase 2, and so on.
2.  **`console.log()` is Your Best Friend:** Use `console.log()` constantly to inspect your variables (especially your internal task array) and confirm your logic is behaving as expected after every interaction.
3.  **Separate Concerns with Functions:** Create small, focused functions for distinct pieces of logic (e.g., `createTaskElement()`, `addTask()`, `deleteTask()`, `saveTasks()`, `loadTasks()`, `renderTasks()`). This makes your code modular and easier to debug.
4.  **Test Relentlessly:** After each phase, test all interactions thoroughly. Try common actions, edge cases (empty input, no items), and ensure everything works as expected.
5.  **Plan Your HTML:** Before writing JavaScript, create the basic HTML structure for your input field, button, and the container for your list items. Give them appropriate IDs or classes.

This structured approach will help you build a robust To-Do List step-by-step, understanding each piece of logic along the way. Embrace the learning process!
