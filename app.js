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
        newTask.innerHTML = `<input type="checkbox" id="checkComplete"> Task ${taskCount}: ${taskInput.value}`
        displayTask.appendChild(newTask)
        taskInput.value = ''
        taskCount++

        const checkbox = newTask.querySelector('input[type="checkbox"]')
        checkbox.addEventListener('change',()=>{
            newTask.classList.toggle('completed', checkbox.checked)
        })
    }
})