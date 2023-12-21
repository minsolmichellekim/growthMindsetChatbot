# growthMindsetChatbot

This pipeline includes codes and example files for running and analyzing growth mindset chatbot. Due to privacy, we will not share the user data in this repository. 
First clone github repository to your local computer. 
Download the following packages with specific versions as below: 

    Python : 3.11.0
    express
    openai

## How to run server.jd
Once you open the folders, decide whether you will be using fixed or growth mindset chatbot. 
Replace 'your-api-key' with your actual OpenAI API key. 
Next, change port number as desired to be run on your local computer. 
```
const port = process.env.PORT || 3006
```
If you prefer other words to learn, you can also change the vocabularies you are going to learn int the system prompt. 
Once you have done all the previous steps, you are now ready to run the file. On your terminal, run the code below: 
```
Node server.js 
```
Once it is running, you are ready to open the chatbot.  
On Safari or your other browser, visit http://localhost:{Number specified in the code}/
