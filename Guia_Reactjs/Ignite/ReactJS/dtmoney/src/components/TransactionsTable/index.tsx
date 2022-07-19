import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TrasactionsTable() {
    const url = "transactions"
    useEffect(() => {
        try {
            api.get(url)
            .then(response => console.log(response.data))
        } catch (e) {
            console.log(e)
        }

    }, [])

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Preço</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Desenvolvimento de Web Site</td>
                        <td className="deposit">R$13.000,00</td>
                        <td>Desenvolvimento</td>
                        <td>19/07/2022</td>
                    </tr>

                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw">- R$1.000,00</td>
                        <td>Casa</td>
                        <td>10/07/2022</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}