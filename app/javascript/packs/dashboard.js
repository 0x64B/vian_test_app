$(document).on('turbolinks:load', () => {

  console.log("LOAD OK")

  let mockData = {
    balance: 10000,
    receivable_balance: 5000
  }

  loadDashboard = () => {
    $(".box.balance h4").text(formatBRL(mockData.balance));
    $(".box.receivable_balance h4").text(formatBRL(mockData.receivable_balance));
  }

  formatBRL = (value) => {
    var result = value + '';
    result = result.replace(/([0-9]{2})$/g, ",$1");
    if (result.length > 6)
      result = result.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");

    return 'R$ ' + result;
  }

  loadDashboard();

});