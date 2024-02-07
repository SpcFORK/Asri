window.ChuckNorrisAPI = class ChuckNorrisAPI {
  baseURL = "https://api.chucknorris.io";

  // Retrieve a random Chuck Norris joke in JSON format
  async getRandomJoke() {
    const response = await fetch(`${this.baseURL}/jokes/random`),
      data = await response.json();
    return data;
  }

  // Retrieve a random Chuck Norris joke from a given category
  async getRandomJokeByCategory(category) {
    const response = await fetch(`${this.baseURL}/jokes/random?category=${category}`),
      data = await response.json();
    return data;
  }

  // Retrieve a list of available categories
  async getCategories() {
    const response = await fetch(`${this.baseURL}/jokes/categories`),
      categories = await response.json();
    return categories;
  }

  // Free text search
  async searchJokes(query) {
    const response = await fetch(`${this.baseURL}/jokes/search?query=${query}`),
      results = await response.json();
    return results;
  }
}
