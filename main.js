var resumeForm = document.getElementById('resumeForm');  // Corrected the ID here (resumeForm instead of resumeform)
var resumeOutput = document.getElementById('resumeOutput');  // Corrected the ID here (resumeOutput instead of resumeoutput)

function generateResume(data) {
    console.log(data); // Check the data being passed
    return `
        <h2>Generated Resume</h2>
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
    resumeForm.addEventListener('submit', function (event) {
        console.log('Form submitted'); // Debugging log
        event.preventDefault(); // Prevent page reload

        // Get values from form fields
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var education = document.getElementById('education').value;
        var experience = document.getElementById('experience').value;
        var skills = document.getElementById('skills').value;
        var description = document.getElementById('description').value;

        // Generate and update the resume content
        if (resumeOutput) {
            resumeOutput.innerHTML = generateResume({
                name: name,
                email: email,
                education: education,
                experience: experience,
                skills: skills,
                description: description
            });

            console.log('Generated Resume:', resumeOutput.innerHTML); // Check if the output is updating
        }

        // Add event listener to the "Edit Resume" button
        var editButton = document.getElementById('editResume');
        if (editButton) {
            editButton.addEventListener('click', function () {
                document.getElementById('name').value = name;
                document.getElementById('email').value = email;
                document.getElementById('education').value = education;
                document.getElementById('experience').value = experience;
                document.getElementById('skills').value = skills;
                document.getElementById('description').value = description;

                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }
    });
} else {
    console.log('Form or output div not found in the DOM.');
}
