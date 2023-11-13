

const userNameInput = document.getElementById('user_name');
const userCountryInput = document.getElementById('user_country');
const userAddressInput = document.getElementById('user_address');
const usernameCards = document.querySelectorAll('.username-card:not(.username-card--active)');

usernameCards.forEach(card => {
    card.addEventListener('click', updateCard);
});

function updateCard() {
    const cardName = this.querySelector('.username-card__title').textContent;
    const country = this.querySelector('.username-card__country').textContent;
    const address = this.querySelector('.username-card__address').textContent;

    userNameInput.value = cardName;
    userCountryInput.value = country;
    userAddressInput.value = address;

    const usernameCard = document.getElementById('sender-title-card-active');
    usernameCard.querySelector('[data-user-name]').textContent = cardName;
    usernameCard.querySelector('[data-user-country]').textContent = country;
    usernameCard.querySelector('[data-user-address]').textContent = address;
}