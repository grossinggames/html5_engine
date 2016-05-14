window.onload = function () {
    //console.log('main is load');

    ObjSet("spr_main_provider_uis", { name: "spr_main_provider_uis" });
    ObjSet("spr_main_provider_uis", { pos_x: 100 });
    ObjSet("spr_main_provider_uis", { pos_y: 50 });
    ObjSet("spr_main_provider_uis", { pos_z: 50 });
    ObjSet("spr_main_provider_uis", { alp: 0.5 });
    ObjSet("spr_main_provider_uis", { scale_x: 1 });
	ObjSet("spr_main_provider_uis", { scale_y: 1 });
    ObjSet("spr_main_provider_uis", { input: 1 });

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
};