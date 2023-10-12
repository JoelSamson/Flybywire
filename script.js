function incrementValue() {
    var value = parseInt(document.getElementById('quantity').value, 10);
    value = isNaN(value) ? 0 : value;
    if (value < 100000) {
      value++;
      document.getElementById('quantity').value = value;
    }
    calculateTotal();
    calculateTotaltranprice();
  }
  function decrementValue() {
    var value = parseInt(document.getElementById('quantity').value, 10);
    value = isNaN(value) ? 0 : value;
    if (value > 0) {
      value--;
      document.getElementById('quantity').value = value;
    }
    calculateTotal();
    calculateTotaltranprice();
  }
  function openForm(ticker, cp) {
    document.getElementById("account").value = "123456";
    document.getElementById("ticker").value = String(ticker);
    document.getElementById("cp").value = cp;
    document.getElementById("tradeEntry").style.display = "block";
    calculateTotal();
    stocksowned();
    calculateTotaltranprice();
  }
  function closeForm() {
    document.getElementById("tradeEntry").style.display = "none";
  }
  function calculateTotal() {
    var qty = document.getElementById("quantity").value;
    var cp = document.getElementById("cp").value;
    var total = qty * cp;
    document.getElementById("total").value = total;
  }
  function stocksowned() {
    var tickerval = document.getElementById("ticker").value;

    if(tickerval=='2'){
    var x = document.getElementById("quantity");

      var currentVal =parseInt(x.value);
      document.getElementById("apst").value = currentVal;
      var defaultVal = currentVal;
      document.getElementById("stocks").value = currentVal;
      var qty =currentVal;
    var cp = document.getElementById("cp").value;
    var total = qty * cp;
    document.getElementById("inv").value = total;
    
    
  }
  if(tickerval=='1'){
    var x = document.getElementById("quantity");
  
    
    
      var currentVal = parseInt(x.value);
      document.getElementById("msst").value = currentVal;
      var defaultVal = currentVal;
      document.getElementById("stocks").value = currentVal;
      var qty =currentVal;
    var cp = document.getElementById("cp").value;
    var total = qty * cp;
    document.getElementById("inv").value = total;
    
  }
  if(tickerval=='3'){
    var x = document.getElementById("quantity");
    
      var currentVal = parseInt(x.value);
      document.getElementById("head").value = currentVal;
      var defaultVal = currentVal;
      document.getElementById("stocks").value = currentVal;
      var qty =currentVal;
    var cp = document.getElementById("cp").value;
    var total = qty * cp;
    document.getElementById("inv").value = total;
    
  }
  if(tickerval=='4'){
    var x = document.getElementById("quantity");
    
    

      var currentVal = parseInt(x.value);
      document.getElementById("watch").value = currentVal;
      var defaultVal = currentVal;
      document.getElementById("stocks").value = currentVal;
      var qty =currentVal;
    var cp = document.getElementById("cp").value;
    var total = qty * cp;
    document.getElementById("inv").value = total;
    
  }
  if(tickerval=='5'){
    var x = document.getElementById("quantity");
    
    
    
  
      var currentVal =parseInt(x.value);
      document.getElementById("tv").value = currentVal;
      var defaultVal = currentVal;
      document.getElementById("stocks").value = currentVal;
      var qty =currentVal;
    var cp = document.getElementById("cp").value;
    var total = qty * cp;
    document.getElementById("inv").value = total;
    
    
  }
  totaltranprice();
  }
  function parameters(){

  var laptopQuantity = document.getElementById("msst").value;
  var laptopPrice = 1000;

  var phoneQuantity = document.getElementById("apst").value;
  var phonePrice = 500;

  var headphonesQuantity = document.getElementById("head").value;
  var headphonesPrice = 100;

  var watchQuantity = document.getElementById("watch").value;
  var watchPrice = 300;

  var tvQuantity = document.getElementById("tv").value;
  var tvPrice = 2000;
  const data = totaltranprice(laptopQuantity,laptopPrice,phoneQuantity,phonePrice,headphonesQuantity,headphonesPrice,watchQuantity,watchPrice,tvQuantity,tvPrice);

  const total = data.total;
  const items = data.items;
  
  document.getElementById("tt").value = parseInt(total);
  document.getElementById("items").value = items;
  }

  function totaltranprice(laptopQuantity,laptopPrice,phoneQuantity,phonePrice,headphonesQuantity,headphonesPrice,watchQuantity, watchPrice,tvQuantity,tvPrice) {
  var total = 0;
  var items=0;

  total += laptopQuantity * laptopPrice;
  items += laptopQuantity*1;

  total += phoneQuantity * phonePrice;
  items += phoneQuantity*1;

  total += headphonesQuantity * headphonesPrice;
  items += headphonesQuantity*1;

  total += watchQuantity * watchPrice;
  items += watchQuantity*1;

  total += tvQuantity * tvPrice;
  items += tvQuantity*1;

  return {total: total, items: items}

}

function trandone(){
  const requiredFields = document.querySelectorAll('input[required]');
  let allFieldsFilled = true;
  
  requiredFields.forEach((field) => {
    if (field.value.trim() === '') {
      allFieldsFilled = false;
    }
  });
  
  if (allFieldsFilled) {
    alert('Items Purchased Successfully!');
    closeForm(); 
  } else {
    alert('Please fill in all required fields!');
  }
       
      }