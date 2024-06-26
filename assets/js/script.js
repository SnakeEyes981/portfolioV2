const pages = {
    page1: `<div id="page1" class="col-start-1 col-span-12 md:col-start-4 md:col-span-6">
                <div id="container" class="relative w-full">
                    <svg id="rectangle" class="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1098.55 467.93" style="fill:none; stroke:#000; stroke-width:40px; stroke-miterlimit:10">
                        <path id="combined_path" class="path" d="M1083.55 452.93 L15 452.93 L15 233.97 M15 15 L1083.55 15 L1083.55 233.97"/>
                    </svg>
                    <div class="absolute inset-0 inline-flex flex-col justify-center items-center">
                        <h1 class="headingText text-animate transition-all duration-700">hassan</h1>
                        <h1 class="headingText text-animate transition-all duration-700">yaseen</h1>
                    </div>
                </div>
            </div>`,
    page2: `<div id="page2" class="col-start-1 col-span-12 md:col-start-4 md:col-span-6 px-6">
                <h1 class="font-rokkitt font-bold leading-5 sm:leading-none text-xl sm:text-3xl 2xl:text-3xl text-justify text-teal-500 dark:text-cyan-300 animate-text">
                    Hey there! I am a full-stack web developer with a strong knowledge and understanding of modern technologies and frameworks. I specialize in creating complex, responsive web designs from scratch, ensuring that every site is both functional and visually stunning. My expertise includes not only front-end technologies like HTML, CSS, and JavaScript but also back-end development with Node.js, Express, and databases like MongoDB and SQL.
                </h1>
            </div>`,
    page3: `<div id="page3" class="max-h-[70vh] overflow-auto col-span-12 grid grid-cols-12 gap-4 md:gap-8 py-4 md:p-8">
                <div class="group group-hover:opacity-0 card-container">
                    <div class="group-hover:opacity-100 card-design">
                        <h5 class="name font-bold text-lg uppercase">Movie Engine</h5>
                        <p class="details sm:px-4">Movie Engine is database of movies, Users can search and see details of any movie</p>
                        <button class="card-btn" onclick="showModal('movieengine')">See More!</button>
                    </div>
                    <div class="group-hover:translate-y-96 group-hover:opacity-0 img-container">
                        <img class="h-full w-full object-cover" src="./assets/images/movieengineHOME.png" alt="">
                    </div>
                </div>
                <div class="group group-hover:opacity-0 card-container">
                    <div class="group-hover:opacity-100 card-design">
                        <h5 class="name font-bold text-lg uppercase">Zappy Restaurant</h5>
                        <p class="details sm:px-4">It is a web application to manage restaurant activities such as ordering, sales & much more!</p>
                        <button class="card-btn" onclick="showModal('zappy')">See More!</button>
                    </div>
                    <div class="group-hover:translate-y-96 group-hover:opacity-0 img-container">
                        <img class="h-full w-full object-cover" src="./assets/images/restaurant-Home.jpeg" alt="">
                    </div>
                </div>
                <div class="group group-hover:opacity-0 card-container">
                    <div class="group-hover:opacity-100 card-design">
                        <h5 class="name font-bold text-lg uppercase">Babies Sweet</h5>
                        <p class="details sm:px-4">Babies Sweet is an online store for items and gadgets for kids, such as toys, clothes and much more!</p>
                        <button class="card-btn" onclick="showModal('babiessweet')">See More!</button>
                    </div>
                    <div class="group-hover:translate-y-96 group-hover:opacity-0 img-container">
                        <img class="h-full w-full object-cover" src="./assets/images/babiesweet.png" alt="">
                    </div>
                </div>
                <div class="group group-hover:opacity-0 card-container">
                    <div class="group-hover:opacity-100 card-design">
                        <h5 class="name font-bold text-lg uppercase">DTEK Store</h5>
                        <p class="details sm:px-4">DTEK is an ecommerce platform. Many brands and retailers can launch their own stores on top of this platform</p>
                        <button class="card-btn" onclick="showModal('dtek')">See More!</button>
                    </div>
                    <div class="group-hover:translate-y-96 group-hover:opacity-0 img-container">
                        <img class="h-full w-full object-cover" src="./assets/images/storePageHome.png" alt="">
                    </div>
                </div>
            </div>`,
    page4: `<div id="page4" class="col-span-12 grid grid-cols-12 content-center text-center gap-4 sm:gap-8 text-5xl sm:text-7xl">
                <div class="col-start-3 col-span-4 lg:col-start-4 lg:col-span-2 group hover:cursor-none" onclick="goTo('https://twitter.com/hassanyaseen22')">
                    <div title="X [Twitter]" class="box border border-black border-4 p-8 sm:p-12 rounded-lg group-hover:bg-black dark:group-hover:bg-white dark:border-white transition duration-300 group-hover:scale-90">
                        <i class="fa-brands fa-twitter group-hover:text-blue-400"></i>
                    </div>
                </div>
                <div class="col-start-7 col-span-4 lg:col-start-6 lg:col-span-2 group hover:cursor-none" onclick="goTo('https://github.com/snakeeyes981')">
                    <div title="Github" class="box border border-black border-4 p-8 sm:p-12 rounded-lg group-hover:bg-black dark:group-hover:bg-white dark:border-white transition duration-300 group-hover:scale-90">
                        <i class="fa-brands fa-github group-hover:text-amber-400"></i>
                    </div>
                </div>
                <div class="col-start-3 col-span-4 lg:col-start-8 lg:col-span-2 group hover:cursor-none" onclick="goTo('https://www.linkedin.com/in/hassanyaseenworks')">
                    <div title="LinkedIn" class="box border border-black border-4 p-8 sm:p-12 rounded-lg group-hover:bg-black dark:group-hover:bg-white dark:border-white transition duration-300 group-hover:scale-90">
                        <i class="fa-brands fa-linkedin group-hover:text-blue-500"></i>
                    </div>
                </div>
                <div class="col-start-7 col-span-4 lg:col-start-4 lg:col-span-2 group hover:cursor-none" onclick="goTo('https://wa.me/+923326953258')">
                    <div title="Whatsapp" class="box border border-black border-4 p-8 sm:p-12 rounded-lg group-hover:bg-black dark:group-hover:bg-white dark:border-white transition duration-300 group-hover:scale-90">
                        <i class="fa-brands fa-whatsapp group-hover:text-emerald-500"></i>
                    </div>
                </div>
                <div class="col-start-3 col-span-4 lg:col-start-6 lg:col-span-2 group hover:cursor-none" onclick="goTo('https://www.instagram.com/hassanyaseen981')">
                    <div title="Instagram" class="box border border-black border-4 p-8 sm:p-12 rounded-lg group-hover:bg-black dark:group-hover:bg-white dark:border-white transition duration-300 group-hover:scale-90">
                        <i class="fa-brands fa-instagram group-hover:text-orange-500"></i>
                    </div>
                </div>
                <div class="col-start-7 col-span-4 lg:col-start-8 lg:col-span-2 group hover:cursor-none" onclick="goTo('mailto:hassanyaseenworks@gmail.com')">
                    <div title="Gmail" class="box border border-black border-4 p-8 sm:p-12 rounded-lg group-hover:bg-black dark:group-hover:bg-white dark:border-white transition duration-300 group-hover:scale-90">
                        <i class="fa-brands fa-google group-hover:text-yellow-400"></i>
                    </div>
                </div>
            </div>`
};


