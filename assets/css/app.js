var app = angular.module("app", ["xeditable"]);

app.run(function(editableOptions, $httpBackend) {
  editableOptions.theme = 'bs3'; 
  });


app.controller('RelationCtrl', function($scope, $filter, $q, $http) {
 $scope.users = [
    {id: 1, firstName: 'Sakthi', lastName: 'Vel', email:'m.sakthideveloper@gmail.com', phone: 9585183727, address:'USA'},
    {id: 2, firstName: 'Vignesh', lastName: 'Raja', email: 'vigneshraja23@gmail.com', phone: 9585183727, address: 'USA'}
  ]; 

  

  // mark user as deleted
  $scope.deleteUser = function(id) {
    var filtered = $filter('filter')($scope.users, {id: id});
    if (filtered.length) {
      filtered[0].isDeleted = true;
    }
  };

  // add user
  $scope.addUser = function() {
    $scope.users.push({
      id: $scope.users.length+1,
      firstName: '',
      lastName:'',
      email : '',
      phone:'',
      address:'',
      isNew: true
    });
  };

  // cancel all changes
  $scope.cancel = function() {
    for (var i = $scope.users.length; i--;) {
      var user = $scope.users[i];    
      // undelete
      if (user.isDeleted) {
        delete user.isDeleted;
      }
      // remove new 
      if (user.isNew) {
        $scope.users.splice(i, 1);
      }      
    };
  };

  // save edits implementation while production
  $scope.saveTable = function() {
    var results = [];
    for (var i = $scope.users.length; i--;) {
      var user = $scope.users[i];
      // actually delete user
      if (user.isDeleted) {
        $scope.users.splice(i, 1);
      }
      // mark as not new 
      if (user.isNew) {
        user.isNew = false;
      }

      // send on server
      results.push($http.post('/saveUser', user));      
    }

    return $q.all(results);
  };
});



app.controller('ParentCtrl', function($scope, $filter, $q, $http) {
 $scope.users = [
    {id: 1, FName: 'Sakthi', LName: 'Vel', gender:'Male', dob:'15/06/1992', age:23, email:'m.sakthideveloper@gmail.com', phone: 9585183727},
    {id: 2, FName: 'Vignesh', LName: 'Raja', gender:'Male', dob:'15/06/1992', age:23, email: 'vigneshraja23@gmail.com', phone: 9585183727}
  ]; 

$scope.genders = [
    {value: 1, text: 'Male'},
    {value: 2, text: 'Female'},
    {value: 3, text: 'other'}
  ]; 

 $scope.showGender = function(user) {
    var selected = [];
    if(user.gender) {
      selected = $filter('filter')($scope.genders, {value: user.gender});
    }
    return selected.length ? selected[0].text : 'Not set';
  };
  

  // mark user as deleted
  $scope.deleteUser = function(id) {
    var filtered = $filter('filter')($scope.users, {id: id});
    if (filtered.length) {
      filtered[0].isDeleted = true;
    }
  };

  // add user
  $scope.addUser = function() {
    $scope.users.push({
      id: $scope.users.length+1,
      gender:null,
      isNew: true
    });
  };

  // cancel all changes
  $scope.cancel = function() {
    for (var i = $scope.users.length; i--;) {
      var user = $scope.users[i];    
      // undelete
      if (user.isDeleted) {
        delete user.isDeleted;
      }
      // remove new 
      if (user.isNew) {
        $scope.users.splice(i, 1);
      }      
    };
  };

  // save edits implementation while production
  $scope.saveTable = function() {
    var results = [];
    for (var i = $scope.users.length; i--;) {
      var user = $scope.users[i];
      // actually delete user
      if (user.isDeleted) {
        $scope.users.splice(i, 1);
      }
      // mark as not new 
      if (user.isNew) {
        user.isNew = false;
      }

      // send on server
      results.push($http.post('/saveUser', user));      
    }

    return $q.all(results);
  };
});




