// $( document ).ready(function() {
//     setInterval(function (e) {
        
//         
//     }, 1000/15);
// });


function toggle(){
    const primaryNav = document.querySelector(".primary-nav");
    const visibility = primaryNav.getAttribute("data-visible");
    if(visibility == "false") {
        primaryNav.setAttribute("data-visible", "true");
        
    } else {
        primaryNav.setAttribute("data-visible", "false");
    }

}


function screenGrow() {
    const screen = document.querySelector(".arcade-screen");
    const line1 = document.querySelector(".line1");
    const line2 = document.querySelector(".line2");
    const arcadeJoystick = document.querySelector(".arcade-joystick");
    const button1 = document.querySelector(".button1");
    const button2 = document.querySelector(".button2");
    const button3 = document.querySelector(".button3");
    const button4 = document.querySelector(".button4");
    const arcadeWording = document.querySelector(".arcade-wording");
    const newGame = document.querySelector(".arcade-new-game");
    const anyKey = document.querySelector(".arcade-any-key");
    const primaryHeader = document.querySelector(".primary-header");
    const fullscreen = screen.getAttribute("data-fullscreen");
    
    if(fullscreen == "false") {
        screen.setAttribute("data-fullscreen", "true");
        line1.setAttribute("data-fullscreen", "true");
        line2.setAttribute("data-fullscreen", "true");
        arcadeJoystick.setAttribute("data-fullscreen", "true");
        button1.setAttribute("data-fullscreen", "true");
        button2.setAttribute("data-fullscreen", "true");
        button3.setAttribute("data-fullscreen", "true");
        button4.setAttribute("data-fullscreen", "true");
        arcadeWording.setAttribute("data-fullscreen", "true");
        newGame.setAttribute("data-fullscreen", "true");
        anyKey.setAttribute("data-fullscreen", "true");
        primaryHeader.setAttribute("data-fullscreen", "true");
        
    }
}