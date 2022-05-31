async function addQuoteFormHandler(event){
  event.preventDefault();

  const description = document.querySelector('#newQuoteText').value.trim();
  const author = document.querySelector('#newQuoteAuthor').value.trim();
  const user_id = Math.floor(Math.random() * 3) +1 //CHANGE LATER FOR LOG IN ID
  const category_id = document.querySelector('#newQuoteCategory').value;
  

  if (description) {
    const response = await fetch('/api/quotes/', {
      method: 'POST',
      body: JSON.stringify({
        description,
        author,
        user_id,
        category_id
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.reload();
      window.alert("Quote Has Been Posted");
    } else {
      alert(response.statusText);
    }
  }
}

document.querySelector('#addNewQuote').addEventListener('click', addQuoteFormHandler);
