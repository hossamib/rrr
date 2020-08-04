function makeLine(length) {
    var line = "";
    for (var j = 1; j <= length; j++) {
        line += "* ";
    }
    return line + "\n";
}

function buildTriangle(widest) {
    var lines = "";
    for (var i = 1; i <= widest; i++) {
        lines += makeLine(i);
    }
    return "\n" + lines + "\n";
}

console.log(buildTriangle(10));