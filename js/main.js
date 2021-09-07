var closeNav, openNav, toMoney, status=1;

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0
});
var getStatusValue = value => {
  return 1 - value / 13500000;
};

var updateValues = value => {
  const plantados = Math.floor(value / 27000),
    co2 = 0.002 * plantados,
    ingresos = 97200 * plantados;
  $("#plantados>i").html(plantados);
  $("#co2>i").html(co2 % 1 == 0 ? co2 : co2.toFixed(3));
  $("#ingresos>i").html(ingresos == 0 ? "$0" : formatter.format(ingresos));
};

openNav = function() {
  document.getElementById("mySidenav").style.left = "0";
  $(".mask-menu").toggleClass("d-none");
};

closeNav = function() {
  document.getElementById("mySidenav").style.left = "-500px";
  $(".mask-menu").toggleClass("d-none");
};

$(".mask-menu").click(function() {
  closeNav();
});

$(document).ready(function() {
  var toMoney, updateValueBubbleMoney, updateValueBubbleValor, valueBubble;
  $(".slider-rate").slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    nextArrow:
      '<img class="nextSlider nextSliderLeft" src="img/icons/arrow-right.svg">',
    prevArrow:
      '<img class="nextSlider nextSliderRight" src="img/icons/arrow-left.svg">'
  });
  $(".slider-financial").slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    centerMode: true,
    adaptiveHeight: true,
    nextArrow:
      '<img class="nextSlider nextSliderLeft" src="img/icons/arrow-right.svg">',
    prevArrow:
      '<img class="nextSlider nextSliderRight" src="img/icons/arrow-left.svg">'
  });
  $(".scroll").click(function() {
    $(".containerDate").animate(
      {
        scrollTop: 970
      },
      700
    );
    return false;
  });
  toMoney = function(str, currency_sign) {
    var current, formatted, wDecimals;
    currency_sign = currency_sign || "$";
    current = Number(str.toString().replace(/[^0-9.]/g, ""));
    formatted = current.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
    wDecimals = formatted.split(".");
    wDecimals = wDecimals[0].replace(",", ".");
    return currency_sign + wDecimals;
  };
  valueBubble = '<output class="rangeslider__value-bubble" />';
  updateValueBubbleMoney = function(pos, value, context) {
    var $valueBubble, position, tempPosition;
    pos = pos || context.position;
    value = value || context.value;
    $valueBubble = $(".rangeslider__value-bubble", context.$range);
    tempPosition = pos + context.grabPos;
    position =
      tempPosition <= context.handleDimension
        ? context.handleDimension
        : tempPosition >= context.maxHandlePos
        ? context.maxHandlePos
        : tempPosition;
    if ($valueBubble.length) {
      $valueBubble[0].innerHTML = toMoney(value, "$");
    }
  };
  $(".range-money").rangeslider({
    polyfill: false,
    onInit: function() {
      this.$range.append($(valueBubble));
      updateValueBubbleMoney(null, null, this);
      $("#close").trigger("click");
    },
    onSlide: function(pos, value) {
      updateValueBubbleMoney(pos, value, this);
      status = getStatusValue(value);
      updateValues(value);
      $("#close").trigger("click");
    }
  });
  valueBubble =
    '<output class="rangeslider__value-bubble rangeslider__value-bubbleValor" />';
  updateValueBubbleValor = function(pos, value, context) {
    var $valueBubble, position, tempPosition;
    pos = pos || context.position;
    value = value || context.value;
    $valueBubble = $(".rangeslider__value-bubbleValor", context.$range);
    tempPosition = pos + context.grabPos;
    position =
      tempPosition <= context.handleDimension
        ? context.handleDimension
        : tempPosition >= context.maxHandlePos
        ? context.maxHandlePos
        : tempPosition;
    if ($valueBubble.length) {
      $valueBubble[0].innerHTML = "Valor: " + toMoney(value, "$");
    }
  };
  $(".range-valor").rangeslider({
    polyfill: false,
    onInit: function() {
      this.$range.append($(valueBubble));
      updateValueBubbleValor(null, null, this);
    },
    onSlide: function(pos, value) {
      updateValueBubbleValor(pos, value, this);
    }
  });
  $(function() {
    $('[data-toggle="popover"]').popover();
  });
  $("#popoverClose").popover({
    placement: "top",
    html: true,
    content:
      '<span class="">Deslízame&nbsp;&nbsp;</span>' +
      '<button type="button" id="close" class="close">&times;</button>'
  });
  $(document).on("click", ".popover .close", function() {
    $(this)
      .parents(".popover")
      .popover("hide");
  });
  $("#popoverClose").popover("show");
  $('[data-toggle="datepicker"]').datepicker({
    language: "es-ES",
    inline: true,
    startView: 2,
    container: $(".datepicker")
  });
  $(
    'input[type="text"], input[type="number"], input[type="textarea"], input[type="email"], input[type="textbox"]'
  ).focus(function() {
    $(".simulator-pymes, .simulator, .rate").css("padding-bottom", "350px");
    setTimeout(function() {
      $(".containerDate, .simulator-pymes, .simulator, .rate").animate(
        {
          scrollTop: 350
        },
        800
      );
    }, 100);
  });
  $(
    'input[type="text"], input[type="number"], input[type="textarea"], input[type="email"], input[type="textbox"]'
  ).blur(function() {
    $(".simulator-pymes, .simulator, .rate").css("padding-bottom", "0px");
  });
  return $("select[name=document]").change(function() {
    var $typeDocument;
    $typeDocument = $("select[name=document]").val();
    if ($typeDocument === "cc") {
      $(".document").prop("type", "number");
    } else if ($typeDocument === "ce") {
      $(".document").prop("type", "number");
    } else if ($typeDocument === "nit") {
      $(".document").prop("type", "text");
    } else if ($typeDocument === "nit") {
      $(".document").prop("type", "text");
    }
    $("input[name=document]").val($(this).val());
  });
});

