// ui.js
const ui = {
  /**
   * Bouw en toon het hoofdvenster van de UI.
   */
  setup() {
    const container = document.createElement('div');
    container.id = 'grepoBotUI';
    container.style.position = 'fixed';
    container.style.top = '50px';
    container.style.right = '10px';
    container.style.backgroundColor = 'white';
    container.style.border = '1px solid #000';
    container.style.padding = '10px';
    container.style.zIndex = 1000;

    container.innerHTML = `<h2>GrepoBot Bedieningspaneel</h2>`;

    // Configuratieformulier
    container.innerHTML += `
      <div>
        <label>Vertraging (s): <input id="gb-delay" type="number" value="${config.delay}" style="width:50px;"></label><br>
        <label>Goudlimiet: <input id="gb-goudLimit" type="number" value="${config.goudLimit}" style="width:60px;"></label><br>
        <label>Auto Start: <input id="gb-autoStart" type="checkbox" ${config.autoStart ? 'checked' : ''}></label><br>
        <button id="gb-saveConfig">Opslaan</button>
      </div>
      <hr>
      <button id="gb-start">Start GoldBot</button>
      <button id="gb-stop">Stop GoldBot</button>
      <hr>
      <h3>Steden</h3><div id="citiesTable"></div>
      <h3>Spelers</h3><div id="playersTable"></div>
      <h3>Allianties</h3><div id="alliancesTable"></div>
      <h3>Aanvallen</h3><div id="attacksTable"></div>
    `;

    document.body.appendChild(container);

    // Evenementen voor knoppen
    document.getElementById('gb-saveConfig').addEventListener('click', () => {
      config.delay = parseInt(document.getElementById('gb-delay').value, 10);
      config.goudLimit = parseInt(document.getElementById('gb-goudLimit').value, 10);
      config.autoStart = document.getElementById('gb-autoStart').checked;
      saveConfig();
      alert('Configuratie opgeslagen.');
    });
    document.getElementById('gb-start').addEventListener('click', () => GoldBot.start());
    document.getElementById('gb-stop').addEventListener('click', () => GoldBot.stop());

    // Tabellen vullen
    this.refreshTables();
  },

  /**
   * Ververs de gegevens in de tabellen voor steden, spelers, allianties en aanvallen.
   */
  refreshTables() {
    // Steden
    const cities = api.getCities();
    const cityHeaders = ['ID', 'Naam', 'Goud'];
    const cityRows = cities.map(c => [c.id, c.naam, c.goud]);
    const cityTable = createTable(cityHeaders, cityRows);
    const cityContainer = document.getElementById('citiesTable');
    cityContainer.innerHTML = ''; 
    cityContainer.appendChild(cityTable);

    // Spelers
    const players = api.getPlayers();
    const playerHeaders = ['ID', 'Naam', 'Rang'];
    const playerRows = players.map(p => [p.id, p.naam, p.rang]);
    const playerTable = createTable(playerHeaders, playerRows);
    const playerContainer = document.getElementById('playersTable');
    playerContainer.innerHTML = '';
    playerContainer.appendChild(playerTable);

    // Allianties
    const alliances = api.getAlliances();
    const allianceHeaders = ['ID', 'Naam', 'Leden'];
    const allianceRows = alliances.map(a => [a.id, a.naam, a.leden]);
    const allianceTable = createTable(allianceHeaders, allianceRows);
    const allianceContainer = document.getElementById('alliancesTable');
    allianceContainer.innerHTML = '';
    allianceContainer.appendChild(allianceTable);

    // Aanvallen
    const attacks = api.getAttacks();
    const attackHeaders = ['Bron-ID', 'Doel-ID', 'Tijd'];
    const attackRows = attacks.map(at => [at.source, at.target, at.time]);
    const attackTable = createTable(attackHeaders, attackRows);
    const attackContainer = document.getElementById('attacksTable');
    attackContainer.innerHTML = '';
    attackContainer.appendChild(attackTable);
  }
};
