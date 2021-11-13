/*

// Get toggle button
var toggleBtn = document.getElementByClassName('button');
var i; 

for (i == 0; i < toggleBtn.length; i++) {
    toggleBtn[i].addEventListener('click', function(){
        this.classList.toggle('active');
        if (content.style.display === 'block'){
            content.style.display = 'none';
        } else {
            content.style.display = 'block';
        }
    });
}
*/
function myFunctionA() {
    var response = document.getElementById("response-1").classList.toggle('show');
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns =
    document.getElementsByClassName("response");
    var i; 
    for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
            } else {
                content.style.display = 'block';
                response.innerHTML = 'Hide response';
            }
        }
    }
};
document.getElementById("response-1").addEventListener('click',function(event){
    event.stopPropagation();
});

function myFunctionB() {
    var  response = document.getElementById("response-2").classList.toggle('show');
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns =
    document.getElementsByClassName("response");
    var i; 
    for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
            } else {
                content.style.display = 'block';
                response.innerHTML = 'Hide response';
            }
        }
    }
};
document.getElementById("response-2").addEventListener('click',function(event){
    event.stopPropagation();
});

function myFunctionC() {
    var response = document.getElementById("response-3").classList.toggle('show');
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns =
    document.getElementsByClassName("response");
    var i; 
    for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
            } else {
                content.style.display = 'block';
                response.innerHTML = 'Hide response';
            }
        }
    }
};
document.getElementById("response-3").addEventListener('click',function(event){
    event.stopPropagation();
});

function myFunctionD() {
    var response = document.getElementById("response-4").classList.toggle('show');
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns =
    document.getElementsByClassName("response");
    var i; 
    for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
            } else {
                content.style.display = 'block';
                response.innerHTML = 'Hide response';
            }
        }
    }
};

document.getElementById("response-4").addEventListener('click',function(event){
    event.stopPropagation();
});

function myFunctionE() {
    var response = document.getElementById("response-5").classList.toggle('show');
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns =
    document.getElementsByClassName("response");
    var i; 
    for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
            } else {
                content.style.display = 'block';
                response.innerHTML = 'Hide response';
            }
        }
    }
};
document.getElementById("response-5").addEventListener('click',function(event){
    event.stopPropagation();
});
/*

document.querySelectorAll(".question").forEach((question) => question.addEventListener("click", () => {

    if(question.parentNode.classList.contains("active")) {

        question.parentNode.classList.toggle("active");
    } else {
        document.querySelectorAll(".question").forEach(question => question.parentNode.classList.remove("active"));

        question.parentNode.classList.add("active");
    }

})); */