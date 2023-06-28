import "../../Maincontainer.css";
import { useState } from "react";
import { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

import Card from "react-bootstrap/Card";

import SectionHeading from "../../BuildingBlocks/SectionHeading";
import styled, { useTheme } from "styled-components";
import ModalWrapper from "../../BuildingBlocks/ModalWrapper";

const Blog = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    // autoplay: true,
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
  const [data, setData] = useState();

  const [innerData, setInnerData] = useState();
  const [show, setShow] = useState(false);
  const [heading, setHeading] = useState(false);
  const [img, setImg] = useState(false);
  const [description, setDescription] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    // console.log(id, "pa");
    setHeading(innerData?.blogsinner[id].blogheading);
    setImg(innerData?.blogsinner[id].blogimage);
    setDescription(innerData?.blogsinner[id].blogdescription);
    setShow(true);
  };

  useEffect(() => {
    fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@akshayjain2807"
    ).then((bloginner) => {
      bloginner.json().then((bloginner) => {
        setInnerData(bloginner);
        console.log(bloginner, "Paurush");

        // setTimeout(() => {
        //   console.log(innerData, "Data");
        // }, 200);
      });
    });

    fetch("blog.json").then((blog) => {
      blog.json().then((blog) => {
        setData(blog);
        console.log(data, "BlogData");
      });
    });
  }, []);
  return (
    <>
      <SectionHeading title={"Blogs"}></SectionHeading>
      <BlogInner>
        <ModalWrapper
          heading={heading}
          content={description}
          img={img}
          handleClose={handleClose}
          show={show}
        />
      </BlogInner>

      <MyBlog>
        <div class="blog-card row">
          <Slider {...settings}>
            {data &&
              data.blogs.map((record) => {
                return (
                  <div key={record.id} className="col-md-4 card-content">
                    <Card>
                      <Card.Img
                        className="blog-img"
                        variant="top"
                        src={record.blogimage}
                      />
                      <Card.Body>
                        <Card.Title className="text-center">
                          {record.description}
                        </Card.Title>
                        <Card.Text>
                          {record.title}
                          &nbsp;&nbsp;
                          <a
                            class="blog-card-link"
                            onClick={() => handleShow(record.id)}
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
                        </Card.Text>
                        <Card.Text className="text-end card-admin-name">
                          ~{record.admin}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                );
              })}
          </Slider>
        </div>
      </MyBlog>
    </>
  );
};

const BlogInner = styled.div`
  .modal-header .btn-close {
    margin: 0;
  }
`;
const MyBlog = styled.div`
  .card-admin-name {
    font-weight: 400;
  }
  .blog-card-link {
    text-decoration: none !important;
    color: rgb(105, 90, 166) !important;
    font-weight: 400;
  }
  .blog-img {
    height: 200px;
  }
  .slick-prev,
  .slick-next {
    background: #695aa6;
    border-radius: 100%;
  }
  .card {
    margin-right: 12px;
    max-width: 378px;
    margin: auto;
  }
  .card-content {
    margin: auto;
  }
`;
export default Blog;
