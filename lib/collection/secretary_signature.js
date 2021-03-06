SecretarySignature = new Mongo.Collection("secretarySignature");
SecretarySignature.attachSchema(new SimpleSchema({

    secretaryName: {
        type: String,
        label: "Secretary's Name",
        max: 200
    },
    picture: {
        type: String,
        autoform: {
            afFieldInput: {
                type: 'fileUpload',
                collection: 'Images',
                accept: 'image/*',
                label: 'Upload Scanned Signature'
            }
        }
    },
    secSignOwner: {
        type: String,
        autoform: {
            omit: true
        },
        autoValue: function(){
            if (this.isInsert){
                return Meteor.userId();
            }
        }
    },
}));
