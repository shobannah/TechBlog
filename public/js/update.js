const updateFormHandler = async (event) => {
    event.preventDefault();

    console.log("Update Form submitted");

    const formName = document.querySelector('#project-name').value.trim();
    const instructions = document.querySelector('#inputInstructionsTextArea').value.trim();
    

    const textId = event.target.dataset.textId;
    const input = JSON.stringify({ formName, instructions })

    console.log(input)

    if (formName && instructions) {
        const response = await fetch(`/api/project/${textId}`, {
        method: 'PUT',
        body: input,
        headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
        document.location.replace(`/api/project/${textId}`);
        } else {
            console.log(response);
            alert(response.statusText);
        }
    }
};

document
.querySelector('.update-form')
.addEventListener('submit', updateFormHandler);