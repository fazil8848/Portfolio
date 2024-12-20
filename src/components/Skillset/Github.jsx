import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

const Github = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="yellow">Code</strong>
      </h1>
      <GitHubCalendar
        username="fazil8848"
        blockSize={15}
        blockMargin={5}
        color="#861dff"
        fontSize={16}
      />
    </Row>
  );
};

export default Github;
