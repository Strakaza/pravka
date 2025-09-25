// Fichier : netlify/functions/correct.js

// Les prompts qu'on avait dans le script.js, maintenant sur le serveur
const prompts = {
    fr: (text) => `Corrige les fautes d'orthographe et de grammaire dans le texte suivant. Réponds uniquement avec le texte corrigé, sans commentaires. Texte : "${text}"`,
    en: (text) => `Correct spelling and grammar mistakes in the following text. Respond only with the corrected text, no comments. Text: "${text}"`,
    es: (text) => `Corrige los errores ortográficos y gramaticales en el siguiente texto. Responde solo con el texto corregido, sin comentarios. Texto: "${text}"`,
    // ... Ajoutez ici TOUS les autres prompts pour chaque langue
    zh: (text) => `纠正以下文本中的拼写和语法错误。仅回复纠正后的文本，不要评论。文本："${text}"`,
    hi: (text) => `निम्नलिखित पाठ में वर्तनी और व्याकरण की गलतियों को सही करें। केवल सही किया गया पाठ दें, कोई टिप्पणी नहीं। पाठ: "${text}"`,
    ar: (text) => `صحح الأخطاء الإملائية والنحوية في النص التالي. أجب فقط بالنص المصحح، دون تعليقات. النص: "${text}"`,
    pt: (text) => `Corrija erros de ortografia e gramática no texto a seguir. Responda apenas com o texto corrigido, sem comentários. Texto: "${text}"`,
    bn: (text) => `নিম্নলিখিত পাঠ্যে বানান ও ব্যাকরণের ভুলগুলি সংশোধন করুন। শুধুমাত্র সংশোধিত পাঠ্য দিয়ে উত্তর দিন, কোন মন্তব্য নেই। পাঠ্য: "${text}"`,
    ru: (text) => `Исправьте орфографические и грамматические ошибки в следующем тексте. Ответьте только исправленным текстом, без комментариев. Текст: "${text}"`,
    ja: (text) => `以下のテキストのスペルと文法の誤りを修正してください。修正されたテキストのみで応答し、コメントは含めないでください。テキスト: "${text}"`,
    pa: (text) => `ਹੇਠਾਂ ਦਿੱਤੇ ਟੈਕਸਟ ਵਿੱਚ ਸਪੈਲਿੰਗ ਅਤੇ ਵਿਆਕਰਨ ਦੀਆਂ ਗਲਤੀਆਂ ਨੂੰ ਸਹੀ ਕਰੋ। ਸਿਰਫ਼ ਸਹੀ ਕੀਤੇ ਟੈਕਸਟ ਨਾਲ ਜਵਾਬ ਦਿਓ, ਕੋਈ ਟਿੱਪਣੀ ਨਹੀਂ। ਟੈਕਸਟ: "${text}"`
};


exports.handler = async function (event, context) {
    // On ne traite que les requêtes POST
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    try {
        const { text, lang } = JSON.parse(event.body);
        
        // La clé API est récupérée de manière sécurisée depuis les variables d'environnement de Netlify
        const API_KEY = process.env.GEMINI_API_KEY;
        const MODEL_NAME = "gemini-2.5-flash-lite"; 
        const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL_NAME}:generateContent?key=${API_KEY}`;

        if (!text || !lang || !prompts[lang]) {
            return { statusCode: 400, body: 'Bad Request: missing text or lang' };
        }

        // Appel à l'API Gemini depuis le serveur
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{
                    parts: [{ text: prompts[lang](text) }]
                }]
            })
        });

        if (!response.ok) {
            throw new Error(`API error: ${response.statusText}`);
        }

        const data = await response.json();
        const correctedText = data.candidates[0].content.parts[0].text;
        
        // On renvoie le texte corrigé au client (votre script.js)
        return {
            statusCode: 200,
            body: JSON.stringify({ correctedText: correctedText.trim() }),
        };

    } catch (error) {
        console.error('Error in function:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "An internal error occurred." }),
        };
    }
};