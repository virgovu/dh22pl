var frame1 = document.getElementById('frame1');
var lower = document.body.getElementsByClassName('lower');
var imgf1 = document.body.querySelector('.upper > img');
var explain = document.body.querySelector('.explaine');
var infoQ = document.body.querySelector('.infoQ');

var vars = document.body.getElementsByClassName('js_minimize_2');
var varAll = document.body.getElementsByClassName('var');

var content = document.body.querySelector('.content');

var varA = document.body.querySelector('.var--1');
var varB = document.body.querySelector('.var--2');
var varC = document.body.querySelector('.var--3');
var varD = document.body.querySelector('.var--4');
var varTxt = document.body.querySelector('.var_txt');

var i = 0;

// a.innerHTML = questions[0][0]

content.innerHTML = questions[0][0];

varA.innerHTML = answers[0][0];
varB.innerHTML = answers[0][1];
varC.innerHTML = answers[0][2];
varD.innerHTML = answers[0][3];

infoQ.innerHTML = `${i+1}/20`;

// varD.addEventListener("click", function() {varD.classList.add("rightAns");});
// console.log(vars);
console.log(i);

function test(x) {
    if (i<19) {
        i = i+x;
        infoQ.innerHTML = `${i+1}/20`;
        
        varTxt.innerHTML = '';
        varTxt.classList.remove("rightAns");    
        varA.classList.remove("rightAns");
        varA.classList.remove("wrongAns");
        varB.classList.remove("rightAns");
        varB.classList.remove("wrongAns");
        varC.classList.remove("rightAns");
        varC.classList.remove("wrongAns");
        varD.classList.remove("rightAns");
        varD.classList.remove("wrongAns");

        
        // 01
        if (typeOfQuez[i][0] === 'bas' && typeOfQuez[i][1] === 'bas') {
            console.log(i+1);


            setTimeout(function() {
                content.innerHTML = questions[i][0];
                lower[1].classList.add("dspn");
                imgf1.classList.add("dspn");        
                varA.innerHTML = answers[i][0];
                varB.innerHTML = answers[i][1];
                varC.innerHTML = answers[i][2];
                varD.innerHTML = answers[i][3];
            }, 600);    

            setTimeout(function() {lower[0].classList.remove("dspn");}, 1000);
            
            addJSmin();
            setTimeout(function() {removeJSmin();}, 1200);

            // varAll[answers[i][4]].addEventListener("click", function() {varAll[answers[i][4]].classList.add("rightAns");});

        // 02
        } else if (typeOfQuez[i][0] === 'bas' && typeOfQuez[i][1] === 'txt') {
            console.log(i+1);

            setTimeout(function() {
                content.innerHTML = questions[i][0];
                lower[0].classList.add("dspn");
                imgf1.classList.add("dspn");
            }, 600);    
            addJSmin();
            
            setTimeout(function() {lower[1].classList.remove("dspn");}, 950);

            // vars[2].style.overflow = "revert";
            setTimeout(function() {removeJSmin();}, 1200);

        // 03
        } else if (typeOfQuez[i][0] === 'pic' && typeOfQuez[i][1] === 'txt') {
            console.log(i+1);
            console.log('pic-txt');
            
            var local  = document.body.querySelector('.imgBig');
            local.src = questions[i][1];

            setTimeout(function() {
                content.innerHTML = questions[i][0];
                imgf1.classList.remove("dspn");
                imgf1.src = questions[i][1];
                lower[0].classList.add("dspn");
            }, 600);    
            addJSmin();

            setTimeout(function() {lower[1].classList.remove("dspn");}, 1000);

            setTimeout(function() {removeJSmin();}, 1200);
            
            
        // 04
        } else if (typeOfQuez[i][0] === 'pic' && typeOfQuez[i][1] === 'bas') {
            console.log(i+1);
            console.log('pic-bas');        

            var local  = document.body.querySelector('.imgBig');
            local.src = questions[i][1];

            setTimeout(function() {
                content.innerHTML = questions[i][0];
                imgf1.classList.remove("dspn");
                imgf1.src = questions[i][1];
                lower[1].classList.add("dspn");
            }, 600);    
            addJSmin();
            
            setTimeout(function() {lower[0].classList.remove("dspn");}, 1000);

            varA.innerHTML = answers[i][0];
            varB.innerHTML = answers[i][1];
            varC.innerHTML = answers[i][2];
            varD.innerHTML = answers[i][3];
            
            // varAll[answers[i][4]].addEventListener("click", function() {varAll[answers[i][4]].classList.add("rightAns");});

            setTimeout(function() {removeJSmin();}, 1200);
        }        
    } else {}
};

function addJSmin() {
    vars[0].classList.add("js_minimize");
    vars[1].classList.add("js_minimize");
    vars[2].classList.add("js_minimize");
};


function removeJSmin() {
    vars[0].classList.remove("js_minimize");
    vars[1].classList.remove("js_minimize");
    vars[2].classList.remove("js_minimize");
};

//settimeout
function test2(x) {
    i = i+x;
    console.log(i);
    infoQ.innerHTML = `${i+1}/20`;
};

function test3() {
    varAll[answers[i][4]].classList.add("rightAns");
    varAll[answers[i][5]].classList.add("wrongAns");
    varAll[answers[i][6]].classList.add("wrongAns");
    varAll[answers[i][7]].classList.add("wrongAns");
};

function test4() {
    varTxt.classList.add("rightAns");
    setTimeout(function() {varTxt.innerHTML = answers[i][0]}, 800);
};

function imgBigger() {
    var local  = document.body.querySelectorAll('.imgBigJS');
    local[0].classList.remove("dspn");
    local[1].classList.remove("dspn");
};

function imgSmaller() {
    var local  = document.body.querySelectorAll('.imgBigJS');
    local[0].classList.add("dspn");
    local[1].classList.add("dspn");
    explain.classList.add("dspn");
}

function exp() {
    if (expzz[i] != '') {
        console.log(expzz[i]);
        explain.innerHTML = expzz[i];
        explain.classList.remove("dspn");
        explain.classList.add("opa");
        var local  = document.body.querySelectorAll('.imgBigJS');
        local[0].classList.remove("dspn");
    }
}

var btnExp = document.querySelector('.bnt_exp');
var myAudio = document.getElementById("myAudio");
// myAudio.play();

var promise = myAudio.play();

console.log(promise);

if (promise !== undefined) {
  promise.then(_ => {
    // Autoplay started!
  }).catch(error => {
    // Autoplay was prevented.
    // btnExp.addEventListener("click", myAudio.play());
    
  });
}

function start() {
    local = document.body.querySelector('.landingPage');
    local.classList.add("js_minimize");
    frame1.classList.remove("dspn");
    setTimeout(function() {local.classList.add("dspn"); frame1.classList.add("opa");}, 600);
};