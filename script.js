'use strict';

const projectsData = [
    {
        title: "Portfolio Website",
        year: "2026",
        category: "Personal",
        description: "A personal portfolio website created using HTML and CSS to showcase my profile and projects.",
        imgSrc: "project1.jpg",
        link: "#"
    },
    {
        title: "Music Player Website",
        year: "2026",
        category: "Media",
        description: "A music player website that displays the lyrics and music video of NewJeans' song 'Supernatural'.",
        imgSrc: "project2.png",
        link: "#"
    },
    {
        title: "Dating Website",
        year: "2026",
        category: "Interactive",
        description: "A website that allows users to see other users' info and match with them.",
        imgSrc: "project3.png",
        link: "#"
    },
    {
        title: "Favorite Things Website",
        year: "2026",
        category: "Personal",
        description: "A website that showcases my favorite things.",
        imgSrc: "project4.jpg",
        link: "#"
    }
];

function filterProjects(searchTerm, selectedCategory, projects) {
    const cleanSearch = searchTerm.trim().toLowerCase();

    return projects.filter(function(project) {
        const matchesCategory = (selectedCategory === "All" || project.category === selectedCategory);
        const matchesSearch = project.title.toLowerCase().includes(cleanSearch) || project.description.toLowerCase().includes(cleanSearch);

        return matchesCategory && matchesSearch;
    });
}

function renderProjects(projectsToRender) {
    const container = document.getElementById('projects-container');
    const countDisplay = document.getElementById('project-count');

    container.innerHTML = '';

    if (!projectsToRender || projectsToRender.length === 0) {
        countDisplay.textContent = "Showing 0 of " + projectsData.length + " projects.";
        container.innerHTML = '<p class="no-results">No matching projects found.</p>';
        return;
    }

    let htmlContent = '';
    for (const project of projectsToRender) {
        htmlContent += `
            <article class="card">
                <img src="${project.imgSrc}" alt="${project.title}" class="card-img">
                <h3 class="card-title">${project.title}</h3>
                <p class="card-meta">${project.year} • ${project.category}</p>
                <p class="card-desc">${project.description}</p>
                <a class="card-link" href="${project.link}">View Project</a>
            </article>
        `;
    }
    
    container.innerHTML = htmlContent;
    countDisplay.textContent = "Showing " + projectsToRender.length + " of " + projectsData.length + " projects.";
}

function handleFilterChange() {
    const searchInput = document.getElementById('project-search').value;
    const categorySelect = document.getElementById('category-filter').value;
    
    const filteredList = filterProjects(searchInput, categorySelect, projectsData);
    renderProjects(filteredList);
}

document.addEventListener('DOMContentLoaded', function() {
    renderProjects(projectsData);
    
    const searchInput = document.getElementById('project-search');
    const categorySelect = document.getElementById('category-filter');
    
    if (searchInput && categorySelect) {
        searchInput.addEventListener('input', handleFilterChange);
        categorySelect.addEventListener('change', handleFilterChange);
    }
});