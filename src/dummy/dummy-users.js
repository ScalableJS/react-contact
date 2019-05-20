const contacts = (function () {
    const STORAGE_NAME = 'contacts';
    let contacts = [
        {
            "_id": "5ce27db80599e7cd75558c93",
            "name": {
                "first": "Karin",
                "last": "Delacruz"
            },
            "email": "karin.delacruz@undefined.info",
            "phone": "(814) 528-3782",
            "callHistory": [
                {
                    "_id": "5ce27db8b03a641bcd1913d6",
                    "type": 1,
                    "timestamp": 1465427038908,
                    "duration": 860823
                },
                {
                    "_id": "5ce27db8c0dd2793121f9b9b",
                    "type": 2,
                    "timestamp": 1453948040604,
                    "duration": 1125109
                },
                {
                    "_id": "5ce27db8994df1d48b10dbec",
                    "type": 1,
                    "timestamp": 1543179957835,
                    "duration": 321384
                }
            ]
        },
        {
            "_id": "5ce27db82783d27ca4eaa52c",
            "name": {
                "first": "Parrish",
                "last": "Russell"
            },
            "email": "parrish.russell@undefined.io",
            "phone": "(931) 479-3774",
            "callHistory": [
                {
                    "_id": "5ce27db81758f7191e826040",
                    "type": 2,
                    "timestamp": 1556176577183,
                    "duration": 1075937
                },
                {
                    "_id": "5ce27db8036b085959a2da22",
                    "type": 1,
                    "timestamp": 1520467211491,
                    "duration": 333922
                },
                {
                    "_id": "5ce27db895bf53c7961e3b91",
                    "type": 1,
                    "timestamp": 1549757570537,
                    "duration": 1215330
                }
            ]
        },
        {
            "_id": "5ce27db8a9b5c4576fc3de56",
            "name": {
                "first": "Eva",
                "last": "Garrison"
            },
            "email": "eva.garrison@undefined.biz",
            "phone": "(947) 599-2696",
            "callHistory": [
                {
                    "_id": "5ce27db84b6d036a948112f2",
                    "type": 2,
                    "timestamp": 1397936975985,
                    "duration": 746746
                },
                {
                    "_id": "5ce27db8121957fdc684d8b4",
                    "type": 1,
                    "timestamp": 1460634562198,
                    "duration": 254902
                },
                {
                    "_id": "5ce27db8412723a5fd4f424c",
                    "type": 1,
                    "timestamp": 1521280932414,
                    "duration": 848305
                }
            ]
        },
        {
            "_id": "5ce27db87b59fa019963625c",
            "name": {
                "first": "Alexandra",
                "last": "Crosby"
            },
            "email": "alexandra.crosby@undefined.ca",
            "phone": "(998) 427-2600",
            "callHistory": [
                {
                    "_id": "5ce27db80fa3199ebd4d7e93",
                    "type": 2,
                    "timestamp": 1458575396919,
                    "duration": 853980
                },
                {
                    "_id": "5ce27db86c50e2a6d0be4f26",
                    "type": 3,
                    "timestamp": 1551595327057,
                    "duration": 1325706
                },
                {
                    "_id": "5ce27db8683200ec56394bf0",
                    "type": 1,
                    "timestamp": 1392885102808,
                    "duration": 873247
                }
            ]
        },
        {
            "_id": "5ce27db8b2714b7f95a5fd63",
            "name": {
                "first": "Katheryn",
                "last": "Dalton"
            },
            "email": "katheryn.dalton@undefined.biz",
            "phone": "(986) 581-2186",
            "callHistory": [
                {
                    "_id": "5ce27db8967c13cc4a1a8b61",
                    "type": 1,
                    "timestamp": 1427965503532,
                    "duration": 1426565
                },
                {
                    "_id": "5ce27db81033da1f3aa006de",
                    "type": 1,
                    "timestamp": 1523382528114,
                    "duration": 1629805
                },
                {
                    "_id": "5ce27db8c529fc4fb5509e45",
                    "type": 3,
                    "timestamp": 1502797701049,
                    "duration": 582791
                }
            ]
        },
        {
            "_id": "5ce27db82d4a4b74572e6a82",
            "name": {
                "first": "Maggie",
                "last": "Sheppard"
            },
            "email": "maggie.sheppard@undefined.net",
            "phone": "(912) 462-3404",
            "callHistory": [
                {
                    "_id": "5ce27db8e4da4ace8b57db43",
                    "type": 1,
                    "timestamp": 1389814358021,
                    "duration": 47340
                },
                {
                    "_id": "5ce27db8ee39f7cdafb15017",
                    "type": 3,
                    "timestamp": 1430797554798,
                    "duration": 1415149
                },
                {
                    "_id": "5ce27db8c8fa4b14ea89adc5",
                    "type": 1,
                    "timestamp": 1477827480280,
                    "duration": 751675
                }
            ]
        },
        {
            "_id": "5ce27db8ac4c1a877f3abdd2",
            "name": {
                "first": "Janna",
                "last": "Tyson"
            },
            "email": "janna.tyson@undefined.tv",
            "phone": "(939) 457-2744",
            "callHistory": [
                {
                    "_id": "5ce27db89c2492b63f821c4d",
                    "type": 3,
                    "timestamp": 1513652404819,
                    "duration": 1564363
                },
                {
                    "_id": "5ce27db82a70eb1bd53eb5b8",
                    "type": 1,
                    "timestamp": 1527856645262,
                    "duration": 1215921
                },
                {
                    "_id": "5ce27db835daecf203da6ba8",
                    "type": 1,
                    "timestamp": 1544315867927,
                    "duration": 1403694
                }
            ]
        },
        {
            "_id": "5ce27db8bb3f1b42d14ac7a5",
            "name": {
                "first": "Kennedy",
                "last": "Hardy"
            },
            "email": "kennedy.hardy@undefined.me",
            "phone": "(974) 434-2290",
            "callHistory": [
                {
                    "_id": "5ce27db801e260e2c2dec382",
                    "type": 1,
                    "timestamp": 1399446830239,
                    "duration": 902773
                },
                {
                    "_id": "5ce27db8ed697c2cd06af567",
                    "type": 1,
                    "timestamp": 1474935269163,
                    "duration": 377440
                },
                {
                    "_id": "5ce27db85cb8fdd2bb37582c",
                    "type": 2,
                    "timestamp": 1405772759181,
                    "duration": 382526
                }
            ]
        },
        {
            "_id": "5ce27db8d0113aacdd4f7f56",
            "name": {
                "first": "Holloway",
                "last": "Simpson"
            },
            "email": "holloway.simpson@undefined.com",
            "phone": "(949) 567-2528",
            "callHistory": [
                {
                    "_id": "5ce27db84d8b1ba2a88fe876",
                    "type": 2,
                    "timestamp": 1555574820564,
                    "duration": 513593
                },
                {
                    "_id": "5ce27db810878a6bc6caf921",
                    "type": 1,
                    "timestamp": 1403971827731,
                    "duration": 921593
                },
                {
                    "_id": "5ce27db874bafb939a87930c",
                    "type": 2,
                    "timestamp": 1510655604355,
                    "duration": 1450281
                }
            ]
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
                return typeof obj == 'object' ? Object.assign(obj) : null
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