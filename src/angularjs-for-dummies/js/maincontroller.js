
// -- tut1 controller
app.controller("tut1", function($scope){
    $scope.helloworld = "Hello world!";
});


// -- tut2 controller
app.controller("tut2", function($scope){
    $scope.userName = "";
});

// -- tut3/tut4 controller
app.controller("tut3", function($scope){
	$scope.selectedPerson = 0;
		$scope.selectedGenre = null;
		$scope.people = [
			{
				id: 0,
				name: 'Leon',
				music: [
					'Rock',
					'Metal',
					'Dubstep',
					'Electro'
				]
			},
			{
				id: 1,
				name: 'Chris',
				music: [
					'Indie',
					'Drumstep',
					'Dubstep',
					'Electro'
				]
			},
			{
				id: 2,
				name: 'Harry',
				music: [
					'Rock',
					'Metal',
					'Thrash Metal',
					'Heavy Metal'
				]
			},
			{
				id: 3,
				name: 'Allyce',
				music: [
					'Pop',
					'RnB',
					'Hip Hop'
				]
			}
		];
});

// -- tut5 controller
app.controller("tut5", function($scope){
	$scope.selectedPerson = 0;
		$scope.selectedGenre = null;
		$scope.people = [
			{
				id: 0,
				name: 'Leon',
				music: [
					'Rock',
					'Metal',
					'Dubstep',
					'Electro'
				]
			},
			{
				id: 1,
				name: 'Chris',
				music: [
					'Indie',
					'Drumstep',
					'Dubstep',
					'Electro'
				]
			},
			{
				id: 2,
				name: 'Harry',
				music: [
					'Rock',
					'Metal',
					'Thrash Metal',
					'Heavy Metal'
				]
			},
			{
				id: 3,
				name: 'Allyce',
				music: [
					'Pop',
					'RnB',
					'Hip Hop'
				]
			}
		];

		// code to add a person
		$scope.newPerson = null;
    	$scope.addNew = function() {
        if ($scope.newPerson != null && $scope.newPerson != "") {
            $scope.people.push({
                id: $scope.people.length,
                name: $scope.newPerson,
                live: true,
                music: []
            });
        }
    }
});