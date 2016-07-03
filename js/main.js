window.onload = function () {
    SwitchRoom("room_main");

    var roomsTicks = [];

    for (var i = 0, len = rooms.length; i < len; i++) {
        roomsTicks[ rooms[i] ] = new CustomEvent(rooms[i]);
    };

    var intervalTick = setInterval(function () {
        tmr_global.dispatchEvent(roomsTicks[currentRoom]);
    }, TIME_UPDATE);

    /*
    ObjSet("spr_main_example", { src: "example.png" });
    ObjSet("spr_main_example", { pos_x: 0 });
    ObjSet("spr_main_example", { pos_y: 0 });
    ObjSet("spr_main_example", { pos_z: 0 });
    ObjSet("spr_main_example", { width: 50 });
    ObjSet("spr_main_example", { height: 50 });
    ObjSet("spr_main_example", { angle: 0 });
    ObjSet("spr_main_example", { scale_x: 1 });
    ObjSet("spr_main_example", { scale_y: 1 });
    ObjSet("spr_main_example", { input: 1 });
    ObjSet("spr_main_example", { alp: 1 });
    ObjSet("spr_main_example", { drawoff_x: 0 });
    ObjSet("spr_main_example", { drawoff_y: 0 });
    ObjSet("spr_main_example", { cursor: "pointer" });
    ObjSet("spr_main_example",
    {
        event_mdown:  function () {
            console.log("event_mdown");
        },
        event_mup:  function () {
            console.log("event_mup");
        },
        event_menter:  function () {
            console.log("event_menter");
        },
        event_mleave:  function () {
            console.log("event_mleave");
        }
    });
    ObjAnimate("spr_main_example", "angle", 0, 0, function () { console.log("Call Back!"); }, [0,0,0, 1,0,90, 2,0,0]);
    SwitchRoom("room_example");
    */

    ObjSet("spr_main_provider_uis13", { cursor: "pointer" });

    ObjSet("spr_main_provider_uis13", { popup: "Переход в другую комнату" });
    ObjSet("spr_main_provider_uis31", { popup: "Переход в другую комнату" });
 
    ObjSet("spr_main_provider_uis13",
    {
        event_mdown:  function () {
            //console.log("event_mdown");
        },
        event_mup:  function () {
            //console.log("event_mup");
            PlaySound("sounds/sfx_sound.mp3", 0);
            SwitchRoom("room_example");
        },
        event_menter:  function () {
            //console.log("event_menter");
        },
        event_mleave:  function () {
            //console.log("event_mleave");
        }
    });
    ObjSet("spr_main_provider_uis31",
    {
        event_mdown:  function () {
            //console.log("event_mdown");
        },
        event_mup:  function () {
            //console.log("event_mup");
            StopAllSounds();
            PlaySound("sounds/sfx_sound.mp3", 0);
            SwitchRoom("room_main");
        },
        event_menter:  function () {
            //console.log("event_menter");
        },
        event_mleave:  function () {
            //console.log("event_mleave");
        }
    });

    console.log( ObjGet("spr_main_provider_uis13") );

    ObjAnimate("spr_main_provider_uis", "pos_x", 1, 0, function () { console.log("Call Back!"); }, [0,0,0, 1,0,50, 2,0,0]);
    ObjAnimate("spr_main_provider_uis2", "pos_y", 1, 0, function () { console.log("Call Back!"); }, [0,0,100, 1,0,150, 2,0,100]);
    ObjAnimate("spr_main_provider_uis3", "pos_z", 1, 0, function () { console.log("Call Back!"); }, [0,0,1, 1,0,2, 2,0,1]);
    ObjAnimate("spr_main_provider_uis4", "alp", 1, 0, function () { console.log("Call Back!"); }, [0,0,1, 1,0,0, 2,0,1]);
    ObjAnimate("spr_main_provider_uis5", "scale_x", 1, 0, function () { console.log("Call Back!"); }, [0,0,1, 1,0,0, 2,0,1]);
    ObjAnimate("spr_main_provider_uis6", "scale_y", 1, 0, function () { console.log("Call Back!"); }, [0,0,1, 1,0,0, 2,0,1]);
    ObjAnimate("spr_main_provider_uis7", "drawoff_x", 1, 0, function () { console.log("Call Back!"); }, [0,0,0, 1,0,50, 2,0,0]);
    ObjAnimate("spr_main_provider_uis8", "drawoff_y", 1, 0, function () { console.log("Call Back!"); }, [0,0,0, 1,0,50, 2,0,0]);
    ObjAnimate("spr_main_provider_uis9", "width", 1, 0, function () { console.log("Call Back!"); }, [0,0,50, 1,0,150, 2,0,50]);
    ObjAnimate("spr_main_provider_uis10", "height", 1, 0, function () { console.log("Call Back!"); }, [0,0,50, 1,0,150, 2,0,50]);
    ObjAnimate("spr_main_provider_uis11", "angle", 1, 0, function () { console.log("Call Back!"); }, [0,0,0, 1,0,90, 2,0,0]);
};