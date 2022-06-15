class Ticket {
    constructor(destination, price, status) {
        this.destination = destination;
        this.price = price;
        this.status = status;
    }
}

function tickets(tickets, sortCriteria) {
    const arrOfTickets = [];
    for (let ticket of tickets) {
        const tokens = ticket.split('|');
        let destination = tokens[0];
        let price = Number(tokens[1]);
        let status = tokens[2];

        let currentTicket = new Ticket(destination, price, status);

        arrOfTickets.push(currentTicket);
    }

    if (sortCriteria == 'destination') {
        arrOfTickets.sort((a, b) => a.destination.localeCompare( b.destination));
    } else if (sortCriteria == 'price') {
        arrOfTickets.sort((a, b) => a.price - b.price);
    } else if (sortCriteria == 'status') {
        arrOfTickets.sort((a, b) => a.status.localeCompare(b.status));
    }
    
    for (const ticket of arrOfTickets) {
        console.log(ticket)
    }
    //return arrOfTickets;
}

tickets(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'status'
)