// Require modules for our User model
let mongoose = require("mongoose");
let passportLocalMongoose = require("passport-local-mongoose");

let userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      default: "",
      trim: true,
      required: "Username is required"
    },

    // taken out because password will be encryted by passport-local-mongoose
    /*username: {
        type: String,
        default: '',
        trim: true,
        required: 'username is required'
    },*/

    email: {
      type: String,
      default: "",
      trim: true,
      required: "Email is required"
    },

    displayName: {
      type: String,
      default: "",
      trim: true,
      required: "Display Name is required"
    },

    created: {
      type: Date,
      default: Date.now
    },

    update: {
      type: Date,
      default: Date.now
    }
  },
  {
    collection: "users"
  }
);

// configure options for UserSchema
let options = ({
    missingPasswordError: "Wrong / Missing Password"
});

userSchema.plugin(passportLocalMongoose, options);

module.exports.User = mongoose.model('User', userSchema);