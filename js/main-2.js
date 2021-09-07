$(document).ready(function() {
  var valueBubble;
  $('.slide-experience').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    nextArrow: '<img class="nextSlider nextSliderLeft" src="img/icons/arrow-right.svg">',
    prevArrow: '<img class="nextSlider nextSliderRight" src="img/icons/arrow-left.svg">'
  });
  return valueBubble = '<output class="rangeslider__value-bubble" />';
});

$('.range-experience').rangeslider({
  polyfill: false,
  rangeClass: 'rangeslider',
  disabledClass: 'rangeslider--disabled',
  horizontalClass: 'rangeslider--horizontal',
  fillClass: 'rangeslider__fill',
  handleClass: 'rangeslider__handle',
  onInit: function() {
    var $handle, $rangeEl, five, four, handleValue, one, three, two, valorres;
    $rangeEl = this.$range;
    $handle = $rangeEl.find('.rangeslider__handle');
    valorres = this.value;
    one = 'Enojado';
    two = 'Triste';
    three = 'Normal';
    four = 'Contento';
    five = 'Feliz';
    if (valorres === 1) {
      handleValue = '<div class="state-calification">' + one + '</div>';
      $handle.append(handleValue);
    } else if (valorres === 2) {
      handleValue = '<div class="state-calification">' + two + '</div>';
      $handle.append(handleValue);
    } else if (valorres === 3) {
      handleValue = '<div class="state-calification">' + three + '</div>';
      $handle.append(handleValue);
    } else if (valorres === 4) {
      handleValue = '<div class="state-calification">' + four + '</div>';
      $handle.append(handleValue);
    } else if (valorres === 5) {
      handleValue = '<div class="state-calification">' + five + '</div>';
      $handle.append(handleValue);
    }
  },
  onSlide: function(position, value) {
    var $handle, five, four, one, three, two, valorrres;
    valorrres = this.value;
    one = 'Enojado';
    two = 'Triste';
    three = 'Normal';
    four = 'Contento';
    five = 'Feliz';
    if (valorrres === 1) {
      $handle = this.$range.find('.state-calification');
      $handle.parent().parent().siblings().text(one);
      $handle.parent().parent().parent().children().attr('src', 'img/icons/enojado.svg');
    } else if (valorrres === 2) {
      $handle = this.$range.find('.state-calification');
      $handle.parent().parent().siblings().text(two);
      $handle.parent().parent().parent().children().attr('src', 'img/icons/triste.svg');
    } else if (valorrres === 3) {
      $handle = this.$range.find('.state-calification');
      $handle.parent().parent().siblings().text(three);
      $handle.parent().parent().parent().children().attr('src', 'img/icons/normal.svg');
    } else if (valorrres === 4) {
      $handle = this.$range.find('.state-calification');
      $handle.parent().parent().siblings().text(four);
      $handle.parent().parent().parent().children().attr('src', 'img/icons/contento.svg');
    } else if (valorrres === 5) {
      $handle = this.$range.find('.state-calification');
      $handle.parent().parent().siblings().text(five);
      $handle.parent().parent().parent().children().attr('src', 'img/icons/feliz.svg');
    }
  }
});
