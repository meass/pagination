import { useState } from 'react';
import './App.css';
import { Pagination } from './Pagination';
import data from './mock-data.json';

const pageSize = 10;

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <Pagination
      className="pagination-bar"
      currentPage={currentPage} //1
      // totalCount={data.length} //1000
      totalCount={60}
      pageSize={pageSize} //10
      onPageChange={(page) => setCurrentPage(page)}
    />
  );
}

export default App;
