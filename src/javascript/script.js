$(document).ready(function(){
    $('#mobile_btn').on('click', function(){
        $('#mobile_menu').toggleClass('active')
        $('#mobile_btn').find('i').toggleClass('fa-x')
    })

    const sections = $('section')
    const navItens = $('.list_item')

    $(window).on('scroll', function (){
        const header = $('header');
        const scrollPosition = $(window).scrollTop() - header.outerHeight();
        
        let activeSelectionIndex = 0

        if (scrollPosition <=0) {
            header.css('box-shadow', 'none')
        } else {
            header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1)')
        }

        sections.each(function(i) {
            const section = $(this);
            const sectionTop = section.offset().top - 96;
            const sectionBottom = sectionTop + section.outerHeight();

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSelectionIndex = i;
                return false;
            }
        })
        navItens.removeClass('active');
        $(navItens[activeSelectionIndex]).addClass('active');
    })

    ScrollReveal().reveal('#cta', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('#banner', {
        origin: 'right',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('#dishes', {
        origin: 'bottom',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('#feedback_chef', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('#assessment_content', {
        origin: 'right',
        duration: 2000,
        distance: '20%'
    });
})