# FetchyClicker

- Use with Node version 17 :)
- Do not edit package.json if you can avoid it!

**Your task**

- Create an application that searches for GitHub repositories
- Use at least 3 different components: Search, SearchResult, Spinner
  - If you feel like using more, use more :)
- Your base query: https://api.github.com/search/repositories?q=react&per_page=100&page=1
- Create a **simple** pagination using the last part of the URL: `page=1`
  - "page" should be a state variable
  - display a "next" button that increments "page"
  - if page is > 1, display a "previous" button that decrements "page"
- When a search is being done, display a spinner