const wrapper = document.querySelector(".wrapper"),
    editableInput = wrapper.querySelector(".editable"),
    readonlyInput = wrapper.querySelector(".readonly"),
    placeholder = wrapper.querySelector(".placeholder"),
    counter = wrapper.querySelector(".counter");


editableInput.onkeyup = (e) => {
    let element = e.target;
    validated(element);
}
editableInput.onkeypress = (e) => {
    let element = e.target;
    validated(element);
    placeholder.style.display = "none";
}

function validated(element) {
    let text;
    let currentlength = element.innerText.length;

    if (currentlength <= 0) {
        placeholder.style.display = "block";
        counter.style.display = "none";
    } else {
        placeholder.style.display = "none";
        counter.style.display = "block";
    }

    counter.innerText = currentlength;

}