export function drawGalleryItem(item) {
    const itemElement = document.createElement('div')
    itemElement.classList = "gallery-item"

    const resourceWrapElement = document.createElement('div')
    resourceWrapElement.classList = "gallery-item_resource"

    if (item.type === "image") {
        const imgElement = documet.createElement('img')
        imgElement.classList = "gallery-item__image"
        imgElement.src = item.resource
        resourceWrapElement.appendChild(imgElement)
    } else if (item.type === "audio") {
        const audioElement = document.createElement('audio')
        audioElement.classList = "gallery-item__audio"
        audioElement.src = item.resource
        audioElement.controls = true
        resourceWrapElement.appendChild(audioElement)
    }

    const imgElement = document.createElement('img')
    imgElement.classList = "gallery-item__image"
    imgElement.src = item.resource

    const titleElement = document.createElement('span')
    titleElement.classList = "gallery-item__title"
    titleElement.textContent = item.title

    itemElement.appendChild(resourceWrapElement)
    itemElement.appendChild(titleElement)

    return itemElement
}