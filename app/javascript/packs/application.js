import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/plugins/nucleo/css/nucleo.css";
import "assets/scss/argon-dashboard-react.scss";

Rails.start()
Turbolinks.start()
ActiveStorage.start()
