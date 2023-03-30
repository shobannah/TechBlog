const updateFormHandler = async (event) => {
    event.preventDefault();

    console.log("Update Form submitted");

    const formName = document.querySelector('#project-name').value.trim();
    const instructions = document.querySelector('#project-desc').value.trim();
    

    const textId = event.target.dataset.textId;
    const text = JSON.stringify({ formName, instructions })

    console.log(text)

    if (formName && instructions) {
        const response = await fetch(`/api/projects/${textId}`, {
        method: 'PUT',
        body: text,
        headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
        document.location.replace(`/api/projects/${textId}`);
        } else {
            console.log(response);
            alert(response.statusText);
        }
    }
};

document
.querySelector('.update-form')
.addEventListener('submit', updateFormHandler);