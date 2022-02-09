const button = document.querySelector(".button-container");
const input = document.querySelector("#GET-name");
const errorElement = document.getElementById("error")
const label = document.createElement("label")



button.addEventListener("click", e => {
    label.classList.add("error-message")
    if (input.value === '' || input.value == null){
        label.innerText = "Please provide us a valid email"
        errorElement.append(label)
        input.focus()
        input.value = ''
        return
    }
    if(!input.value.includes("@")){
        label.innerText = "Please provide us a valid email"
        errorElement.append(label)
        input.focus()
        input.value = ''
        return
    }
    try{
        errorElement.removeChild(label)
    }catch{
        return
    }
})