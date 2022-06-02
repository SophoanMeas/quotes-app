const resultHandler = (event) => {
	const btnClick = event.currentTarget;
	const id = btnClick.dataset.value;

    const res = await fetch(`/api/quotes/category/${id}`,{
        method: 'GET',
        body: JSON.stringify({description, author, created_at, username, category_name}),
        headers:{'Content-Type': 'application/json'}
    })
    if (res.ok){
        document.location.replace('/')
      }else{
        alert('Failed to log in.')
      }

};
