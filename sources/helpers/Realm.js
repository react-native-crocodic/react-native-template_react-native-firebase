import Realm from 'realm';

export async function OpenRealm(name) {
    let realm = await Realm.open(RealmDataModel[name])

    return {
        name: RealmDataName[name],
        realm: realm,
    }
}

const RealmDataName = {
    NotificationID: "notificationID",
}

const RealmDataModel = {
    NotificationID: {
        path: "notificationID.realm",
        schema: [{
            name: RealmDataName.NotificationID,
            properties: {
                value: "int",
            },
        }],
    }
}