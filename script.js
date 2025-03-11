 src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/gsap.min.js"
// Create stars in the background
const numberOfStars = 200;
const body = document.body;

for (let i = 0; i < numberOfStars; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    const size = Math.random() * 4 + 2; // Random size between 2px and 6px
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.top = `${Math.random() * 100}vh`; // Random vertical position
    star.style.left = `${Math.random() * 100}vw`; // Random horizontal position
    star.style.animationDuration = `${Math.random() * 1 + 0.5}s`; // Random twinkle speed
    body.appendChild(star);
}

const clouds = document.querySelectorAll('.cloud');
        const infoBubble = document.getElementById('infoBubble');

        // Function to animate clouds
        function animateCloud(cloud) {
            const startX = Math.random() * -200; // Start position off-screen left
            const endX = window.innerWidth + 200; // End position off-screen right
            const duration = Math.random() * 5 + 5; // Random duration between 5 to 10 seconds

            gsap.fromTo(cloud, 
                { x: startX }, 
                { x: endX, duration: duration, ease: "none", onComplete: () => animateCloud(cloud) } // Repeat animation
            );
        }

        // Animate all clouds
        clouds.forEach(cloud => animateCloud(cloud));

        // Show information bubble on hover
        clouds.forEach(cloud => {
            cloud.addEventListener('mouseenter', (event) => {
                const info = event.currentTarget.getAttribute('data-info');
                infoBubble.innerText = info;
                
                // Position the bubble above the cloud
                const rect = cloud.getBoundingClientRect();
                infoBubble.style.left = `${rect.left + (rect.width / 2) - (infoBubble.offsetWidth / 2)}px`;
                infoBubble.style.top = `${rect.top - infoBubble.offsetHeight - 10}px`;
                
                // Show the bubble
                infoBubble.style.visibility = 'visible';
                infoBubble.style.opacity = 1;
            });

            cloud.addEventListener('mouseleave', () => {
                // Hide the bubble
                infoBubble.style.visibility = 'hidden';
                infoBubble.style.opacity = 0;
            });
        });


const dots = document.querySelectorAll('.dot');
        const infoBox = document.getElementById('infoBox');
        const infoText = document.getElementById('infoText');
        const infoImage = document.getElementById('infoImage');

        // Image URLs corresponding to each step
        const images = [
            "https://via.placeholder.com/150?text=Step+1+Image",
            "https://via.placeholder.com/150?text=Step+2+Image",
            "https://via.placeholder.com/150?text=Step+3+Image",
            "https://via.placeholder.com/150?text=Step+4+Image",
            "https://via.placeholder.com/150?text=Step+5+Image"
        ];

        // Show information box on click
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                const info = dot.getAttribute('data-info');
                infoText.innerText = info;
                infoImage.src = images[index]; // Set the corresponding image
                infoImage.style.display = 'block'; // Show the image
                infoBox.style.display = 'block'; // Show the info box
            });
        });