var inputs = [];
for(var i = 1 ; i <=6 ; i++)
{
    inupts.push(document.getElementById("para1_input_box_" + i).value)
}
inupts.join(". ");
document.getElementById("showParagraph1").innerHTML = inupts.join(". ");