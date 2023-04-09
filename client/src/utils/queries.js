import {gql} from "appolo/client";

export const Me = gql`
query Query{
    me {
        id
        username
        email
        bookcount
        savedBooks{
            authors
            description
            bookId
            image 
            title
            link
    }
}
}
`;


