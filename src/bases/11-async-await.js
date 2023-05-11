

const getImagen = async() => {


    try {
        const apiKey = 'gKfkdQGdc3lDK82YUAcai2dCr1vIyQPz';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const {data} = await resp.json()
    
        const {url} = data.images.original
        const img = document.createElement("img")
        img.src = url
    
        document.body.append(img)
    } catch (error) {
        // MAnejo del error
        console.error(error);
    }


}



getImagen()





