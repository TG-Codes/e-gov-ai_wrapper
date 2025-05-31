# AI FAQ Assistant

This is a simple demo project that integrates the Gemini API (via Google) with a Node.js backend and a basic frontend.

## Setup

1. **Install dependencies:**
   ```bash
   npm install express
   ```

2. **Generate your Gemini API key:**
   - Visit [Google AI Studio (Gemini API)](https://makersuite.google.com/app/apikey) to create your API key.
   - Replace `'YOUR_API_KEY'` in `backend/ai_service.py` with your actual key.

3. **Start the server:**
   ```bash
   node backend/server.js
   ```

4. **Access the frontend:**
   - Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

- Enter any government service-related question in the input field.
- The system uses the Gemini API to provide an accurate, helpful answer.

## Running the Python Script Directly

You can also test the AI service manually:

1. Install the required package:
   ```bash
   pip install google-generativeai
   ```

2. Run the script:
   ```bash
   python3 backend/ai_service.py "How do I renew my driver's license in Nigeria?"
   ```

3. The script will print the answer in the terminal.

## Resources

- **Gemini API Key Generation:** [https://makersuite.google.com/app/apikey](https://makersuite.google.com/app/apikey)
- **Gemini API Docs:** [https://cloud.google.com/vertex-ai/generative-ai/docs/overview](https://cloud.google.com/vertex-ai/generative-ai/docs/overview)

## Note

This is a demo. For production:
- Add error handling.
- Secure the API key.
- Use environment variables for sensitive data.
- Deploy using a secure hosting platform.

Let’s build responsible AI for public service! 🌟