app.controller('HospitalCtrl', function($scope, $filter, $q, $http) {
 $scope.users = [
    {id: 1, firstName: 'Sakthi', lastName: 'Vel', location:'USA', phone: 9585183727, nriName:'Dispaly NRI Name'},
    {id: 2, firstName: 'Vignesh', lastName: 'Raja', location:'USA', phone: 9585183727, nriName:'Dispaly NRI Name'}
  ]; 

$scope.genders = [
    {value: 1, text: 'Male'},
    {value: 2, text: 'Female'},
    {value: 3, text: 'other'}
  ]; 

 $scope.showGender = function(user) {
    var selected = [];
    if(user.gender) {
      selected = $filter('filter')($scope.genders, {value: user.gender});
    }
    return selected.length ? selected[0].text : 'Not set';
  };
  

  // mark user as deleted
  $scope.deleteUser = function(id) {
    var filtered = $filter('filter')($scope.users, {id: id});
    if (filtered.length) {
      filtered[0].isDeleted = true;
    }
  };

  // add user
  $scope.addUser = function() {
    $scope.users.push({
      id: $scope.users.length+1,
      gender:null,
      isNew: true
    });
  };

  // cancel all changes
  $scope.cancel = function() {
    for (var i = $scope.users.length; i--;) {
      var user = $scope.users[i];    
      // undelete
      if (user.isDeleted) {
        delete user.isDeleted;
      }
      // remove new 
      if (user.isNew) {
        $scope.users.splice(i, 1);
      }      
    };
  };

  // save edits implementation while production
  $scope.saveTable = function() {
    var results = [];
    for (var i = $scope.users.length; i--;) {
      var user = $scope.users[i];
      // actually delete user
      if (user.isDeleted) {
        $scope.users.splice(i, 1);
      }
      // mark as not new 
      if (user.isNew) {
        user.isNew = false;
      }

      // send on server
      results.push($http.post('/saveUser', user));      
    }

    return $q.all(results);
  };
});

app.controller('HpInfoCtrl', function($scope, $filter, $q, $http) {
 $scope.users = [
    {id: 1, hpName: 'SRM', location: 'Chennai', address:'Chennai', email:'name@example.com', tel:'123 456 0000', normalBeds:'3', icuBeds:'5'}
    
  ]; 


  

  // mark user as deleted
  $scope.deleteUser = function(id) {
    var filtered = $filter('filter')($scope.users, {id: id});
    if (filtered.length) {
      filtered[0].isDeleted = true;
    }
  };

  // add user
  $scope.addUser = function() {
    $scope.users.push({
      id: $scope.users.length+1,
      gender:null,
      isNew: true
    });
  };

  // cancel all changes
  $scope.cancel = function() {
    for (var i = $scope.users.length; i--;) {
      var user = $scope.users[i];    
      // undelete
      if (user.isDeleted) {
        delete user.isDeleted;
      }
      // remove new 
      if (user.isNew) {
        $scope.users.splice(i, 1);
      }      
    };
  };

  // save edits implementation while production
  $scope.saveTable = function() {
    var results = [];
    for (var i = $scope.users.length; i--;) {
      var user = $scope.users[i];
      // actually delete user
      if (user.isDeleted) {
        $scope.users.splice(i, 1);
      }
      // mark as not new 
      if (user.isNew) {
        user.isNew = false;
      }

      // send on server
      results.push($http.post('/saveUser', user));      
    }

    return $q.all(results);
  };
});

app.controller('AdminCtrl', function($scope, $filter, $q, $http) {
 $scope.users = [
    {id: 1, role: 'SRM', name: 'Chennai', email:'name@example.com', phone:'123 456 0000'}
    
  ]; 


  

  // mark user as deleted
  $scope.deleteUser = function(id) {
    var filtered = $filter('filter')($scope.users, {id: id});
    if (filtered.length) {
      filtered[0].isDeleted = true;
    }
  };

  // add user
  $scope.addUser = function() {
    $scope.users.push({
      id: $scope.users.length+1,
      gender:null,
      isNew: true
    });
  };

  // cancel all changes
  $scope.cancel = function() {
    for (var i = $scope.users.length; i--;) {
      var user = $scope.users[i];    
      // undelete
      if (user.isDeleted) {
        delete user.isDeleted;
      }
      // remove new 
      if (user.isNew) {
        $scope.users.splice(i, 1);
      }      
    };
  };

  // save edits implementation while production
  $scope.saveTable = function() {
    var results = [];
    for (var i = $scope.users.length; i--;) {
      var user = $scope.users[i];
      // actually delete user
      if (user.isDeleted) {
        $scope.users.splice(i, 1);
      }
      // mark as not new 
      if (user.isNew) {
        user.isNew = false;
      }

      // send on server
      results.push($http.post('/saveUser', user));      
    }

    return $q.all(results);
  };
});

app.controller('ConsultantCtrl', function($scope, $filter, $q, $http) {
 $scope.users = [
    {id: 1, speciality: 'special', name: 'Sakthivel', qualification:'B.E(ECE)', email:'name@example.com', phone:'123 456 0000', experience:1.7 }
    
  ]; 


  

  // mark user as deleted
  $scope.deleteUser = function(id) {
    var filtered = $filter('filter')($scope.users, {id: id});
    if (filtered.length) {
      filtered[0].isDeleted = true;
    }
  };

  // add user
  $scope.addUser = function() {
    $scope.users.push({
      id: $scope.users.length+1,
      gender:null,
      isNew: true
    });
  };

  // cancel all changes
  $scope.cancel = function() {
    for (var i = $scope.users.length; i--;) {
      var user = $scope.users[i];    
      // undelete
      if (user.isDeleted) {
        delete user.isDeleted;
      }
      // remove new 
      if (user.isNew) {
        $scope.users.splice(i, 1);
      }      
    };
  };

  // save edits implementation while production
  $scope.saveTable = function() {
    var results = [];
    for (var i = $scope.users.length; i--;) {
      var user = $scope.users[i];
      // actually delete user
      if (user.isDeleted) {
        $scope.users.splice(i, 1);
      }
      // mark as not new 
      if (user.isNew) {
        user.isNew = false;
      }

      // send on server
      results.push($http.post('/saveUser', user));      
    }

    return $q.all(results);
  };
});


