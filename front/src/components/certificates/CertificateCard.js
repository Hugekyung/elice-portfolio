import { Card, Button, Row, Col } from "react-bootstrap";
import * as Api from "../../api";

function CertificateCard({
  certificate,
  isEditable,
  setIsEditing,
  setCertificates,
}) {
  const { id, title, description, expired_date } = certificate;

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
            <Col xs lg="1">
              <Button
                variant="outline-info"
                size="sm"
                onClick={() => setIsEditing((prev) => !prev)}
                className="mr-3 mb-1"
              >
                편집
              </Button>
              <Button
                variant="outline-danger"
                size="sm"
                className="mr-3"
                onClick={() => deleteHandler()}
              >
                삭제
              </Button>
            </Col>
          )}
        </Row>
      </Card.Text>
    </>
  );
}

export default CertificateCard;
