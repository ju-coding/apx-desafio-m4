function getWorks() {
    return fetch("https://cdn.contentful.com/spaces/tr4sul3ot20e/environments/master/entries?access_token=ZjWuxKsLpfNACBg7bFpxR1cq3wpF0YYx1nsN2m83UC8&content_type=work")
    .then((res)=>{return res.json()})
    .then((data)=>{
        const fields = data.items.map((item)=>{
            const imgData = data.includes.Asset.find((asset)=>asset.sys.id == item.fields.img.sys.id)
            return {
                title: item.fields.title,
                text: item.fields.description.content[0].content[0].value,
                link: item.fields.url,
                img: imgData? imgData.fields.file.url : ""
            }
        })
        return fields
    })
}
function main() {
    const mainEl = document.querySelector(".main");
    createHeader(mainEl);
    openMenu()
    closeMenu()
    const portfolioBoxEl = document.querySelector(".portfolio__box");
    getWorks().then((work)=>{
        return work.forEach((el)=>createWorkCard(portfolioBoxEl, el))
    })
    const footerSectionEl = document.querySelector(".footer-section");
    createFooter(footerSectionEl);
}
main()