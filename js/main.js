window.onload = function () {
    var tickEvent = new CustomEvent("tick");
    var intervalTick = setInterval(function () {
        tmr_global.dispatchEvent(tickEvent);
    }, TIME_UPDATE);

    ObjSet("spr_main_provider_uis",
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
    ObjSet("spr_main_provider_uis2",
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
    ObjSet("spr_main_provider_uis3",
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
    ObjSet("spr_main_provider_uis4",
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
    ObjSet("spr_main_provider_uis5",
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
    ObjSet("spr_main_provider_uis6",
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
    ObjSet("spr_main_provider_uis7",
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
    ObjSet("spr_main_provider_uis8",
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
    ObjSet("spr_main_provider_uis9",
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
    ObjSet("spr_main_provider_uis10",
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
    ObjSet("spr_main_provider_uis11",
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
    ObjSet("spr_main_provider_uis12",
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
    SwitchRoom("room_example");
    SwitchRoom("room_main");
};