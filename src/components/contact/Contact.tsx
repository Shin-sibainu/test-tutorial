const Contact = () => {
  return (
    <>
      <h1>お問い合わせフォーム</h1>
      <h2>ShinCodeへのお仕事の依頼</h2>
      <p>すべてのフィールドは必須項目です。</p>
      <span title="close">X</span>
      <img src="https://via.placeholder.com/150" alt="sample" />
      <div data-testid="custom-element">Custom HTML Element</div>
      <form action="">
        <div>
          <label htmlFor="name">お名前</label>
          <input
            type="text"
            id="name"
            placeholder="フルネーム"
            value="ShinCode"
            onChange={() => {}}
          />
        </div>
        <div>
          <label htmlFor="email">メールアドレス</label>
          <input type="email" id="email" />
        </div>

        <div>
          <label htmlFor="questions">お問い合わせ内容</label>
          <select id="questions">
            <option value="">お問い合わせ内容を選択してください。</option>
            <option value="dev">開発案件のご相談</option>
            <option value="video">撮影のご相談</option>
            <option value="sns-marketing">SNSマーケティングのご相談</option>
          </select>
        </div>
        <div>
          <label>
            <input type="checkbox" id="terms" />
            利用規約に同意します。
          </label>
        </div>
        <button>送信</button>
      </form>
    </>
  );
};

export default Contact;
