// functions.js

/**
 * Creëert een HTML-tabel gegeven kopteksten en rijen.
 * @param {Array} headers Lijst van kolomkoppen (strings)
 * @param {Array} rows    2D-array van rijen en cellen
 * @returns {HTMLElement} <table> element
 */
function createTable(headers, rows) {
  const table = document.createElement('table');
  table.style.width = '100%';
  table.border = '1';

  const thead = table.createTHead();
  const headerRow = thead.insertRow();
  headers.forEach(text => {
    const th = document.createElement('th');
    th.textContent = text;
    headerRow.appendChild(th);
  });

  const tbody = table.createTBody();
  rows.forEach(rowData => {
    const row = tbody.insertRow();
    rowData.forEach(cellData => {
      const cell = row.insertCell();
      cell.textContent = cellData;
    });
  });

  return table;
}

/**
 * Sluimerfunctie: wacht een opgegeven aantal milliseconden.
 * @param {number} ms Milliseconden om te wachten
 * @returns {Promise} Promise die resolves na de opgegeven tijd
 */
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
