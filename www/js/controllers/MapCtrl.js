/**
 * Created by pradyumnad on 12/19/15.
 */
angular.module("oyedelhi")
    .controller('MapCtrl', function ($scope, $ionicLoading, $compile) {

        $scope.init = function () {
            console.log("This is init");
            alert("This is init");
            var myLatlng = new google.maps.LatLng(43.07493, -89.381388);
            var mapOptions = {
                center: myLatlng,
                zoom: 16,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            var map = new google.maps.Map(document.getElementById("map"),
                mapOptions);

            //Marker + infowindow + angularjs compiled ng-click
            var contentString = "<div><a ng-click='clickTest()'>Click me!</a></div>";
            var compiled = $compile(contentString)($scope);

            var infowindow = new google.maps.InfoWindow({
                content: compiled[0]
            });

            var marker = new google.maps.Marker({
                position: myLatlng,
                map: map,
                title: 'Uluru (Ayers Rock)'
            });

            google.maps.event.addListener(marker, 'click', function () {
                infowindow.open(map, marker);
            });

            $scope.map = map;
        };

        /**
         * Adds the marker with the specified coordinate
         * @example : {lat : 12.11, lng: 11.1}
         * @param coord
         */
        $scope.addMarker = function (coord) {
            var marker = new google.maps.Marker({
                position: coord,
                map: $scope.map,
                title: 'Hello World!'
            });
        };

        $scope.centerOnMe = function () {
            if (!$scope.map) {
                return;
            }

            $scope.loading = $ionicLoading.show({
                content: 'Getting current location...',
                showBackdrop: false
            });

            var options = {timeout: 30000, enableHighAccuracy: true, maximumAge: 10000};
            navigator.geolocation.getCurrentPosition(function (pos) {
                $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
                console.log(pos);
                alert(JSON.stringify(pos));
                $scope.loading.hide();

                $scope.addMarker({lat: pos.coords.latitude, lng: pos.coords.longitude});

            }, function (error) {
                alert('Unable to get location: ' + error.message);
            }, options);
        };

        $scope.clickTest = function () {
            alert('Example of infowindow with ng-click')
        };

    });