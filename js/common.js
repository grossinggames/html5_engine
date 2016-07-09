/* ******************** Комнаты ******************** */
// Все комнаты
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

// Получить имя текущей комнаты
function GetCurrentRoom() {
    return currentRoom;
}

/* ******************** Звуки ******************** */

// Типы звуков
var sounds = [];
sounds["sfx"] = [];
sounds["env"] = [];
sounds["snd"] = [];
sounds["voc"] = [];

// Получить тип звука
function GetTypeSound(path) {
    var type = path.substr(7, 3);
    if ( (type == "sfx") || (type == "env") ||
        (type == "snd") || (type == "voc") ) {
        return type;
    }
    return false;
}

// Воспроизвести звук
function PlaySound(path, loop) {
    var type = GetTypeSound(path);
    if (type) {
        sounds[type][path] = sounds[type][path] || new Audio(path);
        sounds[type][path].loop = loop;
        sounds[type][path].currentTime = 0;
        sounds[type][path].muted = false;
        sounds[type][path].play();
    }
}

// Остановить звук
function StopSound(path) {
    var type = GetTypeSound(path);
    if (type) {
        sounds[type][path] = sounds[type][path] || new Audio(path);
        sounds[type][path].muted = true;
    }
}

// Остановить все звуки
function StopAllSounds() {
    StopAllSfx();
    StopAllSEnv();
    StopAllSnd();
    StopAllVoc();
}

// Остановить все Sfx
function StopAllSfx() {
    for (path in sounds["sfx"]) {
        StopSound(path);
    };
}

// Остановить все Env
function StopAllSEnv() {
    for (path in sounds["env"]) {
        StopSound(path);
    };
}

// Остановить все Snd
function StopAllSnd() {
    for (path in sounds["snd"]) {
        StopSound(path);
    };
}

// Остановить все Voc
function StopAllVoc() {
    for (path in sounds["voc"]) {
        StopSound(path);
    };
}

/* ******************** Настройки ******************** */

// Установить полноэкранный режим
function SetFullScreen(fs) {
    DbgTrace("SetFullScreen");
}

// Получить режим экрана
function GetFullScreen() {
    DbgTrace("GetFullScreen");
}

// Установить курсор
function SetCursor(id) {
    DbgTrace("SetCursor");
}

/* ******************** Объекты ******************** */

// Допустимые параметры объектов
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
    res:            "background-image",
    popup:          "title",
    cursor:         "cursor",
    font_family:    "font-family",
    font_style:     "font-style",
    font_weight:    "font-weight",
    font_stretch:   "font-stretch",
    font_size:      "font-size",
    text:           "text"
};

// Типы курсора
var cursorType = {
    default:    "default",
    hand:       "pointer"
};

// Установка параметров объекту
function ObjSet(objname, params) {
    var obj = document.getElementById(objname);

    for (var key in params) {
        var value = params[key];

        switch (key) {
            case "name":
                obj.id = value;
                break;
            case "popup":
                obj.title = value;
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
            case "pos_x":
            case "pos_y":
            case "drawoff_x":
            case "drawoff_y":
            case "width":
            case "height":
            case "font_size":
                obj.style[ properties[key] ] = value + "px";
                break;
            case "res":
                obj.style[ properties[key] ] = "url(" + value + ")";
                break;
            case "alp":
                obj.style[ properties[key] ] = value;
                break;
            case "cursor":
                obj.style[ properties[key] ] = cursorType[value];
                break;
            case "font_family":
            case "font_style":
            case "font_weight":
            case "font_stretch":
                obj.style[ properties[key] ] = value;
                break;
            case "text":
                obj.innerText = value;
                break;
            default:
                DbgTrace('ObjSet Ошибка default ' + key + ': ' + properties[key]);
                break;
        }
    }
}

