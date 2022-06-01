//functionality for the serachbar and search button in navbar.handlebars
async function resultQuotes(event) {
  event.preventDefault();

  const value = document.querySelector('#text-query').value.trim() 
  const authorSelected = document.querySelector('#option-author')
  const keyWordSelected = document.querySelector('#option-keyword')

  if(authorSelected.checked ===true){
  console.log('Author Query =' + value)
} else if (keyWordSelected.checked === true){
  console.log('Keyword Query =' + value)
} else {
  window.alert('Make a choice')
}





    // const response = await fetch(`/results/${value}`);
    
    // if (response.ok) {
    //   document.location.replace(`/results/${value}`);

    //   console.log('data was fetched from' + value)

    // } else {
    //   alert(response.statusText);
    // }



  }



document.querySelector('#search-btn').addEventListener('click', resultQuotes);
