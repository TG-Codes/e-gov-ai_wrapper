const express = require('express');
const { exec } = require('child_process');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static('frontend'));

app.post('/api/ask', (req, res) => {
    const question = req.body.question;
    exec(`python3 backend/ai_service.py "${question}"`, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error: ${error.message}`);
            return res.status(500).json({ error: 'AI Service error' });
        }
        res.json({ answer: stdout.trim() });
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
