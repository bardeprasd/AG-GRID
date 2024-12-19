import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import axios from 'axios';

const LineChart = () => {
  const [chartData, setChartData] = useState({
    series: [],
    options: {
      chart: {
        height: 350,
        type: 'line',
      },
      title: {
        text: 'Dynamic Sales Data from API',
        align: 'center',
      },
      xaxis: {
        categories: [],
      },
    },
  });
  const [loading, setLoading] = useState(true); // New loading state
  const [error, setError] = useState(null); // Error handling

  // Fetch data from JSONPlaceholder API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');

        // Validate response data
        if (response.data && Array.isArray(response.data)) {
          const months = response.data.slice(0, 10).map((post, index) => `Post ${index + 1}`);
          const sales = response.data.slice(0, 10).map((post) => post.id * 10);

          setChartData((prevState) => ({
            ...prevState,
            series: [{ name: 'Sales', data: sales }],
            options: { ...prevState.options, xaxis: { categories: months } },
          }));
        } else {
          throw new Error('Invalid data format');
        }
      } catch (err) {
        setError(err.message || 'Error fetching data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Show loading or error message
  if (loading) return <p>Loading chart...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>React ApexCharts Example with JSONPlaceholder</h1>
      <Chart options={chartData.options} series={chartData.series} type="line" height={350} />
    </div>
  );
};

export default LineChart;
