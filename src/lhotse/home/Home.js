import React, {useState} from 'react';
import {Container, Button} from 'reactstrap';
import {submitFile} from "../../util/APIUtils";
import {notification} from "antd";
import LhDropzone from "../../components/dropzone";
import "./Home.css"
import Tilt from "react-tilt/dist/tilt";

export default function Home() {
  const [file, setFile] = useState(0);
  const submit = () => {
    let model = {
      file: file.base64, fileName: file.name
    };
    submitFile(model)
    .then((response) => {
      notification.success({
        message: 'Success',
        description: response.message,
      });
      setFile(undefined);
    }).catch(error => {
      notification.error({
        message: 'Error',
        description: error.message
            || 'Sorry! Something went wrong. Please try again!'
      });
    });
  }

  const handleUpload = (file) => {
    console.log(file);
    setFile(file);
  }

  return (
      <div className="books-container">
        <Container fluid>
          <Tilt className="Tilt" options={{max: 25}}>
            <LhDropzone handleUpload={handleUpload} empty={!file}/>
            <Button className={"uploadButton col-12"} size="sm"
                    disabled={!file} color="primary"
                    onClick={() => submit()}>Upload File</Button>
          </Tilt>
        </Container>
      </div>
  );
}
