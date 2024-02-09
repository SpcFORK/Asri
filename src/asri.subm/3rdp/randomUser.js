window.RandomUserGenerator = class RandomUserGenerator {
  baseUrl = 'https://randomuser.me/api/';

  /**
   * Generates a random user using the RandomUserGenerator API.
   * @param {Object} options - The options for generating a user.
   * @returns {Promise<Object>} The data of the generated user.
   */
  async generateUser(options = {}) {
    const url = new URL(this.baseUrl);
    for (const [key, value] of Object.entries(options)) {
      url.searchParams.append(key, value);
    }
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error('Failed to fetch user data from the Random User Generator API');
    }
  }

  /**
   * Generates multiple random users using the RandomUserGenerator API.
   * @param {number} numberOfUsers - The number of users to generate.
   * @param {Object} options - The options for generating users.
   * @returns {Promise<Array>} The data of the generated users.
   */
  async generateMultipleUsers(numberOfUsers, options = {}) {
    options.results = numberOfUsers;
    return this.generateUser(options);
  }
}