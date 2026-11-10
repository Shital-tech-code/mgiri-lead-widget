MGIRI CHATBOT WIDGET — TESTING GUIDE

1. Is folder ko VS Code mein open karein.
2. app.py ke liye neeche diye gaye install/run commands use karein:
   pip install -r requirements.txt
   uvicorn app:app --reload
3. Browser mein http://127.0.0.1:8000/widget.js open karke check karein ki script load ho rahi hai.
4. Website par add karne ke liye, public HTTPS hosting ke baad website administrator yeh script add karega:
   <script src="https://YOUR-HOSTED-CHATBOT-DOMAIN/widget.js"></script>
   YOUR-HOSTED-CHATBOT-DOMAIN ko actual deployed server URL se replace karna hoga.

IMPORTANT:
- Yeh keyword/rule-based demo hai; AI API use nahi karta.
- Localhost sirf aapke computer par chalta hai. Isse seedha public MGIRI website par nahi lagaya ja sakta.
- Live website integration ke liye app ko HTTPS server par host karna aur CORS allowed origins set karna zaroori hai.
- Publish karne se pehle answer text, phone/email aur links ko official MGIRI sources se verify karein.
