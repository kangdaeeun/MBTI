import React, { useState } from "react";
import { getTestResults } from "../api/testresults";
import TestResultItem from "../components/TestResultItem";

const TestResultList = () => {
  const [results, setResults] = useState([]);
  const fetchTestResults = async () => {
    const data = await getTestResults();
    const filteredData = data.filter(
      (item) => item.visibility || item.userId === user.id
    );
    setResults(filteredData);
  };

  return (
    <div>
      <h1>테스트결과 목록</h1>
      <div className="flex flex-col gap-5 mt-5">
        {results.map((result) => (
          <TestResultItem
            key={result.id}
            result={result}
            user={user}
            refreshResults={fetchResults}
          />
        ))}
      </div>
    </div>
  );
};

export default TestResultList;
