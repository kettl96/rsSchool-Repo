let pets = [
  {
    "name": "Katrine",
    "img": "./../../assets/img/pets/1.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    "age": "6 months",
    "inoculations": ["panleukopenia"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Jennifer",
    "img": "./../../assets/img/pets/2.png",
    "type": "Dog",
    "breed": "Labrador",
    "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    "age": "2 months",
    "inoculations": ["none"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Woody",
    "img": "./../../assets/img/pets/3.png",
    "type": "Dog",
    "breed": "Golden Retriever",
    "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    "age": "3 years 6 months",
    "inoculations": ["adenovirus", "distemper"],
    "diseases": ["right back leg mobility reduced"],
    "parasites": ["none"]
  },
  {
    "name": "Sophia",
    "img": "./../../assets/img/pets/4.png",
    "type": "Dog",
    "breed": "Shih tzu",
    "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    "age": "1 month",
    "inoculations": ["parvovirus"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Timmy",
    "img": "./../../assets/img/pets/5.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    "age": "2 years 3 months",
    "inoculations": ["calicivirus", "viral rhinotracheitis"],
    "diseases": ["kidney stones"],
    "parasites": ["none"]
  },
  {
    "name": "Charly",
    "img": "./../../assets/img/pets/6.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    "age": "8 years",
    "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
    "diseases": ["deafness", "blindness"],
    "parasites": ["lice", "fleas"]
  },
  {
    "name": "Scarlett",
    "img": "./../../assets/img/pets/7.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    "age": "3 months",
    "inoculations": ["parainfluenza"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Freddie",
    "img": "./../../assets/img/pets/8.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    "age": "2 months",
    "inoculations": ["rabies"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
]

// petsArray
const paginationArray = [pets.slice()]

function shuffle(array) {
  return array.map(i => [Math.random(), i]).sort().map(i => i[1])
}
for (let i = 0; i < 15; i++) {
  paginationArray.push(shuffle(pets))
}
// paginator
const currentPage = document.querySelector('.cur_page')
const nextPage = document.querySelector('.next_page')
const prevPage = document.querySelector('.prev_page')
const startPage = document.querySelector('.start_page')
const lastPage = document.querySelector('.last_page')

let curPageCount = 1
let addNoActive = (firstPage, secPage) => { [firstPage, secPage].forEach(e => e.classList.add('noactive')) }
let removeNoActive = (firstPage, secPage) => { [firstPage, secPage].forEach(e => e.classList.remove('noactive')) }

let screen = document.documentElement.clientWidth
function changePage(pageStep) {
  pageStep == 1
    ? `${curPageCount++, currentPage.innerHTML = curPageCount}`
    : `${curPageCount--, currentPage.innerHTML = curPageCount}`
  screen > 1081 && curPageCount == 6
    ? addNoActive(nextPage, lastPage)
    : removeNoActive(nextPage, lastPage)
  if (1081 > screen && screen > 641) {
    curPageCount == 8
      ? addNoActive(nextPage, lastPage)
      : removeNoActive(nextPage, lastPage)
  }
  if (641 >= screen) {
    curPageCount == 16
      ? addNoActive(nextPage, lastPage)
      : removeNoActive(nextPage, lastPage)
  }

  curPageCount > 1
    ? removeNoActive(startPage, prevPage)
    : addNoActive(startPage, prevPage)
  addPets(curPageCount)
}

function firstPage() {
  curPageCount = 1
  currentPage.innerHTML = '1'
  addPets(1)
  addNoActive(startPage, prevPage)
  removeNoActive(nextPage, lastPage)
}
startPage.addEventListener('click', firstPage)

function toLastPage() {
  const whatPage = (i) => {
    curPageCount = i
    currentPage.innerHTML = `${i}`
    addPets(i)
    addNoActive(nextPage, lastPage)
    removeNoActive(startPage, prevPage)
  }
  if (screen > 1081) whatPage(6)
  if (1081 > screen && screen > 641) whatPage(8)
  if (641 >= screen) whatPage(16)
}
lastPage.addEventListener('click', toLastPage)

window.addEventListener('resize', () => {
  curPageCount = 1
  firstPage()
  screen = document.documentElement.clientWidth
});

// slider
document.body.onload = addPets()

function addPets(n) {
  let img = document.querySelectorAll('.pet__img')
  let name = document.querySelectorAll('.pet__name')
  if (n == undefined) {
    img.forEach((e, i) => {
      e.style.background = `url("./../../assets/img/pets/${i + 1}.png")`
    })
    name.forEach((e, i) => {
      e.innerHTML = `${pets[i].name}`
    })
  }
  else {
    img.forEach((e, i) => {
      e.style.background = `url(${paginationArray[n - 1][i].img})`
    })
    name.forEach((e, i) => {
      e.innerHTML = `${paginationArray[n - 1][i].name}`
    })
  }
}

// burger
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.nav__menu');
if (iconMenu) {
  iconMenu.addEventListener("click", function (e) {
    document.body.classList.toggle('_lock');
    iconMenu.classList.toggle('_active');
    menuBody.classList.toggle('_active');
  });
}

const navLink = document.querySelector('.nav__links');
if (navLink) {
  navLink.addEventListener("click", function (e) {
    document.body.classList.remove('_lock');
    iconMenu.classList.remove('_active');
    menuBody.classList.remove('_active');
  })
}

// popup 
const slider = document.querySelector('.slide')
const popUp = document.querySelector('.popup_wrapper')
const popUpExitButton = document.querySelector('.popup_close_button')
const showPopUp = (e) => {
  let target = e.target.outerHTML.split('').map(Number).filter(e => e > 0) * 1
  const popUpImg = document.querySelector('.popup_img')
  const popUpName = document.querySelector('.popup_title')
  const popUpType = document.querySelector('.popup_type_pet')
  const popUpDescription = document.querySelector('.popup_description')
  const popUpAge = document.querySelector('.popup_list_age')
  const popUpInoculation = document.querySelector('.popup_list_inoculations')
  const popUpDiseases = document.querySelector('.popup_list_diseases')
  const popUpParasites = document.querySelector('.popup_list_parasites')
  popUpImg.style.backgroundImage = `url("./../../assets/img/pets/${target}.png")`
  popUpName.innerHTML = `${pets[target - 1].name}`
  popUpType.innerHTML = `${pets[target - 1].type + ' - ' + pets[target - 1].breed}`
  popUpDescription.innerHTML = `${pets[target - 1].description}`
  Array.from([popUpAge, popUpInoculation, popUpDiseases, popUpParasites]).forEach((el) => el.innerHTML = '')
  popUpAge.append(` ${pets[target - 1].age}`)
  popUpInoculation.append(` ${pets[target - 1].inoculations}`)
  popUpDiseases.append(` ${pets[target - 1].diseases}`)
  popUpParasites.append(` ${pets[target - 1].parasites}`)

  popUp.style.display = 'flex'

}
const hidePopUp = (e) => {
  if (Array.from(e.target.classList).includes('popup_wrapper')
    || Array.from(e.target.classList).includes('popup_close_button')) {
    popUp.style.display = 'none'
  }
}
slider.addEventListener('click', showPopUp)
popUpExitButton.addEventListener('click', hidePopUp)
const popUpWrapper = document.querySelector('.popup_wrapper')
popUpWrapper.addEventListener('click', hidePopUp)



