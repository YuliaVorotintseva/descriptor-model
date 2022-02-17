import React from 'react'

const Home = props => {
  return (
    <main className="container">
      <div class='content'>
        {
          !props.isAuthenticated
          ? <h1>You are not an authorized user</h1>
          : <h1>Welcome, {props.name}</h1>
        }
        <h1 className="text-white text-uppercase text-center my-4">HOME PAGE</h1>
      </div>
    </main>
  );
}

export default Home