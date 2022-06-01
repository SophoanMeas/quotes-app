async function workQuotes(event) {
  event.preventDefault();

  const value = 1

    const response = await fetch(`/catego/${value}`);
    
    if (response.ok) {
      document.location.replace(`/catego/${value}`);

      console.log('data was fetched from' + value)

    } else {
      alert(response.statusText);
    }
  }

document.querySelector('#search-btn').addEventListener('click', workQuotes);
