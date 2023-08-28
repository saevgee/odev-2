const toastError = document.getElementsByClassName("toast error hide");
const toastSuccess = document.getElementsByClassName("toast success hide");
function newElement() {
  const taskDOM = document.getElementById("task");
  const listItem = document.createElement("li");
  const listDOM = document.getElementById("list");
  if (taskDOM.value !== "" && taskDOM.value.trim() !== "") {
    //boş ekleme yapılmaz, boşluk yazılarak (space'le) listeye ekleme yapılmaz
    listDOM.appendChild(listItem);
    listItem.textContent = taskDOM.value;
    taskDOM.value = "";
    $(toastSuccess).toast("show"); // #element demiş kullanımında, success ya da error diye js dom elemanı oluşturulup; duruma göre yazılacak : ID olması şart değil, deneme-yanılma.
    const closeBtn = document.createElement("span");
    closeBtn.innerHTML = `&times`;
    //çarpı ikonu yazdırdık span'e, verilen css'e uyarlıyoruz
    closeBtn.classList.add("close"); // varolan stili elemana tanımla
    listItem.appendChild(closeBtn);
    closeBtn.addEventListener("click", function () {
      if (listItem.classList.contains("checked")) listItem.remove(); // item yapılmışsa silinsin diye koşul ekledim, daha güzel çalışabilir
    });
    // li'nin checked class'ı olmalı... öyleymiş
    listItem.addEventListener("click", function (event) {
      if (event.target.tagName != "SPAN") listItem.classList.toggle("checked"); // AYE!!! close alanını ayırdık checked yapılacak alandan
      // tıklandığında sınıfın özelliklerini ata/atama toggle'la.
    });
  } else $(toastError).toast("show");
}
