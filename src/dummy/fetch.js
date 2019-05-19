import contacts from '../dummy/dummy-users'
import actionsEnum from "../actions/actionsEnum";

export default function fetch(url, arg) {
    return new Promise(function (resolve, reject) {
        arg = Object.assign(arg);
        setTimeout(() => {
            const id = url.split('/').slice(-1)[0];
            switch (arg.type) {
                case actionsEnum.GET_ALL_CONTACTS:
                    return resolve(contacts.get());
                case actionsEnum.GET_CONTACT:
                    const contact = contacts.get(id);
                    // if contact is absent
                    if(contacts.get(id)){
                        return resolve(contact);
                    } else {
                        return reject(null);
                    }

                case actionsEnum.SAVE_CONTACT:
                    return resolve(contacts.add(arg.contact));
                case actionsEnum.UPDATE_CONTACT:
                    return resolve(contacts.update(arg.contact));
                case actionsEnum.DELETE_CONTACT:
                    return resolve(contacts.remove(id));
                default:
                    return resolve(contacts.get());
            }

        }, 500)
    })
}