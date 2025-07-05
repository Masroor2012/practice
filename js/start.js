//loading animation
setTimeout(() => {
    let anim = document.getElementById('load-anim')
    anim.style.display = 'none'
    let disp = document.getElementById('disp')
    disp.style.display = 'flex'
    let main = document.getElementById('primary-toogle-display')
    main.style.display = 'block'
}, 1000)

let userImpend = document.getElementById('username')
let username = localStorage.getItem('name')

userImpend.innerHTML = username

// primary toogle display...

var homeTool = document.getElementById('home-tool')
var setTool = document.getElementById('set-tool')
var runTool = document.getElementById('run-tool')

var toogleLoad = document.getElementById('toogle-load')

var homeDis = document.getElementById('home-page-dis')
var setDis = document.getElementById('set-page-dis')
var runDis = document.getElementById('run-page-dis')

function homeFunc(){
    homeDis.style.display = 'flex'
    setDis.style.display = 'none'
    runDis.style.display = 'none'
}

function setFunc(){
    setDis.style.display = 'flex'
    homeDis.style.display = 'none'
    runDis.style.display = 'none'
}

function runFunc(){
    runDis.style.display = 'block'
    homeDis.style.display = 'none'
    setDis.style.display = 'none'
}

// save function

    function saveFunc(){
        var valA = document.getElementById('valA').value
        var valB = document.getElementById('valA').value
        var valC = document.getElementById('valA').value
        var valD = document.getElementById('valA').value
        var valF = document.getElementById('valA').value 
        var done = document.getElementById('done')
        if (valA== '' || valB== '' || valC== '' || valD== '' || valF== ''){
            done.innerHTML = `<h1> Fill all the boxes </h1>`
        }else{
            var disappear =  document.getElementById('disappear')
            disappear.style.display = 'none';
            done.innerHTML = `<h1> SAVED, <br> click the start tool to continue`
        }
    }
// Generation
    function generate(){
        document.getElementById('bar-complete').style.display = 'flex';
        document.getElementById('overall-workspace-display').style.display = 'none';

        let percent = 0;
        const fill = document.getElementById("fill-bar");
        const text = document.getElementById("percentage");
        const status = document.getElementById("status");

        const statusMessages = {
            10: "Collating data...",
            40: "Initializing calculations...",
            70: "Generating results...",
            90: "Almost done..."
        };

        const interval = setInterval(() => {
            if (percent <= 100) {
            fill.style.width = percent + "%";
            text.textContent = percent + "%";

            // Update status message if one is defined for the current percent
            if (statusMessages[percent]) {
                status.textContent = statusMessages[percent];
            }

            percent += 5;
            } else {
            status.textContent = "Completed!";
            clearInterval(interval);
            }
        }, 700);

        setTimeout(() => {
            document.getElementById('bar-complete').style.display = 'none'
            document.getElementById('generated-result').style.display = 'flex'
        }, 18000)
    }