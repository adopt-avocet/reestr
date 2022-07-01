const mainTable = document.querySelector(".main_table");

mainTable.addEventListener('dblclick', function(event) {
    let elem = event.target;
   
    if(elem.parentElement.classList.contains("more_info_item") && elem.tagName == "P"){
        
        let str = elem.innerHTML;
        let textarea = document.createElement("textarea");
        textarea.value = str;
        textarea.style.width = "70%";
        
        elem.replaceWith(textarea);

    }
    
});