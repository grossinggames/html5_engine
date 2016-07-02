//console.log("common is load");

/* ******************** Комнаты ******************** */
var rooms = ["room_example", "room_main"];
var currentRoom = "";

// Перейти в комнату
function SwitchRoom(room) {
    for (var i = 0, len = rooms.length; i < len; i++) {
        ObjSet(rooms[i], { active: 0 });
    };
    ObjSet(room, { active: 1 });
    currentRoom = room;
}

// Получить текущую комнату
function GetCurrentRoom() {
    console.log("GetCurrentRoom");
    return currentRoom;
}

/* ******************** Звуки ******************** */

var sounds = [];
sounds['sfx'] = [];
sounds['env'] = [];
sounds['snd'] = [];
sounds['voc'] = [];

// Воспроизвести звук
function PlaySound(path, loop) {
    var type = path.substr(7, 3);

    switch (type) {
        case "sfx":
            PlaySfx(path, loop);
            break;
        case "env":
            PlayEnv(path, loop);
            break;
        case "snd":
            PlaySoundtrack(path, loop);
            break;
        case "voc":
            PlayVoice(path, loop);
            break;
    }
}

// Воспроизвести мелкие звуки
function PlaySfx(path, loop) {
    console.log("PlaySfx");
    sounds['sfx'][path] = sounds['sfx'][path] || new Audio(path);
    sounds['sfx'][path].currentTime = 0;
    sounds['sfx'][path].play();
}

// Воспроизвести окружение
function PlayEnv(path, loop) {
    console.log("PlayEnv");
    sounds['env'][path] = sounds['env'][path] || new Audio(path);
    sounds['env'][path].currentTime = 0;
    sounds['env'][path].play();
}

// Воспроизвести саундрек
function PlaySoundtrack(path, loop) {
    console.log("PlaySoundtrack");
    sounds['snd'][path] = sounds['snd'][path] || new Audio(path);
    sounds['snd'][path].currentTime = 0;
    sounds['snd'][path].play();
}

// Воспроизвести Голос
function PlayVoice(path, loop) {
    console.log("PlayVoice");
    sounds['voc'][path] = sounds['voc'][path] || new Audio(path);
    sounds['voc'][path].currentTime = 0;
    sounds['voc'][path].play();
}

function StopSound(path) {
    //sounds['voc'][path].currentTime = 0;
}


/* ******************** Настройки ******************** */

// Установить полноэкранный режим
function SetFullScreen(fs) {
    console.log("SetFullScreen");
}

// Получить режим экрана
function GetFullScreen() {
    console.log("GetFullScreen");
}

// Установить курсор
function SetCursor(id) {
    console.log("SetCursor");
}

/* ******************** Объекты ******************** */

var properties = {
    name:           "id",
    pos_x:          "left",
    pos_y:          "top",
    pos_z:          "z-index",
    alp:            "opacity",
    angle:          "rotate",
    scale_x:        "scaleX",
    scale_y:        "scaleY",
    input:          "pointer-events",
    active:         "display",
    drawoff_x:      "background-position-x",
    drawoff_y:      "background-position-y",
    event_mdown:    "onmousedown",
    event_mup:      "onmouseup",
    event_menter:   "onmouseover",
    event_mleave:   "onmouseout",
    width:          "width",
    height:         "height",
    src:            "background-image",
    popup:          "title"
};

// Установка параметров объекту
function ObjSet(objname, params) {
    //console.log("ObjSet");
    var obj = document.getElementById(objname);

    for (var key in params) {
        //console.log("key = ", key);
        //console.log("properties[key] = ", properties[key]);

        var value = params[key];
        obj[key] = value;

        switch (key) {
            case "name":
                obj.id = value;
                break;
            case "popup":
                obj.title = value;
                break;
            case "pos_x":
            case "pos_y":
                obj.style[ properties[key] ] = value + "px";
                break;
            case "pos_z":
                obj.style[ properties[key] ] = Math.round(value);
                break;
            case "angle":
                obj.style.transform = obj.style.transform.replace(/rotate\(\w+(.\w+)?\)/g, "rotate(" + value + "deg)");
                break;
            case "scale_x":
                obj.style.transform = obj.style.transform.replace(/scaleX\(\w+(.\w+)?\)/g, "scaleX(" + value + ")");
                break;
            case "scale_y":
                obj.style.transform = obj.style.transform.replace(/scaleY\(\w+(.\w+)?\)/g, "scaleY(" + value + ")");
                break;
            case "input":
                if (value) {
                    obj.style[ properties[key] ] = "auto";
                } else {
                    obj.style[ properties[key] ] = "none";
                }
                break;
            case "active":
                if (value) {
                    obj.style[ properties[key] ] = "block";
                } else {
                    obj.style[ properties[key] ] = "none";
                }
                break;
            case "event_mdown":
            case "event_mup":
            case "event_menter":
            case "event_mleave":
                obj[ properties[key] ] = value;
                break;
            case "drawoff_x":
            case "drawoff_y":
                obj.style[ properties[key] ] = value + "px";
                break;
            case "width":
            case "height":
                obj.style[ properties[key] ] = value + "px";
                break;
            case "src":
                obj.style[ properties[key] ] = "url(images/" + value + ")";
                break;
            case "alp":
                if (value == true) value = 1;
                if (value == false) value = 0;
                obj.style[ properties[key] ] = value;
                break;
            default:
                //console.log("default properties[key] = " + properties[key]);
                obj.style[ properties[key] ] = value;
                break;
        }
    }
}

