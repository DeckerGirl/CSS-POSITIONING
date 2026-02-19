// Show / Hide Filter Menu
function showFilter()
{
    var filter =
        document.getElementById("filterContent");

    if (filter.style.display === "none" || filter.style.display === "")
        filter.style.display = "block";
    else
        filter.style.display = "none";
}




// Show / Hide Add Article Form
function showAddNew()
{
    var form =
        document.getElementById("newContent");

    if (form.style.display === "none" || form.style.display === "")
        form.style.display = "flex";
    else
        form.style.display = "none";
}




// Filter Articles
function filterArticles()
{
    var opinion =
        document.getElementById("opinionCheckbox").checked;

    var recipe =
        document.getElementById("recipeCheckbox").checked;

    var update =
        document.getElementById("updateCheckbox").checked;



    var opinionArticles =
        document.getElementsByClassName("opinion");

    var recipeArticles =
        document.getElementsByClassName("recipe");

    var updateArticles =
        document.getElementsByClassName("update");



    for (var i = 0; i < opinionArticles.length; i++)
    {
        opinionArticles[i].style.display =
            opinion ? "block" : "none";
    }



    for (var i = 0; i < recipeArticles.length; i++)
    {
        recipeArticles[i].style.display =
            recipe ? "block" : "none";
    }



    for (var i = 0; i < updateArticles.length; i++)
    {
        updateArticles[i].style.display =
            update ? "block" : "none";
    }
}




// Add New Article
function addNewArticle()
{

    var title =
        document.getElementById("inputHeader").value;

    var text =
        document.getElementById("inputArticle").value;



    var type = "";

    if (document.getElementById("opinionRadio").checked)
        type = "opinion";

    if (document.getElementById("recipeRadio").checked)
        type = "recipe";

    if (document.getElementById("lifeRadio").checked)
        type = "update";



    // Create new article
    var article =
        document.createElement("article");

    article.className = type;



    // Marker
    var marker =
        document.createElement("span");

    marker.className = "marker";

    if (type === "opinion")
        marker.innerText = "Opinion";

    if (type === "recipe")
        marker.innerText = "Recipe";

    if (type === "update")
        marker.innerText = "Update";



    // Title
    var h2 =
        document.createElement("h2");

    h2.innerText = title;



    // Text
    var p =
        document.createElement("p");

    p.innerText = text;



    // Add to article
    article.appendChild(marker);
    article.appendChild(h2);
    article.appendChild(p);



    // Add to page
    document.getElementById("articleList")
        .appendChild(article);



    // Clear form
    document.getElementById("inputHeader").value = "";
    document.getElementById("inputArticle").value = "";

}
