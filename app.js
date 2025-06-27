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
        newTask.textContent = `Task ${taskCount}: ${taskInput.value}`
        displayTask.appendChild(newTask)
        taskInput.value = ''
        taskCount++
    }
})