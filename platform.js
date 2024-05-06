const trendingMovies= [
    { title:"Sita Ramam",image:"./sitaramam.jpg"},
	{ title:"hi Nanna",image:"./hi.jpg"},
	{ title:"The Family Star",image:"./familystar.jpg"},
	{ title:"Geeta Govindam",image:"./geeta.jpg"},
	{ title:"DJ Tillu2",image:"./tillu.jpg"},
	{ title:"Rules Rajan",image:"./rulesrajnan.jpg"},
	{ title:"Pushpa",image:"./pushpa.jpg"},
	]
const recommendedContent= [
	{ title:"Save The Tigers",image:"./tigers.jpg"},
	{ title:"Kumari Srimathi",image:"./sri.jpg"},
	{ title:"Commit Mental",image:"./commitmental.jpg"},
		{ title:"Miss Perfect",image:"./miss.jpg"}
	];
				
function displayContent(content, containerId){
	const container=document.getElementById(containerId);
	container.innerHTML = '';
					
	content.forEach(item => {
		const contentItem =document.createElement('div');
		contentItem.classList.add('content-item');
						
		const image=document.createElement('img');
		image.src=item.image;
		image.alt=item.title;
						
		const title=document.createElement('h3');
		title.textContent =item.title;
						
		contentItem.appendChild(image);
		contentItem.appendChild(title);
		container.appendChild(contentItem);
	});
}
window.onload = function() {
	displayContent(trendingMovies, 'trendingMovies');
	displayContent(recommendedContent, 'recommendedContent');
};

document.addEventListener('DOMContentLoaded', function () {
	const searchInput = document.getElementById('searchInput');

	searchInput.addEventListener('input', function() {
		const searchTerm = searchInput.value.toLowerCase();
		
		const filteredTrendingMovies = trendingMovies.filter(movie =>
			movie.title.toLowerCase().includes(searchTerm)
		);
		console.log("filteredTrendingMovies: ", filteredTrendingMovies);
		displayContent(filteredTrendingMovies, 'trendingMovies');

		const filteredRecommendedContent = recommendedContent.filter(item => 
			item.title.toLowerCase().includes(searchTerm)
		);
		console.log("filteredRecommendedContent: ", filteredRecommendedContent);
		displayContent(filteredRecommendedContent, 'recommendedContent');
	});
});
