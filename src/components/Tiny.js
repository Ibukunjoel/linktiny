import React from "react";
import axios from "axios";
import {useState} from "react";

export default function Tiny() {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const shortenUrl = async () => {
    try {
      const response = await axios.post(
        "https://api-ssl.bitly.com/v4/shorten",
        {
          long_url: longUrl,
        },
        {
          headers: {
            Authorization: `Bearer ${"672f46ef66805baf5222a3719376b7c4555b38e0"}`,
            "Content-Type": "application/json",
          },
        }
      );

      setShortUrl(response.data.link);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="tiny-section">
      <div className="tiny">
        <input
          type="text"
          value={longUrl}
          onChange={(event) => setLongUrl(event.target.value)}
          placeholder="Shorten a link now"
        />
        <button onClick={shortenUrl} className="color">
          TinyLink
        </button>
      </div>
      {shortUrl && (
        <a
          className="short-url"
          href={shortUrl}
          target="_blank"
          rel="noopener noreferrer">
          {shortUrl}
        </a>
      )}
    </div>
  );
}
