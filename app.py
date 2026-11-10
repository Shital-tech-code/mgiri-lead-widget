import os
from pathlib import Path
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse, HTMLResponse
from pydantic import BaseModel
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

app = FastAPI(title="MGIRI Lead Form")

# Website integration के लिए CORS setup
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=False,
    allow_methods=["GET", "POST", "OPTIONS"],
    allow_headers=["*"],
)

# -------------------------------------------------------------
# EMAIL CONFIGURATION
# -------------------------------------------------------------
SENDER_EMAIL = "shitaldhok0@gmail.com"
SENDER_PASSWORD = "txvn jjgs qdun zdoh"
RECEIVER_EMAIL = "shitaldhok0@gmail.com"


def send_lead_email(name: str, phone: str, email: str, interested_in: str):
    """Lead details को Gmail पर भेजने के लिए फंक्शन"""
    try:
        subject = f"🔔 New MGIRI Lead: {name}"
        body = f"""
        MGIRI Portal पर नई लीड प्राप्त हुई है:

        👤 Name: {name}
        📞 Phone: {phone}
        ✉️ Email: {email}
        🎯 Interested In: {interested_in}
        """

        msg = MIMEMultipart()
        msg['From'] = SENDER_EMAIL
        msg['To'] = RECEIVER_EMAIL
        msg['Subject'] = subject
        msg.attach(MIMEText(body, 'plain', 'utf-8'))

        with smtplib.SMTP_SSL('smtp.gmail.com', 465) as server:
            server.login(SENDER_EMAIL, SENDER_PASSWORD)
            server.sendmail(SENDER_EMAIL, RECEIVER_EMAIL, msg.as_string())
        
        print("✅ Email successfully sent!")
        return True
    except Exception as e:
        print(f"❌ Failed to send email: {e}")
        return False


class LeadRequest(BaseModel):
    name: str
    phone: str
    email: str
    interested_in: str


BASE_DIR = Path(__file__).resolve().parent
WIDGET_FILE = BASE_DIR / "widget.js"


@app.get("/", response_class=HTMLResponse)
def home():
    return """
    <!DOCTYPE html>
    <html lang="hi">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>MGIRI Lead Assistant</title>
    </head>
    <body style="margin: 0; background-color: #f8f9fa;">
        <script src="/widget.js"></script>
    </body>
    </html>
    """


@app.get("/widget.js")
def get_widget():
    if not WIDGET_FILE.exists():
        return HTMLResponse("widget.js file nahi mili.", status_code=404)
    return FileResponse(WIDGET_FILE, media_type="application/javascript")


@app.get("/health")
def health():
    return {"status": "ok", "service": "MGIRI Lead Collector"}


@app.post("/api/save-lead")
def save_lead(lead: LeadRequest):
    print(f"📥 Lead Received -> Name: {lead.name}, Phone: {lead.phone}, Email: {lead.email}, Interest: {lead.interested_in}")
    
    email_status = send_lead_email(lead.name, lead.phone, lead.email, lead.interested_in)
    
    if email_status:
        return {"status": "success", "message": "Details saved and email sent successfully!"}
    else:
        return {"status": "success", "message": "Details saved, but failed to send email."}