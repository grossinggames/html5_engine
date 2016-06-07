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

        switch(key) {
            case 'name':
                obj.id = value;
                break;

            case 'pos_x':
            case 'pos_y':
                obj.style[ properties[key] ] = value + 'px';
                break;

            case 'scale_x':
            case 'scale_y':
                obj.style.transform = properties[key] + '(' + value + ')';
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

/*
pos_x
pos_y
pos_z
pos_xy
scale_x
scale_y
scale
angle
alpha
color_r
color_g
color_b
color_rgb
*/

// Анимирование объекта
function ObjAnimate(objname, animtype, looped, relative, cb, animobj) {
    console.log('ObjAnimate');
}
/*
window.onload = function () {
    //console.log('common window.onload');
}
*/