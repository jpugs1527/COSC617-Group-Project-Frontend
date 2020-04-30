import React from 'react'
import 'react-dropzone-uploader/dist/styles.css'
import Dropzone from 'react-dropzone-uploader'
import _ from 'underscore'
import $ from 'jquery'

const ImageUploadInput = (prop) => {

	// specify upload params and url for your files
	const getUploadParams = ({ meta }) => { return { url: process.env.REACT_APP_API_URL + "/vehicle/image_upload" } }
	
	// called every time a file's `status` changes
	const handleChangeStatus = ({ meta, file, xhr }, status) => { 
		if (status == "done") {
			// save url created of the image
			let response = JSON.parse(xhr.response);
			prop.value.push(response[0].secure_url);

			enableSaveButton();	
		} else if (status == "removed") {
			let response = JSON.parse(xhr.response);
			let cleanArray = _.without(prop.value, response[0].secure_url);

			prop.value.length = 0;

			_.map(cleanArray, function(e){
				prop.value.push(e);
			});	

			enableSaveButton();	
		} else {
			disableSaveButton();
		}
	}

	const enableSaveButton = () => {
		setTimeout(function(){ 
			$('#editVehicleSave').attr("disabled", false);
		}, 2000);
	}

	const disableSaveButton = () => {
		$('#editVehicleSave').attr("disabled", true);
	}
  
	return (
	  <Dropzone
		getUploadParams={getUploadParams}
		onChangeStatus={handleChangeStatus}
		accept="image/*"
	  />
	)
}

export default ImageUploadInput;