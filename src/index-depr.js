let koalaContainer = <div className = "ui items"></div>


// Koala Card
// koalas are in './public/koalas.js'
koalas.forEach(koala => {
    let koalaCard = <div className = "item"></div>
    
    koalaCard.style.cursor = 'pointer';

    // Koala Card Image
    let imageContainer = <div className = "img" src = "koala"></div>
    
    koalaImage.setAttribute('src', koala.imageURL)

    imageContainer.append(koalaImage)

    // Koala Card Content
    let koalaContent = <div className = "content"></div>
    
    let header = <div className = "header"></div>
    // i dont know where to put this
    header.append(koala.name)

    let descriptionParagraph = <p>{koala.description}</p>
    descriptionParagraph.append(koala.description)

    let descriptionContainer = <div className = "description"></div>
    descriptionContainer.setAttribute('class', 'description')
    descriptionContainer.append(descriptionParagraph)

    koalaContent.append(
        header,
        descriptionContainer
    )

    koalaCard.append(
        imageContainer,
        koalaContent
    )

    koalaContainer.append(koalaCard)
})

document.body.append(koalaContainer)