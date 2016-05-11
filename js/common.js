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

/*
name        blendmode     inputrect_init      drawoff_x
pos_x       attachtype    inputrect_x         drawoff_y
pos_y       active        inputrect_y
pos_z       input         inputrect_w         event_mdown
ang         visible       inputrect_h         event_mup
scale_x     drag                              event_menter
scale_y     realdrag      croprect_init       event_mleave
alp                       croprect_x          event_menter_drag
color_r                   croprect_y          event_mleave_drag
color_g                   croprect_w          event_dragdrop
color_b                   croprect_h          event_drag
*/

var properties = {
    name:     "id",
    pos_x:    "left",
    pos_y:    "top",
    pos_z:    "index-z",
    alp:      "opacity",
    scale_x:  "scaleX"
};

// Установка параметров объекту
function ObjSet(objname, params) {
    //console.log('ObjSet');
    var obj = document.getElementById(objname);

    for (var key in params) {
        var value = params[key];
        obj[key] = value;
        //obj.style[ properties[key] ] = value + 'px';
        obj.style[ properties[key] ] = value;
    }

    //document.getElementById("main_provider_uis").style.left = "50px";
    //document.getElementById("main_provider_uis").style.top = "50px";
}

// Получение параметров объекта
function ObjGet(objname) {
    console.log('ObjGet');
    //console.log('111 ', document.getElementById("main_provider_uis").style.left);
    //console.log('222 ', document.getElementById("main_provider_uis").style.top);
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
function ObjAnimate(objname, animtype, looped, relative, cb, { animobj }) {
    console.log('ObjAnimate');
}
/*
window.onload = function () {
    //console.log('common window.onload');
}
*/