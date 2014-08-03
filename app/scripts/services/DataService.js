(function (angular) {
    'use strict';

    angular.module('proDisplayApp').service('DataService', function ($firebase, $firebaseSimpleLogin, fbURL) {

        var ref = new Firebase(fbURL);
        var dataRef = ref.child("appdata"); //app data
        var infoRef = ref.child("appinfo"); // app info
        var itemKey = '';

        var appInfo = [];

//        infoRef.on('value', function(dataSnapshot) {
//            appInfo.push(dataSnapshot.val());
//            console.log(appInfo);
//        });

        return {
            getKey: function () {
                return itemKey;
            },
            setKey: function (value) {
                itemKey = value;
            },
            getAppInfo: function () {
                return $firebase(infoRef);
            },
            getAllItems: function () {
                return $firebase(dataRef);
            },
            getItemById: function (key) {
                return $firebase(dataRef)[key];
            },
            addItem: function (item) {
                dataRef.push(item); // add new item to firebase list
            },
            updateItem: function (key, item) {
                // Get the Firebase reference of the item

                dataRef.child(key).set({
                    name: item.name,
                    description: item.description,
                    downloadurl: item.downloadurl,
                    icon: item.icon
                });
            },
            removeItem: function (key) {
                // Avoid wrong removing
                if (key == undefined)return;

                // Firebase: Remove item from the list
                $firebase(dataRef).$remove(key);
            }
        };
    });
})(window.angular);