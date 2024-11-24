const resumeForm = document.getElementById('resumeform') as HTMLInputElement | null;
const resumeOutput = document.getElementById('resumeOutput') as HTMLInputElement | null;

function generateResume(data: {
    name: string;
    email: string;
    education: string;
    skills: string;
    experience: string;
    description: string;
}) {
    console.log(data);  // Check the data being passed
    return `
        <h2>Generate Resume</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Education:</strong> ${data.education}</p>
        <p><strong>Experience:</strong> ${data.experience}</p>
        <p><strong>Skills:</strong> ${data.skills}</p>
        <p><strong>Description:</strong> ${data.description}</p>
        <button id="editResume">Edit Resume</button>
    `;
}

if (resumeForm && resumeOutput) {
    resumeForm.addEventListener('submit', (event) => {
        console.log('Form submitted');  // Debugging log
        event.preventDefault();

        const name = (document.getElementById('name') as HTMLInputElement).value;
        const email = (document.getElementById('email') as HTMLInputElement).value;
        const education = (document.getElementById('education') as HTMLInputElement).value;
        const experience = (document.getElementById('experience') as HTMLInputElement).value;
        const skills = (document.getElementById('skills') as HTMLInputElement).value;
        const description = (document.getElementById('description') as HTMLInputElement).value;

        if (resumeOutput) {
            resumeOutput.innerHTML = generateResume({ name, email, education, experience, skills, description });
            console.log(resumeOutput.innerHTML);  // Check if the output is updating
        }

        const editButton = document.getElementById('editResume') as HTMLButtonElement;
        if (editButton) {
            editButton.addEventListener('click', () => {
                (document.getElementById('name') as HTMLInputElement).value = name;
                (document.getElementById('email') as HTMLInputElement).value = email;
                (document.getElementById('education') as HTMLInputElement).value = education;
                (document.getElementById('experience') as HTMLInputElement).value = experience;
                (document.getElementById('skills') as HTMLInputElement).value = skills;
                (document.getElementById('description') as HTMLInputElement).value = description;

                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }
    });
} else {
    console.log('Form or output div not found in the DOM.');
}
