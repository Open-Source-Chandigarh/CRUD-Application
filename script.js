
    
    let button = document.getElementById('button')
    button.addEventListener('click' , addFile)
    let ul = document.getElementById("ultag")
    let emptyDivMessage = document.createElement('p')
    function addFile(e){
        if(ul.children[0].className == 'aesehi'){
            emptyDivMessage.remove()
        }

        let input = document.getElementById('input')
        
        let listItem = document.createElement('li')
        let inputValue = input.value

        // listItem.classList.add("list-group-item")

        listItem.className = 'list-group-item d-flex justify-content-between'

        listItem.innerHTML = `<p class="mb-0 flex-grow-1">${inputValue}</p>
            <button id="editbutton" class="btn mx-3 btn-sm btn-warning" onclick="editElement(this)" type="button">Update Your Task</button>
            <button id="removebutton" class="btn btn-sm btn-danger" onclick='removeElement(this)' type="button">Completed</button>`
        input.value='';

        // listItem.textContent = input.value
        ul.appendChild(listItem)

        
        }

    function removeElement(currentElement){
           currentElement.parentElement.remove()

           currentElement.previousElementSibling.type = 'Input'
            if(ul.children.length <= 0){
                
                emptyDivMessage.classList.add('aesehi')
                ul.appendChild(emptyDivMessage)

                emptyDivMessage.innerHTML = `<p>Have some Work bruh... &#128514;</p>`
                 
            }
        }
        
    function editElement(currentElement){

        let newInput = document.createElement('input')

        if(currentElement.textContent === 'Update Your Task') {

        currentElement.textContent = 'Save'
        currentElement.classList.remove('btn-warning')
        currentElement.classList.add('btn-info')
        let currentChaptername = currentElement.previousElementSibling.textContent
        
        newInput.type = 'text'
        newInput.className = 'form-control py-0'
        newInput.value = currentChaptername

        currentElement.parentElement.replaceChild( newInput , currentElement.previousElementSibling ) 
        }

        else{

            
            currentElement.textContent = 'Update Your Task'
            currentElement.classList.remove('btn-info')
            currentElement.classList.add('btn-warning')
            let newText = document.createElement('p')
            newText.className = 'mb-0 flex-grow-1'
            newText.textContent = currentElement.previousElementSibling.value
            currentElement.parentElement.replaceChild(  newText , currentElement.previousElementSibling)

        }
    }


    function myFunction() {
        var element = document.body;
        element.classList.toggle("dark-mode");
      }
