// goldbot.js
const GoldBot = {
  isRunning: false,

  /**
   * Start de GoldBot-cyclus (asychronus loop).
   */
  async start() {
    if (this.isRunning) return;
    this.isRunning = true;
    console.log('GoldBot gestart.');

    while (this.isRunning) {
      const cities = api.getCities();
      for (const city of cities) {
        // Voorbeeld: als het goud in de stad boven de limiet komt, handel dan.
        if (city.goud > config.goudLimit) {
          api.tradeGold(city.id, config.goudLimit, 'alliantie');
        }
        // TODO: Voeg logica toe voor gunsten en festivals indien nodig
        // Bijvoorbeeld:
        // if (config.favorEnabled) api.giveFavor(city.id, somePlayerId);
        // if (config.festivalEnabled) api.startFestival(city.id);
      }
      // Wacht configuratie-vertraging (in seconden omgezet naar ms)
      await sleep(config.delay * 1000);
    }
    console.log('GoldBot gestopt.');
  },

  /**
   * Stop de GoldBot-lus.
   */
  stop() {
    this.isRunning = false;
  }
};
