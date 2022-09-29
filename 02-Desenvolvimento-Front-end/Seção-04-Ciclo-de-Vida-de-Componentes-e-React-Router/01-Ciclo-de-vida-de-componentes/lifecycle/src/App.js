import React from 'react';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      loading: true,
      user: [],
    }
  }

  fetchRandomUser = async () => {
    const endPoint = 'https://api.randomuser.me/';
    const response = await fetch(endPoint);
    const data = await response.json();
    this.setState({ 
      user: data.results[0],
      loading: false,
    })
  };

  componentDidMount() {
    this.fetchRandomUser();
  };

  render() {
    const { loading, user } = this.state;
    const { name, location, email, login, dob } = user 
    return(
      <div>
        <h1>API test in LifeCycle</h1>
        { loading 
          ? <div>Loading...</div> 
          : <div>
              <h2>User information</h2>
              <p>Name: { name.title } { name.first } { name.last }</p>
              <p>Age: { dob.age }</p>
              <p>User login: { login.username }</p>
              <p>Email: { email }</p>
            </div>
        }
      </div>
    );
  }
}

export default App;