$("a.container-white").click(function() {
  $(".container-white").removeClass("active");
  $(this).addClass("active");
});

(function($) {
  $.fn.waterwave = function(options) {
    var settings, waterwave;
    settings = $.extend(
      {
        parent: "",
        color: "#fcd600",
        direction: "up",
        background: ""
      },
      options
    );
    waterwave = this;
    waterwave.init = function() {
      var TAU,
        c,
        ctx,
        density,
        drawBG,
        drawWave,
        inc,
        infinite,
        onResize,
        outerScale,
        res,
        speed;
      TAU = Math.PI * 1;
      density = 2.3;
      speed = 1.5;
      res = 0.005;
      outerScale = 0.05 / density;
      inc = 0;
      c = waterwave[0];
      ctx = c.getContext("2d");
      onResize = function() {
        if (options.direction === "down") {
          waterwave.attr({
            width: $(parent).width() + "px"
          });
        } else {
          waterwave.attr({
            width: "350px",
            height: "350px"
          });
        }
      };
      infinite = function() {
        inc -= speed;
        drawWave(options.color);
        requestAnimationFrame(infinite);
      };
      drawBG = function(patternCanvas, w, h) {
        var space;
        space = ctx.createPattern(patternCanvas, "repeat");
        ctx.fillStyle = space;
        ctx.fillRect(0, 0, w, h);
      };
      drawWave = function(color) {
        var _x, _y, cx, cy, endi, h, i, segmentWidth, w;
        w = c.offsetWidth;
        h = c.offsetHeight;
        cx = w * 0.5;
        cy = h * status;
        ctx.clearRect(0, 0, w, h);
        segmentWidth = w * res;
        if (options.background !== "") {
          ctx.fillStyle = "#a5d2f194";
        }
        ctx.beginPath();
        ctx.moveTo(0, cy);
        i = 0;
        endi = 1 / res;
        while (i <= endi) {
          _y =
            cy +
            Math.sin((i + inc) * TAU * res * density) *
              cy *
              Math.sin(i * TAU * res * density * outerScale);
          _x = i * segmentWidth;
          ctx.lineTo(_x, _y);
          i++;
        }
        if (options.direction === "down") {
          ctx.lineTo(w, 0);
          ctx.lineTo(0, 0);
        } else {
          ctx.lineTo(w, h);
          ctx.lineTo(0, h);
        }
        ctx.closePath();
        ctx.fill();
      };
      onResize();
      setTimeout(function() {
        infinite();
      }, 500);
      $(window).resize(onResize);
    };
    waterwave.init();
    return waterwave;
  };
})(jQuery);

