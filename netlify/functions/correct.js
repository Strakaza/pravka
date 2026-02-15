const prompts = {
    fr: (text) => `Corrige les fautes d'orthographe et de grammaire dans le texte suivant. Réponds uniquement avec le texte corrigé, sans commentaires. Texte : "${text}"`,
    en: (text) => `Correct spelling and grammar mistakes in the following text. Respond only with the corrected text, no comments. Text: "${text}"`,
    es: (text) => `Corrige los errores ortográficos y gramaticales en el siguiente texto. Responde solo con el texto corregido, sin comentarios. Texto: "${text}"`,
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
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    try {
        const { text, lang } = JSON.parse(event.body);
        const API_KEY = process.env.OPENROUTER_API_KEY;
        const MODEL_NAME = "stepfun/step-3.5-flash:free";
        const API_URL = "https://openrouter.ai/api/v1/chat/completions";

        if (!text || !lang || !prompts[lang]) {
            return { statusCode: 400, body: 'Bad Request: missing text or lang' };
        }

        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${API_KEY}`,
                'HTTP-Referer': 'https://pravka.netlify.app',
                'X-Title': 'Pravka',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "model": MODEL_NAME,
                "messages": [
                    { "role": "user", "content": prompts[lang](text) }
                ]
            })
        });

        if (!response.ok) {
            const errorDetails = await response.text();
            throw new Error(`API error: ${response.status} ${response.statusText} - ${errorDetails}`);
        }

        const data = await response.json();
        const correctedText = data.choices[0].message.content;

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
