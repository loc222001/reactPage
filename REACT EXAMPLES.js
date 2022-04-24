ReactDOM
.createRoot(document.getElementById('root'))
.render(<h1>Hello, world!</h1>);

const element = <h1>Hello, world!</h1>;

const name = 'Josh Perez';
const element = <h1>Hello, {name}</h1>;

function formatName(user) {
return user.firstName + ' ' + user.lastName;
}

const user = {
firstName: 'Harper',
lastName: 'Perez'
};

const element = (
<h1>
    Hello, {formatName(user)}!  </h1>
);

function getGreeting(user) {
if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;  }
return <h1>Hello, Stranger.</h1>;}

const element = <a href="https://www.reactjs.org"> link </a>;

const element = <img src={user.avatarUrl}></img>;

const title = response.potentiallyMaliciousInput;
// This is safe:
const element = <h1>{title}</h1>;

const root = ReactDOM.createRoot(
    document.getElementById('root')
  );
  
  function tick() {
    const element = (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
    root.render(element);}
  
  setInterval(tick, 1000);
  
  class Welcome extends React.Component {
    render() {
      return <h1>Hello, {this.props.name}</h1>;
    }
  }

  function Welcome(props) {  return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name="Sara" />;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element);

function Comment(props) {
    return (
      <div className="Comment">
        <div className="UserInfo">
          <img className="Avatar"
            src={props.author.avatarUrl}
            alt={props.author.name}
          />
          <div className="UserInfo-name">
            {props.author.name}
          </div>
        </div>
        <div className="Comment-text">
          {props.text}
        </div>
        <div className="Comment-date">
          {formatDate(props.date)}
        </div>
      </div>
    );
  }






















































