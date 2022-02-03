const popupDetails = [];

const body = document.querySelector('body');
const openForm = document.getElementById('openForm');
const closeForm = document.getElementById('closeForm');

const popUp = document.createElement('section');
popUp.classList.add('popup');

function displayForm() {
  popUp.style.display = 'block';
  body.appendChild(popUp);
  const form = `
  <div class="closeForm">
      <img id="closeForm" src="formclose.png" alt="Close icon for the png">
    </div>
    <div class="formbody">
      <div class="popuplogo">
        <img src="images/talantamtaanilogo.png" alt="Talanta Mtaani logo">
      </div>
      <form id="form">
        <label for="names">Full name</label><br>
        <input type="text" id="names" name="names" maxlength="30" placeholder="John Doe" required><br>
        <label for="email">Email Address</label><br>
        <input type="email" id="email" name="email" placeholder="example@email.com" required><br>
        <textarea maxlength="500" placeholder="Hello I am Nemwel. Have something to tell me?"></textarea><br>
        <button type="submit">Get in touch</button>
      </form>
    </div> `;
    popUp.innerHTML = form;
    body.appendChild(popUp);
}