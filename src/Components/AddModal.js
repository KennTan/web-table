import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import "react-table/react-table.css";

export default class Add extends React.Component {
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
				<Button color="primary" onClick={this.toggle}>Add</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className="addModal">
          <ModalHeader toggle={this.toggle}>Add Entry</ModalHeader>
          <ModalBody>
						--- Add Entry ---
					</ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Add</Button>
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}