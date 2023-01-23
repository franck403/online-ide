let editor;

window.onload = function() {
    editor = ace.edit("editor");
    editor.setTheme("https://franck403.github.io/online-ide/ace/theme/monokai");
    editor.session.setMode("https://franck403.github.io/online-ide/ace/mode/c_cpp");
}

function changeLanguage() {

    let language = $("#languages").val();

    if(language == 'c' || language == 'cpp')editor.session.setMode("https://franck403.github.io/online-ide/ace/mode/c_cpp");
    else if(language == 'php')editor.session.setMode("https://franck403.github.io/online-ide/ace/mode/php");
    else if(language == 'python')editor.session.setMode("https://franck403.github.io/online-ide/ace/mode/python");
    else if(language == 'node')editor.session.setMode("https://franck403.github.io/online-ide/ace/mode/javascript");
}

function executeCode() {

    $.ajax({

        url: "https://franck403.github.io/online-ide/ide/app/compiler.php",

        method: "POST",

        data: {
            language: $("#languages").val(),
            code: editor.getSession().getValue()
        },

        success: function(response) {
            $(".output").text(response)
        }
    })
}
