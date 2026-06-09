import { Component } from "react";

import { List, Contact, Text } from './ContactList.styled'

class ContactList extends Component {
  render() {
    const { contacts, onDelete, filter } = this.props;

    return (
      <List>
        {contacts
          .filter(({ name }) =>
            name.toLowerCase().includes(filter.toLowerCase()),
          )
          .map(({ id, name, number }) => (
            <Contact key={id}>
              <Text>
                {name}: {number}
              </Text>
              <button type="button" onClick={() => onDelete(id)}>
                Delete
              </button>
            </Contact>
          ))}
      </List>
    );
  }
}

export default ContactList;
