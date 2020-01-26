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

const sample = document.querySelector("#sample_id");

function getClassesOfElement(element) {
    const array = [];
    const classNamesArray = element.className;
    array.push(classNamesArray);
    return array;
}
console.log(getClassesOfElement(sample));

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
