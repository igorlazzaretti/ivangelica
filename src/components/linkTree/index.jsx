import { useState, useEffect } from 'react';
import Papa from 'papaparse';
import { List, Item } from '../../pages/home/styles';


export function Linktree() {

  const GOOGLE_SHEET_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRmYuJS3ywz9EvH1IhAn-AoyOxRch9ZovA2ZB1fGbTmMbpQmYwrubyIj359zDJXeYc7Etbw_00gqGcP/pub?gid=0&single=true&output=csv';

  const [links, setLinks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(GOOGLE_SHEET_CSV_URL)
      .then(response => {
        if (!response.ok) {
          throw new Error('Falha ao carregar os dados da planilha.');
        }
        return response.text();
      })
      .then(csvText => {
        Papa.parse(csvText, {
          header: true,
          complete: (results) => {
            setLinks(results.data);
            setIsLoading(false);
          },
          error: (err) => {
            throw new Error(err.message);
          }
        });
      })
      .catch(err => {
        console.error("Erro ao buscar dados:", err);
        setError(err.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Acalma o 💖! Carregando a agenda de eventos ...</div>;
  }

  if (error) {
    return <div>Erro ao carregar: {error}</div>;
  }

  return (
    <List>
      {links.map((item, index) => (

        <a
          key={`${item.link}-${index}`} // Chave mais estável
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Item>
            <img
              src={item.imagem}
              alt={`Imagem do Evento ${item.texto}`}
            />
            <p> {item.texto} </p>
          </Item>
        </a>
      ))}
    </List>
  );
}

export default Linktree;