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
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
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

      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus
            sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
            egestas eget quam. Morbi leo risus, porta ac consectetur ac,
            vestibulum at eros. Cras mattis consectetur purus sit amet
            fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
            quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus
            sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
            egestas eget quam. Morbi leo risus, porta ac consectetur ac,
            vestibulum at eros. Cras mattis consectetur purus sit amet
            fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
            quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus
            sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
            egestas eget quam. Morbi leo risus, porta ac consectetur ac,
            vestibulum at eros. Cras mattis consectetur purus sit amet
            fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
            quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus
            sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
            egestas eget quam. Morbi leo risus, porta ac consectetur ac,
            vestibulum at eros. Cras mattis consectetur purus sit amet
            fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
            quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <MyBlog>
        {data &&
          data.blogs.map((record) => {
            return (
              <div class="blog-card">
                <div class="blog-card-header">
                  <img src="blog.jpg" class="blog-card-img" />
                </div>
                <div class="blog-card-body">
                  <h5 class="blog-card-title">{record.blogheading}</h5>

                  <p class="blog-card-caption">
                    <a>By: Admin</a>&nbsp;&nbsp;
                    <FcLike className="like" />
                    &nbsp;
                    <a>234</a>&nbsp;&nbsp;
                    <a>
                      &nbsp;
                      <BiComment /> 123
                    </a>
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
`;
export default Blog;
