class Quote {
    define (db) {
        db.define("quote", {
            text: {
                type: "text",
                required: true
            }
        })
    }

    associate (db) {
        let {quote,category} = db.models
        quote.hasOne("category", category, {autoFetch: true, reverse: "quote"})

        let {character} = db.models
        quote.hasOne("character", character, {autoFetch: true, reverse: "quote"})
    }
}

module.exports = new Quote()