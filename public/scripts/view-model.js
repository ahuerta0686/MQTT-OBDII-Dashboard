function ViewModel(torqueService) {
  var vm = this;
  torqueService.data.subscribe(function (data) {
    vm.data = data;
    vm.update();
  });
}

ViewModel.prototype.data = {};
ViewModel.prototype.update = function () {
  var vm = this;
  $('[vm-bind]').each(function (i, element) {
    // console.log($(element).attr('vm-bind'));
    var bindedData = $(element).attr('vm-bind').split(',')[0];
    var params = $(element).attr('vm-bind').split(',').splice(1);
    if (vm.data[bindedData]) {
      var textData = vm.data[bindedData];
      if (params.find(p => p === 'km2m')) {
      textData = vm._km2mData(textData);
      }

      if (params.find(p => p == 'round')) {
        textData = vm._roundData(textData);
      }

      $(element).text(textData);
    }
  });
};

ViewModel.prototype._roundData = function (data) {
  return String(Math.round(Number(data)));
}

ViewModel.prototype._km2mData = function (data) {
  return String(5/8 * Number(data));
}
