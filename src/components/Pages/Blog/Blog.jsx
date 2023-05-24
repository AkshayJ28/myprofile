import "../../Maincontainer.css";
import { useState } from "react";
import { useEffect } from "react";
import { FcLike } from "react-icons/fc";
import { BiComment, BiChevronsRight } from "react-icons/bi";

import Button from "react-bootstrap/Button";

import Modal from "react-bootstrap/Modal";

import SectionHeading from "../../BuildingBlocks/SectionHeading";
import styled from "styled-components";

const Blog = () => {
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
            );
          })}
      </BlogInner>

      <MyBlog>
        {data &&
          data.blogs.map((record) => {
            return (
              <div class="blog-card">
                <div class="blog-card-header">
                  <img src={record.blogimage} class="blog-card-img" />
                </div>
                <div class="blog-card-body">
                  <h5 class="blog-card-title">{record.blogheading}</h5>

                  <p class="blog-card-caption">
                    <a>By: {record.admin}</a>&nbsp;&nbsp;
                    <FcLike className="like" />
                    &nbsp;
                    <a>234</a>&nbsp;&nbsp;
                  </p>
                  <p>{record.blogdescription}</p>

                  <a
                    className="readmore"
                    onClick={handleShow}
                    class="blog-card-link"
                  >
                    Read more <BiChevronsRight />
                  </a>
                </div>
              </div>
            );
          })}
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
  .blog-card {
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    text-align: left;
    border: 1px solid #dee2e6;
    margin-bottom: 30px;
    border-radius: 0;
    overflow: hidden;
  }
  .blog-card-header {
    min-width: 350px;
    max-width: 350px;
  }
  .blog-card-img {
    border-radius: 0 0 0 0;
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
  }
  img {
    vertical-align: middle;
    border-style: none;
  }
  .blog-card-body {
    padding: 30px 20px 30px 30px;
  }
  svg {
    font-size: 19px;
  }
  .like {
    margin-top: -6px;
  }

  .blog-card-link {
    text-decoration: none;
    color: #695aa6;
  }
  .blog-inner-img {
    width: 200px;
    border-radius: 4px;
    height: 172px;
  }
  .blog-inner-img {
    height: 100px;
  }
  .modal-body {
    overflow-y: scroll !important;
  }
`;
export default Blog;
