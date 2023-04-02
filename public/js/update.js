const updateFormHandler = async (event) => {
    event.preventDefault();

    console.log("Update Form submitted");

    const formName = document.querySelector('#project-name').value.trim();
    const instructions = document.querySelector('#inputInstructionsTextArea').value.trim();


    const textId = event.target.getAttribute('data-id');
    const input = JSON.stringify({ formName, instructions })

    console.log(input)
    console.log(textId)

    if (formName && instructions) {
        const response = await fetch(`/api/projects/${textId}`, {
        method: 'PUT',
        body: input,
        headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
        document.location.replace(`/project/${textId}`);
        } else {
            console.log(response);
            alert(response.statusText);
        }
    }
};

document
.querySelector('.update-form')
.addEventListener('submit', updateFormHandler);