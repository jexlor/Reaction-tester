let startTime = null;
let endTime = null;

const square = document.getElementById('square');
const startButton = document.getElementById('start');
const reloadButton = document.getElementById('reload');
const result = document.getElementById('result');
const introduction = document.getElementById('introduction');
const click = document.getElementById('click');

function startFunction() {
    //getting random time to make screen green
    const delay = Math.floor(Math.random() * 10000) + 1000;
    //iterating over classes to change content
    introduction.classList.remove('active');
    startButton.className = 'active';
    square.className = 'restrict';
    
  setTimeout(() => {
    //defining custom color green with rgb
    const r = 36;
    const g = 142;
    const b = 68;
    //iterating over classes to change content
    square.classList.remove = 'restrict';
    square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    introduction.className = 'active';
    click.classList.remove('active');
    square.className = 'active';
     // Record the start time
    startTime = performance.now();
    // Update the screen click event
    square.addEventListener('click', handleScreenClick, { once: true });
  }, delay);
}

function handleScreenClick() {
    //defining custom color blue with rgb
    const r = 29;
    const g = 29;
    const b = 148;
    //end timer
    endTime = performance.now();
    //iterating over classes to change content
    reloadButton.classList.remove('active');
    click.className = 'active';
    result.classList.remove('active');
    // Calculate the elapsed time
    const elapsedTime = endTime - startTime;
    square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    const finalResult = Math.round(elapsedTime);
    result.innerHTML = `Elapsed Time: ${finalResult} ms`
}
// Event listener for the start button
startButton.addEventListener('click', startFunction);
// Event listener for the reload button
reloadButton.addEventListener('click', () => {
    location.reload();
});