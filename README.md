## AnswersAi Take-Home Assessment

### Project Overview
This is a simplified version of Brilliant's learning platform, implementing the landing page, authentication flow, and dashboard as per the requirements.

### Setup Instructions
1. Clone the repository:
   ```bash
    git clone https://github.com/RajK01/answerAI_work.git
2. Install dependencies
   ```bash
   npm install
   ```
   ```
   npm install firebase
   ```

4. Configure environment variables
   Create a `.env` file in the root directory and add your Firebase configuration values:
   ```plaintext
   VITE_FIREBASE_API_KEY=AIzaSyBPnGiF4Pebb26Mi3UzRQ_795lMd1x1msc
   VITE_FIREBASE_AUTH_DOMAIN=answerai-fe26a.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=answerai-fe26a
   VITE_FIREBASE_STORAGE_BUCKET=answerai-fe26a.firebasestorage.app
   VITE_FIREBASE_MESSAGING_SENDER_ID=959880959832
   VITE_FIREBASE_APP_ID=1:959880959832:web:3de01f7a0260a0564f372d
   VITE_FIREBASE_MEASUREMENT_ID=G-7DS8WW327T
   ```

5. Run the application
   ```bash
   npm run dev
   ```

6. Build for production
   ```bash
   npm run build
   ```
### Note:
        I have implemented GAuth to Login and redirect to Dashboard.
