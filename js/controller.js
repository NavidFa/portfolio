app.controller("homepage", function($scope, $http, $location, $mdDialog) {
    var originatorEv;
    $scope.projects = [
      {
          title: "Eatery",
          image: "images/eatery.png",
          github: "https://github.com/NavidFa/eatery.git",
          link: "https://github.com/NavidFa/eatery.git",
          description: "This app provides users with dishes and restaurants suggestions based on their dietary restrictions.",
          technologies:"iOS App, Swift, Express, MongoDB"
      },

      {
        title: "Office Any Where",
        image: "images/office-any-where.png",
        github: "https://github.com/NavidFa/office-anywhere",
        link: "https://office-anywhere.herokuapp.com",
        description: "This app helps users find and share the best coffee shops, cafes, coworking and other work-friendly spaces in cities and towns  everywhere.",
        technologies:"HTML5, CSS3, Express, PostgreSQL, Bootstrap"
    }, {
        title: "Movie Search",
        image: "images/movie-search.png",
        github: "https://github.com/NavidFa/movie-search",
        link: "http://navidfallah.com/movie-search",
        description: "This app helps users find more details about their favorite movies.",
        technologies:"HTML5, CSS3, Express, AngularJS"
    }, {
        title: "Essential Coding Books",
        image: "images/greads.png",
        github: "https://github.com/NavidFa/galvanize-reads",
        link: "https://galvanize-read.herokuapp.com/",
        description:"This app offers users with great coding reads and also introduces them to some of the best authors in programming filed.",
        technologies:"HTML5, CSS3, Express, Knex.js"
    }, {
        title: "World Bank Query",
        image: "images/navidq1.png",
        github: "https://github.com/NavidFa/q1-express",
        link: "http://navidfallah.com/q1/",
        description: "This app provides users with climate data, agricultural production and GDP Per capita  for  a certain country within a requested period of time.",
        technologies:"HTML5, CSS3, jQuery"
    }, {
        title: "Mitchell Painting",
        image: "images/Mitchellpaint.jpg",
        github: "https://github.com/NavidFa/mitchell-painting-co",
        link: "http://navidfallah.com/mitchellpaintingco",
        description:"This is simple app for a small painting business in Ohio.",
        technologies:"HTML5, CSS3"
    }, {
        title: "Schnoodle",
        image: "images/schnoodle.jpg",
        github: "https://github.com/NavidFa/schnoodle",
        link: "http://navidfallah.com/schnoodle",
        description:"This app provides users with information about 'Schnoodle' and where they would be able to adapt one.",
        technologies:"HTML5, CSS3"
    }]
    this.openMenu = function($mdOpenMenu, ev) {
        originatorEv = ev;
        $mdOpenMenu(ev);
    };
    $scope.homepage = function() {
        $location.path('/')
    }
    $scope.goto = function(index) {
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
