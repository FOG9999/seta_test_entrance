const findStringsLengthMost = (arr) => {
    let lengthAndElems = [];
    arr.forEach(elem => {
        let lengs = lengthAndElems.map((le, index) => le.len);
        let indexOfElem = lengs.indexOf(elem.length);
        if(indexOfElem < 0){
            lengthAndElems.push({
                len: elem.length,
                elems: [elem]
            })
        }
        else {
            lengthAndElems[indexOfElem].elems.push(elem);
        }
    })
    let result = [...lengthAndElems[0].elems];
    let currMaxLenth = lengthAndElems[0].elems.length;
    lengthAndElems.forEach(le => {
        if(le.elems.length > currMaxLenth){
            result = [...le.elems],
            currMaxLenth = le.elems.length
        }
    })
    return result;
}
