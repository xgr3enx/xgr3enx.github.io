const generateBtn = document.querySelector(".generateBtn");
let run = true;

generateBtn.addEventListener("click", generateRandomNum);

function generateRandomNum() {
	let randomNumE0 = document.querySelector(".randomNumE0");
	let randomNumEl = document.querySelector(".randomNumEl");
    const fromNum = parseInt(document.querySelector(".fromNum").value);
    const toNum = parseInt(document.querySelector(".toNum").value);

    let randomNum = Math.floor(Math.random() * (toNum - fromNum + 1)) + fromNum;

    if (run === false) {
        randomNumE0.innerHTML = randomNumEl.innerHTML;
        randomNumEl.innerHTML = randomNum;
        randomNumE0 = randomNumEl;
    }
	
    if (run === true) {
        randomNumEl.innerHTML = randomNum;
        run = false;
    }
}

function translatePage() {
    let heading = document.getElementById('heading');
    let content1 = document.getElementById('content1');
    let content2 = document.getElementById('content2');
    let content3 = document.getElementById('content3');
    let content4 = document.getElementById('content4');
    let generateBtn = document.getElementById('generateBt');
    let translateBtn = document.getElementById('translateBtn');

    if (heading.textContent === 'Генератор рандомных чисел') {
        heading.textContent = 'Random number generator';
        content1.textContent = 'From:';
        content2.textContent = 'To:';
        content3.textContent = 'New number:';
        content4.textContent = 'Old number:';
        generateBtn.textContent = 'Generate';
        translateBtn.innerHTML = '<svg width="100" height="100" viewBox="0 0 512 512" style="color:currentColor" xmlns="http://www.w3.org/2000/svg" class="h-full w-full"><rect width="512" height="512" x="0" y="0" rx="30" fill="transparent" stroke="transparent" stroke-width="0" stroke-opacity="100%" paint-order="stroke"></rect><svg width="256px" height="256px" viewBox="0 0 512 512" fill="currentColor" x="128" y="128" role="img" style="display:inline-block;vertical-align:middle" xmlns="http://www.w3.org/2000/svg"><g fill="currentColor"><mask id="circleFlagsRu0"><circle cx="256" cy="256" r="256" fill="#fff"/></mask><g mask="url(#circleFlagsRu0)"><path fill="#0052b4" d="M512 170v172l-256 32L0 342V170l256-32z"/><path fill="#eee" d="M512 0v170H0V0Z"/><path fill="#d80027" d="M512 342v170H0V342Z"/></g></g></svg></svg>';
    }
    else if (heading.textContent === 'Random number generator') {
        heading.textContent = 'Генератор рандомных чисел';
        content1.textContent = 'От:';
        content2.textContent = 'До:';
        content3.textContent = 'Новое число:';
        content4.textContent = 'Старое число:';
        generateBtn.textContent = 'Генерировать';
        translateBtn.innerHTML = '<svg width="100" height="100" viewBox="0 0 512 512" style="color:currentColor" xmlns="http://www.w3.org/2000/svg" class="h-full w-full"><rect width="512" height="512" x="0" y="0" rx="30" fill="transparent" stroke="transparent" stroke-width="0" stroke-opacity="100%" paint-order="stroke"></rect><svg width="256px" height="256px" viewBox="0 0 512 512" fill="currentColor" x="128" y="128" role="img" style="display:inline-block;vertical-align:middle" xmlns="http://www.w3.org/2000/svg"><g fill="currentColor"><mask id="circleFlagsGb0"><circle cx="256" cy="256" r="256" fill="#fff"/></mask><g mask="url(#circleFlagsGb0)"><path fill="#eee" d="m0 0l8 22l-8 23v23l32 54l-32 54v32l32 48l-32 48v32l32 54l-32 54v68l22-8l23 8h23l54-32l54 32h32l48-32l48 32h32l54-32l54 32h68l-8-22l8-23v-23l-32-54l32-54v-32l-32-48l32-48v-32l-32-54l32-54V0l-22 8l-23-8h-23l-54 32l-54-32h-32l-48 32l-48-32h-32l-54 32L68 0H0z"/><path fill="#0052b4" d="M336 0v108L444 0Zm176 68L404 176h108zM0 176h108L0 68ZM68 0l108 108V0Zm108 512V404L68 512ZM0 444l108-108H0Zm512-108H404l108 108Zm-68 176L336 404v108z"/><path fill="#d80027" d="M0 0v45l131 131h45L0 0zm208 0v208H0v96h208v208h96V304h208v-96H304V0h-96zm259 0L336 131v45L512 0h-45zM176 336L0 512h45l131-131v-45zm160 0l176 176v-45L381 336h-45z"/></g></g></svg></svg>';
    }
}