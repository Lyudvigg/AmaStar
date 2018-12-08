$(document).ready(function () {
    /*=============Header-nav=============*/
    $('.responsive_menu_toggle').click(function () {
        $(".logo .header_menu").css({ "height": '100%', 'padding': '20px' });
    });

    $('.close_nav').click(function () {
        $(".logo .header_menu").css({ "height": '0', 'padding': '0px' });
    });

    $('.countdown').downCount({
        /*month/day/years*/
        date: '11/25/2020 24:00:00',
        offset: +3
    }, function () {
        alert('Время уже заполнено!');
    });
})


/*=============roadmap_slider=============*/

$('.roadmap_slider').slick({
    centerMode: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                arrows: true,
                centerMode: true,
                slidesToShow: 3
            }
        },
        {
            breakpoint: 576,
            settings: {
                arrows: false,
                centerMode: true,
                slidesToShow: 1
            }
        }
    ]
});

/*==========About-Amastar===========*/

// / for documents collaps
$(function () {
    var Accordion = function (el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;

        // Variables privadas
        var links = this.el.find('.link');
        // Evento
        links.on('click', { el: this.el, multiple: this.multiple }, this.dropdown)
    }

    Accordion.prototype.dropdown = function (e) {
        var $el = e.data.el;
        $this = $(this),
            $next = $this.next();

        $next.slideToggle();
        $this.parent().toggleClass('open');

        if (!e.data.multiple) {
            $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
        };
    }

    var accordion = new Accordion($('.accordion'), false);
});

/*======================about_amastar_menu_block=====================*/

$(function selectActive(event) {
    $(".about_amastar_menu_block button").click(function (event) {
        event.preventDefault();
        $(".about_amastar_menu_block button.active_menu").removeClass("active_menu");
        $(this).addClass("active_menu");
        var our_courses_ul_menu_data = $(this).data('value');
        $(".colapse-ipotek.colapse-ipotek_active").removeClass('colapse-ipotek_active')
        $(".colapse-ipotek:nth-child(" + our_courses_ul_menu_data + ")").addClass('colapse-ipotek_active');
    });
});




/*=========Modal========*/
// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementsByClassName('modal-ipotek');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
for (var i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', function () {
        modal.style.display = "block";
    })
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {

    modal.style.display = 'none';

}

$('.popup_close').on('click', function () {
    modal.style.display = 'none';

})

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


/*=========Modal========*/
// Get the modal
var modal1 = document.getElementById('myModal1');

// Get the button that opens the modal
var btn = document.getElementsByClassName('modal-ipotek1');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
for (var i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', function () {
        modal1.style.display = "block";
    })
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {

    modal1.style.display = 'none';

}

$('.popup_close').on('click', function () {
    modal1.style.display = 'none';

})

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
}

/*=================wow============*/
new WOW().init();

/*============================canvas===========================*/

window.onload = function () {
    var ctx = document.getElementById("chart-area").getContext("2d");
    var ctx2 = document.getElementById("second_chart").getContext("2d");

    var myDoughnut = new Chart(ctx).Doughnut(doughnutData, {
        responsive: true,
        animationEasing: "easeOutQuart",
    });
    var myDoughnut2 = new Chart(ctx2).Doughnut(doughnutData2, {
        responsive: true,
        animationEasing: "easeOutQuart",
    });
};

var doughnutData = [
    {
        value: 55,
        color: "#FF740B",
        label: "Operations",
    },
    {
        value: 20,
        color: "#C6BB0D",
        label: "Operations"
    },
    {
        value: 10,
        color: "#A27C54",
        label: "Operations",
    },
    {
        value: 9,
        color: "#3F6A62",
        label: "Operations",
    },
    {
        value: 6,
        color: "#60320C",
        label: "Operations",
    }
]

var doughnutData2 = [
    {
        value: 40,
        color: "#FE910F",
        label: "Operations"
    },
    {
        value: 30,
        color: "#CFBF0F",
        label: "Operations"
    },
    {
        value: 25,
        color: "#A47E54",
        label: "Operations"
    },
    {
        value: 5,
        color: "#60320C",
        label: "Operations"
    }
]
