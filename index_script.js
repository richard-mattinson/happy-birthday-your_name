const title = document.querySelector("#title_text")

const yourNameInput = document.querySelector("#your_name_text");
const yourAgeInput = document.querySelector("#your_age_text")
const yourFavoriteInput = document.querySelector("#your_favorite_text")

const birthdayElements = document.querySelector("#birthday_elements")
const birthdayText = document.querySelector("#birthday_title")
const birthdayButtons = document.querySelector("#birthday_buttons")
const buttonPlayLanguage = document.querySelectorAll(".play_language_button")
const birthdayAge = document.querySelector("#birthday_age");
const birthdayFavorite = document.querySelector("#birthday_favorite");

const state = {
    name: "your_name",
    age: "your_age",
    favorite: "your_favorite"
}

const birthdayMessages = {
  english: () => `Happy birthday to you, happy birthday to you, happy birthday dear ${state.name}, happy birthday to you.`,
  spanish: () => `Feliz cumpleaños a ti, feliz cumpleaños a ti, feliz cumpleaños, querida ${state.name}/, feliz cumpleaños a ti`,
  french: () => `Joyeux anniversaire, joyeux anniversaire, joyeux anniversaire chère ${state.name}, joyeux anniversaire.`,
  italian: () => `Buon compleanno a te, buon compleanno a te, buon compleanno cara ${state.name}, buon compleanno a te.`,
  chinese: () => `Zhù nǐ shēngrì kuàilè, zhù nǐ shēngrì kuàilè, zhù qīn'ài de ${state.name} shēngrì kuàilè, zhù nǐ shēngrì kuàilè.`,
  russian: () => `S dnom rozhdeniya tebya, s dnom rozhdeniya tebya, s dnom rozhdeniya, dorogaya ${state.name}, s dnom rozhdeniya tebya.`,
};

yourNameInput.addEventListener("change", (event) => {
    if (yourNameInput.value !== "") {
        state.name = yourNameInput.value;
        if (state.age !== "your_age") {
            title.textContent = `Happy Birthday #${state.age} ${state.name.toUpperCase()}! \u{1F389}`;
        } else {
            title.textContent = `Happy Birthday ${state.name.toUpperCase()}! \u{1F389}`;
        }
        checkState()
    }
});

yourAgeInput.addEventListener("change", (event) => {
    if (yourAgeInput.value !== "") {
      state.age = Number(yourAgeInput.value);
      state.wowAge = state.age / 2 + 7;
      birthdayAge.textContent = `\u{1F62E} Wow, you're ${state.age}? You don't look a day over ${state.wowAge}! \u{1F552}`;
      if (state.name !== "your_name") {
        title.textContent = `Happy Birthday #${state.age} ${state.name.toUpperCase()}! \u{1F389}`;
      } else {
        title.textContent = `Happy Birthday #${state.age}! \u{1F389}`;
      }
      checkState();
    }
})

yourFavoriteInput.addEventListener("change", (event) => {
    if (yourFavoriteInput.value !== "") {
      state.favorite = yourFavoriteInput.value;
      birthdayFavorite.textContent = `I really hope you get so much ${state.favorite.toUpperCase()} today! \u{1F381}`;
      checkState();
    }
});

function checkState() {
    if (state.name !== "your_name" && state.age !== "your_age" && state.favorite !== "your_favorite") {
        birthdayElements.style.display = "block";
    }
}

buttonPlayLanguage.forEach(button => {
    button.addEventListener("click", (event) => {
        const id = event.target.id 
        const splitId = id.split("_")
        const languageName = splitId[1]
        const languageCode = splitId[2]
        const birthdayMessage = birthdayMessages[languageName]()
        playBirthdayMessage(birthdayMessage, languageCode)
    })
});

function playBirthdayMessage(word, language) {
    const message = new SpeechSynthesisUtterance();

    // set the text to be spoken & options
    message.text = word;
    message.lang = language;
    message.pitch = 0;
    message.rate = 0.5;
    message.volume = 1;

    // create an instance of the speech synthesis object
    const speechSynthesis = window.speechSynthesis;
    // start speaking
    speechSynthesis.speak(message);
}

