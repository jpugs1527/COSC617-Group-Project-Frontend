import React from "react"
import { Form, FormControl, Button} from 'react-bootstrap'
import DateRangePicker from 'react-bootstrap-daterangepicker'

function Search(object) {
    var $this = object.object;

    return (
        <div>
            <Form onSubmit={$this.handleSubmit} inline>
                <FormControl type="text" placeholder="Where" className="space" name="where" onChange={$this.handleChange} required/>
                <DateRangePicker startDate={$this.state.from} endDate={$this.state.to} onHide={$this.hideEvent}>
                    <Button type="button" variant="light" className="space">{$this.state.from} - {$this.state.to}</Button>
                </DateRangePicker>
                <Button type="submit" variant="primary">Search</Button>
            </Form>
        </div>
    );
}
export default Search;