let addLogo = document.querySelector('.addLocal')
let logoFile = document.querySelector('#Local')
let boxLogo = document.querySelector('#boxLocal')

console.log(logoFile)

logoFile.addEventListener('change', (e)=>{
    const preview = document.querySelector('#preview-image')

    if(preview){
        preview.remove()
        
    }

    const logoTarget = e.target
    const file = logoTarget.files[0]


     const reader = new FileReader()

    reader.addEventListener('load', (e)=>{
        const readerTarget = e.target
        var previewImage = document.createElement('img')
        previewImage.setAttribute('src', readerTarget.result)
        previewImage.setAttribute('class', 'imgLocal')
        previewImage.id = 'preview-image'
        boxLogo.appendChild(previewImage)

    })
    
    reader.readAsDataURL(file)


    console.log(file)
    // let previewImage = document.createElement('img')
    // previewImage.setAttribute('src', logo.value)
    // previewImage.setAttribute('class', 'imgLogo')
    // boxLogo.appendChild(previewImage)
})
