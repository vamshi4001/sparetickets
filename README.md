# Sparetickets #

Clone the repository
run the following commands
`ionic platform add android`

## Plugins ##
Start adding plugins by saying `ionic plugin add <plugin-name>`
`Eg: ionic plugin add cordova-plugin-whitelist` -- Take the hyphened part of each line below except for facebook plugin.
* cordova-plugin-whitelist 1.2.0 "Whitelist"
* ionic-plugin-keyboard 1.0.8 "Keyboard"
* cordova-plugin-geolocation 1.0.1 "Geolocation"
* Clone this repo from https://github.com/Wizcorp/phonegap-facebook-plugin
* Execute the following command to add facebook connect plugin
`cordova -d plugin add ~/full/path/to/cloned/directory/phonegap-facebook-plugin/ --variable APP_ID="<ReplaceAppID>" --variable APP_NAME="SpareTickets"`
* cordova-plugin-x-toast 2.3.1 "Toast"
* cordova-plugin-dialogs 1.2.0 "Notification"

For this plugin use `ionic plugin add <below_url>`
* https://github.com/selahssea/Cordova-open-native-settings


Flow

Signup->Profile->Explore(from side menu)
