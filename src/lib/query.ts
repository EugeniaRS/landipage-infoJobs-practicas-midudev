const INFOJOBS_API_ENDPONIT = 'https://api.infojobs.net/api/1/';
const TOKEN = import.meta.env.API_INFOJOBS_TOKEN;
export const query = (path: string) => {
    const url = `${INFOJOBS_API_ENDPONIT}${path}`;
    return fetch(url, {
        headers: {
            Authorization: `Basic ${TOKEN}`,
            'Content-Type': 'application/json',
        }
    }).then((res) => res.json());
}

// con esta lina de codigo nos aseguramos que le podemos pasar uno de todos los valores de la data   
type DictionaryId = 'study' | 'availability';

export const getDictionary = (getdictionaryId: DictionaryId) => {
    return query(`/dictionary/${getdictionaryId}`);
}