app.controller('FacilityCtrl', function($scope, $filter, $q, $http) {
 $scope.users = [
    {id: 1, instrument: 'Instrument 1', availability: 4}
    
  ]; 


  

  // mark user as deleted
  $scope.deleteUser = function(id) {
    var filtered = $filter('filter')($scope.users, {id: id});
    if (filtered.length) {
      filtered[0].isDeleted = true;
    }
  };

  // add user
  $scope.addUser = function() {
    $scope.users.push({
      id: $scope.users.length+1,
      gender:null,
      isNew: true
    });
  };

  // cancel all changes
  $scope.cancel = function() {
    for (var i = $scope.users.length; i--;) {
      var user = $scope.users[i];    
      // undelete
      if (user.isDeleted) {
        delete user.isDeleted;
      }
      // remove new 
      if (user.isNew) {
        $scope.users.splice(i, 1);
      }      
    };
  };

  // save edits implementation while production
  $scope.saveTable = function() {
    var results = [];
    for (var i = $scope.users.length; i--;) {
      var user = $scope.users[i];
      // actually delete user
      if (user.isDeleted) {
        $scope.users.splice(i, 1);
      }
      // mark as not new 
      if (user.isNew) {
        user.isNew = false;
      }

      // send on server
      results.push($http.post('/saveUser', user));      
    }

    return $q.all(results);
  };
});






app.controller('LocationCtrl', function($scope, $filter, $http) {
 $scope.user = {
    id: 1,
    address: 'B-Block, G Floor C, Sunnyside Apartment, Near National Model School, Link Road, Coimbatore - 641 028'
  }; 

  $scope.locations = [
    {value: 1, text: 'Chennai'},
    {value: 2, text: 'Pune'},
    {value: 3, text: 'Banglore'},
    {value: 4, text: 'Noida'}
  ]; 

  


  $scope.saveUser = function() {
    // $scope.user already updated!
    return $http.post('/saveUser', $scope.user).error(function(err) {
      if(err.field && err.msg) {
        // err like {field: "name", msg: "Server-side error for this username!"} 
        $scope.editableForm.$setError(err.field, err.msg);
      } else { 
        // unknown error
        $scope.editableForm.$setError('name', 'Unknown error!');
      }
    });
  };
});

app.controller('FacilityCtrl', function($scope, $filter, $q, $http) {
 $scope.users = [
    {id: 1, name: 'Digital X-ray', status:true},
     {id: 2, name: 'Ultra Sound Scan', status:true},
     {id: 3, name: 'CT-Scan', status:true},
  ]; 

$scope.user = {
    status: 1
  }; 

  $scope.statuses = [
    {value: 1, text: 'Yes'},
    {value: 2, text: 'No'}
  ]; 

  $scope.showStatus = function() {
    var selected = $filter('filter')($scope.statuses, {value: $scope.user.status});
    return ($scope.user.status && selected.length) ? selected[0].text : 'Not set';
  }; 
 

  // filter users to show
  $scope.filterUser = function(user) {
    return user.isDeleted !== true;
  };

  // mark user as deleted
  $scope.deleteUser = function(id) {
    var filtered = $filter('filter')($scope.users, {id: id});
    if (filtered.length) {
      filtered[0].isDeleted = true;
    }
  };

  // add user
  $scope.addUser = function() {
    $scope.users.push({
      id: $scope.users.length+1,
      name: '',
      isNew: true
    });
  };

  // cancel all changes
  $scope.cancel = function() {
    for (var i = $scope.users.length; i--;) {
      var user = $scope.users[i];    
      // undelete
      if (user.isDeleted) {
        delete user.isDeleted;
      }
      // remove new 
      if (user.isNew) {
        $scope.users.splice(i, 1);
      }      
    };
  };

  // save edits
  $scope.saveTable = function() {
    var results = [];
    for (var i = $scope.users.length; i--;) {
      var user = $scope.users[i];
      // actually delete user
      if (user.isDeleted) {
        $scope.users.splice(i, 1);
      }
      // mark as not new 
      if (user.isNew) {
        user.isNew = false;
      }

      // send on server
      results.push($http.post('/saveUser', user));      
    }

    return $q.all(results);
  };
});