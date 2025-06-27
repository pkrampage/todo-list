const taskInput = document.getElementById('taskInput')
const warnTxt = document.getElementById('warningText')
const submitTaskBtn = document.getElementById('submitTask')
const displayTask = document.getElementById('displayTask')

let taskCount = 1

submitTaskBtn.addEventListener('click', () => {
    // Event listener test
    // console.log("test") 

    // Document manipulator test
    // displayTask.innerText = taskInput.value

    if(taskInput.value === ''){
        // console.warn(`Task is empty!`) condition test
        warnTxt.style.display = `block`
        warnTxt.textContent = `Task is empty!`
    }else{
        warnTxt.style.display = `none`
        displayTask.style.display = `block`
        const newTask = document.createElement('p')
        newTask.innerHTML = `<input type="checkbox" id="checkComplete"> Task ${taskCount}: ${taskInput.value} <button class="delTask">Delete Task</button>`
        displayTask.appendChild(newTask)
        taskInput.value = ''

        updateTaskNumbers()

        const checkbox = newTask.querySelector('input[type="checkbox"]')
        checkbox.addEventListener('change',()=>{
            newTask.classList.toggle('completed', checkbox.checked)
        })
        
        const deleteTask = newTask.querySelector('.delTask')
        deleteTask.addEventListener('click',()=>{
            newTask.remove()
            if(taskCount===1){
               displayTask.style.display = `none`
            }
            updateTaskNumbers()
        })
    }
})

// Used VS Code Copilot to help verify that task indices update correctly after deleting a previous task.

updateTaskNumbers = () => {
    const tasks = displayTask.querySelectorAll('p')
    tasks.forEach((task, idx) => {
        // เก็บสถานะ checked ของ checkbox เดิม
        const oldCheckbox = task.querySelector('input[type="checkbox"]')
        const wasChecked = oldCheckbox ? oldCheckbox.checked : false
        // อัปเดต innerHTML ใหม่
        task.innerHTML = `<input type="checkbox" id="checkComplete"> Task ${idx+1}: ${task.textContent.replace(/Task \d+:/, '').replace(/Delete Task/, '').trim()} <button class="delTask">Delete Task</button>`
        // เซ็ต checked กลับไปตามเดิม
        const checkbox = task.querySelector('input[type="checkbox"]')
        checkbox.checked = wasChecked
        checkbox.addEventListener('change', () => {
            task.classList.toggle('completed', checkbox.checked)
        })
        const deleteTask = task.querySelector('.delTask')
        deleteTask.addEventListener('click', () => {
            task.remove()
            if (displayTask.children.length === 0) {
                displayTask.style.display = `none`
            }
            updateTaskNumbers()
        })
    })
}