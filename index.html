
const API_URL = `/.netlify/functions/correct`;

const userInput = document.getElementById('userInput');
const correctedOutput = document.getElementById('correctedOutput');
const loader = document.getElementById('loader');
const languageBtn = document.getElementById('language-btn');
const languageDropdown = document.getElementById('language-dropdown');
const copyBtn = document.getElementById('copy-btn');

const translations = {
    fr: {
        title: "Pravka - Correcteur Orthographique IA",
        subtitle: "Propulsé par NVIDIA Nemotron",
        inputLabel: "Votre texte",
        inputPlaceholder: "Commencez à taper votre texte ici...",
        outputLabel: "Texte corrigé",
        loadingText: "Pravka corrige...",
        footerText: "Страказа живая",
        copyTooltip: "Copier le texte",
        copiedTooltip: "Copié !"
    },
    en: {
        title: "Pravka - AI Spelling Corrector",
        subtitle: "Powered by NVIDIA Nemotron",
        inputLabel: "Your text",
        inputPlaceholder: "Start typing your text here...",
        outputLabel: "Corrected text",
        loadingText: "Pravka is correcting...",
        footerText: "Страказа живая",
        copyTooltip: "Copy text",
        copiedTooltip: "Copied!"
    },
    es: {
        title: "Pravka - Corrector Ortográfico IA",
        subtitle: "Corrección instantánea por NVIDIA Nemotron",
        inputLabel: "Su texto",
        inputPlaceholder: "Comience a escribir su texto aquí...",
        outputLabel: "Texto corregido",
        loadingText: "Pravka corrigiendo...",
        footerText: "Страказа живая",
        copyTooltip: "Copiar texto",
        copiedTooltip: "¡Copiado!"
    },
    zh: {
        title: "Pravka - AI拼写检查器",
        subtitle: "由 NVIDIA Nemotron 提供支持",
        inputLabel: "您的文本",
        inputPlaceholder: "开始在这里输入您的文本...",
        outputLabel: "校正后的文本",
        loadingText: "Pravka正在校正...",
        footerText: "Страказа живая",
        copyTooltip: "复制文本",
        copiedTooltip: "已复制"
    },
    hi: {
        title: "Pravka - AI वर्तनी संशोधक",
        subtitle: "NVIDIA Nemotron द्वारा संचालित",
        inputLabel: "आपका पाठ",
        inputPlaceholder: "अपना पाठ यहाँ टाइप करना शुरू करें...",
        outputLabel: "सही किया गया पाठ",
        loadingText: "Pravka सुधार रहा है...",
        footerText: "Страказа живая",
        copyTooltip: "टेक्स्ट कॉपी करें",
        copiedTooltip: "कॉपी किया गया!"
    },
    ar: {
        title: "Pravka - مصحح الإملاء بالذكاء الاصطناعي",
        subtitle: "مدعوم من NVIDIA Nemotron",
        inputLabel: "نصك",
        inputPlaceholder: "ابدأ بكتابة نصك هنا...",
        outputLabel: "النص المصحح",
        loadingText: "Pravka يقوم بالتصحيح...",
        footerText: "Страказа живая",
        copyTooltip: "نسخ النص",
        copiedTooltip: "تم النسخ!"
    },
    pt: {
        title: "Pravka - Corretor Ortográfico IA",
        subtitle: "Correção instantânea por NVIDIA Nemotron",
        inputLabel: "Seu texto",
        inputPlaceholder: "Comece a digitar seu texto aqui...",
        outputLabel: "Texto corrigido",
        loadingText: "Pravka está corrigindo...",
        footerText: "Страказа живая",
        copyTooltip: "Copiar texto",
        copiedTooltip: "Copiado!"
    },
    bn: {
        title: "Pravka - AI বানান সংশোধক",
        subtitle: "কৃত্রিম বুদ্ধিমত্তা দ্বারা তাত্ক্ষণিক সংশোধন",
        inputLabel: "আপনার পাঠ্য",
        inputPlaceholder: "আপনার পাঠ্য এখানে টাইপ করা শুরু করুন...",
        outputLabel: "সংশোধিত পাঠ্য",
        loadingText: "Pravka সংশোধন করছে...",
        footerText: "Страказа живая",
        copyTooltip: "টেক্সট কপি করুন",
        copiedTooltip: "কপি করা হয়েছে!"
    },
    ru: {
        title: "Pravka - AI Корректор орфографии",
        subtitle: "Мгновенная коррекция с помощью искусственного интеллекта",
        inputLabel: "Ваш текст",
        inputPlaceholder: "Начните вводить текст здесь...",
        outputLabel: "Исправленный текст",
        loadingText: "Pravka исправляет...",
        footerText: "Страказа живая",
        copyTooltip: "Скопировать текст",
        copiedTooltip: "Скопировано!"
    },
    ja: {
        title: "Pravka - AI スペルチェッカー",
        subtitle: "人工知能による即時校正",
        inputLabel: "あなたのテキスト",
        inputPlaceholder: "ここにテキストを入力してください...",
        outputLabel: "修正されたテキスト",
        loadingText: "Pravkaが修正中...",
        footerText: "Страказа живая",
        copyTooltip: "テキストをコピー",
        copiedTooltip: "コピーしました！"
    },
    pa: {
        title: "Pravka - AI ਸਪੈਲਿੰਗ ਕੋਰੈਕਟਰ",
        subtitle: "ਕ੍ਰਿਤਰਮ ਬੁੱਧੀ ਦੁਆਰਾ ਤੁਰੰਤ ਸੁਧਾਰ",
        inputLabel: "ਤੁਹਾਡਾ ਟੈਕਸਟ",
        inputPlaceholder: "ਆਪਣਾ ਟੈਕСтраказа живаят ਇੱਥੇ ਟਾਈਪ ਕਰਨਾ ਸ਼ੁਰੂ ਕਰੋ...",
        outputLabel: "ਸਹੀ ਕੀਤਾ ਟੈਕਸਟ",
        loadingText: "Pravka ਸੁਧਾਰ ਰਿਹਾ ਹੈ...",
        footerText: "Страказа живая",
        copyTooltip: "ਟੈਕਸਟ ਕਾਪੀ ਕਰੋ",
        copiedTooltip: "ਕਾਪੀ ਕੀਤਾ ਗਿਆ!"
    }
};

