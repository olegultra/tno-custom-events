function set_label(ui_name, pos_x, pos_y, font_size, is_center)
{
    var label = document.getElementById(ui_name + "-label");
    var input = document.getElementById(ui_name + "-input");
    label.style.position = "absolute";

    if (is_center)
    {
        // TODO
        label.style.left = pos_x + "px";
        label.style.top = pos_y + "px";
    }
    else
    {
        label.style.left = pos_x + "px";
        label.style.top = pos_y + "px";
    }

    label.style.fontSize = font_size + "px";

    label.innerText = input.value;
}

function set_input_event(ui_name, pos_x, pos_y, font_size, is_center)
{
    var input = document.getElementById(ui_name + "-input");
    input.addEventListener("input", function() { set_label(ui_name, pos_x, pos_y, font_size, is_center); });
}

function set_input_value(ui_name, value)
{
    var input = document.getElementById(ui_name + "-input");
    input.value = value;
    input.dispatchEvent(new Event("input"));
}

function test_button_event()
{
    set_input_value("country-name", "大ゲルマン帝国");
    set_input_value("faction-name", "Einheitspakt");
    set_input_value("leader-name", "Reichstag Emargency Council");
    set_input_value("party-name", "NSDAP");
    set_input_value("ideology-name", "国家社会主義");
    set_input_value("next-election", "Any elections by event.");
    set_input_value("national-focus-name", "国家方針が未設定");
}

window.onload = function()
{
    document.getElementById("test-button").addEventListener("click", test_button_event);
    set_input_event("country-name", 230, -5, 12, false);
    set_input_event("faction-name", 230, 15, 12, false);
    set_input_event("leader-name", 230, 35, 12, false);
    set_input_event("party-name", 260, 72, 20, false);
    set_input_event("ideology-name", 260, 100, 20, false);
    set_input_event("next-election", 260, 128, 20, false);
    set_input_event("national-focus-name", 260, 170, 20, true);
};