document.querySelector(".crossPng").style.display = 'none';
document.querySelector(".ham").addEventListener("click", () => {
    document.querySelector(".sidebar").classList.toggle("sidebarGo")
    if (document.querySelector(".sidebarGo")) {
        document.querySelector(".crossPng").style.display = 'none';
        setTimeout(() => {
            document.querySelector(".hamburger").style.display = 'inline'
        }, 350)
    } else {
        setTimeout(() => {
            document.querySelector(".crossPng").style.display = 'inline';
        }, 400)
        document.querySelector(".hamburger").style.display = 'none';
    }

}

);

const username = "MKQazi786";
const container = document.getElementById("projects");

const imageMap = {
    "MyPortfolio": "../photos/portfolio.jpg",
    "es6-remaining-days-in-birthday": "../photos/birthday.png",
    "recipe-app-with-es6": "../photos/recipe.png",
    "Digital-clock-with-es6": "../photos/clock.png",
    "Mitsol-repo": "../photos/mitsol.png",
    "headshot-clone": "../photos/headshot.png",
    "Drawing-app-es6": "../photos/drawing.png",
    "Quiz-app-with-es6": "../photos/Quiz.png",
    "listr.au": "../photos/listr.png",
    "Footer-library-MKQazi786-": "../photos/footer.png",
    "Social-champ-Tailwind-UI": "../photos/social.png",
    "Mitsol-Blogs": "../photos/blogs.png",
    "mini-hackathon-of-blog-app": "../photos/blog-app.png",
    "9-task-of-chatgpt-by-SMIT": "../photos/9Task.png",
    "es6-weather-app": "../photos/weather.png",
    "Amgen-biotechnology-company": "../photos/amgen.png",
    "crud-with-dart": "../photos/dart.png",
    "react-CV-of-muhammad-khubaib" : '../photos/cv.png',
    "Elloe.ai-repo":'../photos/elloe.png',
    "great-american-business-show-": '../photos/GABS.png',
    "es6-matrix-calculator": '../photos/matrix.png',
    "grade-converter-with-logical-operator": '../photos/grade.png',
    "my-competition-pepsi-website-": '../photos/pepsi.png',
    "ES6-javascript-BMI-converter": '../photos/bmi.png',
    "E6-javascript-grade-converter": '../photos/alertGrade.png',
    "my-1st-CV-in-SMIT-WEB-DEV-9": '../photos/1stCV.png',
    "web-dev-b9-multiple-page-CV": '../photos/multiplePageCV.png',
    "ES6-javascrpt-calculator": '../photos/Addition.png',
    "The-Lyceum-School": '../photos/lyceum.png',
    "Arfa-coaching-centre": '../photos/arfaCoaching.png',
    "Techdotpk-laptop-shop": '../photos/techdotpk.png',
    "bilal-stationary": '../photos/bilalStationary.png',
    "PSL-history-of-all-seasons-": '../photos/PSL.png',
    "SMIT-assignment-job-application-form": '../photos/jobApplication.png',
    "SMIT-web-dev-b9-Audi-time-table-": '../photos/audiTime.png',
    "SMIT-web-dev-b9-image-recipe": '../photos/katakat.png',
    "web-dev-9-2nd-assignment-is-recipe-": '../photos/2ndRecipe.png',
    "password-generator": '../photos/passGene.png'
};

const customUrlMap = {
    "headshot-clone": "https://react-headshot-app-mkqazi786.surge.sh/",
    "react-CV-of-muhammad-khubaib" : "https://react-cv-muhammad-khubaib.surge.sh/",
    "Elloe.ai-repo": "https://elloe.ai",
    "great-american-business-show-":'https://greatamericanbusinessshow.com/',
    "password-generator":'https://mkqazi786-passgenerator.surge.sh',
    "MyPortfolio":'https://mkqazi786.work.gd/'
};

const excludedRepos = [
    "es6-cricket-ranking-server",
    "todolist",
    "-flutter-Weather-app-",
    "flutter-login-signup-navigate",
    "flutter-crud-",
    "flutter-1st-project",
    "Flutter-3rd-assignment",
    "oop-in-dart",
    "Flutter-code",
    "Mitsol-HMT-Date-repo",
    "Flutter-2nd-assignment",
    "Flutter-1st-assignment-of-SMIT",
    "express-hello-world",
    "devathon-summit-doctor-app", // iski repo clone krke kam dikhana padega
    "express-crud-with-mongoDB",
    "express-CRUD-with-frontend",
    "Facebook-similar-post",
    "Firebase-Real-time-polling-application",
    "thread-app",
    "express-router-with-CRUD",
    "React-CAC-1stApp",
];

const youtubeMap = {
    "Footer-library-MKQazi786-": "shuZUY1oSQw",
    "crud-with-dart":'0vnAHP5Jo6U'
};

fetch(`https://api.github.com/users/${username}/repos?per_page=100`)
    .then(res => res.json())
    .then(repos => {

        repos.sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at));

        repos.forEach(repo => {
            const name = repo.name;
            if (excludedRepos.includes(name)) return;
            const projectUrl = customUrlMap[name] || `https://${username.toLowerCase()}.github.io/${name}/`;
            const videoId = youtubeMap[name];

            const card = document.createElement("div");
            card.className = "projectCard";

            const imgSrc = imageMap[name] || "../photos/k3.png"; // fallback image

        if (videoId) {
            const youtubeUrl = `https://www.youtube.com/watch?v=${videoId}`;
            
          card.innerHTML = `
          <a href="${youtubeUrl}" target="_blank"> <img src="${imgSrc}" alt="${name}" /> </a>
          <h3>${name.replace(/-/g, " ")}</h3>
          <p>${repo.description || "Watch video demo on YouTube."}</p>`;
        } else {
           card.innerHTML = `
           <a href="${projectUrl}" target="_blank"> <img src="${imgSrc}" alt="${name}" /> </a>
           <h3>${name.replace(/-/g, " ")}</h3>
           <p>${repo.description || "No description available."}</p> `;
        }
            container.appendChild(card);
        });
    })
    .catch(err => {
        container.innerHTML = "<p>Error loading repos.</p>";
        console.error(err);
    });