$("input:checkbox").on("click", function() {
  if ($(this).is(":checked")) {
    $(".check").prop("checked", false);
    $(".check")
      .parent()
      .parent()
      .parent()
      .removeClass("active");
    $(this).prop("checked", true);
    $(this)
      .parent()
      .parent()
      .parent()
      .addClass("active");
  } else {
    $(this)
      .parent()
      .parent()
      .parent()
      .removeClass("active");
  }
});

$(".select-rate .children p").on("click", function() {
  $(".select-rate .children p").removeClass("active");
  return $(this).addClass("active");
});

$(".select-rate .parent").click(function() {
  $(".children").slideToggle("fast");
});

$(".time-meses").rangeslider({
  polyfill: false,
  rangeClass: "rangeslider",
  disabledClass: "rangeslider--disabled",
  horizontalClass: "rangeslider--horizontal",
  fillClass: "rangeslider__fill",
  handleClass: "rangeslider__handle",
  onInit: function() {
    var $handle, $rangeEl, handleValue;
    $rangeEl = this.$range;
    $handle = $rangeEl.find(".rangeslider__handle");
    handleValue =
      '<div class="rangeslider__handle__value">' +
      "Tiempo: " +
      this.value +
      " meses" +
      "</div>";
    $handle.append(handleValue);
  },
  onSlide: function(position, value) {
    var $handle;
    $handle = this.$range.find(".rangeslider__handle__value");
    $handle.text("Tiempo: " + this.value + " meses");
  }
});

$(".time-anios").rangeslider({
  polyfill: false,
  rangeClass: "rangeslider",
  disabledClass: "rangeslider--disabled",
  horizontalClass: "rangeslider--horizontal",
  fillClass: "rangeslider__fill",
  handleClass: "rangeslider__handle",
  onInit: function() {
    var $handle, $rangeEl, handleValue;
    $rangeEl = this.$range;
    $handle = $rangeEl.find(".rangeslider__handle");
    handleValue =
      '<div class="rangeslider__handle__value">' +
      "Tiempo: " +
      this.value +
      " años" +
      "</div>";
    $handle.append(handleValue);
  },
  onSlide: function(position, value) {
    var $handle;
    $handle = this.$range.find(".rangeslider__handle__value");
    $handle.text("Tiempo: " + this.value + " años");
  }
});

toMoney = function(str, currency_sign) {
  var current, formatted, wDecimals;
  currency_sign = currency_sign || "$";
  current = Number(str.toString().replace(/[^0-9.]/g, ""));
  formatted = current.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
  wDecimals = formatted.split(".");
  wDecimals = wDecimals[0].replace(",", ".");
  return currency_sign + wDecimals;
};

$(".valor").rangeslider({
  polyfill: false,
  rangeClass: "rangeslider",
  disabledClass: "rangeslider--disabled",
  horizontalClass: "rangeslider--horizontal",
  fillClass: "rangeslider__fill",
  handleClass: "rangeslider__handle",
  onInit: function() {
    var $handle, $rangeEl, handleValue, valorres;
    $rangeEl = this.$range;
    $handle = $rangeEl.find(".rangeslider__handle");
    valorres = this.value;
    handleValue =
      '<div class="rangeslider__handle__value">' +
      "Valor: " +
      toMoney(this.value, "$") +
      "</div>";
    $handle.append(handleValue);
  },
  onSlide: function(position, value) {
    var $handle;
    $handle = this.$range.find(".rangeslider__handle__value");
    $handle.text("Valor: " + toMoney(this.value, "$"));
  }
});

$(".integer").rangeslider({
  polyfill: false,
  rangeClass: "rangeslider",
  disabledClass: "rangeslider--disabled",
  horizontalClass: "rangeslider--horizontal",
  fillClass: "rangeslider__fill",
  handleClass: "rangeslider__handle",
  onInit: function() {
    var $handle, $rangeEl, handleValue, valorres;
    $rangeEl = this.$range;
    $handle = $rangeEl.find(".rangeslider__handle");
    valorres = this.value;
    handleValue =
      '<div class="rangeslider__handle__value">' + this.value + "</div>";
    $handle.append(handleValue);
  },
  onSlide: function(position, value) {
    var $handle;
    $handle = this.$range.find(".rangeslider__handle__value");
    $handle.text(this.value);
  }
});

$(function() {
  $(document).bind("contextmenu", function(e) {
    return false;
  });
});

$('input[type="textbox"]').blur(function() {
  $(this).formatCurrency();
});



