function loadFile(input) {

    console.log(input);
    let file = input.files[0];

    console.log(input);

    let newImage = document.createElement("img"); //새 이미지 추가

    //이미지 source 가져오기
    newImage.src = URL.createObjectURL(file);
    newImage.id = "img-id"
    newImage.style.width = "100%";
    newImage.style.height = "100%";
    newImage.style.objectFit = "cover";

    let container = document.getElementById('thumbnail-preview');
    container.appendChild(newImage);
}

function getOptions(value) {
    if (value === "fruits") {
        return [
            { value: 'apple', text: 'Apple' },
            { value: 'banana', text: 'Banana' },
            { value: 'orange', text: 'Orange' }
        ];
    } else if (value === "vegetables") {
        return [
            { value: 'carrot', text: 'Carrot' },
            { value: 'lettuce', text: 'Lettuce' },
            { value: 'potato', text: 'Potato' }
        ];
    } else {
        return [{ value: '', text: 'Please select an option first' }];
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const parentSelect = document.getElementById('parentSelect');
    const childSelect = document.getElementById('childSelect');

    let parentSelectValue = "";


    parentSelect.addEventListener(('change'), function () {
        parentSelectValue = this.value;
        childSelect.disabled = false;

        let options = getOptions(parentSelectValue);

        childSelect.innerHTML = '';

        options.forEach((function (option) {
            let newOption = document.createElement('option');

        }));
    });
})