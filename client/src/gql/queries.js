import {gql} from "@appolo/client";

export const Me = gql`
query Query{
    me {
        id
        username
        email
        bookCount
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


