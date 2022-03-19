import cardCashGames from './../assets/img/card-cash-games.jpg';
import cardTournament from './../assets/img/card-tournament.png';
import cardMembership from './../assets/img/card-membership.jpg';

import dollar from './../assets/img/PikPng-2.png';
import deck from './../assets/img/PikPng-1.png';
import joker from './../assets/img/PikPng-3.png';

export const dataCards = [
    {
        id: 1,
        title: 'cash games',
        img: cardCashGames,
        icon: dollar,
        description: 'Cash games have no designated start or stop time. They happen round the clock in online poker rooms as well as at tables in casinos.',
    },
    {
        id: 2,
        title: 'tournaments',
        img: cardTournament,
        icon: deck,
        description: 'Poker tournaments differ from cash games in that each player pays an entry fee then competes to win a portion of the prize pool.',
    },
    {
        id: 3,
        title: 'membership',
        img: cardMembership,
        icon: joker,
        description: 'As a Royal Spades VIP Member, You Get a Chance to Win a Share of $100,000 in Cash & Prizes Each Month.',
    },
];
