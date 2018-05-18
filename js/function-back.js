function goBack() {
    let tempfullScreenShow = document.getElementById("fullScreenShow");
    tempfullScreenShow.style.visibility = "hidden";

    let tempdeleteTableSpring = document.getElementById("tablePriceSpring");
    tempdeleteTableSpring.remove();

    let tempdeleteTableSummer = document.getElementById("tablePriceSummer");
    tempdeleteTableSummer.remove();

    let tempdeleteTableAutumn = document.getElementById("tablePriceAutumn");
    tempdeleteTableAutumn.remove();

    let tempdeleteTableWinter = document.getElementById("tablePriceWinter");
    tempdeleteTableWinter.remove();
}