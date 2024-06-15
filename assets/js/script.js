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


function attachAnimationListeners() {
    animatedRectangle = document.getElementById('rectangle');
    animatedRectangle.addEventListener('animationiteration', function () {
        let tempColor = generateColor();
        animatedRectangle.style.stroke = tempColor;
        if (btnShadow) btnShadow.style.background = tempColor;
        if (customBtn.length > 0) customBtn[0].style.borderColor = tempColor;
    });
}

attachAnimationListeners();

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
                <h1 class="font-rokkitt font-bold leading-5 sm:leading-none text-xl sm:text-3xl text-justify">
                    Hey there! I am a <span class="text-red-500 font-extrabold">full-stack web developer</span> with a strong knowledge and understanding of modern technologies and frameworks. I specialize in creating complex, responsive web designs from scratch, ensuring that every site is both functional and visually stunning. My expertise includes not only front-end technologies like <span class="text-emerald-500">HTML, CSS, and JavaScript</span> but also back-end development with <span class="text-amber-400">Node.js, Express</span>, and databases like MongoDB and SQL.
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
let pageNumber = 1;

renderBtn.addEventListener('click', () => {
    const oldPageRef = document.getElementById('contentBox').firstElementChild.id;
    if(pageNumber == 1) {
        container.replaceChild(getFragement(page2), document.getElementById(oldPageRef));
        pageNumber++;
        renderBtn.innerHTML = 'want to see my work?';
    }
    else if(pageNumber == 2) {
        container.replaceChild(getFragement(page1), document.getElementById(oldPageRef));
        pageNumber--;
        attachAnimationListeners();
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