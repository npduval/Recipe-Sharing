



const searchfunction= async (event) =>{

const search = document.getElementById("search").value.trim();
const container = document.getElementById("container");

event.preventDefault();

if (search) {
  
  const response = await fetch('/api/recipes/search', {
    method: 'POST',
    body: JSON.stringify({ search }),
    headers: { 'Content-Type': 'application/json' },
  });

  const data = await response.json();

  container.textContent = '';

  const ul = document.createElement('ul');

  data.forEach(element => {
    const li = document.createElement('li');

    li.textContent = element.name;

    ul.appendChild(li);
  });

  container.appendChild(ul);

}  else {
  alert('Please enter a valid search');
}

};

document.getElementById('search-button').addEventListener('click', searchfunction);