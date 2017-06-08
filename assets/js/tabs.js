// Tab Counter - kun til at teste om tabId virker.
var tabId = 0;
$("#knap").click(function() {
 alert(tabId);
 tabId++;
});

// Run Tabslet
$('.tabs').tabslet();

// Tilføjer en event listener til + tabben
$('#add').click(function() {
  $('.tabs ul').prepend("<li><a href='#tab1'>Tab</a></li>");
  tabId++;
});
