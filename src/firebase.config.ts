
import { initializeApp } from "firebase/app";
import * as firebaseAuth from "firebase/auth";

const initApp: () => void = function() {
	// Initialize Firebase
	const config: Object = {
		apiKey: "AIzaSyA-gXDA9Npq57wvTvNmQsOWHHMd0dgQ_Qc",
		authDomain: "envape-99d26.firebaseapp.com",
		// databaseURL: "https://envape-99d26.firebaseio.com",
		// projectId: "envape-99d26",
		// storageBucket: "envape-99d26.appspot.com",
		// messagingSenderId: "241558432413"
	};

	initializeApp(config);
};

export { initApp };
