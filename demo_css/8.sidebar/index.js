const showMenu = (toggleId,navbarId,bodyId)=>{
    const toggle = document.getElementById(toggleId),
    navbar = document.getElementById(navbarId);
    bodypadding = document.getElementById(bodyId);
    // 侧边栏展开和收缩
    if(toggle && navbar){
        toggle.addEventListener('click',()=>{
            navbar.classList.toggle('expander')
            bodypadding.classList.toggle('body-pd')
        })
    }
}

showMenu('nav-toggle','navbar','body-pd')


const linkColor = document.querySelectorAll(".nav_link")
function colorLink(){
    linkColor.forEach(l=> l.classList.remove('active'))
    this.classList.add('active')
}
linkColor.forEach(l=> l.addEventListener('click',colorLink))

const linkCollapse = document.getElementsByClassName('collapse_link')
var i

// 侧边栏中的子项目的展开和收缩
for(i=0;i<linkCollapse.length;i++){
    linkCollapse[i].addEventListener('click', function () {
        const collapseMenu = this.nextElementSibling
        collapseMenu.classList.toggle('showCollapse') // 展开项目
        const rotate = collapseMenu.previousElementSibling
        rotate.classList.toggle("rotate") // 箭头旋转
    })
}