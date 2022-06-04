
const randomQuote = async () => {
	const response = await fetch('/api/quotes/day');
	const data = await response.json(); //extract JSON from the http response
	return data;
};
