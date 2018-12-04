import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import "react-table/react-table.css";

export default class Edit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
				<Button color="primary btn-sm" 
					onClick={this.toggle} 
					style={{paddingLeft:'16px', paddingRight:'16px'}}>Edit
				</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className="editModal" size="lg">
          <ModalHeader toggle={this.toggle}>Edit Entry</ModalHeader> 
          <ModalBody>
            --- Edit Entry ---
					</ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Save</Button>
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}