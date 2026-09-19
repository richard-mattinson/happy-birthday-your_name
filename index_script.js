const titleText = document.querySelector("#title_text")
const birthdayMessageText = document.querySelector("#birthday_message_text");

const languageDropdown = document.querySelector("#language_dropdown")

const yourNameInput = document.querySelector("#your_name_text");
const yourAgeInput = document.querySelector("#your_age_text")
const yourFavoriteInput = document.querySelector("#your_favorite_text")

const birthdayElements = document.querySelector("#birthday_elements")
const birthdayTitle = document.querySelector("#birthday_title")
const birthdayButtons = document.querySelector("#birthday_buttons_container")
const buttonPlayLanguage = document.querySelectorAll(".play_language_button")
const birthdayAge = document.querySelector("#birthday_age");
const birthdayFavorite = document.querySelector("#birthday_favorite");

const state = {
    name: "your_name",
    age: "your_age",
    favorite: "your_favorite",
    languageName: "english",
    languageCode: "en-GB",
    formComplete: false
}

///////////////////// title bar /////////////////////

const titleBirthdayMessage = {
    english: "Happy Birthday",
    spanish: "Feliz cumpleaños",
    french: "Joyeux anniversaire",
    italian: "Buon compleanno",
    russian: "С днем ​​рождения",
    chinese: "生日快乐",
};

const titleYourName = {
    english: "your_name",
    spanish: "su_nombre",
    french: "votre_nom",
    italian: "il_tuo_nome",
    russian: "bаше_имя",
    chinese: "您的姓名",
};

const birthdayTitleText = {
    english: "Let me wish you Happy Birthday...",
    spanish: "Permítame desearle un feliz cumpleaños...",
    french: "Permettez-moi de vous souhaiter un joyeux anniversaire...",
    italian: "Lascia che ti faccia gli auguri di buon compleanno...",
    russian: "Позвольте поздравить вас с днём рождения...",
    chinese: "让我祝你生日快乐..."
}

///////////////////// user inputs form /////////////////////

languageDropdown.addEventListener("change", (event) => {
    const id = event.target.value
    const splitId = id.split("_")
    state.languageName = splitId[0]
    state.languageCode = splitId[1]
    updateStaticLanguageStrings()
    console.log("hi???", state.formComplete);
    if (state.formComplete !== false) {
        updateUserVariableStrings()
    }
})

function updateStaticLanguageStrings() {
    // title bar
    titleText.textContent = titleBirthdayMessage[state.languageName];
    birthdayMessageText.textContent = `[${titleYourName[state.languageName]}]`;
    
    console.log("state.yourage", state.age);
    if (state.age !== "your_age" && state.name !== "your_name") {
        birthdayMessageText.textContent = `#${state.age} ${state.name.toUpperCase()}! \u{1F389}`;
    } else if (state.name !== "your_name") {
        birthdayMessageText.textContent = `${state.name.toUpperCase()}! \u{1F389}`;
    }
    // birthday messages
    birthdayTitle.textContent = birthdayTitleText[state.languageName]
    yourNameInput.setAttribute("placeholder", enterYourName[state.languageName]);
    yourAgeInput.setAttribute("placeholder", enterYourAge[state.languageName]);
    yourFavoriteInput.setAttribute("placeholder", enterYourFaveThing[state.languageName]);    
}

function updateUserVariableStrings() {
    birthdayAge.textContent = ageMessageTranslation();
    birthdayFavorite.textContent = favoriteMessageTranslation();
}

const enterYourName = {
    english: "Emter Your Name",
    spanish: "Ingrese su nombre",
    french: "Entrez votre nom",
    italian: "Inserisci il tuo nome",
    russian: "Введите ваше имя",
    chinese: "请输入您的姓名",
};

const enterYourAge = {
    english: "Emter Your Name",
    spanish: "Ingrese su edad",
    french: "Entrez votre âge",
    italian: "Inserisci la tua età",
    russian: "Введите свой возраст",
    chinese: "输入您的年龄",
};

const enterYourFaveThing = {
    english: "Emter Your Favorite Thing",
    spanish: "Introduce tu cosa favorita",
    french: "Saisissez votre élément préféré",
    italian: "Inserisci la tua cosa preferita",
    russian: "Введите то, что вам больше всего нравится",
    chinese: "输入您最喜欢的事物",
};

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
            birthdayMessageText.textContent = `#${state.age} ${state.name.toUpperCase()}! \u{1F389}`;
        } else {
            birthdayMessageText.textContent = `${state.name.toUpperCase()}! \u{1F389}`;
        }
        checkFormComplete()
    }
});

yourNameInput.addEventListener("keydown", event => {
    if (event.key === "Enter" && state.favorite !== "your_favorite" && state.age !== "your_age") {
        yourNameInput.blur()
    }
})

