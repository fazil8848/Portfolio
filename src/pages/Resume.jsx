import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";

import Particle from "../components/Particle";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const resumeLink = `https://raw.githubusercontent.com/fazil8848/Portfolio/main/src/assets/fazil.pdf`;

const Resume = () => {
  const [numPages, setNumPages] = useState(null);

  useEffect(() => {
    pdfjs
      .getDocument(resumeLink)
      .promise.then((pdf) => setNumPages(pdf.numPages));
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", marginBottom: "20px" }}>
          <Button
            variant="primary"
            onClick={resumeLink}
            target="_blank"
            style={{ maxWidth: "250px", zIndex: 50 }}
          >
            <AiOutlineDownload />
            &nbsp;Download Resume
          </Button>
        </Row>

        <Row className="resume">
          <Col xs={12} md={12} className="mb-4">
            <Document
              file={resumeLink}
              className="d-flex justify-content-center"
            >
              {" "}
              {[...Array(Math.ceil(numPages / 2))].map((_, index) => (
                <Page key={`page_${index + 1}`} pageNumber={index + 1} />
              ))}
            </Document>
          </Col>
          <Col xs={12} md={12} className="mb-4">
            <Document
              file={resumeLink}
              className="d-flex justify-content-center"
            >
              {" "}
              {[...Array(Math.floor(numPages / 2))].map((_, index) => (
                <Page
                  key={`page_${index + Math.ceil(numPages / 2)}`}
                  pageNumber={index + Math.ceil(numPages / 2) + 1}
                />
              ))}
            </Document>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Resume;
