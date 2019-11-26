import React, { Component } from "react";
import { Container, Header } from "semantic-ui-react";

//react-pdf - Standard
import { pdfjs, Document, Page } from "react-pdf/dist/entry.webpack";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class Resume extends Component {
  state = {
    numPages: null,
    pageNumber: 1
  };

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };

  render() {
    const { pageNumber, numPages } = this.state;

    return (
      <Container fluid textAlign="center">
        <br />
        <Header as="h2">My Resume</Header>
        <p>adding a pdf viewer and downloader here for resume</p>
        <br />
        <div>
          <Document
            file="../../images/resume"
            onLoadSuccess={this.onDocumentLoadSuccess}
          >
            <Page pageNumber={pageNumber} />
          </Document>
          <p>
            Page {pageNumber} of {numPages}
          </p>
        </div>
      </Container>
    );
  }
}

export default Resume;
