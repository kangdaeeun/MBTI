import React, { useEffect, useState } from "react";
import { getTestResults } from "../api/testresults";
import TestResultItem from "../components/TestResultItem";

const TestResultList = ({user}) => {
  const [results, setResults] = useState([]);
  const fetchTestResults = async () => {
    const data = await getTestResults();
    console.log(data);
    const filteredData = data.filter(
      (item) => item.visibility || item.userId === user.id
    );
    setResults(filteredData);
  };

  useEffect(() => {
    fetchTestResults();
  }, []);

  return (
    <div>
      <h1>테스트결과 목록</h1>
      <div className="flex flex-col gap-5 mt-5">
        {results.map((result) => (
          <TestResultItem
            key={result.id}
            result={result}
            user={user}
            refreshResults={fetchTestResults}
          />
        ))}
      </div>
    </div>
  );
};

export default TestResultList;
