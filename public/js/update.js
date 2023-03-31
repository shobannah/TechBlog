const updateFormHandler = async (event) => {
    event.preventDefault();

    console.log("Update Form submitted");

    const formName = document.querySelector('textarea[name="project.title"]').value;
    const instructions = document.querySelector('textarea[name="project.description"]').value;
    

    const textId = event.target.getAttribute('data-id');
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