// api.js – Laad en verwerk Grepolis-data van *.txt-bestanden

const GrepoBotAPI = (() => {
    const world = location.host.split(".")[0]; // bijv. "nl120"
    const baseUrl = `https://${world}.grepolis.com/data`;

    /**
     * Haal en parse een .txt bestand (tabgescheiden)
     * @param {string} fileName bijv. 'players.txt'
     * @param {string[]} headers - kolomnamen als geen header in bestand staat
     * @returns {Promise<Object[]>}
     */
    async function fetchTxt(fileName, headers) {
        const res = await fetch(`${baseUrl}/${fileName}`);
        const text = await res.text();
        const lines = text.trim().split("\n");

        return lines.map(line => {
            const values = line.split("\t");
            const obj = {};
            headers.forEach((h, i) => obj[h] = values[i]);
            return obj;
        });
    }

    return {
        fetchTxt
    };
})();

// Voorbeeldgebruik:
// GrepoBotAPI.fetchTxt('players.txt', ['id','name','alliance_id','points','rank','towns'])
//   .then(data => console.log(data));
