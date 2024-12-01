import React from "react";
import {
  deleteTestResult,
  updateTestResultVisibility,
} from "../api/testresults";

const TestResultItem = ({ result, user, refresResults }) => {
  const isOwner = result.userId === user.id;

  const handleToggleVisibility = async () => {
    await updateTestResultVisibility(result.id, !result.visibility);
    await refresResults();
  };

  const handleDelete = async () => {
    await deleteTestResult(result.id);
    await fetchTestResults();
  };

  return (
    <div className="border border-amber-100 p-5 rounded-md">
      <h2>{result.nickname}님의 결과</h2>
      <p>MBTI 유형: {result.result}</p>
      {isOwner && (
        <>
          <button onClick={handleToggleVisibility}>
            {result.visibility ? "비공개로 전환" : "공개로 전환"}
          </button>
          <button onClick={handleDelete}>삭제</button>
        </>
      )}
    </div>
  );
};

export default TestResultItem;
