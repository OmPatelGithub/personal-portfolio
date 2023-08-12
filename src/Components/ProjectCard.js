import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, isSmallScreen }) => {
  return (
    <Col size={12}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          {isSmallScreen ? null : <h4>{title}</h4>}
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}