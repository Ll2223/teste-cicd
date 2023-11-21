document.getElementById('purchaseForm').addEventListener('submit', function (e) {
      e.preventDefault();
      const dateInput = document.getElementById('date');
      const timeInput = document.getElementById('time');
      const quantityInput = document.getElementById('quantity');
      const confirmation = document.getElementById('confirmation');
      if (!dateInput.value || !timeInput.value || !quantityInput.value) {
        confirmation.innerText = 'Por favor, preencha todos os campos!';
      } else {
        const quantity = parseInt(quantityInput.value);
        const ticketPrice = 20; // Preço de cada ingresso (R$20,00)
        const cost = quantity * ticketPrice;
        confirmation.innerText = 'Ingresso(s) comprado(s) com sucesso!';
        confirmation.innerHTML += `<br>Total gasto: R$${cost.toFixed(2)}`;
      }
    });

//TESTEEEEEE
