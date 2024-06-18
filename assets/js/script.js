//Generates Random Color

let colorPaletteLight = ['#F2FF49','#D7263D','#6CCFF6','#F49F0A','#1E1E24']
let colorPaletteDark = ['#A1CDA8','#FF4242','#70A37F','#FFC800','#0081AF']
let previousRandomNumber = -1

function generateColor () {
    let rand;
    do {
        rand = Math.floor(Math.random() * 5);
    } while (rand === previousRandomNumber);
    previousRandomNumber = rand;
    return darkSelector.classList.contains('dark') ? colorPaletteDark[rand] : colorPaletteLight[rand];
}

var darkSwitch = document.getElementById('darkSwitch'); //button
var darkSelector = document.getElementById('darkMode'); //html mode
var customBtn = document.getElementsByClassName('custom-btn');
var btnShadow = document.getElementById('btnShadow');
var container = document.getElementById('contentBox');
var animatedRectangle = document.getElementById('rectangle');



darkSwitch.addEventListener('click', function() {
 darkSelector.classList.toggle('dark');
})


function page1Listeners() {
    animatedRectangle = document.getElementById('rectangle');
    animatedRectangle.addEventListener('animationiteration', function () {
        let tempColor = generateColor();
        animatedRectangle.style.stroke = tempColor;
        if (btnShadow) btnShadow.style.background = tempColor;
        if (customBtn.length > 0) customBtn[0].style.borderColor = tempColor;
    });
}

let pageNumber = 1; // Variable to save current Page Reference

function pageTransition () {
    //Current Page = Old Page
    let tempPage = pageNumber;
    let oldPage, newPage;
    console.log(tempPage);
    if (tempPage == 1) {
        oldPage = document.getElementById('page1');
    } else if (tempPage == 2) {
        oldPage = document.getElementById('page2');
    } else if (tempPage == 3) {
        oldPage = document.getElementById('page3');
    } else if (tempPage == 4) {
        oldPage = document.getElementById('page4');
    } else {
        oldPage = null;
    }
    console.log(oldPage);

    oldPage.style.animation = 'removePage 2s linear forward'
}

page1Listeners();

function page2Listeners () {
    const animateText = document.getElementsByClassName('animate-text');
    animateText[0].style.transition = 'all 2s'
    const intervalID = setInterval(() => {
        if(pageNumber != 2) {clearInterval(intervalID)}
        animateText[0].style.color = generateColor();
    }, 2000);

}

const page1 = `<div id="page1" class="col-start-1 col-span-12 md:col-start-4 md:col-span-6">
                <div id="container" class="relative w-full">
                    <svg id="rectangle" class="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1098.55 467.93" style="fill:none; stroke:#000; stroke-width:40px; stroke-miterlimit:10">
                        <path id="combined_path" class="path" d="M1083.55 452.93 L15 452.93 L15 233.97 M15 15 L1083.55 15 L1083.55 233.97"/>
                    </svg>
                    <div class="absolute inset-0 inline-flex flex-col justify-center items-center">
                        <h1 class="headingText text-animate transition-all duration-700">hassan</h1>
                        <h1 class="headingText text-animate transition-all duration-700">yaseen</h1>
                    </div>
                </div>
            </div>`;
const page2 = `<div id="page2" class="col-start-1 col-span-12 md:col-start-4 md:col-span-6 px-6">
                <h1 class="font-rokkitt font-bold leading-5 sm:leading-none text-xl sm:text-3xl 2xl:text-6xl text-justify text-teal-500 dark:text-cyan-300 animate-text">
                    Hey there! I am a full-stack web developer with a strong knowledge and understanding of modern technologies and frameworks. I specialize in creating complex, responsive web designs from scratch, ensuring that every site is both functional and visually stunning. My expertise includes not only front-end technologies like HTML, CSS, and JavaScript but also back-end development with Node.js, Express, and databases like MongoDB and SQL.
                </h1>
            </div>`;
// const page3 = document.getElementById('')
// const page4 = document.getElementById('')
function getFragement(htmlString) {
    const tempContainer = document.createElement('div');
    tempContainer.innerHTML = htmlString;
    const fragment = document.createDocumentFragment();
    while(tempContainer.firstChild){
        fragment.appendChild(tempContainer.firstChild);
    }
    return fragment;
}

const renderBtn = document.getElementById('renderSwitch');


renderBtn.addEventListener('click', () => {
    const oldPageRef = document.getElementById('contentBox').firstElementChild.id;
    if(pageNumber == 1) {
        pageTransition();
        container.replaceChild(getFragement(page2), document.getElementById(oldPageRef));
        page2Listeners();
        pageNumber++;
        renderBtn.innerHTML = 'want to see my work?';
    }
    else if(pageNumber == 2) {
        container.replaceChild(getFragement(page1), document.getElementById(oldPageRef));
        pageNumber--;
        page1Listeners();
        renderBtn.innerHTML = 'who am i?'
    }
    
    // else if(pageNumber == 3) {
    //     container.replaceChild(getFragement(page1), document.getElementById(oldPageRef));
    //     pageNumber++;
    // }
    // else if(pageNumber == 4) {
    //     container.replaceChild(getFragement(page1), document.getElementById(oldPageRef));
    //     pageNumber = 1;
    // }
//    else if(pageNumber == 3) container.replaceChild(getFragement(page3), document.getElementById(oldPageRef))
//    else if(pageNumber == 4) container.replaceChild(getFragement(page4), document.getElementById(oldPageRef))
})