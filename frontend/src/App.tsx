import { useState } from "react";
import "./App.css";
import CopyButton from "./components/CopyButton";

function App() {
  const [inputURL, setInputURL] = useState("");
  const [shortURL, setShortURL] = useState("");
  const [notURL, setNotURL] = useState("");

  const convertURL = () => {
    // AmazonのURLを検出
    if (inputURL.includes("amazon.co.jp/dp/")) {
      const regex = /\/dp\/(.*?)\?/;
      const match = inputURL.match(regex);
      if (match && match[1]) {
        console.log(match[1]);
        setNotURL("");
        setShortURL("https://amazon.co.jp/dp/" + match[1]); // この部分は固定のURLです。動的に変更する場合は、サービス等の利用が必要です。
      }
    } else if (inputURL == "") {
      setNotURL("入力欄を記入してください");
      setShortURL("");
    }
    else {
      setNotURL("無効なURLです");
      setShortURL("");
    }
  };

  return (
    <>
      <h1 className="my-7 md:text-3xl text-xl text-sky-500 font-medium">Amazon URL Shortener</h1>
      <p className="my-3 text-sm">Amazonの商品URLを短縮することができます。</p>
      <p className="mb-10 text-sm">入力情報は保存されません。</p>

      <div className="md:text-xl text-sm">
        <label className="">
          <span className="sr-only">Search</span>
          <span className="absolute inset-y-0 left-0 pl-2">
            <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
          </span>
          <input
            className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 text-sm"
            placeholder="Amazonの商品URLを入力してください"
            value={inputURL}
            onChange={(e) => setInputURL(e.target.value)}
            type="text"
            name="search"
          />
        </label>
        <button onClick={convertURL}
          className="m-4 py-2 px-3 hover:-translate-y-0.5 transition motion-reduce:hover:translate-y-0 motion-reduce:transition-none bg-sky-400 text-white rounded-full text-sm"
        >URLを短縮する！</button>
        <p className="mt-5 mb-2 text-sm">{notURL}</p>
        <div className="relative flex justify-between w-auto p-4 bg-gray-100 rounded-lg">
          <pre className="overflow-x-auto text-black py-2 text-sm">{shortURL}</pre>
          <CopyButton copyText={shortURL} />
        </div>
      </div>
    </>
  );
}

export default App;
