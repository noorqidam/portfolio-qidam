import { Container, Row, Button } from "reactstrap";
import Link from "next/link";

const Masthead = ({ imagePath }) => {
  return (
    <div className="masthead" style={{ "backgroundImage": `url(${imagePath})` }}>
      <div className="overlay" />
        <Container>
          <Row>
            <div className="col-lg-8 col-md-10 mx-auto">
              <div className="site-heading">
                <h1>Blogs Dashboard</h1>
                <span className="sub-heading">
                  Let's write some nice blog today{" "}
                  <Link href="/blogs/editor">
                    <Button color="primary">Create a new blog</Button>
                  </Link>
                </span>
              </div>
            </div>
          </Row>
        </Container>
    </div>
  );
};

export default Masthead;
