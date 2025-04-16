const concepts1 = [
    "AI",
    "Blockchain",
    "Sustainable Energy",
    "Virtual Reality",
    "Health Tech",
    "E-commerce",
    "Social Media",
    "Gaming",
    "Food Delivery",
    "Fitness"
];

const concepts2 = [
    "for Cats",
    "that Teaches You to Dance",
    "with a Time Machine",
    "in Space",
    "for Introverts",
    "that Sells Ice Cream",
    "with Augmented Reality",
    "for Plant Lovers",
    "that Uses Drones",
    "for Remote Workers"
];

const generateButton = document.getElementById('generate-button');
const startupIdeaDisplay = document.getElementById('startup-idea');
const shareButton = document.getElementById('share-button');
const downloadButton = document.getElementById('download-button');

generateButton.addEventListener('click', () => {
    const randomConcept1 = concepts1[Math.floor(Math.random() * concepts1.length)];
    const randomConcept2 = concepts2[Math.floor(Math.random() * concepts2.length)];
    const startupIdea = `A startup that combines ${randomConcept1} ${randomConcept2}.`;
    startupIdeaDisplay.textContent = startupIdea;
    shareButton.setAttribute('data-idea', startupIdea);
});

shareButton.addEventListener('click', () => {
    const idea = shareButton.getAttribute('data-idea');
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(idea)}`;
    window.open(twitterUrl, '_blank');
});

downloadButton.addEventListener('click', () => {
    const idea = startupIdeaDisplay.textContent;
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 600;
    canvas.height = 200;
    ctx.fillStyle = '#fff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#333';
    ctx.font = '20px Arial';
    ctx.fillText(idea, 20, 100);
    
    // Convert canvas to image
    canvas.toBlob((blob) => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'startup-idea.png';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    });
});