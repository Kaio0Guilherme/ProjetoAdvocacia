const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();

// Middleware para processar JSON
app.use(bodyParser.json());

// Rota para enviar e-mails
app.post('/send-email', async (req, res) => {
    const { nome, telefone, advogado, dataHora } = req.body;

    try {
        // Configurar o transporte do Nodemailer
        const transporter = nodemailer.createTransport({
            service: 'Gmail', // Altere para o serviço que você está usando (Outlook, Yahoo, etc.)
            auth: {
                user: 'seu_email@gmail.com', // Seu e-mail
                pass: 'sua_senha',          // Sua senha de aplicativo (não use a senha da conta diretamente)
            },
        });

        // Detalhes do e-mail
        const mailOptions = {
            from: 'seu_email@gmail.com',
            to: 'email_secretaria@gmail.com', // E-mail da secretária
            subject: `Novo Agendamento com ${advogado}`,
            html: `
                <h3>Detalhes do Agendamento</h3>
                <p><strong>Nome:</strong> ${nome}</p>
                <p><strong>Telefone:</strong> ${telefone}</p>
                <p><strong>Advogado:</strong> ${advogado}</p>
                <p><strong>Data/Hora:</strong> ${dataHora}</p>
            `,
        };

        // Enviar o e-mail
        await transporter.sendMail(mailOptions);
        res.status(200).send('Email enviado com sucesso!');
    } catch (error) {
        console.error('Erro ao enviar o e-mail:', error);
        res.status(500).send('Erro ao enviar o e-mail.');
    }
});

// Iniciar o servidor na porta 3000
app.listen(3000, () => console.log('Servidor rodando em http://localhost:3000'));
