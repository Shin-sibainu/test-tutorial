const Application = () => {
  return (
    <>
      <h1>職務申請フォーム</h1>
      <h2>Section 1</h2>
      <p>すべてのフィールドは必須です</p>
      {/* <span title="close">X</span> */}
      {/* <img src="https://via.placeholder.com/150" alt="a person with a laptop" /> */}
      {/* <div data-testid="custom-element">Custom HTML element</div> */}
      <form>
        <div>
          <label htmlFor="name">お名前</label>
          <input type="text" id="name" />
        </div>
        {/* <div>
          <label htmlFor="bio">Bio</label>
          <textarea id="bio" />
        </div> */}
        <div>
          <label htmlFor="job-location">勤務地</label>
          <select id="job-location">
            <option value="">国を選択してください</option>
            <option value="JP">日本</option>
            <option value="GB">イギリス</option>
            <option value="US">アメリカ</option>
            <option value="IN">インド</option>
            <option value="AU">オーストラリア</option>
          </select>
        </div>
        <div>
          <label>
            <input type="checkbox" id="terms" /> 利用規約に同意します
          </label>
        </div>
        <button>送信</button>
      </form>
    </>
  );
};

export default Application;
