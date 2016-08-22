var my_news = [
    {
        author: 'Саша Печкин',
        text: 'В четверг, четвертого числа...'
    },
    {
        author: 'Просто Вася',
        text: 'Считаю, что $ должен стоить 35 рублей!'
    },
    {
        author: 'Гость',
        text: 'Бесплатно. Скачать. Лучший сайт - http://localhost:3000'
    }
];
var News = React.createClass({
    render: function(){
        var data = this.props.data;
        var news_template;
        if(data.length > 0) {
            news_template = data.map(function (data, index) {
                return (
                    <div key={index}>
                        <p>{data.author}</p>
                        <p>{data.text}</p>
                    </div>
                )
            });
        }
        else{
            news_template = <p>К сожалению новостей нет</p>
        }
        return(
            <div className='news'>
                {news_template}
                <strong className={ data.length>0 ? '' : 'none' }>Всего новостей: {data.length}</strong>
            </div>
        )
    }
});
var App = React.createClass({
    render: function(){
        return(
            <div id='app'>
                <h3>App News</h3>
                <News data={my_news}/>
            </div>
        )
    }
});
ReactDOM.render(
    <App />,
    document.getElementById('container')
);