import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

/**
 * Dialog with action buttons. The actions are passed in as an array of React objects,
 * in this example [FlatButtons](/#/components/flat-button).
 *
 * You can also close this dialog by clicking outside the dialog, or with the 'Esc' key.
 */
export default class Detalhes extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleClose}
      />,
    ];

    let nomeProjeto = "'Prj #1'";
    return (
        <div>
            <RaisedButton label="Dialog" onClick={this.handleOpen} />
            <Dialog
            title={"Detalhes do Projeto " + nomeProjeto}
            actions={actions}
            modal={false}
            open={this.state.open}
            onRequestClose={this.handleClose}
            >
            <div>
                Formulário para incluir pessoas no projeto
            </div>
            <hr />
            <div>
                Lista de Pessoas que estão no projeto.
            </div>
            </Dialog>
        </div>
    );
  }
}