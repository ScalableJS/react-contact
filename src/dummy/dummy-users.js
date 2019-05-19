const contacts = (function () {
    const STORAGE_NAME = 'contacts';
    let contacts = [
        {
            "_id": "5ce008fc6816498774f83bb5",
            "name": {
                "first": "Lolita",
                "last": "Schneider"
            },
            "email": "lolita.schneider@undefined.name",
            "phone": "(898) 567-2864"
        },
        {
            "_id": "5ce008fc844da15f3744f04f",
            "name": {
                "first": "Candy",
                "last": "Beard"
            },
            "email": "candy.beard@undefined.me",
            "phone": "(841) 555-2169"
        },
        {
            "_id": "5ce008fc9e8ccd98edac7c60",
            "name": {
                "first": "Nicholson",
                "last": "Griffin"
            },
            "email": "nicholson.griffin@undefined.io",
            "phone": "(894) 485-2069"
        },
        {
            "_id": "5ce008fcebce8da175bc8118",
            "name": {
                "first": "Tanner",
                "last": "Carney"
            },
            "email": "tanner.carney@undefined.biz",
            "phone": "(811) 564-2414"
        },
        {
            "_id": "5ce008fce5aaaabf98d86fcc",
            "name": {
                "first": "Loraine",
                "last": "Dodson"
            },
            "email": "loraine.dodson@undefined.org",
            "phone": "(936) 511-2511"
        },
        {
            "_id": "5ce008fcf6a816fe500197ec",
            "name": {
                "first": "Roth",
                "last": "Jefferson"
            },
            "email": "roth.jefferson@undefined.net",
            "phone": "(911) 507-3185"
        },
        {
            "_id": "5ce008fc2b73ab98ae2e34e4",
            "name": {
                "first": "Celia",
                "last": "Watts"
            },
            "email": "celia.watts@undefined.co.uk",
            "phone": "(933) 596-2562"
        },
        {
            "_id": "5ce008fcf748b0a732300f68",
            "name": {
                "first": "Morris",
                "last": "Crawford"
            },
            "email": "morris.crawford@undefined.biz",
            "phone": "(844) 559-2767"
        }
    ];

    function generateId() {
        return Math.random().toString(32).slice(2);
    }

    const _public = {
        save: function () {
            sessionStorage[STORAGE_NAME] = JSON.stringify(contacts);
        },
        remove: function (id) {
            // Delete mock serverside
            contacts.forEach((item, n) => {
                if (item._id === id) {
                    contacts.splice(n, 1)
                }
            });
            _public.save();
        },
        add: function (contact) {
            contact._id = generateId();
            contacts.unshift(contact);
            _public.save();
        },
        update: function (contact) {
            // Update Mock serverside
            contacts.forEach((item, n) => {
                if (item._id === contact._id) {
                    contacts[n] = contact
                }
            });
            _public.save();
        },
        get: function (id) {
            if (id) {
                const obj = contacts.find((item) => item._id === id);
                return typeof obj == 'object' ? Object.assign(obj): null
            } else {
                return Array.from(contacts);
            }

        }
    };


    // constructor
    (function init() {
        try {
            contacts = JSON.parse(sessionStorage[STORAGE_NAME]);
            console.log('get contact from storage')
        } catch (e) {
            console.log('get contact from obj and save to session storage');
            _public.save();
        }
    }());


    return _public

}());

export default contacts;