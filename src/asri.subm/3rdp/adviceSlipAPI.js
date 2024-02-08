window.AdviceSlipAPI = class AdviceSlipAPI {
  baseURL = "https://api.adviceslip.com";

  // Method to fetch random advice slip
  async getRandomAdvice(callback = null) {
    const url = `${this.baseURL}/advice`;
    if (callback) {
      return this._fetchJSONP(url, callback);
    } else {
      return this._fetchJSON(url);
    }
  }

  // Method to fetch advice slip by ID
  async getAdviceByID(slip_id, callback = null) {
    const url = `${this.baseURL}/advice/${slip_id}`;
    if (callback) {
      return this._fetchJSONP(url, callback);
    } else {
      return this._fetchJSON(url);
    }
  }

  // Method to search for advice slips
  async searchAdvice(query, callback = null) {
    const url = `${this.baseURL}/advice/search/${query}`;
    if (callback) {
      return this._fetchJSONP(url, callback);
    } else {
      return this._fetchJSON(url);
    }
  }

  // Internal method for fetching JSON response
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

  // Internal method for fetching JSONP response
  async _fetchJSONP(url, callback) {
    console.warn("JSONP is not fully supported in modern browsers. Please handle JSONP response accordingly.");
    return this._fetchJSON(url);
  }
}
