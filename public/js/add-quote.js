$(document).ready(function() {
	async function addQuoteFormHandler(event) {
		event.preventDefault();

		const description = document.querySelector('#newQuoteText').value.trim();
		const author = document.querySelector('#newQuoteAuthor').value.trim();
		// const user_id = Math.floor(Math.random() * 3) +1 //CHANGE LATER FOR LOG IN ID
		const category_id = document.querySelector('#newQuoteCategory').value;

		if (description && author && category_id != "0") {
			const response = await fetch('/api/quotes/add', {
				method: 'POST',
				body: JSON.stringify({ description, author, category_id }),
				headers: { 'Content-Type': 'application/json' }
			});
			if (response.ok) {
				document.location.replace('/');
				window.alert('Quote has been added!');
			} else {
				alert(response.statusText);
			}
		}else{
            if  (!(description || author || category_id != "0")){
            alert('quote, author and category fields required!') 
            }else if (!description){
                alert('*quote field required!')
            }else if (!author){
                alert('*author field required!')
             }else if (!category_id == "0"){
                alert('*category field required!')
            }
        }
	}

	document.querySelector('.new-quote-form').addEventListener('submit', addQuoteFormHandler);
});
