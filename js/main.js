
window.onload= function() {
    init();
    addEvents();
};
var btnRecommend, RecommendationsList,ideas,li;
function init()
{
    btnRecommend=document.getElementById('btnRecommend');
    RecommendationsList=document.getElementById('RecommendationsList');
   
    li = document.createElement('LI');
}
function addEvents(){
btnRecommend.addEventListener("click", function(){
    ideas=document.getElementById('ideas').value;
    console.log(ideas);
    if(ideas==null||ideas=="")
    {
        console.log("Recommendation=empty");
    }
    else{
        console.log(ideas);
        li.textContent=ideas;
        RecommendationsList.appendChild(li);
    }

});
    
}