function RGB() {
    let prg = document.getElementById("bodyCart");
    if (prg.style.color == "black" || prg.style.color == "blue")
    {
        prg.style.color = "green";
        return;
    }
    if (prg.style.color == "green")
    {
        prg.style.color = "red";
        return;
    }
    if (prg.style.color == "red")
    {
        prg.style.color = "blue";
        return;
    }
    else prg.style.color = "black";
}