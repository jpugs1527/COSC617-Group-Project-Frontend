import React, { Component } from 'react'
// Import React FilePond
import { FilePond, registerPlugin } from "react-filepond";

// Import FilePond styles
import "filepond/dist/filepond.min.css";

// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

class FileUploadInput extends Component {

	render() {
		return (
			<div>
				Upload Vehicle Images
				<FilePond
				ref={ref => (this.pond = ref)}
				allowMultiple={true}
				maxFiles={10}
				onaddfile={(err, file) => (
					this.props.value.push(file.filename)
				)}
				/>
			</div>
		);
	}
}

export default FileUploadInput;