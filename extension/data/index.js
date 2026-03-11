/**
 * Перенаправляет пользователя на нейросетевой поиск.
 */
function aiSearch() {
	window.location.href = "https://www.google.com/search?sourceid=chrome&udm=50&aep=42&source=chrome.crn.rb"
}

const aiSearchButton = document.querySelector('.ai-search-container');
aiSearchButton.addEventListener('click', () => {
	aiSearch();
});
