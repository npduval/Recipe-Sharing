



const searchfunction= async () =>{

const search = document.getElementById("search").value.trim();

if (search) {
  
  const response = await fetch('/api/recipes/search', {
    method: 'GET',
    body: JSON.stringify({ search }),
    headers: { 'Content-Type': 'application/json' },
  });

}  else {
  alert('Please enter a valid search');
}

};

document.getElementById('search-button').addEventListener('click', searchfunction);