/**
 * Created by semenov-k on 22.08.2016.
 */
var TestClass = React.createClass({
    render: function(){
        return(<h2>test - {this.props.text}</h2>);
    }
});
ReactDOM.render(
    <TextClass text="main" />,
    document.getElementById('container')
);
