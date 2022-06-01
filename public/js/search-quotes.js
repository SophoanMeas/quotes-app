async function searchQuotes(event) {
  event.preventDefault();

  const value = 3
  // document.querySelector('#text-query').value

  // if (keyword) {
    const response = await fetch(`/author/${value}`);
    
    // ?keyword=${keyword}`
    
 

    if (response.ok) {
      document.location.replace(`/author/${value}`);


      console.log('data was fetched from' + response)


    } else {
      alert(response.statusText);
    }
  }
// }


document.querySelector('#search-btn').addEventListener('click', searchQuotes);
