const title = document.querySelector("#title_text")
const yourNameInput = document.querySelector("#your_name_text");
const birthdayButtons = document.querySelector("#birthday_buttons")
const buttonPlayLanguage = document.querySelectorAll(".play_language_button")

const state = {
    name: "your_name"
}

const birthdayMessages = {
    english: () => `Happy birthday to you, happy birthday to you, happy birthday dear ${state.name}, happy birthday to you.`,
    spanish: () => `Feliz cumpleaños a ti, feliz cumpleaños a ti, feliz cumpleaños, querida ${state.name}/, feliz cumpleaños a ti`,
    french: () => `Joyeux anniversaire, joyeux anniversaire, joyeux anniversaire chère ${state.name}, joyeux anniversaire.`,
    italian: () => `Buon compleanno a te, buon compleanno a te, buon compleanno cara ${state.name}, buon compleanno a te.`,
};

yourNameInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && yourNameInput.value !== "") {
        state.name = yourNameInput.value;
        title.textContent = `Happy Birthday ${state.name}!`
        birthdayButtons.style.display = "flex"
    }
});

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

