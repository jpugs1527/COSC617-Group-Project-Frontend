import React, { Component } from 'react'
import coreActions from '../../actions/CoreActions' 
import store from '../../helpers/Store'

class ImageUploadField extends Component {

  	onChange(e) {

    	let { input: { onChange }, preview_key } = this.props,
            
            reader  = new FileReader()

        reader.onloadend = () => {

            let image_preview  = {}
                image_preview[preview_key] = reader.result
                store.dispatch( coreActions.imagePreview(image_preview) );
    	        onChange(reader.result)

        }

        reader.readAsDataURL(e.target.files[0])

  	}

  	render(){

    	let { input,label, meta: { touched, error } } = this.props
    	
        return (

            <div className="form-group text-center">
    	    	<div className="btn btn-primary image-upload">
                    {label}
    		       	<input
    		        	type='file'
    		        	accept='.jpg, .png, .jpeg'
    		        	onChange={this.onChange.bind(this)}
                        className="image-upload-btn"
    		       	/>
                </div>
    	     	<div>{touched && (error && <span style={{color: 'red', fontSize: 14}}>{error}</span>) }</div>
    	    </div>
        
        )
	}
}

export default ImageUploadField