



function searchfunction() {

const search = document.getElementById("search").value.trim();

if (search) {

  console.log('made it this far!');
  
  document.location.replace('/search');

}  else {
  alert('Please enter a valid search');
}

};

document.getElementById('search-button').addEventListener('click', searchfunction);