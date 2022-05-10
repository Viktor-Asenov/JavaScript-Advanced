function objectFactory(library, orders) {
    return orders.map(compose);

    function compose(order) {
        const result = Object.assign({}, order.template);

        for (let part of order.parts) {
            result[part] = library[part];
        }

        return result;
    }
}