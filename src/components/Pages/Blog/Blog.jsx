import "../../Maincontainer.css";
import { useState } from "react";
import { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import Modal from "react-bootstrap/Modal";

import SectionHeading from "../../BuildingBlocks/SectionHeading";
import styled from "styled-components";

const Blog = () => {
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
  const [data, setData] = useState();
  const [innerData, setInnerData] = useState();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    fetch("blog.json").then((blog) => {
      blog.json().then((blog) => {
        setInnerData(blog);
        console.log(blog);
      });
    });

    fetch("blog.json").then((blog) => {
      blog.json().then((blog) => {
        setData(blog);
        console.log(blog);
      });
    });
  }, []);
  return (
    <>
      <SectionHeading title={"Blogs"}></SectionHeading>
      <BlogInner>
        {innerData &&
          innerData.blogs.map((record) => {
            return (
              <>
                <Modal
                  show={show}
                  onHide={handleClose}
                  size="lg"
                  aria-labelledby="contained-modal-title-vcenter"
                  centered
                >
                  <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter text-center">
                      {record.blogheading}
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body style={{ overflowY: "scroll" }}>
                    <div style={{ textAlign: "center" }}>
                      <img
                        src={record.blogimage}
                        className="blog-inner-img"
                        style={{
                          width: "200px",
                          height: "170px",
                          borderRadius: "4px",
                        }}
                      />
                    </div>
                    <br />
                    <div className="container">
                      <p>{record.blogdescription}</p>
                    </div>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>
              </>
            );
          })}
      </BlogInner>

      <MyBlog>
        <div class="blog-card row">
          <Slider {...settings}>
            {data &&
              data.blogs.map((record) => {
                return (
                  <div className="col-md-4">
                    <Card>
                      <Card.Img
                        className="blog-img"
                        variant="top"
                        src={record.blogimage}
                      />
                      <Card.Body>
                        <Card.Title className="text-center">
                          {record.blogheading}
                        </Card.Title>
                        <Card.Text>
                          {record.smalldescription}
                          &nbsp;&nbsp;
                          <a class="blog-card-link" onClick={handleShow}>
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
  }
`;
export default Blog;
