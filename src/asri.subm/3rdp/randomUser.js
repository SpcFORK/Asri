window.RandomUserGenerator = class RandomUserGenerator {
  baseUrl = 'https://randomuser.me/api/';

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

  async generateMultipleUsers(numberOfUsers, options = {}) {
    options.results = numberOfUsers;
    return this.generateUser(options);
  }
}