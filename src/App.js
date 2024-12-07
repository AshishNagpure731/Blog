import './App.css';
import React, { useState } from "react";

function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [filter, setFilter] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [isDateFilterActive, setIsDateFilterActive] = useState(false);

 
    const allResults = [
      { id: 1, title: "React Basics", category: "Tech", date: "2024-01-01" },
      { id: 2, title: "Learning Redux", category: "Tech", date: "2024-02-01" },
      { id: 3, title: "Gardening Tips", category: "Lifestyle", date: "2023-12-01" },
      { id: 4, title: "Travel Expenses", category: "Lifestyle", date: "2023-12-05" },
      { id: 5, title: "Dressing", category: "Fashion", date: "2023-12-10" },
      { id: 6, title: "JavaScript Fundamentals", category: "Tech", date: "2024-03-01" },
      { id: 7, title: "Advanced React Patterns", category: "Tech", date: "2024-04-15" },
      { id: 8, title: "Home Decor Ideas", category: "Lifestyle", date: "2023-11-20" },
      { id: 9, title: "Fitness Routines", category: "Health", date: "2024-01-20" },
      { id: 10, title: "Cooking for Beginners", category: "Food", date: "2023-12-15" },
      { id: 11, title: "SEO Tips", category: "Tech", date: "2024-05-10" },
      { id: 12, title: "Meditation Practices", category: "Lifestyle", date: "2023-11-25" },
      { id: 13, title: "Fitness Myths Debunked", category: "Health", date: "2024-02-10" },
      { id: 14, title: "Healthy Eating Guide", category: "Food", date: "2023-12-20" },
      { id: 15, title: "React Hooks", category: "Tech", date: "2024-06-05" },
      { id: 16, title: "Gardening Tips", category: "Lifestyle", date: "2024-01-10" },
      { id: 17, title: "App Design Principles", category: "Tech", date: "2024-04-01" },
      { id: 18, title: "Fashion Trends 2024", category: "Fashion", date: "2023-12-25" },
      { id: 19, title: "Home Cleaning Tips", category: "Lifestyle", date: "2024-01-15" },
      { id: 20, title: "Healthy Recipes for Kids", category: "Food", date: "2023-11-30" },
      { id: 21, title: "Vue.js Basics", category: "Tech", date: "2024-02-25" },
      { id: 22, title: "Yoga for Beginners", category: "Health", date: "2024-03-05" },
      { id: 23, title: "Smart Home Gadgets", category: "Lifestyle", date: "2024-04-10" },
      { id: 24, title: "Gardening Basics", category: "Lifestyle", date: "2023-12-30" },
      { id: 25, title: "App Performance Optimization", category: "Tech", date: "2024-05-05" },
      { id: 26, title: "Fashion Advice for Men", category: "Fashion", date: "2023-12-15" },
      { id: 27, title: "DIY Home Projects", category: "Lifestyle", date: "2024-01-05" },
      { id: 28, title: "Nutritional Benefits of Juicing", category: "Food", date: "2024-02-20" },
      { id: 29, title: "Artificial Intelligence in Healthcare", category: "Tech", date: "2024-03-15" },
      { id: 30, title: "Summer Fashion Tips", category: "Fashion", date: "2023-11-05" },
      { id: 31, title: "Healthy Smoothies for Weight Loss", category: "Food", date: "2024-01-25" },
      { id: 32, title: "Understanding TypeScript", category: "Tech", date: "2024-04-05" },
      { id: 33, title: "Photography Tips", category: "Lifestyle", date: "2023-12-10" },
      { id: 34, title: "Benefits of Meditation", category: "Health", date: "2024-02-05" },
      { id: 35, title: "Plant Care Basics", category: "Lifestyle", date: "2024-03-01" },
      { id: 36, title: "Tips for a Balanced Diet", category: "Food", date: "2024-02-10" },
      { id: 37, title: "Minimalist Wardrobe Ideas", category: "Fashion", date: "2023-12-05" },
      { id: 38, title: "Blockchain Technology Explained", category: "Tech", date: "2024-01-30" },
      { id: 39, title: "Healthy Eating Habits", category: "Health", date: "2024-04-15" },
      { id: 40, title: "Introduction to Swift", category: "Tech", date: "2024-03-20" },
      { id: 41, title: "Winter Fashion Tips", category: "Fashion", date: "2023-11-15" },
      { id: 42, title: "Personal Finance Basics", category: "Lifestyle", date: "2024-05-01" },
      { id: 43, title: "Keto Diet Guide", category: "Food", date: "2023-12-25" },
      { id: 44, title: "User Experience Design", category: "Tech", date: "2024-06-15" },
      { id: 45, title: "Family Vacation Ideas", category: "Lifestyle", date: "2024-02-15" },
      { id: 46, title: "Healthy Skin Tips", category: "Health", date: "2024-01-05" },
      { id: 47, title: "Gardening for Beginners", category: "Lifestyle", date: "2024-04-20" },
      { id: 48, title: "Smartphone Photography", category: "Lifestyle", date: "2023-12-20" },
      { id: 49, title: "Financial Planning for Retirement", category: "Lifestyle", date: "2024-03-30" },
      { id: 50, title: "Healthy Recipes for Winter", category: "Food", date: "2024-01-10" }
    ];
    const uniqueCategories = Array.from(new Set(allResults.map(item => item.category)));

    const handleSearch = () => {
      const filteredResults = allResults.filter((item) => {
        const itemDate = new Date(item.date);
        const isWithinDateRange =
          (!startDate || itemDate >= new Date(startDate)) &&
          (!endDate || itemDate <= new Date(endDate));
  
        return (
          item.title.toLowerCase().includes(query.toLowerCase()) &&
          (filter ? item.category === filter : true) &&
          isWithinDateRange
        );
      });
  
      setResults(filteredResults);

    setResults(filteredResults);
  };

  return (
    <div>
      <h1>Blog Search</h1>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      <select onChange={(e) => setFilter(e.target.value)}>
        <option value="">All Categories</option>
        {uniqueCategories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>

      <div>
        <label>
          Filter by Date:
          <input
            type="checkbox"
            checked={isDateFilterActive}
            onChange={() => setIsDateFilterActive(!isDateFilterActive)}
          />
        </label>
      </div>

      {isDateFilterActive && (
        <div>
          <label>
            Start Date:
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </label>
          <label>
            End Date:
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </label>
        </div>
      )}

      <div>
        {results.map((result) => (
          <div key={result.id}>
            <h3>{result.title}</h3>
            <p>Category: {result.category}</p>
            <p>Date: {result.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
