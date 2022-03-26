import { Card, Button, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faXmark } from "@fortawesome/free-solid-svg-icons";
import * as Api from "../../api";

function CertificateCard({ certificate, isEditable, setIsEditing, setCertificates }) {
  const { id, title, description, expired_date } = certificate;
  const now = new Date();

  const isValid = () => {
    const date = stringToDate(expired_date);
    return date >= now.setDate(now.getDate() - 1);
  };

  const stringToDate = (date) => {
    return new Date(date);
  };

  const deleteHandler = async () => {
    try {
      if (window.confirm("정말로 자격증 정보를 삭제 하시겠습니까?")) {
        await Api.delete(`certificates/${certificate.id}`);
        setCertificates((current) => {
          return current.filter((item) => item.id !== id);
        });
      }
    } catch (err) {
      alert("자격증 정보를 제대로 삭제하지 못했습니다.", err);
    }
  };

  return (
    <>
      <Card.Text>
        <Row className="align-items-center">
          <Col>
            <span>{title}</span>
            <br />
            <span className="text-muted">{description}</span>
            <br />
            <span className="text-muted">{expired_date}</span>
          </Col>
          {isEditable && (
              <Col lg={1} xs={true}>
                  <FontAwesomeIcon
                      className="fontawesome-icon edit-pen"
                      onClick={() => setIsEditing((prev) => !prev)}
                      icon={faPen}
                  />
                  <FontAwesomeIcon
                      className="fontawesome-icon delete-xmark"
                      onClick={() => deleteHandler()}
                      icon={faXmark}
                  />
              </Col>
          )}
        </Row>
      </Card.Text>
    </>
  );
}

export default CertificateCard;
