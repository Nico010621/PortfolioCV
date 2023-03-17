const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible");
      if (navMenu.classList.contains("nav-menu_visible")) {
    navToggle.setAttribute("aria-label", "Cerrar menú");
      } else {
    navToggle.setAttribute("aria-label", "Abrir menú");
  }
});
function cambiarColorBoton(parameter) {
      if (parameter == "clickBtnHome") {
          let btnHome = document.getElementById('btnHome');
          btnHome.classList.add("cambiar-color-btn")
          btnAboutMe.classList.remove("cambiar-color-btn")
          btnProject.classList.remove("cambiar-color-btn")
          btnContact.classList.remove("cambiar-color-btn")
      };
    if (parameter == "clickBtnAboutMe") {
          let btnAboutMe = document.getElementById('btnAboutMe');
          btnAboutMe.classList.add("cambiar-color-btn")
          btnHome.classList.remove("cambiar-color-btn")
          btnProject.classList.remove("cambiar-color-btn")
          btnContact.classList.remove("cambiar-color-btn")
      };
      if (parameter == "clickBtnProject") {
          let btnProject = document.getElementById('btnProject');
          btnProject.classList.add("cambiar-color-btn")
          btnHome.classList.remove("cambiar-color-btn")
          btnAboutMe.classList.remove("cambiar-color-btn")
          btnContact.classList.remove("cambiar-color-btn")
      };
      if (parameter == "clickBtnContact") {
          let btnContact = document.getElementById('btnContact');
          btnContact.classList.add("cambiar-color-btn")
          btnHome.classList.remove("cambiar-color-btn")
          btnProject.classList.remove("cambiar-color-btn")
          btnAboutMe.classList.remove("cambiar-color-btn")
      }
}
function showCv(parameter){
      if (parameter == "openCv") {
       let containerPdf = document.getElementById('pdf-container');
       containerPdf.classList.remove("container-embed");
       containerPdf.classList.add("container-embed__show");
       let btnOpenCv = document.getElementById('btn-showCv');
       btnOpenCv.classList.remove("div-aboutMe__btnOpen");
       btnOpenCv.classList.add("div-aboutMe__btnOpenNo");
       let btnCloseCv = document.getElementById('btn-closeCv');
       btnCloseCv.classList.remove("div-aboutMe__btnClose");
       btnCloseCv.classList.add("div-aboutMe__btnCloseShow");
       let modificacionDiv = document.getElementById('div-aboutMe__pdf');
       modificacionDiv.classList.add("displ-flexColum")
      }
      if (parameter == "closeCv"){
            let containerPdf = document.getElementById('pdf-container');
            containerPdf.classList.add("container-embed");
            containerPdf.classList.remove("container-embed__show");
            let btnOpenCv = document.getElementById('btn-showCv');
            btnOpenCv.classList.add("div-aboutMe__btnOpen");
            btnOpenCv.classList.remove("div-aboutMe__btnOpenNo");
            let btnCloseCv = document.getElementById('btn-closeCv');
            btnCloseCv.classList.add("div-aboutMe__btnClose");
            btnCloseCv.classList.remove("div-aboutMe__btnCloseShow");
            let modificacionDiv = document.getElementById('div-aboutMe__pdf');
            modificacionDiv.classList.remove("displ-flexColum")
      }
}