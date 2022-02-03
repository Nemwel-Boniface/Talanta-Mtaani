const popupDetails = [
  {
    closeF: 'images/formclose.png',
    logo: 'images/talantamtaanilogo.png',
    submit: 'Get in touch',
  }
];

const body = document.querySelector('body');
const openForm = document.getElementById('openForm');
const closeForm = document.getElementById('closeForm');

const popUp = document.createElement('div');
popUp.classList.add('popup');

function displayForm() {
  console.log('runs');
  popUp.style.display = 'block';
  body.appendChild(popUp);
  const form = `
  <div class="closeForm">
      <img id="closeForm" src="${popupDetails[0].closeF}" alt="Close icon for the png">
    </div>
    <div class="formbody">
      <div class="popuplogo">
        <img src="${popupDetails[0].logo}" alt="Talanta Mtaani logo">
      </div>
      <form id="form">
        <label for="names">Full name</label><br>
        <input type="text" id="names" name="names" maxlength="30" placeholder="John Doe" required><br>
        <label for="email">Email Address</label><br>
        <input type="email" id="email" name="email" placeholder="example@email.com" required><br>
        <textarea maxlength="500" placeholder="Hello I am Nemwel. Have something to tell me?"></textarea><br>
        <button type="submit">${popupDetails[0].submit}</button>
      </form>
    </div> `;
    popUp.innerHTML = form;
    body.appendChild(popUp);

    console.log('reaches');
    document.addEventListener('click', (click) => {
      if (click.target.id === 'closeForm') {
        popUp.style.display = 'none';
      }
    });
}

openForm.addEventListener('click', () => {
  console.log('clicked1');
  displayForm();
});