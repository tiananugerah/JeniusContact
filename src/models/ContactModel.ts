import {types} from 'mobx-state-tree';

const ContactModel = types.model('Contact', {
  id: types.identifier,
  firstName: types.string,
  lastName: types.string,
  age: types.number,
  photo: types.string,
});

export default ContactModel;
