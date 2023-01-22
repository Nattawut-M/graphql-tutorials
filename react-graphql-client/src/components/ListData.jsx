import React from "react";
import { useQuery, gql } from "@apollo/client";

const QUERY_ALL_USERS = gql`
  query GetUserList {
    getUserList {
      id
      name
      username
      age
      nationality
    }
  }
`;

function ListData() {
  const query = useQuery(QUERY_ALL_USERS);
  console.log(query);
  return (
    <div>
      {query.loading ? (
        <p>loading ....</p>
      ) : (
        <div className='user-data'>
          <ul>
            {query.data.getUserList.map((user, idx) => {
              return <div key={idx}>
                <h3>{user.name}</h3>
                <p>{user.username}, {user.age}</p>
                <p>{user.nationality}</p>
              </div>;
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ListData;
