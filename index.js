document.querySelector(".crossPng").style.display = 'none';
document.querySelector(".ham").addEventListener("click", () => {
    document.querySelector(".sidebar").classList.toggle("sidebarGo")
    if (document.querySelector(".sidebarGo")) {
        document.querySelector(".crossPng").style.display = 'none';
        setTimeout(()=>{
            document.querySelector(".hamburger").style.display='inline'
        },350)
    }else{
        setTimeout(()=>{
            document.querySelector(".crossPng").style.display = 'inline';
        },400)
        document.querySelector(".hamburger").style.display='none'; 
    }

}

);

 const username = "MKQazi786";
  const container = document.getElementById("projects");

  fetch(`https://api.github.com/users/${username}/repos?per_page=100`)
    .then(res => res.json())
    .then(repos => {

            repos.sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at));

      repos.forEach(repo => {
        const name = repo.name;
        const projectUrl = `https://${username.toLowerCase()}.github.io/${name}/`;

        // Create card div
        const card = document.createElement("div");
        card.className = "projectCard";

        card.innerHTML = `
          <a href="${projectUrl}" target="_blank">
            <img src="https://img.youtube.com/vi/${getYouTubeID(name)}/0.jpg" alt="${name}" />
          </a>
          <h3>${name.replace(/-/g, " ")}</h3>
          <p>${repo.description || "No description available."}</p>
        `;

        container.appendChild(card);
      });
    })
    .catch(err => {
      container.innerHTML = "<p>Error loading repos.</p>";
      console.error(err);
    });

  // Dummy YouTube ID generator (you can customize this manually or map project to ID)
  function getYouTubeID(repoName) {
    const map = {
      "weather-app": "0vnAHP5Jo6U",
      "portfolio-site": "AGcjectoEtM",
      "calculator": "rfI4kvEyMe4"
      // Add more mappings here
    };
    return map[repoName] || "dQw4w9WgXcQ"; // fallback thumbnail
  }
