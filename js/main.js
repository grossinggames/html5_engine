window.onload = function () {
    var tickEvent = new CustomEvent('tick');
    var intervalTick = setInterval(function () {
        tmr_global.dispatchEvent(tickEvent);
    }, TIME_UPDATE);

    ObjSet("spr_main_provider_uis", { name: "spr_main_provider_uis" });
    ObjSet("spr_main_provider_uis", { src: "uiscom.png" });
    ObjSet("spr_main_provider_uis", { pos_x: 100 });
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
        event_mdown:  function () {
            console.log('event_mdown');
        },
        event_mup:  function () {
            console.log('event_mup');
        },
        event_menter:  function () {
            console.log('event_menter');
        },
        event_mleave:  function () {
            console.log('event_mleave');
        }
    });
    ObjAnimate("spr_main_provider_uis", "pos_x", 1, 0, function () { console.log('Call Back!'); }, [0,0,100, 1,0,150, 2,0,100]);

    ObjSet("spr_main_provider_uis2", { src: "uiscom.png" });
    ObjSet("spr_main_provider_uis2", { pos_x: 200 });
    ObjSet("spr_main_provider_uis2", { pos_y: 100 });
    ObjSet("spr_main_provider_uis2", { pos_z: 2 });
    ObjSet("spr_main_provider_uis2", { width: 50 });
    ObjSet("spr_main_provider_uis2", { height: 39 });
    ObjSet("spr_main_provider_uis2", { scale_x: 1 });
    ObjSet("spr_main_provider_uis2", { scale_y: 1 });
    ObjSet("spr_main_provider_uis2", { input: 1 });
    ObjSet("spr_main_provider_uis2", { alp: 0.8 });
    ObjSet("spr_main_provider_uis2", { drawoff_x: 5 });
    ObjSet("spr_main_provider_uis2", { drawoff_y: 5 });
    ObjSet("spr_main_provider_uis2",
    {
        event_mdown:  function () {
            console.log('event_mdown');
        },
        event_mup:  function () {
            console.log('event_mup');
        },
        event_menter:  function () {
            console.log('event_menter');
        },
        event_mleave:  function () {
            console.log('event_mleave');
        }
    });
    ObjAnimate("spr_main_provider_uis2", "pos_y", 1, 0, function () { console.log('Call Back!'); }, [0,0,100, 1,0,150, 2,0,100]);

    ObjSet("spr_main_provider_uis3", { src: "uiscom.png" });
    ObjSet("spr_main_provider_uis3", { pos_x: 300 });
    ObjSet("spr_main_provider_uis3", { pos_y: 100 });
    ObjSet("spr_main_provider_uis3", { pos_z: 2 });
    ObjSet("spr_main_provider_uis3", { width: 50 });
    ObjSet("spr_main_provider_uis3", { height: 39 });
    ObjSet("spr_main_provider_uis3", { scale_x: 1 });
    ObjSet("spr_main_provider_uis3", { scale_y: 1 });
    ObjSet("spr_main_provider_uis3", { input: 1 });
    ObjSet("spr_main_provider_uis3", { alp: 0.8 });
    ObjSet("spr_main_provider_uis3", { drawoff_x: 5 });
    ObjSet("spr_main_provider_uis3", { drawoff_y: 5 });
    ObjSet("spr_main_provider_uis3",
    {
        event_mdown:  function () {
            console.log('event_mdown');
        },
        event_mup:  function () {
            console.log('event_mup');
        },
        event_menter:  function () {
            console.log('event_menter');
        },
        event_mleave:  function () {
            console.log('event_mleave');
        }
    });
    ObjAnimate("spr_main_provider_uis3", "pos_z", 1, 0, function () { console.log('Call Back!'); }, [0,0,1, 1,0,2, 2,0,1]);

    ObjSet("spr_main_provider_uis4", { src: "uiscom.png" });
    ObjSet("spr_main_provider_uis4", { pos_x: 400 });
    ObjSet("spr_main_provider_uis4", { pos_y: 100 });
    ObjSet("spr_main_provider_uis4", { pos_z: 2 });
    ObjSet("spr_main_provider_uis4", { width: 50 });
    ObjSet("spr_main_provider_uis4", { height: 39 });
    ObjSet("spr_main_provider_uis4", { scale_x: 1 });
    ObjSet("spr_main_provider_uis4", { scale_y: 1 });
    ObjSet("spr_main_provider_uis4", { input: 1 });
    ObjSet("spr_main_provider_uis4", { alp: 0.8 });
    ObjSet("spr_main_provider_uis4", { drawoff_x: 5 });
    ObjSet("spr_main_provider_uis4", { drawoff_y: 5 });
    ObjSet("spr_main_provider_uis4",
    {
        event_mdown:  function () {
            console.log('event_mdown');
        },
        event_mup:  function () {
            console.log('event_mup');
        },
        event_menter:  function () {
            console.log('event_menter');
        },
        event_mleave:  function () {
            console.log('event_mleave');
        }
    });
    ObjAnimate("spr_main_provider_uis4", "alp", 1, 0, function () { console.log('Call Back!'); }, [0,0,1, 1,0,0, 2,0,1]);

    ObjSet("spr_main_provider_uis5", { src: "uiscom.png" });
    ObjSet("spr_main_provider_uis5", { pos_x: 500 });
    ObjSet("spr_main_provider_uis5", { pos_y: 100 });
    ObjSet("spr_main_provider_uis5", { pos_z: 2 });
    ObjSet("spr_main_provider_uis5", { width: 50 });
    ObjSet("spr_main_provider_uis5", { height: 39 });
    ObjSet("spr_main_provider_uis5", { scale_x: 1 });
    ObjSet("spr_main_provider_uis5", { scale_y: 1 });
    ObjSet("spr_main_provider_uis5", { input: 1 });
    ObjSet("spr_main_provider_uis5", { alp: 0.8 });
    ObjSet("spr_main_provider_uis5", { drawoff_x: 5 });
    ObjSet("spr_main_provider_uis5", { drawoff_y: 5 });
    ObjSet("spr_main_provider_uis5",
    {
        event_mdown:  function () {
            console.log('event_mdown');
        },
        event_mup:  function () {
            console.log('event_mup');
        },
        event_menter:  function () {
            console.log('event_menter');
        },
        event_mleave:  function () {
            console.log('event_mleave');
        }
    });
    //ObjAnimate("spr_main_provider_uis5", "scale_x", 1, 0, function () { console.log('Call Back!'); }, [0,0,1, 1,0,0, 2,0,1]);

    ObjSet("spr_main_provider_uis6", { src: "uiscom.png" });
    ObjSet("spr_main_provider_uis6", { pos_x: 600 });
    ObjSet("spr_main_provider_uis6", { pos_y: 100 });
    ObjSet("spr_main_provider_uis6", { pos_z: 2 });
    ObjSet("spr_main_provider_uis6", { width: 50 });
    ObjSet("spr_main_provider_uis6", { height: 39 });
    ObjSet("spr_main_provider_uis6", { scale_x: 1 });
    ObjSet("spr_main_provider_uis6", { scale_y: 1 });
    ObjSet("spr_main_provider_uis6", { input: 1 });
    ObjSet("spr_main_provider_uis6", { alp: 0.8 });
    ObjSet("spr_main_provider_uis6", { drawoff_x: 5 });
    ObjSet("spr_main_provider_uis6", { drawoff_y: 5 });
    ObjSet("spr_main_provider_uis6",
    {
        event_mdown:  function () {
            console.log('event_mdown');
        },
        event_mup:  function () {
            console.log('event_mup');
        },
        event_menter:  function () {
            console.log('event_menter');
        },
        event_mleave:  function () {
            console.log('event_mleave');
        }
    });
    //ObjAnimate("spr_main_provider_uis6", "scale_y", 1, 0, function () { console.log('Call Back!'); }, [0,0,1, 1,0,0, 2,0,1]);

    ObjSet("spr_main_provider_uis7", { src: "uiscom.png" });
    ObjSet("spr_main_provider_uis7", { pos_x: 700 });
    ObjSet("spr_main_provider_uis7", { pos_y: 100 });
    ObjSet("spr_main_provider_uis7", { pos_z: 2 });
    ObjSet("spr_main_provider_uis7", { width: 50 });
    ObjSet("spr_main_provider_uis7", { height: 39 });
    ObjSet("spr_main_provider_uis7", { scale_x: 1 });
    ObjSet("spr_main_provider_uis7", { scale_y: 1 });
    ObjSet("spr_main_provider_uis7", { input: 1 });
    ObjSet("spr_main_provider_uis7", { alp: 0.8 });
    ObjSet("spr_main_provider_uis7", { drawoff_x: 5 });
    ObjSet("spr_main_provider_uis7", { drawoff_y: 5 });
    ObjSet("spr_main_provider_uis7",
    {
        event_mdown:  function () {
            console.log('event_mdown');
        },
        event_mup:  function () {
            console.log('event_mup');
        },
        event_menter:  function () {
            console.log('event_menter');
        },
        event_mleave:  function () {
            console.log('event_mleave');
        }
    });

    ObjAnimate("spr_main_provider_uis7", "drawoff_x", 1, 0, function () { console.log('Call Back!'); }, [0,0,0, 1,0,50, 2,0,0]);

    ObjSet("spr_main_provider_uis8", { src: "uiscom.png" });
    ObjSet("spr_main_provider_uis8", { pos_x: 800 });
    ObjSet("spr_main_provider_uis8", { pos_y: 100 });
    ObjSet("spr_main_provider_uis8", { pos_z: 2 });
    ObjSet("spr_main_provider_uis8", { width: 50 });
    ObjSet("spr_main_provider_uis8", { height: 39 });
    ObjSet("spr_main_provider_uis8", { scale_x: 1 });
    ObjSet("spr_main_provider_uis8", { scale_y: 1 });
    ObjSet("spr_main_provider_uis8", { input: 1 });
    ObjSet("spr_main_provider_uis8", { alp: 0.8 });
    ObjSet("spr_main_provider_uis8", { drawoff_x: 5 });
    ObjSet("spr_main_provider_uis8", { drawoff_y: 5 });
    ObjSet("spr_main_provider_uis8",
    {
        event_mdown:  function () {
            console.log('event_mdown');
        },
        event_mup:  function () {
            console.log('event_mup');
        },
        event_menter:  function () {
            console.log('event_menter');
        },
        event_mleave:  function () {
            console.log('event_mleave');
        }
    });
    ObjAnimate("spr_main_provider_uis8", "drawoff_y", 1, 0, function () { console.log('Call Back!'); }, [0,0,0, 1,0,50, 2,0,0]);

    ObjSet("spr_main_provider_uis9", { src: "uiscom.png" });
    ObjSet("spr_main_provider_uis9", { pos_x: 900 });
    ObjSet("spr_main_provider_uis9", { pos_y: 100 });
    ObjSet("spr_main_provider_uis9", { pos_z: 2 });
    ObjSet("spr_main_provider_uis9", { width: 50 });
    ObjSet("spr_main_provider_uis9", { height: 39 });
    ObjSet("spr_main_provider_uis9", { scale_x: 1 });
    ObjSet("spr_main_provider_uis9", { scale_y: 1 });
    ObjSet("spr_main_provider_uis9", { input: 1 });
    ObjSet("spr_main_provider_uis9", { alp: 0.8 });
    ObjSet("spr_main_provider_uis9", { drawoff_x: 5 });
    ObjSet("spr_main_provider_uis9", { drawoff_y: 5 });
    ObjSet("spr_main_provider_uis9",
    {
        event_mdown:  function () {
            console.log('event_mdown');
        },
        event_mup:  function () {
            console.log('event_mup');
        },
        event_menter:  function () {
            console.log('event_menter');
        },
        event_mleave:  function () {
            console.log('event_mleave');
        }
    });
    ObjAnimate("spr_main_provider_uis9", "width", 1, 0, function () { console.log('Call Back!'); }, [0,0,50, 1,0,150, 2,0,50]);

    ObjSet("spr_main_provider_uis10", { src: "uiscom.png" });
    ObjSet("spr_main_provider_uis10", { pos_x: 1000 });
    ObjSet("spr_main_provider_uis10", { pos_y: 100 });
    ObjSet("spr_main_provider_uis10", { pos_z: 2 });
    ObjSet("spr_main_provider_uis10", { width: 50 });
    ObjSet("spr_main_provider_uis10", { height: 39 });
    ObjSet("spr_main_provider_uis10", { scale_x: 1 });
    ObjSet("spr_main_provider_uis10", { scale_y: 1 });
    ObjSet("spr_main_provider_uis10", { input: 1 });
    ObjSet("spr_main_provider_uis10", { alp: 0.8 });
    ObjSet("spr_main_provider_uis10", { drawoff_x: 5 });
    ObjSet("spr_main_provider_uis10", { drawoff_y: 5 });
    ObjSet("spr_main_provider_uis10",
    {
        event_mdown:  function () {
            console.log('event_mdown');
        },
        event_mup:  function () {
            console.log('event_mup');
        },
        event_menter:  function () {
            console.log('event_menter');
        },
        event_mleave:  function () {
            console.log('event_mleave');
        }
    });
    ObjAnimate("spr_main_provider_uis10", "height", 1, 0, function () { console.log('Call Back!'); }, [0,0,50, 1,0,150, 2,0,50]);

    ObjSet("spr_main_provider_uis11", { src: "uiscom.png" });
    ObjSet("spr_main_provider_uis11", { pos_x: 1100 });
    ObjSet("spr_main_provider_uis11", { pos_y: 100 });
    ObjSet("spr_main_provider_uis11", { pos_z: 2 });
    ObjSet("spr_main_provider_uis11", { width: 50 });
    ObjSet("spr_main_provider_uis11", { height: 39 });
    ObjSet("spr_main_provider_uis11", { angle: 90 });
    ObjSet("spr_main_provider_uis11", { scale_x: 1 });
    ObjSet("spr_main_provider_uis11", { scale_y: 1 });
    ObjSet("spr_main_provider_uis11", { input: 1 });
    ObjSet("spr_main_provider_uis11", { alp: 0.8 });
    ObjSet("spr_main_provider_uis11", { drawoff_x: 5 });
    ObjSet("spr_main_provider_uis11", { drawoff_y: 5 });
    ObjSet("spr_main_provider_uis11",
    {
        event_mdown:  function () {
            console.log('event_mdown');
        },
        event_mup:  function () {
            console.log('event_mup');
        },
        event_menter:  function () {
            console.log('event_menter');
        },
        event_mleave:  function () {
            console.log('event_mleave');
        }
    });
    //ObjAnimate("spr_main_provider_uis11", "angle", 1, 0, function () { console.log('Call Back!'); }, [0,0,0, 1,0,90, 2,0,0]);
};