import express from "express";
import cors from "cors";


const feriados = [
    { date: "1/1/2022", name: "Confraternização mundial" },
    { date: "1/3/2022", name: "Carnaval" },
    { date: "4/17/2022", name: "Páscoa" },
    { date: "4/21/2022", name: "Tiradentes" },
    { date: "5/1/2022", name: "Dia do trabalho" },
    { date: "6/16/2022", name: "Corpus Christi" },
    { date: "9/7/2022", name: "Independência do Brasil" },
    { date: "10/12/2022", name: "Nossa Senhora Aparecida" },
    { date: "11/2/2022", name: "Finados" },
    { date: "11/15/2022", name: "Proclamação da República" },
    { date: "12/25/2022", name: "Natal" }
];


const app = express();
app.use(cors());

const porta = 5000;

app.get("/holidays",
    (request, response) => {
        response.send(feriados);
    }
)

app.get("/is-today-holiday",
    (request, response) => {
        const hoje = new Date().toLocaleDateString();

        const feriadosHoje = feriados.filter(
            (feriado) => {
                const data = new Date(feriado.date).toLocaleDateString();

                if (data === hoje){
                    return true;
                }

                return false;
            }
        )

        if (feriadosHoje.length === 0){
            response.send("Não, hoje não é feriado");
        }
        else {
            const feriadoHoje = feriadosHoje[0];

            response.send(`Sim, hoje é ${feriadoHoje.name}`);
        } 
    }
)

app.listen(porta,
    () => {
        console.log(`Servidor funcionando na porta ${porta}...`);
    }
)

