//console.log('common is load');

/* ******************** Комнаты ******************** */

// Перейти в комнату
function SwitchRoom(room) {
    console.log('SwitchRoom');
}

// Получить текущую комнату
function GetCurrentRoom() {
    console.log('GetCurrentRoom');
}

/* ******************** Звуки ******************** */

// Воспроизвести мелкие звуки
function PlaySfx(path, loop) {
    console.log('PlaySfx');
}

// Воспроизвести окружение
function PlayEnv(path, loop) {
    console.log('PlayEnv');
}

// Воспроизвести саундрек
function PlaySoundtrack(path, loop) {
    console.log('PlaySoundtrack');
}

// Воспроизвести Голос
function PlayVoice(path, loop) {
    console.log('PlayVoice');
}

/* ******************** Вывод текста ******************** */

// Показать всплывающий текст
function ShowPopup(id) {
    console.log('ShowPopup');
}

// Скрыть всплывающий текст
function HidePopup() {
    console.log('HidePopup');
}

/* ******************** Настройки ******************** */

// Установить полноэкранный режим
function SetFullScreen(fs) {
    console.log('SetFullScreen');
}

// Получить режим экрана
function GetFullScreen() {
    console.log('GetFullScreen');
}

// Установить громкость звука
function SetSoundVolume(group, volume) {
    console.log('SetSoundVolume');
}

// Получить громкость звука
function GetSoundVolume(group) {
    console.log('GetSoundVolume');
}

// Установить курсор
function SetCursor(id) {
    console.log('SetCursor');
}

/* ******************** Объекты ******************** */

var properties = {
    name:           "id",
    pos_x:          "left",
    pos_y:          "top",
    pos_z:          "z-index",
    alp:            "opacity",
    scale_x:        "scaleX",
    scale_y:        "scaleY",
    input:          "pointer-events",
    drawoff_x:      "background-position-x",
    drawoff_y:      "background-position-y",
    event_mdown:    "onmousedown",
    event_mup:      "onmouseup",
    event_menter:   "onmouseover",
    event_mleave:   "onmouseout",
    width:          "width",
    height:         "height",
    src:            "background-image"
};

// Установка параметров объекту
function ObjSet(objname, params) {
    //console.log('ObjSet');
    var obj = document.getElementById(objname);

    for (var key in params) {
        //console.log('key = ', key);
        //console.log('properties[key] = ', properties[key]);

        var value = params[key];
        obj[key] = value;

        obj.color = "rgb(155, 102, 102)";

        switch (key) {
            case 'name':
                obj.id = value;
                break;

            case 'pos_x':
            case 'pos_y':
                obj.style[ properties[key] ] = value + 'px';
                break;

            case 'scale_x':
            case 'scale_y':
                // Затирается значение transform в результате все очищается кроме этого значения
                obj.style.transform += properties[key] + '(' + value + ')';
                break;

            case 'input':
                if (value) {
                    obj.style[ properties[key] ] = 'auto';
                } else {
                    obj.style[ properties[key] ] = 'none';
                }
                break;

            case 'event_mdown':
            case 'event_mup':
            case 'event_menter':
            case 'event_mleave':
                obj[ properties[key] ] = value;
                break;

            case 'drawoff_x':
            case 'drawoff_y':
                obj.style[ properties[key] ] = value + 'px';
                break;

            case 'width':
            case 'height':
                obj.style[ properties[key] ] = value + 'px';
                break;

            case 'src':
                obj.style[ properties[key] ] = 'url(images/' + value + ')';
                break;

            case 'alp':
                if (value == true) value = 1;
                if (value == false) value = 0;
                obj.style[ properties[key] ] = value;
                break;

            default:
                console.log('properties[key] = ' + properties[key]);
                obj.style[ properties[key] ] = value;
                break;
        }
    }
}

// Получение параметров объекта
function ObjGet(objname) {
    console.log('ObjGet');
    //console.log('111 ', document.getElementById("spr_main_provider_uis").style.left);
    //console.log('222 ', document.getElementById("spr_main_provider_uis").style.top);
}

// Прицепить объект к родителю
function ObjAttach(objname, toobjname) {
    console.log('ObjAttach');
}

// Отцепить объект
function ObjDetach(objname) {
    console.log('ObjDetach');
}

// Удалить объект
function ObjDelete(objname) {
    console.log('ObjDelete');
}

// Анимирование объекта
function ObjAnimate(obj, anim, loop, relative, cb, anmobj) {
    console.log('ObjAnimate');

    var array = [0,200, 2,400, 3,100, 4,500];

    if (array.length % 2 == 0) {
        var TIME_UPDATE = 20; // Время обновления
        var arrayAnim = [];


        // Создание массива из элементов [время, значение]
        for (var i = 0; i < array.length; i += 2) {
            var tmp = [ array[ i ], array[ i + 1 ] ];
            console.log(tmp);
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
                    console.log('Ошибка Шаг равен нулю');
                }
                way.push(stepWay);
            }
        }

        console.log(way);

        var cursor = 0;
        var len = way.length;

        function stepAnim() {
            if (cursor < len) {
                console.log('cursor: ' + way[ cursor ]);

                var anim = 'pos_x';
                var onj = 'spr_main_provider_uis';

                switch (anim) {
                    case 'pos_x':
                        ObjSet(obj, { pos_x: way[ cursor ] });
                        break;

                    case 'pos_y':
                        ObjSet(obj, { pos_y: 0.8 });
                        break;

                    case 'pos_z':
                        ObjSet(obj, { pos_z: 0.8 });
                        break;

                    case 'alp':
                        ObjSet(obj, { alp: 0.8 });
                        break;

                    case 'scale_x':
                        ObjSet(obj, { scale_x: 0.8 });
                        break;

                    case 'scale_y':
                        ObjSet(obj, { scale_y: 0.8 });
                        break;

                    case 'drawoff_x':
                        ObjSet(obj, { drawoff_x: 0.8 });
                        break;

                    case 'drawoff_y':
                        ObjSet(obj, { drawoff_y: 0.8 });
                        break;

                    case 'width':
                        ObjSet(obj, { width: 0.8 });
                        break;

                    case 'height':
                        ObjSet(obj, { height: 0.8 });
                        break;
                }

            } else {
                console.log('Останавливаем интервал');
                clearInterval(interval);
            }
            cursor++;
        }

        var interval = setInterval(stepAnim, TIME_UPDATE);
    }
}

/*
window.onload = function () {
    //console.log('common window.onload');
}
*/