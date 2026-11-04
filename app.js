var app = angular.module("studentApp", []);

// Parent Controller
app.controller("CollegeController", function($scope) {

    $scope.collegeName = "Maharaja Institute of Technology";

});

// Child Controller
app.controller("StudentController", function($scope) {

    $scope.students = ["Rahul", "Priya", "Arun"];

    $scope.showDetails = false;

    $scope.addStudent = function() {

        if ($scope.studentName && $scope.studentName.trim() !== "") {

            $scope.students.push($scope.studentName.trim());

            $scope.studentName = "";

        } else {

            alert("Please enter student name");

        }

    };

});