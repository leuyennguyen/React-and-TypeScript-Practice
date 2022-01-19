// Google Maps API added in this project by <script> in index.html file
// This would make google become global object, but TS does not automatically
// know there's a global variable and all methods related to it, so we
// must add a type definition file of Google Maps API: 
/// <reference types="@types/google.maps" />

import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

const user = new User();
const company = new Company();
const customMap = new CustomMap('map'); // id of the map <div> in index.html

customMap.addMarker(user);
customMap.addMarker(company);

/* We can direct work with google object from Google Maps
new google.maps.Map(document.getElementById('map'), {
    zoom: 1,
    center: {
        lat: 0,
        lng: 0
    }
});

However, if other engineers work on this project and freely
call any method; this may easily break the appilication, so
we will abstract this away using class CustomMap, which contains
an instance of google object from Google Maps API.
*/

