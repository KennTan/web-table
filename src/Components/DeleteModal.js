import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import "react-table/react-table.css";

export default class Delete extends React.Component {
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
				<Button color="danger btn-sm" onClick={this.toggle}>Delete</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className="deleteModal">
          <ModalHeader toggle={this.toggle}>Delete Entry</ModalHeader>
          <ModalBody>
            Are you sure you want to delete this entry?
					</ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={this.toggle}>Delete</Button>
            <Button color="primary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}