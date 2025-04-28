document.getElementById('innovationForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        idea: formData.get('idea')
    };

    const response = await fetch('/submit-innovation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });

    if (response.ok) {
        alert('Idea submitted successfully!');
        e.target.reset();
    } else {
        alert('Failed to submit. Try again!');
    }
});
