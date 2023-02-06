let word=""
function whenclicked(element)
{

    word=word+document.getElementById(element).value.toString();

}
function addtoList(){
    if (word!="")
    {
        let parent = document.createElement('li');
        parent.appendChild(document.createTextNode(word));
        document.getElementById("list").appendChild(parent);
        word = "";
    }

}