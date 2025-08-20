import React, { useEffect, useState } from "react";
import "./portofolio.css";
import axios from "axios";
import PortfolioItemSkeleton from "../skeleton/skeleton";
import { Link } from "react-router-dom";
import { FaImages } from "react-icons/fa";

const Portfolio = () => {
  const [Loading, setLoading] = useState(true);
  const [repos, setrepos] = useState([]);
  const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
  const VERCEL_TOKEN = process.env.REACT_APP_VERCEL_TOKEN;

  async function fetchReadmeImage(repo) {
    const apiUrl = `https://api.github.com/repos/OmarYasirR/${repo}/readme`;

    try {
      const response = await fetch(apiUrl, {
        headers: {
          Accept: "application/vnd.github.v3.raw",
          Authorization: `token ${GITHUB_TOKEN}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch README: ${response.status}`);
      }

      const readmeText = await response.text();

      // Regex to find the first image markdown ![alt](url)
      const imageRegex = /!\[.*?\]\((.*?)\)/;
      const match = readmeText.match(imageRegex);

      if (match && match[1]) {
        let imageUrl = match[1];

        // Handle relative URLs by converting them to raw GitHub URLs
        if (!/^https?:\/\//i.test(imageUrl)) {
          imageUrl = `https://raw.githubusercontent.com/OmarYasirR/${repo}/main/${imageUrl}`;
        }
        return imageUrl;
      } else {
        return false; // No image found
      }
    } catch (error) {
      return false;
    }
  }

  async function getGitHubRepos() {
    const res = await axios.get(
      "https://api.github.com/users/OmarYasirR/repos",
      {
        headers: { Authorization: `token ${GITHUB_TOKEN}` },
      }
    );
    return res.data;
  }

  async function getVercelDeployments() {
    const res = await axios.get(`https://api.vercel.com/v6/deployments`, {
      headers: { Authorization: `Bearer ${VERCEL_TOKEN}` },
    });
    return res.data.deployments;
  }

  const getProjectsData = async () => {
    try {
      const githubRepos = await getGitHubRepos();
      const vercelDeployments = await getVercelDeployments();
      for (const repo of githubRepos) {
        vercelDeployments.forEach((dep) => {
          if (
            repo.name.toLowerCase().replaceAll(/[_-]/g, "") ===
            dep.name.toLowerCase().replaceAll(/[_-]/g, "")
          )
            return fetchReadmeImage(repo.name).then((url) => {
              setrepos(
                (prev) =>
                  (prev = [
                    ...prev,
                    { ...repo, vercelURL: dep.url, imgURL: url },
                  ])
              );
            });
        });

        if (
          vercelDeployments.every(
            (dep) =>
              repo.name.toLowerCase().replaceAll(/[_-]/g, "") !==
              dep.name.toLowerCase().replaceAll(/[_-]/g, "")
          )
        ) {
          setrepos(
            (prev) =>
              (prev = [...prev, { ...repo, vercelURL: false, imgURL: false }])
          );
        }
      }
      setLoading(false);
    } catch (error) {
      setLoading(true);
    }

    setLoading(false);
  };

  useEffect(() => {
    getProjectsData();
    getVercelDeployments();
  },[]);

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>portfolio</h2>
      <div className="container container__portfolio">
        {Loading
          ? Array(4)
              .fill()
              .map((_, i) => <PortfolioItemSkeleton key={i} />)
          : repos?.map((repo, i) => {
              if (repo.name) {
                return (
                  <article className="portfolio__item" key={i}>
                    <div className="portfolio__item-image">
                      <Link to={`/project/${repo.name}`}>
                        {repo.imgURL ? (
                          <img src={repo.imgURL} alt="" />
                        ) : (
                          <FaImages className="icon" />
                        )}
                      </Link>
                    </div>
                    <h3>{repo.name}</h3>
                    <div className="portfolio__item-cta">
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener"
                        className="btn"
                      >
                        github
                      </a>
                      <a
                        href={`https://${repo.vercelURL || ""}`}
                        target="_blank"
                        rel="noopener"
                        className={"btn btn-praimry"}
                        style={{
                          pointerEvents: repo.vercelURL ? "" : "none",
                          backgroundColor: repo.vercelURL ? "" : "#8e44ad78",
                        }}
                      >
                        {repo.vercelURL ? "Live Demo" : "On going"}
                      </a>
                    </div>
                  </article>
                );
              }
            })}
      </div>
    </section>
  );
};

export default Portfolio;
