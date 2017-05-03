
import { initializeApp } from "firebase/app";
import * as firebaseAuth from "firebase/auth";

var initApp = function() {
	// Initialize Firebase
	// var firebase = require("firebase/app");
	// require("firebase/auth");
	// require("firebase/database");
	// require("firebase/storage");
	// require("firebase/messaging");

	var config = {
		apiKey: "AIzaSyA-gXDA9Npq57wvTvNmQsOWHHMd0dgQ_Qc",
		authDomain: "envape-99d26.firebaseapp.com",
		// databaseURL: "https://envape-99d26.firebaseio.com",
		// projectId: "envape-99d26",
		// storageBucket: "envape-99d26.appspot.com",
		// messagingSenderId: "241558432413"
	};

	initializeApp(config);

}

export { initApp };
