var CounterOne = React.createClass({
    getDefaultProps: function() {
      console.log('Domyślne propsy (np. domyślne zdjęcie kontaktu)');
    },

    getInitialState: function() {
        return {
            counter: 0
        };
    },

    componentWillMount: function() {
      console.log('Początkowa konfiguracja aplikacji');
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },

    render: function() {
        return React.createElement('div', {},
          React.createElement('button', {onClick: this.increment}, "+"),
          React.createElement('span', {}, 'Licznik ' + this.state.counter),
          React.createElement('button', {onClick: this.decrement}, "-"),
        );
    },

    componentDidMount: function() {
      console.log('Załadowanie danych z serwera');
    },

    componentWillReceiveProps: function() {
      console.log('Modyfikowanie propsów i ustawianie stanów na ich podstawie');
    },

    shouldComponentUpdate: function() {
      console.log('Sprawdzanie kiedy component powinien się "odświeżyc" ');
      return true;
    },

    componentWillUpdate: function() {
      console.log('Podobnie do componentWillReceiveProps ale bez dostępu do poprzednich propsów');
    },

    componentDidUpdate: function() {
      console.log('Update DOM w związku ze zmianą propsów i stanów');
    },

    componentWillUnmount: function() {
      console.log('Czyszczenie niepotrzebnych elementów');
    }

});

var element = React.createElement(CounterOne);
ReactDOM.render(element, document.getElementById('app'));

var elementTwo = React.createElement(CounterOne);
ReactDOM.render(elementTwo, document.getElementById('appTwo'));
