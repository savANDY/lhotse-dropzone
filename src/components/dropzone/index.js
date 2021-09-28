import React, {useCallback, useState} from 'react'
import {useDropzone} from 'react-dropzone'
import { InboxOutlined } from '@ant-design/icons';
import './index.css';

export default function LhDropzone(props) {
  const [insideText, setInsideText] = useState(0);
  React.useEffect(() => {
    if (props.empty) {
      setInsideText(null);
    }
  }, [props.empty])
  const onDrop = useCallback((files) => {
    files.forEach((file) => {
      const reader = new FileReader()

      reader.onabort = (e) => {
        console.log(e);
        props.handleUpload(undefined);
      }
      reader.onerror = (e) => {
        console.log(e);
        props.handleUpload(undefined);
      }
      reader.onload = () => {

        // Do whatever you want with the file contents
        const base64 = reader.result
        let fileInfo = {
          name: file.name,
          size: Math.round(file.size / 1000) + ' kB',
          base64,
        };
        console.log(fileInfo)
        setInsideText(fileInfo.name);
        props.handleUpload(fileInfo);
      }
      reader.readAsDataURL(file)
    })

  }, [])
  const onDropAccepted = useCallback((acceptedFile) => {

  });

  const {getRootProps, getInputProps} = useDropzone({onDrop, maxFiles:1, onDropAccepted, multiple: false})

  return (
      <div {...getRootProps()} className={"lh-dropzone"}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <input {...getInputProps()} />
        <p>{insideText || "Drag 'n' drop some file here, or click to select a file"}</p>
      </div>
  )
}
