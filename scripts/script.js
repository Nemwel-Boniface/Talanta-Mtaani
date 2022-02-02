const menu = document.querySelector('#menu');
const mobilenav = document.querySelector('.mobileNav');
const menulist = document.querySelectorAll('#nav li a');

function toggleMenu() {
  if (mobilenav.style.display === 'none') {
    mobilenav.style.display = 'block';
    menu.src = 'images/close.png';
  } else {
    mobilenav.style.display = 'none';
    menu.src = 'images/menu.png';
  }
}

menu.addEventListener('click', toggleMenu);

function hideMenu() {
  mobilenav.style.display = 'none';
  menu.src = 'images/menu.png';
}

menulist.forEach((list) => {
  list.addEventListener('click', hideMenu);
});

const judgesList = [
  {
    judgeImg: 'images/Nemwel.jpg',
    alt: 'nemwel',
    chessBoard: 'images/chessboard.png',
    judgeName: 'Nemwel Boniface',
    judgeTitle: 'Director of the Arts centre of music at Nairobi',
    judgeDesc: 'Nemwel heads the prestigious school of music in Kenya.',
  },
  {
    judgeImg: 'images/cecilia.jpg',
    alt: 'Cecilia',
    chessBoard: 'images/chessboard.png',
    judgeName: 'Cecilia Mwariri',
    judgeTitle: 'Established musical artist',
    judgeDesc: 'Cecilia is an award winning artist with a decade of experience behind her.',
  },
  {
    id: 'hide',
    judgeImg: 'images/giks.jpg',
    alt: 'Mike',
    chessBoard: 'images/chessboard.png',
    judgeName: 'Mike Mwangi',
    judgeTitle: 'Ministry of Sports, Culture and Arts',
    judgeDesc: 'Mwangi is the current CS and is the events main host and sponsor.',
  },
  {
    id: 'hide',
    judgeImg: 'images/Virginia.jpg',
    alt: 'Sarah',
    chessBoard: 'images/chessboard.png',
    judgeName: 'Sarah Smith',
    judgeTitle: 'Digital content creator',
    judgeDesc: 'Sarah is a reknown digital artist and content creator within East Africa.',
  },
  {
    id: 'hide',
    judgeImg: 'images/saNene.jpg',
    alt: 'Sa Nene',
    chessBoard: 'images/chessboard.png',
    judgeName: 'Sa Nene',
    judgeTitle: 'Film producer/ Director at SaNene',
    judgeDesc: 'Nene is a reknown film producer having some of his films feature at Netflix.',
  },
  {
    id: 'hide',
    judgeImg: 'images/wanjaG.jpeg',
    alt: 'Wanja',
    chessBoard: 'images/chessboard.png',
    judgeName: 'Wanja Gitau',
    judgeTitle: 'Actress/ model',
    judgeDesc: 'Wanja is famous for her roles in Netflix movies such as In From The Cold.',
  },
];

const judgesSection = document.querySelector('.judgesSect');
function generateSection() {
  judgesSection.innerHTML = '';
  for (let i = 0; i < judgesList.length; i += 1) {
    judgesSection.innerHTML = `${judgesSection.innerHTML}
    <div class="judge" id="${judgesList[i].id}">
          <div class="judgeLeft">
            <img class="jj" src="${judgesList[i].judgeImg}" alt="${judgesList[i].alt}">
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