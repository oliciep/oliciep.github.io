const words = ['Dynamic Programming', 'Learning From Data', 'Object-Oriented Programming', 'Network and Computer Security', 'Group Software Project', 'Database Theory and Design', 'Artificial Intelligence', 'C Family', 'High-Performance Computing', 'Nature-Inspired Computation', 'Computer Graphics', 'Enterprise Computing'];
let currentIndex = 0;

function showNextWord() {
  const wordElement = document.getElementById('module');
  wordElement.style.opacity = 0;
  
  setTimeout(() => {
    wordElement.textContent = words[currentIndex];
    wordElement.style.opacity = 1;
    
    currentIndex = (currentIndex + 1) % words.length; // Loop through words
  }, 1000); // Change word after 1 second
  
  setTimeout(showNextWord, 2000); // Repeat every 3 seconds
}

window.onload = function() {
  showNextWord();
};