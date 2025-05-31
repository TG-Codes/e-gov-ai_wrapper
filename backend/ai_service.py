import sys
import google.generativeai as genai

api_key = 'AIzaSyCASu0OrwpkroHYUslJuo_ZHAiQ_NHfZMs'
genai.configure(api_key=api_key)
model = genai.GenerativeModel('gemini-pro')

question = sys.argv[1]

response = model.generate_content(f"You are a helpful assistant for Nigerian government services. Answer: {question}")
print(response.text)
