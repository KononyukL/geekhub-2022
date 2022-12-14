const buttonContainer = document.querySelector(".button-container");
const buttonNewGame = document.querySelector(".button-game-js");
const buttonFeed = document.querySelector(".button-feed-js");
const buttonPlay = document.querySelector(".button-play-js");
const buttonWalk = document.querySelector(".button-walk-js");
const buttonSleep = document.querySelector(".button-sleep-js");
const buttonDance = document.querySelector(".button-dance-js");
const buttonSing = document.querySelector(".button-sing-js");
const allButtons = document.querySelectorAll(".button");

const imgAction = document.querySelector(".img-action");

const healthContainer = document.querySelector(".health");
const saturationContainer = document.querySelector(".saturation");
const strengthContainer = document.querySelector(".strength");
const happinesContainer = document.querySelector(".happines");
const diedContainer = document.querySelector(".died");
const container = document.querySelector(".container");

const DEFAULT_TIMER = 3000;
const DEFAULT_HP = 100;
const DEFAULT_MINUS_HP = 5;
const PET_ICON = {
  base: "assets/icon/happy-cat.png",
  died: "assets/icon/died-cat.png",
  eating: "assets/icon/eat-cat.png",
  playing: "assets/icon/play-cat.png",
  singing: "assets/icon/sing-cat.png",
  walking: "assets/icon/walk-cat.png",
  dancing: "assets/icon/dance-cat.png",
  sleepping: "assets/icon/sleep-cat.png",
};

class Tamagogichi {
  constructor(name, health, saturation, strength, happines) {
    this.name = name;
    this.health = health;
    this.saturation = saturation;
    this.strength = strength;
    this.happines = happines;
    this.life = true;

    this.minus();
    this.showParams();
  }

  feed() {
    this.saturation += 15;
    this.strength += 5;
  }
  play() {
    this.happines += 5;
    this.saturation -= 5;
    this.strength -= 10;

    if (this.saturation < 1 || this.strength < 1) {
      this.showDied();
    }
  }
  walk() {
    this.health += 5;
    this.strength -= 10;
    this.saturation -= 5;

    if (this.saturation < 1 || this.strength < 1) {
      this.showDied();
    }
  }
  sleep() {
    this.health += 5;
    this.strength += 10;
    this.saturation -= 10;

    if (this.saturation < 1) {
      this.showDied();
    }
  }
  dance() {
    this.saturation -= 5;
    this.happines += 10;
    if (this.saturation < 1) {
      this.showDied();
    }
  }
  sing() {
    this.happines += 10;
  }

  minus() {
    const intervalId = setInterval(() => {
      this.health -= DEFAULT_MINUS_HP;
      this.saturation -= DEFAULT_MINUS_HP;
      this.strength -= DEFAULT_MINUS_HP;
      this.happines -= DEFAULT_MINUS_HP;

      if (
        this.health > 0 &&
        this.saturation > 0 &&
        this.strength > 0 &&
        this.happines > 0
      ) {
        this.showParams();
      } else {
        this.showDied();
        clearInterval(intervalId);
      }
    }, DEFAULT_TIMER);
  }

  showDied() {
    this.life = false;
    container.classList.add("hide");
    buttonContainer.classList.add("hide");
    buttonNewGame.classList.add("get-button");
    imgAction.setAttribute("src", PET_ICON.died);
    diedContainer.innerHTML = `Sorry ${this.name} is died`;
  }

  showParams() {
    healthContainer.innerHTML = `${this.name} health: ${this.health}`;
    saturationContainer.innerHTML = `${this.name} saturation: ${this.saturation}`;
    strengthContainer.innerHTML = `${this.name} strength: ${this.strength}`;
    happinesContainer.innerHTML = `${this.name} happines: ${this.happines}`;
  }
}

class TamagogichiFunctions {
  disabledButtons() {
    allButtons.forEach((el) => {
      el.setAttribute("disabled", "true");
    });
  }
  enabledButtons() {
    allButtons.forEach((el) => {
      el.removeAttribute("disabled");
    });
  }
  changeIcon(icon, actionIcon) {
    icon.setAttribute("src", actionIcon);
    this.disabledButtons();
    const timeoutId = setTimeout(() => {
      icon.setAttribute("src", PET_ICON.base);
      this.enabledButtons();
      clearTimeout(timeoutId);
    }, DEFAULT_TIMER);
  }
}

const tamagogichi = new Tamagogichi(
  "Cat",
  DEFAULT_HP,
  DEFAULT_HP,
  DEFAULT_HP,
  DEFAULT_HP
);
const tamagogichiFns = new TamagogichiFunctions();

buttonFeed.addEventListener("click", () => {
  tamagogichi.feed();
  tamagogichi.showParams();

  if (tamagogichi.life) {
    tamagogichiFns.changeIcon(imgAction, PET_ICON.eating);
  }
});

buttonPlay.addEventListener("click", () => {
  tamagogichi.play();
  tamagogichi.showParams();

  if (tamagogichi.life) {
    tamagogichiFns.changeIcon(imgAction, PET_ICON.playing);
  }
});

buttonWalk.addEventListener("click", () => {
  tamagogichi.walk();
  tamagogichi.showParams();

  if (tamagogichi.life) {
    tamagogichiFns.changeIcon(imgAction, PET_ICON.walking);
  }
});
buttonSleep.addEventListener("click", () => {
  tamagogichi.sleep();
  tamagogichi.showParams();

  if (tamagogichi.life) {
    tamagogichiFns.changeIcon(imgAction, PET_ICON.sleepping);
  }
});
buttonDance.addEventListener("click", () => {
  tamagogichi.dance();
  tamagogichi.showParams();

  if (tamagogichi.life) {
    tamagogichiFns.changeIcon(imgAction, PET_ICON.dancing);
  }
});
buttonSing.addEventListener("click", () => {
  tamagogichi.sing();
  tamagogichi.showParams();

  if (tamagogichi.life) {
    tamagogichiFns.changeIcon(imgAction, PET_ICON.singing);
  }
});

buttonNewGame.addEventListener("click", () => location.reload());
