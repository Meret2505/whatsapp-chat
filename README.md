WhatsApp Chat App
A simple React-based chat application that allows users to send and receive text messages via WhatsApp using the GREEN-API .

Table of Contents
Features
Prerequisites
Installation
Usage
Deployment
Error Handling
Contributing
License
Features
Send and Receive Messages : Send text messages to any WhatsApp number and receive replies in real-time.
User-Friendly Interface : Styled with TailwindCSS to mimic the look and feel of WhatsApp Web.
Responsive Design : Works seamlessly on desktop and mobile devices.
Error Handling : Displays error messages for invalid inputs or API failures.
Sender Name Display : Fetches and displays the sender's name (if available) instead of their phone number.
TypeScript Support : Built with TypeScript for type safety and better developer experience.
Prerequisites
Before running the app, ensure you have the following:

Node.js (v16 or higher): Download from here .
npm or yarn : Comes bundled with Node.js.
GREEN-API Account : Sign up at https://green-api.com/ and create an instance to get your idInstance and apiTokenInstance.
Installation
Step 1: Clone the Repository
```
git clone https://github.com/your-username/whatsapp-chat.git
cd whatsapp-chat
```

Step 2: Install Dependencies
Install all required dependencies using npm or yarn:
```
npm install
```

Step 3: Configure GREEN-API Credentials
Log in to your GREEN-API dashboard: https://console.green-api.com/ .
Create a new instance and note down your idInstance and apiTokenInstance.
Use these credentials when logging into the app.
Usage
Step 1: Start the Development Server
Run the app locally:
```
npm start
```

The app will launch in your browser at http://localhost:3000.

Step 2: Log In
Open the app in your browser.
Enter your idInstance and apiTokenInstance from GREEN-API on the login page.
Click the "Войти" button to proceed to the chat interface.
Step 3: Start a Chat
Enter the recipient's phone number in the "Номер телефона получателя" field (e.g., 99364380429).
The app will automatically append @c.us to the phone number.
Type your message in the input field at the bottom of the chat interface.
Click the "Отправить" button to send the message.
Step 4: Receive Messages
When the recipient replies to your message in WhatsApp, their response will appear in the chat interface.

Deployment
Option 1: Deploy to Vercel
Install the Vercel CLI:
```
npm install -g vercel
```

Deploy the app:
```
vercel
```

Option 2: Deploy to Netlify
Push your code to a GitHub repository.
Go to Netlify and connect your repository.
Follow the prompts to deploy the app.
Option 3: Deploy to GitHub Pages
Build the app:
```
npm run build
```
Deploy the build folder to GitHub Pages.


Error Handling
If an error occurs (e.g., invalid credentials, failed API requests), it will be displayed in a red banner at the top of the app.
Common errors include:
Incorrect idInstance or apiTokenInstance.
Invalid phone number format.
Network issues or API downtime.


Contributing
Contributions are welcome! To contribute:

Fork the repository.
Create a new branch (git checkout -b feature/YourFeatureName).
Commit your changes (git commit -m 'Add some feature').
Push to the branch (git push origin feature/YourFeatureName).
Open a pull request.


Additional Notes
Ensure the recipient's phone number is registered on WhatsApp and has an active internet connection.
For better reliability, consider setting up a webhook in GREEN-API to receive real-time notifications.
If you encounter any issues, contact GREEN-API support at support@green-api.com .