let debounceTimer;
let currentLanguage = 'fr';



function updateLanguage(lang) {
    currentLanguage = lang;
    const texts = translations[lang];

    document.title = texts.title;
    document.querySelector('.header p').textContent = texts.subtitle;
    document.querySelector('.input-section label').textContent = texts.inputLabel;
    userInput.placeholder = texts.inputPlaceholder;
    document.querySelector('.output-section label').textContent = texts.outputLabel;
    document.querySelector('.loader span').textContent = texts.loadingText;
    document.querySelector('.footer-text').textContent = texts.footerText;
    copyBtn.title = texts.copyTooltip;

    const selectedLang = languageDropdown.querySelector(`button[data-lang="${lang}"]`);
    if (selectedLang) {
        const flagImg = selectedLang.querySelector('.flag-icon').src;
        const text = selectedLang.textContent.trim();
        languageBtn.innerHTML = `
            <img src="${flagImg}" class="flag-icon" alt="${lang}">
            <span>${text}</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                <path d="M6 9L12 15L18 9" stroke="#4C4A48" stroke-width="2"/>
            </svg>
        `;
    }

    languageDropdown.classList.add('hidden');
}


function highlightDifferences(originalText, correctedText) {
    const originalWords = originalText.split(/(\s+)/);
    const correctedWords = correctedText.split(/(\s+)/);

    const dp = Array(correctedWords.length + 1).fill(null).map(() => Array(originalWords.length + 1).fill(0));

    for (let i = 1; i <= correctedWords.length; i++) {
        for (let j = 1; j <= originalWords.length; j++) {
            if (correctedWords[i - 1] === originalWords[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    let result = [];
    let i = correctedWords.length;
    let j = originalWords.length;

    while (i > 0 || j > 0) {
        if (i > 0 && j > 0 && correctedWords[i - 1] === originalWords[j - 1]) {
            result.unshift(correctedWords[i - 1]);
            i--;
            j--;
        } else if (i > 0 && (j === 0 || dp[i][j] === dp[i - 1][j])) {
            result.unshift(`<span class="highlight">${correctedWords[i - 1]}</span>`);
            i--;
        } else if (j > 0 && (i === 0 || dp[i][j] === dp[i][j - 1])) {
            j--;
        } else {
            if (i > 0) {
                result.unshift(`<span class="highlight">${correctedWords[i - 1]}</span>`);
            }
            i--;
            j--;
        }
    }
    return result.join('');
}


async function getCorrectionFromAPI(text) {
    if (!text.trim()) {
        correctedOutput.innerHTML = '';
        return;
    }

    loader.classList.remove('hidden');

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                text: text,
                lang: currentLanguage
            })
        });

        if (!response.ok) {
            throw new Error(`Erreur: ${response.statusText}`);
        }

        const data = await response.json();
        const correctedText = data.correctedText;
        const originalText = userInput.value;

        correctedOutput.innerHTML = highlightDifferences(originalText, correctedText);

    } catch (error) {
        console.error("Erreur lors de l'appel à la fonction:", error);
        const errorMessages = {
            fr: "Une erreur est survenue. Veuillez réessayer.",
            en: "An error occurred. Please try again.",
            es: "Ocurrió un error. Por favor, intente nuevamente.",
            zh: "发生错误。请重试。",
            hi: "एक त्रुटि हुई। कृपया पुनः प्रयास करें।",
            ar: "حدث خطأ. يرجى المحاولة مرة أخرى.",
            pt: "Ocorreu um erro. Por favor, tente novamente.",
            bn: "একটি ত্রুটি হয়েছে। অনুগ্রহপূর্বক আবার চেষ্টা করুন।",
            ru: "Произошла ошибка. Пожалуйста, попробуйте еще раз.",
            ja: "エラーが発生しました。もう一度お試しください。",
            pa: "ਇੱਕ ਗਲਤੀ ਆਈ ਹੈ। ਕਿਰਪਾ ਕਰਕੇ ਦੁਬਾਰਾ ਕੋਸ਼ਿਸ਼ ਕਰੋ।"
        };
        correctedOutput.textContent = errorMessages[currentLanguage];
    } finally {
        loader.classList.add('hidden');
    }
}


