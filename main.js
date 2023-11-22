function stopWatch(options) {
  function addMessage(message) {
    const messageElm = document.createElement('div');
    const now = new Date();
    messageElm.innerText = `${now.getHours()}時${now.getMinutes()}分${now.getSeconds()}秒${message}`;
    // @see https://books.circlearound.co.jp/step-up-javascript/errata.html#errata-class-list
    messageElm.classList.add('message');
    logElm.appendChild(messageElm);
  }


  options = options || {}; // --- [1〜]
  const color = options.color || 'lightblue';
  const backgroundColor = options.backgroundColor || 'black'; // --- [〜1]
  const displayElm = document.getElementsByClassName('display')[0];
  displayElm.style.color = color; // --- [2〜]
  displayElm.style.backgroundColor = backgroundColor; // --- [〜2]

  const logElm = document.querySelector('.log');
  let timer = null;

  const startButton = document.getElementsByClassName('startButton')[0];
  startButton.addEventListener('click', function() {
    if (timer === null) {
      let seconds = 0;
      timer = setInterval(function() {
        seconds++;
        displayElm.innerText = seconds;
        console.log(seconds);
      }, 1000);

      addMessage('開始');
    }
  });

  const stopButton = document.getElementsByClassName('stopButton')[0];
  stopButton.addEventListener('click', function() {
    if (timer !== null) {
      clearInterval(timer);
      timer = null;
      
      addMessage('終了');
    }
  });
}

const options = { // --- [3〜]
  color: 'limegreen',
  backgroundColor: '#333'
}; // --- [〜3]
stopWatch(options);
//stopWatch();