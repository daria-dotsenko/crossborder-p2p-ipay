// JavaScript

const userNameInput = document.getElementById('user_name');
const userCountryInput = document.getElementById('user_country');
const userAddressInput = document.getElementById('user_address');
const usernameCards = document.querySelectorAll('.username-card:not(.username-card--active)');

usernameCards.forEach(card => {
    card.addEventListener('click', updateCard);
});

function updateCard() {
    // get the data of the card clicked on
    const cardName = this.querySelector('.username-card__title').textContent;
    const country = this.querySelector('.username-card__country').textContent;
    const address = this.querySelector('.username-card__address').textContent;

    // get the data of the active (selected) card
    const activeUsernameCard = document.querySelector('.username-card--active');
    if (activeUsernameCard) {
        const activeCardName = activeUsernameCard.querySelector('.username-card__title').textContent;
        const activeCountry = activeUsernameCard.querySelector('.username-card__country').textContent;
        const activeAddress = activeUsernameCard.querySelector('.username-card__address').textContent;

        // replace data on the clicked card with data from the active card
        this.querySelector('.username-card__title').textContent = activeCardName;
        this.querySelector('.username-card__country').textContent = activeCountry;
        this.querySelector('.username-card__address').textContent = activeAddress;

        // replace data on the active card with data from the selected card
        activeUsernameCard.querySelector('.username-card__title').textContent = cardName;
        activeUsernameCard.querySelector('.username-card__country').textContent = country;
        activeUsernameCard.querySelector('.username-card__address').textContent = address;
    }

    // update the inputs
    userNameInput.value = cardName;
    userCountryInput.value = country;
    userAddressInput.value = address;
}

// jQuery

// $(document).ready(function() {
//     $('.username-card').on('click', function() {
//         updateCard($(this));
//     });
//
//     function updateCard(card) {
//         const cardName = card.find('.username-card__title').text();
//         const country = card.find('.username-card__country').text();
//         const address = card.find('.username-card__address').text();
//
//         $('#user_name').val(cardName);
//         $('#user_country').val(country);
//         $('#user_address').val(address);
//
//         const usernameCard = $('#sender-title-card-active');
//         usernameCard.find('[data-user-name]').text(cardName);
//         usernameCard.find('[data-user-country]').text(country);
//         usernameCard.find('[data-user-address]').text(address);
//     }
// });