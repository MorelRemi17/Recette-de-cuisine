const searchInput = document.getElementById('searchInput');
const results = document.getElementById('results');
const randomMeal = document.getElementById('randomMeal');

let search = ' ';

const fetchSearch = async () => {
	meals = fetch(
		`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
		.then(res => res.json())
		.then(res => res.meals)
	console.log(meals);
}

const searchDisplay = async () => {
	await fetchSearch();
	if (meals == null ) {
		results.innerHTML= ' <span class="noResult"> Aucun Résultat </span>';
	}
};

searchInput.addEventListener('input', (e) => {
	search = e.target.value
	searchDisplay();
})

festchSearch();