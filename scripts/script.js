let menu = document.querySelector('#menu');
let mobilenav = document.querySelector('.mobileNav');
let menulist = document.querySelectorAll('#nav li a')

menu.addEventListener('click', toggleMenu);

function toggleMenu() {
  if(mobilenav.style.display === 'none') {
    mobilenav.style.display = 'block';
    menu.src = 'images/close.png';
  }
  else {
    mobilenav.style.display = 'none';
    menu.src = 'images/menu.png';
  }
}

menulist.forEach((list) => {
  list.addEventListener('click', hideMenu);
});

function hideMenu() {
  mobilenav.style.display = 'none';
  menu.src = 'images/menu.png';
}

const judgesList = [
  {
    judgeImg: 'images/Nemwel.jpg',
    chessBoard: 'images/chessboard.png',
    judgeName: 'Nemwel Boniface',
    judgeTitle: 'Director of the Arts centre of music at Nairobi',
    judgeDesc: 'Nemwel heads the prestigious school of music in Kenya.',
  },
  {
    judgeImg: 'images/cecilia.jpg',
    chessBoard: 'images/chessboard.png',
    judgeName: 'Cecilia Mwariri',
    judgeTitle: 'Established musical artist',
    judgeDesc: 'Cecilia is an award winning artist with a decade of experience behind her.',
  },
  {
    judgeImg: 'images/giks.jpg',
    chessBoard: 'images/chessboard.png',
    judgeName: 'Mike Mwangi',
    judgeTitle: 'Ministry of Sports, Culture and Arts',
    judgeDesc: 'Mwangi is the current CS and is the events main host and sponsor.',
  },
  {
    judgeImg: 'images/Virginia.jpg',
    chessBoard: 'images/chessboard.png',
    judgeName: 'Sarah Smith',
    judgeTitle: 'Digital content creator',
    judgeDesc: 'Sarah is a reknown digital artist and content creator within East Africa.',
  },
];

const judgesSection = document.querySelector('.judgesSect');
function generateSection() {
  judgesSection.innerHTML = '';
  for (let i = 0; i < judgesList.length; i += 1) {
    judgesSection.innerHTML = `${judgesSection.innerHTML}
    <div class="judge">
          <div class="judgeLeft">
            <img class="jj" src="${judgesList[i].judgeImg}" alt="Nemwel">
            <img class="bg" src="${judgesList[i].chessBoard}" alt="judge image bg">
          </div>
          <div class="judgeRight">
            <h2>${judgesList[i].judgeName}</h2>
            <h3>${judgesList[i].judgeTitle}</h3>
            <p>${judgesList[i].judgeDesc}</p>
          </div>
        </div>`;
  }
}

window.addEventListener('load', () => {
  generateSection();
});