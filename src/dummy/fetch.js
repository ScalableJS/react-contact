import contacts from '../dummy/dummy-users'
import actionsEnum from "../actions/actionsEnum";

export default function fetch(url, arg) {
    return new Promise(function (resolve, request) {
        setTimeout(() => {
            switch (arg.type) {
                case actionsEnum.GET_ALL_CONTACTS:
                    return resolve(contacts.get());
                case actionsEnum.GET_CONTACT:
                    debugger
                    return resolve(contacts.get());
                case actionsEnum.NEW_CONTACT:
                    debugger
                    return resolve(contacts.get());
                case actionsEnum.UPDATE_CONTACT:
                    debugger
                    return resolve(contacts.update(arg.contact));
                case actionsEnum.DELETE_CONTACT:
                    const id = url.split('/').slice(-1)[0];
                    return resolve(contacts.remove(id));
                default:
                    return resolve(contacts.get());
            }

        }, 500)
    })
}