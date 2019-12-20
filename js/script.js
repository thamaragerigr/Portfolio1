
  $(function() {
    $('.chart').easyPieChart({
      scaleColor: false,
      lineWidth: 10,
      lineCap: 'round',
      barColor: '#333',
      size: 150,
      animate: 500
    });
  });


  // When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

function myFunction() {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

