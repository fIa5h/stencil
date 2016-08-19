import './publications';
import 'App/methods';
import {Accounts} from 'meteor/std:accounts-material';

var accountsConfigOptions = {
	sendVerificationEmail: true,
	forbidClientAccountCreation: false
}

Accounts.config(accountsConfigOptions);
