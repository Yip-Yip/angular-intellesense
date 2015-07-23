angular.module("photoBrowser", [])
    .service("imageService", function ($http) {

        return {
            getImages: function () {
                return $http.get("/photos.json", { responseType: "json" });
            }
        }
    })
    .controller("photoList", function ($scope,imageService) {
        

        imageService.getImages().success(function (result) {
            $scope.images = result;
        })
        
    })