window.ChuckNorrisAPI = class ChuckNorrisAPI {
  baseURL = "https://api.chucknorris.io";

  /**
   * Retrieve a random Chuck Norris joke in JSON format
   * @returns {Promise<Object>} A promise that resolves to a joke object
   */
  async getRandomJoke() {
    const response = await fetch(`${this.baseURL}/jokes/random`),
      data = await response.json();
    return data;
  }

  /**
   * Retrieve a random Chuck Norris joke from a given category
   * @param {string} category - The category to retrieve the joke from
   * @returns {Promise<Object>} A promise that resolves to a joke object
   */
  async getRandomJokeByCategory(category) {
    const response = await fetch(`${this.baseURL}/jokes/random?category=${category}`),
      data = await response.json();
    return data;
  }

  /**
   * Retrieve a list of available categories
   * @returns {Promise<string[]>} A promise that resolves to an array of categories
   */
  async getCategories() {
    const response = await fetch(`${this.baseURL}/jokes/categories`),
      categories = await response.json();
    return categories;
  }

  /**
   * Text search for jokes
   * @param {string} query - The search query
   * @returns {Promise<Object>} A promise that resolves to the search results
   */
  async searchJokes(query) {
    const response = await fetch(`${this.baseURL}/jokes/search?query=${query}`),
      results = await response.json();
    return results;
  }
}