// Generates Random Color
const colorPaletteLight = ['#F2FF49', '#D7263D', '#6CCFF6', '#F49F0A', '#1E1E24'];
const colorPaletteDark = ['#A1CDA8', '#FF4242', '#70A37F', '#FFC800', '#0081AF'];
let previousRandomNumber = -1;

function generateColor() {
    let rand;
    do {
        rand = Math.floor(Math.random() * colorPaletteLight.length);
    } while (rand === previousRandomNumber);
    previousRandomNumber = rand;
    return darkSelector.classList.contains('dark') ? colorPaletteDark[rand] : colorPaletteLight[rand];
}

const darkSelector = document.getElementById('darkMode');
const customBtn = document.querySelector('.custom-btn');
const btnShadow = document.getElementById('btnShadow');
const container = document.getElementById('contentBox');



function page1Listeners() {
    const animatedRectangle = document.getElementById('rectangle');
    if(animatedRectangle) {
        animatedRectangle.addEventListener('animationiteration', () => {
            const tempColor = generateColor();
            animatedRectangle.style.stroke = tempColor;
            if (btnShadow) btnShadow.style.background = tempColor;
            if (customBtn) customBtn.style.borderColor = tempColor;
        });
    }
}

page1Listeners();

let pageNumber = 1; // Variable to save current Page Reference

function pageTransition(callback) {
    const oldPage = document.getElementById(`page${pageNumber}`);
    if (oldPage) {
        oldPage.style.animation = 'removePage 0.5s linear forwards';
        setTimeout(callback, 500); // Ensure the animation completes before the callback is called
    } else {
        callback();
    }
}

function page2Listeners() {
    if(pageNumber === 1) {
        const animateText = document.getElementsByClassName('animate-text');
        if (animateText) {
            animateText[0].style.transition = 'all 4s';
            const intervalID = setInterval(() => {
                if (pageNumber !== 2) {
                    clearInterval(intervalID);
                } else {
                    animateText[0].style.color = generateColor();
                }
            }, 4000);
        }
    }
}

