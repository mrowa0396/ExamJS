//4a

const sampl = document.querySelectorAll('.sample_class');

function getTagsOfElements(elements) {

    const sampleTagsArray = [];
    for (i = 0; i < elements.lenght; i++) {
        sampleTagsArray.push(elements[i].tagName)
    }


}
getTagsOfElements(sampl);

return sampleTagsArray;




//4b

const sampleid = document.querySelectorAll('sample_id').classList;

function getTagsOfIds(elements) {

    const sampleTagsArray = [];
    for (i = 0; i < elements.lenght; i++) {
        sampleTagsArray.push(elements[i])
    }


}
console.log(sampleTagsArray);
return sampleTagsArray;

}

getTagsOfIds(sampleid);

//4c 

const sample_list = document.querySelectorAll('.sample_class_2 li');

function getInnerTextsOfElements(elements) {

    const sampleTagsArray = [];
    for (i = 0; i < elements.lenght; i++) {
        sampleTagsArray.push(elements[i])
    }


}

return sampleTagsArray;

}

getInnerTextsOfElements(sample_list);


//4d

const IvanGrozny = document.querySelectorAll('a');
function getAddressesOfElements(elements) {

    const sampleTagsArray = [];
    for (i = 0; i < elements.lenght; i++) {
        sampleTagsArray.push(elements[i].href)
    }


}

return sampleTagsArray;

}

getAddressesOfElements(IvanGrozny);


//4e 

const dzieci = document.querySelector('.sample_class_3').children;
getTagsOfElements(dzieci);