// Получение параметров объекта
function ObjGet(objname) {
    var obj = document.getElementById(objname);
    var result = {};

    for (key in properties) {
        switch (properties[key]) {
            case "id":
                result[key] = obj.id;
                break;
            case "title":
                result[key] = obj.title;
                break;
            case "z-index":
                result[key] = Number(obj.style[ properties[key] ]);
                break;
            case "rotate":
                //obj.style.transform = obj.style.transform.replace(/rotate\(\w+(.\w+)?\)/g, "rotate(" + value + "deg)");
                break;
            case "scaleX":
                //obj.style.transform = obj.style.transform.replace(/scaleX\(\w+(.\w+)?\)/g, "scaleX(" + value + ")");
                break;
            case "scaleY":
                //obj.style.transform = obj.style.transform.replace(/scaleY\(\w+(.\w+)?\)/g, "scaleY(" + value + ")");
                break;
            case "pointer-events":
                if (obj.style[ properties[key] ] == "none") {
                    result[key] = 0;
                } else {
                    result[key] = 1;
                }
                break;
            case "display":
                if (obj.style[ properties[key] ] == "none") {
                    result[key] = 0;
                } else {
                    result[key] = 1;
                }
                break;
            case "onmousedown":
            case "onmouseup":
            case "onmouseover":
            case "onmouseout":
                break;
            case "top":
            case "left":
            case "background-position-x":
            case "background-position-y":
            case "width":
            case "height":
            case "font-size":
                result[key] = Number( obj.style[ properties[key] ].replace("px", "") );
                break;
            case "background-image":
                result[key] = obj.style[ properties[key] ];
                break;
            case "opacity":
                result[key] = Number(obj.style[ properties[key] ]);
                break;
            case "cursor":
                if (obj.style[ properties[key] ] == "default") {
                    result[key] = "default";
                } else if (obj.style[ properties[key] ] == "pointer") {
                    result[key] = "hand";
                }
                break;
            case "font-family":
            case "font-style":
            case "font-weight":
            case "font-stretch":
                result[key] = obj.style[ properties[key] ];
                break;
            case "text":
                result[key] = obj['innerHTML'];
                break;
            default:
                DbgTrace('ObjGet Ошибка default ' + key + ': ' + properties[key]);
                break;
        }
    };
    return result;
}

// Прицепить объект к родителю
function ObjAttach(objname, toobjname) {
    DbgTrace("ObjAttach");
}

// Отцепить объект
function ObjDetach(objname) {
    DbgTrace("ObjDetach");
}

// Удалить объект
function ObjDelete(objname) {
    DbgTrace("ObjDelete");
}

// Логгирование
function DbgTrace(msg) {
    console.log(msg);
}

// Время обновления параметров
var TIME_UPDATE = 20;

var anims = [];

// Анимирование объекта
// (Важно! объект должен быть заанимирован только в своей комнате и иметь правильное имя )
// Пример: room_example spr_example_spritename
function ObjAnimate(obj, type, loop, relative, cb, anm) {
    if (anm.length % 3 == 0) {
        var arrayAnim = [];

        // Создание массива из элементов [время, значение]
        // Добавить учет второго параметра [0,0,100, 1,0,200] - ускорения, замедления, линейно
        for (var i = 0; i < anm.length; i += 3) {
            var tmp = [ anm[ i ], anm[ i + 2 ] ];
            //DbgTrace(tmp);
            arrayAnim.push(tmp);
        }

        // Создание массива из таких элементов [время, значение, шаг]
        for (var i = 0; i < arrayAnim.length; i++) {
            var step = 0;

            if (i) {
                var diffTime = (arrayAnim[ i ][ 0 ] - arrayAnim[ i - 1 ][ 0 ]);
                var diffValue = (arrayAnim[ i ][ 1 ] - arrayAnim[ i - 1 ][ 1 ]);

                var counter = Math.floor( (diffTime * 1000) / TIME_UPDATE);
                step = (diffValue / counter).toFixed(6);
            }

            arrayAnim[ i ].push(step);
        }
        var way = [ arrayAnim[ 0 ][ 1 ] ];

        // Создание пути
        for (var i = 0; i + 1 < arrayAnim.length; i++) {
            var step = Number(arrayAnim[ i + 1 ][ 2 ]);
            var stepWay = arrayAnim[ i ][ 1 ];
            var needWay = arrayAnim[ i + 1 ][ 1 ];
            var diffTime = (arrayAnim[ i + 1 ][ 0 ] - arrayAnim[ i ][ 0 ]) * 1000;

            while ( (stepWay != needWay) || (diffTime > 0) ) {
                stepWay = (Number(stepWay) + step).toFixed(6);

                if (step > 0) {
                    if (stepWay > needWay) {
                        stepWay = needWay;
                        diffTime = 0;
                    }
                } else if (step < 0) {
                    if (stepWay < needWay) {
                        stepWay = needWay;
                        diffTime = 0;
                    }
                } else {
                    diffTime -= TIME_UPDATE;
                    if (diffTime <= 0) {
                        diffTime = 0;
                        stepWay = needWay;
                    }
                }
                way.push(stepWay);
            }
        }
        var cursor = 0;
        var len = way.length;

        // Установить новые значения
        function stepAnim() {
            if (cursor < len) {
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
                    tmr_global.removeEventListener(room, stepAnim);
                    cb();
                }
            }
        }
        // Проверить что творится в массивах
        anims[obj] = anims[obj] || [];

        var room = "room_" + obj.match(/_[^_]+_/)[0].match(/[^_]+/)[0];

        if (anims[obj][type]) {
            tmr_global.removeEventListener(room, anims[obj][type]);
        }
        anims[obj][type] = stepAnim;
        tmr_global.addEventListener(room, stepAnim);
    }
}