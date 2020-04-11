import React from 'react'
import 'react-dropzone-uploader/dist/styles.css'
import Dropzone from 'react-dropzone-uploader'

const FileUploadInput = (prop) => {

	// specify upload params and url for your files
	const getUploadParams = ({ meta }) => { return { url: process.env.REACT_APP_API_URL + "/vehicle/image_upload" } }
	
	// called every time a file's `status` changes
	const handleChangeStatus = ({ meta, file, xhr }, status) => { 
		if (status == "done") {
			// save url created of the image
			let response = JSON.parse(xhr.response);
			prop.value.push(response[0].secure_url);
		}
	}
  
	return (
	  <Dropzone
		getUploadParams={getUploadParams}
		onChangeStatus={handleChangeStatus}
		accept="image/*"
	  />
	)
}

  export default FileUploadInput;