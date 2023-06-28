import { useState } from "react";
import { useEffect } from "react";
import { IoMdContact } from "react-icons/io";
import { TbCalendarEvent } from "react-icons/tb";
import Scraper from "./Scraper";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SectionHeading from "../../BuildingBlocks/SectionHeading";

import Slider from "react-slick";
import styled from "styled-components";
const Blog2 = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          prevArrow: false,
          nextArrow: false,
        },
      },
    ],
  };
  const [profileImg, setProfileImg] = useState();

  const [data, setData] = useState();
  useEffect(() => {
    fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@akshayjain2807"
    ).then((blogs) => {
      blogs.json().then((blogs) => {
        setData(blogs);
        setProfileImg(blogs.feed.image);
        console.log(blogs, "Akshay");
      });
    });
  }, []);
  return (
    <>
      <SectionHeading title={"Blogs"}></SectionHeading>
      <Blog class="container ">
        <div className="blog-section">
          <div className="row">
            <Slider {...settings}>
              {data &&
                data.items.map((record) => {
                  const tagline = record.description.split(">");
                  return (
                    <>
                      <div className="col-12 col-md-4 card-data-column">
                        <div class="card">
                          <div class="card-header">
                            <img src={record.thumbnail} alt="rover" />
                          </div>
                          <div class="card-body">
                            <div class="user">
                              <img src={profileImg} alt="user" />
                            </div>
                            <h4>{record.title}</h4>
                            <p>{tagline[1].slice(0, -4)}</p>

                            <div class="user-info">
                              <IoMdContact />
                              <label>{record.author}</label>
                            </div>
                            <div class="blog-date">
                              <TbCalendarEvent />
                              <label>{record.pubDate}</label>
                            </div>
                            <a
                              class="blog-card-link"
                              target="_blank"
                              href={record.link}
                            >
                              Read more
                              <svg
                                stroke="currentColor"
                                fill="currentColor"
                                stroke-width="0"
                                viewBox="0 0 24 24"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M10.296 7.71 14.621 12l-4.325 4.29 1.408 1.42L17.461 12l-5.757-5.71z"></path>
                                <path d="M6.704 6.29 5.296 7.71 9.621 12l-4.325 4.29 1.408 1.42L12.461 12z"></path>
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
            </Slider>
          </div>
        </div>
      </Blog>
    </>
  );
};
const Blog = styled.div`
  * {
    box-sizing: border-box;
  }
  body {
    justify-content: center;
    align-items: center;
    margin: 0;
    background-color: #f7f8fc;
    font-family: "Roboto", sans-serif;
    color: #10182f;
  }

  .card {
    margin: 10px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
    overflow: hidden;

    min-height: 550px;
  }
  .slick-prev,
  .slick-next {
    background: #695aa6;
    border-radius: 100%;
  }
  .card-header img {
    width: 100%;
    height: 220px;
    object-fit: cover;
  }
  .card-header {
    padding: 0px !important;
  }
  .card-body {
    flex: 0 0 auto !important;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 20px;
    min-height: 250px;
  }

  .tag {
    background: #cccccc;
    border-radius: 50px;
    font-size: 12px;
    margin: 0;
    color: #fff;
    padding: 2px 10px;
    text-transform: uppercase;
    cursor: pointer;
  }
  .tag-teal {
    background-color: #47bcd4;
  }
  .tag-purple {
    background-color: #5e76bf;
  }
  .tag-pink {
    background-color: #cd5b9f;
  }
  .user {
    position: absolute;
    bottom: 55%;
  }
  .user img {
    border: 4px solid white;
    border-radius: 50%;
    width: 70px;
    height: 70px;
    margin-right: 10px;
  }
  .user-info h5 {
    margin: 0;
  }
  .user-info {
    min-width: 100%;
    position: absolute;
    bottom: 40px;
  }
  .blog-date {
    min-width: 100%;
    position: absolute;
    bottom: 12px;
  }
  label {
    margin-left: 4px;
    font-size: 1rem !important;
    color: black;
    font-weight: 400;
  }

  .user-info small {
    color: #545d7a;
  }
  .slick-track {
    width: 100% !important;
  }
  .col-12.col-md-4.card-data-column {
    width: 100%;
  }
  .blog-card-link {
    position: absolute;
    right: 15px;
    bottom: 30px;
    text-decoration: none;
    color: #523d9b;
  }
`;
export default Blog2;
