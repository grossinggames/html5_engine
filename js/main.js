window.onload = function () {

    //ObjSet("spr_main_provider_uis", { name: "spr_main_provider_uis" });
    ObjSet("spr_main_provider_uis", { src: "uiscom.png" });
    ObjSet("spr_main_provider_uis", { pos_x: 200 });
    ObjSet("spr_main_provider_uis", { pos_y: 100 });
    ObjSet("spr_main_provider_uis", { pos_z: 2 });
    ObjSet("spr_main_provider_uis", { width: 50 });
    ObjSet("spr_main_provider_uis", { height: 39 });
    ObjSet("spr_main_provider_uis", { scale_x: 1 });
    ObjSet("spr_main_provider_uis", { scale_y: 1 });
    ObjSet("spr_main_provider_uis", { input: 1 });
    ObjSet("spr_main_provider_uis", { alp: 0.8 });
    ObjSet("spr_main_provider_uis", { drawoff_x: 5 });
    ObjSet("spr_main_provider_uis", { drawoff_y: 5 });

    ObjSet("spr_main_provider_uis",
    {
        event_mdown:  function() {
            console.log('event_mdown');
        },
        event_mup:  function() {
            console.log('event_mup');
        },
        event_menter:  function() {
            console.log('event_menter');
        },
        event_mleave:  function() {
            console.log('event_mleave');
        }
    });

    //ObjAnimate("spr_main_provider_uis", "alp", 0, 0, "", [ 0,0,1, 1,0,0 ]);

    /* Для создания тика браузера
    timer_global.addEventListener('tick', function (event) {
        console.log('name = ' + event.detail.name);
    }, false);

    function tick2(event) {
        console.log('name2 = ' + event.detail.name);
    }

    timer_global.addEventListener('tick', tick2);

    timer_global.removeEventListener('tick', tick2);

    var tick = new CustomEvent('tick', {
        detail: { name: 'Вася' }
    });

    timer_global.dispatchEvent(tick);
    */
};