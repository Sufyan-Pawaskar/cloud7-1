// Get all project cards and modal elements
const projectCards = document.querySelectorAll('.project-card');
const modal = document.getElementById('expandedSection');
const closeModal = document.getElementById('closeModal');
const carouselVideo = document.getElementById('carouselVideo');
const carouselImg = document.getElementById('carouselImg');
const projectDetails = document.getElementById('projectDetails');

// Define each project and its corresponding video and details
const projects = [
    {
        id: 1,
        video: 'assets/videos/Bloom V3.mp4',
        name: 'Bloom Launch Video ✨',
        description: 'This is the description of project 1.'
    },
    {
        id: 2,
        video: 'assets/videos/Hindi video.mp4',
        name: 'Explainer Video (Bajaj Finserv)',
        description: 'This is the description of project 2.'
    },
    {
        id: 3,
        video: 'assets/videos/MasterTouch Vivid Emulsion HD.mp4',
        name: 'MARKETING VIDEO',
        description: 'This is the description of project 3.'
    },
    {
        id: 4,
        video: 'assets/videos/Motion Bites -1.m4v',
        name: 'MARKETING VIDEO',
        description: 'This is the description of project 4.'
    },
    {
        id: 5,
        video: 'assets/videos/Organizing Workers through VAS v1.mp4',
        name: 'MARKETING VIDEO',
        description: 'This is the description of project 5.'
    },
    {
        id: 6,
        img: 'assets/images/BANNER AMAZON.png',
        name: 'Amazon Banner',
        description: 'This is the description of project 6.'
    },
    {
        id: 7,
        img: 'assets/images/p 1 copy.jpg',
        name: 'PetNosh Post',
        description: 'This is the description of project 6.'
    },
    {
        id: 8,
        img: 'assets/images/WOMENS DAY copy.jpg',
        name: 'Womens Day Post',
        description: 'This is the description of project 6.'
    },
    {
        id: 9,
        img: 'assets/images/PETNOSH BRAND 1 copy.jpg',
        name: 'PetNosh Post',
        description: 'This is the description of project 6.'
    },

    // Add more projects as needed
];

// Variable to track the current project being displayed in the modal
let currentProjectIndex = 0;

document.querySelectorAll('.project-card').forEach((card, index) => {
    const video = card.querySelector('video');
    const img = card.querySelector('img');

    // Check which one should be displayed based on your logic
    if (video) {
        card.classList.add('show-video'); // Use video
    } else if (img) {
        card.classList.add('show-image'); // Use image
    }

    // Event listener for expanding the card
    card.addEventListener('click', () => {
        currentProjectIndex = index; // Store current index
        openModal(); // Call your function to open modal
    });
});

// Function to update the content of the modal based on the current project
function updateExpandedSection() {
    const project = projects[currentProjectIndex];
    projectDetails.querySelector('h2').textContent = project.name;
    projectDetails.querySelector('p').textContent = project.description;

    // Hide both video and image initially
    carouselVideo.style.display = "none";
    carouselImg.style.display = "none";

    // Check for media type and update accordingly
    if (project.video) {
        carouselVideo.src = project.video;
        carouselVideo.style.display = "block"; // Show video
        carouselVideo.play(); // Play video
    } else if (project.img) {
        carouselImg.src = project.img;
        carouselImg.style.display = "block"; // Show image
    }
}

// Function to open modal and display the selected project
function openModal() {
    updateExpandedSection();
    modal.style.display = 'flex';  // Show modal as flex to center it
}

// Carousel controls for navigating between projects
document.getElementById('prevBtn').addEventListener('click', () => {
    currentProjectIndex = (currentProjectIndex - 1 + projects.length) % projects.length;
    updateExpandedSection();
});

document.getElementById('nextBtn').addEventListener('click', () => {
    currentProjectIndex = (currentProjectIndex + 1) % projects.length;
    updateExpandedSection();
});

// Close modal when "X" is clicked
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    carouselVideo.pause();  // Pause the video when closing the modal
    carouselImg.style.display = "none"; // Hide image when closing modal
});

// Close modal when clicking outside the modal content
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
        carouselVideo.pause();
        carouselImg.style.display = "none"; // Hide image when closing modal
    }
});
