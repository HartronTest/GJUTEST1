//stack implementation

var Stack = require('stackjs');
 
var stack = new Stack();
 
stack.push(10);
stack.push(5);
stack.size(); // 2 
stack.peek(); // 5 
stack.pop(); // 5 
stack.size(); // 1




//web interface using angular js
angular.module('foundationDemoApp').controller('AccordionDemoCtrl', function($scope) {
  $scope.oneAtATime = true;

  $scope.groups = [
    {
      title: "Dynamic Group Header - 1",
      content: "Dynamic Group Body - 1"
    },
    {
      title: "Dynamic Group Header - 2",
      content: "Dynamic Group Body - 2"
    }
  ];

  $scope.items = ['Item 1', 'Item 2', 'Item 3'];

  $scope.addItem = function() {
    var newItemNo = $scope.items.length + 1;
    $scope.items.push('Item ' + newItemNo);
  };
});




angular.module('foundationDemoApp').controller('AlertDemoCtrl', function($scope) {
  $scope.alerts = [
    { type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.' },
    { type: 'success round', msg: 'Well done! You successfully read this important alert message.' }
  ];

  $scope.addAlert = function() {
    $scope.alerts.push({msg: "Another alert!"});
  };

  $scope.closeAlert = function(index) {
    $scope.alerts.splice(index, 1);
  };

});



angular.module('foundationDemoApp').controller('AlertDemoCtrl', function($scope) {
  $scope.alerts = [
    { type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.' },
    { type: 'success round', msg: 'Well done! You successfully read this important alert message.' }
  ];

  $scope.addAlert = function() {
    $scope.alerts.push({msg: "Another alert!"});
  };

  $scope.closeAlert = function(index) {
    $scope.alerts.splice(index, 1);
  };

});




angular.module('foundationDemoApp').controller('DropdownCtrl', function($scope) {
  $scope.items = [
    "The first choice!",
    "And another choice for you.",
    "but wait! A third!"
  ];
  $scope.linkItems = {
    "Google": "http://google.com",
    "AltaVista": "http://altavista.com"
  };
});




angular.module('foundationDemoApp').controller('ModalDemoCtrl', function ($scope, $modal, $log) {

  $scope.items = ['item1', 'item2', 'item3'];

  $scope.open = function () {

    var modalInstance = $modal.open({
      templateUrl: 'myModalContent.html',
      controller: 'ModalInstanceCtrl',
      resolve: {
        items: function () {
          return $scope.items;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };
});

// Please note that $modalInstance represents a modal window (instance) dependency.
// It is not the same as the $modal service used above.

angular.module('foundationDemoApp').controller('ModalInstanceCtrl', function ($scope, $modalInstance, items) {

  $scope.items = items;
  $scope.selected = {
    item: $scope.items[0]
  };

  $scope.reposition = function () {
    $modalInstance.reposition();
  };

  $scope.ok = function () {
    $modalInstance.close($scope.selected.item);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
});




angular.module('foundationDemoApp').controller('OffCanvasDemoCtrl', function ($scope) {

});




angular.module('foundationDemoApp').controller('PaginationDemoCtrl', function ($scope) {
  $scope.totalItems = 64;
  $scope.currentPage = 4;
  $scope.maxSize = 5;
  
  $scope.setPage = function (pageNo) {
    $scope.currentPage = pageNo;
  };

  $scope.bigTotalItems = 175;
  $scope.bigCurrentPage = 1;
});



angular.module('foundationDemoApp').controller('PopoverDemoCtrl', function ($scope) {
  $scope.dynamicPopover = "Hello, World!";
  $scope.dynamicPopoverTitle = "Title";
});





angular.module('foundationDemoApp').controller('ProgressDemoCtrl', function ($scope) {
  
  $scope.max = 200;

  $scope.random = function() {
    var value = Math.floor((Math.random() * 100) + 1);
    var type;

    if (value < 25) {
      type = 'success';
    } else if (value < 50) {
      type = 'info';
    } else if (value < 75) {
      type = 'warning';
    } else {
      type = 'alert';
    }

    $scope.showWarning = (type === 'alert' || type === 'warning');

    $scope.dynamic = value;
    $scope.type = type;
  };
  $scope.random();
});



angular.module('foundationDemoApp').controller('RatingDemoCtrl', function ($scope) {
  $scope.rate = 7;
  $scope.max = 10;
  $scope.isReadonly = false;

  $scope.hoveringOver = function(value) {
    $scope.overStar = value;
    $scope.percent = 100 * (value / $scope.max);
  };

  $scope.ratingStates = [
    {stateOn: 'fa-check-circle', stateOff: 'fa-check-circle-o'},
    {stateOn: 'fa-star', stateOff: 'fa-start-o'},
    {stateOn: 'fa-heart', stateOff: 'fa-ban'},
    {stateOn: 'fa-heart'},
    {stateOff: 'fa-power-off'}
  ];
});


angular.module('foundationDemoApp').controller('TabsDemoCtrl', function ($scope) {
  $scope.tabs = [
    { title:"Dynamic Title 1", content:"Dynamic content 1" },
    { title:"Dynamic Title 2", content:"Dynamic content 2" }
  ];

  $scope.alertMe = function() {
    setTimeout(function() {
      alert("You've selected the alert tab!");
    });
  };
});



angular.module('foundationDemoApp').controller('TooltipDemoCtrl', function ($scope) {
  $scope.dynamicTooltip = "Hello, World!";
  $scope.dynamicTooltipText = "dynamic";
  $scope.htmlTooltip = "I've been made <b>bold</b>!";
});

//API
Stack()
Initializes a new empty Stack.

Stack#isEmpty()
Returns whether the stack is empty or not.

Stack#peek()
Peeks at the top element of the stack. Throws an Error when the stack is empty.

Stack#pop()
Pops the top element of the stack. Throws an Error when the stack is empty.

Stack#push(element)
Pushes the element at the top of the stack and returns its new size.

Stack#size()
Returns the size of the stack.

Testing
As component in the browser, open test/test.html in your browser: