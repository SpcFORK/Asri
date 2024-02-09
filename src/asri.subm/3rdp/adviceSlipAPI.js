window.AdviceSlipAPI = class AdviceSlipAPI {
  baseURL = "https://api.adviceslip.com";

  /**
   * Fetches a random advice slip.
   * @param {Function} [callback] - Optional callback function for JSONP response.
   * @returns {Promise<Object>} A promise that resolves to the advice data.
   */
  async getRandomAdvice(callback = null) {
    const url = `${this.baseURL}/advice`;
    if (callback) {
      return this._fetchJSONP(url, callback);
    } else {
      return this._fetchJSON(url);
    }
  }

  /**
   * Fetches an advice slip by ID.
   * @param {number} slip_id - The ID of the advice slip to fetch.
   * @param {Function} [callback] - Optional callback function for JSONP response.
   * @returns {Promise<Object>} A promise that resolves to the advice data.
   */
  async getAdviceByID(slip_id, callback = null) {
    const url = `${this.baseURL}/advice/${slip_id}`;
    if (callback) {
      return this._fetchJSONP(url, callback);
    } else {
      return this._fetchJSON(url);
    }
  }

  /**
   * Searches for advice slips based on a query string.
   * @param {string} query - The search query.
   * @param {Function} [callback] - Optional callback function for JSONP response.
   * @returns {Promise<Object>} A promise that resolves to the search results.
   */
  async searchAdvice(query, callback = null) {
    const url = `${this.baseURL}/advice/search/${query}`;
    if (callback) {
      return this._fetchJSONP(url, callback);
    } else {
      return this._fetchJSON(url);
    }
  }

  /**
   * Internal method to fetch a JSON response from the API.
   * @param {string} url - The URL to fetch the data from.
   * @returns {Promise<Object>} A promise that resolves to the fetched data.
   */
  async _fetchJSON(url) {
    try {
      const 
        response = await fetch(url),
        data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return { type: "error", text: "Error fetching data" };
    }
  }

  /**
   * Internal method to fetch a JSONP response from the API.
   * @param {string} url - The URL to fetch the data from.
   * @param {Function} callback - The callback function for the JSONP response.
   * @returns {Promise<Object>} A promise that resolves to the fetched data, with a warning about JSONP support.
   */
  async _fetchJSONP(url, callback) {
    console.warn("JSONP is not fully supported in modern browsers. Please handle JSONP response accordingly.");
    return this._fetchJSON(url);
  }
}