// Получение параметров объекта
function ObjGet(objname) {
    console.log("ObjGet");
    //console.log("111 ", document.getElementById("spr_main_provider_uis").style.left);
    //console.log("222 ", document.getElementById("spr_main_provider_uis").style.top);
}

// Прицепить объект к родителю
function ObjAttach(objname, toobjname) {
    console.log("ObjAttach");
}

// Отцепить объект
function ObjDetach(objname) {
    console.log("ObjDetach");
}

// Удалить объект
function ObjDelete(objname) {
    console.log("ObjDelete");
}

// Время обновления параметров
var TIME_UPDATE = 20;

var anims = [];

// Анимирование объекта
function ObjAnimate(obj, type, loop, relative, cb, anm) {
    if (anm.length % 3 == 0) {
        var arrayAnim = [];

        // Создание массива из элементов [время, значение]
        // Добавить учет второго параметра [0,0,100, 1,0,200] - ускорения, замедления, линейно
        for (var i = 0; i < anm.length; i += 3) {
            var tmp = [ anm[ i ], anm[ i + 2 ] ];
            //console.log(tmp);
            arrayAnim.push(tmp);
        }

        // Создание массива из таких элементов [время, значение, шаг]
        for (var i = 0; i < arrayAnim.length; i++) {
            var step = 0;

            if (i) {
                var diffTime = (arrayAnim[ i ][ 0 ] - arrayAnim[ i - 1 ][ 0 ]);
                var diffValue = (arrayAnim[ i ][ 1 ] - arrayAnim[ i - 1 ][ 1 ]);

                var counter = Math.floor( (diffTime * 1000) / TIME_UPDATE);
                step = (diffValue / counter).toFixed(2);
            }

            arrayAnim[ i ].push(step);
        }

        var way = [ arrayAnim[ 0 ][ 1 ] ];

        // Создание пути
        for (var i = 0; i + 1 < arrayAnim.length; i++) {
            var step = Number(arrayAnim[ i + 1 ][ 2 ]);
            var stepWay = arrayAnim[ i ][ 1 ];
            var needWay = arrayAnim[ i + 1 ][ 1 ];

            while (stepWay != needWay) {
                stepWay = ( Number(stepWay) + step ).toFixed(2);

                if (step > 0) {
                    if (stepWay > needWay) {
                        stepWay = needWay;
                    }
                } else if (step < 0) {
                    if (stepWay < needWay) {
                        stepWay = needWay;
                    }
                } else {
                    console.log("Ошибка Шаг равен нулю");
                }
                way.push(stepWay);
            }
        }

        //console.log(way);

        var cursor = 0;
        var len = way.length;

        function stepAnim() {
            //console.log(type);
            if (cursor < len) {
                //console.log("cursor: " + way[ cursor ]);

                switch (type) {
                    case "pos_x":
                        ObjSet(obj, { pos_x: way[ cursor ] });
                        break;
                    case "pos_y":
                        ObjSet(obj, { pos_y: way[ cursor ] });
                        break;
                    case "pos_z":
                        ObjSet(obj, { pos_z: way[ cursor ] });
                        break;
                    case "alp":
                        ObjSet(obj, { alp: way[ cursor ] });
                        break;
                    case "angle":
                        ObjSet(obj, { angle: way[ cursor ] });
                        break;
                    case "scale_x":
                        ObjSet(obj, { scale_x: way[ cursor ] });
                        break;
                    case "scale_y":
                        ObjSet(obj, { scale_y: way[ cursor ] });
                        break;
                    case "drawoff_x":
                        ObjSet(obj, { drawoff_x: way[ cursor ] });
                        break;
                    case "drawoff_y":
                        ObjSet(obj, { drawoff_y: way[ cursor ] });
                        break;
                    case "width":
                        ObjSet(obj, { width: way[ cursor ] });
                        break;
                    case "height":
                        ObjSet(obj, { height: way[ cursor ] });
                        break;
                }
                cursor++;
            } else {
                if (loop) {
                    cursor = 0;
                } else {
                    tmr_global.removeEventListener(currentRoom, stepAnim);
                    cb();
                }
            }
        }
        // Проверить что творится в массивах
        anims[obj] = anims[obj] || [];

        if (anims[obj][type]) {
            tmr_global.removeEventListener(currentRoom, anims[obj][type]);
        }
        anims[obj][type] = stepAnim;

        tmr_global.addEventListener(currentRoom, stepAnim);
    }
}