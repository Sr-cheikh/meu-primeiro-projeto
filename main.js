function tooggleMode(){
    const html = document.documentElement
    html.classList.toggle("light")

    // pegar teg img
    const img = document.querySelector("#profile img")

    // substituor a imagem
    if(html.classList.contains("light")){
        // se tiver light mode adicionar a imagem light
        img.setAttribute("src", "./asets/avatar-light.png")
    }else{
        // se tiver sem light mode manter a imagem normal
        img.setAttribute("src", "./asets/avatar.png")
    }
}