app.controller("homepage", function($scope, $http, $location, $mdDialog) {
    var originatorEv;
    $scope.projects = [{
        title: "Office Any Where",
        image: "images/office-any-where.png",
        github: "https://github.com/NavidFa/office-anywhere",
        link: "https://office-anywhere.herokuapp.com"
    }, {
        title: "Movie Search",
        image: "images/movie-search.png",
        github: "https://github.com/NavidFa/movie-search",
        link: "http://navidfallah.com/movie-search"
    }, {
        title: "Essential Coding Books",
        image: "images/greads.png",
        github: "https://github.com/NavidFa/galvanize-reads",
        link: "https://galvanize-read.herokuapp.com/"
    }, {
        title: "World Bank Query",
        image: "images/navidq1.png",
        github: "https://github.com/NavidFa/q1-express",
        link: "http://navidfallah.com/q1/"
    }, {
        title: "Mitchell Painting",
        image: "images/Mitchellpaint.jpg",
        github: "https://github.com/NavidFa/mitchell-painting-co",
        link: "http://navidfallah.com/mitchellpaintingco"
    }, {
        title: "Schnoodle",
        image: "images/schnoodle.jpg",
        github: "https://github.com/NavidFa/schnoodle",
        link: "http://navidfallah.com/schnoodle"
    }]
    this.openMenu = function($mdOpenMenu, ev) {
        originatorEv = ev;
        $mdOpenMenu(ev);
    };
    $scope.homepage = function() {
        $location.path('/')
    }
    $scope.goto= function(index) {
        $location.path('/' + index + '/')

        // $mdDialog.show(
        //     $mdDialog.alert()
        //     .title('You clicked!')
        //     .textContent('You clicked the menu item at index ' + index)
        //     .ok('Nice')
        //     .targetEvent(originatorEv)
        // );
        originatorEv = null;
    };
})
