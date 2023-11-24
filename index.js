function set_label(ui_name, pos_x, pos_y, font_size)
{
    var label = document.getElementById(ui_name + "-label");
    var input = document.getElementById(ui_name + "-input");
    label.style.position = "absolute";

    label.style.left = pos_x + "px";
    label.style.top = pos_y + "px";
    label.style.fontSize = font_size + "px";
    label.innerText = input.value;
}

function set_pic(ui_name)
{
    var input = document.getElementById(ui_name + "-input");
    var pic = document.getElementById(ui_name + "-pic");
    var reader = new FileReader();

    reader.onload = function () { pic.setAttribute("src", this.result); }
    reader.readAsDataURL(input.files[0]);
}

function set_input_event(ui_name, pos_x, pos_y, font_size)
{
    var input = document.getElementById(ui_name + "-input");
    input.addEventListener("input", function () { set_label(ui_name, pos_x, pos_y, font_size); });
}

function set_input_value(ui_name, value)
{
    var input = document.getElementById(ui_name + "-input");
    input.value = value;
    input.dispatchEvent(new Event("input"));
}

function set_pic_event(ui_name)
{
    var input = document.getElementById(ui_name + "-input");
    input.addEventListener("input", function () { set_pic(ui_name); });
}

function set_pie_graph_event(pie_id_name, input_ui_name)
{
    var input = document.getElementById(input_ui_name + "-input");
    input.addEventListener("input", function ()
    {
        var pie = document.getElementById(pie_id_name);
        pie.style.backgroundImage = input.value;
    });
}

function test_button_event()
{
    set_input_value("country-name", "大ゲルマン帝国");
    set_input_value("faction-name", "Einheitspakt");
    set_input_value("leader-name", "Reichstag Emargency Council");
    set_input_value("party-name", "NSDAP");
    set_input_value("party-popularities", "conic-gradient(from 120deg, #503200 0% 75%, #341950 75% 90%, #843200 90% 100%)");
    set_input_value("ideology-name", "国家社会主義");
    set_input_value("next-election", "Any elections by event.");
    set_input_value("national-focus-name", "国家方針が未設定");
    set_input_value("news-title", "ドイツ内戦");
    set_input_value("news-description", "アドルフ・ヒトラーの死後、帝国は大混乱に陥った。総統が正統な後継者を指名したのにも関わらず、帝国内における強力な派閥が自分たちの未来像で国家を導こうと互いに武装蜂起を開始した。ゲルマニアからの命令を無視して、それぞれの指導者に忠誠を誓う部隊によって国家は引き裂かれている。状況の深刻さはまだ分からないが、帝国は中央集権の完全な崩壊に直面しているか、あるいは既に崩壊しているのかもしれない。\n\n帝国の東方政府についてはまだ見通しが立っていないが、ゲルマニアとその他の地域からの連絡が途絶えた事によって、それらの地域にも運命の時が訪れるのではないかという憶測がなされている。しかし現在確かな事実は欧州の巨人が大陸を分断させたという事だ。");
    set_input_value("news-button", "確かなる帝国の終焉だ。");
    set_input_value("super-event-title", "ドイツ内戦");
    set_input_value("super-event-description", "国家の存立に比べて、自分の自我が重要でないことを自覚する必要がある。\n- アドルフ・ヒトラー");
    set_input_value("super-event-button", "So it begins");

    document.getElementById("country-flag-pic").setAttribute("src", "./assets/sample/GER.png");
    document.getElementById("country-leader-pic").setAttribute("src", "./assets/sample/Portrait_Germany_Reichstag_Emergency_Council.png");
    document.getElementById("ideology-icon-pic").setAttribute("src", "./assets/sample/national_socialism_group.png");
    document.getElementById("national-focus-icon-pic").setAttribute("src", "./assets/sample/goal_unknown.png");
    document.getElementById("news-pic").setAttribute("src", "./assets/sample/news_event_german_civil_war.png");
    document.getElementById("super-event-pic").setAttribute("src", "./assets/sample/german_civil_war.png");
}

window.onload = function ()
{
    document.getElementById("test-button").addEventListener("click", test_button_event);
    set_input_event("country-name", 220, -5, 14);
    set_input_event("faction-name", 220, 15, 14);
    set_input_event("leader-name", 220, 35, 14);
    set_input_event("party-name", 235, 68, 20);
    set_input_event("ideology-name", 235, 93, 20);
    set_input_event("next-election", 235, 118, 20);
    set_input_event("national-focus-name", 234, 163, 20);
    set_input_event("news-title", 103, 295, 15);
    set_input_event("news-description", 240, 340, 10);
    set_input_event("news-button", 230, 679, 12);
    set_input_event("super-event-title", 530, 0, 20);
    set_input_event("super-event-description", 595, 360, 19);
    set_input_event("super-event-button", 720, 548, 19);
    set_pic_event("country-flag");
    set_pic_event("country-leader");
    set_pic_event("ideology-icon");
    set_pic_event("national-focus-icon");
    set_pic_event("news");
    set_pic_event("super-event");
    set_pie_graph_event("pie-graph", "party-popularities");
};