import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Search = () => {
  const [text, setText] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/meal/${text}`);
    setText(""); //제출 후에는 text 상태를 빈 문자열로 초기화
  };

  return (
    <div id="search">
      <form id="myform" onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)} //입력값이 변경될 때마다 setText 함수가 호출되어 text 상태가 업데이트
          placeholder="Search food by name..."
        />
        <button>
          {/* 검색 아이콘 */}
          <i className="ri-search-line"></i>
        </button>
      </form>
    </div>
  );
};

export default Search;
