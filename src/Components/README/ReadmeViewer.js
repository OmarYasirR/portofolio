import ReactMarkdown from "react-markdown";
import React, { useEffect, useState } from "react";
import { marked } from "marked";
import { useParams } from "react-router-dom";
import "github-markdown-css/github-markdown.css";
import remarkGfm from "remark-gfm";
import "./markdown.css";
import { IoIosWarning } from "react-icons/io";



const ReadmeViewer = () => {
  const { repo } = useParams();
  const [readmeContent, setReadmeContent] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReadme = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/repos/OmarYasirR/${repo}/readme`,
          {
            headers: {
              Accept: "application/vnd.github.v3.raw",
            },
          }
        );

        if (!response.ok) {
          throw new Error(`Failed to fetch README for ${repo}`);
        }

        const text = await response.text();
        setReadmeContent(text);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchReadme();
  }, []);

  if (error) return <div className='container error' style={{}}>
    <IoIosWarning className='icon' />
    <h2>{repo}</h2>
    <div>README file unavailable for this Project</div>
  </div>;
  if (!readmeContent)
    return (
      <div>
        <div className="loader-container">
        <div className="msg">Loading READMI file</div>
          <div className="spinner"></div>
        </div>
      </div>
    );

  return (
    <div
      className="markdown-body container"
      style={{
        margin: "auto",
        marginTop: "20px",
        marginBottom: "20px",
        padding: "10px",
      }}
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        urlTransform={(url, key, node) => {
          // Only rewrite relative image URLs
          if (
            node.tagName === "img" &&
            !url.startsWith("http") &&
            repo // e.g. "OmarYasirR/scot"
          ) {
            return `https://raw.githubusercontent.com/OmarYasirR/${repo}/main/${url}`;
          }
          return url;
        }}
      >
        {readmeContent}
      </ReactMarkdown>
    </div>
  );
};

export default ReadmeViewer;
