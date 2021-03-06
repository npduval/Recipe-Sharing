const newFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#recipe-name').value.trim();
    const instructions = document.querySelector('#recipe-desc').value.trim();
    const description = document.querySelector('#recipe-inst').value.trim();
    const ingredients = document.querySelector('#recipe-ingred').value.trim();
  
    if (name && instructions && description) {
      const response = await fetch(`/api/recipes`, {
        method: 'POST',
        body: JSON.stringify({ name, instructions, description, ingredients }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
       document.location.replace('/profile');
      } else {
        alert('Failed to create recipe');
      }
    }
  };
  
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/projects/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to delete project');
      }
    }
  };
  
  document
    .querySelector('.new-project-form')
    .addEventListener('submit', newFormHandler);

  