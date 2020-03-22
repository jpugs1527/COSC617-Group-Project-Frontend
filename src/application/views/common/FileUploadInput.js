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
	constructor(props) {
		super(props);

		this.state = {
			files: []
		};
	}

	render() {
		return (
			<div>
				Upload Vehicle Images
				{/* Pass FilePond properties as attributes */}
				<FilePond
				ref={ref => (this.pond = ref)}
				files={this.state.files}
				allowMultiple={true}
				maxFiles={10}
				//server="/api"
				onupdatefiles={fileItems => {
					// Set currently active file objects to this.state
					this.setState({
						files: fileItems.map(fileItem => fileItem.file)
					});
				}}
				/>
			</div>
		);
	}
}

export default FileUploadInput;