function darkBtnAnimate (ref) {
    ref.firstChild.style.animation = 'none';

    // Wait for a brief moment to allow the style removal to take effect
    setTimeout(() => {
        // Apply the animation again
        ref.firstChild.style.animation = 'animateSwitch 0.6s ease-out';

        // Listen for animationend event to toggle classes and perform other actions
        ref.firstChild.addEventListener('animationend', () => {
            darkSelector.classList.toggle('dark');
            ref.firstChild.classList.toggle('fa-moon');
            ref.firstChild.classList.toggle('fa-sun');
        }, { once: true }); // Use once option to ensure the event listener triggers only once
    }, 50); // Adjust timing to ensure proper reset and application of animation
}

function goTo (website) {
    window.open(website, 'blank')
}

function getFragment(htmlString) {
    const tempContainer = document.createElement('div');
    tempContainer.innerHTML = htmlString;
    const fragment = document.createDocumentFragment();
    while (tempContainer.firstChild) {
        fragment.appendChild(tempContainer.firstChild);
    }
    return fragment;
}

const renderBtn = document.getElementById('renderSwitch');

renderBtn.addEventListener('click', () => {
    const oldPageRef = document.getElementById('contentBox').firstElementChild;
    if (oldPageRef) {
        pageTransition(() => {
            let newPage;
            switch(pageNumber) {
                case 1:
                    newPage = getFragment(pages.page2);
                    renderBtn.textContent = 'see my work';
                    break;
                case 2:
                    newPage = getFragment(pages.page3);
                    renderBtn.textContent = 'contact me';
                    break;
                case 3:
                    newPage = getFragment(pages.page4);
                    renderBtn.textContent = 'home';
                    break;
                case 4:
                    newPage = getFragment(pages.page1);
                    renderBtn.textContent = 'about me';
                    pageNumber = 0; // Reset to 0 to cycle pages
                    break;
            }
            container.replaceChild(newPage, oldPageRef);
            page1Listeners();
            page2Listeners();
            pageNumber++;
        });
    }
});

//MODAL DYNAMIC PLACEHOLDER REFERENCES
// these things are different for each project!
const img = document.getElementById('modalImage');
const toolsBox  = document.getElementById('modalLangContainer');
const projectName  = document.getElementById('modalHeading');
const projectDetails = document.getElementById('modalDetails');
const projectLink = document.getElementById('modalLink');

function getLangContainer ([]) {
    const toolsBoxFragment = document.createDocumentFragment();
    for (let i = 0; i < arguments.length; i++) {
        let langName = arguments[i];
        const newItem = document.createElement('i')
        newItem.classList.add('fa-brands', langName)
        toolsBoxFragment.appendChild(newItem)
    }
    return toolsBoxFragment;
}


function showModal (modal) {
    if (modal === 'movieengine'){
        img.src = './assets/images/movieengineHOME.png';
        toolsBox.add
        toolsBox.append(getLangContainer('fa-html5', 'fa-css3-alt', 'fa-js', 'fa-react'))
        projectName.textContent = 'Movie-Engine';
        projectDetails.textContent = 'A movie database app built with React, utilizing the OMDB API'
        projectLink.href = 'https://movieengine.vercel.app';
    }
    else if (modal === 'zappy'){
        img.src = './assets/images/restaurantLogin.png';
        toolsBox.append(getLangContainer('fa-html5', 'fa-css3-alt', 'fa-js', 'fa-bootstrap'))
        projectName.textContent = 'Zappy Restaurant';
        projectDetails.textContent = 'A Restaurant Management system build using HTML, CSS, JS and Bootstrap. It contains all the essentials to a manage a restaurantn such as order processing system, sales monitoring, multiple branches management, point of sale, kitchen management system and many more useful features for restaurant businesses'
        projectLink.href = '#';
        projectLink.textContent = 'Website is not Live currently';
    }
    else if (modal === 'babiessweet'){
        img.src = './assets/images/babiesweet.png';
        toolsBox.append(getLangContainer('fa-html5', 'fa-css3-alt', 'fa-js', 'fa-php', 'fa-bootstrap'))
        projectName.textContent = 'Babies Sweet';
        projectDetails.textContent = 'An online store specifically made for selling kids items such as kids accessories, kids toys, kids clothings, kids cosmetics, kids gadgets etc.'
        projectLink.href = 'https://babiessweet.com';
    }
    else if (modal === 'dtek'){
        img.src = './assets/images/storePageHome.png';
        toolsBox.append(getLangContainer('fa-html5', 'fa-css3-alt', 'fa-js', 'fa-laravel'))
        projectName.textContent = 'MovieEngine';
        projectDetails.textContent = 'An ecommerce store with the power of hosting multiple independent stores made using html & tailwindcss for frontend design and blazing fast Laravel (a php framework) for backend scripting'
        projectLink.href = 'https://dtekbrokers.com';
    }
    document.getElementById('modal').classList.toggle('hidden');
}

function closeModal () {
    document.getElementById('modal').classList.toggle('hidden');
    while(toolsBox.firstChild){
        toolsBox.removeChild(toolsBox.firstChild);
    }
    img.src = ''
    projectName.textContent = ''
    projectDetails.textContent = ''
    projectLink.href = ''
    projectLink.textContent = 'Visit Website'
}