import { svelteNative, DomTraceCategory } from "svelte-native";
import RadListViewElement from "svelte-native-nativescript-ui/listview"
import RadSideDrawerElement from "svelte-native-nativescript-ui/sidedrawer"
import RadCalendarElement from "svelte-native-nativescript-ui/calendar"
import Charts from "svelte-native-nativescript-ui/chart"
import RadDataForm from "svelte-native-nativescript-ui/dataform"
import Gauges from "svelte-native-nativescript-ui/gauge"
import AutoCompleteElement from "svelte-native-nativescript-ui/autocomplete"

RadListViewElement.register();
RadSideDrawerElement.register();
RadCalendarElement.register();
Charts.register();
RadDataForm.register();
Gauges.register();
AutoCompleteElement.register();

import App from  "./App.svelte";

svelteNative(App, {});