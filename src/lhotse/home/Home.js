import React, {useState} from 'react';
import {Container, Button} from 'reactstrap';
import {submitFile} from "../../util/APIUtils";
import LhDropzone from "../../components/dropzone";
import "./Home.css"
import Tilt from "react-tilt/dist/tilt";
import {alertService} from "../../services/alert.service";

export default function Home() {
  const [file, setFile] = useState(0);
  const submit = async () => {
    const model = {
      file: file.base64, fileName: file.name
    };
    try {
      await submitFile(model);
      setFile(undefined);
      alertService.success('Success!!');
    } catch (err) {
      alertService.error('Error!!');
    }
  }

  const handleUpload = (file) => {
    setFile(file);
  }

  return (
        <Container fluid>
          <Tilt className="Tilt" options={{max: 25}}>
            <LhDropzone handleUpload={handleUpload} empty={!file}/>
            <Button className={"uploadButton col-12"} size="sm"
                    disabled={!file} color="primary"
                    onClick={() => submit()}>Upload File</Button>
          </Tilt>
        </Container>
  );
}
