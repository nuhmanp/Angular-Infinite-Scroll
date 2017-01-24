angular.module('infiniteScrollTutorial', ['infinite-scroll'])
        .controller('infiniteScrollController', function ($scope, $http) {
            $scope.users =
                    [{
                            "id": 1,
                            "first_name": "Kimberly",
                            "last_name": "Grant",
                            "email": "kgrant0@ebay.co.uk",
                            "country": "Bolivia",
                            "ip_address": "93.77.148.179"
                        }, {
                            "id": 2,
                            "first_name": "Elizabeth",
                            "last_name": "Lewis",
                            "email": "elewis1@so-net.ne.jp",
                            "country": "Indonesia",
                            "ip_address": "39.187.159.25"
                        },
 
                        {
                            "id": 100,
                            "first_name": "Shawn",
                            "last_name": "Ellis",
                            "email": "sellis2r@diigo.com",
                            "country": "Portugal",
                            "ip_address": "121.250.152.235"
                    }, {
                            "id": 2,
                            "first_name": "Elizabeth",
                            "last_name": "Lewis",
                            "email": "elewis1@so-net.ne.jp",
                            "country": "Indonesia",
                            "ip_address": "39.187.159.25"
                        },
 
                        {
                            "id": 100,
                            "first_name": "Shawn",
                            "last_name": "Ellis",
                            "email": "sellis2r@diigo.com",
                            "country": "Portugal",
                            "ip_address": "121.250.152.235"
                    }, {
                            "id": 2,
                            "first_name": "Elizabeth",
                            "last_name": "Lewis",
                            "email": "elewis1@so-net.ne.jp",
                            "country": "Indonesia",
                            "ip_address": "39.187.159.25"
                        },
 
                        {
                            "id": 100,
                            "first_name": "Shawn",
                            "last_name": "Ellis",
                            "email": "sellis2r@diigo.com",
                            "country": "Portugal",
                            "ip_address": "121.250.152.235"
                    }, {
                            "id": 2,
                            "first_name": "Elizabeth",
                            "last_name": "Lewis",
                            "email": "elewis1@so-net.ne.jp",
                            "country": "Indonesia",
                            "ip_address": "39.187.159.25"
                        },
 
                        {
                            "id": 100,
                            "first_name": "Shawn",
                            "last_name": "Ellis",
                            "email": "sellis2r@diigo.com",
                            "country": "Portugal",
                            "ip_address": "121.250.152.235"
                    }, {
                            "id": 2,
                            "first_name": "Elizabeth",
                            "last_name": "Lewis",
                            "email": "elewis1@so-net.ne.jp",
                            "country": "Indonesia",
                            "ip_address": "39.187.159.25"
                        },
 
                        {
                            "id": 100,
                            "first_name": "Shawn",
                            "last_name": "Ellis",
                            "email": "sellis2r@diigo.com",
                            "country": "Portugal",
                            "ip_address": "121.250.152.235"
                    }, {
                            "id": 2,
                            "first_name": "Elizabeth",
                            "last_name": "Lewis",
                            "email": "elewis1@so-net.ne.jp",
                            "country": "Indonesia",
                            "ip_address": "39.187.159.25"
                        },
 
                        {
                            "id": 100,
                            "first_name": "Shawn",
                            "last_name": "Ellis",
                            "email": "sellis2r@diigo.com",
                            "country": "Portugal",
                            "ip_address": "121.250.152.235"
                    }, {
                            "id": 2,
                            "first_name": "Elizabeth",
                            "last_name": "Lewis",
                            "email": "elewis1@so-net.ne.jp",
                            "country": "Indonesia",
                            "ip_address": "39.187.159.25"
                        },
 
                        {
                            "id": 100,
                            "first_name": "Shawn",
                            "last_name": "Ellis",
                            "email": "sellis2r@diigo.com",
                            "country": "Portugal",
                            "ip_address": "121.250.152.235"
                    }, {
                            "id": 2,
                            "first_name": "Elizabeth",
                            "last_name": "Lewis",
                            "email": "elewis1@so-net.ne.jp",
                            "country": "Indonesia",
                            "ip_address": "39.187.159.25"
                        },
 
                        {
                            "id": 100,
                            "first_name": "Shawn",
                            "last_name": "Ellis",
                            "email": "sellis2r@diigo.com",
                            "country": "Portugal",
                            "ip_address": "121.250.152.235"
                    }, {
                            "id": 2,
                            "first_name": "Elizabeth",
                            "last_name": "Lewis",
                            "email": "elewis1@so-net.ne.jp",
                            "country": "Indonesia",
                            "ip_address": "39.187.159.25"
                        },
 
                        {
                            "id": 100,
                            "first_name": "Shawn",
                            "last_name": "Ellis",
                            "email": "sellis2r@diigo.com",
                            "country": "Portugal",
                            "ip_address": "121.250.152.235"
                    }, {
                            "id": 2,
                            "first_name": "Elizabeth",
                            "last_name": "Lewis",
                            "email": "elewis1@so-net.ne.jp",
                            "country": "Indonesia",
                            "ip_address": "39.187.159.25"
                        },
 
                        {
                            "id": 100,
                            "first_name": "Shawn",
                            "last_name": "Ellis",
                            "email": "sellis2r@diigo.com",
                            "country": "Portugal",
                            "ip_address": "121.250.152.235"
                    }];
			$scope.data = $scope.users.slice(0, 5);
			$scope.getMoreData = function () {
				
				$scope.data = $scope.users.slice(0, $scope.data.length + 5);
			}
});