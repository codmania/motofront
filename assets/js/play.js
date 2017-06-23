$(function() {
    racers = [
        {
            id: _.uniqueId(),
            racer_id: 1,
            name: 'Cooper Webb',
            class: '450',
            status: 'success',
            is_added: false
        },
        {
            id: _.uniqueId(),
            racer_id: 10,
            name: 'Cooper Webb',
            class: '450',
            status: 'success',
            is_added: false
        },
        {
            id: _.uniqueId(),
            racer_id: 20,
            name: 'Cooper Webb',
            class: '450',
            status: 'success',
            is_added: false
        },
        {
            id: _.uniqueId(),
            racer_id: 21,
            name: 'Cooper Webb',
            class: '450',
            status: 'success',
            is_added: false
        },
        {
            id: _.uniqueId(),
            racer_id: 22,
            name: 'Cooper Webb',
            class: '450',
            status: 'success',
            is_added: false
        },
        {
            id: _.uniqueId(),
            racer_id: 25,
            name: 'Cooper Webb',
            class: '450',
            status: 'success',
            is_added: false
        }
    ];

    $('body').on('click', '.btn-racer-action', function() {
        var idParser = /\d+/g;

        btnId = $(this).attr('id');

        try {
            racerId = btnId.match(idParser)[0];
        }
        catch(err) {
            console.log(err.message);
            return;
        }

        var selectedRacers = _.where(racers, {is_added: true});
        if(selectedRacers.length > 6)
            return;

        var selectedRacer = _.find(racers, function(r) { return r.racer_id == racerId; });
        selectedRacer.is_added = !selectedRacer.is_added;

        drawRacers();
        drawSelectedRacers();
    });

    function drawRacers() {
        var template = _.template($('#racer-template').html());
        var $list = $('.racer-table tbody');

        $list.html("");

        racers.forEach(function(racer) {
            $list.append(template({
                racer: racer
            }));
        });
    }

    function drawSelectedRacers() {
        var selectedRacers = _.where(racers, {is_added: true});
        var count = selectedRacers.length;

        var template = _.template($('#selected-racer-template').html());
        var $list = $(".select-racer-table tbody");

        var emptyTemplate = _.template($('#empty-racer-template').html());

        $list.html("");

        selectedRacers.forEach(function(racer) {
            $list.append(template({
                racer: racer
            }));
        });

        for (var i = 6; i > count; i--) {
            $list.append(emptyTemplate());
        }
    }

    drawRacers();
    drawSelectedRacers();

});

