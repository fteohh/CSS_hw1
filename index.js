document.getElementById("w-drum").addEventListener("click", function() {
    playAudio("sounds/tom-1.mp3");
});
document.getElementById("a-drum").addEventListener("click", function() {
    playAudio("sounds/tom-2.mp3");
});
document.getElementById("s-drum").addEventListener("click", function() {
    playAudio("sounds/tom-3.mp3");
});
document.getElementById("d-drum").addEventListener("click", function() {
    playAudio("sounds/tom-4.mp3");
});
document.getElementById("j-drum").addEventListener("click", function() {
    playAudio("sounds/snare.mp3");
});
document.getElementById("k-drum").addEventListener("click", function() {
    playAudio("sounds/crash.mp3");
});
document.getElementById("l-drum").addEventListener("click", function() {
    playAudio("sounds/kick-bass.mp3");
});


function playAudio(sound){
    var audio = new Audio(sound);
    audio.play();
}
