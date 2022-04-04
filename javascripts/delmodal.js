const modalByDel = document.querySelector("#deleteModal");
modalByDel.addEventListener("show.bs.modal", function (e) {
  const button = e.relatedTarget;
  const orderId = button.dataset.bsOrderId;
  console.log(button, orderId);
  const modalText = modalByDel.querySelector("#deleteText");

  modalText.textContent = orderId;
});
