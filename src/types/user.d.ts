interface User {
    id: string,
    name: string,
    email: string,
    address: Address,
    phone: string,
    website: string,
    company: Company
}

type Address = {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: object
}

type Company = {
    name: string,
    catchPhrase: string,
    bs: string
}