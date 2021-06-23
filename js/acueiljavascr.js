function menuResponsive()
{
    var r=document.getElementById('menu');
    if (r.className==="topmenu")
    {
        r.className+=" resp";
    }
    else{
        r.className="topmenu";
    }
}