yourAgeInput.addEventListener("change", () => {
    if (yourAgeInput.value !== "") {
        state.age = Number(yourAgeInput.value);
        state.wowAge = state.age / 2 + 7;
        birthdayAge.textContent = ageMessageTranslation()
        if (state.name !== "your_name") {
            birthdayMessageText.textContent = `#${state.age} ${state.name.toUpperCase()}! \u{1F389}`;
        } else {
            birthdayMessageText.textContent = `#${state.age}! \u{1F389}`;
        }
        checkFormComplete();
    }
})

yourAgeInput.addEventListener("keydown", event => {
    if (event.key === "Enter" && state.favorite !== "your_favorite" && state.name !== "your_name") {
        yourAgeInput.blur()
    }
})

function ageMessageTranslation() {
    let ageMessage
    switch (state.languageName) {
        case "english": 
            ageMessage = `\u{1F62E} Wow, you're ${state.age}? You don't look a day over ${state.wowAge}! \u{1F389}`
            break;
        case "spanish":
            ageMessage = `\u{1F62E} ¡Vaya, ¿tienes ${state.age} años? ¡No aparentas más de ${state.wowAge}! \u{1F389}`
            break;
        case "french":
            ageMessage = `\u{1F62E} Waouh, vous avez ${state.age} ans ? Vous ne faites pas plus de ${state.wowAge} ans ! \u{1F389}`;
            break;
        case "italian":
            ageMessage = `\u{1F62E} Wow, hai ${state.age} anni? Non ne dimostri più di ${state.wowAge}! \u{1F389}`
            break;
        case "chinese":
            ageMessage = `\u{1F62E} 哇，你${state.age}岁了？看起来顶多${state.wowAge}岁！\u{1F389}`
            break;
        case "russian":
            ageMessage = `\u{1F62E} Ого, вам ${state.age}? Вы выглядите максимум на ${state.wowAge}! \u{1F389}`
            break
    }
    return ageMessage
}

yourFavoriteInput.addEventListener("change", () => {
    if (yourFavoriteInput.value !== "") {
        state.favorite = yourFavoriteInput.value;
        birthdayFavorite.textContent = favoriteMessageTranslation();
        checkFormComplete();
    }
});

yourFavoriteInput.addEventListener("keydown", event => {
    if (event.key === "Enter" && state.age !== "your_age" && state.name !== "your_name") {
        yourFavoriteInput.blur()
    }
})

function favoriteMessageTranslation() {
    let favoriteMessage;
    switch (state.languageName) {
        case "english":
        favoriteMessage = `I really hope you get so much ${state.favorite.toUpperCase()} today! \u{1F381}`;
        break;
        case "spanish":
        favoriteMessage = `¡Espero de verdad que consigas muchísimos ${state.favorite.toUpperCase()} hoy! \u{1F381}`;
        break;
        case "french":
        favoriteMessage = `J'espère vraiment que tu recevras énormément de ${state.favorite.toUpperCase()} aujourd'hui! \u{1F381}`;
        break;
        case "italian":
        favoriteMessage = `Spero davvero che tu riceva tantissimi ${state.favorite.toUpperCase()} oggi! \u{1F381}`;
        break;
        case "chinese":
        favoriteMessage = `我真心希望你今天能收获满满的 ${state.favorite.toUpperCase()}！\u{1F381}`;
        break;
        case "russian":
        favoriteMessage = `Я очень надеюсь, что сегодня ты получишь море ${state.favorite.toUpperCase()}! \u{1F381}`;
        break;
    }
    return favoriteMessage;
}

function checkFormComplete() {
    if (state.name !== "your_name" && state.age !== "your_age" && state.favorite !== "your_favorite") {
        state.formComplete = true
        birthdayElements.style.display = "block";
        playBirthdayMessage(birthdayMessages[state.languageName](), state.languageCode)
    }
}

///////////////////// birthday message buttons /////////////////////

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

    let messageDurationInSeconds = 10 // default to 10 seconds
    switch (language) {
      case "en-GB":
        messageDurationInSeconds = 8;
        break;
      case "es-ES":
        messageDurationInSeconds = 11;
        break;
      case "fr-FR":
        messageDurationInSeconds = 12;
        break;
      case "it-IT":
        messageDurationInSeconds = 12;
        break;
      case "ru-RU":
        messageDurationInSeconds = 18;
        break;
      case "zh-CN":
        messageDurationInSeconds = 17;
        break;
    }
    // disable all birthday buttons 
    buttonPlayLanguage.forEach((button) => {
        button.disabled = true;
        button.style.opacity = 0.7
        button.style.cursor = "not-allowed";
    });

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

    setTimeout(() => {
        buttonPlayLanguage.forEach((button) => {
            button.disabled = false;
            button.style.opacity = 1;
            button.style.cursor = "pointer"
        });
    }, messageDurationInSeconds * 1000); // turn seonds into ms
}

