class StoryBox extends React.Component {
  render() {
    
    const now = new Date();
    const topicList = ['HTML', 'Javascript', 'React'];

    return ( 
      <div>
          <h3>Stories</h3>
          <p className="lead">
              current time: {now.toTimeString()}
          </p>    
        <ul>
          {topicList.map( topic => <li>{topic}</li> )}
        </ul>
      </div>
    );
  }
}

ReactDOM.render(
  <StoryBox />, document.getElementById('story-app')
);