userInput.addEventListener('input', () => {
    clearTimeout(debounceTimer);

    debounceTimer = setTimeout(() => {
        const textToCorrect = userInput.value;
        getCorrectionFromAPI(textToCorrect);
    }, 800);
});

languageBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    languageDropdown.classList.toggle('hidden');
});

copyBtn.addEventListener('click', () => {
    const textToCopy = correctedOutput.textContent;
    if (textToCopy) {
        navigator.clipboard.writeText(textToCopy).then(() => {
            const originalIcon = '<i class="fas fa-copy"></i>';
            const texts = translations[currentLanguage];

            copyBtn.innerHTML = '<i class="fas fa-check"></i>';
            copyBtn.title = texts.copiedTooltip;

            setTimeout(() => {
                copyBtn.innerHTML = originalIcon;
                copyBtn.title = texts.copyTooltip;
            }, 2000);
        }).catch(err => {
            console.error('Erreur lors de la copie :', err);
        });
    }
});

document.addEventListener('click', () => {
    languageDropdown.classList.add('hidden');
});

languageDropdown.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', (e) => {
        const lang = e.target.closest('button').dataset.lang;
        updateLanguage(lang);
    });
});

languageDropdown.addEventListener('click', (e) => {
    e.stopPropagation();
});

updateLanguage('fr');
