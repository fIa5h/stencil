import {Accounts} from 'meteor/std:accounts-material';

import 'App/methods';
import './routes';

Accounts.ui.config({passwordSignupFields: "USERNAME_ONLY"});
